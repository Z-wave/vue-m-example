webpackJsonp([3],Array(50).concat([
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(51)
	__vue_script__ = __webpack_require__(52)
	__vue_template__ = __webpack_require__(80)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\src\\views\\user.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _group = __webpack_require__(53);

	var _group2 = _interopRequireDefault(_group);

	var _switch = __webpack_require__(62);

	var _switch2 = _interopRequireDefault(_switch);

	var _confirm = __webpack_require__(70);

	var _confirm2 = _interopRequireDefault(_confirm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    data: function data() {
	        return {
	            show: false
	        };
	    },
	    ready: function ready() {},
	    components: {
	        Group: _group2.default,
	        Switch: _switch2.default,
	        Confirm: _confirm2.default
	    },
	    beforeDestroy: function beforeDestroy() {},
	    methods: {
	        onAction: function onAction(type) {
	            alert(type);
	        }
	    }
	};
	// </script>
	//
	// <style scoped>
	//     @import '~vux/dist/vux.css';
	//     h1{
	//         color: #28a7e1;
	//         text-align: center;
	//         font-size: 25px;
	//         font-weight: bold;
	//         margin-top: 100px;
	//     }
	// </style>
	// <template>
	//     <h1>个人中心，vux组件模块</h1>
	//     <div>
	//         <group>
	//           <switch title="confirm" :value.sync="show"></switch>
	//         </group>
	//         <confirm :show.sync="show" confirm-text="确定" cancel-text="取消" title="操作提示" @on-confirm="onAction('确认')" @on-cancel="onAction('取消')">
	//           <p style="text-align:center;">这是一个vux组件</p>
	//         </confirm>
	//     </div>
	// </template>
	// <script>

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(54)
	__vue_script__ = __webpack_require__(58)
	__vue_template__ = __webpack_require__(61)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\node_modules\\.npminstall\\vux\\0.1.2\\vux\\src\\components\\group\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(57)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../css-loader/index.js!./../../../../../../../vue-loader/lib/style-rewriter.js?id=_v-3110a270&file=index.vue!./../../../../../../../less-loader/index.js!./../../../../../../../vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../../../../css-loader/index.js!./../../../../../../../vue-loader/lib/style-rewriter.js?id=_v-3110a270&file=index.vue!./../../../../../../../less-loader/index.js!./../../../../../../../vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(56)();
	// imports


	// module
	exports.push([module.id, ".weui_cells_access .weui_cell:not(.no_access) {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui_cells_access .weui_cell:not(.no_access):active {\n  background-color: #ECECEC;\n}\n.weui_cells_access a.weui_cell {\n  color: inherit;\n}\n.weui_cells_access .weui_cell_ft:after {\n  content: \" \";\n  display: inline-block;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  position: relative;\n  top: -2px;\n  top: -1px;\n  margin-left: .3em;\n}\n.weui_cell {\n  position: relative;\n}\n.weui_cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.weui_cell:first-child:before {\n  display: none;\n}\n.weui_cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui_cells:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui_cells:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui_cells_title {\n  margin-top: .77em;\n  margin-bottom: .3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #888;\n  font-size: 14px;\n}\n.weui_cells_title + .weui_cells {\n  margin-top: 0;\n}\n.weui_cells_tips {\n  margin-top: .3em;\n  color: #888;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui_cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui_cell_ft {\n  text-align: right;\n  color: #888;\n}\n.weui_cell_primary {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.vux-no-group-title {\n  margin-top: 15px;\n}\n.weui_cells > a {\n  color: #000;\n}\n", ""]);

	// exports


/***/ },
/* 56 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _groupTitle = __webpack_require__(59);

	var _groupTitle2 = _interopRequireDefault(_groupTitle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    GroupTitle: _groupTitle2.default
	  },
	  props: {
	    title: String,
	    titleColor: String
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(60)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\node_modules\\.npminstall\\vux\\0.1.2\\vux\\src\\components\\group-title\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"weui_cells_title\">\n    <slot></slot>\n  </div>\n";

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "\n  <div>\n    <div class=\"weui_cells_title\" v-if=\"title\" :style=\"{color:titleColor}\" v-html=\"title\"></div>\n    <div class=\"weui_cells\" :class=\"{'vux-no-group-title':!title}\">\n      <slot></slot>\n    </div>\n  </div>\n";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(63)
	__vue_script__ = __webpack_require__(65)
	__vue_template__ = __webpack_require__(69)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\node_modules\\.npminstall\\vux\\0.1.2\\vux\\src\\components\\switch\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(57)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../css-loader/index.js!./../../../../../../../vue-loader/lib/style-rewriter.js?id=_v-28f57da7&file=index.vue!./../../../../../../../less-loader/index.js!./../../../../../../../vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../../../../css-loader/index.js!./../../../../../../../vue-loader/lib/style-rewriter.js?id=_v-28f57da7&file=index.vue!./../../../../../../../less-loader/index.js!./../../../../../../../vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(56)();
	// imports


	// module
	exports.push([module.id, ".weui_label {\n  display: block;\n  width: 105px;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui_input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  -webkit-appearance: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  height: 1.41176471em;\n  line-height: 1.41176471;\n}\n.weui_input::-webkit-outer-spin-button,\n.weui_input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.weui_textarea {\n  display: block;\n  border: 0;\n  resize: none;\n  width: 100%;\n  color: inherit;\n  font-size: 1em;\n  line-height: inherit;\n  outline: 0;\n}\n.weui_textarea_counter {\n  color: #B2B2B2;\n  text-align: right;\n}\n.weui_cell_warn .weui_textarea_counter {\n  color: #E64340;\n}\n.weui_toptips {\n  display: none;\n  position: fixed;\n  -webkit-transform: translateZ(0);\n  width: 100%;\n  top: 0;\n  line-height: 2.3;\n  font-size: 14px;\n  text-align: center;\n  color: #FFF;\n  z-index: 50000;\n}\n.weui_toptips.weui_warn {\n  background-color: #E64340;\n}\n.weui_cells_form .weui_cell_warn {\n  color: #E64340;\n}\n.weui_cells_form .weui_cell_warn .weui_icon_warn {\n  display: inline-block;\n}\n.weui_cells_form .weui_cell_ft {\n  font-size: 0;\n}\n.weui_cells_form .weui_icon_warn {\n  display: none;\n}\n.weui_cells_form input,\n.weui_cells_form textarea,\n.weui_cells_form label[for] {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui_cell_switch {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.weui_switch {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: relative;\n  width: 52px;\n  height: 32px;\n  border: 1px solid #DFDFDF;\n  outline: 0;\n  border-radius: 16px;\n  box-sizing: border-box;\n  background: #DFDFDF;\n}\n.weui_switch:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FDFDFD;\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n.weui_switch:after {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: #FFFFFF;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n.weui_switch:checked {\n  border-color: #04BE02;\n  background-color: #04BE02;\n}\n.weui_switch:checked:before {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.weui_switch:checked:after {\n  -webkit-transform: translateX(20px);\n          transform: translateX(20px);\n}\n.weui_cell_switch .weui_cell_ft {\n  font-size: 0;\n}\n", ""]);

	// exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inlineDesc = __webpack_require__(66);

	var _inlineDesc2 = _interopRequireDefault(_inlineDesc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    InlineDesc: _inlineDesc2.default
	  },
	  computed: {
	    labelStyle: function labelStyle() {
	      var isHTML = /<\/?[^>]*>/.test(this.title);
	      var width = Math.min(isHTML ? 5 : this.title.length + 1, 14) + 'em';
	      return {
	        width: width
	      };
	    }
	  },
	  props: {
	    title: {
	      type: String,
	      required: true
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    value: {
	      type: Boolean
	    },
	    inlineDesc: String
	  },
	  ready: function ready() {},

	  watch: {
	    value: function value(newVal) {
	      this.$emit('on-change', newVal);
	    }
	  }
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(67)
	__vue_template__ = __webpack_require__(68)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\node_modules\\.npminstall\\vux\\0.1.2\\vux\\src\\components\\inline-desc\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 67 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "\n  <span class=\"vux-label-desc\"><slot></slot></span>\n";

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"weui_cell weui_cell_switch\">\n    <div class=\"weui_cell_hd weui_cell_primary\">\n      <label class=\"weui_label\" :style=\"labelStyle\" v-html=\"title\"></label>\n      <inline-desc v-if=\"inlineDesc\">{{inlineDesc}}</inline-desc>\n    </div>\n    <div class=\"weui_cell_ft\">\n      <input class=\"weui_switch\" type=\"checkbox\" :disabled=\"disabled\" v-model=\"value\"/>\n    </div>\n  </div>\n";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(71)
	__vue_script__ = __webpack_require__(73)
	__vue_template__ = __webpack_require__(79)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\node_modules\\.npminstall\\vux\\0.1.2\\vux\\src\\components\\confirm\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(72);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(57)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../css-loader/index.js!./../../../../../../../vue-loader/lib/style-rewriter.js?id=_v-7d428f09&file=index.vue!./../../../../../../../less-loader/index.js!./../../../../../../../vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../../../../css-loader/index.js!./../../../../../../../vue-loader/lib/style-rewriter.js?id=_v-7d428f09&file=index.vue!./../../../../../../../less-loader/index.js!./../../../../../../../vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(56)();
	// imports


	// module
	exports.push([module.id, ".weui_mask {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui_mask_transparent {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.weui_mask_transition {\n  display: none;\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0);\n  -webkit-transition: background .3s;\n  transition: background .3s;\n}\n.weui_fade_toggle {\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui_dialog {\n  position: fixed;\n  z-index: 5000;\n  width: 85%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: #FAFAFC;\n  text-align: center;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.weui_dialog_confirm .weui_dialog .weui_dialog_hd {\n  padding: 1.2em 20px .5em;\n}\n.weui_dialog_confirm .weui_dialog .weui_dialog_bd {\n  text-align: left;\n}\n.weui_dialog_hd {\n  padding: 1.2em 0 .5em;\n}\n.weui_dialog_title {\n  font-weight: 400;\n  font-size: 17px;\n}\n.weui_dialog_bd {\n  padding: 0 20px;\n  font-size: 15px;\n  color: #888;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui_dialog_ft {\n  position: relative;\n  line-height: 42px;\n  margin-top: 20px;\n  font-size: 17px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.weui_dialog_ft a {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #3CC51F;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui_dialog_ft a:active {\n  background-color: #EEEEEE;\n}\n.weui_dialog_ft:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui_dialog_confirm .weui_dialog_ft a {\n  position: relative;\n}\n.weui_dialog_confirm .weui_dialog_ft a:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-left: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.weui_dialog_confirm .weui_dialog_ft a:first-child:after {\n  display: none;\n}\n.weui_btn_dialog.default {\n  color: #353535;\n}\n.weui_btn_dialog.primary {\n  color: #0BB20C;\n}\n@media screen and (min-width: 1024px) {\n  .weui_dialog {\n    width: 35%;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dialog = __webpack_require__(74);

	var _dialog2 = _interopRequireDefault(_dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    Dialog: _dialog2.default
	  },
	  props: {
	    show: {
	      type: Boolean,
	      default: false,
	      twoWay: true
	    },
	    title: {
	      type: String,
	      required: true
	    },
	    confirmText: {
	      type: String,
	      default: 'confirm'
	    },
	    cancelText: {
	      type: String,
	      default: 'cancel'
	    },
	    maskTransition: {
	      type: String,
	      default: 'vux-fade'
	    },
	    dialogTransition: {
	      type: String,
	      default: 'vux-dialog'
	    }
	  },
	  methods: {
	    onConfirm: function onConfirm() {
	      this.show = false;
	      this.$emit('on-confirm');
	    },
	    onCancel: function onCancel() {
	      this.show = false;
	      this.$emit('on-cancel');
	    }
	  }
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(75)
	__vue_script__ = __webpack_require__(77)
	__vue_template__ = __webpack_require__(78)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\node_modules\\.npminstall\\vux\\0.1.2\\vux\\src\\components\\dialog\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(57)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../../css-loader/index.js!./../../../../../../../vue-loader/lib/style-rewriter.js?id=_v-4bd23abb&file=index.vue!./../../../../../../../less-loader/index.js!./../../../../../../../vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../../../../../../css-loader/index.js!./../../../../../../../vue-loader/lib/style-rewriter.js?id=_v-4bd23abb&file=index.vue!./../../../../../../../less-loader/index.js!./../../../../../../../vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(56)();
	// imports


	// module
	exports.push([module.id, ".weui_mask {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui_mask_transparent {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.weui_mask_transition {\n  display: none;\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0);\n  -webkit-transition: background .3s;\n  transition: background .3s;\n}\n.weui_fade_toggle {\n  background: rgba(0, 0, 0, 0.6);\n}\n.weui_dialog {\n  position: fixed;\n  z-index: 5000;\n  width: 85%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background-color: #FAFAFC;\n  text-align: center;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.weui_dialog_confirm .weui_dialog .weui_dialog_hd {\n  padding: 1.2em 20px .5em;\n}\n.weui_dialog_confirm .weui_dialog .weui_dialog_bd {\n  text-align: left;\n}\n.weui_dialog_hd {\n  padding: 1.2em 0 .5em;\n}\n.weui_dialog_title {\n  font-weight: 400;\n  font-size: 17px;\n}\n.weui_dialog_bd {\n  padding: 0 20px;\n  font-size: 15px;\n  color: #888;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui_dialog_ft {\n  position: relative;\n  line-height: 42px;\n  margin-top: 20px;\n  font-size: 17px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.weui_dialog_ft a {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #3CC51F;\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui_dialog_ft a:active {\n  background-color: #EEEEEE;\n}\n.weui_dialog_ft:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 1px;\n  border-top: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui_dialog_confirm .weui_dialog_ft a {\n  position: relative;\n}\n.weui_dialog_confirm .weui_dialog_ft a:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  border-left: 1px solid #D5D5D6;\n  color: #D5D5D6;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleX(0.5);\n          transform: scaleX(0.5);\n}\n.weui_dialog_confirm .weui_dialog_ft a:first-child:after {\n  display: none;\n}\n.weui_btn_dialog.default {\n  color: #353535;\n}\n.weui_btn_dialog.primary {\n  color: #0BB20C;\n}\n@media screen and (min-width: 1024px) {\n  .weui_dialog {\n    width: 35%;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    maskTransition: {
	      type: String,
	      default: 'vux-fade'
	    },
	    dialogTransition: {
	      type: String,
	      default: 'vux-dialog'
	    },
	    hideOnBlur: Boolean
	  },
	  watch: {
	    show: function show(val) {
	      this.$emit(val ? 'on-show' : 'on-hide');
	    }
	  }
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"weui_dialog_alert\" v-show=\"show\" :transition=\"maskTransition\">\n    <div class=\"weui_mask\" @click=\"hideOnBlur && show=false\"></div>\n    <div class=\"weui_dialog\" v-show=\"show\" :transition=\"dialogTransition\">\n      <slot></slot>\n    </div>\n  </div>\n";

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "\n  <dialog class=\"weui_dialog_confirm\"\n  :show=\"show\"\n  :mask-transition=\"maskTransition\"\n  :dialog-transition=\"dialogTransition\"\n  @on-hide=\"$emit('on-hide')\"\n  @on-show=\"$emit('on-show')\">\n    <div class=\"weui_dialog_hd\"><strong class=\"weui_dialog_title\">{{title}}</strong></div>\n    <div class=\"weui_dialog_bd\"><slot></slot></div>\n    <div class=\"weui_dialog_ft\">\n      <a href=\"javascript:;\" class=\"weui_btn_dialog default\" @click=\"onCancel\">{{cancelText}}</a>\n      <a href=\"javascript:;\" class=\"weui_btn_dialog primary\" @click=\"onConfirm\">{{confirmText}}</a>\n    </div>\n  </dialog>\n";

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "\n    <h1 _v-44189a0a=\"\">个人中心，vux组件模块</h1>\n    <div _v-44189a0a=\"\">\n        <group _v-44189a0a=\"\">\n          <switch title=\"confirm\" :value.sync=\"show\" _v-44189a0a=\"\"></switch>\n        </group>\n        <confirm :show.sync=\"show\" confirm-text=\"确定\" cancel-text=\"取消\" title=\"操作提示\" @on-confirm=\"onAction('确认')\" @on-cancel=\"onAction('取消')\" _v-44189a0a=\"\">\n          <p style=\"text-align:center;\" _v-44189a0a=\"\">这是一个vux组件</p>\n        </confirm>\n    </div>\n";

/***/ }
]));