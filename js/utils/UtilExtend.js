'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.extend = extend;
function extend(deep, target, options) {
    var copyIsArray,
        toString = Object.prototype.toString;

    for (var name in options) {
        var src = target[name];
        var copy = options[name];

        if (target === copy) {
            continue;
        }

        if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            var clone = void 0;
            if (copyIsArray) {
                copyIsArray = false;
                clone = src && isArray(src) ? src : [];
            } else {
                clone = src && isPlainObject(src) ? src : {};
            }

            target[name] = extend(deep, clone, copy);
        } else if (copy !== undefined) {
            target[name] = copy;
        }
    }
    return target;
};

var class2type = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Object]': 'object'
};
function isArray(obj) {
    return type(obj) === "array";
}
function isWindow(obj) {
    return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === "object" && "setInterval" in obj;
};
function type(obj) {

    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
};

function isPlainObject(obj) {
    var hasOwn = Object.prototype.hasOwnProperty;
    if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
        return false;
    }

    if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
    }
    var key;
    for (key in obj) {}
    return key === undefined || hasOwn.call(obj, key);
};