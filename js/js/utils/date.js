"use strict";

/**
 * @module date
 */

module.exports = {
  /**
   * 格式化日期
   *
   * @param {date|string} date - 日期
   * @param {string} pattern - Y:年 M:月 D:日 h:小时 m:分钟 s:秒 Q:季度 S:毫秒
   * @returns {string} 返回格式后的日期
   */
  format: function format(date) {
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "YYYY-MM-DD hh:mm:ss";

    date = this._transferDate(date);
    var o = {
      "M+": date.getMonth() + 1,
      "D+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "Q+": Math.floor((date.getMonth() + 3) / 3),
      "S": date.getMilliseconds()
    };
    if (/(Y+)/.test(pattern)) {
      pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
      if (new RegExp("(" + k + ")").test(pattern)) {
        pattern = pattern.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return pattern;
  },
  /**
   * 计算时间
   *
   * @param {date|string} date - 日期对象
   * @param {string} pattern - year,month,day,hour,minute,seconds,week,daytime,when
   * @returns {string} 根据pattern返回
   */
  countTime: function countTime(date, pattern) {
    date = this._transferDate(date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    if (year < 10) {
      year = "0" + year;
    }

    if (day < 10) {
      day = "0" + day;
    }

    if (hour < 10) {
      hour = "0" + hour;
    }

    if (minute < 10) {
      minute = "0" + minute;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (pattern === "year") {
      return year;
    }

    if (pattern === "month") {
      return month;
    }

    if (pattern === "day") {
      return day;
    }

    if (pattern === "hour") {
      return hour;
    }

    if (pattern === "minute") {
      return minute;
    }

    if (pattern === "seconds") {
      return seconds;
    }

    if (pattern === "week") {
      var w_d = void 0;
      switch (date.getDay()) {
        case 0:
          w_d = "星期天";
          break;
        case 1:
          w_d = "星期一";
          break;
        case 2:
          w_d = "星期二";
          break;
        case 3:
          w_d = "星期三";
          break;
        case 4:
          w_d = "星期四";
          break;
        case 5:
          w_d = "星期五";
          break;
        case 6:
          w_d = "星期六";
          break;
        default:
          return null;
      }
      return w_d;
    }

    if (pattern === "daytime") {
      if (hour < 11 && hour > 6) {
        return "早晨";
      }
      if (hour <= 14 && hour >= 11) {
        return "中午";
      }
      if (hour > 14 && hour < 19) {
        return "下午";
      }
      if (hour >= 19 && hour <= 23) {
        return "晚上";
      }
      if (hour < 6 && hour >= 0) {
        return "凌晨";
      }
    }

    if (pattern === "when") {
      var now = new Date();
      var now_year = now.getFullYear();
      var now_month = now.getMonth() + 1;
      var now_day = now.getDate();
      var now_hour = now.getHours();
      var now_minute = now.getMinutes();
      var now_seconds = now.getSeconds();

      // 比较年份
      if (now_year > year) {
        return now_year - year + '年前';
      } else if (now_year === year) {
        // 比较月份
        if (now_month > month) {
          return now_month - month + '个月前';
        } else if (now_month === month) {
          // 比较号数
          if (now_day > day) {
            return now_day - day + '天前';
          } else if (now_day === day) {
            // 比较小时
            if (now_hour > hour) {
              return now_hour - hour + '小时前';
            } else if (now_hour === hour) {
              // 比较分钟
              if (now_minute > minute) {
                return now_minute - minute + '分钟前';
              } else if (now_minute === minute) {
                // 比较秒
                if (now_seconds > seconds) {
                  return now_seconds - seconds + '秒前';
                } else if (now_seconds === seconds) {
                  return '刚刚';
                } else {
                  return seconds - now_seconds + '秒后';
                }
              } else {
                return minute - now_minute + '分钟后';
              }
            } else {
              return hour - now_hour + '小时后';
            }
          } else {
            return day - now_day + '天后';
          }
        } else {
          return month - now_month + '个月后';
        }
      } else {
        return year - now_year + '年后';
      }
    }
  },
  /**
   * 倒计时
   * @param seconds {number} 倒计时秒数
   * @param callback {function}
   */
  countDown: function countDown(seconds, callback) {
    var timer = null;
    timer = setInterval(function () {
      var day = 0,
          hour = 0,
          minute = 0,
          second = 0;
      if (seconds > 0) {
        day = Math.floor(seconds / (60 * 60 * 24));
        hour = Math.floor(seconds / (60 * 60)) - day * 24;
        minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60;
        second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
      }
      if (day <= 9) day = '0' + day;
      if (hour <= 9) hour = '0' + hour;
      if (minute <= 9) minute = '0' + minute;
      if (second <= 9) second = '0' + second;

      callback({ day: day, hour: hour, minute: minute, second: second });
      seconds--;

      if (seconds < 0) clearInterval(timer);
    }, 1000);
  },

  /**
   * 根据秒数返回时分秒
   *
   * @param  {number} num - 秒数
   * @return {string} 返回时间表示
   * @example getHMS(3610) // -> 1小时0分10秒
   */
  getHMS: function getHMS(num) {
    var str = '';
    if (num > 3600) {
      str = Math.floor(num / 3600) + '小时' + Math.floor(num % 3600 / 60) + '分' + num % 60 + '秒';
    } else if (num > 60) {
      str = Math.floor(num / 60) + '分' + num % 60 + '秒';
    } else if (num === 60) {
      str = 60 + '秒';
    } else {
      str = num % 60 + '秒';
    }
    return str;
  },
  /**
   * 计算毫秒数
   * @param num {number} 秒数
   * @param pattern {string} day hour minute second
   * @return {number}
   */
  countMillisecond: function countMillisecond(num, pattern) {
    switch (pattern) {
      case 'day':
        return num * 24 * 60 * 60 * 1000;
      case 'hour':
        return num * 60 * 60 * 1000;
      case 'minute':
        return num * 60 * 1000;
      case 'second':
        return num * 1000;
      default:
        return null;
    }
  },
  /**
   * 转换毫秒数
   * @param num {number}
   * @param pattern {string} day hour minute second
   * @return {number}
   */
  formatMillisecond: function formatMillisecond(num, pattern) {
    switch (pattern) {
      case 'day':
        return num / 24 / 60 / 60 / 1000;
      case 'hour':
        return num / 60 / 60 / 1000;
      case 'minute':
        return num / 60 / 1000;
      case 'second':
        return num / 1000;
      default:
        return null;
    }
  },

  /**
   * 当天当前时间距离1970年1月1日的毫秒数
   * @param date {date|string}
   * @return {number}
   */
  getTime: function getTime(date) {
    return this._transferDate(date).getTime();
  },
  /**
   * 当天当前时间的毫秒数
   * @param date {date|string}
   * @return {number}
   */
  getMilliseconds: function getMilliseconds(date) {
    return this._transferDate(date).getMilliseconds();
  },
  /**
   * 当天当前时间的秒数
   * @param date {date|string}
   * @return {string|number}
   */
  getSeconds: function getSeconds(date) {
    var seconds = this._transferDate(date).getSeconds();
    return seconds > 9 ? seconds : "0" + seconds;
  },
  /**
   * 当天当前时间的分钟数
   * @param date {date|string}
   * @return {string|number}
   */
  getMinutes: function getMinutes(date) {
    var minutes = this._transferDate(date).getMinutes();
    return minutes > 9 ? minutes : "0" + minutes;
  },
  /**
   * 当天几点
   * @param date {date|string}
   * @return {string|number}
   */
  getHours: function getHours(date) {
    var hour = this._transferDate(date).getHours();
    return hour > 9 ? hour : "0" + hour;
  },
  /**
   * 当天几点（12小时制时）
   * @param date {date|string}
   * @return {number}
   */
  getHours12: function getHours12(date) {
    var hour = this._transferDate(date).getHours();
    return hour % 12 === 0 ? 12 : hour % 12;
  },
  /**
   * 当月多少号
   * @param date {date|string}
   * @return {string|number}
   */
  getDay: function getDay(date) {
    var day = this._transferDate(date).getDate();
    return day > 9 ? day : "0" + day;
  },
  /**
   * 当月星期几
   * @param date {date|string}
   * @return {number}
   */
  getWeek: function getWeek(date) {
    return this._transferDate(date).getDay();
  },
  /**
   * 当年几月
   * @param date {date|string}
   * @return {string|number}
   */
  getMonth: function getMonth(date) {
    var month = this._transferDate(date).getMonth() + 1;
    return month > 9 ? month : "0" + month;
  },
  /**
   * 当年第几季度
   * @param date {date|string}
   * @return {number}
   */
  getPeriod: function getPeriod(date) {
    var month = this.getMonth(date) * 1;
    return Math.floor((month + 3) / 3);
  },
  /**
   * 获取年份
   * @param date {date|string}
   * @return {number}
   */
  getYear: function getYear(date) {
    return this._transferDate(date).getFullYear();
  },

  /**
   * 当年有多少天
   * @param date {date|string}
   * @return {number}
   */
  daysOfYear: function daysOfYear(date) {
    var firstDayYear = this.firstDayOfYear(date);
    var lastDayYear = this.lastDayOfYear(date);
    return Math.ceil(this.betweenDay(firstDayYear, lastDayYear));
  },
  /**
   * 当月有多少天
   * @param date {date|string}
   * @return {number}
   */
  daysOfMonth: function daysOfMonth(date) {
    var currentMonth = this.firstDayOfMonth(date);
    var nextMonth = this.firstDayOfNextMonth(date);
    return this.betweenDay(currentMonth, nextMonth);
  },
  /**
   * 当年中的第几天
   * @param date {date|string}
   * @return {number}
   */
  dayOfYear: function dayOfYear(date) {
    return Math.ceil(this.betweenDay(this.firstDayOfYear(date), date));
  },
  /**
   * 当月中的第几天
   * @param date {date|string}
   * @return {number}
   */
  dayOfMonth: function dayOfMonth(date) {
    return Math.ceil(this.betweenDay(this.firstDayOfMonth(date), date));
  },
  /**
   * 当年的第几周
   * @param date {date|string}
   * @return {number}
   */
  weekOfYear: function weekOfYear(date) {
    var numdays = this.dayOfYear(date);
    return Math.ceil(numdays / 7);
  },
  /**
   * 当月中的星期几
   * @param date {date|string}
   * @return {number}
   */
  weekOfMonth: function weekOfMonth(date) {
    return this.getWeek(date);
  },
  /**
   * 当年的第一天
   * @param date {date|string}
   * @return {string}
   */
  firstDayOfYear: function firstDayOfYear(date) {
    var year = this.getYear(date);
    var dateString = year + "-01-01 00:00:00";
    return dateString;
  },
  /**
   * 当年的最后一天
   * @param date {date|string}
   * @return {string}
   */
  lastDayOfYear: function lastDayOfYear(date) {
    var year = this.getYear(date);
    var dateString = year + "-12-01 00:00:00";
    var endDay = this.daysOfMonth(dateString);
    return year + "-12-" + endDay + " 23:59:59";
  },
  /**
   * 当月的第一天
   * @param date {date|string}
   * @return {string}
   */
  firstDayOfMonth: function firstDayOfMonth(date) {
    var year = this.getYear(date);
    var month = this.getMonth(date);
    var dateString = year + "-" + month + "-01 00:00:00";
    return dateString;
  },
  /**
   * 当月最后一天
   * @param date {date|string}
   * @return {string}
   */
  lastDayOfMonth: function lastDayOfMonth(date) {
    var endDay = this.daysOfMonth(date);
    var year = this.getYear(date);
    var month = this.getMonth(date);
    return year + "-" + month + "-" + endDay + " 23:59:59";
  },
  /**
   * 当天的开始时间
   * @param date {date|string}
   * @return {string}
   */
  firstTimeOfDay: function firstTimeOfDay(date) {
    var year = this.getYear(date);
    var month = this.getMonth(date);
    var dates = this.getDay(date);
    return year + "-" + month + "-" + dates + " 00:00:00";
  },
  /**
   * 当天的结束时间
   * @param date {date|string}
   * @return {string}
   */
  lastTimeOfDay: function lastTimeOfDay(date) {
    var year = this.getYear(date);
    var month = this.getMonth(date);
    var dates = this.getDay(date);
    return year + "-" + month + "-" + dates + " 23:59:59";
  },
  /**
   * 当周的第一天
   * @param date {date|string}
   * @return {string}
   */
  firstDayOfWeek: function firstDayOfWeek(date) {
    var week = this.getWeek(date);
    var d = this.minusDays(date, week);
    var year = this.getYear(d);
    var month = this.getMonth(d);
    var dates = this.getDay(d);
    return year + "-" + month + "-" + dates + " 00:00:00";
  },
  /**
   * 当周的最后一天
   * @param date {date|string}
   * @return {string}
   */
  lastDayOfWeek: function lastDayOfWeek(date) {
    var week = 6 - this.getWeek(date);
    var d = this.minusDays(date, week);
    var year = this.getYear(d);
    var month = this.getMonth(d);
    var dates = this.getDay(d);
    return year + "-" + month + "-" + dates + " 23:59:59";
  },
  /**
   * 下个月的第一天
   * @param date {date|string}
   * @return {string}
   */
  firstDayOfNextMonth: function firstDayOfNextMonth(date) {
    var year = this.getYear(date);
    var month = this.getMonth(date);
    month = month * 1 + 1;
    if (month > 12) {
      year = year + 1;
      month = month - 12;
    }
    month = month > 9 ? month : "0" + month;
    var dateString = year + "-" + month + "-01 00:00:00";
    return dateString;
  },

  /**
   * 获取两个时间间隔毫秒数
   * @param date1 {date|string}
   * @param date2 {date|string}
   * @return {number}
   */
  betweenMillSecond: function betweenMillSecond(date1, date2) {
    var stimes = this.getTime(this._transferDate(date1));
    var etimes = this.getTime(this._transferDate(date2));
    return etimes - stimes;
  },
  /**
   * 获取两个时间间隔秒数
   * @param date1 {date|string}
   * @param date2 {date|string}
   * @return {number}
   */
  betweenSecond: function betweenSecond(date1, date2) {
    return Math.floor(this.betweenMillSecond(date1, date2) / 1000);
  },
  /**
   * 获取两个时间间隔分钟数
   * @param date1 {date|string}
   * @param date2 {date|string}
   * @return {number}
   */
  betweenMinute: function betweenMinute(date1, date2) {
    return Math.floor(this.betweenMillSecond(date1, date2) / (1000 * 60));
  },
  /**
   * 获取两个时间间隔小时数
   * @param date1 {date|string}
   * @param date2 {date|string}
   * @return {number}
   */
  betweenHour: function betweenHour(date1, date2) {
    return Math.floor(this.betweenMillSecond(date1, date2) / (1000 * 60 * 60));
  },
  /**
   * 获取两个时间间隔天数
   * @param date1 {date|string}
   * @param date2 {date|string}
   * @return {number}
   */
  betweenDay: function betweenDay(date1, date2) {
    var d = {
      hour: 24,
      second: 60,
      mills: 3600,
      format: "YYYY-MM-dd",
      dateFormat: "YYYY-MM-dd HH:mm:ss"
    };
    var times = this.betweenSecond(date1, date2);
    var hour = d.hour;
    var mills = d.mills;
    return Math.ceil(times / (mills * hour));
  },
  /**
   * 获取两个时间间隔月数
   * @param date1 {date|string}
   * @param date2 {date|string}
   * @return {number}
   */
  betweenMonth: function betweenMonth(date1, date2) {
    var times = this.betweenDay(date1, date2);
    return Math.floor(times / 30);
  },
  /**
   * 获取两个时间间隔年数
   * @param date1 {date|string}
   * @param date2 {date|string}
   * @return {number}
   */
  betweenYear: function betweenYear(date1, date2) {
    var times = this.betweenDay(date1, date2);
    return Math.floor(times / 365);
  },

  /**
   * 在一个时间上加上多少毫秒
   * @param date {date|string}
   * @param millisSeconds {number}
   * @return {string}
   */
  plusMillisSeconds: function plusMillisSeconds(date, millisSeconds) {
    var dateTime = this.getTime(date);
    var mintimes = millisSeconds;
    var rdate = dateTime * 1 + mintimes * 1;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上加上多少秒
   * @param date {date|string}
   * @param seconds {number}
   * @return {string}
   */
  plusSeconds: function plusSeconds(date, seconds) {
    var dateTime = this.getTime(date);
    var mintimes = seconds * 1000;
    var rdate = dateTime * 1 + mintimes * 1;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上加上多少分钟
   * @param date {date|string}
   * @param minutes {number}
   * @return {string}
   */
  plusMinutes: function plusMinutes(date, minutes) {
    var dateTime = this.getTime(date);
    var mintimes = minutes * 60 * 1000;
    var rdate = dateTime * 1 + mintimes * 1;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上加上小时数
   * @param date {date|string}
   * @param hours {number}
   * @return {string}
   */
  plusHours: function plusHours(date, hours) {
    var dateTime = this.getTime(date);
    var mintimes = hours * 60 * 60 * 1000;
    var rdate = dateTime + mintimes;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上加上天数
   * @param date {date|string}
   * @param days {number}
   * @return {string}
   */
  plusDays: function plusDays(date, days) {
    var dateTime = this.getTime(date);
    var mintimes = days * 60 * 60 * 1000 * 24;
    var rdate = dateTime * 1 + mintimes * 1;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上加上多少个月,这里是按照一个月30天来计算天数的
   * @param date {date|string}
   * @param months {number}
   * @return {string}
   */
  plusMonths: function plusMonths(date, months) {
    var dateTime = this.getTime(date);
    var mintimes = months * 30 * 60 * 60 * 1000 * 24;
    var rdate = dateTime + mintimes * 1;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上加上多少年,这里是按照一年365天来计算天数的，isLoop是否闰年
   * @param date {date|string}
   * @param years {number}
   * @param isLoop {boolean}
   * @return {string}
   */
  plusYears: function plusYears(date, years, isLoop) {
    var dateTime = this.getTime(date);
    var day = 365;
    if (isLoop) day = 366;
    var mintimes = years * day * 60 * 60 * 1000 * 24;
    var rdate = dateTime + mintimes;
    return this._format(new Date(rdate));
  },

  /**
   * 在一个时间上减去多少毫秒
   * @param date {date|string}
   * @param millisSeconds {number}
   * @return {string}
   */
  minusMillisSeconds: function minusMillisSeconds(date, millisSeconds) {
    var dateTime = this.getTime(date);
    var mintimes = millisSeconds * 1;
    var rdate = dateTime - mintimes;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上减去多少秒
   * @param date {date|string}
   * @param seconds {number}
   * @return {string}
   */
  minusSeconds: function minusSeconds(date, seconds) {
    var dateTime = this.getTime(date);
    var mintimes = seconds * 1000;
    var rdate = dateTime - mintimes;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上减去多少分钟
   * @param date {date|string}
   * @param minutes {number}
   * @return {string}
   */
  minusMinutes: function minusMinutes(date, minutes) {
    var dateTime = this.getTime(date);
    var mintimes = minutes * 60 * 1000;
    var rdate = dateTime - mintimes;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上减去小时数
   * @param date {date|string}
   * @param hours {number}
   * @return {string}
   */
  minusHours: function minusHours(date, hours) {
    var dateTime = this.getTime(date);
    var mintimes = hours * 60 * 60 * 1000;
    var rdate = dateTime - mintimes;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上减去天数
   * @param date {date|string}
   * @param days {number}
   * @return {string}
   */
  minusDays: function minusDays(date, days) {
    var dateTime = this.getTime(date);
    var mintimes = days * 60 * 60 * 1000 * 24;
    var rdate = dateTime - mintimes;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上减去多少个月,这里是按照一个月30天来计算天数的
   * @param date {date|string}
   * @param months {number}
   * @return {string}
   */
  minusMonths: function minusMonths(date, months) {
    var dateTime = this.getTime(date);
    var mintimes = months * 30 * 60 * 60 * 1000 * 24;
    var rdate = dateTime - mintimes;
    return this._format(new Date(rdate));
  },
  /**
   * 在一个时间上减去多少年,这里是按照一年365天来计算天数的，isLoop是否闰年
   * @param date {date|string}
   * @param years {number}
   * @param isLoop {boolean}
   * @return {string}
   */
  minusYears: function minusYears(date, years, isLoop) {
    var dateTime = this.getTime(date);
    var day = 365;
    if (isLoop) day = 366;
    var mintimes = years * day * 60 * 60 * 1000 * 24;
    var rdate = dateTime - mintimes;
    return this._format(new Date(rdate));
  },

  /**
   * 判断两个时间是否一样
   * @param date1 {date|string}
   * @param date2 {date|string}
   * @return {boolean}
   */
  isEq: function isEq(date1, date2) {
    var stime = this.getTime(this._transferDate(date1));
    var etime = this.getTime(this._transferDate(date2));
    return stime === etime ? true : false;
  },
  /**
   * 判断date2是否晚于date1
   * @param date1 {date|string}
   * @param date2 {date|string}
   * @return {boolean}
   */
  isAfter: function isAfter(date1, date2) {
    var stime = this.getTime(this._transferDate(date1));
    var etime = this.getTime(this._transferDate(date2));
    return stime < etime ? true : false;
  },
  /**
   * 判断date2是否早于date1
   * @param date1 {date|string}
   * @param date2 {date|string}
   * @return {boolean}
   */
  isBefore: function isBefore(date1, date2) {
    var stime = this.getTime(this._transferDate(date1));
    var etime = this.getTime(this._transferDate(date2));
    return stime > etime ? true : false;
  },

  /*转换时间*/
  _transferDate: function _transferDate() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

    if (typeof date === "string") {
      return new Date(date);
    } else if (!date) {
      return new Date();
    } else {
      return date;
    }
  },
  /*时间格式化*/
  _format: function _format(date) {
    return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date) + " " + this.getHours(date) + ":" + this.getMinutes(date) + ":" + this.getSeconds(date);
  }
};