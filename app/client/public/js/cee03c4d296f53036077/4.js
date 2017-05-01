webpackJsonp([4],{1341:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(64),s=n.n(i),l=n(0),c=n.n(l),p=n(80),u=n(158),d=(n.n(u),n(81)),h=n(150),f=n(100),m=(n.n(f),n(149)),g=n(985);n.d(t,"default",function(){return j});var y,E,b,v,w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},C=function(e){return w({},e.auth)},P=function(e){return{dispatch:e,actions:{alert:n.i(h.bindActionCreators)(m.d,e),auth:n.i(h.bindActionCreators)(m.a,e)}}},j=(y=n.i(p.connect)(C,P))((v=b=function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.state={email:"",verificationEmail:"",password:"",isLoading:!1,redirectTo:o.props.location.query.redirect||"/"},o.handleSignup=o.handleSignup.bind(o),o.handleChange=o.handleChange.bind(o),o}return o(t,e),t.prototype.componentWillMount=function(){m.a.isAuthenticated()&&this.props.dispatch(n.i(u.push)(this.state.redirectTo))},t.prototype.componentDidMount=function(){g.a.done()},t.prototype.hasValidationError=function(e){return!(!s()(this.props.error,"validation.keys")||!this.props.error.validation.keys.includes(e))},t.prototype.handleSignup=function(e){var t=this;e.preventDefault(),this.setState({isLoading:!0},function(){var e=t.state,a=e.email,r=e.verificationEmail,o=e.password;t.props.actions.auth.signup({email:a,verificationEmail:r,password:o}).then(function(){return t.props.actions.auth.login({email:a,password:o})}).then(function(){return t.props.dispatch(n.i(u.push)(t.state.redirectTo))}).catch(function(e){t.setState({isLoading:!1}),t.props.actions.alert.error(e.message)})})},t.prototype.handleChange=function(e){var t;this.setState((t={},t[e.target.name]=e.target.value,t))},t.prototype.render=function(){return c.a.createElement("div",null,c.a.createElement(f.Segment,{stacked:!0,attached:"bottom"},c.a.createElement(f.Form,{autoComplete:"off"},c.a.createElement(f.Form.Group,{widths:"equal"},c.a.createElement(f.Form.Field,{error:this.hasValidationError("email")},c.a.createElement("label",null,"Email"),c.a.createElement(f.Input,{icon:"mail",iconPosition:"left",name:"email",onChange:this.handleChange,placeholder:"Email address",type:"text",value:this.state.email})),c.a.createElement(f.Form.Field,{error:this.hasValidationError("verificationEmail")},c.a.createElement("label",null,"Confirm Email"),c.a.createElement(f.Input,{name:"verificationEmail",onChange:this.handleChange,placeholder:"Re-enter email address",type:"text",value:this.state.verificationEmail}))),c.a.createElement(f.Form.Field,{error:this.hasValidationError("password")},c.a.createElement("label",null,"Password"),c.a.createElement(f.Input,{icon:"lock",iconPosition:"left",name:"password",onChange:this.handleChange,placeholder:"New password",type:"password",value:this.state.password})),c.a.createElement(f.Button,{fluid:!0,primary:!0,loading:this.state.isLoading,disabled:this.state.isLoading,onClick:this.handleSignup,content:"Sign Up"}))),c.a.createElement(f.Message,{style:{textAlign:"center"}},"Already have an account? ",c.a.createElement(d.Link,{to:"/login"},"Log In")))},t}(c.a.Component),b.propTypes={error:l.PropTypes.object,dispatch:l.PropTypes.func.isRequired,actions:l.PropTypes.object.isRequired,location:l.PropTypes.object.isRequired},E=v))||E}});