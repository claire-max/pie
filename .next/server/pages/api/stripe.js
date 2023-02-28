"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stripe";
exports.ids = ["pages/api/stripe"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/stripe.js":
/*!*****************************!*\
  !*** ./pages/api/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(\"sk_test_51MfVLcByhkajyt5nnN0ETGtG6JaqGborMp039oaJQzNiuzva4e4vnCICjAXWO0jhTsfnmmkQ13V91vHk9Qa6iOnB00di3sEvbf\");\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const params = {\n                submit_type: \"pay\",\n                mode: \"payment\",\n                payment_method_types: [\n                    \"card\"\n                ],\n                line_items: req.body.map((item)=>{\n                    const img = item.image.asset._ref;\n                    const newImage = img.replace(\"image-\", \"https://cdn.sanity.io/images/o8g7hf62/production/\").replace(\"-jpg\", \".jpg\");\n                    return {\n                        price_data: {\n                            currency: \"usd\",\n                            product_data: {\n                                name: item.name,\n                                images: [\n                                    newImage\n                                ]\n                            },\n                            unit_amount: item.price * 100\n                        },\n                        adjustable_quantity: {\n                            enabled: false\n                        },\n                        quantity: item.quantity\n                    };\n                }),\n                success_url: `${req.headers.origin}/success`,\n                cancel_url: `${req.headers.origin}/cart`\n            };\n            //   create checkout session\n            const session = await stripe.checkout.sessions.create(params);\n            console.log(session);\n            res.status(200).json(session);\n        } catch (err) {\n            res.status(500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method not Allowed\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RyaXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUU1QixNQUFNQyxNQUFNLEdBQUcsSUFBSUQsK0NBQU0sQ0FDckIsNkdBQTZHLENBQzlHO0FBRWMsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU1DLE1BQU0sR0FBRztnQkFDYkMsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCQyxJQUFJLEVBQUUsU0FBUztnQkFDZkMsb0JBQW9CLEVBQUU7b0JBQUMsTUFBTTtpQkFBQztnQkFDOUJDLFVBQVUsRUFBRVAsR0FBRyxDQUFDUSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEdBQUs7b0JBQ2pDLE1BQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsSUFBSTtvQkFDakMsTUFBTUMsUUFBUSxHQUFHSixHQUFHLENBQ2pCSyxPQUFPLENBQ04sUUFBUSxFQUNSLG1EQUFtRCxDQUNwRCxDQUNBQSxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztvQkFFMUIsT0FBTzt3QkFDTEMsVUFBVSxFQUFFOzRCQUNWQyxRQUFRLEVBQUUsS0FBSzs0QkFDZkMsWUFBWSxFQUFFO2dDQUNaQyxJQUFJLEVBQUVWLElBQUksQ0FBQ1UsSUFBSTtnQ0FDZkMsTUFBTSxFQUFFO29DQUFDTixRQUFRO2lDQUFDOzZCQUNuQjs0QkFDRE8sV0FBVyxFQUFFWixJQUFJLENBQUNhLEtBQUssR0FBRyxHQUFHO3lCQUM5Qjt3QkFDREMsbUJBQW1CLEVBQUU7NEJBQ25CQyxPQUFPLEVBQUUsS0FBSzt5QkFDZjt3QkFDREMsUUFBUSxFQUFFaEIsSUFBSSxDQUFDZ0IsUUFBUTtxQkFDeEIsQ0FBQztpQkFDSCxDQUFDO2dCQUNGQyxXQUFXLEVBQUUsQ0FBQyxFQUFFM0IsR0FBRyxDQUFDNEIsT0FBTyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUM1Q0MsVUFBVSxFQUFFLENBQUMsRUFBRTlCLEdBQUcsQ0FBQzRCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUN6QztZQUVELDRCQUE0QjtZQUM1QixNQUFNRSxPQUFPLEdBQUcsTUFBTWpDLE1BQU0sQ0FBQ2tDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMvQixNQUFNLENBQUM7WUFDN0RnQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDLENBQUM7WUFDckI5QixHQUFHLENBQUNvQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ1AsT0FBTyxDQUFDLENBQUM7U0FDL0IsQ0FBQyxPQUFPUSxHQUFHLEVBQUU7WUFDWnRDLEdBQUcsQ0FBQ29DLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0tBQ0YsTUFBTTtRQUNMdkMsR0FBRyxDQUFDd0MsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQnhDLEdBQUcsQ0FBQ29DLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ssR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDM0M7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bpenphc2hvcC8uL3BhZ2VzL2FwaS9zdHJpcGUuanM/ZDc4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcblxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcbiAgICBcInNrX3Rlc3RfNTFNZlZMY0J5aGthanl0NW5uTjBFVEd0RzZKYXFHYm9yTXAwMzlvYUpRek5pdXp2YTRlNHZuQ0lDakFYV08wamhUc2ZubW1rUTEzVjkxdkhrOVFhNmlPbkIwMGRpM3NFdmJmXCJcbiAgKTtcblxuICBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgc3VibWl0X3R5cGU6IFwicGF5XCIsXG4gICAgICAgICAgbW9kZTogXCJwYXltZW50XCIsXG4gICAgICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFtcImNhcmRcIl0sXG4gICAgICAgICAgbGluZV9pdGVtczogcmVxLmJvZHkubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBpdGVtLmltYWdlLmFzc2V0Ll9yZWY7XG4gICAgICAgICAgICBjb25zdCBuZXdJbWFnZSA9IGltZ1xuICAgICAgICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICAgICAgICBcImltYWdlLVwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4uc2FuaXR5LmlvL2ltYWdlcy9vOGc3aGY2Mi9wcm9kdWN0aW9uL1wiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoXCItanBnXCIsIFwiLmpwZ1wiKTtcbiAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBwcmljZV9kYXRhOiB7XG4gICAgICAgICAgICAgICAgY3VycmVuY3k6IFwidXNkXCIsXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9kYXRhOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICBpbWFnZXM6IFtuZXdJbWFnZV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1bml0X2Ftb3VudDogaXRlbS5wcmljZSAqIDEwMCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYWRqdXN0YWJsZV9xdWFudGl0eToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3VjY2Vzc191cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vc3VjY2Vzc2AsXG4gICAgICAgICAgY2FuY2VsX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9jYXJ0YCxcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vICAgY3JlYXRlIGNoZWNrb3V0IHNlc3Npb25cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUocGFyYW1zKTtcbiAgICAgICAgY29uc29sZS5sb2coc2Vzc2lvbik7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNlc3Npb24pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFwiUE9TVFwiKTtcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoXCJNZXRob2Qgbm90IEFsbG93ZWRcIik7XG4gICAgfVxuICB9XG4gICJdLCJuYW1lcyI6WyJTdHJpcGUiLCJzdHJpcGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicGFyYW1zIiwic3VibWl0X3R5cGUiLCJtb2RlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJsaW5lX2l0ZW1zIiwiYm9keSIsIm1hcCIsIml0ZW0iLCJpbWciLCJpbWFnZSIsImFzc2V0IiwiX3JlZiIsIm5ld0ltYWdlIiwicmVwbGFjZSIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJpbWFnZXMiLCJ1bml0X2Ftb3VudCIsInByaWNlIiwiYWRqdXN0YWJsZV9xdWFudGl0eSIsImVuYWJsZWQiLCJxdWFudGl0eSIsInN1Y2Nlc3NfdXJsIiwiaGVhZGVycyIsIm9yaWdpbiIsImNhbmNlbF91cmwiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stripe.js"));
module.exports = __webpack_exports__;

})();