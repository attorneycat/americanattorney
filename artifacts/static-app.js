(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/americanattorney/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionContent", function() { return SectionContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPicture", function() { return SectionPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  cursor: pointer;\n  color: ", ";\n  border: 0px solid ", ";\n  /* background-color: rgba(0, 171, 0, 0); */\n  background-color: #85c6d4;\n  border-radius: ", ";\n  padding: ", ";\n  margin: ", ";\n  font-size: ", ";\n  min-width: ", ";\n  @media (max-width: 750px) {\n    font-size: 1em;\n    min-width: 150px;\n    margin: 2px;\n  }\n  @media (max-width: 500px) {\n    font-size: 1em;\n    min-width: 160px;\n    margin: 2px;\n  }\n  &:hover {\n    background-color: rgba(63, 127, 191, 0.6);\n  }\n  &:active {\n    background-color: rgba(0, 171, 0, 0.6);\n  }\n  transition: all 0.3s;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background-color: black;\n  width: 100%;\n  height: 100%;\n\n  background-size: cover;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  max-width: 1200px;\n  padding: 30px;\n  margin: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: relative;\n  min-height: 60vh;\n  text-align: center;\n  background-image: url(", ");\n  background-color: ", ";\n  background-size: cover;\n  background-blend-mode: multiply;\n  color: ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Section = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div")(_templateObject(), function (props) {
  return props.backgroundImage;
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.color;
});
var SectionContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("div")(_templateObject2());
var SectionPicture = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("img")(_templateObject3());
var Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()("button")(_templateObject4(), function (props) {
  return props.color || "black";
}, function (props) {
  return props.color || "black";
}, function (props) {
  return props.small ? "5px" : "10px";
}, function (props) {
  return props.small ? "5px 10px 5px 10px" : "10px 20px 10px 20px";
}, function (props) {
  return !props.small && "0px 5px";
}, function (props) {
  return props.small ? "1em" : "1.7em";
}, function (props) {
  return props.small ? "120px" : "230px";
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
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

var _requireUniversalModule = __webpack_require__(46);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(48);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(25);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(26);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(49);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(20);

var _helpers = __webpack_require__(50);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextOverPictureBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);

 //Import core


function TextOverPictureBlock(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_2__["Section"], {
    backgroundImage: props.backgroundImage,
    backgroundColor: props.overlayColor,
    color: 'white'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_2__["SectionContent"], null, props.children));
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPicture", function() { return SplitPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PictureTextBlock; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);


function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background-color: black;\n  width:60%;\n  ", "\n  background-size: cover;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  max-width: 500px;\n  padding: 30px;\n  margin: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  flex-direction: ", ";\n  flex-direction: ", ";\n  position: relative;\n  min-height: 80vh;\n  text-align: left;\n  color: grey;\n  display:flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //Import core


var SplitSection = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject(), function (props) {
  return props.pictureLeft ? 'row' : 'row-reverse';
}, function (props) {
  return props.pictureRight ? 'row-reverse' : 'row';
});
var SplitContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject2());
var SplitPicture = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("img")(_templateObject3(), function (props) {
  return props.backgroundImage && 'background-image: url(' + props.backgroundImage + ');';
});
function PictureTextBlock(props) {
  var sectionProps = {
    pictureRight: props.pictureRight,
    pictureLeft: props.pictureLeft
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SplitSection, sectionProps, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SplitPicture, {
    id: "laptopStock",
    src: props.backgroundImage,
    backgroundImage: props.backgroundImage
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SplitContent, null, props.children));
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(20);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(47)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactSection; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);


