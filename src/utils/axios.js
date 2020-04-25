import axios from 'axios'
import qs from 'query-string'
import net from './net';
const _Export = {
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

    onErr: function () {
        net.cookie.remove("_isLogin");
        net.cookie.remove("_token");
        if (top) {
            top.location.href = "/"
        } else {
            location.href = "/"
        }
    },
    setUser: function (user) {
        if (!user) {
            net.cookie.remove("_token");
            net.cookie.remove("_userId");
            net.cookie.remove("_userName");
            net.cookie.remove("_userType");
            net.localStorage.remove("_menuId");
        } else {
            net.cookie.set("_token", user.token);
            net.cookie.set("_userId", user.id);
            net.cookie.set("_userName", user.name);
            net.cookie.set("_userType", user.type);
            net.localStorage.set("_menuId", user.memo);
        }
    },
    getUser: function () {
        let user = {
            token: net.cookie.get("_token") || "",
            id: net.cookie.get("_userId") || "",
            name: net.cookie.get("_userName") || "",
            type: net.cookie.get("_userType") || "",
        };
        return user;
    },
    post: function (url, data, callback) {
        let user = _Export.getUser();
        let _log = JSON.stringify({
            userId: String(user.id),
        });
        return new Promise((resolve, reject) => {
            axios.post(url, data, {
                headers: {
                    _log,
                    _langue: "zh_CN",
                    _token: user.token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                resolve(response.data);
                callback && callback(response.data);
            }, reject);
        });
    },

    //global defaults
    interceptors: function (f_req, f_res) {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        axios.interceptors.request.use(config => {
            config.timeout = 6000;
            // config.withCredentials = true; // 允许携带token ,这个是解决跨域产生的相关问题
            config.data = qs.stringify(config.data);
            config = f_req(config)
            return config;
        }, error => {
            _Export.onErr();
            // return Promise.reject(error);
        })
        axios.interceptors.response.use(response => {
            return f_res(response);
        }, error => {
            _Export.onErr();
            // return Promise.reject(error);
        });
    }
}
module.exports = _Export;