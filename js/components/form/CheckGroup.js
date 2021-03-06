'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _dic = require('../../utils/dic');

var _dic2 = _interopRequireDefault(_dic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckGroup = function (_React$Component) {
    _inherits(CheckGroup, _React$Component);

    function CheckGroup(props) {
        _classCallCheck(this, CheckGroup);

        var _this = _possibleConstructorReturn(this, (CheckGroup.__proto__ || Object.getPrototypeOf(CheckGroup)).call(this, props));

        _this.state = {
            value: "[]",
            //options,dic只有一个能生效
            options: _this.props.options,
            dic: _this.props.dic //{ app:"",type:""},
            // url: this.props.url
        };
        return _this;
    }

    _createClass(CheckGroup, [{
        key: 'init',
        value: function init() {
            var rows = [];
            if (this.state.dic) {
                var data = void 0;
                if (this.state.dic.subType) {
                    data = _dic2.default.list(this.state.dic.app, this.state.dic.type, this.state.dic.subType);
                } else {
                    data = _dic2.default.list(this.state.dic.app, this.state.dic.type);
                }
                if (!data) return rows;
                var len = data.length;
                for (var i = 0; i < len; i++) {
                    var item = data[i];
                    var value = item.value;
                    var text = item.zh_CN;
                    rows.push(_react2.default.createElement(
                        _antd.Checkbox,
                        { style: { marginRight: "5px" }, key: "chekbox-" + i, value: value },
                        text
                    ));
                };
            } else {
                this.state.options.map(function (item, index) {
                    if (item instanceof Object) {
                        rows.push(_react2.default.createElement(
                            _antd.Checkbox,
                            { style: { marginRight: "5px" }, key: "chekbox-" + index, value: item.id },
                            item.name
                        ));
                    } else {
                        rows.push(_react2.default.createElement(
                            _antd.Checkbox,
                            { style: { marginRight: "5px" }, key: "chekbox-" + index, value: item },
                            item
                        ));
                    }
                });
            }
            return rows;
        }
    }, {
        key: 'onChange',
        value: function onChange(value) {
            if (value) value = JSON.stringify(value);
            if (this.props.onChange) this.props.onChange(value);else this.setState({ value: value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _value = JSON.parse(this.props.value || this.state.value);
            return _react2.default.createElement(
                _antd.Checkbox.Group,
                { value: _value, onChange: this.onChange.bind(this) },
                this.init()
            );
        }
    }]);

    return CheckGroup;
}(_react2.default.Component);

exports.default = CheckGroup;