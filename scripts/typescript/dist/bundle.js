/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_buffer_1 = __webpack_require__(11);
/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */
var KindOf = /** @class */ (function () {
    function KindOf() {
        this.toString = Object.prototype.toString;
    }
    KindOf.Check = function (val) {
        // primitivies
        if (typeof val === 'undefined') {
            return 'undefined';
        }
        if (val === null) {
            return 'null';
        }
        if (val === true || val === false || val instanceof Boolean) {
            return 'boolean';
        }
        if (typeof val === 'string' || val instanceof String) {
            return 'string';
        }
        if (typeof val === 'number' || val instanceof Number) {
            return 'number';
        }
        // functions
        if (typeof val === 'function' || val instanceof Function) {
            return 'function';
        }
        // array
        if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
            return 'array';
        }
        // check for instances of RegExp and Date before calling `toString`
        if (val instanceof RegExp) {
            return 'regexp';
        }
        if (val instanceof Date) {
            return 'date';
        }
        // other objects
        var type = this.toString.call(val);
        if (type === '[object RegExp]') {
            return 'regexp';
        }
        if (type === '[object Date]') {
            return 'date';
        }
        if (type === '[object Arguments]') {
            return 'arguments';
        }
        if (type === '[object Error]') {
            return 'error';
        }
        // buffer
        if (is_buffer_1.IsBuffer.Check(val)) {
            return 'buffer';
        }
        // es6: Map, WeakMap, Set, WeakSet
        if (type === '[object Set]') {
            return 'set';
        }
        if (type === '[object WeakSet]') {
            return 'weakset';
        }
        if (type === '[object Map]') {
            return 'map';
        }
        if (type === '[object WeakMap]') {
            return 'weakmap';
        }
        if (type === '[object Symbol]') {
            return 'symbol';
        }
        // typed arrays
        if (type === '[object Int8Array]') {
            return 'int8array';
        }
        if (type === '[object Uint8Array]') {
            return 'uint8array';
        }
        if (type === '[object Uint8ClampedArray]') {
            return 'uint8clampedarray';
        }
        if (type === '[object Int16Array]') {
            return 'int16array';
        }
        if (type === '[object Uint16Array]') {
            return 'uint16array';
        }
        if (type === '[object Int32Array]') {
            return 'int32array';
        }
        if (type === '[object Uint32Array]') {
            return 'uint32array';
        }
        if (type === '[object Float32Array]') {
            return 'float32array';
        }
        if (type === '[object Float64Array]') {
            return 'float64array';
        }
        // must be a plain object
        return 'object';
    };
    return KindOf;
}());
exports.KindOf = KindOf;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NumberIsNaN = /** @class */ (function () {
    function NumberIsNaN() {
    }
    NumberIsNaN.Check = function (x) {
        return x !== x;
    };
    return NumberIsNaN;
}());
exports.NumberIsNaN = NumberIsNaN;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var kind_of_1 = __webpack_require__(0);
var IsAccessorDescriptor = /** @class */ (function () {
    function IsAccessorDescriptor() {
    }
    IsAccessorDescriptor.Check = function (obj, prop, key) {
        if (kind_of_1.KindOf.Check(prop) === 'string') {
            var val = Object.getOwnPropertyDescriptor(obj, prop);
            return kind_of_1.KindOf.Check(val) !== 'undefined';
        }
        if (kind_of_1.KindOf.Check(obj) !== 'object') {
            return false;
        }
        if (this.Has(obj, 'value') || this.Has(obj, 'writable')) {
            return false;
        }
        if (!this.Has(obj, 'get') || kind_of_1.KindOf.Check(obj.get) !== 'function') {
            return false;
        }
        // tldr: it's valid to have "set" be undefined
        // "set" might be undefined if `Object.getOwnPropertyDescriptor`
        // was used to get the value, and only `get` was defined by the user
        if (this.Has(obj, 'set') && kind_of_1.KindOf.Check(obj[key]) !== 'function' && kind_of_1.KindOf.Check(obj[key]) !== 'undefined') {
            return false;
        }
        for (var key_1 in obj) {
            if (!this.accessor.hasOwnProperty(key_1)) {
                continue;
            }
            if (kind_of_1.KindOf.Check(obj[key_1]) === this.accessor[key_1]) {
                continue;
            }
            if (kind_of_1.KindOf.Check(obj[key_1]) !== 'undefined') {
                return false;
            }
        }
        return true;
    };
    IsAccessorDescriptor.Has = function (obj, key) {
        return {}.hasOwnProperty.call(obj, key);
    };
    // accessor descriptor properties
    IsAccessorDescriptor.accessor = {
        get: 'function',
        set: 'function',
        configurable: 'boolean',
        enumerable: 'boolean'
    };
    return IsAccessorDescriptor;
}());
exports.IsAccessorDescriptor = IsAccessorDescriptor;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var kind_of_1 = __webpack_require__(0);
var IsDataDescriptor = /** @class */ (function () {
    function IsDataDescriptor() {
    }
    IsDataDescriptor.Check = function (obj, prop) {
        if (kind_of_1.KindOf.Check(obj) !== 'object') {
            return false;
        }
        if (kind_of_1.KindOf.Check(prop) === 'string') {
            var val = Object.getOwnPropertyDescriptor(obj, prop);
            return kind_of_1.KindOf.Check(val) !== 'undefined';
        }
        if (!('value' in obj) && !('writable' in obj)) {
            return false;
        }
        for (var key in obj) {
            if (key === 'value')
                continue;
            if (!this.data.hasOwnProperty(key)) {
                continue;
            }
            if (kind_of_1.KindOf.Check(obj[key]) === this.data[key]) {
                continue;
            }
            if (kind_of_1.KindOf.Check(obj[key]) !== 'undefined') {
                return false;
            }
        }
        return true;
    };
    IsDataDescriptor.data = {
        configurable: 'boolean',
        enumerable: 'boolean',
        writable: 'boolean'
    };
    return IsDataDescriptor;
}());
exports.IsDataDescriptor = IsDataDescriptor;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsPrimitive = /** @class */ (function () {
    function IsPrimitive() {
    }
    IsPrimitive.Check = function (value) {
        return value == null || (typeof value !== 'function' && typeof value !== 'object');
    };
    return IsPrimitive;
}());
exports.IsPrimitive = IsPrimitive;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var IsExtGlob = /** @class */ (function () {
    function IsExtGlob() {
    }
    IsExtGlob.Check = function (str) {
        var match;
        while ((match = /(\\).|([@?!+*]\(.*\))/g.exec(str))) {
            if (match[2])
                return true;
            str = str.slice(match.index + match[0].length);
        }
        return false;
    };
    return IsExtGlob;
}());
exports.IsExtGlob = IsExtGlob;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var kind_of_1 = __webpack_require__(0);
var IsNumber = /** @class */ (function () {
    function IsNumber() {
    }
    IsNumber.Check = function (num) {
        var type = kind_of_1.KindOf.Check(num);
        if (type !== 'number' && type !== 'string') {
            return false;
        }
        var n = +num;
        return (n - n + 1) >= 0 && num !== '';
    };
    return IsNumber;
}());
exports.IsNumber = IsNumber;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = __webpack_require__(8);
console.log(is_1.Is.Date(new Date()));
// true
console.log(is_1.Is.Date("hello"));
// false 


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_absolute_url_1 = __webpack_require__(9);
var is_date_object_1 = __webpack_require__(10);
var is_accessor_descriptor_1 = __webpack_require__(2);
var is_arrayish_1 = __webpack_require__(12);
var is_callable_1 = __webpack_require__(13);
var is_data_descriptor_1 = __webpack_require__(3);
var is_descriptor_1 = __webpack_require__(14);
var is_dotfile_1 = __webpack_require__(15);
var is_equal_shallow_1 = __webpack_require__(16);
var is_extendable_1 = __webpack_require__(17);
var is_extglob_1 = __webpack_require__(5);
var number_is_nan_1 = __webpack_require__(1);
var is_finite_1 = __webpack_require__(18);
var is_fullwidth_code_point_1 = __webpack_require__(19);
var is_glob_1 = __webpack_require__(20);
var is_number_1 = __webpack_require__(6);
var is_odd_1 = __webpack_require__(21);
var is_plain_obj_1 = __webpack_require__(22);
var is_plain_object_1 = __webpack_require__(23);
var is_posix_bracket_1 = __webpack_require__(25);
var is_primitive_1 = __webpack_require__(4);
var is_property_1 = __webpack_require__(26);
var is_stream_1 = __webpack_require__(27);
var is_symbol_1 = __webpack_require__(28);
var is_typedarray_1 = __webpack_require__(29);
var is_utf8_1 = __webpack_require__(30);
var Is = /** @class */ (function () {
    function Is() {
    }
    Is.AbsoluteUrl = function (url) {
        return is_absolute_url_1.IsAbsosuteUrl.Check(url);
    };
    Is.Date = function (value) {
        return is_date_object_1.IsDateObject.Check(value);
    };
    Is.AccessorDescriptor = function (obj, prop, key) {
        return is_accessor_descriptor_1.IsAccessorDescriptor.Check(obj, prop, key);
    };
    Is.Arrayish = function (obj) {
        return is_arrayish_1.IsArrayish.Check(obj);
    };
    Is.Callable = function (value) {
        return is_callable_1.IsCallable.Check(value);
    };
    Is.DataDescriptor = function (obj, prop) {
        return is_data_descriptor_1.IsDataDescriptor.Check(obj, prop);
    };
    Is.Descriptor = function (obj, key) {
        return is_descriptor_1.IsDescriptor.Check(obj, key);
    };
    Is.Dotfile = function (str) {
        return is_dotfile_1.IsDotFile.Check(str);
    };
    Is.EqualShallow = function (a, b) {
        return is_equal_shallow_1.IsEqualShallow.Check(a, b);
    };
    Is.Extendable = function (val) {
        return is_extendable_1.IsExtendable.Check(val);
    };
    Is.Extglob = function (str) {
        return is_extglob_1.IsExtGlob.Check(str);
    };
    Is.Finite = function (val) {
        return is_finite_1.IsFinite.Check(val);
    };
    Is.FullwidthCodePoint = function (x) {
        return is_fullwidth_code_point_1.IsFullwidthCodePoint.Check(x);
    };
    Is.Glob = function (str, options) {
        return is_glob_1.IsGlob.Check(str, options);
    };
    Is.Number = function (num) {
        return is_number_1.IsNumber.Check(num);
    };
    Is.Odd = function (num) {
        return is_odd_1.IsOdd.Check(num);
    };
    Is.NaN = function (x) {
        return number_is_nan_1.NumberIsNaN.Check(x);
    };
    Is.PlainObj = function (x) {
        return is_plain_obj_1.IsPlainObj.Check(x);
    };
    Is.PlainObject = function (o) {
        return is_plain_object_1.IsPlainObject.Check(o);
    };
    Is.PosixBracket = function (str) {
        return is_posix_bracket_1.IsPosixBracket.Check(str);
    };
    Is.Primitive = function (value) {
        return is_primitive_1.IsPrimitive.Check(value);
    };
    Is.Property = function (str) {
        return is_property_1.IsProperty.Check(str);
    };
    Is.Stream = function (stream) {
        return is_stream_1.IsStream.Check(stream);
    };
    Is.StreamWritable = function (stream) {
        return is_stream_1.IsStream.Writable(stream);
    };
    Is.StreamReadable = function (stream) {
        return is_stream_1.IsStream.Readable(stream);
    };
    Is.StreamDuplex = function (stream) {
        return is_stream_1.IsStream.Duplex(stream);
    };
    Is.StreamTransform = function (stream) {
        return is_stream_1.IsStream.Transform(stream);
    };
    Is.Symbol = function (value) {
        return is_symbol_1.IsSymbol.Check(value);
    };
    Is.TypedArray = function (arr) {
        return is_typedarray_1.IsTypedArray.Check(arr);
    };
    Is.Utf8 = function (bytes) {
        return is_utf8_1.IsUtf8.Check(bytes);
    };
    return Is;
}());
exports.Is = Is;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsAbsosuteUrl = /** @class */ (function () {
    function IsAbsosuteUrl() {
    }
    IsAbsosuteUrl.Check = function (url) {
        return /^[a-z][a-z0-9+.-]*:/.test(url);
    };
    return IsAbsosuteUrl;
}());
exports.IsAbsosuteUrl = IsAbsosuteUrl;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsDateObject = /** @class */ (function () {
    function IsDateObject() {
    }
    IsDateObject.Check = function (value) {
        if (typeof value !== 'object' || value === null) {
            return false;
        }
        return this.hasToStringTag ? this.TryDateObject(value) : this.toStr.call(value) === this.dateClass;
    };
    IsDateObject.TryDateObject = function (value) {
        try {
            this.GetDay.call(value);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    IsDateObject.GetDay = Date.prototype.getDay;
    IsDateObject.toStr = Object.prototype.toString;
    IsDateObject.dateClass = '[object Date]';
    IsDateObject.hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
    return IsDateObject;
}());
exports.IsDateObject = IsDateObject;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
var IsBuffer = /** @class */ (function () {
    function IsBuffer() {
    }
    IsBuffer.Check = function (obj) {
        return obj != null && (this.IsBuffer(obj) || this.IsSlowBuffer(obj) || !!obj._isBuffer);
    };
    IsBuffer.IsBuffer = function (obj) {
        return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
    };
    // For Node v0.10 support. Remove this eventually.
    IsBuffer.IsSlowBuffer = function (obj) {
        return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && this.IsBuffer(obj.slice(0, 0));
    };
    return IsBuffer;
}());
exports.IsBuffer = IsBuffer;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsArrayish = /** @class */ (function () {
    function IsArrayish() {
    }
    IsArrayish.Check = function (obj) {
        if (!obj) {
            return false;
        }
        return obj instanceof Array || Array.isArray(obj) ||
            (obj.length >= 0 && obj.splice instanceof Function);
    };
    return IsArrayish;
}());
exports.IsArrayish = IsArrayish;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsCallable = /** @class */ (function () {
    function IsCallable() {
    }
    IsCallable.Check = function (value) {
        if (!value) {
            return false;
        }
        if (typeof value !== 'function' && typeof value !== 'object') {
            return false;
        }
        if (this.hasToStringTag) {
            return this.TryFunctionObject(value);
        }
        if (this.IsES6ClassFn(value)) {
            return false;
        }
        var strClass = this.toStr.call(value);
        return strClass === this.fnClass || strClass === this.genClass;
    };
    IsCallable.IsES6ClassFn = function (value) {
        try {
            var fnStr = this.fnToStr.call(value);
            var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
            var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
            var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
            return this.constructorRegex.test(spaceStripped);
        }
        catch (e) {
            return false; // not a function
        }
    };
    IsCallable.TryFunctionObject = function (value) {
        try {
            if (this.IsES6ClassFn(value)) {
                return false;
            }
            this.fnToStr.call(value);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    IsCallable.fnToStr = Function.prototype.toString;
    IsCallable.constructorRegex = /^\s*class /;
    IsCallable.toStr = Object.prototype.toString;
    IsCallable.fnClass = '[object Function]';
    IsCallable.genClass = '[object GeneratorFunction]';
    IsCallable.hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
    return IsCallable;
}());
exports.IsCallable = IsCallable;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var kind_of_1 = __webpack_require__(0);
var is_accessor_descriptor_1 = __webpack_require__(2);
var is_data_descriptor_1 = __webpack_require__(3);
var IsDescriptor = /** @class */ (function () {
    function IsDescriptor() {
    }
    IsDescriptor.Check = function (obj, key) {
        if (kind_of_1.KindOf.Check(obj) !== 'object') {
            return false;
        }
        if ('get' in obj) {
            return is_accessor_descriptor_1.IsAccessorDescriptor.Check(obj, key);
        }
        return is_data_descriptor_1.IsDataDescriptor.Check(obj, key);
    };
    return IsDescriptor;
}());
exports.IsDescriptor = IsDescriptor;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-dotfile <https://github.com/jonschlinkert/is-dotfile>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var IsDotFile = /** @class */ (function () {
    function IsDotFile() {
    }
    IsDotFile.Check = function (str) {
        if (str.charCodeAt(0) === 46 /* . */ && str.indexOf('/', 1) === -1) {
            return true;
        }
        var slash = str.lastIndexOf('/');
        return slash !== -1 ? str.charCodeAt(slash + 1) === 46 /* . */ : false;
    };
    return IsDotFile;
}());
exports.IsDotFile = IsDotFile;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-equal-shallow <https://github.com/jonschlinkert/is-equal-shallow>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var is_primitive_1 = __webpack_require__(4);
var IsEqualShallow = /** @class */ (function () {
    function IsEqualShallow() {
    }
    IsEqualShallow.Check = function (a, b) {
        if (!a && !b) {
            return true;
        }
        if (!a && b || a && !b) {
            return false;
        }
        var numKeysA = 0, numKeysB = 0, key;
        for (key in b) {
            numKeysB++;
            if (!is_primitive_1.IsPrimitive.Check(b[key]) || !a.hasOwnProperty(key) || (a[key] !== b[key])) {
                return false;
            }
        }
        for (key in a) {
            numKeysA++;
        }
        return numKeysA === numKeysB;
    };
    return IsEqualShallow;
}());
exports.IsEqualShallow = IsEqualShallow;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var IsExtendable = /** @class */ (function () {
    function IsExtendable() {
    }
    IsExtendable.Check = function (val) {
        return typeof val !== 'undefined' && val !== null
            && (typeof val === 'object' || typeof val === 'function');
    };
    return IsExtendable;
}());
exports.IsExtendable = IsExtendable;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var number_is_nan_1 = __webpack_require__(1);
var IsFinite = /** @class */ (function () {
    function IsFinite() {
    }
    IsFinite.Check = function (val) {
        return !(typeof val !== 'number' || number_is_nan_1.NumberIsNaN.Check(val) || val === Infinity || val === -Infinity);
    };
    return IsFinite;
}());
exports.IsFinite = IsFinite;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var number_is_nan_1 = __webpack_require__(1);
var IsFullwidthCodePoint = /** @class */ (function () {
    function IsFullwidthCodePoint() {
    }
    IsFullwidthCodePoint.Check = function (x) {
        if (number_is_nan_1.NumberIsNaN.Check(x)) {
            return false;
        }
        // https://github.com/nodejs/io.js/blob/cff7300a578be1b10001f2d967aaedc88aee6402/lib/readline.js#L1369
        // code points are derived from:
        // http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
        if (x >= 0x1100 && (x <= 0x115f || // Hangul Jamo
            0x2329 === x || // LEFT-POINTING ANGLE BRACKET
            0x232a === x || // RIGHT-POINTING ANGLE BRACKET
            // CJK Radicals Supplement .. Enclosed CJK Letters and Months
            (0x2e80 <= x && x <= 0x3247 && x !== 0x303f) ||
            // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
            0x3250 <= x && x <= 0x4dbf ||
            // CJK Unified Ideographs .. Yi Radicals
            0x4e00 <= x && x <= 0xa4c6 ||
            // Hangul Jamo Extended-A
            0xa960 <= x && x <= 0xa97c ||
            // Hangul Syllables
            0xac00 <= x && x <= 0xd7a3 ||
            // CJK Compatibility Ideographs
            0xf900 <= x && x <= 0xfaff ||
            // Vertical Forms
            0xfe10 <= x && x <= 0xfe19 ||
            // CJK Compatibility Forms .. Small Form Variants
            0xfe30 <= x && x <= 0xfe6b ||
            // Halfwidth and Fullwidth Forms
            0xff01 <= x && x <= 0xff60 ||
            0xffe0 <= x && x <= 0xffe6 ||
            // Kana Supplement
            0x1b000 <= x && x <= 0x1b001 ||
            // Enclosed Ideographic Supplement
            0x1f200 <= x && x <= 0x1f251 ||
            // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
            0x20000 <= x && x <= 0x3fffd)) {
            return true;
        }
        return false;
    };
    return IsFullwidthCodePoint;
}());
exports.IsFullwidthCodePoint = IsFullwidthCodePoint;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var is_extglob_1 = __webpack_require__(5);
var IsGlob = /** @class */ (function () {
    function IsGlob() {
    }
    IsGlob.Check = function (str, options) {
        if (is_extglob_1.IsExtGlob.Check(str)) {
            return true;
        }
        var regex = /\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/;
        var match;
        // optionally relax regex
        if (options && options.strict === false) {
            regex = /\\(.)|(^!|[*?{}()[\]]|\(\?)/;
        }
        while ((match = regex.exec(str))) {
            if (match[2])
                return true;
            var idx = match.index + match[0].length;
            // if an open bracket/brace/paren is escaped,
            // set the index to the next closing character
            var open = match[1];
            var close = open ? this.chars[open] : null;
            if (open && close) {
                var n = str.indexOf(close, idx);
                if (n !== -1) {
                    idx = n + 1;
                }
            }
            str = str.slice(idx);
        }
        return false;
    };
    IsGlob.chars = { '{': '}', '(': ')', '[': ']' };
    return IsGlob;
}());
exports.IsGlob = IsGlob;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-odd <https://github.com/jonschlinkert/is-odd>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var is_number_1 = __webpack_require__(6);
var IsOdd = /** @class */ (function () {
    function IsOdd() {
    }
    IsOdd.Check = function (i) {
        if (!is_number_1.IsNumber.Check(i)) {
            throw new TypeError('is-odd expects a number.');
        }
        if (Number(i) !== Math.floor(i)) {
            throw new RangeError('is-odd expects an integer.');
        }
        return !!(~~i & 1);
    };
    return IsOdd;
}());
exports.IsOdd = IsOdd;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsPlainObj = /** @class */ (function () {
    function IsPlainObj() {
    }
    IsPlainObj.Check = function (x) {
        var prototype;
        return this.toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
    };
    IsPlainObj.toString = Object.prototype.toString;
    return IsPlainObj;
}());
exports.IsPlainObj = IsPlainObj;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var is_object_1 = __webpack_require__(24);
var IsPlainObject = /** @class */ (function () {
    function IsPlainObject() {
    }
    IsPlainObject.Check = function (o) {
        if (this.IsObjectObject(o) === false)
            return false;
        // If has modified constructor
        this.ctor = o.constructor;
        if (typeof this.ctor !== 'function')
            return false;
        // If has modified prototype
        this.prot = this.ctor.prototype;
        if (this.IsObjectObject(this.prot) === false)
            return false;
        // If constructor does not have an Object-specific method
        if (this.prot.hasOwnProperty('isPrototypeOf') === false) {
            return false;
        }
        // Most likely a plain Object
        return true;
    };
    IsPlainObject.IsObjectObject = function (o) {
        return is_object_1.IsObject.Check(o) === true
            && Object.prototype.toString.call(o) === '[object Object]';
    };
    IsPlainObject.ctor = null;
    IsPlainObject.prot = null;
    return IsPlainObject;
}());
exports.IsPlainObject = IsPlainObject;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var IsObject = /** @class */ (function () {
    function IsObject() {
    }
    IsObject.Check = function (val) {
        return val != null && typeof val === 'object' && Array.isArray(val) === false;
    };
    return IsObject;
}());
exports.IsObject = IsObject;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * is-posix-bracket <https://github.com/jonschlinkert/is-posix-bracket>
 *
 * Copyright (c) 2015-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var IsPosixBracket = /** @class */ (function () {
    function IsPosixBracket() {
    }
    IsPosixBracket.Check = function (str) {
        return typeof str === 'string' && /\[([:.=+])(?:[^\[\]]|)+\1\]/.test(str);
    };
    return IsPosixBracket;
}());
exports.IsPosixBracket = IsPosixBracket;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsProperty = /** @class */ (function () {
    function IsProperty() {
    }
    IsProperty.Check = function (str) {
        return /^[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/.test(str);
    };
    return IsProperty;
}());
exports.IsProperty = IsProperty;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsStream = /** @class */ (function () {
    function IsStream() {
    }
    IsStream.Check = function (stream) {
        return stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
    };
    IsStream.Writable = function (stream) {
        return this.Check(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';
    };
    IsStream.Duplex = function (stream) {
        return this.Writable(stream) && this.Readable(stream);
    };
    IsStream.Transform = function (stream) {
        return this.Duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';
    };
    IsStream.Readable = function (stream) {
        return this.Check(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';
    };
    return IsStream;
}());
exports.IsStream = IsStream;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsSymbol = /** @class */ (function () {
    function IsSymbol() {
    }
    IsSymbol.Check = function (value) {
        if (this.hasSymbols) {
            if (typeof value === 'symbol') {
                return true;
            }
            if (this.toStr.call(value) !== '[object Symbol]') {
                return false;
            }
            try {
                return this.IsSymbolObject(value);
            }
            catch (e) {
                return false;
            }
        }
        else {
            // this environment does not support Symbols.
            return false;
        }
    };
    IsSymbol.IsSymbolObject = function (value) {
        if (typeof value.valueOf() !== 'symbol') {
            return false;
        }
        return this.symStringRegex.test(this.symToStr.call(value));
    };
    IsSymbol.toStr = Object.prototype.toString;
    IsSymbol.hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';
    IsSymbol.symToStr = Symbol.prototype.toString;
    IsSymbol.symStringRegex = /^Symbol\(.*\)$/;
    return IsSymbol;
}());
exports.IsSymbol = IsSymbol;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsTypedArray = /** @class */ (function () {
    function IsTypedArray() {
    }
    IsTypedArray.Check = function (arr) {
        return (this.IsStrictTypedArray(arr)
            || this.IsLooseTypedArray(arr));
    };
    IsTypedArray.IsStrictTypedArray = function (arr) {
        return (arr instanceof Int8Array
            || arr instanceof Int16Array
            || arr instanceof Int32Array
            || arr instanceof Uint8Array
            || arr instanceof Uint8ClampedArray
            || arr instanceof Uint16Array
            || arr instanceof Uint32Array
            || arr instanceof Float32Array
            || arr instanceof Float64Array);
    };
    IsTypedArray.IsLooseTypedArray = function (arr) {
        return this.names[toString.call(arr)];
    };
    IsTypedArray.names = {
        '[object Int8Array]': true,
        '[object Int16Array]': true,
        '[object Int32Array]': true,
        '[object Uint8Array]': true,
        '[object Uint8ClampedArray]': true,
        '[object Uint16Array]': true,
        '[object Uint32Array]': true,
        '[object Float32Array]': true,
        '[object Float64Array]': true
    };
    IsTypedArray.toString = Object.prototype.toString;
    return IsTypedArray;
}());
exports.IsTypedArray = IsTypedArray;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IsUtf8 = /** @class */ (function () {
    function IsUtf8() {
    }
    IsUtf8.Check = function (bytes) {
        var i = 0;
        while (i < bytes.length) {
            if ((bytes[i] == 0x09 ||
                bytes[i] == 0x0A ||
                bytes[i] == 0x0D ||
                (0x20 <= bytes[i] && bytes[i] <= 0x7E))) {
                i += 1;
                continue;
            }
            if (((0xC2 <= bytes[i] && bytes[i] <= 0xDF) &&
                (0x80 <= bytes[i + 1] && bytes[i + 1] <= 0xBF))) {
                i += 2;
                continue;
            }
            if ((bytes[i] == 0xE0 &&
                (0xA0 <= bytes[i + 1] && bytes[i + 1] <= 0xBF) &&
                (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF)) ||
                (((0xE1 <= bytes[i] && bytes[i] <= 0xEC) ||
                    bytes[i] == 0xEE ||
                    bytes[i] == 0xEF) &&
                    (0x80 <= bytes[i + 1] && bytes[i + 1] <= 0xBF) &&
                    (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF)) ||
                (bytes[i] == 0xED &&
                    (0x80 <= bytes[i + 1] && bytes[i + 1] <= 0x9F) &&
                    (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF))) {
                i += 3;
                continue;
            }
            if ((bytes[i] == 0xF0 &&
                (0x90 <= bytes[i + 1] && bytes[i + 1] <= 0xBF) &&
                (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF) &&
                (0x80 <= bytes[i + 3] && bytes[i + 3] <= 0xBF)) ||
                ((0xF1 <= bytes[i] && bytes[i] <= 0xF3) &&
                    (0x80 <= bytes[i + 1] && bytes[i + 1] <= 0xBF) &&
                    (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF) &&
                    (0x80 <= bytes[i + 3] && bytes[i + 3] <= 0xBF)) ||
                (bytes[i] == 0xF4 &&
                    (0x80 <= bytes[i + 1] && bytes[i + 1] <= 0x8F) &&
                    (0x80 <= bytes[i + 2] && bytes[i + 2] <= 0xBF) &&
                    (0x80 <= bytes[i + 3] && bytes[i + 3] <= 0xBF))) {
                i += 4;
                continue;
            }
            return false;
        }
        return true;
    };
    return IsUtf8;
}());
exports.IsUtf8 = IsUtf8;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map