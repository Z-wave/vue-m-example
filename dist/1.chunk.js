webpackJsonp([1],{

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(33)
	__vue_script__ = __webpack_require__(34)
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\src\\views\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 33:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// <style scoped>
	//     h1{
	//         color: #28a7e1;
	//         text-align: center;
	//         font-size: 25px;
	//         font-weight: bold;
	//         margin-top: 100px;
	//     }
	// </style>
	//
	// <template>
	// <div>
	//       <h1>首页</h1>
	//       <button type="text" @click = "showModal=true"> 显示该页面modal </button>
	//       <!--此种写法详情 https://github.com/yyx990803/vue/issues/1325-->
	//       <modal :show.sync="showModal" :confirmfn.sync="confirmfn"  :cancelfn.sync="cancelfn" v-ref:index-modal>
	//       <!--
	//         you can use custom content here to overwrite
	//         default content
	//       -->
	//         <!--       <h3 slot="header">这是嵌入到页面中单独的modal</h3>
	//         <h3 slot="body">
	//           通过设置，以下属性传值
	//               :confirmfn.sync="confirmfn"  :cancelfn.sync="cancelfn"
	//         </h3>
	//         <slot slot="footer">
	//           <p>覆盖掉原来的footer</p>
	//         </slot> -->
	//
	// </template>
	//
	// <script>

	module.exports = {
	    data: function data() {
	        return {
	            showModal: false
	        };
	    },
	    ready: function ready() {
	        this.$http.post('http://192.168.10.91/mobile/index.php?act=goods_class&op=list', { key: '123' }, {
	            headers: {
	                //"X-Requested-With": "XMLHttpRequest"
	            },
	            emulateJSON: true
	        }).then(function (data) {
	            console.log(data);
	        }, function (response) {
	            // handle error
	        });
	    },
	    components: {
	        modal: __webpack_require__(35)
	    },
	    methods: {
	        confirmfn: function confirmfn() {
	            this.showModal = false;
	        },
	        cancelfn: function cancelfn() {
	            this.showModal = false;
	        }
	    }
	};
	// </script>

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(36)
	__vue_script__ = __webpack_require__(37)
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\UED\\eagle\\branch\\eagle201510\\m-example\\src\\components\\modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 36:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 37:
/***/ function(module, exports) {

	'use strict';

	// <template>
	// 		<div class="modal-mask" v-if="show" transition="modal" transition-mode="out-in">
	// 			<div class="modal-wrapper" v-el:overlay @click.self.stop="show=false" >
	// 				<div class="modal-container">
	// 					<div class="modal-header">
	// 						<span class="modal-close"  @click="show=false"></span>
	// 						<slot name="header">
	// 						default header
	// 						</slot>
	// 					</div>
	// 					<div class="modal-body">
	// 						<slot name="body">
	// 						default body
	// 						</slot>
	// 					</div>
	// 					<div class="modal-footer">
	// 						<slot name="footer">
	// 							试试在input里面输入一些文字
	// 							<input type="text" v-el:inp @keyup="modalkeyup">
	// 							<button class="modal-default-button" @click="confirmCallback">
	// 								OK
	// 							</button>
	// 							<button class="modal-default-button" v-on:click="cancelCallback">
	// 								Cancel
	// 							</button>
	// 						</slot>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// </template>
	//
	// <script>
	module.exports = {
		props: {
			show: {
				require: true,
				type: Boolean
			},
			cancelfn: {
				type: Function,
				default: function _default() {}
			},
			confirmfn: {
				type: Function,
				default: function _default() {}
			}
		},
		methods: {
			cancelCallback: function cancelCallback() {
				this.cancelfn();
				this.cancelfn = function () {};
				this.show = false;
			},
			confirmCallback: function confirmCallback() {
				this.confirmfn();
				this.confirmfn = function () {};
				this.show = false;
			},
			keyupcallback: function keyupcallback() {
				console.log('duang~');
			},
			modalkeyup: function modalkeyup(e) {
				this.$root.modalbody = e.target.value;
			}
		}
	};
	// </script>
	//
	// <style>
	// .modal-mask {
	//   position: fixed;
	//   z-index: 9998;
	//   top: 0;
	//   left: 0;
	//   width: 100%;
	//   height: 100%;
	//   background-color: rgba(0, 0, 0, .5);
	//   display: table;
	//   transition: opacity .3s ease;
	// }
	//
	// .modal-wrapper {
	//   display: table-cell;
	//   vertical-align: middle;
	// }
	//
	// .modal-container {
	//   width: 300px;
	//   margin: 0px auto;
	//   padding: 20px 30px;
	//   background-color: #fff;
	//   border-radius: 2px;
	//   box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	//   transition: all .3s ease;
	//   font-family: Helvetica, Arial, sans-serif;
	// }
	//
	// .modal-header h3 {
	//   margin-top: 0;
	//   color: #42b983;
	// }
	//
	// .modal-body {
	//   margin: 20px 0;
	// }
	//
	// .modal-default-button {
	//   float: right;
	// }
	// .modal-header .modal-close {
	//     display: inline-block;
	//     float: right;
	//     width: 12px;
	//     height: 12px;
	//     margin-top: 4px;
	//     background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MUIxODc5OTVCNTgxMUU1ODAzNkYzMTAwN0RDOEU0OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MUIxODc5QTVCNTgxMUU1ODAzNkYzMTAwN0RDOEU0OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQxN0U4Rjc0NUI1ODExRTU4MDM2RjMxMDA3REM4RTQ4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQxN0U4Rjc1NUI1ODExRTU4MDM2RjMxMDA3REM4RTQ4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HUcKGgAAAQFJREFUeNpi/P//PwMlgImBQkCxASzInIlTthoCqUYgPpqf492JJM4IpNKB2AuIpwPltuNyQTsQ+wJxOVBTJpJ4HBA3QeXqcLoACA4BsQ0QCwJxA9Tm91CDRYH4G8h1+AzoA+LPQAxyvhgQt0E1SQLxRyDuB+IJyBoY0aMRaCsbkIoB4rlIwiDNrVD/f8EbC0AFv4DUVyD+jSb1GV0zVgOALogEUUDMChX6DsT8QFwLlMvCawBQQQY0HMShGluAuArqBSlQFAPV1OFzQSgQSwDxDyDugBowE5o2QIErAo1KnLHQDMQcQHwMZAA0PEAumw2keIDYE4gn4Y2FoZeZAAIMALyUTmwPR6yCAAAAAElFTkSuQmCC") no-repeat center;
	//     cursor: pointer;
	// }
	// .modal-header .modal-close:hover {
	//     background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RThBQjBFNzVCNTgxMUU1QTIzNzgyRTJBQjExRTk1MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RThBQjBFODVCNTgxMUU1QTIzNzgyRTJBQjExRTk1MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlFNjE3RDAyNUI1ODExRTVBMjM3ODJFMkFCMTFFOTUwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlFNjE3RDAzNUI1ODExRTVBMjM3ODJFMkFCMTFFOTUwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+thqe1wAAAPhJREFUeNpi/P//PwMlgImBQkBdA37//m0IxJuAuBxNnBGIM6BynigmgMIAhn/9+rUDiP8D8TsgzkQSjwfiV1C548h6WNBcdAiIbYBYEIgbQDYD6fdA3A7EokD8DYiP4nMBBxDnAvE3qG0fgPgZErseiPmR9aAYADWEDYiToJr+I2kuBWIedPUYscDKyvoLSH0FhR2a1Geg3BeMaMDigkggfoFkO8w7T4E4C109uuYMIH6OpLEZiAugXgCJvQbiOnwG7IUq/A5SCMTsQMwJxIVA/AkqdxpfNDYDMQcQHwPiDmh4gBLSbCDFA8SgRDQJWQPj0M9MAAEGACTic2YzEZkcAAAAAElFTkSuQmCC") no-repeat center;
	// }
	//
	//
	//
	// /*
	//  * the following styles are auto-applied to elements with
	//  * v-transition="modal" when their visibility is toggled
	//  * by Vue.js.
	//  *
	//  * You can easily play with the modal transition by editing
	//  * these styles.
	//  */
	//
	// .modal-enter, .modal-leave {
	//   opacity: 0;
	// }
	//
	// .modal-enter .modal-container,
	// .modal-leave .modal-container {
	//   -webkit-transform: scale(1.1);
	//   transform: scale(1.1);
	// }
	//
	// </style>

/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = "\n\t\t<div class=\"modal-mask\" v-if=\"show\" transition=\"modal\" transition-mode=\"out-in\">\n\t\t\t<div class=\"modal-wrapper\" v-el:overlay @click.self.stop=\"show=false\" >\n\t\t\t\t<div class=\"modal-container\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<span class=\"modal-close\"  @click=\"show=false\"></span>\n\t\t\t\t\t\t<slot name=\"header\">\n\t\t\t\t\t\tdefault header\n\t\t\t\t\t\t</slot>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<slot name=\"body\">\n\t\t\t\t\t\tdefault body\n\t\t\t\t\t\t</slot>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<slot name=\"footer\">\n\t\t\t\t\t\t\t试试在input里面输入一些文字\n\t\t\t\t\t\t\t<input type=\"text\" v-el:inp @keyup=\"modalkeyup\">\n\t\t\t\t\t\t\t<button class=\"modal-default-button\" @click=\"confirmCallback\">\n\t\t\t\t\t\t\t\tOK\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"modal-default-button\" v-on:click=\"cancelCallback\">\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</slot>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n";

/***/ },

/***/ 39:
/***/ function(module, exports) {

	module.exports = "\n<div _v-c277195c=\"\">\n      <h1 _v-c277195c=\"\">首页</h1>\n      <button type=\"text\" @click=\"showModal=true\" _v-c277195c=\"\"> 显示该页面modal </button>\n      <!--此种写法详情 https://github.com/yyx990803/vue/issues/1325-->\n      <modal :show.sync=\"showModal\" :confirmfn.sync=\"confirmfn\" :cancelfn.sync=\"cancelfn\" v-ref:index-modal=\"\" _v-c277195c=\"\">\n      <!--\n        you can use custom content here to overwrite\n        default content\n      -->\n        <!--       <h3 slot=\"header\">这是嵌入到页面中单独的modal</h3>\n        <h3 slot=\"body\">\n          通过设置，以下属性传值\n              :confirmfn.sync=\"confirmfn\"  :cancelfn.sync=\"cancelfn\"\n        </h3>\n        <slot slot=\"footer\">\n          <p>覆盖掉原来的footer</p>\n        </slot> -->\n    \n</modal></div>";

/***/ }

});