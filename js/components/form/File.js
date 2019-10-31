'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var File = function (_React$Component) {
  _inherits(File, _React$Component);

  function File(props) {
    _classCallCheck(this, File);

    var _this = _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).call(this, props));

    _this.state = {
      fileList: "[]"
    };
    return _this;
  }

  _createClass(File, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onRef && this.props.onRef(this);
    }
  }, {
    key: 'onChange',
    value: function onChange(info) {
      var _this2 = this;

      var fileList = [].concat(_toConsumableArray(info.fileList));
      fileList = fileList.map(function (file) {
        if (file.response) {
          file.url = _this2.props.serverPath + file.response.data.file[0];
          file.thumbUrl = file.url;
          delete file.lastModifiedDate;
          delete file.originFileObj;
          delete file.response;
        }
        return file;
      });
      if (fileList) fileList = JSON.stringify(fileList);
      if (this.props.onChange) this.props.onChange(fileList);else this.setState({ fileList: fileList });
    }
  }, {
    key: 'render',
    value: function render() {
      var _fileList = JSON.parse(this.props.fileList || this.state.fileList);
      return _react2.default.createElement(
        _antd.Upload,
        { action: this.props.serverPath + "upload/run", multiple: true, onChange: this.onChange.bind(this), fileList: _fileList, listType: 'picture' },
        _react2.default.createElement(
          _antd.Button,
          { style: { display: this.props.hide == "true" ? "none" : "" } },
          _react2.default.createElement(_antd.Icon, { type: 'upload' }),
          ' \u4E0A\u4F20'
        )
      );
    }
  }]);

  return File;
}(_react2.default.Component);

exports.default = File;