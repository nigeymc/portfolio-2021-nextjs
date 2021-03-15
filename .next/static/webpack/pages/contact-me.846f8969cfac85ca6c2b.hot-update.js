webpackHotUpdate_N_E("pages/contact-me",{

/***/ "./actions/fetchHomepageDataAction.js":
false,

/***/ "./components/ContactMePageComponent.js":
false,

/***/ "./firebase/firebase.js":
false,

/***/ "./node_modules/@firebase/app/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/auth/dist/auth.esm.js":
false,

/***/ "./node_modules/@firebase/component/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/database/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/util/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/app/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
false,

/***/ "./node_modules/firebase/database/dist/index.esm.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/react-redux/es/components/Context.js":
false,

/***/ "./node_modules/react-redux/es/components/Provider.js":
false,

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
false,

/***/ "./node_modules/react-redux/es/connect/connect.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
false,

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
false,

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
false,

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
false,

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
false,

/***/ "./node_modules/react-redux/es/index.js":
false,

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
false,

/***/ "./node_modules/react-redux/es/utils/batch.js":
false,

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
false,

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
false,

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
false,

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
false,

/***/ "./node_modules/react-redux/es/utils/warning.js":
false,

/***/ "./node_modules/redux/es/redux.js":
false,

/***/ "./node_modules/symbol-observable/es/index.js":
false,

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./pages/contact-me.js":
/*!*****************************!*\
  !*** ./pages/contact-me.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactMePage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContactForm */ \"./components/ContactForm.js\");\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageHeader */ \"./components/PageHeader.js\");\n/* harmony import */ var _components_SocialIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SocialIcons */ \"./components/SocialIcons.js\");\n\n\nvar _jsxFileName = \"/Users/niallmckenna/Dropbox/A-react-apps/portfolio-app-nextjs/pages/contact-me.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar pageTitle = {\n  firstWord: \"Contact\",\n  secondWord: \"Me\"\n};\nvar firstWord = pageTitle.firstWord,\n    secondWord = pageTitle.secondWord;\n\nvar ContactMePage = function ContactMePage() {\n  _s();\n\n  var dispatch = useDispatch();\n\n  var _useSelector = useSelector(function (state) {\n    return state.homepage;\n  }),\n      linkedIn = _useSelector.linkedIn,\n      gitHub = _useSelector.gitHub;\n\n  useEffect(function () {\n    dispatch(fetchData());\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n      fluid: true,\n      className: \"p-0\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"general-section\",\n        id: \"contact\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PageHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          firstWord: firstWord,\n          secondWord: secondWord\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"general-section__content--columns\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n            md: 8,\n            lg: 10,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: \"Drop me line, or feel free to get social with me.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n            md: 4,\n            lg: 2,\n            className: \"mt-5\",\n            style: {\n              textAlign: \"center\"\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              className: \"mt-2\",\n              children: \"Follow me on\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SocialIcons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              linkedIn: linkedIn,\n              gitHub: gitHub\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(ContactMePage, \"zA1fUDCAeBqrF+NDo3fHkSYMOK4=\", true);\n\n_c = ContactMePage;\n\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactMePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC1tZS5qcz84NGIyIl0sIm5hbWVzIjpbInBhZ2VUaXRsZSIsImZpcnN0V29yZCIsInNlY29uZFdvcmQiLCJDb250YWN0TWVQYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJob21lcGFnZSIsImxpbmtlZEluIiwiZ2l0SHViIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2RDLFdBQVMsRUFBRSxTQURHO0FBRWRDLFlBQVUsRUFBRTtBQUZFLENBQWxCO0lBS1FELFMsR0FBMEJELFMsQ0FBMUJDLFM7SUFBV0MsVSxHQUFlRixTLENBQWZFLFU7O0FBRW5CLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLFdBQVcsRUFBNUI7O0FBRHdCLHFCQU1wQkMsV0FBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFFBQVY7QUFBQSxHQUFOLENBTlM7QUFBQSxNQUlwQkMsUUFKb0IsZ0JBSXBCQSxRQUpvQjtBQUFBLE1BS3BCQyxNQUxvQixnQkFLcEJBLE1BTG9COztBQVF4QkMsV0FBUyxDQUFDLFlBQU07QUFDWlAsWUFBUSxDQUFDUSxTQUFTLEVBQVYsQ0FBUjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFDSSxxRUFBQywwREFBRDtBQUFRLFdBQU8sZUFDWCxxRUFBQyx5REFBRDtBQUFXLFdBQUssTUFBaEI7QUFBaUIsZUFBUyxFQUFDLEtBQTNCO0FBQUEsNkJBQ0k7QUFBUyxpQkFBUyxFQUFDLGlCQUFuQjtBQUFxQyxVQUFFLEVBQUMsU0FBeEM7QUFBQSxnQ0FDSSxxRUFBQyw4REFBRDtBQUFZLG1CQUFTLEVBQUVYLFNBQXZCO0FBQWtDLG9CQUFVLEVBQUVDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLG1CQUFTLEVBQUMsbUNBQWY7QUFBQSxrQ0FDSSxxRUFBQyxtREFBRDtBQUFLLGNBQUUsRUFBRSxDQUFUO0FBQVksY0FBRSxFQUFFLEVBQWhCO0FBQUEsbUNBQ0k7QUFBQSxzQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU9JLHFFQUFDLG1EQUFEO0FBQUssY0FBRSxFQUFFLENBQVQ7QUFBWSxjQUFFLEVBQUUsQ0FBaEI7QUFBbUIscUJBQVMsRUFBQyxNQUE3QjtBQUFvQyxpQkFBSyxFQUFFO0FBQUVXLHVCQUFTLEVBQUU7QUFBYixhQUEzQztBQUFBLG9DQUNJO0FBQUcsdUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUkscUVBQUMsK0RBQUQ7QUFBYSxzQkFBUSxFQUFFSixRQUF2QjtBQUFpQyxvQkFBTSxFQUFFQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCSCxDQWhDRDs7R0FBTVAsYTs7S0FBQUEsYTtBQWtDTiIsImZpbGUiOiIuL3BhZ2VzL2NvbnRhY3QtbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtXCI7XG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlSGVhZGVyXCI7XG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU29jaWFsSWNvbnNcIjtcblxuY29uc3QgcGFnZVRpdGxlID0ge1xuICAgIGZpcnN0V29yZDogXCJDb250YWN0XCIsXG4gICAgc2Vjb25kV29yZDogXCJNZVwiXG59XG5cbmNvbnN0IHsgZmlyc3RXb3JkLCBzZWNvbmRXb3JkIH0gPSBwYWdlVGl0bGU7XG5cbmNvbnN0IENvbnRhY3RNZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgY29uc3Qge1xuICAgICAgICBsaW5rZWRJbixcbiAgICAgICAgZ2l0SHViXG4gICAgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmhvbWVwYWdlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoRGF0YSgpKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCBjb250ZW50PXtcbiAgICAgICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ2VuZXJhbC1zZWN0aW9uXCIgaWQ9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYWdlSGVhZGVyIGZpcnN0V29yZD17Zmlyc3RXb3JkfSBzZWNvbmRXb3JkPXtzZWNvbmRXb3JkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYWwtc2VjdGlvbl9fY29udGVudC0tY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17OH0gbGc9ezEwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ecm9wIG1lIGxpbmUsIG9yIGZlZWwgZnJlZSB0byBnZXQgc29jaWFsIHdpdGggbWUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17NH0gbGc9ezJ9IGNsYXNzTmFtZT1cIm10LTVcIiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMlwiPkZvbGxvdyBtZSBvbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgbGlua2VkSW49e2xpbmtlZElufSBnaXRIdWI9e2dpdEh1Yn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgfSAvPlxuICAgIClcbn1cblxuZXhwb3J0IHsgQ29udGFjdE1lUGFnZSBhcyBkZWZhdWx0IH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact-me.js\n");

/***/ })

})