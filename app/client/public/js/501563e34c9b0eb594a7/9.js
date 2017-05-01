webpackJsonp([9],{1307:function(e,t,n){"use strict";function r(e,t){if(i)return localStorage.setItem(e,t)}function o(e){if(i)return localStorage.getItem(e)}function a(e){if(i)return localStorage.removeItem(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setItem=r,t.getItem=o,t.removeItem=a;var i=!1;try{i="localStorage"in window;var l="tusSupport";localStorage.setItem(l,localStorage.getItem(l))}catch(e){if(e.code!==e.SECURITY_ERR&&e.code!==e.QUOTA_EXCEEDED_ERR)throw e;i=!1}t.canStoreURLs=i},1313:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(74),l=n.n(i),s=n(0),u=n.n(s),c=n(51),h=n(185),p=(n.n(h),n(117)),d=n(62),f=n(73),y=(n.n(f),n(572)),m=n(1327),v=n.n(m);n.d(t,"default",function(){return x});var g,_,k,E,b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C=function(e){return{auth:e.auth,error:e.listings.error}},w=function(e){return{dispatch:e,actions:{alert:n.i(p.a)(d.d,e),listings:n.i(p.a)(d.b,e),uploads:n.i(p.a)(d.f,e)}}},x=(g=n.i(c.connect)(C,w))((E=k=function(e){function t(n){r(this,t);var a=o(this,e.call(this,n));return a.state={isLoading:!0,listing:{amenities:[],city:"",country:"us",description:"",email:"",location:"",phone:"",price:"",uploads:[],state:"",street:"",terms:"",termType:"flat_rate",type:"",vhfChannel:"",zip:""}},a.handleChange=a.handleChange.bind(a),a.handleContinue=a.handleContinue.bind(a),a.handleCountryChange=a.handleCountryChange.bind(a),a.handleStateChange=a.handleStateChange.bind(a),a.handleAmenityChange=a.handleAmenityChange.bind(a),a.handleLocationChange=a.handleLocationChange.bind(a),a.handleTypeChange=a.handleTypeChange.bind(a),a.handlePaymentTermsChange=a.handlePaymentTermsChange.bind(a),a.handlePaymentTermTypeChange=a.handlePaymentTermTypeChange.bind(a),a.handleSelectPhotos=a.handleSelectPhotos.bind(a),a}return a(t,e),t.prototype.componentWillMount=function(){return this.props.auth.user?this.props.steps.listing.completed?this.props.dispatch(n.i(h.replace)("/submit/billing")):(this.setState({isLoading:!1}),void this.props.setActiveStep("listing")):this.props.dispatch(n.i(h.replace)("/submit"))},t.prototype.componentWillUnmount=function(){this.props.setActiveStep(!1)},t.prototype.componentDidMount=function(){this.handleSelectPhotosChanges(),y.a.done()},t.prototype.hasValidationError=function(e){return!(!l()(this.props.error,"validation.keys")||!this.props.error.validation.keys.includes(e))},t.prototype.handleContinue=function(e){var t=this;e.preventDefault(),this.setState({isLoading:!0},function(){var e=t.state.listing;t.props.actions.listings.create(b({},e)).then(function(e){t.props.setCompletedStep("listing"),t.props.dispatch(n.i(h.push)("/submit/billing"))}).catch(function(e){t.setState({isLoading:!1}),t.props.actions.alert.error(e.message)})})},t.prototype.handleChange=function(e){var t=this.state.listing;t[e.target.name]=e.target.value,this.setState({listing:t})},t.prototype.handleStateChange=function(e,t){this.setState({listing:b({},this.state.listing,{state:t.value})})},t.prototype.handleAmenityChange=function(e,t){this.setState({listing:b({},this.state.listing,{amenities:t.value})})},t.prototype.handleLocationChange=function(e,t){this.setState({listing:b({},this.state.listing,{location:t.value})})},t.prototype.handleTypeChange=function(e,t){this.setState({listing:b({},this.state.listing,{type:t.value})})},t.prototype.handlePaymentTermsChange=function(e,t){this.setState({listing:b({},this.state.listing,{terms:t.value})})},t.prototype.handlePaymentTermTypeChange=function(e,t){this.setState({listing:b({},this.state.listing,{termType:t.value})})},t.prototype.handleCountryChange=function(e,t){this.setState({listing:b({},this.state.listing,{country:t.value})})},t.prototype.componentDidMount=function(){this.handleSelectPhotosChanges()},t.prototype.processFileUploads=function(){for(var e=this,t=this.fileInput.files,n=function(){if(o){if(a>=r.length)return"break";i=r[a++]}else{if(a=r.next(),a.done)return"break";i=a.value}var t=i,n=new v.a.Upload(t,{resume:!0,endpoint:"/api/uploads",headers:{},onError:function(t){e.setState({isLoading:!1},function(){return e.props.actions.alert.error(t)}),y.a.done()},onProgress:function(e,t){var n=(e/t*100).toFixed(2);y.a.set(n/100)},onSuccess:function(){var t=new RegExp(".*/uploads/(.*)$").exec(n.url)[1],r=e.state.listing.uploads;r.includes(t)||(r.push(t),e.setState({listing:b({},e.state.listing,{uploads:r})}))}});n.start()},r=t,o=Array.isArray(r),a=0,r=o?r:r[Symbol.iterator]();;){var i;if("break"===n())break}},t.prototype.handleSelectPhotos=function(e){e.preventDefault(),this.fileInput.click()},t.prototype.handleSelectPhotosChanges=function(){var e=this;this.fileInput.addEventListener("change",function(t){return e.processFileUploads()})},t.prototype.render=function(){var e=this,t=[{key:"fl",value:"Florida",text:"Florida"}],n=[{key:"alcohol",value:"alcohol",text:"Alcohol"},{key:"anchorage",value:"anchorage",text:"Anchorage"},{key:"bait_tackle",value:"bait_tackle",text:"Bait & Tackle"},{key:"beach",value:"beach",text:"Beach"},{key:"bike_rentals",value:"bike_rentals",text:"Bike Rentals"},{key:"boat_ramp",value:"boat_ramp",text:"Boat Ramp"},{key:"cable_tv_hookup",value:"cable_tv_hookup",text:"Cable TV Hookup"},{key:"car_rentals",value:"car_rentals",text:"Car Rentals"},{key:"club_house",value:"club_house",text:"Club House"},{key:"covered_slips",value:"covered_slips",text:"Covered Slips"},{key:"deep_water",value:"deep_water",text:"Deep Water"},{key:"diesel",value:"diesel",text:"Diesel"},{key:"dinghy_dock",value:"dinghy_dock",text:"Dinghy Dock"},{key:"dockage",value:"dockage",text:"Dockage"},{key:"dog_park",value:"dog_park",text:"Dog Park"},{key:"dry_storage",value:"dry_storage",text:"Dry Storage"},{key:"electricity",value:"electricity",text:"Electricity"},{key:"engine_service",value:"engine_service",text:"Engine Service"},{key:"fitness_center",value:"fitness_center",text:"Fitness Center"},{key:"fixed_docks",value:"fixed_docks",text:"Fixed Docks"},{key:"floating_docks",value:"floating_docks",text:"Floating Docks"},{key:"fuel_dock",value:"fuel_dock",text:"Fuel Dock"},{key:"gas",value:"gas",text:"Gas"},{key:"golf",value:"golf",text:"Golf"},{key:"groceries",value:"groceries",text:"Groceries"},{key:"hotels",value:"hotels",text:"Hotels"},{key:"ice",value:"ice",text:"Ice"},{key:"internet",value:"internet",text:"Internet"},{key:"laundry",value:"laundry",text:"Laundry"},{key:"live_aboard_allowed",value:"live_aboard_allowed",text:"Live Aboard Allowed"},{key:"maintenance_facility",value:"maintenance_facility",text:"Maintenance Facility"},{key:"medical_facility",value:"medical_facility",text:"Medical Facility"},{key:"moorings",value:"moorings",text:"Moorings"},{key:"ocean_access",value:"ocean_access",text:"Ocean Access"},{key:"oil_disposal",value:"oil_disposal",text:"Oil Disposal"},{key:"pharmacy",value:"pharmacy",text:"Pharmacy"},{key:"pool",value:"pool",text:"Pool"},{key:"propane",value:"propane",text:"Propane"},{key:"propeller_service",value:"propeller_service",text:"Propeller Service"},{key:"pumpout",value:"pumpout",text:"Pump-out"},{key:"rack_storage",value:"rack_storage",text:"Rack Storage"},{key:"repair_crane",value:"repair_crane",text:"Repair Crane"},{key:"restaurants",value:"restaurants",text:"Restaurants"},{key:"restrooms",value:"restrooms",text:"Restrooms"},{key:"ship_store",value:"ship_store",text:"Ship Store"},{key:"showers",value:"showers",text:"Showers"},{key:"telephone_hookup",value:"telephone_hookup",text:"Telephone Hookup"},{key:"tennis",value:"tennis",text:"Tennis"},{key:"trash",value:"trash",text:"Trash"},{key:"trailer_storage",value:"trailer_storage",text:"Trailer Storage"},{key:"travel_lift",value:"travel_lift",text:"Travel Lift"},{key:"water_hookup",value:"water_hookup",text:"Water Hookup"},{key:"water_taxi",value:"water_taxi",text:"Water Taxi"},{key:"winter_storage",value:"winter_storage",text:"Winter Storage"},{key:"yacht_brokerage",value:"yacht_brokerage",text:"Yacht Brokerage"}],r=[{key:"dock",value:"dock",text:"Dock"},{key:"dry_storage",value:"dry_storage",text:"Dry Storage"},{key:"mooring",value:"mooring",text:"Mooring Buoy"},{key:"slip",value:"slip",text:"Slip"}],o=[{key:"condo",value:"condo",text:"Condo"},{key:"home",value:"home",text:"Home"},{key:"marina",value:"marina",text:"Marina"},{key:"vacant_lot",value:"vacant_lot",text:"Vacant Lot"}],a=[{key:"sale",value:"sale",text:"For Sale"},{key:"rent",value:"rent",text:"For Rent"}],i=[{key:"flat_rate",value:"flat_rate",text:"Flat Rate"},{key:"by_foot",value:"by_foot",text:"By Foot"}],l=[{key:"us",value:"us",flag:"us",text:"United States"}];return u.a.createElement("div",null,u.a.createElement(f.Segment,{as:f.Form,loading:this.state.isLoading},u.a.createElement("input",{multiple:!0,type:"file",style:{display:"none"},ref:function(t){e.fileInput=t}}),u.a.createElement(f.Form.Group,null,u.a.createElement(f.Form.Field,{error:this.hasValidationError("location"),width:"4"},u.a.createElement("label",null,"Location"),u.a.createElement(f.Dropdown,{fluid:!0,search:!0,selection:!0,placeholder:"Location",options:o,name:"location",onChange:this.handleLocationChange,value:this.state.listing.location})),u.a.createElement(f.Form.Field,{error:this.hasValidationError("type"),width:"4"},u.a.createElement("label",null,"Type"),u.a.createElement(f.Dropdown,{fluid:!0,search:!0,selection:!0,placeholder:"Type",options:r,name:"type",onChange:this.handleTypeChange,value:this.state.listing.type})),u.a.createElement(f.Form.Field,{error:this.hasValidationError("terms"),width:"4"},u.a.createElement("label",null,"Payment Terms"),u.a.createElement(f.Dropdown,{fluid:!0,search:!0,selection:!0,placeholder:"Payment Terms",options:a,name:"terms",onChange:this.handlePaymentTermsChange,value:this.state.listing.terms})),u.a.createElement(f.Form.Field,{error:this.hasValidationError("price"),width:"4"},u.a.createElement("label",null,"Price"),u.a.createElement(f.Input,{label:u.a.createElement(f.Dropdown,{options:i,name:"termType",onChange:this.handlePaymentTermTypeChange,value:this.state.listing.termType}),name:"price",labelPosition:"right",placeholder:"Price",onChange:this.handleChange,value:this.state.listing.price}))),u.a.createElement(f.Divider,{horizontal:!0},u.a.createElement(f.Icon,{circular:!0,name:"marker",color:"blue"})),u.a.createElement(f.Form.Group,null,u.a.createElement(f.Form.Field,{error:this.hasValidationError("street"),width:"16"},u.a.createElement("label",null,"Street"),u.a.createElement(f.Input,{name:"street",onChange:this.handleChange,placeholder:"Street",type:"text",value:this.state.listing.street}))),u.a.createElement(f.Form.Group,null,u.a.createElement(f.Form.Field,{error:this.hasValidationError("city"),width:"6"},u.a.createElement("label",null,"City"),u.a.createElement(f.Input,{name:"city",onChange:this.handleChange,placeholder:"City",type:"text",value:this.state.listing.city})),u.a.createElement(f.Form.Field,{error:this.hasValidationError("state"),width:"7"},u.a.createElement("label",null,"State"),u.a.createElement(f.Dropdown,{fluid:!0,search:!0,selection:!0,placeholder:"State",options:t,name:"state",onChange:this.handleStateChange,value:this.state.listing.state})),u.a.createElement(f.Form.Field,{error:this.hasValidationError("zip"),width:"3"},u.a.createElement("label",null,"ZIP Code"),u.a.createElement(f.Input,{name:"zip",onChange:this.handleChange,placeholder:"ZIP Code",type:"text",value:this.state.listing.zip})),u.a.createElement(f.Form.Field,{error:this.hasValidationError("country"),width:"7"},u.a.createElement("label",null,"Country"),u.a.createElement(f.Dropdown,{fluid:!0,search:!0,selection:!0,placeholder:"Country",options:l,name:"country",onChange:this.handleCountryChange,value:this.state.listing.country}))),u.a.createElement(f.Divider,{horizontal:!0},u.a.createElement(f.Icon,{circular:!0,name:"conversation",color:"blue"})),u.a.createElement(f.Form.Group,{widths:"equal"},u.a.createElement(f.Form.Field,{error:this.hasValidationError("phone")},u.a.createElement("label",null,"Phone"),u.a.createElement(f.Input,{name:"phone",onChange:this.handleChange,placeholder:"Phone",type:"text",value:this.state.listing.phone})),u.a.createElement(f.Form.Field,{error:this.hasValidationError("email")},u.a.createElement("label",null,"Email"),u.a.createElement(f.Input,{name:"email",onChange:this.handleChange,placeholder:"Email",type:"text",value:this.state.listing.email})),u.a.createElement(f.Form.Field,{error:this.hasValidationError("vhfChannel")},u.a.createElement("label",null,"VHF Channel"),u.a.createElement(f.Input,{name:"vhfChannel",onChange:this.handleChange,placeholder:"VHF Channel",type:"text",value:this.state.listing.vhfChannel}))),u.a.createElement(f.Divider,{horizontal:!0},u.a.createElement(f.Icon,{circular:!0,name:"list",color:"blue"})),u.a.createElement(f.Form.Field,{error:this.hasValidationError("amenities")},u.a.createElement("label",null,"Amenities"),u.a.createElement(f.Dropdown,{fluid:!0,search:!0,selection:!0,multiple:!0,placeholder:"Amenities",options:n,name:"state",onChange:this.handleAmenityChange,value:this.state.listing.amenities})),u.a.createElement(f.Form.Field,{error:this.hasValidationError("description")},u.a.createElement("label",null,"Description"),u.a.createElement(f.TextArea,{name:"description",onChange:this.handleChange,placeholder:"Description",type:"text",value:this.state.listing.description})),u.a.createElement(f.Divider,{horizontal:!0},u.a.createElement(f.Icon,{circular:!0,name:"photo",color:"blue"})),u.a.createElement(f.Button,{fluid:!0,content:"Select Photos ("+this.state.listing.uploads.length+")",onClick:this.handleSelectPhotos})),u.a.createElement(f.Segment,null,u.a.createElement(f.Button,{fluid:!0,primary:!0,disabled:this.state.isLoading,loading:this.state.isLoading,onClick:this.handleContinue,icon:"right arrow",labelPosition:"right",content:"Continue"})))},t}(u.a.Component),k.propTypes={dispatch:s.PropTypes.func,error:s.PropTypes.any,actions:s.PropTypes.object.isRequired,auth:s.PropTypes.object.isRequired,setActiveStep:s.PropTypes.func.isRequired,setCompletedStep:s.PropTypes.func.isRequired,steps:s.PropTypes.object.isRequired},_=E))||_},1314:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Object.prototype.toString,a=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===o.call(e)},i=function(e){if(!e||"[object Object]"!==o.call(e))return!1;var t=r.call(e,"constructor"),n=e.constructor&&e.constructor.prototype&&r.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!n)return!1;var a;for(a in e);return void 0===a||r.call(e,a)};e.exports=function e(){var t,n,r,o,l,s,u=arguments[0],c=1,h=arguments.length,p=!1;for("boolean"==typeof u?(p=u,u=arguments[1]||{},c=2):("object"!=typeof u&&"function"!=typeof u||null==u)&&(u={});c<h;++c)if(null!=(t=arguments[c]))for(n in t)r=u[n],o=t[n],u!==o&&(p&&o&&(i(o)||(l=a(o)))?(l?(l=!1,s=r&&a(r)?r:[]):s=r&&i(r)?r:{},u[n]=e(p,s,o)):void 0!==o&&(u[n]=o));return u}},1321:function(e,t,n){var r,o;!function(a,i){r=i,void 0!==(o="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=o)}(0,function(){function e(){var e=arguments.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var t=document.createElement("base");if(t.href=arguments[0],1===e)return t.href;var n=document.getElementsByTagName("head")[0];n.insertBefore(t,n.firstChild);for(var r,o=document.createElement("a"),a=1;a<e;a++)o.href=arguments[a],r=o.href,t.href=r;return n.removeChild(t),r}return e})},1322:function(e,t,n){"use strict";function r(e){return a(unescape(encodeURIComponent(e)))}Object.defineProperty(t,"__esModule",{value:!0}),t.encode=r;var o=window,a=o.btoa;t.isSupported="btoa"in window},1323:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){return new window.XMLHttpRequest}function a(e,t){return(0,l.default)(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.newRequest=o,t.resolveUrl=a;var i=n(1321),l=r(i)},1324:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){if("function"==typeof e.slice&&void 0!==e.size)return new i(e);throw new Error("source object may only be an instance of File or Blob in this environment")}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.getSource=o;var i=function(){function e(t){r(this,e),this._file=t,this.size=t.size}return a(e,[{key:"slice",value:function(e,t){return this._file.slice(e,t)}},{key:"close",value:function(){}}]),e}()},1325:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1],a=arguments.length<=2||void 0===arguments[2]?null:arguments[2];r(this,t);var i=o(this,Object.getPrototypeOf(t).call(this,e.message));i.originalRequest=a,i.causingError=n;var l=e.message;return null!=n&&(l+=", caused by "+n.toString()),null!=a&&(l+=", originated from request (response code: "+a.status+", response text: "+a.responseText+")"),i.message=l,i}return a(t,e),t}(Error);t.default=i},1326:function(e,t,n){"use strict";function r(e){return["tus",e.name,e.type,e.size,e.lastModified].join("-")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},1327:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1328),a=r(o),i=n(1307),l=a.default.defaultOptions;if("undefined"!=typeof window)var s=window,u=s.XMLHttpRequest,c=s.Blob,h=u&&c&&"function"==typeof c.prototype.slice;else var h=!0;e.exports={Upload:a.default,isSupported:h,canStoreURLs:i.canStoreURLs,defaultOptions:l}},1328:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){if(!v.isSupported)return"";var t=[];for(var n in e)t.push(n+" "+v.encode(e[n]));return t.join(",")}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var s=n(1326),u=o(s),c=n(1325),h=o(c),p=n(1314),d=o(p),f=n(1323),y=n(1324),m=n(1322),v=r(m),g=n(1307),_=r(g),k={endpoint:"",fingerprint:u.default,resume:!0,onProgress:null,onChunkComplete:null,onSuccess:null,onError:null,headers:{},chunkSize:1/0,withCredentials:!1,uploadUrl:null,uploadSize:null,overridePatchMethod:!1,retryDelays:null},E=function(){function e(t,n){a(this,e),this.options=(0,d.default)(!0,{},k,n),this.file=t,this.url=null,this._xhr=null,this._fingerprint=null,this._offset=null,this._aborted=!1,this._size=null,this._source=null,this._retryAttempt=0,this._retryTimeout=null,this._offsetBeforeRetry=0}return l(e,[{key:"start",value:function(){var e=this,t=this.file;if(!t)return void this._emitError(new Error("tus: no file or stream to upload provided"));if(!this.options.endpoint)return void this._emitError(new Error("tus: no endpoint provided"));var n=this._source=(0,y.getSource)(t,this.options.chunkSize);if(null!=this.options.uploadSize){var r=+this.options.uploadSize;if(isNaN(r))throw new Error("tus: cannot convert `uploadSize` option into a number");this._size=r}else{var r=n.size;if(null==r)throw new Error("tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option");this._size=r}var o=this.options.retryDelays;if(null!=o){if("[object Array]"!==Object.prototype.toString.call(o))throw new Error("tus: the `retryDelays` option must either be an array or null");!function(){var t=e.options.onError;e.options.onError=function(n){e.options.onError=t,null!=e._offset&&e._offset>e._offsetBeforeRetry&&(e._retryAttempt=0);var r=!0;if("undefined"!=typeof window&&"navigator"in window&&!1===window.navigator.onLine&&(r=!1),!(e._retryAttempt<o.length&&null!=n.originalRequest&&r))return void e._emitError(n);var a=o[e._retryAttempt++];e._offsetBeforeRetry=e._offset,e.options.uploadUrl=e.url,e._retryTimeout=setTimeout(function(){e.start()},a)}}()}if(null!=this.options.uploadUrl)return this.url=this.options.uploadUrl,void this._resumeUpload();if(this.options.resume){this._fingerprint=this.options.fingerprint(t);var a=_.getItem(this._fingerprint);if(null!=a)return this.url=a,void this._resumeUpload()}this._createUpload()}},{key:"abort",value:function(){null!==this._xhr&&(this._xhr.abort(),this._source.close(),this._aborted=!0),null!=this._retryTimeout&&(clearTimeout(this._retryTimeout),this._retryTimeout=null)}},{key:"_emitXhrError",value:function(e,t,n){this._emitError(new h.default(t,n,e))}},{key:"_emitError",value:function(e){if("function"!=typeof this.options.onError)throw e;this.options.onError(e)}},{key:"_emitSuccess",value:function(){"function"==typeof this.options.onSuccess&&this.options.onSuccess()}},{key:"_emitProgress",value:function(e,t){"function"==typeof this.options.onProgress&&this.options.onProgress(e,t)}},{key:"_emitChunkComplete",value:function(e,t,n){"function"==typeof this.options.onChunkComplete&&this.options.onChunkComplete(e,t,n)}},{key:"_setupXHR",value:function(e){e.setRequestHeader("Tus-Resumable","1.0.0");var t=this.options.headers;for(var n in t)e.setRequestHeader(n,t[n]);e.withCredentials=this.options.withCredentials}},{key:"_createUpload",value:function(){var e=this,t=(0,f.newRequest)();t.open("POST",this.options.endpoint,!0),t.onload=function(){if(!(t.status>=200&&t.status<300))return void e._emitXhrError(t,new Error("tus: unexpected response while creating upload"));e.url=(0,f.resolveUrl)(e.options.endpoint,t.getResponseHeader("Location")),e.options.resume&&_.setItem(e._fingerprint,e.url),e._offset=0,e._startUpload()},t.onerror=function(n){e._emitXhrError(t,new Error("tus: failed to create upload"),n)},this._setupXHR(t),t.setRequestHeader("Upload-Length",this._size);var n=i(this.options.metadata);""!==n&&t.setRequestHeader("Upload-Metadata",n),t.send(null)}},{key:"_resumeUpload",value:function(){var e=this,t=(0,f.newRequest)();t.open("HEAD",this.url,!0),t.onload=function(){if(!(t.status>=200&&t.status<300))return e.options.resume&&_.removeItem(e._fingerprint),e.url=null,void e._createUpload();var n=parseInt(t.getResponseHeader("Upload-Offset"),10);if(isNaN(n))return void e._emitXhrError(t,new Error("tus: invalid or missing offset value"));var r=parseInt(t.getResponseHeader("Upload-Length"),10);return isNaN(r)?void e._emitXhrError(t,new Error("tus: invalid or missing length value")):n===r?(e._emitProgress(r,r),void e._emitSuccess()):(e._offset=n,void e._startUpload())},t.onerror=function(n){e._emitXhrError(t,new Error("tus: failed to resume upload"),n)},this._setupXHR(t),t.send(null)}},{key:"_startUpload",value:function(){var e=this,t=this._xhr=(0,f.newRequest)();this.options.overridePatchMethod?(t.open("POST",this.url,!0),t.setRequestHeader("X-HTTP-Method-Override","PATCH")):t.open("PATCH",this.url,!0),t.onload=function(){if(!(t.status>=200&&t.status<300))return void e._emitXhrError(t,new Error("tus: unexpected response while uploading chunk"));var n=parseInt(t.getResponseHeader("Upload-Offset"),10);return isNaN(n)?void e._emitXhrError(t,new Error("tus: invalid or missing offset value")):(e._emitProgress(n,e._size),e._emitChunkComplete(n-e._offset,n,e._size),e._offset=n,n==e._size?(e._emitSuccess(),void e._source.close()):void e._startUpload())},t.onerror=function(n){e._aborted||e._emitXhrError(t,new Error("tus: failed to upload chunk at offset "+e._offset),n)},"upload"in t&&(t.upload.onprogress=function(t){t.lengthComputable&&e._emitProgress(n+t.loaded,e._size)}),this._setupXHR(t),t.setRequestHeader("Upload-Offset",this._offset),t.setRequestHeader("Content-Type","application/offset+octet-stream");var n=this._offset,r=this._offset+this.options.chunkSize;(r===1/0||r>this._size)&&(r=this._size),t.send(this._source.slice(n,r))}}]),e}();E.defaultOptions=k,t.default=E}});