/**
 * @module file
 */
module.exports = {
  /**
   * 文件大小
   *
   * @param num - 数字
   * @return {string} 返回带单位的文件大小格式
   */
  formatSize: function (num) {
    let fsize = parseFloat(num, 2);
    let fileSizeString;
    if (fsize < 1024) {
      fileSizeString = fsize.toFixed(2) + "B";
    } else if (fsize < 1048576) {
      fileSizeString = (fsize / 1024).toFixed(2) + "KB";
    } else if (fsize < 1073741824) {
      fileSizeString = (fsize / 1024 / 1024).toFixed(2) + "MB";
    } else if (fsize < 1024 * 1024 * 1024) {
      fileSizeString = (fsize / 1024 / 1024 / 1024).toFixed(2) + "GB";
    } else {
      fileSizeString = "0B";
    }
    return fileSizeString;
  },
  /**
   * 获取文件的后缀名
   *
   * @param {string} fileName - 文件名
   * @return {string} 返回文件后缀名
   */
  getExt: function (fileName) {
    if (fileName.lastIndexOf(".") === -1)
      return fileName;
    let pos = fileName.lastIndexOf(".") + 1;
    return fileName.substring(pos, fileName.length).toLowerCase();
  },
  /*获取文件名称*/
  /**
   * 获取文件后
   *
   * @param {string} fileName - 文件名
   * @return {string} 返回文件名
   */
  getName: function (fileName) {
    let pos = fileName.lastIndexOf(".");
    if (pos === -1) {
      return fileName;
    } else {
      return fileName.substring(0, pos);
    }
  },
  /**
   * 根据路径获取文件全名
   *
   * @param {string} path - 路径
   * @return {string} 返回文件全名
   */
  getFileName: function (path) {
    let fileFormat = path.split("/")
    return fileFormat[fileFormat.length - 1]
  },
  /**
   * 判断是否为图片文件
   *
   * @param {string} fileName - 文件名
   * @return {boolean}
   */
  isImageFile: function (fileName) {
    return /(gif|jpg|jpeg|png|GIF|JPG|PNG)$/ig.test(fileName);
  },
  /**
   * 判断是否为视频文件
   *
   * @param {string} fileName - 文件名
   * @return {boolean}
   */
  isVideoFile: function (fileName) {
    return /(mp4|mp3|flv|wav)$/ig.test(fileName);
  },
  /**
   * 判断是否为文档
   *
   * @param {string} fileName - 文件名
   * @return {boolean}
   */
  isDocumentFile: function (fileName) {
    return /(doc|docx|xls|xlsx|pdf|txt|ppt|pptx|rar|zip|html|jsp|sql|htm|shtml|xml)$/ig.test(fileName);
  },
  /**
   * 判断是否为Office文档
   *
   * @param {string} fileName - 文件名
   * @return {boolean}
   */
  isOfficeFile: function (fileName) {
    return /(doc|docx|xls|xlsx|pdf|txt|ppt|pptx)$/ig.test(fileName);
  }
}
