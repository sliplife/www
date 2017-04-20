webpackJsonp([7],{

/***/ 1430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_actions__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(54);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Empty__ = __webpack_require__(1486);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UploadsBrowse; });\nvar _dec, _class, _class2, _temp;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return _extends({}, state.uploads);\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    actions: {\n      uploads: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__[\"a\" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_4_actions__[\"uploads\"], dispatch)\n    }\n  };\n};\n\nvar UploadsBrowse = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapStateToProps, mapDispatchToProps), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_components__[\"b\" /* AuthWrapper */])(_class = _dec(_class = (_temp = _class2 = function (_React$Component) {\n  _inherits(UploadsBrowse, _React$Component);\n\n  function UploadsBrowse(props) {\n    _classCallCheck(this, UploadsBrowse);\n\n    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));\n\n    _this.state = {\n      menuItems: []\n    };\n\n    _this.setMenu = _this.setMenu.bind(_this);\n    return _this;\n  }\n\n  UploadsBrowse.prototype.componentDidMount = function componentDidMount() {\n\n    __WEBPACK_IMPORTED_MODULE_5_components__[\"a\" /* NProgress */].done();\n  };\n\n  UploadsBrowse.prototype.componentWillReceiveProps = function componentWillReceiveProps() {\n\n    __WEBPACK_IMPORTED_MODULE_5_components__[\"a\" /* NProgress */].done();\n  };\n\n  UploadsBrowse.prototype.setMenu = function setMenu(menuItems) {\n\n    this.setState({ menuItems: menuItems });\n  };\n\n  UploadsBrowse.prototype.render = function render() {\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"],\n      { stackable: true },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n          { stretched: true, width: 4 },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__[\"g\" /* Scroller */], {\n            basePath: '/uploads',\n            itemRender: function itemRender(item) {\n              return item.name || item.fingerprint;\n            },\n            items: this.props.uploads,\n            actions: this.props.actions.uploads,\n            pagination: this.props.pagination\n          })\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n          { width: 12 },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"],\n            { stackable: true },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n                { width: 16 },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__[\"h\" /* Menu */], { items: this.state.menuItems })\n              )\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n                { width: 16 },\n                this.props.children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children, { setMenu: this.setMenu }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Empty__[\"a\" /* default */], { setMenu: this.setMenu })\n              )\n            )\n          )\n        )\n      )\n    );\n  };\n\n  return UploadsBrowse;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class2.propTypes = {\n  actions: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  children: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object,\n  pagination: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  uploads: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].array.isRequired\n}, _temp)) || _class) || _class);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQzMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZHMvaW5kZXguanM/MThmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICdhY3Rpb25zJztcbmltcG9ydCB7IEF1dGhXcmFwcGVyLCBNZW51LCBOUHJvZ3Jlc3MsIFNjcm9sbGVyIH0gZnJvbSAnY29tcG9uZW50cyc7XG5pbXBvcnQgRW1wdHkgZnJvbSAnLi9FbXB0eSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgLi4uc3RhdGUudXBsb2Fkc1xufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGFjdGlvbnM6IHtcbiAgICB1cGxvYWRzOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMudXBsb2FkcywgZGlzcGF0Y2gpXG4gIH1cbn0pO1xuXG5AQXV0aFdyYXBwZXJcbkBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2Fkc0Jyb3dzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBhZ2luYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB1cGxvYWRzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICB9O1xuICBzdGF0ZSA9IHtcbiAgICBtZW51SXRlbXM6IFtdXG4gIH07XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZXRNZW51ID0gdGhpcy5zZXRNZW51LmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG5cbiAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICB9XG4gIHNldE1lbnUobWVudUl0ZW1zKSB7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbWVudUl0ZW1zIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAgKFxuICAgICAgPEdyaWQgc3RhY2thYmxlPlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHN0cmV0Y2hlZCB3aWR0aD17NH0+XG4gICAgICAgICAgICA8U2Nyb2xsZXJcbiAgICAgICAgICAgICAgYmFzZVBhdGg9XCIvdXBsb2Fkc1wiXG4gICAgICAgICAgICAgIGl0ZW1SZW5kZXI9eyhpdGVtKSA9PiBpdGVtLm5hbWUgfHwgaXRlbS5maW5nZXJwcmludH1cbiAgICAgICAgICAgICAgaXRlbXM9e3RoaXMucHJvcHMudXBsb2Fkc31cbiAgICAgICAgICAgICAgYWN0aW9ucz17dGhpcy5wcm9wcy5hY3Rpb25zLnVwbG9hZHN9XG4gICAgICAgICAgICAgIHBhZ2luYXRpb249e3RoaXMucHJvcHMucGFnaW5hdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEyfT5cbiAgICAgICAgICAgIDxHcmlkIHN0YWNrYWJsZT5cbiAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTZ9PlxuICAgICAgICAgICAgICAgICAgPE1lbnUgaXRlbXM9e3RoaXMuc3RhdGUubWVudUl0ZW1zfSAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezE2fT5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuID8gUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHsgc2V0TWVudTogdGhpcy5zZXRNZW51IH0pIDogPEVtcHR5IHNldE1lbnU9e3RoaXMuc2V0TWVudX0gLz59XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZHMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFDQTtBQU9BOzs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFGQTtBQURBO0FBQ0E7QUFLQTtBQUhBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU5BO0FBREE7QUFWQTtBQURBO0FBNEJBO0FBQ0E7O0FBM0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBOzs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 1486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return UploadsEmpty; });\nvar _class, _temp;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar UploadsEmpty = (_temp = _class = function (_React$Component) {\n  _inherits(UploadsEmpty, _React$Component);\n\n  function UploadsEmpty() {\n    _classCallCheck(this, UploadsEmpty);\n\n    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n  }\n\n  UploadsEmpty.prototype.componentWillMount = function componentWillMount() {\n\n    this.props.setMenu([{ icon: 'add', url: '/uploads/add' }]);\n  };\n\n  UploadsEmpty.prototype.render = function render() {\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'div',\n      { className: 'ui vertical center aligned very padded segment' },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'h2',\n        { className: 'ui center aligned icon header' },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'circular upload icon' }),\n        ' Uploads'\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'p',\n        null,\n        'Choose or add upload to get started.'\n      )\n    );\n  };\n\n  return UploadsEmpty;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class.propTypes = {\n  setMenu: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].func.isRequired\n}, _temp);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ4Ni5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL1VwbG9hZHMvRW1wdHkvaW5kZXguanM/MzNlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGxvYWRzRW1wdHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNldE1lbnU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5zZXRNZW51KFt7IGljb246ICdhZGQnLCB1cmw6ICcvdXBsb2Fkcy9hZGQnIH1dKTtcbiAgfVxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB2ZXJ0aWNhbCBjZW50ZXIgYWxpZ25lZCB2ZXJ5IHBhZGRlZCBzZWdtZW50XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1aSBjZW50ZXIgYWxpZ25lZCBpY29uIGhlYWRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17J2NpcmN1bGFyIHVwbG9hZCBpY29uJ30gLz4gVXBsb2Fkc1xuICAgICAgICA8L2gyPlxuICAgICAgICA8cD5DaG9vc2Ugb3IgYWRkIHVwbG9hZCB0byBnZXQgc3RhcnRlZC48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NsaWVudC9hc3NldHMvanMvY29tcG9uZW50cy9VcGxvYWRzL0VtcHR5L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBOztBQW5CQTtBQUVBO0FBREE7QUFEQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

});