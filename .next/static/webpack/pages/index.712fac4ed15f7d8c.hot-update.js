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

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useStore\": function() { return /* binding */ useStore; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.js\");\n\n\nvar useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(set) {\n    return {\n        //cart \n        cart: {\n            pizzas: []\n        },\n        addPizza: function(data) {\n            return set(function(state) {\n                return {\n                    cart: {\n                        pizzas: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.cart.pizzas).concat([\n                            data\n                        ])\n                    }\n                };\n            });\n        },\n        //Remove Pizza\n        removePizza: function(index) {\n            return set(function(state) {\n                return {\n                    cart: {\n                        pizzas: state.cart.pizzas.filter(function(_, i) {\n                            return i != index;\n                        })\n                    }\n                };\n            });\n        }\n    };\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUE2QjtBQUV0QixJQUFNQyxRQUFRLEdBQUdELG1EQUFNLENBQzFCLFNBQUNFLEdBQUc7V0FBTTtRQUVOLE9BQU87UUFDUEMsSUFBSSxFQUFFO1lBQ0ZDLE1BQU0sRUFBRSxFQUFFO1NBRWI7UUFFREMsUUFBUSxFQUFFLFNBQUNDLElBQUk7bUJBQ2pCSixHQUFHLENBQUMsU0FBQ0ssS0FBSzt1QkFBTTtvQkFDZEosSUFBSSxFQUFFO3dCQUNKQyxNQUFNLEVBQUUscUZBQUlHLEtBQUssQ0FBQ0osSUFBSSxDQUFDQyxNQUFNLENBQWpCRyxRQUFKOzRCQUF1QkQsSUFBSTt5QkFBQztxQkFDckM7aUJBRUo7YUFBQyxDQUFDO1NBQUE7UUFFSCxjQUFjO1FBQ2RFLFdBQVcsRUFBRSxTQUFDQyxLQUFLO21CQUNuQlAsR0FBRyxDQUFDLFNBQUNLLEtBQUs7dUJBQU07b0JBQ2RKLElBQUksRUFDSjt3QkFBRUMsTUFBTSxFQUFFRyxLQUFLLENBQUNKLElBQUksQ0FBQ0MsTUFBTSxDQUFDTSxNQUFNLENBQUMsU0FBQ0MsQ0FBQyxFQUFFQyxDQUFDO21DQUFLQSxDQUFDLElBQUlILEtBQUs7eUJBQUEsQ0FBQztxQkFDdkQ7aUJBQ0Y7YUFBQyxDQUFDO1NBQUE7S0FDSjtDQUFDLENBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUuanM/MzY2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlIGZyb20gXCJ6dXN0YW5kXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VTdG9yZSA9IGNyZWF0ZShcbiAgICAoc2V0KSA9PiAoe1xuXG4gICAgICAgIC8vY2FydCBcbiAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgcGl6emFzOiBbXSxcblxuICAgICAgICB9LFxuXG4gICAgICAgIGFkZFBpenphOiAoZGF0YSkgPT5cbiAgICAgIHNldCgoc3RhdGUpID0+ICh7XG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICBwaXp6YXM6IFsuLi5zdGF0ZS5jYXJ0LnBpenphcywgZGF0YV0sXG4gICAgICAgIH0sXG5cbiAgICB9KSksXG5cbiAgICAvL1JlbW92ZSBQaXp6YVxuICAgIHJlbW92ZVBpenphOiAoaW5kZXgpID0+XG4gICAgc2V0KChzdGF0ZSkgPT4gKHtcbiAgICAgIGNhcnQ6IFxuICAgICAgeyBwaXp6YXM6IHN0YXRlLmNhcnQucGl6emFzLmZpbHRlcigoXywgaSkgPT4gaSAhPSBpbmRleCkgXG4gICAgICB9LFxuICAgIH0pKSxcbiAgfSlcbikiXSwibmFtZXMiOlsiY3JlYXRlIiwidXNlU3RvcmUiLCJzZXQiLCJjYXJ0IiwicGl6emFzIiwiYWRkUGl6emEiLCJkYXRhIiwic3RhdGUiLCJyZW1vdmVQaXp6YSIsImluZGV4IiwiZmlsdGVyIiwiXyIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/store.js\n"));

/***/ })

});