'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _string = require('../../utils/string');

var _string2 = _interopRequireDefault(_string);

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
      var fileList = [].concat(_toConsumableArray(info.fileList));
      fileList = fileList.map(function (file) {
        if (file.response) {
          file.url = file.response.data;
          delete file.thumbUrl;
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
      var _fileList = void 0;
      try {
        _fileList = JSON.parse(this.props.fileList || this.state.fileList);
        if (!(_fileList instanceof Object)) {
          _fileList = this.props.fileList;
          var index = _fileList.lastIndexOf('attname=');
          if (index > 0) {
            var name = _fileList.substring(index + 'attname='.length);
            _fileList = [{ "uid": _string2.default.uuid(), "lastModified": 1581676081373, "name": name, "size": 692032, "type": "image/png", "percent": 100, "status": "done", "xhr": {}, "url": this.props.fileList }];
          } else {
            _fileList = [];
          }
        }
      } catch (e) {
        _fileList = this.props.fileList;
        var _index = _fileList.lastIndexOf('attname=');
        if (_index > 0) {
          var _name = _fileList.substring(_index + 'attname='.length);
          _fileList = [{ "uid": _string2.default.uuid(), "lastModified": 1581676081373, "name": _name, "size": 692032, "type": "image/png", "percent": 100, "status": "done", "xhr": {}, "url": this.props.fileList }];
        } else {
          _fileList = [];
        }
      }
      return _react2.default.createElement(
        _antd.Upload,
        { className: this.props.cls, action: 'https://fastdfs.7ipr.com/ipr/fastdfs/upload', multiple: true, onChange: this.onChange.bind(this), fileList: _fileList, listType: 'picture' },
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