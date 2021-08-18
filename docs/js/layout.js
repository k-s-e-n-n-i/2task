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

"use strict";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwL3wvXFwuKHN2Z3xwbmd8aWNvfHhtbHxqc29uKSQvIiwid2VicGFjazovL3dlYnAvLi9zcmMvYmxvY2tzL2xheW91dC9sYXlvdXQuc2Nzcz9kYmZiIiwid2VicGFjazovL3dlYnAvLi93ZWJwYWNrL2Zhdmljb25zLmpzIiwid2VicGFjazovL3dlYnAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwLy4vc3JjL2Jsb2Nrcy9sYXlvdXQvbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCOzs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7Ozs7QUNBQSxJQUFNLGVBQWUsR0FBRyx5QkFJdkIsQ0FBQztBQUNGLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7Ozs7VUNMaEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BLDBCQUFzQztBQUN0QywwQkFBb0MiLCJmaWxlIjoianMvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2Rpc3Qvb3B0aW9ucy5qc29uXCI6IDkyMDAsXG5cdFwiLi9wYWNrYWdlLmpzb25cIjogMTc4N1xufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDMzNjY7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgZmF2aWNvbnNDb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFxyXG4gICchIWZpbGUtbG9hZGVyP25hbWU9c3JjL2Zhdmljb25zL1tuYW1lXS5bZXh0XScsXHJcbiAgdHJ1ZSxcclxuICAvXFwuKHN2Z3xwbmd8aWNvfHhtbHxqc29uKSQvXHJcbik7XHJcbmZhdmljb25zQ29udGV4dC5rZXlzKCkuZm9yRWFjaChmYXZpY29uc0NvbnRleHQpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vLi4vLi4vd2VicGFjay9mYXZpY29ucy5qcyc7XHJcbmltcG9ydCAnQEJsb2Nrcy9sYXlvdXQvbGF5b3V0LnNjc3MnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9