function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  white-space: nowrap;\n  margin:0px 5px;\n  width:100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  flex:1;\n  display: inline-block;\n  vertical-align: top;\n  min-width: 200px;\n  margin:15px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  @media (max-width:750px){\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //Import core


var Row = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()('div')(_templateObject());
var HorizBlock = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()('div')(_templateObject2());
var Paragraph = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()('p')(_templateObject3());
function ContactSection(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    green: true,
    style: {
      minHeight: 'auto'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["SectionContent"], {
    style: {
      whiteSpace: 'normal'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      color: "#85c6d4"
    }
  }, "Contact Us. ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    style: {
      color: "#85c6d4"
    }
  }, "We try our best to respond within 24 hours or less."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HorizBlock, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Contact"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, null, "mail@usaatty.com", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " +1 808 397 9999 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " +66 92 367 3347")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HorizBlock, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "California & United States "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, null, " 125 12th St., Suite 100", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " Oakland, CA ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "  ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HorizBlock, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Thailand & Asia "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, null, "140 Sukhumvit Rd #1804 ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "Bangkok 10110")))));
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactForm; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);


function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-weight: 800;\n  color: #b73954;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: red;\n  opacity: 1; /* Firefox */\n}\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  flex:1;\n  padding:10px;\n  font-size:1em;\n  margin:0 auto 10px auto;\n  border-width: 2px;\n  border-color: rgba(0,0,0,0);\n  background-color:rgba(255,255,255,0.2);\n  border-radius: 5px;\n  display: block;\n  color:white;\n  resize:none;\n  max-width:400px;\n  width:80vw\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  flex:1;\n  padding:10px;\n  font-size:1em;\n  margin:0 auto 10px auto;\n  border-width: 2px;\n  border-color: rgba(0,0,0,0);\n  background-color:rgba(255,255,255,0.2);\n  border-radius: 5px;\n  display: block;\n  color:white;\n  max-width:400px;\n  width:80vw\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin-top: 50px;\n  width: 50%;\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n  @media (max-width: 950px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //Import core


var FormRow = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject());
var Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("input")(_templateObject2());
var InputArea = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("textarea")(_templateObject3()); // MAKE THESE PLACEHOLDERS WHITE

var cssClass = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject4());
var BoldHeading = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("h4")(_templateObject5());
function ContactForm(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    backgroundColor: "#85c6d4",
    color: "black"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["SectionContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    style: {
      color: "#b73954"
    }
  }, "Book your FREE consultation today!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    style: {
      color: "white"
    }
  }, "Your initial consultation with Attorney Cat is free, just fill out your information below:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    placeholder: 'Name'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    placeholder: 'Email'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    placeholder: 'Phone Number'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    placeholder: 'Whatsapp'
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputArea, {
    placeholder: 'Describe Your Issue',
    name: "Text1",
    rows: "5"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      color: "white"
    }
  }, "SEND EMAIL"))));
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var assets_ny2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var assets_ny2_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_ny2_jpg__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: relative;\n  margin: auto;\n  top: 50%;\n  transform: translateY(-50%);\n  color: white;\n  max-width: 800px;\n  padding: 30px;\n  text-shadow: 2px 2px 10px #000;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 85vh;\n  position: relative;\n  width: 100vw;\n  background-image: url(", ");\n  background-size: cover;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //Import Core

 //Import assets


var SectionBG = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("header")(_templateObject(), assets_ny2_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);
var Content = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject2());
var ButtonRow = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject3());
function Hero(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionBG, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "AMERICAN TRADEMARK ATTORNEY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "PROTECT AND GROW YOUR BUSINESS TODAY WITH A US LICENSED LAWYER."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ButtonRow, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["Button"], null, " BOOK A FREE CONSULTATION ")))));
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServicesIOffer; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var assets_reiki_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var assets_reiki_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_reiki_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_firstplace_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var assets_firstplace_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_firstplace_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_cert_green_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);
/* harmony import */ var assets_cert_green_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_cert_green_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_cert_purp_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35);
/* harmony import */ var assets_cert_purp_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_cert_purp_png__WEBPACK_IMPORTED_MODULE_7__);


