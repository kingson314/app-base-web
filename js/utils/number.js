"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @module number
 */
module.exports = _defineProperty({
  /**
   * 随机数范围
   *
   * @param {number} min - 最小值
   * @param {number} max - 最大值
   * @return {number} 返回随机数
   */
  random: function random(min, max) {
    if (arguments.length === 2) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    } else {
      return null;
    }
  },
  /**
   * 抽奖概率
   *
   * @param {array} goods - 奖品池，如：['一等奖'，'二等奖']
   * @param {array} odds - 概率数组，如：[0.1.0.9]
   * @returns {*} 返回随机元素
   */
  randomGoods: function randomGoods(goods, odds) {
    var sum = 0,
        factor = 0,
        random = Math.random();

    for (var _i = odds.length - 1; _i >= 0; _i--) {
      sum += odds[_i]; // 统计概率总和
    };
    random *= sum; // 生成概率随机数
    for (var _i2 = odds.length - 1; _i2 >= 0; _i2--) {
      factor += odds[_i2];
      if (random <= factor) return goods[_i2];
    };
    return null;
  },
  /**
   * 随机验证码
   *
   * @param {number} len - 长度
   * @return {number} 返回验证码
   */
  randomCode: function randomCode(len) {
    var code = '';
    var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var _i3 = 0; _i3 < len; _i3++) {
      var index = Math.floor(Math.random() * 10);
      code += random[index];
    }
    return code;
  },
  /**
   * 将数字转换成对应的中文小写
   *
   * @param num {number} 数字
   * @return {string} 返回中文小写
   */
  formatSmallChinese: function formatSmallChinese(num) {
    var AA = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    var BB = ["", "十", "百", "仟", "萬", "億", "点", ""];
    var a = ("" + num).replace(/(^0*)/g, "").split("."),
        k = 0,
        re = "";
    for (var _i4 = a[0].length - 1; _i4 >= 0; _i4--) {
      switch (k) {
        case 0:
          re = BB[7] + re;
          break;
        case 4:
          if (!new RegExp("0{4}//d{" + (a[0].length - _i4 - 1) + "}$").test(a[0])) re = BB[4] + re;
          break;
        case 8:
          re = BB[5] + re;
          BB[7] = BB[5];
          k = 0;
          break;
        default:
          return false;
      }
      if (k % 4 === 2 && a[0].charAt(_i4 + 2) !== 0 && a[0].charAt(_i4 + 1) === 0) re = AA[0] + re;
      if (a[0].charAt(_i4) !== 0) re = AA[a[0].charAt(_i4)] + BB[k % 4] + re;
      k++;
    }

    if (a.length > 1) // 加上小数部分(如果有小数部分)
      {
        re += BB[6];
        for (var _i5 = 0; _i5 < a[1].length; _i5++) {
          re += AA[a[1].charAt(_i5)];
        }
      }
    if (re === '一十') re = "十";
    if (re.match(/^一/) && re.length === 3) re = re.replace("一", "");
    return re;
  },
  /**
   * 数字金钱表示
   *
   * @param num {number} 数字
   * @return {string} 返回金钱表示
   */
  formatMoney: function formatMoney(num) {
    var str = num.toString();
    var newStr = "";
    var count = 0;

    if (str.indexOf(".") === -1) {
      for (var _i6 = str.length - 1; _i6 >= 0; _i6--) {
        if (count % 3 === 0 && count !== 0) {
          newStr = str.charAt(_i6) + "," + newStr;
        } else {
          newStr = str.charAt(_i6) + newStr;
        }
        count++;
      }
      str = newStr + ".00"; //自动补小数点后两位
      return str;
    } else {
      for (var _i7 = str.indexOf(".") - 1; _i7 >= 0; _i7--) {
        if (count % 3 === 0 && count !== 0) {
          newStr = str.charAt(_i7) + "," + newStr; //碰到3的倍数则加上“,”号
        } else {
          newStr = str.charAt(_i7) + newStr; //逐个字符相接起来
        }
        count++;
      }
      str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
      return str;
    }
  },
  /**
   * 中文大写金钱表示
   *
   * @param money {number|string}
   * @return {string} 返回中文大写金钱表示
   */
  formatBigMoney: function formatBigMoney(money) {
    //汉字的数字
    var cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    //基本单位
    var cnIntRadice = ['', '拾', '佰', '仟'];
    //对应整数部分扩展单位
    var cnIntUnits = ['', '万', '亿', '兆'];
    //对应小数部分单位
    var cnDecUnits = ['角', '分', '毫', '厘'];
    //整数金额时后面跟的字符
    var cnInteger = '整';
    //整型完以后的单位
    var cnIntLast = '元';
    //最大处理的数字
    var maxNum = 999999999999999.9999;
    //金额整数部分
    var integerNum;
    //金额小数部分
    var decimalNum;
    //输出的中文金额字符串
    var chineseStr = '';
    //分离金额后用的数组，预定义
    var parts;
    if (money === '') {
      return '';
    }
    money = parseFloat(money);
    if (money >= maxNum) {
      //超出最大处理数字
      return '';
    }
    if (money === 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    //转换为字符串
    money = money.toString();
    if (money.indexOf('.') === -1) {
      integerNum = money;
      decimalNum = '';
    } else {
      parts = money.split('.');
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 4);
    }
    //获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
      var zeroCount = 0;
      var IntLen = integerNum.length;
      for (var i = 0; i < IntLen; i++) {
        var n = integerNum.substr(i, 1);
        var p = IntLen - i - 1;
        var q = p / 4;
        var m = p % 4;
        if (n === '0') {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0];
          }
          //归零
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m === 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    //小数部分
    if (decimalNum !== '') {
      var decLen = decimalNum.length;
      for (var _i8 = 0; _i8 < decLen; _i8++) {
        var _n = decimalNum.substr(_i8, 1);
        if (_n !== '0') {
          chineseStr += cnNums[Number(_n)] + cnDecUnits[_i8];
        }
      }
    }
    if (chineseStr === '') {
      chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum === '') {
      chineseStr += cnInteger;
    }
    return chineseStr;
  },
  /**
   * 数字单位
   *
   * @param num {number}
   * @return {string} 返回数字单位
   */
  numberUnit: function numberUnit(num) {
    switch (true) {
      case num > 999999999:
        return (num / 1000000000).toFixed(2) + " \u5341\u4EBF";
      case num > 99999999:
        return (num / 100000000).toFixed(2) + " \u4EBF";
      case num > 9999999:
        return (num / 10000000).toFixed(2) + " \u5343\u4E07";
      case num > 999999:
        return (num / 1000000).toFixed(2) + " \u767E\u4E07";
      case num > 99999:
        return (num / 100000).toFixed(2) + " \u5341\u4E07";
      case num > 9999:
        return (num / 10000).toFixed(2) + " \u4E07";
      default:
        return num;
    }
  },

  toNum: function toNum(s) {
    return Number(s);
  },

  toMoney: function toMoney(s) {
    return s.replace(/[^\d\.-]/g, "");
  }
}, "formatMoney", function formatMoney(s, n) {
  if (!n) n = 2;
  n = n > 0 && n <= 20 ? n : 2;
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  var l = s.split(".")[0].split("").reverse(),
      r = s.split(".")[1];
  t = "";
  for (i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
});