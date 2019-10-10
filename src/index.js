//内核
import jquery from './jquery/index';
//工具类
import check from './utils/check';
import component from './utils/component';
import axios from './utils/axios';
import array from './utils/array';
import number from './utils/number';
import string from './utils/string';
import date from './utils/date';

import event from './utils/event';
import file from './utils/file';
import net from './utils/net';
import xlsx from './utils/xlsx';
//组件
import Dic from './components/form/Dic';
import File from './components/form/File';
import Select from './components/form/Select';


module.exports = {
    check,
    axios,
    array,
    number,
    string,
    jquery,
    date,
    event,
    file,
    net,
    xlsx,

    Dic,
    Select,
    File
}