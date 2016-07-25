webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(19);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(20);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _vueResource = __webpack_require__(21);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	var _app = __webpack_require__(22);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by aresn on 16/6/20.
	 */
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_vueResource2.default);

	// 开启debug模式
	_vue2.default.config.debug = true;

	// 路由配置
	var router = new _vueRouter2.default({
	    // 是否开启HTML5的history模式,开启后,需服务端支持,否则404
	    history: false
	});

	router.map({
	    '/index': {
	        name: 'index',
	        title: '这是首页',
	        component: function component(resolve) {
	            __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(32)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	        }
	    },
	    '/order': {
	        name: 'order',
	        title: '订单页面',
	        component: function component(resolve) {
	            __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(40)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	        }
	    },
	    '/user': {
	        name: 'user',
	        title: '个人中心',
	        component: function component(resolve) {
	            __webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(50)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	        }
	    }
	});

	//访问记录
	window.routeList = [];

	router.beforeEach(function (transition) {

	    if (routeList.length > 1 && transition.to.name == routeList[routeList.length - 2]['name']) {
	        routeList.splice(routeList.length - 1, 1);
	        //console.log(routeList);
	    } else {
	        routeList.push({
	            name: transition.to.name,
	            path: transition.to.path,
	            query: transition.to.query,
	            params: transition.to.params,
	            timer: +new Date()
	        });
	    }

	    //切换title
	    document.title = transition.to.title || document.title;

	    transition.next();
	});

	router.afterEach(function () {});

	router.redirect({
	    '*': "/index"
	});
	router.start(_app2.default, '#app');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	/*!
	 * vue-resource v0.9.3
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */

	'use strict';

	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */

	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;

	function Promise$2(executor) {

	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];

	    var promise = this;

	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}

	Promise$2.reject = function (r) {
	    return new Promise$2(function (resolve, reject) {
	        reject(r);
	    });
	};

	Promise$2.resolve = function (x) {
	    return new Promise$2(function (resolve, reject) {
	        resolve(x);
	    });
	};

	Promise$2.all = function all(iterable) {
	    return new Promise$2(function (resolve, reject) {
	        var count = 0,
	            result = [];

	        if (iterable.length === 0) {
	            resolve(result);
	        }

	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;

	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }

	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$2.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};

	Promise$2.race = function race(iterable) {
	    return new Promise$2(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$2.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};

	var p$1 = Promise$2.prototype;

	p$1.resolve = function resolve(x) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        var called = false;

	        try {
	            var then = x && x['then'];

	            if (x !== null && typeof x === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }

	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};

	p$1.reject = function reject(reason) {
	    var promise = this;

	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }

	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};

	p$1.notify = function notify() {
	    var promise = this;

	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];

	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};

	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;

	    return new Promise$2(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};

	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};

	var PromiseObj = window.Promise || Promise$2;

	function Promise$1(executor, context) {

	    if (executor instanceof PromiseObj) {
	        this.promise = executor;
	    } else {
	        this.promise = new PromiseObj(executor.bind(context));
	    }

	    this.context = context;
	}

	Promise$1.all = function (iterable, context) {
	    return new Promise$1(PromiseObj.all(iterable), context);
	};

	Promise$1.resolve = function (value, context) {
	    return new Promise$1(PromiseObj.resolve(value), context);
	};

	Promise$1.reject = function (reason, context) {
	    return new Promise$1(PromiseObj.reject(reason), context);
	};

	Promise$1.race = function (iterable, context) {
	    return new Promise$1(PromiseObj.race(iterable), context);
	};

	var p = Promise$1.prototype;

	p.bind = function (context) {
	    this.context = context;
	    return this;
	};

	p.then = function (fulfilled, rejected) {

	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new Promise$1(this.promise.then(fulfilled, rejected), this.context);
	};

	p.catch = function (rejected) {

	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }

	    return new Promise$1(this.promise.catch(rejected), this.context);
	};

	p.finally = function (callback) {

	    return this.then(function (value) {
	        callback.call(this);
	        return value;
	    }, function (reason) {
	        callback.call(this);
	        return PromiseObj.reject(reason);
	    });
	};

	var debug = false;
	var util = {};
	var array = [];
	function Util (Vue) {
	    util = Vue.util;
	    debug = Vue.config.debug || !Vue.config.silent;
	}

	function warn(msg) {
	    if (typeof console !== 'undefined' && debug) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}

	function error(msg) {
	    if (typeof console !== 'undefined') {
	        console.error(msg);
	    }
	}

	function nextTick(cb, ctx) {
	    return util.nextTick(cb, ctx);
	}

	function trim(str) {
	    return str.replace(/^\s*|\s*$/g, '');
	}

	var isArray = Array.isArray;

	function isString(val) {
	    return typeof val === 'string';
	}

	function isBoolean(val) {
	    return val === true || val === false;
	}

	function isFunction(val) {
	    return typeof val === 'function';
	}

	function isObject(obj) {
	    return obj !== null && typeof obj === 'object';
	}

	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}

	function isFormData(obj) {
	    return typeof FormData !== 'undefined' && obj instanceof FormData;
	}

	function when(value, fulfilled, rejected) {

	    var promise = Promise$1.resolve(value);

	    if (arguments.length < 2) {
	        return promise;
	    }

	    return promise.then(fulfilled, rejected);
	}

	function options(fn, obj, opts) {

	    opts = opts || {};

	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }

	    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	}

	function each(obj, iterator) {

	    var i, key;

	    if (typeof obj.length == 'number') {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }

	    return obj;
	}

	var assign = Object.assign || _assign;

	function merge(target) {

	    var args = array.slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source, true);
	    });

	    return target;
	}

	function defaults(target) {

	    var args = array.slice.call(arguments, 1);

	    args.forEach(function (source) {

	        for (var key in source) {
	            if (target[key] === undefined) {
	                target[key] = source[key];
	            }
	        }
	    });

	    return target;
	}

	function _assign(target) {

	    var args = array.slice.call(arguments, 1);

	    args.forEach(function (source) {
	        _merge(target, source);
	    });

	    return target;
	}

	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}

	function root (options, next) {

	    var url = next(options);

	    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }

	    return url;
	}

	function query (options, next) {

	    var urlParams = Object.keys(Url.options.params),
	        query = {},
	        url = next(options);

	    each(options.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });

	    query = Url.params(query);

	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }

	    return url;
	}

	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */

	function expand(url, params, variables) {

	    var tmpl = parse(url),
	        expanded = tmpl.expand(params);

	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }

	    return expanded;
	}

	function parse(template) {

	    var operators = ['+', '#', '.', '/', ';', '?', '&'],
	        variables = [];

	    return {
	        vars: variables,
	        expand: function (context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {

	                    var operator = null,
	                        values = [];

	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }

	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });

	                    if (operator && operator !== '+') {

	                        var separator = ',';

	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }

	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }
	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}

	function getValues(context, operator, key, modifier) {

	    var value = context[key],
	        result = [];

	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();

	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }

	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];

	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }

	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }

	    return result;
	}

	function isDefined(value) {
	    return value !== undefined && value !== null;
	}

	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}

	function encodeValue(operator, value, key) {

	    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);

	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}

	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}

	function template (options) {

	    var variables = [],
	        url = expand(options.url, options.params, variables);

	    variables.forEach(function (key) {
	        delete options.params[key];
	    });

	    return url;
	}

	/**
	 * Service for URL templating.
	 */

	var ie = document.documentMode;
	var el = document.createElement('a');

	function Url(url, params) {

	    var self = this || {},
	        options = url,
	        transform;

	    if (isString(url)) {
	        options = { url: url, params: params };
	    }

	    options = merge({}, Url.options, self.$options, options);

	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, self.$vm);
	    });

	    return transform(options);
	}

	/**
	 * Url options.
	 */

	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};

	/**
	 * Url transforms.
	 */

	Url.transforms = [template, query, root];

	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */

	Url.params = function (obj) {

	    var params = [],
	        escape = encodeURIComponent;

	    params.add = function (key, value) {

	        if (isFunction(value)) {
	            value = value();
	        }

	        if (value === null) {
	            value = '';
	        }

	        this.push(escape(key) + '=' + escape(value));
	    };

	    serialize(params, obj);

	    return params.join('&').replace(/%20/g, '+');
	};

	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */

	Url.parse = function (url) {

	    if (ie) {
	        el.href = url;
	        url = el.href;
	    }

	    el.href = url;

	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};

	function factory(handler, next, vm) {
	    return function (options) {
	        return handler.call(vm, options, next);
	    };
	}

	function serialize(params, obj, scope) {

	    var array = isArray(obj),
	        plain = isPlainObject(obj),
	        hash;

	    each(obj, function (value, key) {

	        hash = isObject(value) || isArray(value);

	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }

	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}

	function xdrClient (request) {
	    return new Promise$1(function (resolve) {

	        var xdr = new XDomainRequest(),
	            handler = function (event) {

	            var response = request.respondWith(xdr.responseText, {
	                status: xdr.status,
	                statusText: xdr.statusText
	            });

	            resolve(response);
	        };

	        request.abort = function () {
	            return xdr.abort();
	        };

	        xdr.open(request.method, request.getUrl(), true);
	        xdr.timeout = 0;
	        xdr.onload = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = function () {};
	        xdr.onprogress = function () {};
	        xdr.send(request.getBody());
	    });
	}

	var ORIGIN_URL = Url.parse(location.href);
	var SUPPORTS_CORS = 'withCredentials' in new XMLHttpRequest();

	function cors (request, next) {

	    if (!isBoolean(request.crossOrigin) && crossOrigin(request)) {
	        request.crossOrigin = true;
	    }

	    if (request.crossOrigin) {

	        if (!SUPPORTS_CORS) {
	            request.client = xdrClient;
	        }

	        delete request.emulateHTTP;
	    }

	    next();
	}

	function crossOrigin(request) {

	    var requestUrl = Url.parse(Url(request));

	    return requestUrl.protocol !== ORIGIN_URL.protocol || requestUrl.host !== ORIGIN_URL.host;
	}

	function body (request, next) {

	    if (request.emulateJSON && isPlainObject(request.body)) {
	        request.body = Url.params(request.body);
	        request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	    }

	    if (isFormData(request.body)) {
	        delete request.headers['Content-Type'];
	    }

	    if (isPlainObject(request.body)) {
	        request.body = JSON.stringify(request.body);
	    }

	    next(function (response) {

	        var contentType = response.headers['Content-Type'];

	        if (isString(contentType) && contentType.indexOf('application/json') === 0) {

	            try {
	                response.data = response.json();
	            } catch (e) {
	                response.data = null;
	            }
	        } else {
	            response.data = response.text();
	        }
	    });
	}

	function jsonpClient (request) {
	    return new Promise$1(function (resolve) {

	        var name = request.jsonp || 'callback',
	            callback = '_jsonp' + Math.random().toString(36).substr(2),
	            body = null,
	            handler,
	            script;

	        handler = function (event) {

	            var status = 0;

	            if (event.type === 'load' && body !== null) {
	                status = 200;
	            } else if (event.type === 'error') {
	                status = 404;
	            }

	            resolve(request.respondWith(body, { status: status }));

	            delete window[callback];
	            document.body.removeChild(script);
	        };

	        request.params[name] = callback;

	        window[callback] = function (result) {
	            body = JSON.stringify(result);
	        };

	        script = document.createElement('script');
	        script.src = request.getUrl();
	        script.type = 'text/javascript';
	        script.async = true;
	        script.onload = handler;
	        script.onerror = handler;

	        document.body.appendChild(script);
	    });
	}

	function jsonp (request, next) {

	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }

	    next(function (response) {

	        if (request.method == 'JSONP') {
	            response.data = response.json();
	        }
	    });
	}

	function before (request, next) {

	    if (isFunction(request.before)) {
	        request.before.call(this, request);
	    }

	    next();
	}

	/**
	 * HTTP method override Interceptor.
	 */

	function method (request, next) {

	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers['X-HTTP-Method-Override'] = request.method;
	        request.method = 'POST';
	    }

	    next();
	}

	function header (request, next) {

	    request.method = request.method.toUpperCase();
	    request.headers = assign({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[request.method.toLowerCase()], request.headers);

	    next();
	}

	/**
	 * Timeout Interceptor.
	 */

	function timeout (request, next) {

	    var timeout;

	    if (request.timeout) {
	        timeout = setTimeout(function () {
	            request.abort();
	        }, request.timeout);
	    }

	    next(function (response) {

	        clearTimeout(timeout);
	    });
	}

	function xhrClient (request) {
	    return new Promise$1(function (resolve) {

	        var xhr = new XMLHttpRequest(),
	            handler = function (event) {

	            var response = request.respondWith('response' in xhr ? xhr.response : xhr.responseText, {
	                status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
	                statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText),
	                headers: parseHeaders(xhr.getAllResponseHeaders())
	            });

	            resolve(response);
	        };

	        request.abort = function () {
	            return xhr.abort();
	        };

	        xhr.open(request.method, request.getUrl(), true);
	        xhr.timeout = 0;
	        xhr.onload = handler;
	        xhr.onerror = handler;

	        if (request.progress) {
	            if (request.method === 'GET') {
	                xhr.addEventListener('progress', request.progress);
	            } else if (/^(POST|PUT)$/i.test(request.method)) {
	                xhr.upload.addEventListener('progress', request.progress);
	            }
	        }

	        if (request.credentials === true) {
	            xhr.withCredentials = true;
	        }

	        each(request.headers || {}, function (value, header) {
	            xhr.setRequestHeader(header, value);
	        });

	        xhr.send(request.getBody());
	    });
	}

	function parseHeaders(str) {

	    var headers = {},
	        value,
	        name,
	        i;

	    each(trim(str).split('\n'), function (row) {

	        i = row.indexOf(':');
	        name = trim(row.slice(0, i));
	        value = trim(row.slice(i + 1));

	        if (headers[name]) {

	            if (isArray(headers[name])) {
	                headers[name].push(value);
	            } else {
	                headers[name] = [headers[name], value];
	            }
	        } else {

	            headers[name] = value;
	        }
	    });

	    return headers;
	}

	function Client (context) {

	    var reqHandlers = [sendRequest],
	        resHandlers = [],
	        handler;

	    if (!isObject(context)) {
	        context = null;
	    }

	    function Client(request) {
	        return new Promise$1(function (resolve) {

	            function exec() {

	                handler = reqHandlers.pop();

	                if (isFunction(handler)) {
	                    handler.call(context, request, next);
	                } else {
	                    warn('Invalid interceptor of type ' + typeof handler + ', must be a function');
	                    next();
	                }
	            }

	            function next(response) {

	                if (isFunction(response)) {

	                    resHandlers.unshift(response);
	                } else if (isObject(response)) {

	                    resHandlers.forEach(function (handler) {
	                        response = when(response, function (response) {
	                            return handler.call(context, response) || response;
	                        });
	                    });

	                    when(response, resolve);

	                    return;
	                }

	                exec();
	            }

	            exec();
	        }, context);
	    }

	    Client.use = function (handler) {
	        reqHandlers.push(handler);
	    };

	    return Client;
	}

	function sendRequest(request, resolve) {

	    var client = request.client || xhrClient;

	    resolve(client(request));
	}

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	/**
	 * HTTP Response.
	 */

	var Response = function () {
	    function Response(body, _ref) {
	        var url = _ref.url;
	        var headers = _ref.headers;
	        var status = _ref.status;
	        var statusText = _ref.statusText;
	        classCallCheck(this, Response);


	        this.url = url;
	        this.body = body;
	        this.headers = headers || {};
	        this.status = status || 0;
	        this.statusText = statusText || '';
	        this.ok = status >= 200 && status < 300;
	    }

	    Response.prototype.text = function text() {
	        return this.body;
	    };

	    Response.prototype.blob = function blob() {
	        return new Blob([this.body]);
	    };

	    Response.prototype.json = function json() {
	        return JSON.parse(this.body);
	    };

	    return Response;
	}();

	var Request = function () {
	    function Request(options) {
	        classCallCheck(this, Request);


	        this.method = 'GET';
	        this.body = null;
	        this.params = {};
	        this.headers = {};

	        assign(this, options);
	    }

	    Request.prototype.getUrl = function getUrl() {
	        return Url(this);
	    };

	    Request.prototype.getBody = function getBody() {
	        return this.body;
	    };

	    Request.prototype.respondWith = function respondWith(body, options) {
	        return new Response(body, assign(options || {}, { url: this.getUrl() }));
	    };

	    return Request;
	}();

	/**
	 * Service for sending network requests.
	 */

	var CUSTOM_HEADERS = { 'X-Requested-With': 'XMLHttpRequest' };
	var COMMON_HEADERS = { 'Accept': 'application/json, text/plain, */*' };
	var JSON_CONTENT_TYPE = { 'Content-Type': 'application/json;charset=utf-8' };

	function Http(options) {

	    var self = this || {},
	        client = Client(self.$vm);

	    defaults(options || {}, self.$options, Http.options);

	    Http.interceptors.forEach(function (handler) {
	        client.use(handler);
	    });

	    return client(new Request(options)).then(function (response) {

	        return response.ok ? response : Promise$1.reject(response);
	    }, function (response) {

	        if (response instanceof Error) {
	            error(response);
	        }

	        return Promise$1.reject(response);
	    });
	}

	Http.options = {};

	Http.headers = {
	    put: JSON_CONTENT_TYPE,
	    post: JSON_CONTENT_TYPE,
	    patch: JSON_CONTENT_TYPE,
	    delete: JSON_CONTENT_TYPE,
	    custom: CUSTOM_HEADERS,
	    common: COMMON_HEADERS
	};

	Http.interceptors = [before, timeout, method, body, jsonp, header, cors];

	['get', 'delete', 'head', 'jsonp'].forEach(function (method) {

	    Http[method] = function (url, options) {
	        return this(assign(options || {}, { url: url, method: method }));
	    };
	});

	['post', 'put', 'patch'].forEach(function (method) {

	    Http[method] = function (url, body, options) {
	        return this(assign(options || {}, { url: url, method: method, body: body }));
	    };
	});

	function Resource(url, params, actions, options) {

	    var self = this || {},
	        resource = {};

	    actions = assign({}, Resource.actions, actions);

	    each(actions, function (action, name) {

	        action = merge({ url: url, params: params || {} }, options, action);

	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });

	    return resource;
	}

	function opts(action, args) {

	    var options = assign({}, action),
	        params = {},
	        body;

	    switch (args.length) {

	        case 2:

	            params = args[0];
	            body = args[1];

	            break;

	        case 1:

	            if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                body = args[0];
	            } else {
	                params = args[0];
	            }

	            break;

	        case 0:

	            break;

	        default:

	            throw 'Expected up to 4 arguments [params, body], got ' + args.length + ' arguments';
	    }

	    options.body = body;
	    options.params = assign({}, options.params, params);

	    return options;
	}

	Resource.actions = {

	    get: { method: 'GET' },
	    save: { method: 'POST' },
	    query: { method: 'GET' },
	    update: { method: 'PUT' },
	    remove: { method: 'DELETE' },
	    delete: { method: 'DELETE' }

	};

	function plugin(Vue) {

	    if (plugin.installed) {
	        return;
	    }

	    Util(Vue);

	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = Promise$1;

	    Object.defineProperties(Vue.prototype, {

	        $url: {
	            get: function () {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },

	        $http: {
	            get: function () {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },

	        $resource: {
	            get: function () {
	                return Vue.resource.bind(this);
	            }
	        },

	        $promise: {
	            get: function () {
	                var _this = this;

	                return function (executor) {
	                    return new Vue.Promise(executor, _this);
	                };
	            }
	        }

	    });
	}

	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}

	module.exports = plugin;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(24)
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\src\\app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _header = __webpack_require__(25);

	var _header2 = _interopRequireDefault(_header);

	var _store = __webpack_require__(29);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import 我们刚刚创建的 store

	// <style scoped>
	//     @import './styles/common.css';
	// </style>
	// <template>
	//
	//     <headview :show-back.sync="showBack" :show-header.sync="showHeader" title="这是新标题"></headview>
	//     <div>
	//         <router-view></router-view>
	//     </div>
	//
	// </template>
	//
	//
	// <script>
	module.exports = {
	    data: function data() {
	        return {
	            showBack: true,
	            showHeader: true
	        };
	    },
	    ready: function ready() {},
	    components: {
	        headview: _header2.default
	    },
	    store: _store2.default, // 在根组件加入 store，让它的子组件和 store 连接
	    beforeDestroy: function beforeDestroy() {},
	    methods: {}
	};
	// </script>
	//

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(26)
	__vue_script__ = __webpack_require__(27)
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\src\\components\\header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	// <style scoped>
	//     header{
	//         line-height: 30px;color:red;text-align: center;border-bottom: 1px solid red;
	//     }
	//     .back{margin-left: 50px;}
	// </style>
	// <template>
	//     <div v-if="showHeader">
	//         <a @click="back" class="back" v-if="showBack">返回</a>
	//         <a v-link="{ name: 'index' }">首页</a>
	//         <a v-link="{ name: 'order' }">订单列表</a>
	//         <a v-link="{ name: 'user' }">个人中心</a>
	//         <header>{{title}}</header>        
	//     </div>
	//
	// </template>
	// <script>
	module.exports = {
	    props: {
	        showHeader: {
	            require: true,
	            type: Boolean
	        },
	        showBack: {
	            require: true,
	            type: Boolean
	        },
	        title: "这是头部"
	    },
	    data: function data() {
	        return {};
	    },
	    ready: function ready() {},
	    beforeDestroy: function beforeDestroy() {},
	    methods: {
	        back: function back() {
	            if (routeList.length > 1) {
	                this.$root.$route.router.go(routeList[routeList.length - 2].name);
	            }
	        }
	    }
	};
	// </script>
	//

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n    <div v-if=\"showHeader\" _v-f96d40fe=\"\">\n        <a @click=\"back\" class=\"back\" v-if=\"showBack\" _v-f96d40fe=\"\">返回</a>\n        <a v-link=\"{ name: 'index' }\" _v-f96d40fe=\"\">首页</a>\n        <a v-link=\"{ name: 'order' }\" _v-f96d40fe=\"\">订单列表</a>\n        <a v-link=\"{ name: 'user' }\" _v-f96d40fe=\"\">个人中心</a>\n        <header _v-f96d40fe=\"\">{{title}}</header>        \n    </div>\n\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(19);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(30);

	var _vuex2 = _interopRequireDefault(_vuex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 告诉 vue “使用” vuex
	_vue2.default.use(_vuex2.default);

	// 创建一个对象来保存应用启动时的初始状态
	var state = {
	  // 应用启动时，count 置为0
	  count: 0
	};

	// 创建一个对象存储一系列我们接下来要写的 mutation 函数
	var mutations = {
	  // mutation 的第一个参数是当前的 state
	  // 你可以在函数里修改 state
	  INCREMENT: function INCREMENT(state, amount) {
	    state.count = state.count + amount;
	  }
	};

	// 整合初始状态和变更函数，我们就得到了我们所需的 store
	// 至此，这个 store 就可以连接到我们的应用中
	exports.default = new _vuex2.default.Store({
	  state: state,
	  mutations: mutations
	});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vuex v1.0.0-rc.2
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, function () { 'use strict';

	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };

	  var classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };

	  var createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  var toConsumableArray = function (arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	      return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };

	  /**
	   * Merge an array of objects into one.
	   *
	   * @param {Array<Object>} arr
	   * @return {Object}
	   */

	  function mergeObjects(arr) {
	    return arr.reduce(function (prev, obj) {
	      Object.keys(obj).forEach(function (key) {
	        var existing = prev[key];
	        if (existing) {
	          // allow multiple mutation objects to contain duplicate
	          // handlers for the same mutation type
	          if (Array.isArray(existing)) {
	            prev[key] = existing.concat(obj[key]);
	          } else {
	            prev[key] = [existing].concat(obj[key]);
	          }
	        } else {
	          prev[key] = obj[key];
	        }
	      });
	      return prev;
	    }, {});
	  }

	  /**
	   * Check whether the given value is Object or not
	   *
	   * @param {*} obj
	   * @return {Boolean}
	   */

	  function isObject(obj) {
	    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  }

	  /**
	   * Get state sub tree by given keys.
	   *
	   * @param {Object} state
	   * @param {Array<String>} nestedKeys
	   * @return {Object}
	   */
	  function getNestedState(state, nestedKeys) {
	    return nestedKeys.reduce(function (state, key) {
	      return state[key];
	    }, state);
	  }

	  /**
	   * Hacks to get access to Vue internals.
	   * Maybe we should expose these...
	   */

	  var Watcher = void 0;
	  function getWatcher(vm) {
	    if (!Watcher) {
	      var noop = function noop() {};
	      var unwatch = vm.$watch(noop, noop);
	      Watcher = vm._watchers[0].constructor;
	      unwatch();
	    }
	    return Watcher;
	  }

	  var Dep = void 0;
	  function getDep(vm) {
	    if (!Dep) {
	      Dep = vm._data.__ob__.dep.constructor;
	    }
	    return Dep;
	  }

	  var hook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	  function devtoolPlugin(store) {
	    if (!hook) return;

	    hook.emit('vuex:init', store);

	    hook.on('vuex:travel-to-state', function (targetState) {
	      store.replaceState(targetState);
	    });

	    store.subscribe(function (mutation, state) {
	      hook.emit('vuex:mutation', mutation, state);
	    });
	  }

	  function override (Vue) {
	    var version = Number(Vue.version.split('.')[0]);

	    if (version >= 2) {
	      var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
	      Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
	    } else {
	      (function () {
	        // override init and inject vuex init procedure
	        // for 1.x backwards compatibility.
	        var _init = Vue.prototype._init;
	        Vue.prototype._init = function () {
	          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	          options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;
	          _init.call(this, options);
	        };
	      })();
	    }

	    /**
	     * Vuex init hook, injected into each instances init hooks list.
	     */

	    function vuexInit() {
	      var options = this.$options;
	      var store = options.store;
	      var vuex = options.vuex;
	      // store injection

	      if (store) {
	        this.$store = store;
	      } else if (options.parent && options.parent.$store) {
	        this.$store = options.parent.$store;
	      }
	      // vuex option handling
	      if (vuex) {
	        if (!this.$store) {
	          console.warn('[vuex] store not injected. make sure to ' + 'provide the store option in your root component.');
	        }
	        var state = vuex.state;
	        var actions = vuex.actions;
	        var getters = vuex.getters;
	        // handle deprecated state option

	        if (state && !getters) {
	          console.warn('[vuex] vuex.state option will been deprecated in 1.0. ' + 'Use vuex.getters instead.');
	          getters = state;
	        }
	        // getters
	        if (getters) {
	          options.computed = options.computed || {};
	          for (var key in getters) {
	            defineVuexGetter(this, key, getters[key]);
	          }
	        }
	        // actions
	        if (actions) {
	          options.methods = options.methods || {};
	          for (var _key in actions) {
	            options.methods[_key] = makeBoundAction(this.$store, actions[_key], _key);
	          }
	        }
	      }
	    }

	    /**
	     * Setter for all getter properties.
	     */

	    function setter() {
	      throw new Error('vuex getter properties are read-only.');
	    }

	    /**
	     * Define a Vuex getter on an instance.
	     *
	     * @param {Vue} vm
	     * @param {String} key
	     * @param {Function} getter
	     */

	    function defineVuexGetter(vm, key, getter) {
	      if (typeof getter !== 'function') {
	        console.warn('[vuex] Getter bound to key \'vuex.getters.' + key + '\' is not a function.');
	      } else {
	        Object.defineProperty(vm, key, {
	          enumerable: true,
	          configurable: true,
	          get: makeComputedGetter(vm.$store, getter),
	          set: setter
	        });
	      }
	    }

	    /**
	     * Make a computed getter, using the same caching mechanism of computed
	     * properties. In addition, it is cached on the raw getter function using
	     * the store's unique cache id. This makes the same getter shared
	     * across all components use the same underlying watcher, and makes
	     * the getter evaluated only once during every flush.
	     *
	     * @param {Store} store
	     * @param {Function} getter
	     */

	    function makeComputedGetter(store, getter) {
	      var id = store._getterCacheId;

	      // cached
	      if (getter[id]) {
	        return getter[id];
	      }
	      var vm = store._vm;
	      var Watcher = getWatcher(vm);
	      var Dep = getDep(vm);
	      var watcher = new Watcher(vm, function (vm) {
	        return getter(vm.state);
	      }, null, { lazy: true });
	      var computedGetter = function computedGetter() {
	        if (watcher.dirty) {
	          watcher.evaluate();
	        }
	        if (Dep.target) {
	          watcher.depend();
	        }
	        return watcher.value;
	      };
	      getter[id] = computedGetter;
	      return computedGetter;
	    }

	    /**
	     * Make a bound-to-store version of a raw action function.
	     *
	     * @param {Store} store
	     * @param {Function} action
	     * @param {String} key
	     */

	    function makeBoundAction(store, action, key) {
	      if (typeof action !== 'function') {
	        console.warn('[vuex] Action bound to key \'vuex.actions.' + key + '\' is not a function.');
	      }
	      return function vuexBoundAction() {
	        for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        return action.call.apply(action, [this, store].concat(args));
	      };
	    }

	    // option merging
	    var merge = Vue.config.optionMergeStrategies.computed;
	    Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
	      if (!toVal) return fromVal;
	      if (!fromVal) return toVal;
	      return {
	        getters: merge(toVal.getters, fromVal.getters),
	        state: merge(toVal.state, fromVal.state),
	        actions: merge(toVal.actions, fromVal.actions)
	      };
	    };
	  }

	  var Vue = void 0;
	  var uid = 0;

	  var Store = function () {

	    /**
	     * @param {Object} options
	     *        - {Object} state
	     *        - {Object} actions
	     *        - {Object} mutations
	     *        - {Array} plugins
	     *        - {Boolean} strict
	     */

	    function Store() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$state = _ref.state;
	      var state = _ref$state === undefined ? {} : _ref$state;
	      var _ref$mutations = _ref.mutations;
	      var mutations = _ref$mutations === undefined ? {} : _ref$mutations;
	      var _ref$modules = _ref.modules;
	      var modules = _ref$modules === undefined ? {} : _ref$modules;
	      var _ref$plugins = _ref.plugins;
	      var plugins = _ref$plugins === undefined ? [] : _ref$plugins;
	      var _ref$strict = _ref.strict;
	      var strict = _ref$strict === undefined ? false : _ref$strict;
	      classCallCheck(this, Store);

	      this._getterCacheId = 'vuex_store_' + uid++;
	      this._dispatching = false;
	      this._rootMutations = this._mutations = mutations;
	      this._modules = modules;
	      this._subscribers = [];
	      // bind dispatch to self
	      var dispatch = this.dispatch;
	      this.dispatch = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        dispatch.apply(_this, args);
	      };
	      // use a Vue instance to store the state tree
	      // suppress warnings just in case the user has added
	      // some funky global mixins
	      if (!Vue) {
	        throw new Error('[vuex] must call Vue.use(Vuex) before creating a store instance.');
	      }
	      var silent = Vue.config.silent;
	      Vue.config.silent = true;
	      this._vm = new Vue({
	        data: {
	          state: state
	        }
	      });
	      Vue.config.silent = silent;
	      this._setupModuleState(state, modules);
	      this._setupModuleMutations(modules);
	      // add extra warnings in strict mode
	      if (strict) {
	        this._setupMutationCheck();
	      }
	      // apply plugins
	      devtoolPlugin(this);
	      plugins.forEach(function (plugin) {
	        return plugin(_this);
	      });
	    }

	    /**
	     * Getter for the entire state tree.
	     * Read only.
	     *
	     * @return {Object}
	     */

	    createClass(Store, [{
	      key: 'replaceState',


	      /**
	       * Replace root state.
	       *
	       * @param {Object} state
	       */

	      value: function replaceState(state) {
	        this._dispatching = true;
	        this._vm.state = state;
	        this._dispatching = false;
	      }

	      /**
	       * Dispatch an action.
	       *
	       * @param {String} type
	       */

	    }, {
	      key: 'dispatch',
	      value: function dispatch(type) {
	        var _this2 = this;

	        for (var _len2 = arguments.length, payload = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          payload[_key2 - 1] = arguments[_key2];
	        }

	        var silent = false;
	        var isObjectStyleDispatch = false;
	        // compatibility for object actions, e.g. FSA
	        if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type.type && arguments.length === 1) {
	          isObjectStyleDispatch = true;
	          payload = type;
	          if (type.silent) silent = true;
	          type = type.type;
	        }
	        var handler = this._mutations[type];
	        var state = this.state;
	        if (handler) {
	          this._dispatching = true;
	          // apply the mutation
	          if (Array.isArray(handler)) {
	            handler.forEach(function (h) {
	              isObjectStyleDispatch ? h(state, payload) : h.apply(undefined, [state].concat(toConsumableArray(payload)));
	            });
	          } else {
	            isObjectStyleDispatch ? handler(state, payload) : handler.apply(undefined, [state].concat(toConsumableArray(payload)));
	          }
	          this._dispatching = false;
	          if (!silent) {
	            (function () {
	              var mutation = isObjectStyleDispatch ? payload : { type: type, payload: payload };
	              _this2._subscribers.forEach(function (sub) {
	                return sub(mutation, state);
	              });
	            })();
	          }
	        } else {
	          console.warn('[vuex] Unknown mutation: ' + type);
	        }
	      }

	      /**
	       * Watch state changes on the store.
	       * Same API as Vue's $watch, except when watching a function,
	       * the function gets the state as the first argument.
	       *
	       * @param {Function} fn
	       * @param {Function} cb
	       * @param {Object} [options]
	       */

	    }, {
	      key: 'watch',
	      value: function watch(fn, cb, options) {
	        var _this3 = this;

	        if (typeof fn !== 'function') {
	          console.error('Vuex store.watch only accepts function.');
	          return;
	        }
	        return this._vm.$watch(function () {
	          return fn(_this3.state);
	        }, cb, options);
	      }

	      /**
	       * Subscribe to state changes. Fires after every mutation.
	       */

	    }, {
	      key: 'subscribe',
	      value: function subscribe(fn) {
	        var subs = this._subscribers;
	        if (subs.indexOf(fn) < 0) {
	          subs.push(fn);
	        }
	        return function () {
	          var i = subs.indexOf(fn);
	          if (i > -1) {
	            subs.splice(i, 1);
	          }
	        };
	      }

	      /**
	       * Hot update mutations & modules.
	       *
	       * @param {Object} options
	       *        - {Object} [mutations]
	       *        - {Object} [modules]
	       */

	    }, {
	      key: 'hotUpdate',
	      value: function hotUpdate() {
	        var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var mutations = _ref2.mutations;
	        var modules = _ref2.modules;

	        this._rootMutations = this._mutations = mutations || this._rootMutations;
	        this._setupModuleMutations(modules || this._modules);
	      }

	      /**
	       * Attach sub state tree of each module to the root tree.
	       *
	       * @param {Object} state
	       * @param {Object} modules
	       */

	    }, {
	      key: '_setupModuleState',
	      value: function _setupModuleState(state, modules) {
	        var _this4 = this;

	        if (!isObject(modules)) return;

	        Object.keys(modules).forEach(function (key) {
	          var module = modules[key];

	          // set this module's state
	          Vue.set(state, key, module.state || {});

	          // retrieve nested modules
	          _this4._setupModuleState(state[key], module.modules);
	        });
	      }

	      /**
	       * Bind mutations for each module to its sub tree and
	       * merge them all into one final mutations map.
	       *
	       * @param {Object} updatedModules
	       */

	    }, {
	      key: '_setupModuleMutations',
	      value: function _setupModuleMutations(updatedModules) {
	        var modules = this._modules;
	        Object.keys(updatedModules).forEach(function (key) {
	          modules[key] = updatedModules[key];
	        });
	        var updatedMutations = this._createModuleMutations(modules, []);
	        this._mutations = mergeObjects([this._rootMutations].concat(toConsumableArray(updatedMutations)));
	      }

	      /**
	       * Helper method for _setupModuleMutations.
	       * The method retrieve nested sub modules and
	       * bind each mutations to its sub tree recursively.
	       *
	       * @param {Object} modules
	       * @param {Array<String>} nestedKeys
	       * @return {Array<Object>}
	       */

	    }, {
	      key: '_createModuleMutations',
	      value: function _createModuleMutations(modules, nestedKeys) {
	        var _this5 = this;

	        if (!isObject(modules)) return [];

	        return Object.keys(modules).map(function (key) {
	          var module = modules[key];
	          var newNestedKeys = nestedKeys.concat(key);

	          // retrieve nested modules
	          var nestedMutations = _this5._createModuleMutations(module.modules, newNestedKeys);

	          if (!module || !module.mutations) {
	            return mergeObjects(nestedMutations);
	          }

	          // bind mutations to sub state tree
	          var mutations = {};
	          Object.keys(module.mutations).forEach(function (name) {
	            var original = module.mutations[name];
	            mutations[name] = function (state) {
	              for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                args[_key3 - 1] = arguments[_key3];
	              }

	              original.apply(undefined, [getNestedState(state, newNestedKeys)].concat(args));
	            };
	          });

	          // merge mutations of this module and nested modules
	          return mergeObjects([mutations].concat(toConsumableArray(nestedMutations)));
	        });
	      }

	      /**
	       * Setup mutation check: if the vuex instance's state is mutated
	       * outside of a mutation handler, we throw en error. This effectively
	       * enforces all mutations to the state to be trackable and hot-reloadble.
	       * However, this comes at a run time cost since we are doing a deep
	       * watch on the entire state tree, so it is only enalbed with the
	       * strict option is set to true.
	       */

	    }, {
	      key: '_setupMutationCheck',
	      value: function _setupMutationCheck() {
	        var _this6 = this;

	        var Watcher = getWatcher(this._vm);
	        /* eslint-disable no-new */
	        new Watcher(this._vm, 'state', function () {
	          if (!_this6._dispatching) {
	            throw new Error('[vuex] Do not mutate vuex store state outside mutation handlers.');
	          }
	        }, { deep: true, sync: true });
	        /* eslint-enable no-new */
	      }
	    }, {
	      key: 'state',
	      get: function get() {
	        return this._vm.state;
	      },
	      set: function set(v) {
	        throw new Error('[vuex] Use store.replaceState() to explicit replace store state.');
	      }
	    }]);
	    return Store;
	  }();

	  function install(_Vue) {
	    if (Vue) {
	      console.warn('[vuex] already installed. Vue.use(Vuex) should be called only once.');
	      return;
	    }
	    Vue = _Vue;
	    override(Vue);
	  }

	  // auto install in dist mode
	  if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	  }

	  var index = {
	    Store: Store,
	    install: install
	  };

	  return index;

	}));

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n    \n    <headview :show-back.sync=\"showBack\" :show-header.sync=\"showHeader\" title=\"这是新标题\" _v-7e98a9e2=\"\"></headview>\n    <div _v-7e98a9e2=\"\">\n        <router-view _v-7e98a9e2=\"\"></router-view>\n    </div>\n\n";

/***/ }
]);