'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _axios = require('../utils/axios');

var _axios2 = _interopRequireDefault(_axios);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyTreeSelect = function (_React$Component) {
  _inherits(MyTreeSelect, _React$Component);

  function MyTreeSelect(props) {
    _classCallCheck(this, MyTreeSelect);

    var _this = _possibleConstructorReturn(this, (MyTreeSelect.__proto__ || Object.getPrototypeOf(MyTreeSelect)).call(this, props));

    _this.state = {
      value: undefined,
      label: undefined,
      treeData: [
        // { id: -1, pId: 0, value: '', title: '', isLeaf: false }
      ]
    };
    _this.initData();
    return _this;
  }

  _createClass(MyTreeSelect, [{
    key: 'initData',
    value: async function initData() {
      var rs = await _axios2.default.post(this.props.url, this.props.params || {});
      this.setState({ treeData: rs.data });
      // console.log(JSON.stringify(this.state.treeData));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onRef && this.props.onRef(this);
    }
  }, {
    key: 'onChange',
    value: function onChange(value, label, extra) {
      this.setState({ value: value, label: label });
      if (this.props.onChange) this.props.onChange(value, label, extra);
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.state.value;
      if (this.props.value) {
        value = this.props.value;
      }
      if (this.state.value instanceof Array) {
        value = this.state.value;
      }
      console.log(value);
      var tProps = {
        treeData: this.state.treeData,
        "value": value,
        treeCheckable: this.props.treeCheckable,
        showCheckedStrategy: this.props.showCheckedStrategy || "SHOW_CHILD", //SHOW_CHILD |  SHOW_ALL | SHOW_PARENT
        searchPlaceholder: this.props.placeholder || '请选择',
        showSearch: this.props.showSearch || true,
        treeNodeFilterProp: this.props.treeNodeFilterProp || "title",
        style: {
          width: '100%'
        },
        dropdownStyle: { maxHeight: 600, overflow: 'auto' },
        onChange: this.onChange.bind(this)
      };
      return _react2.default.createElement(_antd.TreeSelect, _extends({ treeDataSimpleMode: true }, tProps));
    }
  }]);

  return MyTreeSelect;
}(_react2.default.Component);

exports.default = MyTreeSelect;