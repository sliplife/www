webpackJsonp([5],{

/***/ 1433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_actions__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(54);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Empty__ = __webpack_require__(1493);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UsersBrowse; });\nvar _dec, _class, _class2, _temp;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return _extends({}, state.users);\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    actions: {\n      users: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__[\"a\" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_4_actions__[\"users\"], dispatch)\n    }\n  };\n};\n\nvar UsersBrowse = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapStateToProps, mapDispatchToProps), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_components__[\"b\" /* AuthWrapper */])(_class = _dec(_class = (_temp = _class2 = function (_React$Component) {\n  _inherits(UsersBrowse, _React$Component);\n\n  function UsersBrowse(props) {\n    _classCallCheck(this, UsersBrowse);\n\n    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));\n\n    _this.state = {\n      menuItems: []\n    };\n\n    _this.setMenu = _this.setMenu.bind(_this);\n    return _this;\n  }\n\n  UsersBrowse.prototype.componentDidMount = function componentDidMount() {\n\n    __WEBPACK_IMPORTED_MODULE_5_components__[\"a\" /* NProgress */].done();\n  };\n\n  UsersBrowse.prototype.componentWillReceiveProps = function componentWillReceiveProps() {\n\n    __WEBPACK_IMPORTED_MODULE_5_components__[\"a\" /* NProgress */].done();\n  };\n\n  UsersBrowse.prototype.setMenu = function setMenu(menuItems) {\n\n    this.setState({ menuItems: menuItems });\n  };\n\n  UsersBrowse.prototype.render = function render() {\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"],\n      { stackable: true },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n          { stretched: true, width: 4 },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__[\"g\" /* Scroller */], {\n            basePath: '/users',\n            itemRender: function itemRender(item) {\n              return item.email;\n            },\n            items: this.props.users,\n            actions: this.props.actions.users,\n            pagination: this.props.pagination\n          })\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n          { width: 12 },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"],\n            { stackable: true },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n                { width: 16 },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__[\"h\" /* Menu */], { items: this.state.menuItems })\n              )\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n                { width: 16 },\n                this.props.children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children, { setMenu: this.setMenu }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Empty__[\"a\" /* default */], { setMenu: this.setMenu })\n              )\n            )\n          )\n        )\n      )\n    );\n  };\n\n  return UsersBrowse;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class2.propTypes = {\n  actions: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  children: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object,\n  pagination: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  users: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].array.isRequired\n}, _temp)) || _class) || _class);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQzMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXJzL2luZGV4LmpzPzM4NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnYWN0aW9ucyc7XG5pbXBvcnQgeyBBdXRoV3JhcHBlciwgTWVudSwgTlByb2dyZXNzLCBTY3JvbGxlciB9IGZyb20gJ2NvbXBvbmVudHMnO1xuaW1wb3J0IEVtcHR5IGZyb20gJy4vRW1wdHknO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIC4uLnN0YXRlLnVzZXJzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBhY3Rpb25zOiB7XG4gICAgdXNlcnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycy51c2VycywgZGlzcGF0Y2gpXG4gIH1cbn0pO1xuXG5AQXV0aFdyYXBwZXJcbkBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNCcm93c2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdXNlcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH07XG4gIHN0YXRlID0ge1xuICAgIG1lbnVJdGVtczogW11cbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldE1lbnUgPSB0aGlzLnNldE1lbnUuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcblxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gIH1cbiAgc2V0TWVudShtZW51SXRlbXMpIHtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51SXRlbXMgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuICAoXG4gICAgICA8R3JpZCBzdGFja2FibGU+XG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXs0fT5cbiAgICAgICAgICAgIDxTY3JvbGxlclxuICAgICAgICAgICAgICBiYXNlUGF0aD1cIi91c2Vyc1wiXG4gICAgICAgICAgICAgIGl0ZW1SZW5kZXI9eyhpdGVtKSA9PiBpdGVtLmVtYWlsfVxuICAgICAgICAgICAgICBpdGVtcz17dGhpcy5wcm9wcy51c2Vyc31cbiAgICAgICAgICAgICAgYWN0aW9ucz17dGhpcy5wcm9wcy5hY3Rpb25zLnVzZXJzfVxuICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt0aGlzLnByb3BzLnBhZ2luYXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICA8R3JpZCBzdGFja2FibGU+XG4gICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezE2fT5cbiAgICAgICAgICAgICAgICAgIDxNZW51IGl0ZW1zPXt0aGlzLnN0YXRlLm1lbnVJdGVtc30gLz5cbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbiA/IFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7IHNldE1lbnU6IHRoaXMuc2V0TWVudSB9KSA6IDxFbXB0eSBzZXRNZW51PXt0aGlzLnNldE1lbnV9IC8+fVxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NsaWVudC9hc3NldHMvanMvY29tcG9uZW50cy9Vc2Vycy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBQ0E7QUFPQTs7O0FBVUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBRkE7QUFEQTtBQUNBO0FBS0E7QUFIQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFOQTtBQURBO0FBVkE7QUFEQTtBQTRCQTtBQUNBOztBQTNEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 1493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return UsersEmpty; });\nvar _class, _temp;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar UsersEmpty = (_temp = _class = function (_React$Component) {\n  _inherits(UsersEmpty, _React$Component);\n\n  function UsersEmpty() {\n    _classCallCheck(this, UsersEmpty);\n\n    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n  }\n\n  UsersEmpty.prototype.componentWillMount = function componentWillMount() {\n\n    this.props.setMenu([{ icon: 'add', url: '/users/add' }]);\n  };\n\n  UsersEmpty.prototype.render = function render() {\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'div',\n      { className: 'ui vertical center aligned very padded segment' },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'h2',\n        { className: 'ui center aligned icon header' },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'circular users icon' }),\n        ' Users'\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'p',\n        null,\n        'Choose or add user to get started.'\n      )\n    );\n  };\n\n  return UsersEmpty;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class.propTypes = {\n  setMenu: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].func.isRequired\n}, _temp);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ5My5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXJzL0VtcHR5L2luZGV4LmpzP2UzMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcnNFbXB0eSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2V0TWVudTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLnNldE1lbnUoW3sgaWNvbjogJ2FkZCcsIHVybDogJy91c2Vycy9hZGQnIH1dKTtcbiAgfVxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB2ZXJ0aWNhbCBjZW50ZXIgYWxpZ25lZCB2ZXJ5IHBhZGRlZCBzZWdtZW50XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1aSBjZW50ZXIgYWxpZ25lZCBpY29uIGhlYWRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17J2NpcmN1bGFyIHVzZXJzIGljb24nfSAvPiBVc2Vyc1xuICAgICAgICA8L2gyPlxuICAgICAgICA8cD5DaG9vc2Ugb3IgYWRkIHVzZXIgdG8gZ2V0IHN0YXJ0ZWQuPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jbGllbnQvYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlcnMvRW1wdHkvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7O0FBbkJBO0FBRUE7QUFEQTtBQURBOzs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

});