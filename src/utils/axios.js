import axios from 'axios'
module.exports = {
    _DicList:{},
    _DicJson:{},
    get:function(url, data) {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then((response) => {
                    resolve(response.data)
                }, reject)
        })
    },
    post:function(url, data,callback) {
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then((response) => {
                    resolve(response.data);
                    callback&& callback(response.data);
                }, reject)
        });
    }
}      