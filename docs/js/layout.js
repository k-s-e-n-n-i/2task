/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9200:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"additionalProperties":true,"properties":{"name":{"description":"The filename template for the target file(s) (https://github.com/webpack-contrib/file-loader#name).","anyOf":[{"type":"string"},{"instanceof":"Function"}]},"outputPath":{"description":"A filesystem path where the target file(s) will be placed (https://github.com/webpack-contrib/file-loader#outputpath).","anyOf":[{"type":"string"},{"instanceof":"Function"}]},"publicPath":{"description":"A custom public path for the target file(s) (https://github.com/webpack-contrib/file-loader#publicpath).","anyOf":[{"type":"string"},{"instanceof":"Function"}]},"postTransformPublicPath":{"description":"A custom transformation function for post-processing the publicPath (https://github.com/webpack-contrib/file-loader#posttransformpublicpath).","instanceof":"Function"},"context":{"description":"A custom file context (https://github.com/webpack-contrib/file-loader#context).","type":"string"},"emitFile":{"description":"Enables/Disables emit files (https://github.com/webpack-contrib/file-loader#emitfile).","type":"boolean"},"regExp":{"description":"A Regular Expression to one or many parts of the target file path. The capture groups can be reused in the name property using [N] placeholder (https://github.com/webpack-contrib/file-loader#regexp).","anyOf":[{"type":"string"},{"instanceof":"RegExp"}]},"esModule":{"description":"By default, file-loader generates JS modules that use the ES modules syntax.","type":"boolean"}},"type":"object"}');

/***/ }),

/***/ 1787:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"file-loader","version":"6.2.0","description":"A file loader module for webpack","license":"MIT","repository":"webpack-contrib/file-loader","author":"Tobias Koppers @sokra","homepage":"https://github.com/webpack-contrib/file-loader","bugs":"https://github.com/webpack-contrib/file-loader/issues","funding":{"type":"opencollective","url":"https://opencollective.com/webpack"},"main":"dist/cjs.js","engines":{"node":">= 10.13.0"},"scripts":{"start":"npm run build -- -w","clean":"del-cli dist","prebuild":"npm run clean","build":"cross-env NODE_ENV=production babel src -d dist --copy-files","commitlint":"commitlint --from=master","security":"npm audit","lint:prettier":"prettier --list-different .","lint:js":"eslint --cache .","lint":"npm-run-all -l -p \\"lint:**\\"","test:only":"cross-env NODE_ENV=test jest","test:watch":"npm run test:only -- --watch","test:coverage":"npm run test:only -- --collectCoverageFrom=\\"src/**/*.js\\" --coverage","pretest":"npm run lint","test":"npm run test:coverage","prepare":"npm run build","release":"standard-version","defaults":"webpack-defaults"},"files":["dist"],"peerDependencies":{"webpack":"^4.0.0 || ^5.0.0"},"dependencies":{"loader-utils":"^2.0.0","schema-utils":"^3.0.0"},"devDependencies":{"@babel/cli":"^7.11.6","@babel/core":"^7.11.6","@babel/preset-env":"^7.11.5","@commitlint/cli":"^11.0.0","@commitlint/config-conventional":"^11.0.0","@webpack-contrib/defaults":"^6.3.0","@webpack-contrib/eslint-config-webpack":"^3.0.0","babel-jest":"^26.5.2","cross-env":"^7.0.2","del":"^6.0.0","del-cli":"^3.0.1","eslint":"^7.10.0","eslint-config-prettier":"^6.12.0","eslint-plugin-import":"^2.22.1","husky":"^4.3.0","jest":"^26.5.2","lint-staged":"^10.4.0","memfs":"^3.2.0","npm-run-all":"^4.1.5","prettier":"^2.1.2","standard-version":"^9.0.0","url-loader":"^4.1.0","webpack":"^4.44.2"},"keywords":["webpack"]}');

/***/ }),

/***/ 3366:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dist/options.json": 9200,
	"./package.json": 1787
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3366;

/***/ }),

/***/ 5755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 3309:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var faviconsContext = __webpack_require__(3366);
faviconsContext.keys().forEach(faviconsContext);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_require__(3309);
__webpack_require__(5755);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwL3wvXFwuKHN2Z3xwbmd8aWNvfHhtbHxqc29uKSQvIiwid2VicGFjazovL3dlYnAvLi9zcmMvYmxvY2tzL2xheW91dC9sYXlvdXQuc2Nzcz9kYmZiIiwid2VicGFjazovL3dlYnAvLi93ZWJwYWNrL2Zhdmljb25zLmpzIiwid2VicGFjazovL3dlYnAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwLy4vc3JjL2Jsb2Nrcy9sYXlvdXQvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCOzs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7O0FDQUEsSUFBTSxlQUFlLEdBQUcseUJBSXZCLENBQUM7QUFDRixlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7Ozs7O1VDTGhEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQSwwQkFBc0M7QUFDdEMsMEJBQW9DIiwiZmlsZSI6ImpzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9kaXN0L29wdGlvbnMuanNvblwiOiA5MjAwLFxuXHRcIi4vcGFja2FnZS5qc29uXCI6IDE3ODdcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAzMzY2OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGZhdmljb25zQ29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcclxuICAnISFmaWxlLWxvYWRlcj9uYW1lPXNyYy9mYXZpY29ucy9bbmFtZV0uW2V4dF0nLFxyXG4gIHRydWUsXHJcbiAgL1xcLihzdmd8cG5nfGljb3x4bWx8anNvbikkL1xyXG4pO1xyXG5mYXZpY29uc0NvbnRleHQua2V5cygpLmZvckVhY2goZmF2aWNvbnNDb250ZXh0KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uLy4uLy4uL3dlYnBhY2svZmF2aWNvbnMuanMnO1xyXG5pbXBvcnQgJ0BCbG9ja3MvbGF5b3V0L2xheW91dC5zY3NzJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==