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
exports.id = "pages/api/order";
exports.ids = ["pages/api/order"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@sanity/client");;

/***/ }),

/***/ "(api)/./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity_client__WEBPACK_IMPORTED_MODULE_0__]);\n_sanity_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst client = (0,_sanity_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    projectId: \"o8g7hf62\",\n    dataset: \"production\",\n    apiVersion: \"2023-02-27\",\n    useCdn: true,\n    token: \"skPezXbKd8pqUM4wQfpu56O5l7Z2oDVlAkBASzh6dKBtmt9vr3oRdcwpphlnxmtbmoZt8WmXs9oTcwv9ex758jN0AeeIzjfRw88L7SN7LPmNJCWxdZDT7fMlqqetgJ0nqGPdtjHmwfhMxDBT0wQylBYggzNKq7wYtC70BJL7Xcgei1kfPDKX\"\n});\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);\nconst urlFor = (source)=>builder.image(source);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ007QUFDekMsTUFBTUUsTUFBTSxHQUFHRiwwREFBWSxDQUFDO0lBQ2pDRyxTQUFTLEVBQUUsVUFBVTtJQUNyQkMsT0FBTyxFQUFFLFlBQVk7SUFDckJDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxNQUFNLEVBQUUsSUFBSTtJQUNaQyxLQUFLLEVBQ0gsc0xBQXNMO0NBQ3pMLENBQUMsQ0FBQztBQUVILE1BQU1DLE9BQU8sR0FBR1Asd0RBQWUsQ0FBQ0MsTUFBTSxDQUFDO0FBRWhDLE1BQU1PLE1BQU0sR0FBRyxDQUFDQyxNQUFNLEdBQUtGLE9BQU8sQ0FBQ0csS0FBSyxDQUFDRCxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bpenphc2hvcC8uL2xpYi9jbGllbnQuanM/ZTY5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6IFwibzhnN2hmNjJcIixcbiAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsXG4gIGFwaVZlcnNpb246IFwiMjAyMy0wMi0yN1wiLFxuICB1c2VDZG46IHRydWUsXG4gIHRva2VuOlxuICAgIFwic2tQZXpYYktkOHBxVU00d1FmcHU1Nk81bDdaMm9EVmxBa0JBU3poNmRLQnRtdDl2cjNvUmRjd3BwaGxueG10Ym1vWnQ4V21YczlvVGN3djlleDc1OGpOMEFlZUl6amZSdzg4TDdTTjdMUG1OSkNXeGRaRFQ3Zk1scXFldGdKMG5xR1BkdGpIbXdmaE14REJUMHdReWxCWWdnek5LcTd3WXRDNzBCSkw3WGNnZWkxa2ZQREtYXCIsXG59KTtcblxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xuXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZSkgPT4gYnVpbGRlci5pbWFnZShzb3VyY2UpOyJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsInRva2VuIiwiYnVpbGRlciIsInVybEZvciIsInNvdXJjZSIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/client.js\n");

/***/ }),

/***/ "(api)/./pages/api/order.js":
/*!****************************!*\
  !*** ./pages/api/order.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/client */ \"(api)/./lib/client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"POST\":\n            const newOrder = await JSON.parse(req.body);\n            try {\n                await _lib_client__WEBPACK_IMPORTED_MODULE_0__.client.create({\n                    _type: \"order\",\n                    name: newOrder.name,\n                    address: newOrder.address,\n                    phone: newOrder.phone,\n                    total: newOrder.total,\n                    method: newOrder.method,\n                    status: 1\n                }).then((data)=>{\n                    res.status(200).json(data._id);\n                });\n            } catch (error) {\n                console.log(error);\n                res.status(500).json({\n                    msg: \"Error, check console\"\n                });\n            }\n            break;\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEM7QUFFM0IsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxPQUFRRCxHQUFHLENBQUNFLE1BQU07UUFDZCxLQUFLLE1BQU07WUFDVCxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsSUFBSSxDQUFDQyxLQUFLLENBQUNMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO1lBQzNDLElBQUc7Z0JBQ0QsTUFBTVIsc0RBQWEsQ0FBQztvQkFDaEJVLEtBQUssRUFBRSxPQUFPO29CQUNkQyxJQUFJLEVBQUVOLFFBQVEsQ0FBQ00sSUFBSTtvQkFDbkJDLE9BQU8sRUFBRVAsUUFBUSxDQUFDTyxPQUFPO29CQUN6QkMsS0FBSyxFQUFFUixRQUFRLENBQUNRLEtBQUs7b0JBQ3JCQyxLQUFLLEVBQUVULFFBQVEsQ0FBQ1MsS0FBSztvQkFDckJWLE1BQU0sRUFBRUMsUUFBUSxDQUFDRCxNQUFNO29CQUN2QlcsTUFBTSxFQUFFLENBQUM7aUJBQ1osQ0FBQyxDQUNEQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO29CQUNaZCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0csSUFBSSxDQUFDRCxJQUFJLENBQUNFLEdBQUcsQ0FBQyxDQUFDO2lCQUNoQyxDQUFDLENBQUM7YUFFTixDQUFDLE9BQU9DLEtBQUssRUFBRTtnQkFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO2dCQUNuQmpCLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRyxJQUFJLENBQUM7b0JBQUVLLEdBQUcsRUFBRSxzQkFBc0I7aUJBQUUsQ0FBQyxDQUFDO2FBQ3ZEO1lBQ0QsTUFBTTtLQUVmO0NBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YXNob3AvLi9wYWdlcy9hcGkvb3JkZXIuanM/Mzk5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgICAgY29uc3QgbmV3T3JkZXIgPSBhd2FpdCBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgICAgICAgICB0cnl7XG4gICAgICAgICAgICBhd2FpdCBjbGllbnQuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBfdHlwZTogXCJvcmRlclwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5ld09yZGVyLm5hbWUsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogbmV3T3JkZXIuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBwaG9uZTogbmV3T3JkZXIucGhvbmUsXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld09yZGVyLnRvdGFsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbmV3T3JkZXIubWV0aG9kLFxuICAgICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEuX2lkKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtc2c6IFwiRXJyb3IsIGNoZWNrIGNvbnNvbGVcIiB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbn19Il0sIm5hbWVzIjpbImNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuZXdPcmRlciIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJjcmVhdGUiLCJfdHlwZSIsIm5hbWUiLCJhZGRyZXNzIiwicGhvbmUiLCJ0b3RhbCIsInN0YXR1cyIsInRoZW4iLCJkYXRhIiwianNvbiIsIl9pZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/order.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order.js"));
module.exports = __webpack_exports__;

})();