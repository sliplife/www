webpackJsonp([2],{1306:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=i(1319),a=i.n(s),p=i(0),c=i.n(p),l=i(51),u=i(52),d=i(185),m=(i.n(d),i(117)),f=i(62),h=i(73),b=(i.n(h),i(573));i.d(t,"default",function(){return P});var v,y,g,S,E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},C=function(e){return{auth:e.auth,listings:e.listings}},j=function(e){return{dispatch:e,actions:{alert:i.i(m.a)(f.d,e),auth:i.i(m.a)(f.a,e),listings:i.i(m.a)(f.b,e)}}},P=(v=i.i(l.connect)(C,j))((S=g=function(e){function t(i){n(this,t);var r=o(this,e.call(this,i));return r.setActiveStep=r.setActiveStep.bind(r),r.setCompletedStep=r.setCompletedStep.bind(r),r.resetCompletedSteps=r.resetCompletedSteps.bind(r),r.state={isLoading:!1,steps:{listing:{active:!1,completed:!1,icon:"anchor",title:"Listing",description:"Provide listing details",disabled:!0,name:"listing"},billing:{active:!1,completed:!1,icon:"payment",title:"Billing",description:"Enter billing information",disabled:!0,name:"billing"},confirmation:{active:!1,completed:!1,icon:"info",title:"Confirmation",description:"Receipt for transaction",disabled:!0,name:"confirmation"}}},r}return r(t,e),t.prototype.componentDidMount=function(){b.a.done(),this.props.auth.user&&this.props.dispatch(i.i(d.replace)("/submit/listing"))},t.prototype.componentWillReceiveProps=function(e){this.props.auth.user&&"/submit"===e.location.pathname&&this.props.dispatch(i.i(d.replace)("/submit/listing"))},t.prototype.componentDidUpdate=function(){b.a.done()},t.prototype.setActiveStep=function(e){for(var t=this.state.steps,i=a()(t),n=Array.isArray(i),o=0,i=n?i:i[Symbol.iterator]();;){var r;if(n){if(o>=i.length)break;r=i[o++]}else{if(o=i.next(),o.done)break;r=o.value}var s=r;t[s.name].active=!1,t[s.name].disabled=!0,s.name===e&&(t[s.name].active=!0,t[s.name].disabled=!1)}this.setState({steps:t})},t.prototype.setCompletedStep=function(e){var t=this.state.steps;t[e].completed=!0,this.setState({steps:t})},t.prototype.resetCompletedSteps=function(){for(var e=this.state.steps,t=a()(e),i=Array.isArray(t),n=0,t=i?t:t[Symbol.iterator]();;){var o;if(i){if(n>=t.length)break;o=t[n++]}else{if(n=t.next(),n.done)break;o=n.value}var r=o;e[r.name].active=!1,e[r.name].disabled=!0,e[r.name].completed=!1}this.setState({steps:e})},t.prototype.render=function(){return c.a.createElement("div",null,this.props.children?c.a.createElement(h.Segment,{attached:"bottom"},c.a.createElement(h.Step.Group,{fluid:!0,size:"mini",items:a()(this.state.steps)})):null,this.props.children?c.a.cloneElement(this.props.children,E({steps:this.state.steps,setActiveStep:this.setActiveStep,setCompletedStep:this.setCompletedStep,resetCompletedSteps:this.resetCompletedSteps},this.props)):c.a.createElement("div",null,c.a.createElement(h.Segment,{attached:"bottom"},c.a.createElement("div",{className:"ui vertical center aligned very padded segment"},c.a.createElement("h2",{className:"ui center aligned icon header"},c.a.createElement("i",{className:"circular anchor icon"})," Submit"),c.a.createElement("p",null,"Sign up or login to submit new listing."))),c.a.createElement(h.Segment,null,c.a.createElement(h.Button,{fluid:!0,primary:!0,as:u.c,to:"/signup",disabled:this.state.isLoading,loading:this.state.isLoading,onClick:this.handleSubmit,content:"Get Started"}))))},t}(c.a.Component),g.propTypes={auth:p.PropTypes.object.isRequired,children:p.PropTypes.object,dispatch:p.PropTypes.func.isRequired,actions:p.PropTypes.object.isRequired,location:p.PropTypes.object.isRequired},y=S))||y},1316:function(e,t){function i(e){for(var t,i=[];!(t=e.next()).done;)i.push(t.value);return i}e.exports=i},1319:function(e,t,i){function n(e){if(!e)return[];if(a(e))return p(e)?d(e):r(e);if(b&&e[b])return c(e[b]());var t=s(e);return(t==f?l:t==h?u:m)(e)}var o=i(75),r=i(118),s=i(186),a=i(38),p=i(120),c=i(1316),l=i(300),u=i(119),d=i(301),m=i(187),f="[object Map]",h="[object Set]",b=o?o.iterator:void 0;e.exports=n}});