function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-weight: 800;\n  color: #85c6d4;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 150px;\n  @media (max-width: 550px) {\n    width: 100px;\n  }\n  display: block;\n  margin: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: inline;\n  padding: 15px;\n  /* max-width: 150px; */\n  flex: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  flex: 1;\n  display: flex;\n  justify-content: space-evenly;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  @media (max-width: 950px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //Import core

 //Import assets





var IconRow = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject());
var IconGroup = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject2());
var Qualification = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject3());
var Icon = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("img")(_templateObject4());
var BoldHeading = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("h4")(_templateObject5());
function ServicesIOffer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    backgroundColor: "white",
    color: "black"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["SectionContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: {
      color: "#85c6d4"
    }
  }, "Trademark Services"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " ", "You've built a brand... now protect it. Whether you're an American business owner or foreign based, Attorney Cat can help you register your trademark with the USPTO. We provide legal services to anyone who wants to register a ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "trademark"), "in the ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "United States"), ", as well as a broad range of legal services for residents of ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "California"), ", and companys expanding in", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Asia"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconRow, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconGroup, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Qualification, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    src: assets_cert_purp_png__WEBPACK_IMPORTED_MODULE_7___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    style: {
      color: "#85c6d4"
    }
  }, "Trademark Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "A trademark search helps identify if someone else is already using your name, logo, or slogan. We make sure you are not infringing on someone elses trademark before you file."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We conduct a comprehensive search on federal, state, common law, and internet databases to check if you're clear to start your application."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Attorney Cat will prepare an attorney drafted opinion letter on the likelihood of success on your application saving you time and money.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Qualification, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    src: assets_reiki_png__WEBPACK_IMPORTED_MODULE_4___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    style: {
      color: "#85c6d4"
    }
  }, "Trademark Registration"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Your package includes free phone consultations with Attorney Cat."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " Once your search has been cleared, Attorney Cat will call you to discuss your results with you and proceed with your USPTO application.", " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We prepare and file your trademark registration with the UPSTO then monitor and report the status of your application."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "All packages include minor office action reponses at no additional cost."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconGroup, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Qualification, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    src: assets_cert_green_png__WEBPACK_IMPORTED_MODULE_6___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    style: {
      color: "#85c6d4"
    }
  }, "USPTO Office Actions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "So you've applied for at trademark and it's been denied. No problem! An office action can be overcome by an experienced intellectual property attorney. We can submit a USPTO office action response on your behalf due to a likelihood of confusion, or any other office action.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Qualification, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
    src: assets_firstplace_png__WEBPACK_IMPORTED_MODULE_5___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    style: {
      color: "#85c6d4"
    }
  }, "Legal & Marketing Strategy"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Not only does Catherine provide legal services, she utilizes her business background to provide legal AND marketing strategy to help your business florish. A lot of attorneys can register a trademark for you. Few have experience growing and running companies themselves to know what you're going through and what you need to provide an all encompassing legal partner for your company."))))));
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Testimonials; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);


function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-weight: 800;\n  color: #b73954;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 30%;\n  @media (max-width: 550px) {\n    width: 100px;\n  }\n  display: block;\n  margin: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  @media (max-width: 950px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //Import core


