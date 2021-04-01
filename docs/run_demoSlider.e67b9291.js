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
})({"blocks/demoSlider/demoSlider_MVC.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller = exports.View = exports.Model = void 0;

var Model =
/** @class */
function () {
  function Model() {
    this.masScaleStep = [];
    this.configItemMin = ".sliderConf .sliderConf_block .inputText #inputTextmin";
    this.configItemMax = ".sliderConf .sliderConf_block .inputText #inputTextmax";
    this.configItemMinStart = ".sliderConf .sliderConf_block .inputText #inputTextminStart";
    this.configItemMaxStart = ".sliderConf .sliderConf_block .inputText #inputTextmaxStart";
    this.configItemStep = ".sliderConf .sliderConf_block .inputText #inputTextstep";
    this.configItemScaleStep = ".sliderConf .sliderConf_block .inputText #inputTextscaleStep";
    this.configItemRadiobtn = ".sliderConf .sliderConf_block .sliderConf_block_item\n\t\t\t\t\t\t.sliderConf_block_item_option .radio ";
  }

  Model.prototype.width = function (thisSlider, dataSliderID) {
    return thisSlider.querySelector('.rangeSlider#' + dataSliderID + ' .rangeSlider_slider').clientWidth;
  };

  Model.prototype.sliderBlock = function (thisSlider, dataSliderID) {
    return thisSlider.querySelector('.rangeSlider#' + dataSliderID);
  };

  Model.prototype.slider = function (thisSlider, dataSliderID) {
    return this.sliderBlock(thisSlider, dataSliderID).querySelector('.rangeSlider_slider');
  };

  Model.prototype.height = function (thisSlider, dataSliderID) {
    //const h = model.sliderBlock(thisSlider).height();
    var h = this.sliderBlock(thisSlider, dataSliderID).clientHeight;
    return h;
  };

  Model.prototype.ind = function (thisSlider, dataSliderID) {
    return this.slider(thisSlider, dataSliderID).querySelector('.rangeSlider_slider_range');
  };

  Model.prototype.indWidth = function (thisSlider, dataSliderID) {
    return this.ind(thisSlider, dataSliderID).clientWidth; //return model.ind(thisSlider).width();
  };

  Model.prototype.rangeLeft = function (thisSlider, dataSliderID) {
    return this.slider(thisSlider, dataSliderID).querySelector('.rangeSlider_slider_left');
  };

  Model.prototype.posRangeLeft = function (thisSlider, dataSliderID) {
    return parseInt(getComputedStyle(this.rangeLeft(thisSlider, dataSliderID)).left);
  };

  Model.prototype.rangeRight = function (thisSlider, dataSliderID) {
    return this.slider(thisSlider, dataSliderID).querySelector('.rangeSlider_slider_right');
  };

  Model.prototype.posRangeRight = function (thisSlider, dataSliderID) {
    return parseInt(getComputedStyle(this.rangeRight(thisSlider, dataSliderID)).left);
  };

  Model.prototype.valueMin = function (thisSlider) {
    return thisSlider.querySelector('.rangeSlider_label__min');
  };

  Model.prototype.valueMax = function (thisSlider) {
    return thisSlider.querySelector('.rangeSlider_label__max');
  };

  return Model;
}();

exports.Model = Model;

var View =
/** @class */
function () {
  function View() {}

  View.prototype.range = function (thisSlider, dataSlider, model) {
    var posLeft, posRight;
    posRight = model.width(thisSlider, dataSlider.idElement) / (dataSlider.max - dataSlider.min) * (dataSlider.maxStart - dataSlider.min); //если мин не 0//model.width(thisSlider) * dataSlider.maxStart / dataSlider.max;

    model.rangeRight(thisSlider, dataSlider.idElement).style.left = posRight + 'px';

    switch (dataSlider.type) {
      case 'interval':
        {
          posLeft = model.width(thisSlider, dataSlider.idElement) / (dataSlider.max - dataSlider.min) * (dataSlider.minStart - dataSlider.min); //если мин не 0

          model.rangeLeft(thisSlider, dataSlider.idElement).style.left = posLeft + 'px';
          model.ind(thisSlider, dataSlider.idElement).style.transform = 'translateX(' + posLeft + 'px)'; // css('transform','translate('+posLeft+'px, 0px)');

          model.ind(thisSlider, dataSlider.idElement).style.left = posLeft + 'px';
          model.ind(thisSlider, dataSlider.idElement).style.width = posRight - posLeft + 'px';
          break;
        }

      case 'from0to':
        {
          model.rangeLeft(thisSlider, dataSlider.idElement).style.left = '0px';
          model.ind(thisSlider, dataSlider.idElement).style.transform = 'translateX(-5px)'; // css('transform','translate(-5px, 0px)');

          model.ind(thisSlider, dataSlider.idElement).style.left = '0px';
          model.ind(thisSlider, dataSlider.idElement).style.width = posRight + 'px';
          break;
        }

      case 'one':
        {
          posLeft = model.width(thisSlider, dataSlider.idElement) / (dataSlider.max - dataSlider.min) * (dataSlider.minStart - dataSlider.min); //если мин не 0

          model.rangeLeft(thisSlider, dataSlider.idElement).style.left = posLeft + 'px';
          model.ind(thisSlider, dataSlider.idElement).style.transform = 'translateX(' + posLeft + 'px)'; // css('transform','translate('+posLeft+'px, 0px)');

          model.ind(thisSlider, dataSlider.idElement).style.left = posLeft + 'px';
          model.ind(thisSlider, dataSlider.idElement).style.width = posRight - posLeft + 'px';
          break;
        }

      default:
        {
          posLeft = model.width(thisSlider, dataSlider.idElement) / (dataSlider.max - dataSlider.min) * (dataSlider.minStart - dataSlider.min); //если мин не 0

          model.rangeLeft(thisSlider, dataSlider.idElement).style.left = posLeft + 'px';
          model.ind(thisSlider, dataSlider.idElement).style.transform = 'translateX(' + posLeft + 'px)'; // css('transform','translate('+posLeft+'px, 0px)');

          model.ind(thisSlider, dataSlider.idElement).style.left = posLeft + 'px';
          model.ind(thisSlider, dataSlider.idElement).style.width = posRight - posLeft + 'px';
          break;
        }
    }
  };

  View.prototype.type = function (thisSlider, dataSlider, model) {
    switch (dataSlider.type) {
      case 'interval':
        break;
        model.rangeLeft(thisSlider, dataSlider.idElement).style.display = 'block';
        model.rangeLeft(thisSlider, dataSlider.idElement).style.transform = 'translate(' + model.posRangeLeft(thisSlider, dataSlider.idElement) + 'px, 0px)';
        model.ind(thisSlider, dataSlider.idElement).style.display = 'block';
        model.ind(thisSlider, dataSlider.idElement).style.transform = 'translate(' + model.posRangeLeft(thisSlider, dataSlider.idElement) + 'px, 0px)';
        model.ind(thisSlider, dataSlider.idElement).style.width = model.posRangeRight(thisSlider, dataSlider.idElement) - model.posRangeLeft(thisSlider, dataSlider.idElement);
        var spans = model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block');
        spans.querySelector('span.rangeSlider_label__min').style.display = 'block';
        spans.querySelector('span.rangeSlider_label__dash').style.display = 'block';
        break;

      case 'from0to':
        {
          model.rangeLeft(thisSlider, dataSlider.idElement).style.display = 'none';
          model.ind(thisSlider, dataSlider.idElement).style.transform = 'translate(' + -5 + 'px, 0px)';
          model.ind(thisSlider, dataSlider.idElement).style.width = model.posRangeRight(thisSlider, dataSlider.idElement);
          var spans_1 = model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block'); //spans.querySelector('span.rangeSlider_label__min').style.display = 'block';
          //spans.querySelector('span.rangeSlider_label__dash').style.display = 'block';

          break;
        }

      case 'one':
        {
          model.rangeLeft(thisSlider, dataSlider.idElement).style.display = 'none';
          model.ind(thisSlider, dataSlider.idElement).style.display = 'none';
          var spans_2 = model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block');
          spans_2.querySelector('span.rangeSlider_label__min').style.display = 'none';
          spans_2.querySelector('span.rangeSlider_label__dash').style.display = 'none';
          break;
        }

      default:
        break;
    }
  };

  View.prototype.scale = function (thisSlider, dataSlider, model) {
    switch (dataSlider.scale) {
      case 'on':
        {
          var scaleKol = void 0,
              ch = dataSlider.min,
              ii = void 0,
              shBlock = void 0,
              divBlock = void 0;

          if (dataSlider.scaleStep > 0) {
            scaleKol = dataSlider.scaleStep;
          } else {
            scaleKol = Math.floor(model.width(thisSlider, dataSlider.idElement) / 45);
            dataSlider.scaleStep = scaleKol;
          }

          var scaleWidth = model.width(thisSlider, dataSlider.idElement) / scaleKol;

          for (var i = 0; i <= model.width(thisSlider, dataSlider.idElement);) {
            ii = Math.floor(i);
            divBlock = "<div class=\"rangeSlider_slider_scale\">\n\t\t\t\t\t\t<div class=\"rangeSlider_slider_scale_line\" id=\"scale" + ii + "\"></div>\n\t\t\t\t\t\t</div>";
            model.slider(thisSlider, dataSlider.idElement).insertAdjacentHTML('beforeend', divBlock);
            shBlock = model.slider(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_slider_scale_line#scale' + ii).closest('.rangeSlider_slider_scale');
            shBlock.style.left = ii + 'px';
            model.sliderBlock(thisSlider, dataSlider.idElement).style.marginBottom = '35px';
            i = i + scaleWidth;
            shBlock.insertAdjacentHTML('beforeend', '<div class="rangeSlider_slider_scale_val">' + Math.floor(ch) + '</div>');
            ch = ch + (dataSlider.max - dataSlider.min) / scaleKol;
          }

          break;
        }

      case 'off':
        break;

      default:
        break;
    }
  };

  View.prototype.orientation = function (thisSlider, dataSlider, model) {
    switch (dataSlider.orientation) {
      case 'horizontal':
        {
          model.slider(thisSlider, dataSlider.idElement).style.transform = 'translate(5px, 0) rotate(0deg)';
          model.sliderBlock(thisSlider, dataSlider.idElement).style.height = '53px';
          break;
        }

      case 'vertical':
        {
          model.slider(thisSlider, dataSlider.idElement).style.transform = 'translate(5px, 0) rotate(90deg) translateX(50%)';
          model.sliderBlock(thisSlider, dataSlider.idElement).style.height = model.width(thisSlider, dataSlider.idElement) + 75 + 'px';
          var vals = model.slider(thisSlider, dataSlider.idElement).querySelectorAll('.rangeSlider_slider_scale_val');

          for (var i = 0; i < vals.length; i++) {
            vals[i].style.transform = 'translate(5px, 0) rotate(-90deg)';
          }

          break;
        }

      default:
        {
          model.slider(thisSlider, dataSlider.idElement).style.transform = 'translate(5px, 0) rotate(0deg)';
          model.sliderBlock(thisSlider, dataSlider.idElement).style.height = '53px';
          break;
        }
    }
  };

  View.prototype.value = function (thisSlider, dataSlider, model) {
    switch (dataSlider.value) {
      case 'on':
        {
          model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block').style.display = 'flex';
          model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__max').innerHTML = dataSlider.maxStart;
          var spans = model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block');

          switch (dataSlider.type) {
            case 'interval':
              {
                model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__min').innerHTML = dataSlider.minStart;
                spans.querySelector('span.rangeSlider_label__min').style.display = 'block';
                spans.querySelector('span.rangeSlider_label__dash').style.display = 'block';
                console.log('type=interval', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
                break;
              }

            case 'from0to':
              {
                model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__min').innerHTML = dataSlider.min;
                spans.querySelector('span.rangeSlider_label__min').style.display = 'block';
                spans.querySelector('span.rangeSlider_label__dash').style.display = 'block';
                console.log('type=from0to, ', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
                break;
              }

            case 'one':
              {
                model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__min').innerHTML = dataSlider.minStart;
                spans.querySelector('span.rangeSlider_label__min').style.display = 'none';
                spans.querySelector('span.rangeSlider_label__dash').style.display = 'none';
                console.log('type=one', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
                break;
              }

            default:
              {
                //interval
                model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__min').innerHTML = dataSlider.minStart;
                spans.querySelector('span.rangeSlider_label__min').style.display = 'block';
                spans.querySelector('span.rangeSlider_label__dash').style.display = 'block';
                console.log('type=intervalDEFAULT', dataSlider.min, dataSlider.max, dataSlider.minStart, dataSlider.maxStart);
                break;
              }
          }

          break;
        }

      case 'off':
        {
          model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label_Block').style.display = 'none';
          break;
        }

      default:
        break;
    }
  };

  return View;
}();

exports.View = View;

var Controller =
/** @class */
function () {
  function Controller() {}

  Controller.prototype.checkOrientation = function (dataSliderOrientation) {
    if (dataSliderOrientation == 'horizontal') {
      return 'x';
    }

    return 'y';
  };

  Controller.prototype.movie = function (thisSlider, dataSlider, range, e, lr, model, controller) {
    var startPos = parseInt(range.style.left);
    var indWidth = model.indWidth(thisSlider, dataSlider.idElement);

    switch (lr) {
      //чтобы сверху был ползунок, который перемещали последним (если друг на друга наедут)
      case 'left':
        {
          model.rangeLeft(thisSlider, dataSlider.idElement).style.zindex = 15;
          model.rangeRight(thisSlider, dataSlider.idElement).style.zindex = 10;
          break;
        }

      case 'right':
        {
          model.rangeRight(thisSlider, dataSlider.idElement).style.zindex = 15;
          model.rangeLeft(thisSlider, dataSlider.idElement).style.zindex = 10;
          break;
        }
    }

    controller.moveAt(thisSlider, dataSlider, startPos, lr, e, indWidth, model, controller);

    thisSlider.onmousemove = function (e) {
      controller.moveAt(thisSlider, dataSlider, startPos, lr, e, indWidth, model, controller);
    };

    thisSlider.onmouseup = function (e) {
      thisSlider.onmousemove = null;
      thisSlider.onmouseup = null;
    };
  };

  Controller.prototype.moveAt = function (thisSlider, dataSlider, startPos, lr, e, indWidth, model, controller) {
    var pos, p;

    switch (controller.checkOrientation(dataSlider.orientation)) {
      case 'x':
        {
          if (dataSlider.step == 1) {
            pos = e.pageX - parseInt(model.slider(thisSlider, dataSlider.idElement).offsetLeft); //позиция бегунка

            controller.movingRange(thisSlider, dataSlider, lr, startPos, pos, indWidth, model, controller);
          } else {
            var masScale = controller.masScale(thisSlider, dataSlider, model);
            p = e.pageX - parseInt(model.slider(thisSlider, dataSlider.idElement).offsetLeft); //позиция бегунка

            if (masScale.indexOf(p) != -1) {
              pos = p;
              controller.movingRange(thisSlider, dataSlider, lr, startPos, pos, indWidth, model, controller);
            } else {
              pos = startPos;
            }
          }

          break;
        }

      case 'y':
        {
          if (dataSlider.step == 1) {
            pos = e.pageY - controller.getCoords(model.slider(thisSlider, dataSlider.idElement)).top;
            ;
            controller.movingRange(thisSlider, dataSlider, lr, startPos, pos, indWidth, model, controller);
          } else {
            var masScale = controller.masScale(thisSlider, dataSlider, model);
            p = e.pageY - controller.getCoords(model.slider(thisSlider, dataSlider.idElement)).top;
            ;

            if (masScale.indexOf(p) != -1) {
              pos = p;
              controller.movingRange(thisSlider, dataSlider, lr, startPos, pos, indWidth, model, controller);
            } else {
              pos = startPos;
            }
          }

          break;
        }

      default:
        break;
    }
  };

  Controller.prototype.getCoords = function (elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  };

  Controller.prototype.movingRange = function (thisSlider, dataSlider, lr, startPos, pos, indWidth, model, controller) {
    var price,
        step = 0;

    if (pos >= 0 && pos <= model.width(thisSlider, dataSlider.idElement)) {
      if (lr == 'left') {
        if (model.posRangeRight(thisSlider, dataSlider.idElement) >= pos && dataSlider.type != 'from0to') {
          step = startPos - pos; //длина перемещения левого указателя	

          price = calc(thisSlider, dataSlider, pos);
          model.rangeLeft(thisSlider, dataSlider.idElement).style.left = pos + 'px'; //позиция указателей

          model.ind(thisSlider, dataSlider.idElement).style.transform = 'translate(' + pos + 'px, 0px)';
          startPos = pos;
          controller.writeValueMin(thisSlider, price, model);

          if (dataSlider.settings == 'on') {
            controller.configMinChange(thisSlider, dataSlider, price);
          }

          controller.checkDataSliderMin(dataSlider, price);
          model.ind(thisSlider, dataSlider.idElement).style.width = indWidth + step + 'px';
        }
      }

      if (lr == 'right') {
        if (model.posRangeLeft(thisSlider, dataSlider.idElement) <= pos) {
          step = pos - startPos; //длина перемещения правого указателя

          price = calc(thisSlider, dataSlider, pos);
          model.rangeRight(thisSlider, dataSlider.idElement).style.left = pos + 'px'; //позиция указателей

          controller.writeValueMax(thisSlider, price, model);

          if (dataSlider.settings == 'on') {
            controller.configMaxChange(thisSlider, dataSlider, price);
          }

          controller.checkDataSliderMax(dataSlider, price);
          model.ind(thisSlider, dataSlider.idElement).style.width = indWidth + step + 'px';
        }
      }
    }

    function calc(thisSlider, dataSlider, pos) {
      var pr = pos / model.width(thisSlider, dataSlider.idElement),
          price = ((dataSlider.max - dataSlider.min) * pr + dataSlider.min).toFixed();
      return price;
    }
  };

  Controller.prototype.writeValueMin = function (thisSlider, val, model) {
    model.valueMin(thisSlider).innerHTML = val;
  };

  Controller.prototype.writeValueMax = function (thisSlider, val, model) {
    model.valueMax(thisSlider).innerHTML = val;
  };

  Controller.prototype.checkDataSliderMin = function (dataSlider, val) {
    dataSlider.minStart = val;
  };

  Controller.prototype.checkDataSliderMax = function (dataSlider, val) {
    dataSlider.maxStart = val;
  };

  Controller.prototype.configMinChange = function (thisSlider, dataSlider, val) {
    if (val < dataSlider.min) {
      val = dataSlider.min;
    }

    thisSlider.querySelector(".sliderConf .sliderConf_block .inputText #inputTextminStart" + dataSlider.idElement.substr(-1)).value = val;
  };

  Controller.prototype.configMaxChange = function (thisSlider, dataSlider, val) {
    if (val > dataSlider.max) {
      val = dataSlider.max;
    }

    thisSlider.querySelector(".sliderConf .sliderConf_block .inputText #inputTextmaxStart" + dataSlider.idElement.substr(-1)).value = val;
    ;
  };

  Controller.prototype.clickSlider = function (thisSlider, dataSlider, model, controller) {
    thisSlider.querySelector('.rangeSlider_slider').onmousedown = function (e) {
      thisSlider.querySelector('.rangeSlider_slider').onmouseup = function (e) {
        var pos, startPos;

        switch (controller.checkOrientation(dataSlider.orientation)) {
          case 'x':
            {
              pos = e.pageX - parseInt(model.slider(thisSlider, dataSlider.idElement).offsetLeft);

              if (dataSlider.step != 1) {
                pos = controller.checkRangeThisStep(thisSlider, dataSlider, pos, model, controller);
              }

              break;
            }

          case 'y':
            {
              pos = e.pageY - controller.getCoords(model.slider(thisSlider, dataSlider.idElement)).top;
              ;

              if (dataSlider.step != 1) {
                pos = controller.checkRangeThisStep(thisSlider, dataSlider, pos, model, controller);
              }

              break;
            }
        }

        switch (dataSlider.type) {
          case 'interval':
            {
              var posL = model.posRangeLeft(thisSlider, dataSlider.idElement),
                  posR = model.posRangeRight(thisSlider, dataSlider.idElement);

              if (Math.abs(posL - pos) < Math.abs(posR - pos)) {
                startPos = model.posRangeLeft(thisSlider, dataSlider.idElement);
                controller.movingRange(thisSlider, dataSlider, 'left', model.posRangeLeft(thisSlider, dataSlider.idElement), pos, model.indWidth(thisSlider, dataSlider.idElement), model, controller);
              } else {
                startPos = model.posRangeRight(thisSlider, dataSlider.idElement);
                controller.movingRange(thisSlider, dataSlider, 'right', model.posRangeRight(thisSlider, dataSlider.idElement), pos, model.indWidth(thisSlider, dataSlider.idElement), model, controller);
              }

              break;
            }

          case 'from0to':
            {
              startPos = model.posRangeRight(thisSlider, dataSlider.idElement);
              controller.movingRange(thisSlider, dataSlider, 'right', model.posRangeRight(thisSlider, dataSlider.idElement), pos, model.indWidth(thisSlider, dataSlider.idElement), model, controller);
              break;
            }

          case 'one':
            {
              startPos = model.posRangeRight(thisSlider, dataSlider.idElement);
              controller.movingRange(thisSlider, dataSlider, 'right', model.posRangeRight(thisSlider, dataSlider.idElement), pos, model.indWidth(thisSlider, dataSlider.idElement), model, controller);
              break;
            }
        }
      };
    };
  };

  Controller.prototype.checkRangeThisStep = function (thisSlider, dataSlider, pos, model, controller) {
    var p = 0,
        masScale,
        len = model.width(thisSlider, dataSlider.idElement);
    masScale = controller.masScale(thisSlider, dataSlider, model);

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
  };

  Controller.prototype.masScale = function (thisSlider, dataSlider, model) {
    var sumSegments = (dataSlider.max - dataSlider.min) / dataSlider.step,
        w1 = model.width(thisSlider, dataSlider.idElement) / (dataSlider.max - dataSlider.min),
        //одно деление
    w = w1 * dataSlider.step,
        //длина шага
    masScale = [];

    for (var i = 0; i <= sumSegments; i++) {
      masScale[i] = w * i; //parseInt(w*i); //без parseInt, чтобы точность стоимости была выше
    }

    return masScale;
  };

  Controller.prototype.configCheck = function (thisSlider, dataSlider, model, controller, view) {
    thisSlider.querySelector('.sliderConf .checkbox .checkbox_item .checkbox_item_input').onclick = function (e) {
      if (this.checked == true) {
        thisSlider.querySelector('.sliderConf .sliderConf_block').style.display = 'block';
      } else {
        thisSlider.querySelector('.sliderConf .sliderConf_block').style.display = 'none';
      }

      var inputS = thisSlider.getElementsByClassName('inputText_input');

      for (var i = 0; i < inputS.length; i++) {
        inputS[i].onblur = function () {
          var idStr = this.id,
              id = dataSlider.idElement.substr(-1),
              min,
              max,
              minStart,
              maxStart,
              step,
              scaleStep;

          if (idStr.indexOf('min', 0) != -1) {
            min = Number.parseInt(thisSlider.querySelector(model.configItemMin + id).value);
            clear(thisSlider, id);
            dataSlider.min = min;
          }

          if (idStr.indexOf('max', 0) != -1) {
            max = Number.parseInt(thisSlider.querySelector(model.configItemMax + id).value);
            clear(thisSlider, id);
            dataSlider.max = max;
          }

          if (idStr.indexOf('minStart', 0) != -1) {
            minStart = Number.parseInt(thisSlider.querySelector(model.configItemMinStart + id).value);
            clear(thisSlider, id);
            dataSlider.minStart = minStart;
          }

          if (idStr.indexOf('maxStart', 0) != -1) {
            maxStart = Number.parseInt(thisSlider.querySelector(model.configItemMaxStart + id).value);
            clear(thisSlider, id);
            dataSlider.maxStart = maxStart;
          }

          if (idStr.indexOf('scaleStep', 0) != -1) {
            scaleStep = Number.parseInt(thisSlider.querySelector(model.configItemScaleStep + id).value);
            clear(thisSlider, id);
            dataSlider.scaleStep = scaleStep;
          }

          if (idStr.indexOf('step', 0) != -1) {
            step = Number.parseInt(thisSlider.querySelector(model.configItemStep + id).value);
            clear(thisSlider, id);
            dataSlider.step = step;
          }

          controller.checkMinMaxStart(dataSlider);
          view.type(thisSlider, dataSlider, model);
          view.scale(thisSlider, dataSlider, model);
          view.range(thisSlider, dataSlider, model);
          view.value(thisSlider, dataSlider, model);

          if (dataSlider.settings == 'on') {
            controller.configCheckStart(thisSlider, dataSlider, model, controller);
          }
        };
      }

      var radioS = thisSlider.getElementsByClassName('radio_input');

      for (var i = 0; i < radioS.length; i++) {
        radioS[i].onclick = function () {
          var id = dataSlider.idElement.substr(-1);
          var configItemType = model.configItemRadiobtn + (".radio_input[name=rbGroopType" + id + "]:checked"),
              configItemOrientation = model.configItemRadiobtn + (".radio_input[name=rbGroopOrientation" + id + "]:checked"),
              configItemValue = model.configItemRadiobtn + (".radio_input[name=rbGroopValue" + id + "]:checked"),
              configItemScale = model.configItemRadiobtn + (".radio_input[name=rbGroopScale" + id + "]:checked");
          var idStr = this.name,
              type,
              orientation,
              value,
              scale,
              typeId,
              orientationID,
              valueID,
              scaleID;

          if (idStr.indexOf('Type', 0) != -1) {
            typeId = thisSlider.querySelector(configItemType).id.substr(2, 1);

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

            clear(thisSlider, id);
            dataSlider.type = type;
          }

          if (idStr.indexOf('Orientation', 0) != -1) {
            orientationID = thisSlider.querySelector(configItemOrientation).id.substr(2, 1);

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

            clear(thisSlider, id);
            dataSlider.orientation = orientation;
          }

          if (idStr.indexOf('Value', 0) != -1) {
            valueID = thisSlider.querySelector(configItemValue).id.substr(2, 1);

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

            clear(thisSlider, id);
            dataSlider.value = value;
          }

          if (idStr.indexOf('Scale', 0) != -1) {
            scaleID = thisSlider.querySelector(configItemScale).id.substr(2, 1);

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

            clear(thisSlider, id);
            dataSlider.scale = scale;
          }

          controller.checkMinMaxStart(dataSlider);
          view.type(thisSlider, dataSlider, model);
          view.scale(thisSlider, dataSlider, model);
          view.orientation(thisSlider, dataSlider, model);
          view.value(thisSlider, dataSlider, model);
          view.range(thisSlider, dataSlider, model);

          if (dataSlider.settings == 'on') {
            controller.configCheckStart(thisSlider, dataSlider, model, controller);
          }
        };
      }

      ;
    };

    function clear(thisSlider, id) {
      var x = thisSlider.querySelectorAll('.rangeSlider#idPrice' + id + ' .rangeSlider_slider .rangeSlider_slider_scale');

      for (var i = 0; i < x.length; i++) {
        x[i].remove();
      }

      thisSlider.querySelector('.rangeSlider#idPrice' + id + ' .rangeSlider_slider_left').style.display = 'inline-block';
      thisSlider.querySelector('.rangeSlider#idPrice' + id + ' .rangeSlider_slider_range').style.display = 'inline-block';
    }
  };

  Controller.prototype.checkMinMaxStart = function (dataSlider) {
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
  };

  Controller.prototype.configCheckStart = function (thisSlider, dataSlider, model, controller) {
    model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__min').innerHTML = dataSlider.minStart;
    model.sliderBlock(thisSlider, dataSlider.idElement).querySelector('.rangeSlider_label__max').innerHTML = dataSlider.maxStart;
    var typeID,
        orientationID,
        valueID,
        scaleID,
        id = dataSlider.idElement.substr(-1);

    switch (dataSlider.type) {
      case 'interval':
        typeID = '1';
        break;

      case 'from0to':
        {
          typeID = '2';
          controller.checkDataSliderMin(dataSlider, 0);
          break;
        }

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

    thisSlider.querySelector(model.configItemMin + id).value = dataSlider.min;
    thisSlider.querySelector(model.configItemMax + id).value = dataSlider.max;
    thisSlider.querySelector(model.configItemMinStart + id).value = dataSlider.minStart;
    thisSlider.querySelector(model.configItemMaxStart + id).value = dataSlider.maxStart;
    thisSlider.querySelector(model.configItemStep + id).value = dataSlider.step;
    thisSlider.querySelector(model.configItemScaleStep + id).value = dataSlider.scaleStep;
    thisSlider.querySelector(".radio_input[name=rbGroopType" + id + "]#rb" + typeID + "srb" + id).checked = true;
    thisSlider.querySelector(".radio_input[name=rbGroopOrientation" + id + "]#rb" + orientationID + "orient" + id).checked = true;
    thisSlider.querySelector(".radio_input[name=rbGroopValue" + id + "]#rb" + valueID + "value" + id).checked = true;
    thisSlider.querySelector(".radio_input[name=rbGroopScale" + id + "]#rb" + scaleID + "scale" + id).checked = true;
  };

  return Controller;
}();

exports.Controller = Controller;
},{}],"blocks/demoSlider/demoSlider_ts.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slider = void 0;

var demoSlider_MVC_ts_1 = require("/blocks/demoSlider/demoSlider_MVC.ts");

var slider =
/** @class */
function () {
  function slider() {}

  slider.prototype.slider = function (option) {
    var dataSlider = Object.assign({
      element: document.querySelector('.searchRoom2 .slider1'),
      idElement: 'idPrice',
      width: 400,
      type: 'interval',
      min: 0,
      max: 1000,
      minStart: 150,
      maxStart: 500,
      step: 1,
      orientation: 'horizontal',
      value: 'on',
      scale: 'on',
      scaleStep: 10,
      settings: 'on'
    }, option);
    var model = new demoSlider_MVC_ts_1.Model();
    var view = new demoSlider_MVC_ts_1.View();
    var controller = new demoSlider_MVC_ts_1.Controller();
    var thisSlider = dataSlider.element;
    model.sliderBlock(thisSlider, dataSlider.idElement).style.width = dataSlider.width;
    controller.checkMinMaxStart(dataSlider); //определили текущие мин и мах

    if (dataSlider.settings == 'on') {
      controller.configCheckStart(thisSlider, dataSlider, model, controller); //min-max value
    }

    view.range(thisSlider, dataSlider, model);
    controller.clickSlider(thisSlider, dataSlider, model, controller);

    if (dataSlider.settings == 'on') {
      controller.configCheck(thisSlider, dataSlider, model, controller, view);
    }

    model.rangeLeft(thisSlider, dataSlider.idElement).onmousedown = function (e) {
      controller.movie(thisSlider, dataSlider, model.rangeLeft(thisSlider, dataSlider.idElement), e, 'left', model, controller);
    };

    model.rangeRight(thisSlider, dataSlider.idElement).onmousedown = function (e) {
      controller.movie(thisSlider, dataSlider, model.rangeRight(thisSlider, dataSlider.idElement), e, 'right', model, controller);
    };

    view.type(thisSlider, dataSlider, model);
    view.scale(thisSlider, dataSlider, model);
    view.orientation(thisSlider, dataSlider, model);
    view.value(thisSlider, dataSlider, model);
  };

  ;
  return slider;
}();

exports.slider = slider;
},{"/blocks/demoSlider/demoSlider_MVC.ts":"blocks/demoSlider/demoSlider_MVC.ts"}],"blocks/demoSlider/run_demoSlider.ts":[function(require,module,exports) {
"use strict"; //----------------------------------------------------------------------
//Объявнение слайдеров

Object.defineProperty(exports, "__esModule", {
  value: true
});

var demoSlider_ts_ts_1 = require("/blocks/demoSlider/demoSlider_ts.ts");

var slider_1 = new demoSlider_ts_ts_1.slider();
slider_1.slider({
  element: document.querySelector('.searchRoom2 .slider1'),
  idElement: 'idPrice1',
  width: 400,
  type: 'interval',
  min: 10,
  max: 200,
  minStart: 50,
  maxStart: 100,
  step: 20,
  orientation: 'horizontal',
  value: 'on',
  scale: 'on',
  scaleStep: 20,
  settings: 'on'
});
var slider_2 = new demoSlider_ts_ts_1.slider();
slider_2.slider({
  element: document.querySelector('.searchRoom2 .slider2'),
  idElement: 'idPrice2',
  width: 400,
  type: 'from0to',
  min: 0,
  max: 10,
  minStart: 5,
  maxStart: 7,
  step: 5,
  orientation: 'horizontal',
  value: 'on',
  scale: 'off',
  scaleStep: 10,
  settings: 'on'
});
var slider_3 = new demoSlider_ts_ts_1.slider();
slider_3.slider({
  element: document.querySelector('.searchRoom2 .slider3'),
  idElement: 'idPrice3',
  width: 600,
  min: 100,
  max: 40000,
  value: 'off',
  scale: 'on',
  settings: 'on'
});
var slider_4 = new demoSlider_ts_ts_1.slider();
slider_4.slider({
  element: document.querySelector('.searchRoom2 .slider4'),
  idElement: 'idPrice4',
  type: 'one',
  min: 0,
  max: 5000,
  maxStart: 2000,
  settings: 'on'
});
var slider_5 = new demoSlider_ts_ts_1.slider();
slider_5.slider({
  element: document.querySelector('.searchRoom2 .slider5'),
  idElement: 'idPrice5',
  settings: 'on'
});
},{"/blocks/demoSlider/demoSlider_ts.ts":"blocks/demoSlider/demoSlider_ts.ts"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","blocks/demoSlider/run_demoSlider.ts"], null)
//# sourceMappingURL=/run_demoSlider.e67b9291.js.map