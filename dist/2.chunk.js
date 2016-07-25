webpackJsonp([2],{

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(41)
	__vue_script__ = __webpack_require__(42)
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\src\\views\\order.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 41:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Display = __webpack_require__(43);

	var _Display2 = _interopRequireDefault(_Display);

	var _Increment = __webpack_require__(46);

	var _Increment2 = _interopRequireDefault(_Increment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <style scoped>
	//     h1{
	//         color: #28a7e1;
	//         text-align: center;
	//         font-size: 25px;
	//         font-weight: bold;
	//         margin-top: 100px;
	//     }
	// </style>
	// <template>
	//     <Display></Display>
	//     <Increment></Increment>
	//     <h1>订单列表,vuex应用示例</h1>
	// </template>
	// <script>
	module.exports = {
	    data: function data() {
	        return {};
	    },
	    ready: function ready() {},
	    components: {
	        Display: _Display2.default,
	        Increment: _Increment2.default
	    },
	    beforeDestroy: function beforeDestroy() {},
	    methods: {}
	};
	// </script>
	//

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(44)
	__vue_template__ = __webpack_require__(45)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\src\\components\\Display.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 44:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <h3>Count is {{ counterValue }}</h3>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  vuex: {
	    getters: {
	      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
	      counterValue: function counterValue(state) {
	        return state.count;
	      }
	    }
	  }
	};
	// </script>

/***/ },

/***/ 45:
/***/ function(module, exports) {

	module.exports = "\r\n  <div>\r\n    <h3>Count is {{ counterValue }}</h3>\r\n  </div>\r\n";

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(47)
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\src\\components\\Increment.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 47:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <button @click='increment'>Increment +1</button>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  vuex: {
	    actions: {
	      increment: function increment(_ref) {
	        var dispatch = _ref.dispatch;
	        var state = _ref.state;

	        dispatch('INCREMENT', 1);
	      }
	    }
	  }
	};
	// </script>

/***/ },

/***/ 48:
/***/ function(module, exports) {

	module.exports = "\r\n  <div>\r\n    <button @click='increment'>Increment +1</button>\r\n  </div>\r\n";

/***/ },

/***/ 49:
/***/ function(module, exports) {

	module.exports = "\n    <display _v-90e19864=\"\"></display>\n    <increment _v-90e19864=\"\"></increment>\n    <h1 _v-90e19864=\"\">订单列表,vuex应用示例</h1>\n";

/***/ }

});