var Row = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject());
var Testimonial = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject2());
var BoldHeading = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("h4")(_templateObject3());
function Testimonials(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    backgroundColor: "white",
    color: "black"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["SectionContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    style: {
      color: "#85c6d4"
    }
  }, "Testimonials"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Testimonial, null, "Catherine was able to navigate the complexity of my issue within minutes and provide accurate and detailed advice. Her advice led me to the exact outcome I had hoped for. For any future issues, I will be using CAT Law.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "- Tierra")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Testimonial, null, "I am a business owner and had a great experience meeting with Catherine who helped me re-do a contract that needed serious help. She caught so many issues that my previous attorneys missed. Appreciate the support and patience she took with understanding my needs and breaking it down for me in terms for a non-lawyer type person. Thanks so much, highly recommended and I will definitely be using her firm again for my business needs.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "- Rick")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Testimonial, null, "Catherine was incredibly helpful in providing advice in a challenging situation. Her responses were quick, professional & detailed. I would highly recommended Attorney Cat.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "- Leia")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_core__WEBPACK_IMPORTED_MODULE_3__["SectionContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Testimonial, null, "Catherine was able to navigate the complexity of my issue within minutes and provide accurate and detailed advice. Her advice led me to the exact outcome I had hoped for. For any future issues, I will be using CAT Law.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "- Tierra")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Testimonial, null, "I am a business owner and had a great experience meeting with Catherine who helped me re-do a contract that needed serious help. She caught so many issues that my previous attorneys missed. Appreciate the support and patience she took with understanding my needs and breaking it down for me in terms for a non-lawyer type person. Thanks so much, highly recommended and I will definitely be using her firm again for my business needs.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "- Rick")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Testimonial, null, "Catherine was incredibly helpful in providing advice in a challenging situation. Her responses were quick, professional & detailed. I would highly recommended Attorney Cat.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "- Leia")))));
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(11);

// CONCATENATED MODULE: /Users/cat/Documents/GitHub/americanattorney/src/components/Router.js

// CONCATENATED MODULE: /Users/cat/Documents/GitHub/americanattorney/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: /Users/cat/Documents/GitHub/americanattorney/src/app.css
var app = __webpack_require__(59);

// CONCATENATED MODULE: /Users/cat/Documents/GitHub/americanattorney/src/App.js

 //



 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement("nav", null, external_react_default.a.createElement(router_["Link"], {
    to: "/"
  }, "Home"), external_react_default.a.createElement(router_["Link"], {
    to: "/blog"
  }, "Blog"), external_react_default.a.createElement(router_["Link"], {
    to: "/services"
  }, "Services"), external_react_default.a.createElement(router_["Link"], {
    to: "/about"
  }, "About"), external_react_default.a.createElement(router_["Link"], {
    to: "/reviews"
  }, "Reviews"), external_react_default.a.createElement(router_["Link"], {
    to: "/contact"
  }, "Contact")), external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(router_["Router"], null, external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(9);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_cat_Documents_GitHub_americanattorney_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _Users_cat_Documents_GitHub_americanattorney_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_cat_Documents_GitHub_americanattorney_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "/Users/cat/Documents/GitHub/americanattorney/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/cat/Documents/GitHub/americanattorney/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _Users_cat_Documents_GitHub_americanattorney_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "/Users/cat/Documents/GitHub/americanattorney/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/cat/Documents/GitHub/americanattorney",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("/Users/cat/Documents/GitHub/americanattorney/node_modules/react-static/lib/browser");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);






















Object(_Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/cat/Documents/GitHub/americanattorney/src/pages/404 */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "Users/cat/Documents/GitHub/americanattorney/src/pages/404";
  }
}), universalOptions);
t_0.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js';
var t_1 = _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx */).then(__webpack_require__.bind(null, 12))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return "Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx";
  }
}), universalOptions);
t_1.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx';
var t_2 = _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx */).then(__webpack_require__.bind(null, 13))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return "Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx";
  }
}), universalOptions);
t_2.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx';
var t_3 = _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index */).then(__webpack_require__.bind(null, 3))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(3);
  },
  chunkName: function chunkName() {
    return "Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index";
  }
}), universalOptions);
t_3.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index.js';
var t_4 = _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx */).then(__webpack_require__.bind(null, 14))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return "Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx";
  }
}), universalOptions);
t_4.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx';
var t_5 = _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx */).then(__webpack_require__.bind(null, 8))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return "Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx";
  }
}), universalOptions);
t_5.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx';
var t_6 = _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx */).then(__webpack_require__.bind(null, 15))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return "Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx";
  }
}), universalOptions);
t_6.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx';
var t_7 = _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx */).then(__webpack_require__.bind(null, 16))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return "Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx";
  }
}), universalOptions);
t_7.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx';
var t_8 = _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx */).then(__webpack_require__.bind(null, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return "Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx";
  }
}), universalOptions);
t_8.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx';
var t_9 = _Users_cat_Documents_GitHub_americanattorney_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/cat/Documents/GitHub/americanattorney/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/cat/Documents/GitHub/americanattorney/src/pages/index */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/cat/Documents/GitHub/americanattorney/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "Users/cat/Documents/GitHub/americanattorney/src/pages/index";
  }
}), universalOptions);
t_9.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/index.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js': t_0,
  '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx': t_1,
  '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx': t_2,
  '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index.js': t_3,
  '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx': t_4,
  '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx': t_5,
  '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx': t_6,
  '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx': t_7,
  '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx': t_8,
  '/Users/cat/Documents/GitHub/americanattorney/src/pages/index.js': t_9
}); // Not Found Template

