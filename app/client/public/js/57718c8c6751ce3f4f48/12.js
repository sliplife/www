webpackJsonp([12],{1308:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n.n(a),c=n(51),l=n(52),p=n(117),u=n(73),m=(n.n(u),n(62)),d=n(573);n.d(e,"default",function(){return v});var f,h,g,y,b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},E=function(t){return b({},t.listings)},P=function(t){return{actions:{listings:n.i(p.a)(m.b,t)}}},v=(f=n.i(c.connect)(E,P))((y=g=function(t){function e(){var n,i,a;o(this,e);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=i=r(this,t.call.apply(t,[this].concat(c))),i.state={isLoading:!0},a=n,r(i,a)}return i(e,t),e.prototype.componentDidMount=function(){var t=this;this.props.actions.listings.read(this.props.routeParams.id,{with:"uploads"}).then(function(){return t.setState({isLoading:!1},d.a.done)})},e.prototype.componentWillUnmount=function(){this.setState({isLoading:!0})},e.prototype.componentWillReceiveProps=function(t){var e=this;t.routeParams.id!==this.props.routeParams.id&&this.setState({isLoading:!0},function(){e.props.actions.listings.read(t.routeParams.id,{with:"uploads"}).then(function(){return e.setState({isLoading:!1},d.a.done)})})},e.prototype.render=function(){var t=!0!==this.state.isLoading&&this.props.listing.uploads[0]?this.props.listing.uploads[0].url+"?width=480&height=398":"/assets/images/image.png";return!0===this.state.isLoading?s.a.createElement(u.Segment,{attached:"bottom"},s.a.createElement(d.c,null)):s.a.createElement("div",null,s.a.createElement(u.Segment,{attached:"bottom"},s.a.createElement(u.Item.Group,null,s.a.createElement(u.Item,null,s.a.createElement(u.Item.Image,{as:l.c,to:"/listings/"+this.props.listing.id,src:t,label:{color:"red",corner:"right",icon:"anchor"}}),s.a.createElement(u.Item.Content,null,s.a.createElement(u.Item.Header,{as:l.c,to:"/listings/"+this.props.listing.id},this.props.listing.city),s.a.createElement(u.Item.Meta,null,s.a.createElement("span",{className:"cinema"},this.props.listing.state)),s.a.createElement(u.Item.Description,null,this.props.listing.description),s.a.createElement(u.Item.Extra,null,s.a.createElement(u.Label,{color:"orange"},"New"),s.a.createElement(u.Label,null,"Rack")))))),s.a.createElement(u.Segment,null,s.a.createElement(u.Button,{onClick:l.a.goBack,content:"Back",icon:"left arrow",labelPosition:"left",secondary:!0,fluid:!0})))},e}(s.a.Component),g.propTypes={actions:a.PropTypes.object.isRequired,children:a.PropTypes.object,listing:a.PropTypes.object.isRequired,routeParams:a.PropTypes.object.isRequired},h=y))||h}});