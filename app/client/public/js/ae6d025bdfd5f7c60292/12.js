webpackJsonp([12],{1331:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),p=n.n(r),a=n(51),c=n(186),u=(n.n(c),n(62)),l=n(118),d=n(52),h=n(73),f=(n.n(h),n(574));n.d(t,"default",function(){return P});var m,y,b,g,v=function(e){return{auth:e.auth,listings:e.listings,stripe:e.stripe}},S=function(e){return{dispatch:e,actions:{listings:n.i(l.a)(u.b,e)}}},P=(m=n.i(a.connect)(v,S))((g=b=function(e){function t(n){i(this,t);var s=o(this,e.call(this,n));return s.state={isLoading:!0},s.handleContinue=s.handleContinue.bind(s),s}return s(t,e),t.prototype.componentWillMount=function(){return this.props.steps.listing.completed?this.props.steps.billing.completed?(this.setState({isLoading:!1}),this.props.setActiveStep("confirmation"),void this.props.setCompletedStep("confirmation")):this.props.dispatch(n.i(c.replace)("/submit/billing")):this.props.dispatch(n.i(c.replace)("/submit/listing"))},t.prototype.componentWillUnmount=function(){this.props.setActiveStep(!1),this.props.actions.listings.reset(),this.props.resetCompletedSteps()},t.prototype.componentDidMount=function(){f.a.done()},t.prototype.handleContinue=function(e){var t=this;e.preventDefault(),this.setState({isLoading:!0},function(){return t.props.dispatch(n.i(c.push)("/login"))})},t.prototype.render=function(){return p.a.createElement(h.Form,{loading:this.state.isLoading},p.a.createElement(h.Segment,{attached:"bottom"},p.a.createElement("div",{className:"ui vertical center aligned very padded segment"},p.a.createElement("h2",{className:"ui center aligned icon header"},p.a.createElement("i",{className:"circular anchor icon"})," Success"),p.a.createElement("p",null,"Receipt sent to ",this.props.auth.user.email))),p.a.createElement(h.Segment,null,p.a.createElement(h.Button,{fluid:!0,primary:!0,as:d.c,to:"/listings/"+this.props.listings.listing.id,content:"Finished"})))},t}(p.a.Component),b.propTypes={api:r.PropTypes.object,auth:r.PropTypes.object,dispatch:r.PropTypes.func,actions:r.PropTypes.object,listings:r.PropTypes.object.isRequired,setActiveStep:r.PropTypes.func.isRequired,setCompletedStep:r.PropTypes.func.isRequired,resetCompletedSteps:r.PropTypes.func.isRequired,steps:r.PropTypes.object.isRequired},y=g))||y}});