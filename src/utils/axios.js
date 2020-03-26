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
    setUser: function (user) {
        if (!user) {
            net.localStorage.remove("_token");
            net.localStorage.remove("_userId");
            net.localStorage.remove("_userName");
            net.localStorage.remove("_userType");
            net.localStorage.remove("_menuId");
        } else {
            net.localStorage.set("_token", user.token);
            net.localStorage.set("_userId", user.id);
            net.localStorage.set("_userName", user.name);
            net.localStorage.set("_userType", user.type);
            net.localStorage.set("_menuId", user.memo);
        }
    },
    getUser: function () {
        let user = {
            token: net.localStorage.get("_token") || "",
            id: net.localStorage.get("_userId") || "",
            name: net.localStorage.get("_userName") || "",
            type: net.localStorage.get("_userType") || "",
        };
        return user;
    },
    post: function (url, data, callback) {
        let user = _Export.getUser();
        let _log = JSON.stringify({
            userId: String(user.id),
        });
        return new Promise((resolve, reject) => {
            axios.post(url, data,{
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
            config=f_req(config)
            return config;
        }, error => {
            return Promise.reject(error);
        })
        axios.interceptors.response.use(response => {
           return  f_res(response);
        }, error => {
            return Promise.reject(error);
        }); 
    }
}
module.exports = _Export;