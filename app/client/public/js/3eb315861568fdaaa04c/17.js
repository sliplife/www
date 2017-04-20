webpackJsonp([17],{

/***/ 1411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_actions__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(54);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Empty__ = __webpack_require__(1449);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TagBrowse; });\nvar _dec, _class, _class2, _temp;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return _extends({}, state.keys);\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    actions: {\n      keys: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__[\"a\" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_4_actions__[\"keys\"], dispatch)\n    }\n  };\n};\n\nvar TagBrowse = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapStateToProps, mapDispatchToProps), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_components__[\"b\" /* AuthWrapper */])(_class = _dec(_class = (_temp = _class2 = function (_React$Component) {\n  _inherits(TagBrowse, _React$Component);\n\n  function TagBrowse(props) {\n    _classCallCheck(this, TagBrowse);\n\n    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));\n\n    _this.state = {\n      menuItems: []\n    };\n\n    _this.setMenu = _this.setMenu.bind(_this);\n    return _this;\n  }\n\n  TagBrowse.prototype.componentDidMount = function componentDidMount() {\n\n    __WEBPACK_IMPORTED_MODULE_5_components__[\"a\" /* NProgress */].done();\n  };\n\n  TagBrowse.prototype.componentWillReceiveProps = function componentWillReceiveProps() {\n\n    __WEBPACK_IMPORTED_MODULE_5_components__[\"a\" /* NProgress */].done();\n  };\n\n  TagBrowse.prototype.setMenu = function setMenu(menuItems) {\n\n    this.setState({ menuItems: menuItems });\n  };\n\n  TagBrowse.prototype.render = function render() {\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"],\n      { stackable: true },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n          { stretched: true, width: 4 },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__[\"g\" /* Scroller */], {\n            basePath: '/keys',\n            itemRender: function itemRender(item) {\n              return item.name;\n            },\n            items: this.props.keys,\n            actions: this.props.actions.keys,\n            pagination: this.props.pagination\n          })\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n          { width: 12 },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"],\n            { stackable: true },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n                { width: 16 },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__[\"h\" /* Menu */], { items: this.state.menuItems })\n              )\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n                { width: 16 },\n                this.props.children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children, { setMenu: this.setMenu }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Empty__[\"a\" /* default */], { setMenu: this.setMenu })\n              )\n            )\n          )\n        )\n      )\n    );\n  };\n\n  return TagBrowse;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class2.propTypes = {\n  actions: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  children: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object,\n  pagination: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  keys: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].array.isRequired\n}, _temp)) || _class) || _class);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQxMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL0tleXMvaW5kZXguanM/MjAyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICdhY3Rpb25zJztcbmltcG9ydCB7IEF1dGhXcmFwcGVyLCBNZW51LCBOUHJvZ3Jlc3MsIFNjcm9sbGVyIH0gZnJvbSAnY29tcG9uZW50cyc7XG5pbXBvcnQgRW1wdHkgZnJvbSAnLi9FbXB0eSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgLi4uc3RhdGUua2V5c1xufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGFjdGlvbnM6IHtcbiAgICBrZXlzOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMua2V5cywgZGlzcGF0Y2gpXG4gIH1cbn0pO1xuXG5AQXV0aFdyYXBwZXJcbkBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnQnJvd3NlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcGFnaW5hdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGtleXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH07XG4gIHN0YXRlID0ge1xuICAgIG1lbnVJdGVtczogW11cbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldE1lbnUgPSB0aGlzLnNldE1lbnUuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcblxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gIH1cbiAgc2V0TWVudShtZW51SXRlbXMpIHtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51SXRlbXMgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuICAoXG4gICAgICA8R3JpZCBzdGFja2FibGU+XG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXs0fT5cbiAgICAgICAgICAgIDxTY3JvbGxlclxuICAgICAgICAgICAgICBiYXNlUGF0aD1cIi9rZXlzXCJcbiAgICAgICAgICAgICAgaXRlbVJlbmRlcj17KGl0ZW0pID0+IGl0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgaXRlbXM9e3RoaXMucHJvcHMua2V5c31cbiAgICAgICAgICAgICAgYWN0aW9ucz17dGhpcy5wcm9wcy5hY3Rpb25zLmtleXN9XG4gICAgICAgICAgICAgIHBhZ2luYXRpb249e3RoaXMucHJvcHMucGFnaW5hdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEyfT5cbiAgICAgICAgICAgIDxHcmlkIHN0YWNrYWJsZT5cbiAgICAgICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTZ9PlxuICAgICAgICAgICAgICAgICAgPE1lbnUgaXRlbXM9e3RoaXMuc3RhdGUubWVudUl0ZW1zfSAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezE2fT5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuID8gUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHsgc2V0TWVudTogdGhpcy5zZXRNZW51IH0pIDogPEVtcHR5IHNldE1lbnU9e3RoaXMuc2V0TWVudX0gLz59XG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL0tleXMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFDQTtBQU9BOzs7QUFVQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFGQTtBQURBO0FBQ0E7QUFLQTtBQUhBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU5BO0FBREE7QUFWQTtBQURBO0FBNEJBO0FBQ0E7O0FBM0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBOzs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 1449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return KeysEmpty; });\nvar _class, _temp;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar KeysEmpty = (_temp = _class = function (_React$Component) {\n  _inherits(KeysEmpty, _React$Component);\n\n  function KeysEmpty() {\n    _classCallCheck(this, KeysEmpty);\n\n    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n  }\n\n  KeysEmpty.prototype.componentWillMount = function componentWillMount() {\n\n    this.props.setMenu([{ icon: 'add', url: '/keys/add' }]);\n  };\n\n  KeysEmpty.prototype.render = function render() {\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'div',\n      { className: 'ui vertical center aligned very padded segment' },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'h2',\n        { className: 'ui center aligned icon header' },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'circular key icon' }),\n        ' Keys'\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'p',\n        null,\n        'Choose or add key to get started.'\n      )\n    );\n  };\n\n  return KeysEmpty;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class.propTypes = {\n  setMenu: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].func.isRequired\n}, _temp);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ0OS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL0tleXMvRW1wdHkvaW5kZXguanM/MGVlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlzRW1wdHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNldE1lbnU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgdGhpcy5wcm9wcy5zZXRNZW51KFt7IGljb246ICdhZGQnLCB1cmw6ICcva2V5cy9hZGQnIH1dKTtcbiAgfVxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB2ZXJ0aWNhbCBjZW50ZXIgYWxpZ25lZCB2ZXJ5IHBhZGRlZCBzZWdtZW50XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1aSBjZW50ZXIgYWxpZ25lZCBpY29uIGhlYWRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17J2NpcmN1bGFyIGtleSBpY29uJ30gLz4gS2V5c1xuICAgICAgICA8L2gyPlxuICAgICAgICA8cD5DaG9vc2Ugb3IgYWRkIGtleSB0byBnZXQgc3RhcnRlZC48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NsaWVudC9hc3NldHMvanMvY29tcG9uZW50cy9LZXlzL0VtcHR5L2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBOztBQW5CQTtBQUVBO0FBREE7QUFEQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

});