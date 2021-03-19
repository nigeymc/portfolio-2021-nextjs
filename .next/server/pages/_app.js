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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "00et":
/***/ (function(module, exports) {



/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./styles/styles.scss
var styles = __webpack_require__("00et");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./reducers/fetchDataReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const homepageInitialState = {
  error: null,
  firstName: null,
  lastName: null,
  jobTitle: null,
  city: null,
  linkedIn: null,
  gitHub: null
};

const homepageReducer = (state = homepageInitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return _objectSpread(_objectSpread({}, state), action.payload);

    case "FETCH_DATA_FAILURE":
      return _objectSpread(_objectSpread({}, state), {}, {
        error: true
      });

    default:
      return state;
  }
};

const myExperiencePageInitialState = {
  error: null,
  employment: [],
  riverIsland: [],
  riSummary: [],
  stellaDot: [],
  sdSummary: [],
  nap: [],
  napSummary: [],
  jet2: [],
  jet2Summary: []
};

const myExperiencePageReducer = (state = myExperiencePageInitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return _objectSpread(_objectSpread({}, state), {}, {
        error: null,
        loading: action.payload
      });

    case "FETCH_DATA_SUCCESS":
      return _objectSpread(_objectSpread({}, state), action.payload);

    case "FETCH_DATA_FAILURE":
      return _objectSpread(_objectSpread({}, state), {}, {
        error: true
      });

    default:
      return state;
  }
};

const skillsInitialState = {
  error: null,
  university: [],
  school: [],
  languages: [],
  frameworks: [],
  services: [],
  tools: [],
  skillset: [],
  searchList: [],
  langKey: [],
  frameworksKey: [],
  servicesKey: [],
  toolsKey: [],
  skillsetKey: [],
  languagesVals: [],
  frameworksVals: [],
  servicesVals: [],
  toolsVals: [],
  skillsetVals: [],
  text: ''
};

const skillsReducer = (state = skillsInitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return _objectSpread(_objectSpread({}, state), {}, {
        error: null,
        loading: action.payload
      });

    case "FETCH_DATA_SUCCESS":
      return _objectSpread(_objectSpread({}, state), action.payload);

    case "FETCH_DATA_FAILURE":
      return _objectSpread(_objectSpread({}, state), {}, {
        error: true
      });

    case "SET_TEXT_FILTER":
      return _objectSpread(_objectSpread({}, state), {}, {
        text: action.text
      });

    default:
      return state;
  }
};

const githubRepoInitialState = {
  error: null,
  filteredReposArr: {},
  endNav: {},
  expensify: {},
  portfolio: {},
  hooks: {},
  next: {}
};

const githubDataReducer = (state = githubRepoInitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return _objectSpread(_objectSpread({}, state), {}, {
        error: null,
        loading: action.payload
      });

    case "FETCH_DATA_SUCCESS":
      return _objectSpread(_objectSpread({}, state), action.payload);

    case "FETCH_DATA_FAILURE":
      return _objectSpread(_objectSpread({}, state), {}, {
        error: true
      });

    default:
      return state;
  }
};

const projectsInitialState = {
  error: null,
  portfolioThumbnail: '',
  expensifyThumbnail: '',
  newFeaturesThumbnail: '',
  nextPortfolioThumbnail: '',
  nonGithubProjects: []
};

const projectsDataReducer = (state = projectsInitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return _objectSpread(_objectSpread({}, state), {}, {
        error: null,
        loading: action.payload
      });

    case "FETCH_DATA_SUCCESS":
      return _objectSpread(_objectSpread({}, state), action.payload);

    case "FETCH_DATA_FAILURE":
      return _objectSpread(_objectSpread({}, state), {}, {
        error: true
      });

    default:
      return state;
  }
};

const reducers = Object(external_redux_["combineReducers"])({
  homepage: homepageReducer,
  experiencePage: myExperiencePageReducer,
  skillsPage: skillsReducer,
  githubData: githubDataReducer,
  projectsData: projectsDataReducer
});
// CONCATENATED MODULE: ./store/configureStore.js
function configureStore_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function configureStore_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { configureStore_ownKeys(Object(source), true).forEach(function (key) { configureStore_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { configureStore_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function configureStore_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // store.js
// Next

let configureStore_store;

function initStore(initialState) {
  return Object(external_redux_["createStore"])(reducers, initialState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
}

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = configureStore_store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && configureStore_store) {
    _store = initStore(configureStore_objectSpread(configureStore_objectSpread({}, configureStore_store.getState()), preloadedState)); // Reset the current store

    configureStore_store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!configureStore_store) configureStore_store = _store;
  return _store;
};
function useStore(initialState) {
  const store = Object(external_react_["useMemo"])(() => initializeStore(initialState), [initialState]);
  return store;
} // End Next
// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  const store = useStore(pageProps.initialReduxState);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
    store: store,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
  });
};



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ })

/******/ });