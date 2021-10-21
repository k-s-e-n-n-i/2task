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

/***/ 3911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 1269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 7450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 4703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 3080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 4717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 4786:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var layout_1 = __webpack_require__(6328);
var ItemMenuWithSubmenu = /** @class */ (function () {
    function ItemMenuWithSubmenu(itemMenu) {
        this.itemMenu = itemMenu;
        this.submenu = layout_1.getElementBySelector(itemMenu, '.header__submenu');
    }
    ItemMenuWithSubmenu.prototype.init = function () {
        var _this = this;
        this.itemMenu.addEventListener('click', function (event) {
            _this.handleItemMenuWithSubmenuClick(event);
        });
    };
    ItemMenuWithSubmenu.prototype.handleItemMenuWithSubmenuClick = function (event) {
        if (event.target instanceof Node &&
            (event.target == this.submenu || this.submenu.contains(event.target))) {
            return;
        }
        this.submenu.classList.toggle('header__submenu_open');
    };
    ItemMenuWithSubmenu.prototype.hideSubmenu = function (event) {
        if (event.target instanceof Node &&
            (event.target == this.itemMenu || this.itemMenu.contains(event.target))) {
            return;
        }
        this.submenu.classList.remove('header__submenu_open');
    };
    return ItemMenuWithSubmenu;
}());
var arrayMenus = [];
document.querySelectorAll('.js-header__menu-li_expand').forEach(function (item) {
    if (item.querySelector('.header__submenu')) {
        var menu = new ItemMenuWithSubmenu(item);
        arrayMenus.push(menu);
        menu.init();
    }
});
document.addEventListener('click', function (event) {
    arrayMenus.forEach(function (item) {
        item.hideSubmenu(event);
    });
});
var MenuMobile = /** @class */ (function () {
    function MenuMobile(header) {
        this.header = header;
        this.menuMobile = layout_1.getElementBySelector(header, '.js-header__menu-mobile');
        this.headerNav = layout_1.getElementBySelector(header, '.header__links');
    }
    MenuMobile.prototype.init = function () {
        var _this = this;
        this.menuMobile.addEventListener('click', function () {
            _this.handleMenuMobileClick();
        });
    };
    MenuMobile.prototype.handleMenuMobileClick = function () {
        this.headerNav.classList.toggle('header__links_mobile');
        this.headerNav.classList.toggle('header__links_hidden');
        this.menuMobile.classList.toggle('header__menu-mobile_cross');
    };
    return MenuMobile;
}());
document.querySelectorAll('.header').forEach(function (item) {
    new MenuMobile(item).init();
});


/***/ }),