var notFoundTemplate = "/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _components_PictureTextBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _components_TextOverPictureBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _components_ServicesIOffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var assets_mountainSplash_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36);
/* harmony import */ var assets_mountainSplash_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_mountainSplash_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_laptopStock_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37);
/* harmony import */ var assets_laptopStock_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_laptopStock_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_pinkCouch_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38);
/* harmony import */ var assets_pinkCouch_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_pinkCouch_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var assets_windowpic_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61);
/* harmony import */ var assets_windowpic_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(assets_windowpic_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var assets_nypic_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39);
/* harmony import */ var assets_nypic_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(assets_nypic_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var assets_ny3_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(62);
/* harmony import */ var assets_ny3_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_ny3_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var assets_nypic6_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(40);
/* harmony import */ var assets_nypic6_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_nypic6_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var assets_attorneycat_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(41);
/* harmony import */ var assets_attorneycat_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(assets_attorneycat_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var assets_homeoffice_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(42);
/* harmony import */ var assets_homeoffice_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(assets_homeoffice_jpg__WEBPACK_IMPORTED_MODULE_19__);


function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  max-width: 1540px;\n  margin: auto;\n  box-shadow: 0px 15px 15px grey;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 5em;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //Import Core

 //Import Components







 //Import Assets










var WhiteBreak = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject());
var HomePageContents = _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default()("div")(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WhiteBreak, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HomePageContents, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PictureTextBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "laptopStock",
    pictureLeft: true,
    backgroundImage: assets_laptopStock_jpg__WEBPACK_IMPORTED_MODULE_12___default.a
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Do You Need An American Trademark Registration?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "We can help!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "In 2019, the United States passed a law requiring all persons not living in the U.S. to use an American licensed attorney to process their US trademark application."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "The Law Offices of Catherine Tang can help you register your trademark today. We assist with all stages of your trademark and business needs, from initial trademark registration and USPTO office action reponses, to growing and protecting your business."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Conveniently located in both the United States and Asia, we work in your time zone to provide you with a seamless trademark registration process."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      color: "#ffffff"
    }
  }, " Get Started Now "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PictureTextBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pictureRight: true,
    backgroundImage: assets_pinkCouch_jpg__WEBPACK_IMPORTED_MODULE_13___default.a
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Our Comprehensive Search & Application Package"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Complete search on federal, state, and federal databases for potential conflicts."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Attorney drafted opinion letter prepared by Catherine Tang"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Trademark application prepared and filed by a US licensed attorney"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Monitoring of your trademark application"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Phone consultation with Attorney Cat"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      color: "#ffffff"
    }
  }, "Start Your Application"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "$650 + government filing fee ($275)")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextOverPictureBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    backgroundImage: assets_homeoffice_jpg__WEBPACK_IMPORTED_MODULE_19___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ServicesIOffer__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextOverPictureBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    backgroundImage: assets_mountainSplash_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    overlayColor: "rgba(0,0,0,0.2)"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Legal advice doesn't have to be intimidating and out of reach."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, " ", "Whether you're in Asia, Europe, Americas, or anywhere else in the world... we can process your American trademark for you.", " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "We work with business owners, creatives, and influencers of all kinds to protect their work. You made it... don't let someone else steal it and profit off what you've done!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Our boutique law firm offers bespoke legal services for entreprenuers, influencers, and business owners. We offer high quality legal services at affordable prices for business owners just like you.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PictureTextBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pictureLeft: true,
    backgroundImage: assets_attorneycat_jpg__WEBPACK_IMPORTED_MODULE_18___default.a
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Meet Our Attorney"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Prior to law, Attorney Catherine Tang had an extensive background in marketing and business development. Like you, she is an entrepreneur and business owner starting her own company at 15 years old."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Catherine has worked with companies like Yelp, MySpace, YouTube, and countless other small businesses. She is uniquely situated to help entrepreneurs, influencers, and business owners navigate their legal and growth challenges having been in all their shoes."), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "She decided to pursue a law degree because she knew the how much business and every day life is intertwined with law and that knowledge of the law has the power to make a difference in the world."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "She embarked her law school journey with two kids under two years old, her youngest being only 3 months old when she started her first day, while continuing to manage a business in the medical field.", " "), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "After graduating in the top of her law school class, she worked for one of the largest international corporate law firms in the Asia and quickly realized that working law firm hours in \u201Cbig law\u201D environments would not allow her to achieve her own goals of both being able to be present for her family, and also to help others grow their business so she quit to do what she enjoys most: start a company and grow it organically, and helping others do the same.", " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      color: "#ffffff"
    }
  }, " Book a Consult Today "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Initial Consultations with Attorney Cat are Free")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextOverPictureBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    backgroundImage: assets_nypic6_jpg__WEBPACK_IMPORTED_MODULE_17___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Testimonials__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TextOverPictureBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
    backgroundImage: assets_nypic_jpg__WEBPACK_IMPORTED_MODULE_15___default.a
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ContactForm__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
}); // Todos:
// Get pictures working for picture text block

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(10);

