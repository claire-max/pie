"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/order/[id]",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_logo_pdf_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo-pdf.png */ \"./assets/logo-pdf.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconscout/react-unicons */ \"./node_modules/@iconscout/react-unicons/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), Order = ref[0], setOrder = ref[1];\n    var items = (0,_store_store__WEBPACK_IMPORTED_MODULE_5__.useStore)(function(state) {\n        return state.cart.pizzas.length;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        setOrder(localStorage.getItem(\"order\"));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().logo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _assets_logo_pdf_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    alt: \"logo\",\n                    width: 50,\n                    height: 50\n                }, void 0, false, {\n                    fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                lineNumber: 19,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().menu),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Menu\"\n                    }, void 0, false, {\n                        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().rightSide),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/cart\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().cart),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_7__.UilShoppingBag, {\n                                    size: \"35\",\n                                    color: \"#2E2E2E\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().badge),\n                                    children: items\n                                }, void 0, false, {\n                                    fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    Order && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/order/\".concat(Order),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_6___default().cart),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconscout_react_unicons__WEBPACK_IMPORTED_MODULE_7__.UilReceipt, {\n                                siz: true\n                            }, void 0, false, {\n                                fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/claire/Desktop/code/pienextapp/components/Header.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_s(Header, \"w3P9Jg3XsEv2TI8kN4oKtAzEXlg=\", false, function() {\n    return [\n        _store_store__WEBPACK_IMPORTED_MODULE_5__.useStore\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QztBQUNKO0FBQ1g7QUFDdUM7QUFDekM7QUFDZTtBQUNGOztBQUUzQixTQUFTUyxNQUFNLEdBQUk7O0lBQ2hDLElBQXlCRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTlCRyxLQUFLLEdBQWFILEdBQVksR0FBekIsRUFBRUksUUFBUSxHQUFHSixHQUFZLEdBQWY7SUFDdEIsSUFBTUssS0FBSyxHQUFHSixzREFBUSxDQUFDLFNBQUNLLEtBQUs7ZUFBR0EsS0FBSyxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTTtLQUFBLENBQUM7SUFFekRWLGdEQUFTLENBQUMsV0FBSTtRQUNaSyxRQUFRLENBQUNNLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDekMsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVwQix5RUFBVTs7MEJBQ3pCLDhEQUFDbUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFFcEIsdUVBQVE7MEJBQ3hCLDRFQUFDRSxtREFBSztvQkFBQ3FCLEdBQUcsRUFBRXRCLDREQUFJO29CQUFFdUIsR0FBRyxFQUFDLE1BQU07b0JBQUNDLEtBQUssRUFBRSxFQUFFO29CQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7d0JBQUk7Ozs7O29CQUVqRDswQkFFTiw4REFBQ0MsSUFBRTtnQkFBQ1AsU0FBUyxFQUFFcEIsdUVBQVE7O2tDQUNuQiw4REFBQzZCLElBQUU7a0NBQUMsTUFFSjs7Ozs7NEJBQUs7a0NBQ0osOERBQUNBLElBQUU7a0NBQUMsTUFBSTs7Ozs7NEJBQUs7a0NBQ2QsOERBQUNBLElBQUU7a0NBQUMsU0FBTzs7Ozs7NEJBQUs7Ozs7OztvQkFDYjswQkFFTCw4REFBQ1YsS0FBRztnQkFBQ0MsU0FBUyxFQUFFcEIsNEVBQWE7O2tDQUMzQiw4REFBQ0ssa0RBQUk7d0JBQUMwQixJQUFJLEVBQUcsT0FBTztrQ0FDbEIsNEVBQUNaLEtBQUc7NEJBQUNDLFNBQVMsRUFBRXBCLHVFQUFROzs4Q0FDdEIsOERBQUNHLG9FQUFjO29DQUFDNkIsSUFBSSxFQUFDLElBQUk7b0NBQUNDLEtBQUssRUFBQyxTQUFTOzs7Ozt3Q0FBRzs4Q0FDNUMsOERBQUNkLEtBQUc7b0NBQUNDLFNBQVMsRUFBRXBCLHdFQUFTOzhDQUFHWSxLQUFLOzs7Ozt3Q0FBTzs7Ozs7O2dDQUNwQzs7Ozs7NEJBQ0M7b0JBRVZGLEtBQUssa0JBQ0osOERBQUNMLGtEQUFJO3dCQUFDMEIsSUFBSSxFQUFFLFNBQVEsQ0FBUSxPQUFOckIsS0FBSyxDQUFFO2tDQUMzQiw0RUFBQ1MsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFcEIsdUVBQVE7c0NBQ3RCLDRFQUFDSSxnRUFBVTtnQ0FBQytCLEdBQUc7Ozs7O29DQUFFOzs7OztnQ0FFYjs7Ozs7NEJBQ0Q7Ozs7OztvQkFJRDs7Ozs7O1lBQ0MsQ0FFWDtDQUVIO0dBOUN1QjFCLE1BQU07O1FBRWRELGtEQUFROzs7QUFGQUMsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qc3g/NTY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9hc3NldHMvbG9nby1wZGYucG5nXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFVpbFNob3BwaW5nQmFnLCBVaWxSZWNlaXB0IH0gZnJvbSBcIkBpY29uc2NvdXQvcmVhY3QtdW5pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyICgpIHtcbiAgY29uc3QgW09yZGVyLCBzZXRPcmRlcl09IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IGl0ZW1zID0gdXNlU3RvcmUoKHN0YXRlKT0+c3RhdGUuY2FydC5waXp6YXMubGVuZ3RoKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIHNldE9yZGVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJcIikpO1xuICB9LCBbXSlcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5oZWFkZXJ9PlxuICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmxvZ299PlxuICAgICA8SW1hZ2Ugc3JjPXtMb2dvfSBhbHQ9XCJsb2dvXCIgd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSAvPlxuICAgICAgICBcbiAgICA8L2Rpdj5cblxuICAgIDx1bCBjbGFzc05hbWU9e2Nzcy5tZW51fT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9saT5cbiAgICAgICAgIDxsaT5NZW51PC9saT5cbiAgICAgICAgPGxpPkNvbnRhY3Q8L2xpPlxuICAgICAgPC91bD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yaWdodFNpZGV9PlxuICAgICAgICA8TGluayBocmVmID0gJy9jYXJ0Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNhcnR9PlxuICAgICAgICAgICAgPFVpbFNob3BwaW5nQmFnIHNpemU9XCIzNVwiIGNvbG9yPVwiIzJFMkUyRVwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmJhZGdlfT57aXRlbXN9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgXG4gICAgICB7T3JkZXIgJiYgKFxuICAgICAgICA8TGluayBocmVmPXtgL29yZGVyLyR7T3JkZXJ9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5jYXJ0fT5cbiAgICAgICAgICAgIDxVaWxSZWNlaXB0IHNpei8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKX1cbiAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZGl2PlxuICAgXG4gICk7XG5cbn0iXSwibmFtZXMiOlsiY3NzIiwiTG9nbyIsIkltYWdlIiwiVWlsU2hvcHBpbmdCYWciLCJVaWxSZWNlaXB0IiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU3RvcmUiLCJIZWFkZXIiLCJPcmRlciIsInNldE9yZGVyIiwiaXRlbXMiLCJzdGF0ZSIsImNhcnQiLCJwaXp6YXMiLCJsZW5ndGgiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibG9nbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidWwiLCJtZW51IiwibGkiLCJyaWdodFNpZGUiLCJocmVmIiwic2l6ZSIsImNvbG9yIiwiYmFkZ2UiLCJzaXoiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.jsx\n"));

/***/ })

});