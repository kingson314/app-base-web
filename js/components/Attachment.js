'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _net = require('../utils/net');

var _net2 = _interopRequireDefault(_net);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//附件
var Attachment = function (_React$Component) {
    _inherits(Attachment, _React$Component);

    function Attachment(props) {
        _classCallCheck(this, Attachment);

        var _this = _possibleConstructorReturn(this, (Attachment.__proto__ || Object.getPrototypeOf(Attachment)).call(this, props));

        _this.state = {
            urlArr: [],
            attnameArr: []
        };
        return _this;
    }

    _createClass(Attachment, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.url) return;
            var url = this.props.url || "";
            var urlArr = url.split(",");
            var attnameArr = [];
            for (var i = 0; i < urlArr.length; i++) {
                var attname = _net2.default.getUrlParam(urlArr[i], "attname");
                attnameArr.push(attname);
            }
            this.setState({
                urlArr: urlArr,
                attnameArr: attnameArr
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'span',
                null,
                this.state.urlArr.map(function (url, index) {
                    return _react2.default.createElement(
                        'a',
                        { style: { marginRight: "8px" }, key: index, href: url, download: _this2.state.attnameArr[index] },
                        _this2.state.attnameArr[index]
                    );
                })
            );
        }
    }]);

    return Attachment;
}(_react2.default.Component);

exports.default = Attachment;