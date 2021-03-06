"use strict";

var _axios = require("./axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
    list: function list(app, type, subType) {
        var dicList = [];
        var key = "dicList";
        try {
            dicList = JSON.parse(localStorage.getItem(key));
            dicList = dicList[app][type];
            if (!dicList) return [];
            if (subType) {
                dicList = dicList[subType];
                if (!dicList) return [];
            }
        } catch (e) {}
        // if(!dicList){
        //     var params= {"app":app,"type":type};
        //     if(subType){params.subType=subType;}
        //     axios.post("CfgDictionary/getByType",params)
        //     .then((response) => {
        //         dicList=response.data;
        //         console.log(dicList);
        //         try{
        //             if(subType){
        //                 localStorage.setItem(key+app+"|"+type+"|"+subType,JSON.stringify(dicList));
        //             }else{
        //                 localStorage.setItem(key+app+"|"+type,JSON.stringify(dicList));
        //             }
        //         }catch(e){
        //         }
        //         return dicList;
        //     })
        // }else{
        //     return dicList;
        // }
        return dicList;
    },
    json: function json(app, type, subType) {
        var dicJson = {};
        var key = "dicJson";
        try {
            dicJson = JSON.parse(localStorage.getItem(key));
            // console.log(dicJson)
            dicJson = dicJson[app][type];
            if (!dicJson) return {};
            if (subType) {
                dicJson = dicJson[subType];
                if (!dicJson) return {};
            }
        } catch (e) {}
        return dicJson;
    }

};