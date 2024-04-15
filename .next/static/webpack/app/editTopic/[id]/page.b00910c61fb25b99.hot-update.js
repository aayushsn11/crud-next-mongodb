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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditTopic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_EditTopicForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/EditTopicForm */ \"(app-pages-browser)/./components/EditTopicForm.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst getTopicById = async (id)=>{\n    try {\n        const res = await fetch(\"http://localhost:3000/api/topics/\".concat(id), {\n            cache: \"no-store\"\n        });\n        let response = await res.json();\n        debugger;\n        if (!res.ok) {\n            throw new Error(\"Failed to fetch object\");\n        }\n        return res.json;\n    } catch (error) {\n        console.log(error);\n    }\n};\nasync function EditTopic(param) {\n    let { params } = param;\n    const { id } = params;\n    const { topic } = await getTopicById(id);\n    debugger;\n    // const { title, description } = topic;\n    // return <EditTopicForm id={id} title={title} description={description} />;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hh\"\n    }, void 0, false, {\n        fileName: \"/home/developer/Aayush/Best peers/mongodebcrud/app/editTopic/[id]/page.jsx\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, this);\n}\n_c = EditTopic;\nvar _c;\n$RefreshReg$(_c, \"EditTopic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9lZGl0VG9waWMvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3VEO0FBRXZELE1BQU1DLGVBQWUsT0FBT0M7SUFDMUIsSUFBSTtRQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxvQ0FBdUMsT0FBSEYsS0FBTTtZQUNoRUcsT0FBTztRQUNUO1FBQ0EsSUFBSUMsV0FBVyxNQUFNSCxJQUFJSSxJQUFJO1FBQzdCLFFBQVE7UUFDUixJQUFJLENBQUNKLElBQUlLLEVBQUUsRUFBRTtZQUNYLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE9BQU9OLElBQUlJLElBQUk7SUFDakIsRUFBRSxPQUFPRyxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDZDtBQUNGO0FBRWUsZUFBZUcsVUFBVSxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7SUFDdEMsTUFBTSxFQUFFWixFQUFFLEVBQUUsR0FBR1k7SUFDZixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1kLGFBQWFDO0lBQ3JDLFFBQVE7SUFDUix3Q0FBd0M7SUFDeEMsNEVBQTRFO0lBQzVFLHFCQUFPLDhEQUFDYztrQkFBSTs7Ozs7O0FBQ2Q7S0FQOEJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9lZGl0VG9waWMvW2lkXS9wYWdlLmpzeD9mOWNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEVkaXRUb3BpY0Zvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9FZGl0VG9waWNGb3JtXCI7XG5cbmNvbnN0IGdldFRvcGljQnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3RvcGljcy8ke2lkfWAsIHtcbiAgICAgIGNhY2hlOiBcIm5vLXN0b3JlXCIsXG4gICAgfSk7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBkZWJ1Z2dlclxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggb2JqZWN0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb247XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBFZGl0VG9waWMoeyBwYXJhbXMgfSkge1xuICBjb25zdCB7IGlkIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHsgdG9waWMgfSA9IGF3YWl0IGdldFRvcGljQnlJZChpZCk7XG4gIGRlYnVnZ2VyXG4gIC8vIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSB0b3BpYztcbiAgLy8gcmV0dXJuIDxFZGl0VG9waWNGb3JtIGlkPXtpZH0gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+O1xuICByZXR1cm4gPGRpdj5oaDwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJFZGl0VG9waWNGb3JtIiwiZ2V0VG9waWNCeUlkIiwiaWQiLCJyZXMiLCJmZXRjaCIsImNhY2hlIiwicmVzcG9uc2UiLCJqc29uIiwib2siLCJFcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkVkaXRUb3BpYyIsInBhcmFtcyIsInRvcGljIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/editTopic/[id]/page.jsx\n"));

/***/ })

});