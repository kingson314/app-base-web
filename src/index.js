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
import dic from './utils/dic';

import event from './utils/event';
import file from './utils/file';
import net from './utils/net';
import xlsx from './utils/xlsx';
//组件
import CheckGroup from './components/form/CheckGroup';
import Dic from './components/form/Dic';
import District from './components/form/District';
import File from './components/form/File';
import Select from './components/form/Select';
import Tree from './components/Tree';
import Empty from './components/Empty'; 


module.exports = { 
//utiil
    check,
    axios,
    array,
    number,
    string,
    jquery,
    date,
    dic,
    event, 
    file,
    net,
    xlsx,
// components
    CheckGroup,
    Dic,
    District,
    File,
    Select,
    Tree,
    Empty,
}