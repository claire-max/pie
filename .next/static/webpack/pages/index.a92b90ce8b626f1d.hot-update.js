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

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Menu.module.css */ \"./styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Menu(param) {\n    var pizzas = param.pizzas;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"OUR MENU\"\n                }, void 0, false, {\n                    fileName: \"/Users/claire/Desktop/code/pie/components/Menu.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/claire/Desktop/code/pie/components/Menu.jsx\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),\n                children: pizzas.map(function(pizza, id) {\n                    var src = (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(pizza.image).url();\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().pizza),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"./pizza/\".concat(pizza.slug.current),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().ImageWrapper),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        loader: function() {\n                                            return src;\n                                        },\n                                        src: src,\n                                        alt: \"\",\n                                        objectfit: \"cover\",\n                                        layout: \"fill\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/claire/Desktop/code/pie/components/Menu.jsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/claire/Desktop/code/pie/components/Menu.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 20\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/claire/Desktop/code/pie/components/Menu.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: pizza.name\n                            }, void 0, false, {\n                                fileName: \"/Users/claire/Desktop/code/pie/components/Menu.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 20\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"var(--themeblack)\"\n                                        },\n                                        children: \"$\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/claire/Desktop/code/pie/components/Menu.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 26\n                                    }, _this),\n                                    \" \",\n                                    pizza.price[1]\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/claire/Desktop/code/pie/components/Menu.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 20\n                            }, _this)\n                        ]\n                    }, id, true, {\n                        fileName: \"/Users/claire/Desktop/code/pie/components/Menu.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 16\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/claire/Desktop/code/pie/components/Menu.jsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/claire/Desktop/code/pie/components/Menu.jsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n};\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNRO0FBQ0s7QUFDaEI7QUFFYixTQUFTSSxJQUFJLENBQUUsS0FBUSxFQUFFO1FBQVYsTUFBTyxHQUFQLEtBQVEsQ0FBUEMsTUFBTTs7SUFFakMscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTCwwRUFBYTs7MEJBRTNCLDhEQUFDSSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVMLHdFQUFXOzBCQUV6Qiw0RUFBQ1EsTUFBSTs4QkFBQyxVQUFROzs7Ozt3QkFBTzs7Ozs7b0JBQ2pCOzBCQUVSLDhEQUFDSixLQUFHO2dCQUFDQyxTQUFTLEVBQUVMLHFFQUFROzBCQUVyQkcsTUFBTSxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFDQyxFQUFFLEVBQUk7b0JBQ3ZCLElBQU1DLEdBQUcsR0FBR2QsbURBQU0sQ0FBQ1ksS0FBSyxDQUFDRyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxFQUFFO29CQUNyQyxxQkFDRyw4REFBQ1gsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFTCxzRUFBUzs7MENBRXhCLDhEQUFDQyxrREFBSTtnQ0FBQ2UsSUFBSSxFQUFFLFVBQVMsQ0FBcUIsT0FBbkJMLEtBQUssQ0FBQ00sSUFBSSxDQUFDQyxPQUFPLENBQUU7MENBQ3hDLDRFQUFDZCxLQUFHO29DQUFDQyxTQUFTLEVBQUVMLDZFQUFnQjs4Q0FDL0IsNEVBQUNGLG1EQUFLO3dDQUNOc0IsTUFBTSxFQUFJO21EQUFLUCxHQUFHO3lDQUFBO3dDQUNsQkEsR0FBRyxFQUFFQSxHQUFHO3dDQUFFUSxHQUFHLEVBQUMsRUFBRTt3Q0FBQ0MsU0FBUyxFQUFDLE9BQU87d0NBQUNDLE1BQU0sRUFBQyxNQUFNOzs7Ozs2Q0FBRTs7Ozs7eUNBQzdDOzs7OztxQ0FDRjswQ0FFSiw4REFBQ2YsTUFBSTswQ0FBRUcsS0FBSyxDQUFDYSxJQUFJOzs7OztxQ0FBUTswQ0FDekIsOERBQUNoQixNQUFJOztrREFBQyw4REFBQ0EsTUFBSTt3Q0FBQ2lCLEtBQUssRUFBRTs0Q0FBQ0MsS0FBSyxFQUFDLG1CQUFtQjt5Q0FBQztrREFBRSxHQUFDOzs7Ozs2Q0FBTztvQ0FBQSxHQUFDO29DQUFDZixLQUFLLENBQUNnQixLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7cUNBQVE7O3VCQVhwRGYsRUFBRTs7Ozs2QkFZNUIsQ0FDUjtpQkFDRixDQUFDOzs7OztvQkFDRTs7Ozs7O1lBQ0YsQ0FDUDtDQUNKO0FBakN1QlYsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnUuanN4P2I4NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICcuLi9saWIvY2xpZW50JztcbmltcG9ydCBjc3MgZnJvbSAnLi4vc3R5bGVzL01lbnUubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUgKHtwaXp6YXN9KSB7XG4gICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cbiAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaGVhZGluZ30+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzcGFuPk9VUiBNRU5VPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5tZW51fT5cbiAgICAgICAgICB7LyogUElaWkFTKi99XG4gICAgICAgICAge3Bpenphcy5tYXAoKHBpenphLGlkKT0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IHVybEZvcihwaXp6YS5pbWFnZSkudXJsKClcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MucGl6emF9IGtleT17aWR9PlxuXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC4vcGl6emEvJHtwaXp6YS5zbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5JbWFnZVdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlciA9IHsoKT0+IHNyY31cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9IGFsdD0nJyBvYmplY3RmaXQ9XCJjb3ZlclwiIGxheW91dD1cImZpbGxcIi8+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgPHNwYW4+e3BpenphLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzcGFuIHN0eWxlPXt7Y29sb3I6J3ZhcigtLXRoZW1lYmxhY2spJ319PiQ8L3NwYW4+IHtwaXp6YS5wcmljZVsxXX08L3NwYW4+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwidXJsRm9yIiwiY3NzIiwiTGluayIsIk1lbnUiLCJwaXp6YXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoZWFkaW5nIiwic3BhbiIsIm1lbnUiLCJtYXAiLCJwaXp6YSIsImlkIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJocmVmIiwic2x1ZyIsImN1cnJlbnQiLCJJbWFnZVdyYXBwZXIiLCJsb2FkZXIiLCJhbHQiLCJvYmplY3RmaXQiLCJsYXlvdXQiLCJuYW1lIiwic3R5bGUiLCJjb2xvciIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n"));

/***/ })

});