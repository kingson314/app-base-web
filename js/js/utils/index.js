'use strict';

/**
 * @author fengguoqu (patricknieh@hotmail.com)
 * @copyright fengguoqu 2019
 * Released under the MIT license
 */

var utils = {
  check: require('./check'),

  array: require('./array'),
  number: require('./number'),
  string: require('./string'),
  date: require('./date'),

  event: require('./event'),
  file: require('./file'),
  net: require('./net'),
  xlsx: require('./xlsx')
};

module.exports = utils;