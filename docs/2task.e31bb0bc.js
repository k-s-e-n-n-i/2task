// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel/src/builtins/bundle-url.js"}],"project/font/fonts.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./montserrat\\MontserratRegular\\MontserratRegular.eot":[["MontserratRegular.4e561d95.eot","project/font/montserrat/MontserratRegular/MontserratRegular.eot"],"project/font/montserrat/MontserratRegular/MontserratRegular.eot"],"./montserrat\\MontserratRegular\\MontserratRegular.woff":[["MontserratRegular.967a84d9.woff","project/font/montserrat/MontserratRegular/MontserratRegular.woff"],"project/font/montserrat/MontserratRegular/MontserratRegular.woff"],"./montserrat\\MontserratRegular\\MontserratRegular.ttf":[["MontserratRegular.0fc70182.ttf","project/font/montserrat/MontserratRegular/MontserratRegular.ttf"],"project/font/montserrat/MontserratRegular/MontserratRegular.ttf"],"./montserrat\\MontserratBlack\\MontserratBlack.eot":[["MontserratBlack.58f78a95.eot","project/font/montserrat/MontserratBlack/MontserratBlack.eot"],"project/font/montserrat/MontserratBlack/MontserratBlack.eot"],"./montserrat\\MontserratBlack\\MontserratBlack.woff":[["MontserratBlack.8d15ff41.woff","project/font/montserrat/MontserratBlack/MontserratBlack.woff"],"project/font/montserrat/MontserratBlack/MontserratBlack.woff"],"./montserrat\\MontserratBlack\\MontserratBlack.ttf":[["MontserratBlack.47fdf0d3.ttf","project/font/montserrat/MontserratBlack/MontserratBlack.ttf"],"project/font/montserrat/MontserratBlack/MontserratBlack.ttf"],"./montserrat\\MontserratBold\\MontserratBold.eot":[["MontserratBold.dfdc3739.eot","project/font/montserrat/MontserratBold/MontserratBold.eot"],"project/font/montserrat/MontserratBold/MontserratBold.eot"],"./montserrat\\MontserratBold\\MontserratBold.woff":[["MontserratBold.46defa5e.woff","project/font/montserrat/MontserratBold/MontserratBold.woff"],"project/font/montserrat/MontserratBold/MontserratBold.woff"],"./montserrat\\MontserratBold\\MontserratBold.ttf":[["MontserratBold.d43172c6.ttf","project/font/montserrat/MontserratBold/MontserratBold.ttf"],"project/font/montserrat/MontserratBold/MontserratBold.ttf"],"./opensans\\opensanslight.woff2":[["opensanslight.668344e5.woff2","project/font/opensans/opensanslight.woff2"],"project/font/opensans/opensanslight.woff2"],"./opensans\\opensanslight.woff":[["opensanslight.cf468e39.woff","project/font/opensans/opensanslight.woff"],"project/font/opensans/opensanslight.woff"],"./opensans\\opensanslight.ttf":[["opensanslight.03969478.ttf","project/font/opensans/opensanslight.ttf"],"project/font/opensans/opensanslight.ttf"],"./opensans\\opensanslightitalic.woff2":[["opensanslightitalic.f4517961.woff2","project/font/opensans/opensanslightitalic.woff2"],"project/font/opensans/opensanslightitalic.woff2"],"./opensans\\opensanslightitalic.woff":[["opensanslightitalic.5be6552a.woff","project/font/opensans/opensanslightitalic.woff"],"project/font/opensans/opensanslightitalic.woff"],"./opensans\\opensanslightitalic.ttf":[["opensanslightitalic.473803ff.ttf","project/font/opensans/opensanslightitalic.ttf"],"project/font/opensans/opensanslightitalic.ttf"],"./opensans\\opensans.woff2":[["opensans.7494c15d.woff2","project/font/opensans/opensans.woff2"],"project/font/opensans/opensans.woff2"],"./opensans\\opensans.woff":[["opensans.7ef19e09.woff","project/font/opensans/opensans.woff"],"project/font/opensans/opensans.woff"],"./opensans\\opensans.ttf":[["opensans.3b92a290.ttf","project/font/opensans/opensans.ttf"],"project/font/opensans/opensans.ttf"],"./opensans\\opensansitalic.woff2":[["opensansitalic.9165ff4f.woff2","project/font/opensans/opensansitalic.woff2"],"project/font/opensans/opensansitalic.woff2"],"./opensans\\opensansitalic.woff":[["opensansitalic.baad7426.woff","project/font/opensans/opensansitalic.woff"],"project/font/opensans/opensansitalic.woff"],"./opensans\\opensansitalic.ttf":[["opensansitalic.cc86c3f2.ttf","project/font/opensans/opensansitalic.ttf"],"project/font/opensans/opensansitalic.ttf"],"./opensans\\opensanssemibold.woff2":[["opensanssemibold.5c29e765.woff2","project/font/opensans/opensanssemibold.woff2"],"project/font/opensans/opensanssemibold.woff2"],"./opensans\\opensanssemibold.woff":[["opensanssemibold.611cbafc.woff","project/font/opensans/opensanssemibold.woff"],"project/font/opensans/opensanssemibold.woff"],"./opensans\\opensanssemibold.ttf":[["opensanssemibold.aaa0969d.ttf","project/font/opensans/opensanssemibold.ttf"],"project/font/opensans/opensanssemibold.ttf"],"./opensans\\opensanssemibolditalic.woff2":[["opensanssemibolditalic.0304bf14.woff2","project/font/opensans/opensanssemibolditalic.woff2"],"project/font/opensans/opensanssemibolditalic.woff2"],"./opensans\\opensanssemibolditalic.woff":[["opensanssemibolditalic.bd952bf6.woff","project/font/opensans/opensanssemibolditalic.woff"],"project/font/opensans/opensanssemibolditalic.woff"],"./opensans\\opensanssemibolditalic.ttf":[["opensanssemibolditalic.670e9f55.ttf","project/font/opensans/opensanssemibolditalic.ttf"],"project/font/opensans/opensanssemibolditalic.ttf"],"./opensans\\opensansbold.woff2":[["opensansbold.ffc914e3.woff2","project/font/opensans/opensansbold.woff2"],"project/font/opensans/opensansbold.woff2"],"./opensans\\opensansbold.woff":[["opensansbold.6e01e9eb.woff","project/font/opensans/opensansbold.woff"],"project/font/opensans/opensansbold.woff"],"./opensans\\opensansbold.ttf":[["opensansbold.aaea4411.ttf","project/font/opensans/opensansbold.ttf"],"project/font/opensans/opensansbold.ttf"],"./opensans\\opensansbolditalic.woff2":[["opensansbolditalic.981b3129.woff2","project/font/opensans/opensansbolditalic.woff2"],"project/font/opensans/opensansbolditalic.woff2"],"./opensans\\opensansbolditalic.woff":[["opensansbolditalic.732103cb.woff","project/font/opensans/opensansbolditalic.woff"],"project/font/opensans/opensansbolditalic.woff"],"./opensans\\opensansbolditalic.ttf":[["opensansbolditalic.21e31f52.ttf","project/font/opensans/opensansbolditalic.ttf"],"project/font/opensans/opensansbolditalic.ttf"],"./opensans\\opensansextrabold.woff2":[["opensansextrabold.ba9c2754.woff2","project/font/opensans/opensansextrabold.woff2"],"project/font/opensans/opensansextrabold.woff2"],"./opensans\\opensansextrabold.woff":[["opensansextrabold.aa9b2e82.woff","project/font/opensans/opensansextrabold.woff"],"project/font/opensans/opensansextrabold.woff"],"./opensans\\opensansextrabold.ttf":[["opensansextrabold.8aa4efe6.ttf","project/font/opensans/opensansextrabold.ttf"],"project/font/opensans/opensansextrabold.ttf"],"./opensans\\opensansextrabolditalic.woff2":[["opensansextrabolditalic.a37e42c4.woff2","project/font/opensans/opensansextrabolditalic.woff2"],"project/font/opensans/opensansextrabolditalic.woff2"],"./opensans\\opensansextrabolditalic.woff":[["opensansextrabolditalic.f5145080.woff","project/font/opensans/opensansextrabolditalic.woff"],"project/font/opensans/opensansextrabolditalic.woff"],"./opensans\\opensansextrabolditalic.ttf":[["opensansextrabolditalic.124960da.ttf","project/font/opensans/opensansextrabolditalic.ttf"],"project/font/opensans/opensansextrabolditalic.ttf"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"project/style/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/form_elements.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/inputText/inputText.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\project\\img\\arrow.svg":[["arrow.3acbc28f.svg","project/img/arrow.svg"],"project/img/arrow.svg"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/dropdown/dropdown.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/dropdown/dropdown.js":[function(require,module,exports) {
$(function () {
  $('.blockDropdown_dropdown__whisItems').on('click', function (e) {
    var block_list = $(this).closest('.blockDropdown').find('.blockDropdown_dropdownItems');

    if (block_list.hasClass('blockDropdown_dropdownItems__hide')) {
      block_list.removeClass('blockDropdown_dropdownItems__hide');
      $(this).addClass('blockDropdown_dropdown__itemsShow'); //console.log('был закрыт');
    } else {
      block_list.addClass('blockDropdown_dropdownItems__hide');
      $(this).removeClass('blockDropdown_dropdown__itemsShow'); //console.log('был открыт');
    }
  });
});
},{}],"ui_kit/form_elements/btn/btn.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\project\\img\\arrow.svg":[["arrow.3acbc28f.svg","project/img/arrow.svg"],"project/img/arrow.svg"],"C:\\Users\\ksu...xa\\Desktop\\2task\\project\\img\\arrow_white.svg":[["arrow_white.a18144f4.svg","project/img/arrow_white.svg"],"project/img/arrow_white.svg"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/checkbox/checkbox.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/checkbox/checkboxList.js":[function(require,module,exports) {
$(function () {
  $('.checkboxList').on('click', function (e) {
    var block_list = $(this).find('.checkbox'),
        expend = $(this).find('.checkboxList_expand');

    if (block_list.hasClass('checkbox__hide')) {
      block_list.removeClass('checkbox__hide');
      expend.addClass('checkboxList_expand__open');
    } else {
      block_list.addClass('checkbox__hide');
      expend.removeClass('checkboxList_expand__open');
    }
  });
});
},{}],"ui_kit/form_elements/radiobutton/radiobutton.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/toggle/toggle.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/toggle/toggle.js":[function(require,module,exports) {
$(function () {
  $('.toggle_item_label').on('click', function (e) {
    if ($(this).hasClass('off')) {
      $(this).closest('.toggle').css('border-color', 'rgba(31, 32, 65, 0.25)');
    }

    if ($(this).hasClass('on')) {
      $(this).closest('.toggle').css('border-color', '#BC9CFF');
    }
  });
});
},{}],"ui_kit/form_elements/like/like.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\ui_kit\\form_elements\\like\\favorite_border.svg":[["favorite_border.5c013c23.svg","ui_kit/form_elements/like/favorite_border.svg"],"ui_kit/form_elements/like/favorite_border.svg"],"C:\\Users\\ksu...xa\\Desktop\\2task\\ui_kit\\form_elements\\like\\favorite.svg":[["favorite.8908035f.svg","ui_kit/form_elements/like/favorite.svg"],"ui_kit/form_elements/like/favorite.svg"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/like/like.js":[function(require,module,exports) {
$(function () {
  $('.like').on('click', function (e) {
    var sum = parseInt($(this).find('.like_sum').html());

    if ($(this).hasClass('like__liked')) {
      $(this).removeClass('like__liked');
      $(this).find('.like_ico').removeClass('like__liked');
      $(this).find('.like_sum').removeClass('like__liked');
      $(this).find('.like_sum').html(sum - 1);
    } else {
      $(this).addClass('like__liked');
      $(this).find('.like_ico').addClass('like__liked');
      $(this).find('.like_sum').addClass('like__liked');
      $(this).find('.like_sum').html(sum + 1);
    }
  });
});
},{}],"ui_kit/form_elements/rateBtn/rateBtn.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\ui_kit\\form_elements\\rateBtn\\star_border.svg":[["star_border.c0a94ba1.svg","ui_kit/form_elements/rateBtn/star_border.svg"],"ui_kit/form_elements/rateBtn/star_border.svg"],"C:\\Users\\ksu...xa\\Desktop\\2task\\ui_kit\\form_elements\\rateBtn\\star.svg":[["star.47fe2ff8.svg","ui_kit/form_elements/rateBtn/star.svg"],"ui_kit/form_elements/rateBtn/star.svg"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/rateBtn/rateBtn.js":[function(require,module,exports) {
$(function () {
  $('.rate_star').on('click', function (e) {
    $(this).closest('.rate').find('.rate_star').removeClass('rate_star__active');
    var num = parseInt($(this).attr('id'));

    for (i = 1; i <= num; i++) {
      $(this).closest('.rate').find('#' + i).addClass('rate_star__active');
    }
  });
});
},{}],"ui_kit/form_elements/rangeSlider/rangeSlider.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/rangeSlider/rangeSlider.js":[function(require,module,exports) {
//import {exp1} from '/blocks/demoSlider/sliderM.js'
//import {exp2} from '/blocks/demoSlider/sliderV.js'
//import {exp3} from '/blocks/demoSlider/sliderC.js'
//эта версия файла будет для typescript
(function ($) {
  $.fn.slider = function (options) {
    /** Как настроить слайдер
      	let obj = { //объект с параметрами слайдера
    		idElement : 'idPrice', //задается id элемента, который должен являться слайдером
    		type : 'interval', //три типа: 'interval' (выбирается диапазон), 'from0to' (от 0 до выбранного), 'one' (вибирается одно значение)
    		min : 0, //задается числовой минимум
    		max : 500000, //задается числовой максимум
    		minStart : 50, //непонятно зачем
    		maxStart : 100, //непонятно зачем
    		step : 'no', //задается числовой шаг, либо значение 'no' (нет шага)
    		orientation : 'horizontal', //два типа: 'horizontal', 'vertical'
    		value : 'on', // отображать числовой диапазон над слайдером - 'on', не отображать - 'off'
    		scale : 'on', // отображать шкалу - 'on', не отображать - 'off'
    		scaleStep : 10 // задается числовое количество делений на шкале, либо значение 'default'
     	}
     	run(obj); //запуск слайдера с заданными параметрами в объекте
    		 	//при type : 'one' нет минимального значения, работает по максимальному
     */
    var dataSlider = $.extend({
      //в blocks/searchRoom/searchRoom.pug //значения по умолчанию //model
      idElement: 'idPrice',
      type: 'interval',
      min: 0,
      max: 1000,
      minStart: 150,
      maxStart: 5000,
      step: 1,
      //шаг
      orientation: 'horizontal',
      value: 'on',
      scale: 'on',
      scaleStep: 10 //деления

    }, options);
    var model = {
      width: function width(thisSlider) {
        //console.log('this', thisSlider, dataSlider);
        //console.log('12345-1');
        return thisSlider.find('.rangeSlider#' + dataSlider.idElement).find('.rangeSlider_slider').width();
      },
      sliderBlock: function sliderBlock(thisSlider) {
        //console.log('12345-2', dataSlider.idElement);
        return thisSlider.find('.rangeSlider#' + dataSlider.idElement);
      },
      slider: function slider(thisSlider) {
        //console.log('12345-3');
        return model.sliderBlock(thisSlider).find('.rangeSlider_slider');
      },
      height: function height(thisSlider) {
        var h = model.sliderBlock(thisSlider).height();
        return h;
      },
      ind: function ind(thisSlider) {
        //console.log('12345-4');
        return model.slider(thisSlider).find('.rangeSlider_slider_range'); //"индикатор"
      },
      indWidth: function indWidth(thisSlider) {
        //console.log('12345-5');
        return model.ind(thisSlider).width();
      },
      rangeLeft: function rangeLeft(thisSlider) {
        //console.log('12345-6');
        return model.slider(thisSlider).find('.rangeSlider_slider_left');
      },
      posRangeLeft: function posRangeLeft(thisSlider) {
        //console.log('12345-7');
        return parseInt(model.rangeLeft(thisSlider).css('left'));
      },
      rangeRight: function rangeRight(thisSlider) {
        //console.log('12345-8');
        return model.slider(thisSlider).find('.rangeSlider_slider_right');
      },
      posRangeRight: function posRangeRight(thisSlider) {
        //console.log('12345-9');
        return parseInt(model.rangeRight(thisSlider).css('left'));
      },
      valueMin: function valueMin(thisSlider) {
        //console.log('12345-10');
        return model.rangeLeft(thisSlider).closest('.rangeSlider').find('.rangeSlider_label__min');
      },
      valueMax: function valueMax(thisSlider) {
        //console.log('12345-11');
        return model.rangeRight(thisSlider).closest('.rangeSlider').find('.rangeSlider_label__max');
      },
      masScaleStep: [],
      configItemMin: ".searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmin",
      configItemMax: ".searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmax",
      configItemMinStart: ".searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextminStart",
      configItemMaxStart: ".searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextmaxStart",
      configItemStep: ".searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextstep",
      configItemScaleStep: ".searchRoom2 .sliderConf .sliderConf_block .inputText #inputTextscaleStep",
      configItemRadiobtn: ".searchRoom2 .sliderConf .sliderConf_block .sliderConf_block_item\n\t\t\t\t\t\t.sliderConf_block_item_option .radio "
    };
    var view = {
      range: function range(thisSlider) {
        var posLeft, posRight;
        posRight = model.width(thisSlider) / (dataSlider.max - dataSlider.min) * (dataSlider.maxStart - dataSlider.min); //если мин не 0//model.width(thisSlider) * dataSlider.maxStart / dataSlider.max;

        model.rangeRight(thisSlider).css('left', posRight + 'px');

        switch (dataSlider.type) {
          case 'interval':
            {
              //posLeft = model.width(thisSlider) * dataSlider.minStart / dataSlider.max;
              posLeft = model.width(thisSlider) / (dataSlider.max - dataSlider.min) * (dataSlider.minStart - dataSlider.min); //если мин не 0

              model.rangeLeft(thisSlider).css('left', posLeft + 'px');
              model.ind(thisSlider).css('transform', 'translate(' + posLeft + 'px, 0px)');
              model.ind(thisSlider).css('left', posLeft + 'px');
              model.ind(thisSlider).css('width', posRight - posLeft + 'px');
              break;
            }

          case 'from0to':
            {
              model.ind(thisSlider).css('transform', 'translate(-5px, 0px)');
              model.ind(thisSlider).css('left', '0px');
              model.ind(thisSlider).css('width', posRight + 'px');
              break;
            }

          case 'one':
            {
              //posLeft = model.width(thisSlider) * dataSlider.minStart / dataSlider.max;
              posLeft = model.width(thisSlider) / (dataSlider.max - dataSlider.min) * (dataSlider.minStart - dataSlider.min); //если мин не 0

              model.rangeLeft(thisSlider).css('left', posLeft + 'px');
              model.ind(thisSlider).css('transform', 'translate(' + posLeft + 'px, 0px)');
              model.ind(thisSlider).css('left', posLeft + 'px');
              model.ind(thisSlider).css('width', posRight - posLeft + 'px');
              break;
            }

          default:
            {
              //posLeft = model.width(thisSlider) * dataSlider.minStart / dataSlider.max;
              posLeft = model.width(thisSlider) / (dataSlider.max - dataSlider.min) * (dataSlider.minStart - dataSlider.min); //если мин не 0

              model.rangeLeft(thisSlider).css('left', posLeft + 'px');
              model.ind(thisSlider).css('transform', 'translate(' + posLeft + 'px, 0px)');
              model.ind(thisSlider).css('left', posLeft + 'px');
              model.ind(thisSlider).css('width', posRight - posLeft + 'px');
              break;
            }
        }
      },
      type: function type(thisSlider) {
        switch (dataSlider.type) {
          case 'interval':
            break;

          case 'from0to':
            {
              model.rangeLeft(thisSlider).css('display', 'none');
              model.ind(thisSlider).css('transform', 'translate(' + -5 + 'px, 0px)'); //dataSlider.minStart = dataSlider.min;
              //model.rangeLeft().css('transform','translate(0px, 0px)');
              //controller.writeValueMin(dataSlider.min);

              break;
            }

          case 'one':
            {
              model.sliderBlock(thisSlider).find('.rangeSlider_slider_left').css('display', 'none');
              model.ind(thisSlider).css('display', 'none');
              var spans = model.sliderBlock(thisSlider).find('.rangeSlider_label_Block');
              spans.find('span.rangeSlider_label__min').css('display', 'none');
              spans.find('span.rangeSlider_label__dash').css('display', 'none');
              break;
            }

          default:
            break;
        }
      },
      scale: function scale(thisSlider) {
        switch (dataSlider.scale) {
          case 'on':
            {
              var scaleKol,
                  ch = dataSlider.min,
                  ii,
                  shBlock;

              if (dataSlider.scaleStep > 0) {
                scaleKol = dataSlider.scaleStep;
              } else {
                scaleKol = Math.floor(model.width(thisSlider) / 45);
                dataSlider.scaleStep = scaleKol;
              }

              var scaleWidth = model.width(thisSlider) / scaleKol;

              for (var i = 0; i <= model.width(thisSlider);) {
                ii = Math.floor(i);
                model.slider(thisSlider).append("<div class=\"rangeSlider_slider_scale\">\n\t\t\t\t\t\t\t\t<div class=\"rangeSlider_slider_scale_line\" id=\"scale".concat(ii, "\"></div>\n\t\t\t\t\t\t\t\t<div class=\"rangeSlider_slider_scale_val\"></div>\n\t\t\t\t\t\t\t\t</div>"));
                shBlock = model.slider(thisSlider).find('.rangeSlider_slider_scale_line#scale' + ii).closest('.rangeSlider_slider_scale');
                shBlock.css('left', ii + 'px');
                model.sliderBlock(thisSlider).css('margin-bottom', '35px');
                i = i + scaleWidth;
                shBlock.find('.rangeSlider_slider_scale_val').html(Math.floor(ch));
                ch = ch + (dataSlider.max - dataSlider.min) / scaleKol;
              }

              break;
            }

          case 'off':
            break;

          default:
            break;
        }
      },
      orientation: function orientation(thisSlider) {
        switch (dataSlider.orientation) {
          case 'horizontal':
            {
              model.slider(thisSlider).css('transform', 'rotate(0deg)');
              model.sliderBlock(thisSlider).css('height', 53 + 'px');
              break;
            }

          case 'vertical':
            {
              model.slider(thisSlider).css('transform', 'rotate(90deg) translateX(50%)');
              model.sliderBlock(thisSlider).css('height', model.width(thisSlider) + 75 + 'px');
              model.slider(thisSlider).find('.rangeSlider_slider_scale_val').css('transform', 'rotate(-90deg)');
              break;
            }

          default:
            break;
        }
      },
      value: function value(thisSlider) {
        switch (dataSlider.value) {
          case 'on':
            {
              model.sliderBlock(thisSlider).find('.rangeSlider_label_Block').css('display', 'flex');
              model.sliderBlock(thisSlider).find('.rangeSlider_label__max').html(dataSlider.maxStart);
              var spans = model.sliderBlock(thisSlider).find('.rangeSlider_label_Block');

              switch (dataSlider.type) {
                case 'interval':
                  {
                    model.sliderBlock(thisSlider).find('.rangeSlider_label__min').html(dataSlider.minStart);
                    spans.find('span.rangeSlider_label__min').css('display', 'block');
                    spans.find('span.rangeSlider_label__dash').css('display', 'block');
                    console.log('type=interval', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
                    break;
                  }

                case 'from0to':
                  {
                    model.sliderBlock(thisSlider).find('.rangeSlider_label__min').html(dataSlider.min);
                    spans.find('span.rangeSlider_label__min').css('display', 'block');
                    spans.find('span.rangeSlider_label__dash').css('display', 'block');
                    console.log('type=from0to, ', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
                    break;
                  }

                case 'one':
                  {
                    model.sliderBlock(thisSlider).find('.rangeSlider_label__min').html(dataSlider.minStart);
                    spans.find('span.rangeSlider_label__min').css('display', 'none');
                    spans.find('span.rangeSlider_label__dash').css('display', 'none');
                    console.log('type=one', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
                    break;
                  }

                default:
                  {
                    //interval
                    model.sliderBlock(thisSlider).find('.rangeSlider_label__min').html(dataSlider.minStart);
                    spans.find('span.rangeSlider_label__min').css('display', 'block');
                    spans.find('span.rangeSlider_label__dash').css('display', 'block');
                    console.log('type=intervalDEFAULT', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
                    break;
                  }
              }

              break;
            }

          case 'off':
            model.sliderBlock(thisSlider).find('.rangeSlider_label_Block').css('display', 'none');
            break;

          default:
            break;
        }
      }
    };
    var controller = {
      checkOrientation: function checkOrientation() {
        if (dataSlider.orientation == 'horizontal') {
          return 'x';
        }

        return 'y';
      },
      movie: function movie(thisSlider, range, e, lr) {
        var startPos = parseInt(range.css('left'));
        var indWidth = model.indWidth(thisSlider);

        switch (lr) {
          case 'left':
            {
              model.rangeLeft(thisSlider).css('z-index', '15');
              model.rangeRight(thisSlider).css('z-index', '10');
              break;
            }

          case 'right':
            {
              model.rangeRight(thisSlider).css('z-index', '15');
              model.rangeLeft(thisSlider).css('z-index', '10');
              break;
            }
        }

        controller.moveAt(thisSlider, startPos, lr, e, indWidth);
        $(document).on('mousemove', function (e) {
          controller.moveAt(thisSlider, startPos, lr, e, indWidth);
        });
        $(document).on('mouseup', function (e) {
          $(document).off('mousemove');
          $(document).off('mouseup');
        });
      },
      moveAt: function moveAt(thisSlider, startPos, lr, e, indWidth) {
        var pos;

        switch (controller.checkOrientation()) {
          case 'x':
            {
              if (dataSlider.step == 1) {
                pos = e.pageX - parseInt(model.slider(thisSlider).position().left); //позиция бегунка

                console.log(pos);
                controller.movingRange(thisSlider, lr, startPos, pos, indWidth);
              } else {
                //починить
                masScale = controller.masScale(thisSlider);
                p = e.pageX - parseInt(model.slider(thisSlider).position().left); //позиция бегунка

                console.log("p=".concat(p));

                if ($.inArray(p, masScale) != -1) {
                  pos = e.pageX - parseInt(model.slider(thisSlider).position().left); //позиция бегунка

                  controller.movingRange(thisSlider, lr, startPos, pos, indWidth);
                } else {
                  pos = startPos;
                }

                console.log("pos=".concat(pos));
              }

              break;
            }

          case 'y':
            {
              pos = e.pageY - parseInt(model.slider(thisSlider).offset().top);
              console.log(pos);
              controller.movingRange(thisSlider, lr, startPos, pos, indWidth);
              break;
            }

          default:
            break;
        }

        return pos;
      },
      movingRange: function movingRange(thisSlider, lr, startPos, pos, indWidth) {
        var price,
            step = 0;

        if (pos >= 0 && pos <= model.width(thisSlider)) {
          if (lr == 'left') {
            if (model.posRangeRight(thisSlider) >= pos && dataSlider.type != 'from0to') {
              step = startPos - pos; //model.posRangeLeft(thisSlider);//длина перемещения левого указателя	

              console.log('step:', indWidth, step);
              price = calc(thisSlider, pos);
              model.rangeLeft(thisSlider).css('left', pos + 'px'); //позиция указателей

              model.ind(thisSlider).css('transform', 'translate(' + pos + 'px, 0px)');
              startPos = pos;
              controller.writeValueMin(thisSlider, price);
              controller.configMinChange(price);
              controller.checkDataSliderMin(price);
              console.log('step:', indWidth, step);
              model.ind(thisSlider).css('width', indWidth + step + 'px');
            }
          }

          if (lr == 'right') {
            if (model.posRangeLeft(thisSlider) <= pos) {
              step = pos - startPos; //model.posRangeRight(thisSlider) - startPos;//длина перемещения правого указателя

              price = calc(thisSlider, pos);
              model.rangeRight(thisSlider).css('left', pos + 'px'); //позиция указателей

              controller.writeValueMax(thisSlider, price);
              controller.configMaxChange(price);
              controller.checkDataSliderMax(price);
              console.log('step:', indWidth, step);
              model.ind(thisSlider).css('width', indWidth + step + 'px');
            }
          }
        }

        function calc(thisSlider, pos) {
          var pr = pos / model.width(thisSlider),
              price = ((dataSlider.max - dataSlider.min) * pr + dataSlider.min).toFixed();
          return price;
        }
      },
      clickSlider: function clickSlider(thisSlider) {
        thisSlider.find('.rangeSlider_slider').on('mousedown', function (e) {
          thisSlider.find('.rangeSlider_slider').on('mouseup', function (e) {
            console.log('clickkkkk', model.slider(thisSlider).position().left);
            var pos = e.pageX - parseInt(model.slider(thisSlider).position().left),
                startPos;

            if (dataSlider.step != 1) {
              pos = controller.checkRangeThisStep(thisSlider, pos);
            }

            switch (dataSlider.type) {
              case 'interval':
                {
                  var posL = model.posRangeLeft(thisSlider),
                      posR = model.posRangeRight(thisSlider);

                  if (Math.abs(posL - pos) < Math.abs(posR - pos)) {
                    startPos = model.posRangeLeft(thisSlider);
                    controller.movingRange(thisSlider, 'left', model.posRangeLeft(thisSlider), pos, model.indWidth(thisSlider));
                  } else {
                    startPos = model.posRangeRight(thisSlider);
                    controller.movingRange(thisSlider, 'right', model.posRangeRight(thisSlider), pos, model.indWidth(thisSlider));
                  }

                  break;
                }

              case 'from0to':
                {
                  startPos = model.posRangeRight(thisSlider);
                  controller.movingRange(thisSlider, 'right', model.posRangeRight(thisSlider), pos, model.indWidth(thisSlider));
                  break;
                }

              case 'one':
                {
                  startPos = model.posRangeRight(thisSlider);
                  controller.movingRange(thisSlider, 'right', model.posRangeRight(thisSlider), pos, model.indWidth(thisSlider));
                  break;
                }
            } //controller.movingRange(thisSlider, lr, startPos, pos, indWidth);


            thisSlider.find('.rangeSlider_slider').off('mouseup');
          });
        });
      },
      checkRangeThisStep: function checkRangeThisStep(thisSlider, pos) {
        var p = 0,
            len = model.width(thisSlider);
        masScale = controller.masScale(thisSlider);

        for (var i = 0; i < masScale.length; i++) {
          var lenL = Math.abs(masScale[i] - pos),
              lenR = Math.abs(masScale[i + 1] - pos);

          if (lenL < len) {
            p = masScale[i];
            len = lenL;
          } else if (lenR < len) {
            p = masScale[i + 1];
            len = lenR;
          }
        }

        return p;
      },
      masScale: function masScale(thisSlider) {
        var sumSegments = (dataSlider.max - dataSlider.min) / dataSlider.step,
            w1 = model.width(thisSlider) / (dataSlider.max - dataSlider.min),
            //одно деление
        w = w1 * dataSlider.step,
            //длина шага
        masScale = []; //console.log(`model.width=${model.width(thisSlider)}, dataSlider.min=${dataSlider.min}, dataSlider.max=${dataSlider.max}, dataSlider.step=${dataSlider.step}`);
        //console.log(`sumSegments=${sumSegments}, w1=${w1}, w=${w}, masScale=${masScale}`);

        for (var i = 0; i <= sumSegments; i++) {
          masScale[i] = parseInt(w * i);
        } //console.log(`masScale=${masScale}`);


        return masScale;
      },
      writeValueMin: function writeValueMin(thisSlider, val) {
        model.valueMin(thisSlider).html(val);
      },
      writeValueMax: function writeValueMax(thisSlider, val) {
        model.valueMax(thisSlider).html(val);
      },
      checkDataSliderMin: function checkDataSliderMin(val) {
        dataSlider.minStart = val;
      },
      checkDataSliderMax: function checkDataSliderMax(val) {
        dataSlider.maxStart = val;
      },
      checkMinMaxStart: function checkMinMaxStart() {
        if (dataSlider.minStart < dataSlider.min) {
          dataSlider.minStart = dataSlider.min;
        }

        if (dataSlider.maxStart > dataSlider.max) {
          dataSlider.maxStart = dataSlider.max;
        }

        if (dataSlider.minStart > dataSlider.max) {
          dataSlider.minStart = dataSlider.max;
        }

        if (dataSlider.maxStart < dataSlider.min) {
          dataSlider.maxStart = dataSlider.min;
        }
      },
      configCheckStart: function configCheckStart(thisSlider) {
        model.sliderBlock(thisSlider).find('.rangeSlider_label__min').html(dataSlider.minStart);
        model.sliderBlock(thisSlider).find('.rangeSlider_label__max').html(dataSlider.maxStart);
        var typeID,
            orientationID,
            valueID,
            scaleID,
            id = dataSlider.idElement.substr(-1);
        $(model.configItemMin + id).val(dataSlider.min);
        $(model.configItemMax + id).val(dataSlider.max);
        $(model.configItemMinStart + id).val(dataSlider.minStart);
        $(model.configItemMaxStart + id).val(dataSlider.maxStart);
        $(model.configItemStep + id).val(dataSlider.step);
        $(model.configItemScaleStep + id).val(dataSlider.scaleStep);

        switch (dataSlider.type) {
          case 'interval':
            typeID = '1';
            break;

          case 'from0to':
            typeID = '2';
            break;

          case 'one':
            typeID = '3';
            break;

          default:
            typeID = '1';
        }

        switch (dataSlider.orientation) {
          case 'horizontal':
            orientationID = '1';
            break;

          case 'vertical':
            orientationID = '2';
            break;

          default:
            orientationID = '1';
        }

        switch (dataSlider.value) {
          case 'on':
            valueID = '1';
            break;

          case 'off':
            valueID = '2';
            break;

          default:
            valueID = '1';
        }

        switch (dataSlider.scale) {
          case 'on':
            scaleID = '1';
            break;

          case 'off':
            scaleID = '2';
            break;

          default:
            scaleID = '1';
        }

        thisSlider.find(".radio_input[name=rbGroopType".concat(id, "]#rb").concat(typeID, "srb").concat(id)).prop('checked', true);
        thisSlider.find(".radio_input[name=rbGroopOrientation".concat(id, "]#rb").concat(orientationID, "orient").concat(id)).prop('checked', true);
        thisSlider.find(".radio_input[name=rbGroopValue".concat(id, "]#rb").concat(valueID, "value").concat(id)).prop('checked', true);
        thisSlider.find(".radio_input[name=rbGroopScale".concat(id, "]#rb").concat(scaleID, "scale").concat(id)).prop('checked', true);
      },
      configMinChange: function configMinChange(val) {
        if (val < dataSlider.min) {
          val = dataSlider.min;
        }

        $(".searchRoom2 .sliderConf .sliderConf_block \n\t\t\t\t\t.inputText #inputTextminStart" + dataSlider.idElement.substr(-1)).val(val);
      },
      configMaxChange: function configMaxChange(val) {
        if (val > dataSlider.max) {
          val = dataSlider.max;
        }

        $(".searchRoom2 .sliderConf .sliderConf_block \n\t\t\t\t\t.inputText #inputTextmaxStart" + dataSlider.idElement.substr(-1)).val(val);
      },
      configCheck: function configCheck(thisSlider) {
        //console.log('this', thisSlider, dataSlider);
        //$('.searchRoom2 .sliderConf .checkbox .checkbox_item .checkbox_item_input').on('click', function(e) {
        thisSlider.find('.sliderConf .checkbox .checkbox_item .checkbox_item_input').on('click', function (e) {
          console.log('numSlider:', $(this), $(this).attr('id').substr(-1));

          if ($(this).prop('checked')) {
            $(this).closest('.sliderConf').find('.sliderConf_block').css('display', 'block');
          } else {
            $(this).closest('.sliderConf').find('.sliderConf_block').css('display', 'none');
          } //$('.searchRoom2 .sliderConf .sliderConf_block .inputText_input').on('blur', function(e) {


          thisSlider.find('.sliderConf .sliderConf_block .inputText_input').on('blur', function (e) {
            var //num = $(this).closest('.searchRoom_filters_diapason').find('.rangeSlider').attr('id').substr(-1),
            idStr = $(this).attr('id'),
                //sliObj = s[num-1],
            id = dataSlider.idElement.substr(-1),
                min,
                max,
                minStart,
                maxStart,
                step,
                scaleStep;

            if (idStr.indexOf('min', 0) != -1) {
              min = Number.parseInt($(model.configItemMin + id).val());
              clear(id);
              dataSlider.min = min;
            }

            if (idStr.indexOf('max', 0) != -1) {
              max = Number.parseInt($(model.configItemMax + id).val());
              clear(id);
              dataSlider.max = max;
            }

            if (idStr.indexOf('minStart', 0) != -1) {
              minStart = Number.parseInt($(model.configItemMinStart + id).val());
              clear(id);
              dataSlider.minStart = minStart;
            }

            if (idStr.indexOf('maxStart', 0) != -1) {
              maxStart = Number.parseInt($(model.configItemMaxStart + id).val());
              clear(id);
              dataSlider.maxStart = maxStart;
            }

            if (idStr.indexOf('scaleStep', 0) != -1) {
              scaleStep = Number.parseInt($(model.configItemScaleStep + id).val());
              clear(id);
              dataSlider.scaleStep = scaleStep;
              $('.searchRoom2 .slider' + id).slider(dataSlider);
            }

            if (idStr.indexOf('step', 0) != -1) {
              step = Number.parseInt($(model.configItemStep + id).val());
              clear(id);
              dataSlider.step = step;
            }

            controller.checkMinMaxStart(thisSlider);
            $('.searchRoom2 .slider' + id).slider(dataSlider);
          }); //$('.searchRoom2 .sliderConf .sliderConf_block .radio_input').on('click', function(e) {

          thisSlider.find('.sliderConf .sliderConf_block .radio_input').on('click', function (e) {
            var id = dataSlider.idElement.substr(-1);
            var configItemType = model.configItemRadiobtn + ".radio_input[name=rbGroopType".concat(id, "]:checked"),
                configItemOrientation = model.configItemRadiobtn + ".radio_input[name=rbGroopOrientation".concat(id, "]:checked"),
                configItemValue = model.configItemRadiobtn + ".radio_input[name=rbGroopValue".concat(id, "]:checked"),
                configItemScale = model.configItemRadiobtn + ".radio_input[name=rbGroopScale".concat(id, "]:checked");
            var idStr = $(this).attr('name'),
                type,
                orientation,
                value,
                scale,
                typeId,
                orientationID,
                valueID,
                scaleID;

            if (idStr.indexOf('Type', 0) != -1) {
              typeId = $(configItemType).attr('id').substr(2, 1);

              switch (typeId) {
                case '1':
                  type = 'interval';
                  break;

                case '2':
                  {
                    type = 'from0to';
                    dataSlider.minStart = dataSlider.min;
                    break;
                  }

                case '3':
                  type = 'one';
                  break;

                default:
                  type = 'interval';
              }

              clear(id);
              dataSlider.type = type;
            }

            if (idStr.indexOf('Orientation', 0) != -1) {
              orientationID = $(configItemOrientation).attr('id').substr(2, 1);

              switch (orientationID) {
                case '1':
                  orientation = 'horizontal';
                  break;

                case '2':
                  orientation = 'vertical';
                  break;

                default:
                  orientation = 'horizontal';
              }

              clear(id);
              dataSlider.orientation = orientation;
            }

            if (idStr.indexOf('Value', 0) != -1) {
              valueID = $(configItemValue).attr('id').substr(2, 1);

              switch (valueID) {
                case '1':
                  value = 'on';
                  break;

                case '2':
                  value = 'off';
                  break;

                default:
                  value = 'on';
              }

              clear(id);
              dataSlider.value = value;
            }

            if (idStr.indexOf('Scale', 0) != -1) {
              scaleID = $(configItemScale).attr('id').substr(2, 1);

              switch (scaleID) {
                case '1':
                  scale = 'on';
                  break;

                case '2':
                  scale = 'off';
                  break;

                default:
                  scale = 'on';
              }

              clear(id);
              dataSlider.scale = scale;
            } //$('.searchRoom2 .slider'+id).slider(dataSlider);


            thisSlider.slider(dataSlider);
          });
        });

        function clear(id) {
          var x = $('.searchRoom2 .rangeSlider#idPrice' + id + ' .rangeSlider_slider .rangeSlider_slider_scale');
          x.remove();
          $('.searchRoom2 .rangeSlider#idPrice' + id + ' .rangeSlider_slider_left').css('display', 'inline-block');
          $('.searchRoom2 .rangeSlider#idPrice' + id + ' .rangeSlider_slider_range').css('display', 'inline-block');
        }
      }
    }; //console.log('this', this, dataSlider, 'proverka:', model.width(this), model.sliderBlock(this));

    var thisSlider = this;
    /*controller.checkMinMaxStart(this);//определили текущие мин и мах
    controller.configCheckStart(this);//min-max value
    		view.type(this);
    view.scale(this);
    view.orientation(this);
    view.value(this);
    
    view.range(this);
    controller.clickSlider(this);
    controller.configCheck(this);
    
    
    model.rangeLeft(thisSlider).on('mousedown', function(e) {
    	controller.movie(thisSlider, model.rangeLeft(thisSlider), e, 'left');
    });
    		model.rangeRight(thisSlider).on('mousedown', function(e) {
    	controller.movie(thisSlider, model.rangeRight(thisSlider), e, 'right');
    });*/

    return this.each(function () {}), dataSlider;
  };
})(jQuery);

$(function () {
  /*let s = [ $('.searchRoom2 .slider1').slider({
  	idElement : 'idPrice1',
  	type : 'interval',
  	min : 10,
  	max : 200,
  	minStart : 50,
  	maxStart : 100,
  	step : 20,
  	orientation : 'horizontal',
  	value : 'on',
  	scale : 'on',
  	scaleStep : 20
  }),
  $('.searchRoom2 .slider2').slider({
  	idElement : 'idPrice2',
  	type : 'from0to',
  	min : 0,
  	max : 10,
  	minStart : 5,
  	maxStart : 7,
  	step : 5,
  	orientation : 'horizontal',//'vertical',
  	value : 'on',
  	scale : 'off',
  	scaleStep : 10
  }),
  $('.searchRoom2 .slider3').slider({
  	idElement : 'idPrice3',
  	min : 100,
  	max : 40000,
  	value : 'off',
  	scale : 'on',
  }),
  
  $('.searchRoom2 .slider4').slider({
  	idElement : 'idPrice4',
  	type : 'one',
  	min : 0,
  	max : 5000,
  	maxStart : 2000,
  }),
  $('.searchRoom2 .slider5').slider({
  	idElement : 'idPrice5',
  }) ];*/
});
},{}],"ui_kit/form_elements/link/link.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/pagination/pagination.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\project\\img\\arrow_white.svg":[["arrow_white.a18144f4.svg","project/img/arrow_white.svg"],"project/img/arrow_white.svg"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/list/list.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/info/info.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/form_elements/comment/comment.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/color_type/color_type.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/header_footer/header.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\project\\img\\expand_more.svg":[["expand_more.a21f2215.svg","project/img/expand_more.svg"],"project/img/expand_more.svg"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/header_footer/footer.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/header_footer/header_footer.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/cards/cards.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/cards/formSearchNum/formSearchNum.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/cards/formSearchNum/formSearchNum.js":[function(require,module,exports) {
$(function () {
  $('.formSearchNum').find('.formSearchNum_choiceDate .blockDropdown_dropdown__date').on('click', function (e) {
    var calendar = $(this).closest('.formSearchNum').find('.dropdownItemCalendar_block');

    if (calendar.hasClass('hide')) {
      calendar.removeClass('hide');
    } else {
      calendar.addClass('hide');
    }
  });
  /*$('.calendar').on('click', function(e) {
  	console.log('active',$('.pignose-calendar-unit-active'));
  	if ($('.pignose-calendar-unit-active').length = 1){
  		$('.pignose-calendar-unit-active a').css('background','linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)')
  	}else{
  		$('.pignose-calendar-unit-active a').css('background','linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)')
  	}
  });*/

  /*$('.formSearchNum').find('.blockDropdown_dropdown__whisItems').on('click', function(e) {
  	var block_list = $(this).closest('.formSearchNum').find('.blockDropdown_dropdownItems');
  	dropdown_expend($(this),block_list);
  });*/
});

function dropdown_expend(expend, block) {
  input = expend.closest('.blockDropdown_dropdown');

  if (block.hasClass('blockDropdown_dropdownItems__hide')) {
    block.removeClass('blockDropdown_dropdownItems__hide');
    input.addClass('blockDropdown_dropdown__itemsShow'); //expend.css('transform','rotate(180deg)');
  } else {
    block.addClass('blockDropdown_dropdownItems__hide');
    input.removeClass('blockDropdown_dropdown__itemsShow'); //expend.css('transform','rotate(360deg)');
  }
}
},{}],"ui_kit/cards/calendar/calendar.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./arrow_forward.svg":[["arrow_forward.274c66e3.svg","ui_kit/cards/calendar/arrow_forward.svg"],"ui_kit/cards/calendar/arrow_forward.svg"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/cards/calendar/calendar.js":[function(require,module,exports) {
$(document).ready(function () {
  $('.calendar').pignoseCalendar({
    select: function select(date, context) {
      console.log(date[0]);
    }
  });
  $('.calendar').pignoseCalendar({
    week: 1,
    lang: 'ru',
    multiple: true //modal: true

  });
});
},{}],"ui_kit/cards/formRegistration/formRegistration.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/cards/formReservation/formReservation.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/cards/formReservation/formReservation.js":[function(require,module,exports) {
$(function () {
  $('.formReservation').find('.formReservation_block__flexcolumn .blockDropdown_dropdown__date').on('click', function (e) {
    var calendar = $(this).closest('.formReservation').find('.dropdownItemCalendar_block');

    if (calendar.hasClass('hide')) {
      calendar.removeClass('hide');
    } else {
      calendar.addClass('hide');
    }
  });
  /*$('.formReservation').find('.blockDropdown_dropdown__whisItems').on('click', function(e) {
  	var block_list = $(this).closest('.formReservation').find('.blockDropdown_dropdownItems');
  	dropdown_expend($(this),block_list);
  });*/
});

function dropdown_expend(expend, block) {
  input = expend.closest('.blockDropdown_dropdown');

  if (block.hasClass('blockDropdown_dropdownItems__hide')) {
    block.removeClass('blockDropdown_dropdownItems__hide');
    input.addClass('blockDropdown_dropdown__itemsShow'); //expend.css('transform','rotate(180deg)');
  } else {
    block.addClass('blockDropdown_dropdownItems__hide');
    input.removeClass('blockDropdown_dropdown__itemsShow'); //expend.css('transform','rotate(360deg)');
  }
}
},{}],"ui_kit/cards/formSignIn/formSignIn.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/cards/cardRoom/cardRoom.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./img\\image1.png":[["image1.ef638947.png","ui_kit/cards/cardRoom/img/image1.png"],"ui_kit/cards/cardRoom/img/image1.png"],"./img\\image2.png":[["image2.f9d18132.png","ui_kit/cards/cardRoom/img/image2.png"],"ui_kit/cards/cardRoom/img/image2.png"],"./img\\image3.png":[["image3.7518b053.png","ui_kit/cards/cardRoom/img/image3.png"],"ui_kit/cards/cardRoom/img/image3.png"],"./img\\image4.png":[["image4.d1c098cf.png","ui_kit/cards/cardRoom/img/image4.png"],"ui_kit/cards/cardRoom/img/image4.png"],"./img\\image5.png":[["image5.baa23afc.png","ui_kit/cards/cardRoom/img/image5.png"],"ui_kit/cards/cardRoom/img/image5.png"],"./img\\image6.png":[["image6.3023dd6a.png","ui_kit/cards/cardRoom/img/image6.png"],"ui_kit/cards/cardRoom/img/image6.png"],"./img\\image7.png":[["image7.2f5dda47.png","ui_kit/cards/cardRoom/img/image7.png"],"ui_kit/cards/cardRoom/img/image7.png"],"./img\\image8.png":[["image8.5baa3ba9.png","ui_kit/cards/cardRoom/img/image8.png"],"ui_kit/cards/cardRoom/img/image8.png"],"./img\\image9.png":[["image9.020dea3d.png","ui_kit/cards/cardRoom/img/image9.png"],"ui_kit/cards/cardRoom/img/image9.png"],"./img\\image10.png":[["image10.95570058.png","ui_kit/cards/cardRoom/img/image10.png"],"ui_kit/cards/cardRoom/img/image10.png"],"./img\\image11.png":[["image11.fb59fa58.png","ui_kit/cards/cardRoom/img/image11.png"],"ui_kit/cards/cardRoom/img/image11.png"],"./img\\image12.png":[["image12.b6595b4b.png","ui_kit/cards/cardRoom/img/image12.png"],"ui_kit/cards/cardRoom/img/image12.png"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"ui_kit/cards/cardRoom/cardRoom.js":[function(require,module,exports) {
$(function () {
  kol = $('.cardRoom .cardRoom_image').length;

  for (i = 1; i <= kol; i++) {
    $('.cardRoom').find('#' + i + '.cardRoom_image').addClass('images' + i);
  }
});
},{}],"blocks/landingPage/landingPage.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\project\\img\\image3.png":[["image3.aef0c0b6.png","project/img/image3.png"],"project/img/image3.png"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"blocks/searchRoom/searchRoom.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\project\\img\\arrow_white.svg":[["arrow_white.a18144f4.svg","project/img/arrow_white.svg"],"project/img/arrow_white.svg"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"blocks/registration/registration.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\project\\img\\image4.1.png":[["image4.1.d5106c45.png","project/img/image4.1.png"],"project/img/image4.1.png"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"blocks/signIn/signIn.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\project\\img\\image4.1.png":[["image4.1.d5106c45.png","project/img/image4.1.png"],"project/img/image4.1.png"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"blocks/detailsRoom/detailsRoom.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\blocks\\detailsRoom\\image.png":[["image.402730ff.png","blocks/detailsRoom/image.png"],"blocks/detailsRoom/image.png"],"C:\\Users\\ksu...xa\\Desktop\\2task\\blocks\\detailsRoom\\image2.png":[["image2.bed7304a.png","blocks/detailsRoom/image2.png"],"blocks/detailsRoom/image2.png"],"C:\\Users\\ksu...xa\\Desktop\\2task\\blocks\\detailsRoom\\image3.png":[["image3.82776acf.png","blocks/detailsRoom/image3.png"],"blocks/detailsRoom/image3.png"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"blocks/demoSlider/demoSlider.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\Users\\ksu...xa\\Desktop\\2task\\project\\img\\arrow_white.svg":[["arrow_white.a18144f4.svg","project/img/arrow_white.svg"],"project/img/arrow_white.svg"],"_css_loader":"node_modules/parcel/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("/project/font/fonts.css");

require("/project/style/styles.scss");

require("/ui_kit/form_elements/form_elements.scss");

require("/ui_kit/form_elements/inputText/inputText.scss");

require("/ui_kit/form_elements/dropdown/dropdown.scss");

require("/ui_kit/form_elements/dropdown/dropdown.js");

require("/ui_kit/form_elements/btn/btn.scss");

require("/ui_kit/form_elements/checkbox/checkbox.scss");

require("/ui_kit/form_elements/checkbox/checkboxList.js");

require("/ui_kit/form_elements/radiobutton/radiobutton.scss");

require("/ui_kit/form_elements/toggle/toggle.scss");

require("/ui_kit/form_elements/toggle/toggle.js");

require("/ui_kit/form_elements/like/like.scss");

require("/ui_kit/form_elements/like/like.js");

require("/ui_kit/form_elements/rateBtn/rateBtn.scss");

require("/ui_kit/form_elements/rateBtn/rateBtn.js");

require("/ui_kit/form_elements/rangeSlider/rangeSlider.scss");

require("/ui_kit/form_elements/rangeSlider/rangeSlider.js");

require("/ui_kit/form_elements/link/link.scss");

require("/ui_kit/form_elements/pagination/pagination.scss");

require("/ui_kit/form_elements/list/list.scss");

require("/ui_kit/form_elements/info/info.scss");

require("/ui_kit/form_elements/comment/comment.scss");

require("/ui_kit/color_type/color_type.scss");

require("/ui_kit/header_footer/header.scss");

require("/ui_kit/header_footer/footer.scss");

require("/ui_kit/header_footer/header_footer.scss");

require("/ui_kit/cards/cards.scss");

require("/ui_kit/cards/formSearchNum/formSearchNum.scss");

require("/ui_kit/cards/formSearchNum/formSearchNum.js");

require("/ui_kit/cards/calendar/calendar.scss");

require("/ui_kit/cards/calendar/calendar.js");

require("/ui_kit/cards/formRegistration/formRegistration.scss");

require("/ui_kit/cards/formReservation/formReservation.scss");

require("/ui_kit/cards/formReservation/formReservation.js");

require("/ui_kit/cards/formSignIn/formSignIn.scss");

require("/ui_kit/cards/cardRoom/cardRoom.scss");

require("/ui_kit/cards/cardRoom/cardRoom.js");

require("/blocks/landingPage/landingPage.scss");

require("/blocks/searchRoom/searchRoom.scss");

require("/blocks/registration/registration.scss");

require("/blocks/signIn/signIn.scss");

require("/blocks/detailsRoom/detailsRoom.scss");

require("/blocks/demoSlider/demoSlider.scss");
},{"/project/font/fonts.css":"project/font/fonts.css","/project/style/styles.scss":"project/style/styles.scss","/ui_kit/form_elements/form_elements.scss":"ui_kit/form_elements/form_elements.scss","/ui_kit/form_elements/inputText/inputText.scss":"ui_kit/form_elements/inputText/inputText.scss","/ui_kit/form_elements/dropdown/dropdown.scss":"ui_kit/form_elements/dropdown/dropdown.scss","/ui_kit/form_elements/dropdown/dropdown.js":"ui_kit/form_elements/dropdown/dropdown.js","/ui_kit/form_elements/btn/btn.scss":"ui_kit/form_elements/btn/btn.scss","/ui_kit/form_elements/checkbox/checkbox.scss":"ui_kit/form_elements/checkbox/checkbox.scss","/ui_kit/form_elements/checkbox/checkboxList.js":"ui_kit/form_elements/checkbox/checkboxList.js","/ui_kit/form_elements/radiobutton/radiobutton.scss":"ui_kit/form_elements/radiobutton/radiobutton.scss","/ui_kit/form_elements/toggle/toggle.scss":"ui_kit/form_elements/toggle/toggle.scss","/ui_kit/form_elements/toggle/toggle.js":"ui_kit/form_elements/toggle/toggle.js","/ui_kit/form_elements/like/like.scss":"ui_kit/form_elements/like/like.scss","/ui_kit/form_elements/like/like.js":"ui_kit/form_elements/like/like.js","/ui_kit/form_elements/rateBtn/rateBtn.scss":"ui_kit/form_elements/rateBtn/rateBtn.scss","/ui_kit/form_elements/rateBtn/rateBtn.js":"ui_kit/form_elements/rateBtn/rateBtn.js","/ui_kit/form_elements/rangeSlider/rangeSlider.scss":"ui_kit/form_elements/rangeSlider/rangeSlider.scss","/ui_kit/form_elements/rangeSlider/rangeSlider.js":"ui_kit/form_elements/rangeSlider/rangeSlider.js","/ui_kit/form_elements/link/link.scss":"ui_kit/form_elements/link/link.scss","/ui_kit/form_elements/pagination/pagination.scss":"ui_kit/form_elements/pagination/pagination.scss","/ui_kit/form_elements/list/list.scss":"ui_kit/form_elements/list/list.scss","/ui_kit/form_elements/info/info.scss":"ui_kit/form_elements/info/info.scss","/ui_kit/form_elements/comment/comment.scss":"ui_kit/form_elements/comment/comment.scss","/ui_kit/color_type/color_type.scss":"ui_kit/color_type/color_type.scss","/ui_kit/header_footer/header.scss":"ui_kit/header_footer/header.scss","/ui_kit/header_footer/footer.scss":"ui_kit/header_footer/footer.scss","/ui_kit/header_footer/header_footer.scss":"ui_kit/header_footer/header_footer.scss","/ui_kit/cards/cards.scss":"ui_kit/cards/cards.scss","/ui_kit/cards/formSearchNum/formSearchNum.scss":"ui_kit/cards/formSearchNum/formSearchNum.scss","/ui_kit/cards/formSearchNum/formSearchNum.js":"ui_kit/cards/formSearchNum/formSearchNum.js","/ui_kit/cards/calendar/calendar.scss":"ui_kit/cards/calendar/calendar.scss","/ui_kit/cards/calendar/calendar.js":"ui_kit/cards/calendar/calendar.js","/ui_kit/cards/formRegistration/formRegistration.scss":"ui_kit/cards/formRegistration/formRegistration.scss","/ui_kit/cards/formReservation/formReservation.scss":"ui_kit/cards/formReservation/formReservation.scss","/ui_kit/cards/formReservation/formReservation.js":"ui_kit/cards/formReservation/formReservation.js","/ui_kit/cards/formSignIn/formSignIn.scss":"ui_kit/cards/formSignIn/formSignIn.scss","/ui_kit/cards/cardRoom/cardRoom.scss":"ui_kit/cards/cardRoom/cardRoom.scss","/ui_kit/cards/cardRoom/cardRoom.js":"ui_kit/cards/cardRoom/cardRoom.js","/blocks/landingPage/landingPage.scss":"blocks/landingPage/landingPage.scss","/blocks/searchRoom/searchRoom.scss":"blocks/searchRoom/searchRoom.scss","/blocks/registration/registration.scss":"blocks/registration/registration.scss","/blocks/signIn/signIn.scss":"blocks/signIn/signIn.scss","/blocks/detailsRoom/detailsRoom.scss":"blocks/detailsRoom/detailsRoom.scss","/blocks/demoSlider/demoSlider.scss":"blocks/demoSlider/demoSlider.scss"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59773" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/2task.e31bb0bc.js.map