"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/editTopic/[id]/page",{

/***/ "(app-pages-browser)/./app/editTopic/[id]/page.jsx":
/*!*************************************!*\
  !*** ./app/editTopic/[id]/page.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditTopic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_EditTopicForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/EditTopicForm */ \"(app-pages-browser)/./components/EditTopicForm.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst getTopicById = async (id)=>{\n    try {\n        const res = await fetch(\"http://localhost:3000/api/topics/\".concat(id), {\n            cache: \"no-store\"\n        });\n        let response = await res.json();\n        debugger;\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch object\");\n        }\n        return response;\n    } catch (error) {\n        console.log(error);\n    }\n};\nasync function EditTopic(param) {\n    let { params } = param;\n    const { id } = params;\n    const { topic } = await getTopicById(id);\n    debugger;\n    const { title, description } = topic;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EditTopicForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        id: id,\n        title: title,\n        description: description\n    }, void 0, false, {\n        fileName: \"/home/developer/Aayush/Best peers/mongodebcrud/app/editTopic/[id]/page.jsx\",\n        lineNumber: 25,\n        columnNumber: 10\n    }, this);\n}\n_c = EditTopic;\nvar _c;\n$RefreshReg$(_c, \"EditTopic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lZGl0VG9waWMvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3VEO0FBRXZELE1BQU1DLGVBQWUsT0FBT0M7SUFDMUIsSUFBSTtRQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxvQ0FBdUMsT0FBSEYsS0FBTTtZQUNoRUcsT0FBTztRQUNUO1FBQ0EsSUFBSUMsV0FBVyxNQUFNSCxJQUFJSSxJQUFJO1FBQzdCLFFBQVE7UUFDUixJQUFJLENBQUNKLElBQUlLLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE9BQU9IO0lBQ1QsRUFBRSxPQUFPSSxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtBQUNGO0FBRWUsZUFBZUcsVUFBVSxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7SUFDdEMsTUFBTSxFQUFFWixFQUFFLEVBQUUsR0FBR1k7SUFDZixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1kLGFBQWFDO0lBQ3JDLFFBQVE7SUFDUixNQUFNLEVBQUVjLEtBQUssRUFBRUMsV0FBVyxFQUFFLEdBQUdGO0lBQy9CLHFCQUFPLDhEQUFDZixpRUFBYUE7UUFBQ0UsSUFBSUE7UUFBSWMsT0FBT0E7UUFBT0MsYUFBYUE7Ozs7OztBQUMzRDtLQU44QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2VkaXRUb3BpYy9baWRdL3BhZ2UuanN4P2Y5Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgRWRpdFRvcGljRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL0VkaXRUb3BpY0Zvcm1cIjtcblxuY29uc3QgZ2V0VG9waWNCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdG9waWNzLyR7aWR9YCwge1xuICAgICAgY2FjaGU6IFwibm8tc3RvcmVcIixcbiAgICB9KTtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGRlYnVnZ2VyXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBvYmplY3RcIik7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEVkaXRUb3BpYyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcbiAgY29uc3QgeyB0b3BpYyB9ID0gYXdhaXQgZ2V0VG9waWNCeUlkKGlkKTtcbiAgZGVidWdnZXJcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IHRvcGljO1xuICByZXR1cm4gPEVkaXRUb3BpY0Zvcm0gaWQ9e2lkfSB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz47XG59XG4iXSwibmFtZXMiOlsiRWRpdFRvcGljRm9ybSIsImdldFRvcGljQnlJZCIsImlkIiwicmVzIiwiZmV0Y2giLCJjYWNoZSIsInJlc3BvbnNlIiwianNvbiIsIm9rIiwiRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFZGl0VG9waWMiLCJwYXJhbXMiLCJ0b3BpYyIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/editTopic/[id]/page.jsx\n"));

/***/ })

});