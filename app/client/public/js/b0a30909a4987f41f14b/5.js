webpackJsonp([5],{1298:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=o(73),i=o.n(s),p=o(0),c=o.n(p),l=o(51),u=o(185),d=(o.n(u),o(52)),h=o(71),f=(o.n(h),o(117)),m=o(72),w=o(571);o.d(t,"default",function(){return k});var y,g,v,P,b=function(e){return{auth:e.auth,tokens:e.tokens}},E=function(e){return{dispatch:e,actions:{alert:o.i(f.a)(m.b,e),auth:o.i(f.a)(m.a,e),tokens:o.i(f.a)(m.f,e)}}},k=(y=o.i(l.connect)(b,E))((P=v=function(e){function t(o){n(this,t);var r=a(this,e.call(this,o));return r.state={isLoading:!1,email:"",password:"",verificationPassword:"",redirectTo:"/"},r.handleRecover=r.handleRecover.bind(r),r.updatePassword=r.updatePassword.bind(r),r.handleChange=r.handleChange.bind(r),r}return r(t,e),t.prototype.componentWillMount=function(){this.props.auth.user&&this.props.dispatch(o.i(u.push)(this.state.redirectTo))},t.prototype.componentDidMount=function(){this.props.routeParams.token?this.props.actions.tokens.read(this.props.routeParams.token,{with:"user"}).then(function(){return w.a.done()}):w.a.done()},t.prototype.hasValidationError=function(e){return!(!i()(this.props.auth.error,"validation.keys")||!this.props.auth.error.validation.keys.includes(e))},t.prototype.handleRecover=function(e){var t=this;e.preventDefault(),this.setState({isLoading:!0},function(){t.props.actions.auth.sendRecovery({email:t.state.email}).then(function(){t.setState({isLoading:!1}),t.props.actions.alert.success("Recovery email sent. Check your email.")}).catch(function(e){t.setState({isLoading:!1}),t.props.actions.alert.error(e.message)})})},t.prototype.updatePassword=function(e){var t=this;e.preventDefault(),this.setState({isLoading:!0},function(){var e=t.state,n=e.token,a=e.password,r=e.verificationPassword;t.props.actions.auth.updatePassword({token:n,password:a,verificationPassword:r}).then(function(){return t.props.actions.auth.login({email:t.props.tokens.token.user.email,password:a})}).then(function(){return t.props.dispatch(o.i(u.push)(t.state.redirectTo))}).catch(function(e){t.setState({isLoading:!1}),t.props.actions.alert.error(e.message)})})},t.prototype.handleChange=function(e){var t;this.setState((t={},t[e.target.name]=e.target.value,t))},t.prototype.renderStepOne=function(){return c.a.createElement(h.Segment,{stacked:!0,attached:"bottom"},c.a.createElement(h.Form.Field,{error:this.hasValidationError("email")},c.a.createElement("label",null,"Email"),c.a.createElement(h.Input,{icon:"mail",iconPosition:"left",name:"email",onChange:this.handleChange,placeholder:"Email",type:"text",value:this.state.email})),c.a.createElement(h.Button,{primary:!0,fluid:!0,disabled:this.state.isLoading,loading:this.state.isLoading,onClick:this.handleRecover,content:"Recover Password"}))},t.prototype.renderStepTwo=function(){return c.a.createElement(h.Segment,{stacked:!0},c.a.createElement(h.Form.Group,{widths:"equal"},c.a.createElement(h.Form.Field,{error:this.hasValidationError("password")},c.a.createElement("label",null,"New Password"),c.a.createElement(h.Input,{icon:"lock",iconPosition:"left",name:"password",onChange:this.handleChange,placeholder:"Password",type:"password",value:this.state.password})),c.a.createElement(h.Form.Field,{error:this.hasValidationError("verificationPassword")},c.a.createElement("label",null,"Confirm New Password"),c.a.createElement(h.Input,{name:"verificationPassword",onChange:this.handleChange,placeholder:"Re-enter new password",type:"password",value:this.state.verificationPassword}))),c.a.createElement(h.Button,{fluid:!0,primary:!0,disabled:this.state.isLoading,loading:this.state.isLoading,onClick:this.updatePassword,content:"Continue"}))},t.prototype.renderSteps=function(){return this.props.routeParams.token?this.renderStepTwo():this.renderStepOne()},t.prototype.render=function(){return c.a.createElement("div",null,c.a.createElement(h.Form,{autoComplete:"off"},this.renderSteps()),c.a.createElement(h.Message,{style:{textAlign:"center"}},"Already know your password? ",c.a.createElement(d.c,{to:"/login"},"Log In")))},t}(c.a.Component),v.propTypes={auth:p.PropTypes.object.isRequired,dispatch:p.PropTypes.func.isRequired,actions:p.PropTypes.object.isRequired,location:p.PropTypes.object.isRequired,routeParams:p.PropTypes.object.isRequired,tokens:p.PropTypes.object.isRequired},g=P))||g}});