'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _axios = require('../../utils/axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;
//value必须转换为字符串

var MySelect = function (_React$Component) {
    _inherits(MySelect, _React$Component);

    function MySelect(props) {
        _classCallCheck(this, MySelect);

        var _this = _possibleConstructorReturn(this, (MySelect.__proto__ || Object.getPrototypeOf(MySelect)).call(this, props));

        _this.state = {
            valueKey: "id",
            textKey: "name",
            hasNullVal: true,
            nullValue: "",
            nullText: "请选择",
            data: []
        };
        _this.initData();
        return _this;
    }

    _createClass(MySelect, [{
        key: 'initData',
        value: async function initData() {
            if (this.props.url) {
                var rs = await _axios2.default.post(this.props.url, this.props.params || {});
                this.setState({ data: rs.data });
            }
        }
    }, {
        key: 'init',
        value: function init() {
            var rows = [];
            if (this.props.url) {
                this.state.hasNullVal && rows.push(_react2.default.createElement(
                    Option,
                    { key: '-1', value: this.state.nullValue },
                    this.state.nullText
                ));
                if (!this.state.data) return rows;
                var len = this.state.data.length;
                for (var i = 0; i < len; i++) {
                    var item = this.state.data[i];
                    var value = item[this.state.valueKey];
                    var text = item[this.state.textKey];
                    rows.push(_react2.default.createElement(
                        Option,
                        { key: value, title: text },
                        text
                    ));
                };
            } else {
                var len = this.props.options.length;
                if (this.props.options[0] instanceof Object) {
                    for (var _i = 0; _i < len; _i++) {
                        var _item = this.props.options[_i];
                        var _value = _item[this.state.valueKey];
                        var _text = _item[this.state.textKey];
                        rows.push(_react2.default.createElement(
                            Option,
                            { key: _value, title: _text },
                            _text
                        ));
                    }
                } else {
                    for (var _i2 = 0; _i2 < len; _i2++) {
                        var _value2 = this.props.options[_i2];
                        rows.push(_react2.default.createElement(
                            Option,
                            { key: _value2, title: _value2 },
                            _value2
                        ));
                    }
                }
            }
            return rows;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _antd.Select,
                this.props,
                this.init()
            );
        }
    }]);

    return MySelect;
}(_react2.default.Component);

exports.default = MySelect;