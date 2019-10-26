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
import District from './components/form/District';
import File from './components/form/File';
import Select from './components/form/Select';
import Tree from './components/Tree';
//datas
import dicJson from './dicJson'
import dicList from './dicList'


module.exports = { 
//data、conifg
    dicJson,
    dicList,
//utiil
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
// components
    Dic,
    District,
    File,
    Select,
    Tree,
}