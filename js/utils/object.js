"use strict";

/* @Description: 获取jquery对象的html(包括自己)
 * @ param jq 
 * @ return str 
 * @date 2015-12-31
 * @author:kfzx-fenggq
 */
module.exports = {
    getHtml: function getHtml(jq) {
        return jq.prop("outerHTML");
    },

    toJson: function toJson(str) {
        //return eval('(' + str + ')');
        return $.parseJSON(str);
    },

    toString: function toString(obj) {
        return JSON.stringify(obj);
    }
};