module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n\nvar _jsxFileName = \"/Users/niallmckenna/Dropbox/A-react-apps/portfolio-app-nextjs/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  const store = Object(_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"useStore\"])(pageProps.initialReduxState);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInVzZVN0b3JlIiwiaW5pdGlhbFJlZHV4U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDeEMsUUFBTUMsS0FBSyxHQUFHQyxzRUFBUSxDQUFDRixTQUFTLENBQUNHLGlCQUFYLENBQXRCO0FBRUEsc0JBQ0kscUVBQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVGLEtBQWpCO0FBQUEsMkJBQ0kscUVBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBTUgsQ0FURCIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKHBhZ2VQcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgKVxufVxuXG5leHBvcnQgeyBNeUFwcCBhcyBkZWZhdWx0IH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/fetchDataReducer.js":
/*!**************************************!*\
  !*** ./reducers/fetchDataReducer.js ***!
  \**************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducers\", function() { return reducers; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst homepageInitialState = {\n  error: null,\n  firstName: null,\n  lastName: null,\n  jobTitle: null,\n  city: null,\n  linkedIn: null,\n  gitHub: null\n};\n\nconst homepageReducer = (state = homepageInitialState, action) => {\n  switch (action.type) {\n    case \"FETCH_DATA_SUCCESS\":\n      return _objectSpread(_objectSpread({}, state), action.payload);\n\n    case \"FETCH_DATA_FAILURE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: true\n      });\n\n    default:\n      return state;\n  }\n};\n\nconst myExperiencePageInitialState = {\n  error: null,\n  employment: [],\n  riverIsland: [],\n  riSummary: [],\n  stellaDot: [],\n  sdSummary: [],\n  nap: [],\n  napSummary: [],\n  jet2: [],\n  jet2Summary: []\n};\n\nconst myExperiencePageReducer = (state = myExperiencePageInitialState, action) => {\n  switch (action.type) {\n    case \"FETCH_DATA_LOADING\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: null,\n        loading: action.payload\n      });\n\n    case \"FETCH_DATA_SUCCESS\":\n      return _objectSpread(_objectSpread({}, state), action.payload);\n\n    case \"FETCH_DATA_FAILURE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: true\n      });\n\n    default:\n      return state;\n  }\n};\n\nconst skillsInitialState = {\n  error: null,\n  university: [],\n  school: [],\n  languages: [],\n  frameworks: [],\n  services: [],\n  tools: [],\n  skillset: [],\n  searchList: [],\n  langKey: [],\n  frameworksKey: [],\n  servicesKey: [],\n  toolsKey: [],\n  skillsetKey: [],\n  languagesVals: [],\n  frameworksVals: [],\n  servicesVals: [],\n  toolsVals: [],\n  skillsetVals: [],\n  text: ''\n};\n\nconst skillsReducer = (state = skillsInitialState, action) => {\n  switch (action.type) {\n    case \"FETCH_DATA_LOADING\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: null,\n        loading: action.payload\n      });\n\n    case \"FETCH_DATA_SUCCESS\":\n      return _objectSpread(_objectSpread({}, state), action.payload);\n\n    case \"FETCH_DATA_FAILURE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: true\n      });\n\n    case \"SET_TEXT_FILTER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        text: action.text\n      });\n\n    default:\n      return state;\n  }\n};\n\nconst githubRepoInitialState = {\n  error: null,\n  filteredReposArr: {},\n  endNav: {},\n  expensify: {},\n  portfolio: {},\n  hooks: {}\n};\n\nconst githubDataReducer = (state = githubRepoInitialState, action) => {\n  switch (action.type) {\n    case \"FETCH_DATA_LOADING\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: null,\n        loading: action.payload\n      });\n\n    case \"FETCH_DATA_SUCCESS\":\n      return _objectSpread(_objectSpread({}, state), action.payload);\n\n    case \"FETCH_DATA_FAILURE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: true\n      });\n\n    default:\n      return state;\n  }\n};\n\nconst projectsInitialState = {\n  error: null,\n  portfolioThumbnail: '',\n  expensifyThumbnail: '',\n  newFeaturesThumbnail: '',\n  nonGithubProjects: []\n};\n\nconst projectsDataReducer = (state = projectsInitialState, action) => {\n  switch (action.type) {\n    case \"FETCH_DATA_LOADING\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: null,\n        loading: action.payload\n      });\n\n    case \"FETCH_DATA_SUCCESS\":\n      return _objectSpread(_objectSpread({}, state), action.payload);\n\n    case \"FETCH_DATA_FAILURE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: true\n      });\n\n    default:\n      return state;\n  }\n};\n\nconst reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  homepage: homepageReducer,\n  experiencePage: myExperiencePageReducer,\n  skillsPage: skillsReducer,\n  githubData: githubDataReducer,\n  projectsData: projectsDataReducer\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9mZXRjaERhdGFSZWR1Y2VyLmpzPzMwM2YiXSwibmFtZXMiOlsiaG9tZXBhZ2VJbml0aWFsU3RhdGUiLCJlcnJvciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiam9iVGl0bGUiLCJjaXR5IiwibGlua2VkSW4iLCJnaXRIdWIiLCJob21lcGFnZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwibXlFeHBlcmllbmNlUGFnZUluaXRpYWxTdGF0ZSIsImVtcGxveW1lbnQiLCJyaXZlcklzbGFuZCIsInJpU3VtbWFyeSIsInN0ZWxsYURvdCIsInNkU3VtbWFyeSIsIm5hcCIsIm5hcFN1bW1hcnkiLCJqZXQyIiwiamV0MlN1bW1hcnkiLCJteUV4cGVyaWVuY2VQYWdlUmVkdWNlciIsImxvYWRpbmciLCJza2lsbHNJbml0aWFsU3RhdGUiLCJ1bml2ZXJzaXR5Iiwic2Nob29sIiwibGFuZ3VhZ2VzIiwiZnJhbWV3b3JrcyIsInNlcnZpY2VzIiwidG9vbHMiLCJza2lsbHNldCIsInNlYXJjaExpc3QiLCJsYW5nS2V5IiwiZnJhbWV3b3Jrc0tleSIsInNlcnZpY2VzS2V5IiwidG9vbHNLZXkiLCJza2lsbHNldEtleSIsImxhbmd1YWdlc1ZhbHMiLCJmcmFtZXdvcmtzVmFscyIsInNlcnZpY2VzVmFscyIsInRvb2xzVmFscyIsInNraWxsc2V0VmFscyIsInRleHQiLCJza2lsbHNSZWR1Y2VyIiwiZ2l0aHViUmVwb0luaXRpYWxTdGF0ZSIsImZpbHRlcmVkUmVwb3NBcnIiLCJlbmROYXYiLCJleHBlbnNpZnkiLCJwb3J0Zm9saW8iLCJob29rcyIsImdpdGh1YkRhdGFSZWR1Y2VyIiwicHJvamVjdHNJbml0aWFsU3RhdGUiLCJwb3J0Zm9saW9UaHVtYm5haWwiLCJleHBlbnNpZnlUaHVtYm5haWwiLCJuZXdGZWF0dXJlc1RodW1ibmFpbCIsIm5vbkdpdGh1YlByb2plY3RzIiwicHJvamVjdHNEYXRhUmVkdWNlciIsInJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwiaG9tZXBhZ2UiLCJleHBlcmllbmNlUGFnZSIsInNraWxsc1BhZ2UiLCJnaXRodWJEYXRhIiwicHJvamVjdHNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxvQkFBb0IsR0FBRztBQUMzQkMsT0FBSyxFQUFFLElBRG9CO0FBRTNCQyxXQUFTLEVBQUUsSUFGZ0I7QUFHM0JDLFVBQVEsRUFBRSxJQUhpQjtBQUkzQkMsVUFBUSxFQUFFLElBSmlCO0FBSzNCQyxNQUFJLEVBQUUsSUFMcUI7QUFNM0JDLFVBQVEsRUFBRSxJQU5pQjtBQU8zQkMsUUFBTSxFQUFFO0FBUG1CLENBQTdCOztBQVVBLE1BQU1DLGVBQWUsR0FBRyxDQUFDQyxLQUFLLEdBQUdULG9CQUFULEVBQStCVSxNQUEvQixLQUEwQztBQUNoRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLG9CQUFMO0FBQ0UsNkNBQ0tGLEtBREwsR0FFS0MsTUFBTSxDQUFDRSxPQUZaOztBQUtGLFNBQUssb0JBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFUixhQUFLLEVBQUU7QUFGVDs7QUFLRjtBQUNFLGFBQU9RLEtBQVA7QUFkSjtBQWdCRCxDQWpCRDs7QUFtQkEsTUFBTUksNEJBQTRCLEdBQUc7QUFDbkNaLE9BQUssRUFBRSxJQUQ0QjtBQUVuQ2EsWUFBVSxFQUFFLEVBRnVCO0FBR25DQyxhQUFXLEVBQUUsRUFIc0I7QUFJbkNDLFdBQVMsRUFBRSxFQUp3QjtBQUtuQ0MsV0FBUyxFQUFFLEVBTHdCO0FBTW5DQyxXQUFTLEVBQUUsRUFOd0I7QUFPbkNDLEtBQUcsRUFBRSxFQVA4QjtBQVFuQ0MsWUFBVSxFQUFFLEVBUnVCO0FBU25DQyxNQUFJLEVBQUUsRUFUNkI7QUFVbkNDLGFBQVcsRUFBRTtBQVZzQixDQUFyQzs7QUFhQSxNQUFNQyx1QkFBdUIsR0FBRyxDQUFDZCxLQUFLLEdBQUdJLDRCQUFULEVBQXVDSCxNQUF2QyxLQUFrRDtBQUNoRixVQUFR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LEVBQUU7QUFMUSxDQUE3Qjs7QUFRQSxNQUFNQyxtQkFBbUIsR0FBRyxDQUFDakQsS0FBSyxHQUFHNEMsb0JBQVQsRUFBK0IzQyxNQUEvQixLQUEwQztBQUNwRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLG9CQUFMO0FBQ0UsNkNBQ0tGLEtBREw7QUFFRVIsYUFBSyxFQUFFLElBRlQ7QUFHRXVCLGVBQU8sRUFBRWQsTUFBTSxDQUFDRTtBQUhsQjs7QUFNRixTQUFLLG9CQUFMO0FBQ0UsNkNBQ0tILEtBREwsR0FFS0MsTUFBTSxDQUFDRSxPQUZaOztBQUtGLFNBQUssb0JBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFUixhQUFLLEVBQUU7QUFGVDs7QUFLRjtBQUNFLGFBQU9RLEtBQVA7QUFyQko7QUF1QkQsQ0F4QkQ7O0FBMEJPLE1BQU1rRCxRQUFRLEdBQUdDLDZEQUFlLENBQUM7QUFDdENDLFVBQVEsRUFBRXJELGVBRDRCO0FBRXRDc0QsZ0JBQWMsRUFBRXZDLHVCQUZzQjtBQUd0Q3dDLFlBQVUsRUFBRWxCLGFBSDBCO0FBSXRDbUIsWUFBVSxFQUFFWixpQkFKMEI7QUFLdENhLGNBQVksRUFBRVA7QUFMd0IsQ0FBRCxDQUFoQyIsImZpbGUiOiIuL3JlZHVjZXJzL2ZldGNoRGF0YVJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmNvbnN0IGhvbWVwYWdlSW5pdGlhbFN0YXRlID0ge1xuICBlcnJvcjogbnVsbCxcbiAgZmlyc3ROYW1lOiBudWxsLFxuICBsYXN0TmFtZTogbnVsbCxcbiAgam9iVGl0bGU6IG51bGwsXG4gIGNpdHk6IG51bGwsXG4gIGxpbmtlZEluOiBudWxsLFxuICBnaXRIdWI6IG51bGxcbn07XG5cbmNvbnN0IGhvbWVwYWdlUmVkdWNlciA9IChzdGF0ZSA9IGhvbWVwYWdlSW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJGRVRDSF9EQVRBX1NVQ0NFU1NcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCwgLy8gLi4ueyBmaXJzdE5hbWUsIGxhc3ROYW1lIH1cbiAgICAgIH07XG5cbiAgICBjYXNlIFwiRkVUQ0hfREFUQV9GQUlMVVJFXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgbXlFeHBlcmllbmNlUGFnZUluaXRpYWxTdGF0ZSA9IHtcbiAgZXJyb3I6IG51bGwsXG4gIGVtcGxveW1lbnQ6IFtdLFxuICByaXZlcklzbGFuZDogW10sXG4gIHJpU3VtbWFyeTogW10sXG4gIHN0ZWxsYURvdDogW10sXG4gIHNkU3VtbWFyeTogW10sXG4gIG5hcDogW10sXG4gIG5hcFN1bW1hcnk6IFtdLFxuICBqZXQyOiBbXSxcbiAgamV0MlN1bW1hcnk6IFtdLFxufTtcblxuY29uc3QgbXlFeHBlcmllbmNlUGFnZVJlZHVjZXIgPSAoc3RhdGUgPSBteUV4cGVyaWVuY2VQYWdlSW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJGRVRDSF9EQVRBX0xPQURJTkdcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuXG4gICAgY2FzZSBcIkZFVENIX0RBVEFfU1VDQ0VTU1wiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBlbXBsb3ltZW50RGF0YVxuICAgICAgfTtcblxuICAgIGNhc2UgXCJGRVRDSF9EQVRBX0ZBSUxVUkVcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBza2lsbHNJbml0aWFsU3RhdGUgPSB7XG4gIGVycm9yOiBudWxsLFxuICB1bml2ZXJzaXR5OiBbXSxcbiAgc2Nob29sOiBbXSxcbiAgbGFuZ3VhZ2VzOiBbXSxcbiAgZnJhbWV3b3JrczogW10sXG4gIHNlcnZpY2VzOiBbXSxcbiAgdG9vbHM6IFtdLFxuICBza2lsbHNldDogW10sXG4gIHNlYXJjaExpc3Q6IFtdLFxuICBsYW5nS2V5OiBbXSxcbiAgZnJhbWV3b3Jrc0tleTogW10sXG4gIHNlcnZpY2VzS2V5OiBbXSxcbiAgdG9vbHNLZXk6IFtdLFxuICBza2lsbHNldEtleTogW10sXG4gIGxhbmd1YWdlc1ZhbHM6IFtdLFxuICBmcmFtZXdvcmtzVmFsczogW10sXG4gIHNlcnZpY2VzVmFsczogW10sXG4gIHRvb2xzVmFsczogW10sXG4gIHNraWxsc2V0VmFsczogW10sXG4gIHRleHQ6ICcnXG59O1xuXG5jb25zdCBza2lsbHNSZWR1Y2VyID0gKHN0YXRlID0gc2tpbGxzSW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJGRVRDSF9EQVRBX0xPQURJTkdcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuXG4gICAgY2FzZSBcIkZFVENIX0RBVEFfU1VDQ0VTU1wiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcblxuICAgIGNhc2UgXCJGRVRDSF9EQVRBX0ZBSUxVUkVcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICBjYXNlIFwiU0VUX1RFWFRfRklMVEVSXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGV4dDogYWN0aW9uLnRleHRcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBnaXRodWJSZXBvSW5pdGlhbFN0YXRlID0ge1xuICBlcnJvcjogbnVsbCxcbiAgZmlsdGVyZWRSZXBvc0Fycjoge30sXG4gIGVuZE5hdjoge30sXG4gIGV4cGVuc2lmeToge30sXG4gIHBvcnRmb2xpbzoge30sXG4gIGhvb2tzOiB7fVxufTtcblxuY29uc3QgZ2l0aHViRGF0YVJlZHVjZXIgPSAoc3RhdGUgPSBnaXRodWJSZXBvSW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJGRVRDSF9EQVRBX0xPQURJTkdcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuXG4gICAgY2FzZSBcIkZFVENIX0RBVEFfU1VDQ0VTU1wiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcblxuICAgIGNhc2UgXCJGRVRDSF9EQVRBX0ZBSUxVUkVcIjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCBwcm9qZWN0c0luaXRpYWxTdGF0ZSA9IHtcbiAgZXJyb3I6IG51bGwsXG4gIHBvcnRmb2xpb1RodW1ibmFpbDogJycsXG4gIGV4cGVuc2lmeVRodW1ibmFpbDogJycsXG4gIG5ld0ZlYXR1cmVzVGh1bWJuYWlsOiAnJyxcbiAgbm9uR2l0aHViUHJvamVjdHM6IFtdXG59O1xuXG5jb25zdCBwcm9qZWN0c0RhdGFSZWR1Y2VyID0gKHN0YXRlID0gcHJvamVjdHNJbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkZFVENIX0RBVEFfTE9BRElOR1wiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG5cbiAgICBjYXNlIFwiRkVUQ0hfREFUQV9TVUNDRVNTXCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuXG4gICAgY2FzZSBcIkZFVENIX0RBVEFfRkFJTFVSRVwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGhvbWVwYWdlOiBob21lcGFnZVJlZHVjZXIsXG4gIGV4cGVyaWVuY2VQYWdlOiBteUV4cGVyaWVuY2VQYWdlUmVkdWNlcixcbiAgc2tpbGxzUGFnZTogc2tpbGxzUmVkdWNlcixcbiAgZ2l0aHViRGF0YTogZ2l0aHViRGF0YVJlZHVjZXIsXG4gIHByb2plY3RzRGF0YTogcHJvamVjdHNEYXRhUmVkdWNlclxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/fetchDataReducer.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_fetchDataReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/fetchDataReducer */ \"./reducers/fetchDataReducer.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n // store.js\n// Next\n\nlet store;\n\nfunction initStore(initialState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers_fetchDataReducer__WEBPACK_IMPORTED_MODULE_4__[\"reducers\"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)));\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (true) return _store; // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n} // End Next//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbInN0b3JlIiwiaW5pdFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VycyIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsImluaXRpYWxpemVTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VTdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFFQTs7QUFFQSxJQUFJQSxLQUFKOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJDLFlBQW5CLEVBQWlDO0FBQy9CLFNBQU9DLHlEQUFXLENBQ2hCQyxtRUFEZ0IsRUFFaEJGLFlBRmdCLEVBR2hCRyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBaEIsQ0FISCxDQUFsQjtBQUtEOztBQUVNLE1BQU1DLGVBQWUsR0FBSUMsY0FBRCxJQUFvQjtBQUFBOztBQUNqRCxNQUFJQyxNQUFNLGNBQUdWLEtBQUgsNkNBQVlDLFNBQVMsQ0FBQ1EsY0FBRCxDQUEvQixDQURpRCxDQUdqRDtBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUlULEtBQXRCLEVBQTZCO0FBQzNCVSxVQUFNLEdBQUdULFNBQVMsaUNBQ2JELEtBQUssQ0FBQ1csUUFBTixFQURhLEdBRWJGLGNBRmEsRUFBbEIsQ0FEMkIsQ0FLM0I7O0FBQ0FULFNBQUssR0FBR1ksU0FBUjtBQUNELEdBWmdELENBY2pEOzs7QUFDQSxZQUFtQyxPQUFPRixNQUFQLENBZmMsQ0FnQmpEOztBQUNBLE1BQUksQ0FBQ1YsS0FBTCxFQUFZQSxLQUFLLEdBQUdVLE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0QsQ0FwQk07QUFzQkEsU0FBU0csUUFBVCxDQUFrQlgsWUFBbEIsRUFBZ0M7QUFDckMsUUFBTUYsS0FBSyxHQUFHYyxxREFBTyxDQUFDLE1BQU1OLGVBQWUsQ0FBQ04sWUFBRCxDQUF0QixFQUFzQyxDQUFDQSxZQUFELENBQXRDLENBQXJCO0FBQ0EsU0FBT0YsS0FBUDtBQUNELEMsQ0FFRCIsImZpbGUiOiIuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VycyB9IGZyb20gXCIuLi9yZWR1Y2Vycy9mZXRjaERhdGFSZWR1Y2VyXCI7XG5cbi8vIHN0b3JlLmpzXG5cbi8vIE5leHRcblxubGV0IHN0b3JlXG5cbmZ1bmN0aW9uIGluaXRTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJlZHVjZXJzLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICBsZXQgX3N0b3JlID0gc3RvcmUgPz8gaW5pdFN0b3JlKHByZWxvYWRlZFN0YXRlKVxuXG4gIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxuICAvLyB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGluIHRoZSBzdG9yZSwgYW5kIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICBfc3RvcmUgPSBpbml0U3RvcmUoe1xuICAgICAgLi4uc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxuICAgIH0pXG4gICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcbiAgICBzdG9yZSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXG4gIC8vIENyZWF0ZSB0aGUgc3RvcmUgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXG5cbiAgcmV0dXJuIF9zdG9yZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG4gIHJldHVybiBzdG9yZVxufVxuXG4vLyBFbmQgTmV4dFxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/styles.scss\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });