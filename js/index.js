'use strict';

var _index = require('./jquery/index');

var _index2 = _interopRequireDefault(_index);

var _check = require('./utils/check');

var _check2 = _interopRequireDefault(_check);

var _component = require('./utils/component');

var _component2 = _interopRequireDefault(_component);

var _axios = require('./utils/axios');

var _axios2 = _interopRequireDefault(_axios);

var _array = require('./utils/array');

var _array2 = _interopRequireDefault(_array);

var _number = require('./utils/number');

var _number2 = _interopRequireDefault(_number);

var _string = require('./utils/string');

var _string2 = _interopRequireDefault(_string);

var _date = require('./utils/date');

var _date2 = _interopRequireDefault(_date);

var _event = require('./utils/event');

var _event2 = _interopRequireDefault(_event);

var _file = require('./utils/file');

var _file2 = _interopRequireDefault(_file);

var _net = require('./utils/net');

var _net2 = _interopRequireDefault(_net);

var _xlsx = require('./utils/xlsx');

var _xlsx2 = _interopRequireDefault(_xlsx);

var _Dic = require('./components/form/Dic');

var _Dic2 = _interopRequireDefault(_Dic);

var _File = require('./components/form/File');

var _File2 = _interopRequireDefault(_File);

var _Select = require('./components/form/Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//工具类
module.exports = {
    check: _check2.default,
    axios: _axios2.default,
    array: _array2.default,
    number: _number2.default,
    string: _string2.default,
    jquery: _index2.default,
    date: _date2.default,
    event: _event2.default,
    file: _file2.default,
    net: _net2.default,
    xlsx: _xlsx2.default,

    Dic: _Dic2.default,
    Select: _Select2.default,
    File: _File2.default
};
//组件
//内核