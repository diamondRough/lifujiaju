/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var common = __webpack_require__(5);
	var html = __webpack_require__(6);
	
	// common.render('<div>asd</div>');
	common.render(html);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	var common = {
		render: function render(str) {
			var body = document.body;
			body.innerHTML = str + body.innerHTML;
		}
	};
	
	module.exports = common;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-index\" id=\"m-index\">	<header>		<ul>			<li class=\"yo-ico\">				<span></span>			</li>			<li class=\"yo-ico\">				<a href=\"javascript:;\"><i class=\"yo-ico\">&#xe613;</i></a>			</li>		</ul>	</header>	<nav>		<ul>			<li v-for:\"item in nav\">{{item}}</li>		</ul>	</nav>	<section>	</section>	<footer>		<ul>			<li class=\"active\">				<i class=\"yo-ico\">&#xe60a;</i>				<b>首页</b>			</li>			<li>				<i class=\"yo-ico\">&#xe681;</i>				<b>全部产品</b>			</li>			<li>				<i class=\"yo-ico\">&#xe77c;</i>				<b>闲逛</b>			</li>			<li>				<i class=\"yo-ico\">&#xe68c;</i>				<b>购物车</b>			</li>			<li>				<i class=\"yo-ico\">&#xe623;</i>				<b>账户中心</b>			</li>		</ul>	</footer></div>"

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map