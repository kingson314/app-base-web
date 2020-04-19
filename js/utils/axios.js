'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _net = require('./net');

var _net2 = _interopRequireDefault(_net);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Export = {
    _DicList: {},
    _DicJson: {},
    // get:function(url, data) {
    //     return new Promise((resolve, reject) => {
    //         axios.get(url)
    //             .then((response) => {
    //                 resolve(response.data)
    //             }, reject)
    //     })
    // },

    onErr: function onErr() {
        _net2.default.cookie.remove("_isLogin");
        _net2.default.cookie.remove("_token");
        if (top) {
            top.location.href = "/";
        } else {
            location.href = "/";
        }
    },
    setUser: function setUser(user) {
        if (!user) {
            _net2.default.cookie.remove("_token");
            _net2.default.cookie.remove("_userId");
            _net2.default.cookie.remove("_userName");
            _net2.default.cookie.remove("_userType");
            _net2.default.localStorage.remove("_menuId");
        } else {
            _net2.default.cookie.set("_token", user.token);
            _net2.default.cookie.set("_userId", user.id);
            _net2.default.cookie.set("_userName", user.name);
            _net2.default.cookie.set("_userType", user.type);
            _net2.default.localStorage.set("_menuId", user.memo);
        }
    },
    getUser: function getUser() {
        var user = {
            token: _net2.default.cookie.get("_token") || "",
            id: _net2.default.cookie.get("_userId") || "",
            name: _net2.default.cookie.get("_userName") || "",
            type: _net2.default.localStorage.get("_userType") || ""
        };
        return user;
    },
    post: function post(url, data, callback) {
        var user = _Export.getUser();
        var _log = JSON.stringify({
            userId: String(user.id)
        });
        return new Promise(function (resolve, reject) {
            _axios2.default.post(url, data, {
                headers: {
                    _log: _log,
                    _langue: "zh_CN",
                    _token: user.token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (response) {
                resolve(response.data);
                callback && callback(response.data);
            }, reject);
        });
    },

    //global defaults
    interceptors: function interceptors(f_req, f_res) {
        _axios2.default.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        _axios2.default.interceptors.request.use(function (config) {
            config.timeout = 6000;
            // config.withCredentials = true; // 允许携带token ,这个是解决跨域产生的相关问题
            config.data = _queryString2.default.stringify(config.data);
            config = f_req(config);
            return config;
        }, function (error) {
            _Export.onErr();
            // return Promise.reject(error);
        });
        _axios2.default.interceptors.response.use(function (response) {
            return f_res(response);
        }, function (error) {
            _Export.onErr();
            // return Promise.reject(error);
        });
    }
};
module.exports = _Export;