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

var _dic = require('./utils/dic');

var _dic2 = _interopRequireDefault(_dic);

var _event = require('./utils/event');

var _event2 = _interopRequireDefault(_event);

var _file = require('./utils/file');

var _file2 = _interopRequireDefault(_file);

var _net = require('./utils/net');

var _net2 = _interopRequireDefault(_net);

var _xlsx = require('./utils/xlsx');

var _xlsx2 = _interopRequireDefault(_xlsx);

var _CheckGroup = require('./components/form/CheckGroup');

var _CheckGroup2 = _interopRequireDefault(_CheckGroup);

var _Dic = require('./components/form/Dic');

var _Dic2 = _interopRequireDefault(_Dic);

var _District = require('./components/form/District');

var _District2 = _interopRequireDefault(_District);

var _File = require('./components/form/File');

var _File2 = _interopRequireDefault(_File);

var _Select = require('./components/form/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Tree = require('./components/Tree');

var _Tree2 = _interopRequireDefault(_Tree);

var _Empty = require('./components/Empty');

var _Empty2 = _interopRequireDefault(_Empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//内核
module.exports = {
    //utiil
    check: _check2.default,
    axios: _axios2.default,
    array: _array2.default,
    number: _number2.default,
    string: _string2.default,
    jquery: _index2.default,
    date: _date2.default,
    dic: _dic2.default,
    event: _event2.default,
    file: _file2.default,
    net: _net2.default,
    xlsx: _xlsx2.default,
    // components
    CheckGroup: _CheckGroup2.default,
    Dic: _Dic2.default,
    District: _District2.default,
    File: _File2.default,
    Select: _Select2.default,
    Tree: _Tree2.default,
    Empty: _Empty2.default
};
//组件

//工具类