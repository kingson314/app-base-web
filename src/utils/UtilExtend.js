
export function extend(deep, target, options) {
    var copyIsArray,
        toString = Object.prototype.toString;


    for (let name in options) {
        let src = target[name];
        let copy = options[name];

        if (target === copy) { continue; }

        if (deep && copy
            && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            let clone;
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

const class2type = {
    '[object Boolean]' : 'boolean',
    '[object Number]' : 'number',
    '[object String]' : 'string',
    '[object Function]' : 'function',
    '[object Array]' : 'array',
    '[object Date]' : 'date',
    '[object RegExp]' : 'regExp',
    '[object Object]' : 'object'
};
function isArray(obj) {
    return type(obj) === "array";
}
function isWindow(obj) {
    return obj && typeof obj === "object" && "setInterval" in obj;
};
function type(obj) {

    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
};

function isPlainObject (obj) {
    let hasOwn = Object.prototype.hasOwnProperty;
    if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
        return false;
    }

    if (obj.constructor && !hasOwn.call(obj, "constructor")
        && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
    }
    var key;
    for (key in obj) {
    }
    return key === undefined || hasOwn.call(obj, key);
};