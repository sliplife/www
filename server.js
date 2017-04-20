const Hapi = require('hapi');
const Glob = require('glob');
const Config = require('config');

const server = new Hapi.Server();

server.app.config = Config;
server.event({ channels: 'sliplife', name: 'register' });
server.connection({
  port: server.app.config.port,
  labels: ['www', 'website'],
  routes: {
    cors: {
      origin: ['*']
    }
  }
});

const plugins = Glob.sync('*', { cwd: 'app', absolute: true });
for (const register of plugins) {
  const plugin = require(register);
  server.register(plugin, (error) => {

    if (error) {
      throw error;
    }
    server.emit({ channel: 'sliplife', name: 'register' }, plugin.register.attributes);
    console.log(plugin.register.attributes);
  });
}

server.start((error) => {

  if (error) {
    throw error;
  }
});
