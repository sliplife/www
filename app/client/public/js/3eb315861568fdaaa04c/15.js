webpackJsonp([15],{

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_actions__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(54);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Empty__ = __webpack_require__(1458);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageBrowse; });\nvar _dec, _class, _class2, _temp;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return _extends({}, state.pages);\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    actions: {\n      pages: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__[\"a\" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_4_actions__[\"pages\"], dispatch)\n    }\n  };\n};\n\nvar PageBrowse = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapStateToProps, mapDispatchToProps), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_components__[\"b\" /* AuthWrapper */])(_class = _dec(_class = (_temp = _class2 = function (_React$Component) {\n  _inherits(PageBrowse, _React$Component);\n\n  function PageBrowse(props) {\n    _classCallCheck(this, PageBrowse);\n\n    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));\n\n    _this.state = {\n      menuItems: []\n    };\n\n    _this.setMenu = _this.setMenu.bind(_this);\n    return _this;\n  }\n\n  PageBrowse.prototype.componentDidMount = function componentDidMount() {\n\n    __WEBPACK_IMPORTED_MODULE_5_components__[\"a\" /* NProgress */].done();\n  };\n\n  PageBrowse.prototype.componentWillReceiveProps = function componentWillReceiveProps() {\n\n    __WEBPACK_IMPORTED_MODULE_5_components__[\"a\" /* NProgress */].done();\n  };\n\n  PageBrowse.prototype.setMenu = function setMenu(menuItems) {\n\n    this.setState({ menuItems: menuItems });\n  };\n\n  PageBrowse.prototype.render = function render() {\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"],\n      { stackable: true },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n          { stretched: true, width: 4 },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__[\"g\" /* Scroller */], {\n            basePath: '/pages',\n            itemRender: function itemRender(item) {\n              return item.title;\n            },\n            items: this.props.pages,\n            actions: this.props.actions.pages,\n            pagination: this.props.pagination\n          })\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n          { width: 12 },\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"],\n            { stackable: true },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n                { width: 16 },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__[\"h\" /* Menu */], { items: this.state.menuItems })\n              )\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Row,\n              null,\n              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Grid\"].Column,\n                { width: 16 },\n                this.props.children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children, { setMenu: this.setMenu }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Empty__[\"a\" /* default */], { setMenu: this.setMenu })\n              )\n            )\n          )\n        )\n      )\n    );\n  };\n\n  return PageBrowse;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class2.propTypes = {\n  actions: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  children: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object,\n  pagination: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  pages: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].array.isRequired\n}, _temp)) || _class) || _class);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQxNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2VzL2luZGV4LmpzPzJiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnYWN0aW9ucyc7XG5pbXBvcnQgeyBBdXRoV3JhcHBlciwgTWVudSwgTlByb2dyZXNzLCBTY3JvbGxlciB9IGZyb20gJ2NvbXBvbmVudHMnO1xuaW1wb3J0IEVtcHR5IGZyb20gJy4vRW1wdHknO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIC4uLnN0YXRlLnBhZ2VzXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgYWN0aW9uczoge1xuICAgIHBhZ2VzOiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMucGFnZXMsIGRpc3BhdGNoKVxuICB9XG59KTtcblxuQEF1dGhXcmFwcGVyXG5AY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VCcm93c2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcGFnZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH07XG4gIHN0YXRlID0ge1xuICAgIG1lbnVJdGVtczogW11cbiAgfTtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldE1lbnUgPSB0aGlzLnNldE1lbnUuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcblxuICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gIH1cbiAgc2V0TWVudShtZW51SXRlbXMpIHtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51SXRlbXMgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuICAoXG4gICAgICA8R3JpZCBzdGFja2FibGU+XG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkIHdpZHRoPXs0fT5cbiAgICAgICAgICAgIDxTY3JvbGxlclxuICAgICAgICAgICAgICBiYXNlUGF0aD1cIi9wYWdlc1wiXG4gICAgICAgICAgICAgIGl0ZW1SZW5kZXI9eyhpdGVtKSA9PiBpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICBpdGVtcz17dGhpcy5wcm9wcy5wYWdlc31cbiAgICAgICAgICAgICAgYWN0aW9ucz17dGhpcy5wcm9wcy5hY3Rpb25zLnBhZ2VzfVxuICAgICAgICAgICAgICBwYWdpbmF0aW9uPXt0aGlzLnByb3BzLnBhZ2luYXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMn0+XG4gICAgICAgICAgICA8R3JpZCBzdGFja2FibGU+XG4gICAgICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezE2fT5cbiAgICAgICAgICAgICAgICAgIDxNZW51IGl0ZW1zPXt0aGlzLnN0YXRlLm1lbnVJdGVtc30gLz5cbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxNn0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbiA/IFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7IHNldE1lbnU6IHRoaXMuc2V0TWVudSB9KSA6IDxFbXB0eSBzZXRNZW51PXt0aGlzLnNldE1lbnV9IC8+fVxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NsaWVudC9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUNBO0FBT0E7OztBQVVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUZBO0FBREE7QUFDQTtBQUtBO0FBSEE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTkE7QUFEQTtBQVZBO0FBREE7QUE0QkE7QUFDQTs7QUEzREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 1458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return PagesEmpty; });\nvar _class, _temp;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar PagesEmpty = (_temp = _class = function (_React$Component) {\n  _inherits(PagesEmpty, _React$Component);\n\n  function PagesEmpty() {\n    _classCallCheck(this, PagesEmpty);\n\n    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n  }\n\n  PagesEmpty.prototype.componentWillMount = function componentWillMount() {\n\n    this.props.setMenu([{ icon: 'add', url: '/pages/add' }]);\n  };\n\n  PagesEmpty.prototype.render = function render() {\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'div',\n      { className: 'ui vertical center aligned very padded segment' },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'h2',\n        { className: 'ui center aligned icon header' },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'circular sitemap icon' }),\n        ' Pages'\n      ),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'p',\n        null,\n        'Choose or add page to get started.'\n      )\n    );\n  };\n\n  return PagesEmpty;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class.propTypes = {\n  setMenu: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].func.isRequired\n}, _temp);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ1OC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2VzL0VtcHR5L2luZGV4LmpzPzg2MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZXNFbXB0eSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2V0TWVudTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLnNldE1lbnUoW3sgaWNvbjogJ2FkZCcsIHVybDogJy9wYWdlcy9hZGQnIH1dKTtcbiAgfVxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB2ZXJ0aWNhbCBjZW50ZXIgYWxpZ25lZCB2ZXJ5IHBhZGRlZCBzZWdtZW50XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ1aSBjZW50ZXIgYWxpZ25lZCBpY29uIGhlYWRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17J2NpcmN1bGFyIHNpdGVtYXAgaWNvbid9IC8+IFBhZ2VzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwPkNob29zZSBvciBhZGQgcGFnZSB0byBnZXQgc3RhcnRlZC48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NsaWVudC9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlcy9FbXB0eS9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFDQTs7QUFuQkE7QUFFQTtBQURBO0FBREE7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

});