'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    _DicList: {},
    _DicJson: {},
    get: function get(url, data) {
        return new Promise(function (resolve, reject) {
            _axios2.default.get(url).then(function (response) {
                resolve(response.data);
            }, reject);
        });
    },
    post: function post(url, data, callback) {
        return new Promise(function (resolve, reject) {
            _axios2.default.post(url, data).then(function (response) {
                resolve(response.data);
                callback && callback(response.data);
            }, reject);
        });
    }
};