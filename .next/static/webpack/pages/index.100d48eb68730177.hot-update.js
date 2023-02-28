"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_logo_transparent_png_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo-transparent-png.png */ \"./assets/logo-transparent-png.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconscout/react-unicons */ \"./node_modules/@iconscout/react-unicons/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), Order = ref[0], setOrder = ref[1];\n    var items = (0,_store_store__WEBPACK_IMPORTED_MODULE_5__.useStore)(function(state) {\n        return state.cart.pizzas.length;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        setOrder(localStorage.getItem(\"order\"));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _assets_logo_transparent_png_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    alt: \"logo\",\n                    width: 70,\n                    height: 60\n                }, void 0, false, {\n                    fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                lineNumber: 19,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().menu),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"../\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Menu\"\n                    }, void 0, false, {\n                        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().rightSide),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/cart\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().cart),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_7__.UilShoppingBag, {\n                                    size: \"35\",\n                                    color: \"#2E2E2E\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().badge),\n                                    children: items\n                                }, void 0, false, {\n                                    fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    Order && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/order/\".concat(Order),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().cart),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_7__.UilReceipt, {\n                                    size: 35\n                                }, void 0, false, {\n                                    fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                Order != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().badge),\n                                    children: \"1\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_s(Header, \"w3P9Jg3XsEv2TI8kN4oKtAzEXlg=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_5__.useStore\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QztBQUNRO0FBQ3ZCO0FBQ3VDO0FBQ3pDO0FBQ2U7QUFDRjs7QUFFM0IsU0FBU1MsTUFBTSxHQUFJOztJQUNoQyxJQUF5QkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE5QkcsS0FBSyxHQUFhSCxHQUFZLEdBQXpCLEVBQUVJLFFBQVEsR0FBR0osR0FBWSxHQUFmO0lBQ3RCLElBQU1LLEtBQUssR0FBR0osc0RBQVEsQ0FBQyxTQUFDSyxLQUFLO2VBQUdBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUNDLE1BQU07S0FBQSxDQUFDO0lBRXpEVixnREFBUyxDQUFDLFdBQUk7UUFDWkssUUFBUSxDQUFDTSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQ3pDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVwQix5RUFBVTs7MEJBQ3pCLDhEQUFDbUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFFcEIsdUVBQVE7MEJBQ3hCLDRFQUFDRSxtREFBSztvQkFBQ3FCLEdBQUcsRUFBRXRCLHdFQUFJO29CQUFFdUIsR0FBRyxFQUFDLE1BQU07b0JBQUNDLEtBQUssRUFBRSxFQUFFO29CQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7d0JBQUk7Ozs7O29CQUVqRDswQkFFTiw4REFBQ0MsSUFBRTtnQkFBQ1AsU0FBUyxFQUFFcEIsdUVBQVE7O2tDQUNuQiw4REFBQzZCLElBQUU7a0NBQ0QsNEVBQUN4QixrREFBSTs0QkFBQ3lCLElBQUksRUFBQyxLQUFLO3NDQUFDLE1BQUk7Ozs7O2dDQUFPOzs7Ozs0QkFDekI7a0NBQ0osOERBQUNELElBQUU7a0NBQUMsTUFBSTs7Ozs7NEJBQUs7a0NBQ2QsOERBQUNBLElBQUU7a0NBQUMsU0FBTzs7Ozs7NEJBQUs7Ozs7OztvQkFDYjswQkFFTCw4REFBQ1YsS0FBRztnQkFBQ0MsU0FBUyxFQUFFcEIsNEVBQWE7O2tDQUMzQiw4REFBQ0ssa0RBQUk7d0JBQUN5QixJQUFJLEVBQUcsT0FBTztrQ0FDbEIsNEVBQUNYLEtBQUc7NEJBQUNDLFNBQVMsRUFBRXBCLHVFQUFROzs4Q0FDdEIsOERBQUNHLG9FQUFjO29DQUFDNkIsSUFBSSxFQUFDLElBQUk7b0NBQUNDLEtBQUssRUFBQyxTQUFTOzs7Ozt3Q0FBRzs4Q0FDNUMsOERBQUNkLEtBQUc7b0NBQUNDLFNBQVMsRUFBRXBCLHdFQUFTOzhDQUFHWSxLQUFLOzs7Ozt3Q0FBTzs7Ozs7O2dDQUNwQzs7Ozs7NEJBQ0M7b0JBRVZGLEtBQUssa0JBQ0osOERBQUNMLGtEQUFJO3dCQUFDeUIsSUFBSSxFQUFFLFNBQVEsQ0FBUSxPQUFOcEIsS0FBSyxDQUFFO2tDQUMzQiw0RUFBQ1MsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFcEIsdUVBQVE7OzhDQUN0Qiw4REFBQ0ksZ0VBQVU7b0NBQUM0QixJQUFJLEVBQUUsRUFBRTs7Ozs7d0NBQUc7Z0NBQ3RCdEIsS0FBSyxJQUFJLEVBQUUsa0JBQUksOERBQUNTLEtBQUc7b0NBQUNDLFNBQVMsRUFBRXBCLHdFQUFTOzhDQUFFLEdBQ3pDOzs7Ozt3Q0FBTTs7Ozs7O2dDQUVKOzs7Ozs0QkFDRDs7Ozs7O29CQUlEOzs7Ozs7WUFDQyxDQUVYO0NBRUg7R0FoRHVCUyxNQUFNOztRQUVkRCxrREFBUTs7O0FBRkFDLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4PzU2N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vYXNzZXRzL2xvZ28tdHJhbnNwYXJlbnQtcG5nLnBuZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBVaWxTaG9wcGluZ0JhZywgVWlsUmVjZWlwdCB9IGZyb20gXCJAaWNvbnNjb3V0L3JlYWN0LXVuaWNvbnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL3N0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlciAoKSB7XG4gIGNvbnN0IFtPcmRlciwgc2V0T3JkZXJdPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBpdGVtcyA9IHVzZVN0b3JlKChzdGF0ZSk9PnN0YXRlLmNhcnQucGl6emFzLmxlbmd0aCk7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgc2V0T3JkZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlclwiKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5oZWFkZXJ9PlxuICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmxvZ299PlxuICAgICA8SW1hZ2Ugc3JjPXtMb2dvfSBhbHQ9XCJsb2dvXCIgd2lkdGg9ezcwfSBoZWlnaHQ9ezYwfSAvPlxuICAgICAgICBcbiAgICA8L2Rpdj5cblxuICAgIDx1bCBjbGFzc05hbWU9e2Nzcy5tZW51fT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIuLi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICAgPGxpPk1lbnU8L2xpPlxuICAgICAgICA8bGk+Q29udGFjdDwvbGk+XG4gICAgICA8L3VsPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnJpZ2h0U2lkZX0+XG4gICAgICAgIDxMaW5rIGhyZWYgPSAnL2NhcnQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY2FydH0+XG4gICAgICAgICAgICA8VWlsU2hvcHBpbmdCYWcgc2l6ZT1cIjM1XCIgY29sb3I9XCIjMkUyRTJFXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuYmFkZ2V9PntpdGVtc308L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICBcbiAgICAgIHtPcmRlciAmJiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2Avb3JkZXIvJHtPcmRlcn1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNhcnR9PlxuICAgICAgICAgICAgPFVpbFJlY2VpcHQgc2l6ZT17MzV9Lz5cbiAgICAgICAgICAgIHtPcmRlciAhPSBcIlwiICYmIDxkaXYgY2xhc3NOYW1lPXtjc3MuYmFkZ2V9PjFcbiAgICAgICAgICAgICAgPC9kaXY+fVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG4gICAgICAgICAgXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgIFxuICApO1xuXG59Il0sIm5hbWVzIjpbImNzcyIsIkxvZ28iLCJJbWFnZSIsIlVpbFNob3BwaW5nQmFnIiwiVWlsUmVjZWlwdCIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVN0b3JlIiwiSGVhZGVyIiwiT3JkZXIiLCJzZXRPcmRlciIsIml0ZW1zIiwic3RhdGUiLCJjYXJ0IiwicGl6emFzIiwibGVuZ3RoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVsIiwibWVudSIsImxpIiwiaHJlZiIsInJpZ2h0U2lkZSIsInNpemUiLCJjb2xvciIsImJhZGdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.jsx\n"));

/***/ })

});