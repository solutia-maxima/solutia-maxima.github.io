/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reduxMin = __webpack_require__(1);

	var _reducers = __webpack_require__(2);

	(function () {
	    var is = 'sm-redux-store';
	    var store = (0, _reduxMin.createStore)(_reducers.rootReducer);
	    var properties = {
	        action: {
	            type: Object,
	            observer: 'actionChanged'
	        }
	    };
	    var ready = function ready() {
	        var _this = this;

	        store.subscribe(function () {
	            _this.fire('stateChange', {
	                state: store.getState()
	            });
	        });
	    };
	    var actionChanged = function actionChanged(newValue, oldValue) {
	        store.dispatch(newValue);
	    };
	    Polymer({
	        is: is,
	        properties: properties,
	        ready: ready,
	        actionChanged: actionChanged
	    });
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Redux=e():t.Redux=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var o=n(2),i=r(o),u=n(7),c=r(u),a=n(6),f=r(a),s=n(5),d=r(s),l=n(1),p=r(l),y=n(3);r(y);e.createStore=i["default"],e.combineReducers=c["default"],e.bindActionCreators=f["default"],e.applyMiddleware=d["default"],e.compose=p["default"]},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return function(){if(0===e.length)return arguments.length>0?arguments[0]:void 0;var t=e[e.length-1],n=e.slice(0,-1);return n.reduceRight(function(t,e){return e(t)},t.apply(void 0,arguments))}}e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){function r(){y===p&&(y=p.slice())}function i(){return l}function a(t){if("function"!=typeof t)throw Error("Expected listener to be a function.");var e=!0;return r(),y.push(t),function(){if(e){e=!1,r();var n=y.indexOf(t);y.splice(n,1)}}}function f(t){if(!(0,u["default"])(t))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(h)throw Error("Reducers may not dispatch actions.");try{h=!0,l=d(l,t)}finally{h=!1}for(var e=p=y,n=0;e.length>n;n++)e[n]();return t}function s(t){if("function"!=typeof t)throw Error("Expected the nextReducer to be a function.");d=t,f({type:c.INIT})}if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw Error("Expected the reducer to be a function.");var d=t,l=e,p=[],y=p,h=!1;return f({type:c.INIT}),{dispatch:f,subscribe:a,getState:i,replaceReducer:s}}e.__esModule=!0,e.ActionTypes=void 0,e["default"]=o;var i=n(4),u=r(i),c=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},function(t,e,n){function r(t){if(!i(t)||s.call(t)!=u||o(t))return!1;var e=c;if("function"==typeof t.constructor&&(e=d(t)),null===e)return!0;var n=e.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==f}var o=n(8),i=n(9),u="[object Object]",c=Object.prototype,a=Function.prototype.toString,f=a.call(Object),s=c.toString,d=Object.getPrototypeOf;t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var u=t(n,r,o),a=u.dispatch,f=[],s={getState:u.getState,dispatch:function(t){return a(t)}};return f=e.map(function(t){return t(s)}),a=c["default"].apply(void 0,f)(u.dispatch),i({},u,{dispatch:a})}}}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.__esModule=!0,e["default"]=o;var u=n(1),c=r(u)},function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},i=0;r.length>i;i++){var u=r[i],c=t[u];"function"==typeof c&&(o[u]=n(c,e))}return o}e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n+'"'||"an action";return'Reducer "'+t+'" returned undefined handling '+r+". To ignore an action, you must explicitly return the previous state."}function i(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:c.ActionTypes.INIT});if(void 0===r)throw Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if(void 0===n(void 0,{type:o}))throw Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+c.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function u(t){for(var e=Object.keys(t),n={},r=0;e.length>r;r++){var u=e[r];"function"==typeof t[u]&&(n[u]=t[u])}var c,a=Object.keys(n);try{i(n)}catch(f){c=f}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];if(c)throw c;for(var r=!1,i={},u=0;a.length>u;u++){var f=a[u],s=n[f],d=t[f],l=s(d,e);if(void 0===l){var p=o(f,e);throw Error(p)}i[f]=l,r=r||l!==d}return r?i:t}}e.__esModule=!0,e["default"]=u;var c=n(2),a=n(4),f=(r(a),n(3));r(f)},function(t,e){function n(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}t.exports=n},function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n}])});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.rootReducer = undefined;

	var _initialState = __webpack_require__(3);

	var _actions = __webpack_require__(4);

	var rootReducer = exports.rootReducer = function rootReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState.InitialState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case _actions.Actions.changeTemp.type:
	            {
	                var newState = Object.assign({}, state);
	                newState.temp = action.newTemp;
	                return newState;
	            }
	        default:
	            {
	                return state;
	            }
	    }
	    ;
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var InitialState = exports.InitialState = {
	    temp: 'It works!'
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var changeTemp = {
	    type: 'CHANGE_TEMP',
	    execute: function execute(store, newTemp) {
	        store.dispatch({
	            type: changeTemp.type,
	            newTemp: newTemp
	        });
	    }
	};
	var Actions = exports.Actions = {
	    changeTemp: changeTemp
	};

/***/ }
/******/ ]);