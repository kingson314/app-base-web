'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    get: function get(url, data) {
        return new Promise(function (resolve, reject) {
            _axios2.default.get(url).then(function (response) {
                resolve(response.data);
            }, reject);
        });
    },
    post: function post(url, data) {
        return new Promise(function (resolve, reject) {
            _axios2.default.post(url, data).then(function (response) {
                resolve(response.data);
            }, reject);
        });
    }
};