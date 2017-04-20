webpackJsonp([56],{

/***/ 1464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_actions__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(54);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StoragesDetails; });\nvar _dec, _class, _class2, _temp2;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return _extends({}, state.storages);\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    actions: {\n      storages: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux__[\"a\" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_4_actions__[\"storages\"], dispatch)\n    }\n  };\n};\n\nvar StoragesDetails = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapStateToProps, mapDispatchToProps), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_components__[\"b\" /* AuthWrapper */])(_class = _dec(_class = (_temp2 = _class2 = function (_React$Component) {\n  _inherits(StoragesDetails, _React$Component);\n\n  function StoragesDetails() {\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, StoragesDetails);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {\n      isLoading: true\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  StoragesDetails.prototype.componentWillMount = function componentWillMount() {\n\n    this.setMenu(this.props.routeParams.id);\n  };\n\n  StoragesDetails.prototype.componentDidMount = function componentDidMount() {\n    var _this2 = this;\n\n    this.props.actions.storages.read(this.props.routeParams.id).then(function () {\n      return _this2.setState({ isLoading: false }, __WEBPACK_IMPORTED_MODULE_5_components__[\"a\" /* NProgress */].done);\n    });\n  };\n\n  StoragesDetails.prototype.componentWillUnmount = function componentWillUnmount() {\n\n    this.setState({ isLoading: true });\n  };\n\n  StoragesDetails.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {\n    var _this3 = this;\n\n    if (nextProps.routeParams.id !== this.props.routeParams.id) {\n      this.setState({ isLoading: true }, function () {\n\n        _this3.setMenu(nextProps.routeParams.id);\n        _this3.props.actions.storages.read(nextProps.routeParams.id).then(function () {\n          return _this3.setState({ isLoading: false }, __WEBPACK_IMPORTED_MODULE_5_components__[\"a\" /* NProgress */].done);\n        });\n      });\n    }\n  };\n\n  StoragesDetails.prototype.setMenu = function setMenu(id) {\n\n    this.props.setMenu([{ icon: 'edit', url: '/storages/' + id + '/edit' }, { icon: 'delete', url: '/storages/' + id + '/delete' }, { icon: 'add', url: '/storages/add' }]);\n  };\n\n  StoragesDetails.prototype.render = function render() {\n\n    return this.props.children ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children, _extends({}, this.props)) : this.state.isLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__[\"c\" /* Loading */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Table\"],\n      { striped: true, definition: true, size: 'small' },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Table\"].Body,\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Table\"].Row,\n          null,\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Table\"].Cell,\n            { collapsing: true },\n            'ID'\n          ),\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Table\"].Cell,\n            null,\n            this.props.storage.id\n          )\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Table\"].Row,\n          null,\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Table\"].Cell,\n            null,\n            'Name'\n          ),\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Table\"].Cell,\n            null,\n            this.props.storage.name\n          )\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Table\"].Row,\n          null,\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Table\"].Cell,\n            null,\n            'Path'\n          ),\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__[\"Table\"].Cell,\n            null,\n            this.props.storage.path\n          )\n        )\n      )\n    );\n  };\n\n  return StoragesDetails;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class2.propTypes = {\n  actions: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  children: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object,\n  storage: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  routeParams: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  setMenu: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].func.isRequired\n}, _temp2)) || _class) || _class);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ2NC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0b3JhZ2VzL0RldGFpbC9pbmRleC5qcz8xYzVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICdhY3Rpb25zJztcbmltcG9ydCB7IEF1dGhXcmFwcGVyLCBMb2FkaW5nLCBOUHJvZ3Jlc3MgfSBmcm9tICdjb21wb25lbnRzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAuLi5zdGF0ZS5zdG9yYWdlc1xufSk7XG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGFjdGlvbnM6IHtcbiAgICBzdG9yYWdlczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLnN0b3JhZ2VzLCBkaXNwYXRjaClcbiAgfVxufSk7XG5cbkBBdXRoV3JhcHBlclxuQGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlc0RldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdG9yYWdlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcm91dGVQYXJhbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzZXRNZW51OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG4gIHN0YXRlID0ge1xuICAgIGlzTG9hZGluZzogdHJ1ZVxuICB9O1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICB0aGlzLnNldE1lbnUodGhpcy5wcm9wcy5yb3V0ZVBhcmFtcy5pZCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuc3RvcmFnZXMucmVhZCh0aGlzLnByb3BzLnJvdXRlUGFyYW1zLmlkKVxuICAgIC50aGVuKCgpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0sIE5Qcm9ncmVzcy5kb25lKSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0pO1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG5cbiAgICBpZiAobmV4dFByb3BzLnJvdXRlUGFyYW1zLmlkICE9PSB0aGlzLnByb3BzLnJvdXRlUGFyYW1zLmlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiB0cnVlIH0sICgpID0+IHtcblxuICAgICAgICB0aGlzLnNldE1lbnUobmV4dFByb3BzLnJvdXRlUGFyYW1zLmlkKTtcbiAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLnN0b3JhZ2VzLnJlYWQobmV4dFByb3BzLnJvdXRlUGFyYW1zLmlkKVxuICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0sIE5Qcm9ncmVzcy5kb25lKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc2V0TWVudShpZCkge1xuXG4gICAgdGhpcy5wcm9wcy5zZXRNZW51KFtcbiAgICAgIHsgaWNvbjogJ2VkaXQnLCB1cmw6IGAvc3RvcmFnZXMvJHtpZH0vZWRpdGAgfSxcbiAgICAgIHsgaWNvbjogJ2RlbGV0ZScsIHVybDogYC9zdG9yYWdlcy8ke2lkfS9kZWxldGVgIH0sXG4gICAgICB7IGljb246ICdhZGQnLCB1cmw6ICcvc3RvcmFnZXMvYWRkJyB9XG4gICAgXSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gPyBSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZHJlbiwgeyAuLi50aGlzLnByb3BzIH0pIDogKFxuICAgICAgdGhpcy5zdGF0ZS5pc0xvYWRpbmcgPyA8TG9hZGluZyAvPiA6XG4gICAgICAgIDxUYWJsZSBzdHJpcGVkIGRlZmluaXRpb24gc2l6ZT0nc21hbGwnPlxuICAgICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlLkNlbGwgY29sbGFwc2luZz5JRDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3RvcmFnZS5pZH1cbiAgICAgICAgICAgICAgPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG4gICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5OYW1lPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdG9yYWdlLm5hbWV9XG4gICAgICAgICAgICAgIDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGUuUm93PlxuICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+UGF0aDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3RvcmFnZS5wYXRofVxuICAgICAgICAgICAgICA8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICA8L1RhYmxlLkJvZHk+XG4gICAgICAgIDwvVGFibGU+XG5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NsaWVudC9hc3NldHMvanMvY29tcG9uZW50cy9TdG9yYWdlcy9EZXRhaWwvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUFBO0FBQ0E7QUFPQTs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFiQTtBQURBO0FBd0JBO0FBQ0E7O0FBeEVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

});