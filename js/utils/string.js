'use strict';

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @module string
 */

var str2asc = function str2asc(strstr) {
  return ("0" + strstr.charCodeAt(0).toString(16)).slice(-2);
};
var asc2str = function asc2str(ascasc) {
  return String.fromCharCode(ascasc);
};
module.exports = (_module$exports = {
  /**
   * 生成uuid
   * @return {string}
   */
  uuid: function uuid() {
    var S4 = function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };
    return S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4();
  },
  /**
   * 获取随机数字字符组合
   * @param len {number} 长度
   * @return {string}
   */
  randomCode: function randomCode(len) {
    var code = '';
    var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var i = 0; i < len; i++) {
      //设置随机数范围,这设置为0 ~ 36
      var index = Math.floor(Math.random() * 36);
      code += random[index];
    }
    return code;
  },
  /**
   * 编码
   * @param str {string}
   * @param k {number} 秘钥
   * @return {string}
   */
  encrypt: function encrypt(str, k) {
    var string = "";
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c >= 97 && c <= 122) {
        c += k % 26;
        if (c < 97) {
          c += 26;
        }
        if (c > 122) {
          c -= 26;
        }
      } else if (c >= 65 && c <= 90) {
        c += k % 26;
        if (c < 65) {
          c += 26;
        }
        if (c > 122) {
          c -= 26;
        }
      }
      string += String.fromCharCode(c);
    }
    return string;
  },
  /**
   * 解码
   * @param str {string}
   * @param n {number|string} 秘钥
   * @return {string}
   */
  decrypt: function decrypt(str, n) {
    var string = "";
    var k = parseInt("-" + n);
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c >= 97 && c <= 122) {
        c += k % 26;
        if (c < 97) {
          c += 26;
        }
        if (c > 122) {
          c -= 26;
        }
      } else if (c >= 65 && c <= 90) {
        c += k % 26;
        if (c < 65) {
          c += 26;
        }
        if (c > 122) {
          c -= 26;
        }
      }
      string += String.fromCharCode(c);
    }
    return string;
  },
  /**
   * 检测密码强度
   * @param str {string}
   * @return {number}
   */
  checkPwd: function checkPwd(str) {
    var Lv = 0;
    if (str.length < 6) {
      return Lv;
    }
    if (/[0-9]/.test(str)) {
      Lv++;
    }
    if (/[a-z]/.test(str)) {
      Lv++;
    }
    if (/[A-Z]/.test(str)) {
      Lv++;
    }
    if (/[.|-|_]/.test(str)) {
      Lv++;
    }
    return Lv;
  },
  /**
   * 移除字符
   * @param str {string}
   * @param character {string}
   * @return {string}
   */
  remove: function remove(str, character) {
    return str.replace(character, '');
  },
  /**
   * 替换字符
   * @param str {string}
   * @param character {string}
   * @param replacement {string}
   * @return {string}
   */
  replace: function replace(str, character, replacement) {
    return str.replace(character, replacement);
  },
  /**
   * 省略号
   * @param str {string}
   * @param len {number}
   * @return {string}
   */
  ellipsis: function ellipsis(str, len) {
    if (str) {
      if (str.length > len) return str.substring(0, len) + "...";
      return str;
    }
    return;
  },
  /**
   * 过滤html代码(把<>转换)
   * @param str {string}
   * @return {string}
   */
  filterTag: function filterTag(str) {
    str = str.replace(/&/ig, "&amp;");
    str = str.replace(/</ig, "&lt;");
    str = str.replace(/>/ig, "&gt;");
    str = str.replace(/\//ig, "&#x2F;");
    str = str.replace(/\s/ig, "&nbsp;");
    return str;
  },
  /**
   * 过滤<script></script>转换
   * @param str {string}
   * @return {string}
   */
  filterScript: function filterScript(str) {
    return str.replace(/(<script)/ig, "&lt;script").replace(/(<script>)/ig, "&lt;script&gt;").replace(/(<\/script>)/ig, "&lt;/script&gt;");
  },
  /**
   * 获取十六进制随机颜色
   * @return {string}
   */
  getRandomColor: function getRandomColor() {
    return '#' + function (h) {
      return new Array(7 - h.length).join("0") + h;
    }((Math.random() * 0x1000000 << 0).toString(16));
  },
  /**
   * DOM转字符串
   * @param htmlDOM {Element}
   * @return {string}
   */
  domToString: function domToString(htmlDOM) {
    var div = document.createElement("div");
    div.appendChild(htmlDOM);
    return div.innerHTML;
  },
  /**
   * 字符串转DOM
   * @param htmlString {string}
   * @return {Element}
   */
  stringToDom: function stringToDom(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.children[0];
  },

  checkPassword: function checkPassword(str) {
    if (str.length < 6) {
      return -1;
    }
    if (/[a-zA-Z]+/.test(str) && /[0-9]+/.test(str) && /\W+\D+/.test(str)) {
      return 3;
    }
    if (/[a-zA-Z]+/.test(str) && /[0-9]+/.test(str)) {
      return 2;
    }
    if (/\[a-zA-Z]+/.test(str) && /\W+\D+/.test(str)) {
      return 2;
    }
    if (/[0-9]+/.test(str) && /\W+\D+/.test(str)) {
      return 2;
    }
    return -1;
  },

  startWith: function startWith(str, prefix) {
    return str.slice(0, prefix.length) === prefix;
  },

  endsWith: function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  },
  /*
   * @Description: undefined字符串返回空，否则返回原字符串 @ param str @ return str @date
   * 2015-12-31 @author:kfzx-fenggq
   */
  isNil: function isNil(str) {
    if (str == undefined || str == null) str = '';
    return str;
  }

}, _defineProperty(_module$exports, 'isNil', function isNil(str, then) {
  if (str == undefined || str == null) str = then;
  return str;
}), _defineProperty(_module$exports, 'isBlank', function isBlank(str) {
  if ($.type(str) == 'boolean') return str;
  if (str === undefined || str === null || str === '') return true;
  return false;
}), _defineProperty(_module$exports, 'isEmptyObj', function isEmptyObj(obj) {
  var key;
  for (key in obj) {
    return !1;
  }return !0;
}), _defineProperty(_module$exports, 'strUseParam', function strUseParam(str, params) {
  var replaceStr = "";
  var separator = ";";
  var paramArr = params.toString().split(separator);
  for (var i = 0; i < paramArr.length; i++) {
    replaceStr = new RegExp("\\[" + i + "\\]", "g");
    str = str.replace(replaceStr, paramArr);
  }
  return str;
}), _defineProperty(_module$exports, 'upperFirst', function upperFirst(str) {
  if (str.length > 0) {
    str = str.substr(0, 1).toUpperCase() + str.substr(1);
  }
  return str;
}), _defineProperty(_module$exports, 'upper_', function upper_(str) {
  while (str.indexOf("_") >= 0) {
    var left = str.substr(0, str.indexOf("_"));
    var right = str.substr(str.indexOf("_") + 1);
    right = right.substr(0, 1).toUpperCase() + right.substr(1);
    str = left + right;
  }
  return str;
}), _defineProperty(_module$exports, 'upperTo_', function upperTo_(str) {
  var rs = "";
  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (c > 'A' && c < 'Z') {
      rs += "_" + c.toLowerCase();
    } else {
      rs += c;
    }
  }
  return rs;
}), _defineProperty(_module$exports, 'startWith', function startWith(stirng, str) {
  var reg = new RegExp("^" + str);
  return reg.test(stirng);
}), _defineProperty(_module$exports, 'endWith', function endWith(stirng, str) {
  var reg = new RegExp(str + "$");
  return reg.test(stirng);
}), _defineProperty(_module$exports, 'UrlEncode', function UrlEncode(str) {
  var ret = "";
  var strSpecial = "!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
  var tt = "";
  for (var i = 0; i < str.length; i++) {
    var chr = str.charAt(i);
    var c = str2asc(chr);
    tt += chr + ":" + c + "n";
    if (parseInt("0x" + c) > 0x7f) {
      ret += "%" + c.slice(0, 2) + "%" + c.slice(-2);
    } else {
      if (chr == " ") {
        ret += "+";
      } else if (strSpecial.indexOf(chr) != -1) {
        ret += "%" + c.toString(16);
      } else {
        ret += chr;
      }
    }
  }
  return ret;
}), _defineProperty(_module$exports, 'UrlDecode', function UrlDecode(str) {
  var ret = "";
  for (var i = 0; i < str.length; i++) {
    var chr = str.charAt(i);
    if (chr == "+") {
      ret += " ";
    } else if (chr == "%") {
      var asc = str.substr(i + 1, i + 3);
      if (parseInt("0x" + asc) > 0x7f) {
        ret += asc2str(parseInt("0x" + asc + str.substr(i + 4, i + 6)));
        i += 5;
      } else {
        ret += asc2str(parseInt("0x" + asc));
        i += 2;
      }
    } else {
      ret += chr;
    }
  }
  return ret;
}), _defineProperty(_module$exports, 'delTag', function delTag(str) {
  var rs = "";
  try {
    if (typeof str == 'string') {
      rs = str.replace(/<[^>]+>/g, ""); //去掉所有的html标记 
    } else {
      rs = str;
    }
  } catch (e) {
    return "";
  }
  return rs;
}), _module$exports);