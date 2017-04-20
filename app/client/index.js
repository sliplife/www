const Path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const Dust = require('dustjs-linkedin');
Dust.config.cache = false;
require('dustjs-helpers');
require('dust-intl').registerWith(Dust);
const internals = {
  routes: require('./routes')
};

const plugin = (sliplife, options, nextPlugin) => {

  sliplife.register([Inert, Vision], (error) => {

    if (error) {
      throw error;
    }
    sliplife.select('www').route(internals.routes);
    sliplife.views({
      engines: {
        dust: {
          module: {
            compile: (template, compileOptions, compileCallback) => {
              // Compile the requested view template.
              const compiled = Dust.compileFn(template, compileOptions && compileOptions.name);
              compileCallback(null, (templateContext, compilerOptions, callback) => {
                // Return compiled template to hapi.
                compiled(templateContext, callback);
              });
            },
            // Register partials.
            registerPartial: (name, data) => Dust.compileFn(data, name),
            // Register view helpers.
            registerHelper: (name, helper) => {
              // Is the method a dust helper or filter?
              const type = (helper.length > 1) ? 'helpers' : 'filters';
              // Add to dust helpers.
              Dust[type][name] = helper;
            }
          },
          // Tell hapi dust is an async template engine.
          compileMode: 'async'
        }
      },
      // Set caching configuration.
      isCached: false,
      // Set view paths.
      path: Path.join(__dirname, 'views'),
      partialsPath: Path.join(__dirname, 'views', 'partials'),
      helpersPath: Path.join(__dirname, 'views', 'helpers'),
      // Make request object available to every view context.
      context: function (request) {

        return { request };
      }
    });
    nextPlugin();
  });
};

plugin.attributes = {
  name: 'client',
  dependencies: []
};

exports.register = plugin;
