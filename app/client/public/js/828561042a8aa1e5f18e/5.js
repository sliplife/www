webpackJsonp([5],{1281:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),c=n.n(a),u=n(185),s=(n.n(u),n(51)),p=n(117),l=n(71),f=(n.n(l),n(94));n.d(t,"default",function(){return w});var h,d,y,b,g=function(){return{}},m=function(e){return{dispatch:e,actions:{alert:n.i(p.a)(f.b,e),auth:n.i(p.a)(f.a,e)}}},w=(h=n.i(s.connect)(g,m))((b=y=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){var e=this;setTimeout(function(){return e.handleLogout()},1e3)},t.prototype.handleLogout=function(){this.props.actions.auth.logout(),this.props.dispatch(n.i(u.push)("/login"))},t.prototype.render=function(){return c.a.createElement(l.Segment,{attached:"bottom"},c.a.createElement(l.Message,{icon:!0},c.a.createElement(l.Icon,{name:"circle notched",loading:!0}),c.a.createElement(l.Message.Content,null,c.a.createElement(l.Message.Header,null,"Signing you out"),"Your session is being destroyed.")))},t}(c.a.Component),y.propTypes={actions:a.PropTypes.object.isRequired,dispatch:a.PropTypes.func.isRequired},d=b))||d}});