/***/ 6328:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getElementBySelector = void 0;
__webpack_require__(3309);
__webpack_require__(5755);
var getElementBySelector = function (lineItem, selector) {
    var element = lineItem.querySelector(selector);
    if (!(element instanceof HTMLElement)) {
        throw new Error("The element of selector \"" + selector + "\" is not a HTMLElement. Make sure a <div id=\"" + selector + "\"\"> element is present in the document.");
    }
    return element;
};
exports.getElementBySelector = getElementBySelector;


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
__webpack_require__(3911);
__webpack_require__(7450);
__webpack_require__(1269);
__webpack_require__(4703);
__webpack_require__(4786);
__webpack_require__(795);
__webpack_require__(3080);
__webpack_require__(5046);
__webpack_require__(4717);
__webpack_require__(946);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwL3wvXFwuKHN2Z3xwbmd8aWNvfHhtbHxqc29uKSQvIiwid2VicGFjazovL3dlYnAvLi9zcmMvYmxvY2tzL2J1dHRvbi9idXR0b24uc2Nzcz82ZDJhIiwid2VicGFjazovL3dlYnAvLi9zcmMvYmxvY2tzL2Zvb3Rlci1zaW1wbGUvZm9vdGVyLXNpbXBsZS5zY3NzPzI4NDciLCJ3ZWJwYWNrOi8vd2VicC8uL3NyYy9ibG9ja3MvZm9vdGVyL2Zvb3Rlci5zY3NzPzE5OWYiLCJ3ZWJwYWNrOi8vd2VicC8uL3NyYy9ibG9ja3MvaGVhZGVyL2hlYWRlci5zY3NzPzMzNWUiLCJ3ZWJwYWNrOi8vd2VicC8uL3NyYy9ibG9ja3MvaW5wdXQtdGV4dC9pbnB1dC10ZXh0LnNjc3M/YzFmNCIsIndlYnBhY2s6Ly93ZWJwLy4vc3JjL2Jsb2Nrcy9sYXlvdXQvbGF5b3V0LnNjc3M/ZGJmYiIsIndlYnBhY2s6Ly93ZWJwLy4vc3JjL2Jsb2Nrcy9saW5rL2xpbmsuc2Nzcz8zZTk3Iiwid2VicGFjazovL3dlYnAvLi9zcmMvYmxvY2tzL3NvY2lhbC9zb2NpYWwuc2Nzcz80ZGI5Iiwid2VicGFjazovL3dlYnAvLi9zcmMvYmxvY2tzL3RvcGljLWxhYmVsL3RvcGljLWxhYmVsLnNjc3M/Y2Q3YyIsIndlYnBhY2s6Ly93ZWJwLy4vc3JjL3BhZ2VzL3VpLWtpdC1oZWFkZXItZm9vdGVyL3VpLWtpdC1oZWFkZXItZm9vdGVyLnNjc3M/ZjdjOCIsIndlYnBhY2s6Ly93ZWJwLy4vc3JjL2Jsb2Nrcy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL3dlYnAvLi9zcmMvYmxvY2tzL2xheW91dC9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vd2VicC8uL3dlYnBhY2svZmF2aWNvbnMuanMiLCJ3ZWJwYWNrOi8vd2VicC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnAvLi9zcmMvcGFnZXMvdWkta2l0LWhlYWRlci1mb290ZXIvdWkta2l0LWhlYWRlci1mb290ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUI7Ozs7Ozs7OztBQ3ZCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSx5Q0FBd0Q7QUFFeEQ7SUFJRSw2QkFBWSxRQUFpQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLDZCQUFvQixDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxrQ0FBSSxHQUFKO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7WUFDNUMsS0FBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDREQUE4QixHQUE5QixVQUErQixLQUFZO1FBQ3pDLElBQ0UsS0FBSyxDQUFDLE1BQU0sWUFBWSxJQUFJO1lBQzVCLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENB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LENBQUM7S0FDSDtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQVZXLDRCQUFvQix3QkFVL0I7Ozs7Ozs7Ozs7QUNiRixJQUFNLGVBQWUsR0FBRyx5QkFJdkIsQ0FBQztBQUNGLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7Ozs7VUNMaEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BLDBCQUFvQztBQUNwQywwQkFBb0M7QUFDcEMsMEJBQWtEO0FBQ2xELDBCQUFvQztBQUNwQywwQkFBK0I7QUFDL0IseUJBQTRDO0FBQzVDLDBCQUFnQztBQUNoQywwQkFBOEM7QUFDOUMsMEJBQW9DO0FBRXBDLHlCQUErRCIsImZpbGUiOiJqcy91aS1raXQtaGVhZGVyLWZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9kaXN0L29wdGlvbnMuanNvblwiOiA5MjAwLFxuXHRcIi4vcGFja2FnZS5qc29uXCI6IDE3ODdcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAzMzY2OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGdldEVsZW1lbnRCeVNlbGVjdG9yIH0gZnJvbSAnLi4vbGF5b3V0L2xheW91dCc7XHJcblxyXG5jbGFzcyBJdGVtTWVudVdpdGhTdWJtZW51IHtcclxuICBpdGVtTWVudTogRWxlbWVudDtcclxuICBzdWJtZW51OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoaXRlbU1lbnU6IEVsZW1lbnQpIHtcclxuICAgIHRoaXMuaXRlbU1lbnUgPSBpdGVtTWVudTtcclxuICAgIHRoaXMuc3VibWVudSA9IGdldEVsZW1lbnRCeVNlbGVjdG9yKGl0ZW1NZW51LCAnLmhlYWRlcl9fc3VibWVudScpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXRlbU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5oYW5kbGVJdGVtTWVudVdpdGhTdWJtZW51Q2xpY2soZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJdGVtTWVudVdpdGhTdWJtZW51Q2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIE5vZGUgJiZcclxuICAgICAgKGV2ZW50LnRhcmdldCA9PSB0aGlzLnN1Ym1lbnUgfHwgdGhpcy5zdWJtZW51LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdWJtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fc3VibWVudV9vcGVuJyk7XHJcbiAgfVxyXG5cclxuICBoaWRlU3VibWVudShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgTm9kZSAmJlxyXG4gICAgICAoZXZlbnQudGFyZ2V0ID09IHRoaXMuaXRlbU1lbnUgfHwgdGhpcy5pdGVtTWVudS5jb250YWlucyhldmVudC50YXJnZXQpKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc3VibWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX3N1Ym1lbnVfb3BlbicpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYXJyYXlNZW51czogSXRlbU1lbnVXaXRoU3VibWVudVtdID0gW107XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1oZWFkZXJfX21lbnUtbGlfZXhwYW5kJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIGlmIChpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3N1Ym1lbnUnKSkge1xyXG4gICAgY29uc3QgbWVudSA9IG5ldyBJdGVtTWVudVdpdGhTdWJtZW51KGl0ZW0pO1xyXG4gICAgYXJyYXlNZW51cy5wdXNoKG1lbnUpO1xyXG4gICAgbWVudS5pbml0KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgYXJyYXlNZW51cy5mb3JFYWNoKChpdGVtOiBJdGVtTWVudVdpdGhTdWJtZW51KSA9PiB7XHJcbiAgICBpdGVtLmhpZGVTdWJtZW51KGV2ZW50KTtcclxuICB9KTtcclxufSk7XHJcblxyXG5jbGFzcyBNZW51TW9iaWxlIHtcclxuICBoZWFkZXI6IEVsZW1lbnQ7XHJcbiAgbWVudU1vYmlsZTogSFRNTEVsZW1lbnQ7XHJcbiAgaGVhZGVyTmF2OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoaGVhZGVyOiBFbGVtZW50KSB7XHJcbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcclxuICAgIHRoaXMubWVudU1vYmlsZSA9IGdldEVsZW1lbnRCeVNlbGVjdG9yKGhlYWRlciwgJy5qcy1oZWFkZXJfX21lbnUtbW9iaWxlJyk7XHJcbiAgICB0aGlzLmhlYWRlck5hdiA9IGdldEVsZW1lbnRCeVNlbGVjdG9yKGhlYWRlciwgJy5oZWFkZXJfX2xpbmtzJyk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5tZW51TW9iaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZU1lbnVNb2JpbGVDbGljaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVNZW51TW9iaWxlQ2xpY2soKSB7XHJcbiAgICB0aGlzLmhlYWRlck5hdi5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2xpbmtzX21vYmlsZScpO1xyXG4gICAgdGhpcy5oZWFkZXJOYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19saW5rc19oaWRkZW4nKTtcclxuICAgIHRoaXMubWVudU1vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX21lbnUtbW9iaWxlX2Nyb3NzJyk7XHJcbiAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIG5ldyBNZW51TW9iaWxlKGl0ZW0pLmluaXQoKTtcclxufSk7XHJcbiIsImltcG9ydCAnLi4vLi4vLi4vd2VicGFjay9mYXZpY29ucyc7XHJcbmltcG9ydCAnQEJsb2Nrcy9sYXlvdXQvbGF5b3V0LnNjc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEVsZW1lbnRCeVNlbGVjdG9yID0gKGxpbmVJdGVtOiBFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBsaW5lSXRlbS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcbiAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgVGhlIGVsZW1lbnQgb2Ygc2VsZWN0b3IgXCIke3NlbGVjdG9yfVwiIGlzIG5vdCBhIEhUTUxFbGVtZW50LiBNYWtlIHN1cmUgYSA8ZGl2IGlkPVwiJHtzZWxlY3Rvcn1cIlwiPiBlbGVtZW50IGlzIHByZXNlbnQgaW4gdGhlIGRvY3VtZW50LmBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuIiwiY29uc3QgZmF2aWNvbnNDb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFxyXG4gICchIWZpbGUtbG9hZGVyP25hbWU9c3JjL2Zhdmljb25zL1tuYW1lXS5bZXh0XScsXHJcbiAgdHJ1ZSxcclxuICAvXFwuKHN2Z3xwbmd8aWNvfHhtbHxqc29uKSQvXHJcbik7XHJcbmZhdmljb25zQ29udGV4dC5rZXlzKCkuZm9yRWFjaChmYXZpY29uc0NvbnRleHQpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnQEJsb2Nrcy9idXR0b24vYnV0dG9uLnNjc3MnO1xyXG5pbXBvcnQgJ0BCbG9ja3MvZm9vdGVyL2Zvb3Rlci5zY3NzJztcclxuaW1wb3J0ICdAQmxvY2tzL2Zvb3Rlci1zaW1wbGUvZm9vdGVyLXNpbXBsZS5zY3NzJztcclxuaW1wb3J0ICdAQmxvY2tzL2hlYWRlci9oZWFkZXIuc2Nzcyc7XHJcbmltcG9ydCAnQEJsb2Nrcy9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0ICdAQmxvY2tzL2lucHV0LXRleHQvaW5wdXQtdGV4dC5zY3NzJztcclxuaW1wb3J0ICdAQmxvY2tzL2xpbmsvbGluay5zY3NzJztcclxuaW1wb3J0ICdAQmxvY2tzL3RvcGljLWxhYmVsL3RvcGljLWxhYmVsLnNjc3MnO1xyXG5pbXBvcnQgJ0BCbG9ja3Mvc29jaWFsL3NvY2lhbC5zY3NzJztcclxuXHJcbmltcG9ydCAnQFBhZ2VzL3VpLWtpdC1oZWFkZXItZm9vdGVyL3VpLWtpdC1oZWFkZXItZm9vdGVyLnNjc3MnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9