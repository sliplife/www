webpackJsonp([6],{1302:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),c=n.n(a),u=n(186),p=(n.n(u),n(52)),l=n(118),s=n(74),f=n(51);n.d(t,"default",function(){return w});var d,h,m,y,b=function(){return{}},E=function(e){return{dispatch:e,actions:{alert:n.i(l.a)(f.d,e),auth:n.i(l.a)(f.a,e)}}},w=(d=n.i(p.connect)(b,E))((y=m=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.componentDidMount=function(){var e=this;setTimeout(function(){return e.handleLogout()},1e3)},t.prototype.handleLogout=function(){this.props.actions.auth.logout(),this.props.dispatch(n.i(u.push)("/login"))},t.prototype.render=function(){return c.a.createElement(s.k,null,c.a.createElement(s.k.Column,{width:"4",only:"computer"}),c.a.createElement(s.k.Column,{width:"16",computer:"8"},c.a.createElement(s.b,{attached:"bottom"},c.a.createElement(s.d,{icon:!0},c.a.createElement(s.h,{name:"circle notched",loading:!0}),c.a.createElement(s.d.Content,null,c.a.createElement(s.d.Header,null,"Signing you out"),"Your session is being destroyed.")))),c.a.createElement(s.k.Column,{width:"4",only:"computer"}))},t}(c.a.Component),m.propTypes={actions:a.PropTypes.object.isRequired,dispatch:a.PropTypes.func.isRequired},h=y))||h}});