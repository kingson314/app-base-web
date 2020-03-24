'use strict';

/**
 * @module net
 */
var Cookies = require('js-cookie');

module.exports = {
  /**
   * 获取面包屑
   *
   * @param {string} route - 路径
   * @return {array} 返回path数组
   */
  getBreadcrumbs: function getBreadcrumbs(route) {
    return route.split('/');
  },
  /**
   * 获取地址参数
   *
   * @param {string} name - key
   * @return {*} 返回值或null
   */
  getParam: function getParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = decodeURI(window.location.search).substr(1).match(reg);
    if (r !== null) return r[2];
    return null;
  },
  /**
   * 获取地址所有参数
   *
   * @param {string} href - 地址
   * @return {object} 返回所有参数对象
   */
  getParams: function getParams(href) {
    var url = href ? href : window.location.href;
    var _pa = url.substring(url.indexOf('?') + 1),
        _arrS = _pa.split('&'),
        _rs = {};
    for (var i = 0, _len = _arrS.length; i < _len; i++) {
      var pos = _arrS[i].indexOf('=');
      if (pos === -1) {
        continue;
      }
      var name = _arrS[i].substring(0, pos),
          value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
      _rs[name] = value;
    }
    return _rs;
  },

  getUrlParam: function getUrlParam(url, paramName) {
    if (!url) return "";
    var arrStr = url.substring(url.indexOf("?") + 1).split("&");
    for (var i = 0; i < arrStr.length; i++) {
      var loc = arrStr[i].indexOf(paramName + "=");
      if (loc != -1) {
        return arrStr[i].replace(paramName + "=", "").replace("?", "");
        break;
      }
    }
    return "";
  },

  /**
   * ajax请求
   *
   * @param {object} setting - 选项设置
   * @return {*}
   */
  ajax: function ajax(setting) {
    //设置参数的初始值
    var opts = {
      method: (setting.method || "GET").toUpperCase(), //请求方式
      url: setting.url || "", // 请求地址
      async: setting.async || true, // 是否异步
      dataType: setting.dataType || "json", // 解析方式
      data: setting.data || "", // 参数
      success: setting.success || function () {}, // 请求成功回调
      error: setting.error || function () {} // 请求失败回调


      // 参数格式化
    };function params_format(obj) {
      var str = '';
      for (var i in obj) {
        str += i + '=' + obj[i] + '&';
      }
      return str.split('').slice(0, -1).join('');
    }

    // 创建ajax对象
    var xhr = new XMLHttpRequest();

    // 连接服务器open(方法GET/POST，请求地址， 异步传输)
    if (opts.method === 'GET') {
      xhr.open(opts.method, opts.url + "?" + params_format(opts.data), opts.async);
      xhr.send();
    } else {
      xhr.open(opts.method, opts.url, opts.async);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(opts.data);
    }

    /*
    ** 每当readyState改变时，就会触发onreadystatechange事件
    ** readyState属性存储有XMLHttpRequest的状态信息
    ** 0 ：请求未初始化
    ** 1 ：服务器连接已建立
    ** 2 ：请求已接受
    ** 3 : 请求处理中
    ** 4 ：请求已完成，且相应就绪
    */
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
        switch (opts.dataType) {
          case "json":
            var json = JSON.parse(xhr.responseText);
            opts.success(json);
            break;
          case "xml":
            opts.success(xhr.responseXML);
            break;
          default:
            opts.success(xhr.responseText);
            break;
        }
      }
    };

    xhr.onerror = function (err) {
      opts.error(err);
    };
  },
  /**
   * fetch请求
   * @param url
   * @param setting
   * @return {Promise<any>}
   */
  fetch: function (_fetch) {
    function fetch(_x, _x2) {
      return _fetch.apply(this, arguments);
    }

    fetch.toString = function () {
      return _fetch.toString();
    };

    return fetch;
  }(function (url, setting) {
    //设置参数的初始值
    var opts = {
      method: (setting.method || 'GET').toUpperCase(), //请求方式
      headers: setting.headers || {}, // 请求头设置
      credentials: setting.credentials || true, // 设置cookie是否一起发送
      body: setting.body || {},
      mode: setting.mode || 'no-cors', // 可以设置 cors, no-cors, same-origin
      redirect: setting.redirect || 'follow', // follow, error, manual
      cache: setting.cache || 'default' // 设置 cache 模式 (default, reload, no-cache)
    };
    var dataType = setting.dataType || "json",
        // 解析方式
    data = setting.data || ""; // 参数

    // 参数格式化
    function params_format(obj) {
      var str = '';
      for (var i in obj) {
        str += i + '=' + obj[i] + '&';
      }
      return str.split('').slice(0, -1).join('');
    }

    if (opts.method === 'GET') {
      url = url + (data ? '?' + params_format(data) : '');
    } else {
      setting.body = data || {};
    }

    return new Promise(function (resolve, reject) {
      fetch(url, opts).then(async function (res) {
        var data = dataType === 'text' ? await res.text() : dataType === 'blob' ? await res.blob() : await res.json();
        resolve(data);
      }).catch(function (e) {
        reject(e);
      });
    });
  }),
  /**
   * @mixin
   */
  cookie: {
    /**
     * 格式化cookie
     * @param {string} cookies - cookie字符串
     * @return {*} 返回cookie值
     */
    parse: function parse(cookies) {
      var cookie = cookies.split(';'),
          cookieObj = {},
          cookieArr = [],
          key = '',
          value = '';
      for (var i = 0; i < cookie.length; i++) {
        cookieArr = cookie[i].trim().split('=');
        key = cookieArr[0];
        value = cookieArr[1];
        cookieObj[key] = value;
      }
      return cookieObj;
    },
    /**
     * 从字符串中取cookie
     * @param {string} cookieStr - cookie字符串
     * @param {string} name - key
     * @return {*} 返回cookie值
     */
    getFromString: function getFromString(cookieStr, name) {
      var cookieName = encodeURIComponent(name) + "=",
          cookieStart = cookieStr.indexOf(cookieName),
          cookieValue = null;
      if (cookieStart > -1) {
        var cookieEnd = cookieStr.indexOf(";", cookieStart);
        if (cookieEnd === -1) {
          cookieEnd = cookieStr.length;
        }
        cookieValue = decodeURIComponent(cookieStr.substring(cookieStart + cookieName.length, cookieEnd));
      }
      return cookieValue;
    },
    /**
     * @param key
     * @return {*}
     */
    getJSON: function getJSON(key) {
      return Cookies.getJSON(key);
    },
    /**
     *
     * @param key
     * @return {*}
     */
    get: function get(key) {
      return Cookies.get(key);
    },
    /**
     *
     * @param key
     * @param val
     * @param options
     * @return {*}
     */
    set: function set(key, val, options) {
      return Cookies.set(key, val, options);
    },
    /**
     *
     * @param key
     * @return {*}
     */
    remove: function remove(key) {
      return Cookies.remove(key);
    }
  },
  /**
   * @mixin
   */
  localStorage: {
    /**
     *
     * @param key
     * @param val
     */
    set: function set(key, val) {
      var setting = arguments[0];
      if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
        for (var i in setting) {
          localStorage.setItem(i, JSON.stringify(setting[i]));
        }
      } else {
        localStorage.setItem(key, JSON.stringify(val));
      }
    },
    /**
     *
     * @param key
     * @return {*}
     */
    get: function get(key) {
      if (key) return JSON.parse(localStorage.getItem(key));
      return null;
    },
    /**
     *
     * @param key
     * @return {*}
     */
    remove: function remove(key) {
      localStorage.removeItem(key);
    },
    /**
     * @return {*}
     */
    clear: function clear() {
      localStorage.clear();
    }
  },
  /**
   * @mixin
   */
  sessionStorage: {
    /**
     *
     * @param key
     * @param val
     */
    set: function set(key, val) {
      var setting = arguments[0];
      if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
        for (var i in setting) {
          sessionStorage.setItem(i, JSON.stringify(setting[i]));
        }
      } else {
        sessionStorage.setItem(key, JSON.stringify(val));
      }
    },
    /**
     *
     * @param key
     * @return {*}
     */
    get: function get(key) {
      if (key) return JSON.parse(sessionStorage.getItem(key));
      return null;
    },
    /**
     *
     * @param key
     * @return {*}
     */
    remove: function remove(key) {
      sessionStorage.removeItem(key);
    },
    /**
     *
     * @return {*}
     */
    clear: function clear() {
      sessionStorage.clear();
    }
  }
};