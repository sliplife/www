webpackJsonp([54],{

/***/ 1467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(104);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__(25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_actions__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components__ = __webpack_require__(54);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TagsDelete; });\nvar _dec, _class, _class2, _temp;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return _extends({}, state.tags);\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    dispatch: dispatch,\n    actions: {\n      alert: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__[\"a\" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_5_actions__[\"alert\"], dispatch),\n      tags: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__[\"a\" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_5_actions__[\"tags\"], dispatch)\n    }\n  };\n};\n\nvar TagsDelete = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__[\"connect\"])(mapStateToProps, mapDispatchToProps), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_components__[\"b\" /* AuthWrapper */])(_class = _dec(_class = (_temp = _class2 = function (_React$Component) {\n  _inherits(TagsDelete, _React$Component);\n\n  function TagsDelete(props) {\n    _classCallCheck(this, TagsDelete);\n\n    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));\n\n    _this.state = {\n      isLoading: true,\n      isDeleting: false,\n      modalOpen: false\n    };\n\n    _this.delete = _this.delete.bind(_this);\n    _this.handleCancel = _this.handleCancel.bind(_this);\n    _this.handleDelete = _this.handleDelete.bind(_this);\n    return _this;\n  }\n\n  TagsDelete.prototype.componentDidMount = function componentDidMount() {\n    var _this2 = this;\n\n    this.props.actions.tags.read(this.props.routeParams.id).then(function () {\n      return _this2.setState({ isLoading: false }, __WEBPACK_IMPORTED_MODULE_6_components__[\"a\" /* NProgress */].done);\n    });\n  };\n\n  TagsDelete.prototype.delete = function _delete(event) {\n    var _this3 = this;\n\n    event.preventDefault();\n    this.setState({ isDeleting: true, modalOpen: false }, function () {\n\n      _this3.props.actions.tags.destroy(_this3.props.tag.id).then(function (response) {\n        var tag = response.payload.tag;\n\n        _this3.props.actions.alert.success(tag.name + ' deleted!');\n        _this3.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__[\"push\"])('/tags'));\n      });\n    });\n  };\n\n  TagsDelete.prototype.handleDelete = function handleDelete() {\n\n    this.setState({ modalOpen: true });\n  };\n\n  TagsDelete.prototype.handleCancel = function handleCancel() {\n\n    this.setState({ modalOpen: false });\n  };\n\n  TagsDelete.prototype.render = function render() {\n\n    return this.state.isLoading ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_components__[\"c\" /* Loading */], null) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      'div',\n      null,\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__[\"Message\"], {\n        icon: 'remove',\n        header: 'Delete ' + this.props.tag.name,\n        content: 'Once you delete a tag, there is no going back. Please be certain.'\n      }),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__[\"Modal\"],\n        { dimmer: 'blurring', basic: true, size: 'small',\n          open: this.state.modalOpen,\n          trigger: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__[\"Button\"], {\n            onClick: this.handleDelete,\n            fluid: true,\n            primary: true,\n            loading: this.state.isDeleting,\n            content: 'Delete'\n          }) },\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__[\"Header\"], { icon: 'remove', content: 'Delete ' + this.props.tag.name }),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__[\"Modal\"].Content,\n          null,\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'p',\n            null,\n            'Once you delete an tag, there is no going back. Please be certain.'\n          )\n        ),\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__[\"Modal\"].Actions,\n          null,\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__[\"Button\"],\n            { basic: true, inverted: true, onClick: this.handleCancel },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__[\"Icon\"], { name: 'remove' }),\n            ' No'\n          ),\n          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__[\"Button\"],\n            { inverted: true, color: 'red', onClick: this.delete },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__[\"Icon\"], { name: 'checkmark' }),\n            ' Yes'\n          )\n        )\n      )\n    );\n  };\n\n  return TagsDelete;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class2.propTypes = {\n  actions: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  dispatch: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].func.isRequired,\n  routeParams: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired,\n  tag: __WEBPACK_IMPORTED_MODULE_0_react__[\"PropTypes\"].object.isRequired\n}, _temp)) || _class) || _class);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ2Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhZ3MvRGV0YWlsL0RlbGV0ZS9pbmRleC5qcz8wNmJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcHVzaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBCdXR0b24sIEhlYWRlciwgSWNvbiwgTWVzc2FnZSwgTW9kYWwgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICdhY3Rpb25zJztcbmltcG9ydCB7IEF1dGhXcmFwcGVyLCBMb2FkaW5nLCBOUHJvZ3Jlc3MgfSBmcm9tICdjb21wb25lbnRzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAuLi5zdGF0ZS50YWdzXG59KTtcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgZGlzcGF0Y2gsXG4gIGFjdGlvbnM6IHtcbiAgICBhbGVydDogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLmFsZXJ0LCBkaXNwYXRjaCksXG4gICAgdGFnczogYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLnRhZ3MsIGRpc3BhdGNoKVxuICB9XG59KTtcblxuQEF1dGhXcmFwcGVyXG5AY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZ3NEZWxldGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByb3V0ZVBhcmFtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHRhZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG4gIHN0YXRlID0ge1xuICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICBpc0RlbGV0aW5nOiBmYWxzZSxcbiAgICBtb2RhbE9wZW46IGZhbHNlXG4gIH07XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5kZWxldGUgPSB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2FuY2VsID0gdGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURlbGV0ZSA9IHRoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB0aGlzLnByb3BzLmFjdGlvbnMudGFncy5yZWFkKHRoaXMucHJvcHMucm91dGVQYXJhbXMuaWQpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9LCBOUHJvZ3Jlc3MuZG9uZSkpO1xuICB9XG4gIGRlbGV0ZShldmVudCkge1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNEZWxldGluZzogdHJ1ZSwgbW9kYWxPcGVuOiBmYWxzZSB9LCAoKSA9PiB7XG5cbiAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy50YWdzLmRlc3Ryb3kodGhpcy5wcm9wcy50YWcuaWQpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgICAgY29uc3QgeyB0YWcgfSA9IHJlc3BvbnNlLnBheWxvYWQ7XG4gICAgICAgICAgdGhpcy5wcm9wcy5hY3Rpb25zLmFsZXJ0LnN1Y2Nlc3MoYCR7dGFnLm5hbWV9IGRlbGV0ZWQhYCk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChwdXNoKCcvdGFncycpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlRGVsZXRlKCkge1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGFsT3BlbjogdHJ1ZSB9KTtcbiAgfVxuICBoYW5kbGVDYW5jZWwoKSB7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kYWxPcGVuOiBmYWxzZSB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuaXNMb2FkaW5nID8gPExvYWRpbmcgLz4gOlxuICAgICAgPGRpdj5cbiAgICAgICAgPE1lc3NhZ2VcbiAgICAgICAgICBpY29uPSdyZW1vdmUnXG4gICAgICAgICAgaGVhZGVyPXtgRGVsZXRlICR7dGhpcy5wcm9wcy50YWcubmFtZX1gfVxuICAgICAgICAgIGNvbnRlbnQ9J09uY2UgeW91IGRlbGV0ZSBhIHRhZywgdGhlcmUgaXMgbm8gZ29pbmcgYmFjay4gUGxlYXNlIGJlIGNlcnRhaW4uJ1xuICAgICAgICAvPlxuICAgICAgICA8TW9kYWwgZGltbWVyPSdibHVycmluZycgYmFzaWMgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5tb2RhbE9wZW59XG4gICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsZXRlfVxuICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuaXNEZWxldGluZ31cbiAgICAgICAgICAgICAgY29udGVudD0nRGVsZXRlJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH0+XG4gICAgICAgICAgICA8SGVhZGVyIGljb249J3JlbW92ZScgY29udGVudD17YERlbGV0ZSAke3RoaXMucHJvcHMudGFnLm5hbWV9YH0gLz5cbiAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxuICAgICAgICAgICAgICA8cD5PbmNlIHlvdSBkZWxldGUgYW4gdGFnLCB0aGVyZSBpcyBubyBnb2luZyBiYWNrLiBQbGVhc2UgYmUgY2VydGFpbi48L3A+XG4gICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgICA8TW9kYWwuQWN0aW9ucz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBiYXNpYyBpbnZlcnRlZCBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH0+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT0ncmVtb3ZlJyAvPiBOb1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBpbnZlcnRlZCBjb2xvcj0ncmVkJyBvbkNsaWNrPXt0aGlzLmRlbGV0ZX0+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT0nY2hlY2ttYXJrJyAvPiBZZXNcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L01vZGFsLkFjdGlvbnM+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY2xpZW50L2Fzc2V0cy9qcy9jb21wb25lbnRzL1RhZ3MvRGV0YWlsL0RlbGV0ZS9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQUE7QUFDQTtBQVNBOzs7QUFZQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFKQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFKQTtBQWZBO0FBTkE7QUFnQ0E7QUFDQTs7QUFsRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7Ozs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

});