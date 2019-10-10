/* @Description: 获取jquery对象的html(包括自己)
 * @ param jq 
 * @ return str 
 * @date 2015-12-31
 * @author:kfzx-fenggq
 */
module.exports = {
    getHtml: function (jq) {
        return jq.prop("outerHTML");
    },

    toJson: function (str) {
        //return eval('(' + str + ')');
        return $.parseJSON(str);
    },

    toString: function (obj) {
        return JSON.stringify(obj);
    },
};