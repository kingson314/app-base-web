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
// import dicList from '../../dicList'
// import axios from '../../utils/axios';


var Option = _antd.Select.Option;
// const url= "CfgDictionary/getByType";

var Dic = function (_React$Component) {
    _inherits(Dic, _React$Component);

    function Dic(props) {
        _classCallCheck(this, Dic);

        var _this = _possibleConstructorReturn(this, (Dic.__proto__ || Object.getPrototypeOf(Dic)).call(this, props));

        _this.state = {
            hasNullVal: true,
            nullValue: "",
            nullText: "请选择",
            data: []
            // this.initData();
        };return _this;
    }

    // async initData(){
    //     if(this.props.sync){ 
    //         let rs= await axios.post(url,this.props.params);
    //         this.setState({data:rs.data});
    //     }
    // }


    _createClass(Dic, [{
        key: 'init',
        value: function init() {
            var me = this;
            var rows = [];
            this.state.hasNullVal && rows.push(_react2.default.createElement(
                Option,
                { key: '-1', value: this.state.nullValue },
                this.state.nullText
            ));
            var data = void 0;
            // if(this.props.sync){
            //     data=this.state.data;
            // }else{
            if (this.props.params.subType) {
                data = _dic2.default.list(this.props.params.app, this.props.params.type, this.props.params.subType);
            } else {
                data = _dic2.default.list(this.props.params.app, this.props.params.type);
            }
            // }
            if (!data) return rows;
            var len = data.length;
            for (var i = 0; i < len; i++) {
                var item = data[i];
                var value = item.value;
                var text = item.zh_CN;
                rows.push(_react2.default.createElement(
                    Option,
                    { key: value, title: text },
                    text
                ));
            };
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

    return Dic;
}(_react2.default.Component);

exports.default = Dic;