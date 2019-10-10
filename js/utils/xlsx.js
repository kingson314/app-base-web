'use strict';

/**
 * @module xlsx
 */
var XLSX = require('xlsx');

var makeCols = function makeCols(refstr) {
  return Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map(function (x, i) {
    return { name: XLSX.utils.encode_col(i), key: i };
  });
};

module.exports = {
  /**
   * 导出
   * @param data {object} 导出数据
   * @param filename {string} 导出文件名
   */
  write: function write(data, filename) {
    /* convert state to workbook */
    var ws = XLSX.utils.aoa_to_sheet(data);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet01");
    /* generate file and send to client */
    XLSX.writeFile(wb, filename);
  },
  /**
   * 读取数据
   * @param file {file}
   * @return {Promise<any>}
   */
  read: function read(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function (e) {
        /* Parse data */
        var bstr = e.target.result;
        var wb = XLSX.read(bstr, { type: 'binary' });
        /* Get first worksheet */
        var wsname = wb.SheetNames[0];
        var ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        var data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        var cols = makeCols(ws['!ref']);
        resolve({ data: data, cols: cols });
      };
      reader.readAsBinaryString(file);
    });
  }
};