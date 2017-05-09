webpackJsonp([7],{1299:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(74),s=n.n(i),l=n(0),c=n.n(l),p=n(51),u=n(186),d=(n.n(u),n(118)),h=n(73),m=(n.n(h),n(62)),f=n(574);n.d(t,"default",function(){return C});var y,g,b,E,w=function(e){return{auth:e.auth}},v=function(e){return{dispatch:e,actions:{alert:n.i(d.a)(m.d,e),auth:n.i(d.a)(m.a,e)}}},C=(y=n.i(p.connect)(w,v))((E=b=function(e){function t(n){a(this,t);var r=o(this,e.call(this,n));return r.state={email:"",password:"",isLoading:!1,redirectTo:r.props.location.query.redirect||"/"},r.handleLogin=r.handleLogin.bind(r),r.handleChange=r.handleChange.bind(r),r}return r(t,e),t.prototype.componentWillMount=function(){this.props.auth.user&&this.props.dispatch(n.i(u.push)(this.state.redirectTo))},t.prototype.componentDidMount=function(){f.a.done()},t.prototype.hasValidationError=function(e){return!(!s()(this.props.error,"validation.keys")||!this.props.error.validation.keys.includes(e))},t.prototype.handleLogin=function(e){var t=this;e.preventDefault(),this.setState({isLoading:!0},function(){var e=t.state,a=e.email,o=e.password;t.props.actions.auth.login({email:a,password:o}).then(function(){return t.props.dispatch(n.i(u.push)(t.state.redirectTo))}).catch(function(e){t.setState({isLoading:!1}),t.props.actions.alert.error(e.message)})})},t.prototype.handleChange=function(e){var t;this.setState((t={},t[e.target.name]=e.target.value,t))},t.prototype.render=function(){return c.a.createElement(h.Grid,null,c.a.createElement(h.Grid.Column,{width:"4",only:"computer"}),c.a.createElement(h.Grid.Column,{width:"16",computer:"8"},c.a.createElement(h.Segment,{stacked:!0,attached:"bottom"},c.a.createElement(h.Form,{autoComplete:"off"},c.a.createElement(h.Form.Field,{error:this.hasValidationError("email")},c.a.createElement("label",null,"Email"),c.a.createElement(h.Input,{icon:"mail",iconPosition:"left",name:"email",onChange:this.handleChange,placeholder:"Email",type:"text",value:this.state.email})),c.a.createElement(h.Form.Field,{error:this.hasValidationError("password")},c.a.createElement("label",null,"Password"),c.a.createElement(h.Input,{className:"left icon",icon:"lock",label:c.a.createElement(f.b,{to:"/recovery",className:"ui tag label"},c.a.createElement(h.Icon,{name:"help circle",style:{marginRight:0}})),labelPosition:"right",name:"password",onChange:this.handleChange,placeholder:"Password",type:"password",value:this.state.password})),c.a.createElement(h.Button,{fluid:!0,primary:!0,disabled:this.state.isLoading,loading:this.state.isLoading,onClick:this.handleLogin,content:"Login"}))),c.a.createElement(h.Message,{style:{textAlign:"center"}},"New to us? ",c.a.createElement(f.b,{to:"/signup"},"Sign Up"))),c.a.createElement(h.Grid.Column,{width:"4",only:"computer"}))},t}(c.a.Component),b.propTypes={auth:l.PropTypes.object,error:l.PropTypes.any,dispatch:l.PropTypes.func.isRequired,actions:l.PropTypes.object.isRequired,location:l.PropTypes.object.isRequired},g=E))||g}});