var _router = __webpack_require__(11);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "18e57ca564098b607df590e205bceb1e.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b5982a54bb636606c707a333539b8e36.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "115f0ac90dfc685ff3564a27cb9e11d1.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a7ac5426f1ff1ef086baffcb9eb811d4.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6eb787e34140bf7174f07a1cf6d09a01.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "240031c1a1969b413b7dba87a0fbb40e.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "17fbef5bb6546a785668317777e47675.jpg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2b4ca946fb10280d243a54104012ece3.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c3221f643333164d1aa071d773b9108a.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2130e3a8d30e08f9715578e135532e1d.jpg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e8805af1177cbeacc14fcb892201de91.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5c1bdd30a47e21a1797b24f1a2b4c440.jpg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(45);
module.exports = __webpack_require__(51);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(22)["default"];

var _require = __webpack_require__(23),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/cat/Documents/GitHub/americanattorney/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(22)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(23),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(24),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/cat/Documents/GitHub/americanattorney/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(24),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(20);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 9,
	"./": 9,
	"./index": 9,
	"./index.js": 9
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
webpackContext.id = 47;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(19);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(25);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(26);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(52);

var _interopRequireDefault = __webpack_require__(53);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(54));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(55));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(56);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(57)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("/Users/cat/Documents/GitHub/americanattorney/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(58)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)(false);
// Module
exports.push([module.i, "* {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\r\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\r\n  font-weight: 300;\r\n  font-size: 16px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #108db8;\r\n  font-weight: bold;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  background: #108db8;\r\n  position:fixed;\r\n  z-index:2;\r\n}\r\n\r\nnav a {\r\n  color: white;\r\n  padding: 1rem;\r\n  display: inline-block;\r\n}\r\n\r\nh1 {\r\n  font-size: 4em;\r\n}\r\n", ""]);



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "728fc4c134b42745d784c7200b06cfc6.jpg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "847b0c31c31336fc09fe8c9072eaa249.jpg";

/***/ })
/******/ ]);
});