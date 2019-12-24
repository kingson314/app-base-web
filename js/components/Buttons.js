'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Empty = function (_React$Component) {
    _inherits(Empty, _React$Component);

    function Empty(props) {
        _classCallCheck(this, Empty);

        return _possibleConstructorReturn(this, (Empty.__proto__ || Object.getPrototypeOf(Empty)).call(this, props));
    }

    _createClass(Empty, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                { style: { padding: "30px 5%" } },
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-copy' },
                        'btn-copy'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-detail' },
                        'btn-detail'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-collapse' },
                        'btn-collapse'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-add' },
                        'btn-add'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-del' },
                        'btn-del'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-active' },
                        'btn-active'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-sendMsg' },
                        'btn-sendMsg'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-sendEmail' },
                        'btn-sendEmail'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-auth' },
                        'btn-auth'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-notPass' },
                        'btn-notPass'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-pass' },
                        'btn-pass'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-his' },
                        'btn-his'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-score' },
                        'btn-score'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-revoke' },
                        'btn-revoke'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-revoke1' },
                        'btn-revoke1'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-publish' },
                        'btn-publish'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-ask' },
                        'btn-ask'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-contact' },
                        'btn-contact'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-send' },
                        'btn-send'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        _antd.Button,
                        { className: 'btn-large' },
                        'btn-large'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { style: { float: "left", margin: "15px" } },
                    _react2.default.createElement(
                        'a',
                        { className: 'btn-eaxm' },
                        'btn-eaxm'
                    )
                )
            );
        }
    }]);

    return Empty;
}(_react2.default.Component);

exports.default = Empty;