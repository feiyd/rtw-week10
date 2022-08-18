"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile/[id]",{

/***/ "./pages/profile/[id].js":
/*!*******************************!*\
  !*** ./pages/profile/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfilePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _queries_fetchProfileQuery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../queries/fetchProfileQuery.js */ \"./queries/fetchProfileQuery.js\");\n/* harmony import */ var _components_Profile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Profile.js */ \"./components/Profile.js\");\n// pages/profile/[id].js\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProfilePage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    console.log(\"fetching profile for\", id);\n    var ref = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_queries_fetchProfileQuery_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        variables: {\n            request: {\n                profileId: id\n            },\n            publicationsRequest: {\n                profileId: id,\n                publicationTypes: [\n                    \"POST\"\n                ]\n            }\n        }\n    }), loading = ref.loading, error = ref.error, data = ref.data;\n    if (loading) return \"Loading..\";\n    if (error) return \"Error! \".concat(error.message);\n    console.log(\"on profile page data: \", data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col p-8 items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            profile: data.profile,\n            displayFullProfile: true\n        }, void 0, false, {\n            fileName: \"/home/mqiancheng/githubtest/road-to-lens/pages/profile/[id].js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mqiancheng/githubtest/road-to-lens/pages/profile/[id].js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n};\n_s(ProfilePage, \"3cmGJmCPbWz07HwSwgYwWOwFKhw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = ProfilePage;\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7QUFFeEI7O0FBQXVEO0FBQ2Y7QUFDMkI7QUFDakI7QUFFbkMsU0FBU0ssV0FBVyxHQUFHOztJQUNwQyxJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxFQUFJLEdBQUtJLE1BQU0sQ0FBQ0UsS0FBSyxDQUFuQkQsRUFBRTtJQUVWRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRUgsRUFBRSxDQUFDLENBQUM7SUFDeEMsSUFBaUNQLEdBUS9CLEdBUitCQSx3REFBUSxDQUFDRyxxRUFBaUIsRUFBRTtRQUMzRFEsU0FBUyxFQUFFO1lBQ1RDLE9BQU8sRUFBRTtnQkFBRUMsU0FBUyxFQUFFTixFQUFFO2FBQUU7WUFDMUJPLG1CQUFtQixFQUFFO2dCQUNuQkQsU0FBUyxFQUFFTixFQUFFO2dCQUNiUSxnQkFBZ0IsRUFBRTtvQkFBQyxNQUFNO2lCQUFDO2FBQzNCO1NBQ0Y7S0FDRixDQUFDLEVBUk1DLE9BQU8sR0FBa0JoQixHQVEvQixDQVJNZ0IsT0FBTyxFQUFFQyxLQUFLLEdBQVdqQixHQVEvQixDQVJlaUIsS0FBSyxFQUFFQyxJQUFJLEdBQUtsQixHQVEvQixDQVJzQmtCLElBQUk7SUFVNUIsSUFBSUYsT0FBTyxFQUFFLE9BQU8sV0FBVyxDQUFDO0lBQ2hDLElBQUlDLEtBQUssRUFBRSxPQUFPLFNBQVEsQ0FBZ0IsT0FBZEEsS0FBSyxDQUFDRSxPQUFPLENBQUUsQ0FBQztJQUU1Q1YsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEVBQUVRLElBQUksQ0FBQyxDQUFDO0lBQzVDLHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxnQ0FBZ0M7a0JBQzdDLDRFQUFDakIsOERBQU87WUFBQ2tCLE9BQU8sRUFBRUosSUFBSSxDQUFDSSxPQUFPO1lBQUVDLGtCQUFrQixFQUFFLElBQUk7Ozs7O2dCQUFJOzs7OztZQUN4RCxDQUNOO0NBQ0g7R0F4QnVCbEIsV0FBVzs7UUFDbEJILGtEQUFTO1FBSVNGLG9EQUFROzs7QUFMbkJLLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9baWRdLmpzP2ZlZGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcHJvZmlsZS9baWRdLmpzXG5cbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgZmV0Y2hQcm9maWxlUXVlcnkgZnJvbSBcIi4uLy4uL3F1ZXJpZXMvZmV0Y2hQcm9maWxlUXVlcnkuanNcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZVBhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc29sZS5sb2coXCJmZXRjaGluZyBwcm9maWxlIGZvclwiLCBpZCk7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KGZldGNoUHJvZmlsZVF1ZXJ5LCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICByZXF1ZXN0OiB7IHByb2ZpbGVJZDogaWQgfSxcbiAgICAgIHB1YmxpY2F0aW9uc1JlcXVlc3Q6IHtcbiAgICAgICAgcHJvZmlsZUlkOiBpZCxcbiAgICAgICAgcHVibGljYXRpb25UeXBlczogW1wiUE9TVFwiXSwgLy8gV2UgcmVhbGx5IG9ubHkgd2FudCBQT1NUc1xuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIFwiTG9hZGluZy4uXCI7XG4gIGlmIChlcnJvcikgcmV0dXJuIGBFcnJvciEgJHtlcnJvci5tZXNzYWdlfWA7XG5cbiAgY29uc29sZS5sb2coXCJvbiBwcm9maWxlIHBhZ2UgZGF0YTogXCIsIGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTggaXRlbXMtY2VudGVyXCI+XG4gICAgICA8UHJvZmlsZSBwcm9maWxlPXtkYXRhLnByb2ZpbGV9IGRpc3BsYXlGdWxsUHJvZmlsZT17dHJ1ZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJ1c2VNdXRhdGlvbiIsInVzZVJvdXRlciIsImZldGNoUHJvZmlsZVF1ZXJ5IiwiUHJvZmlsZSIsIlByb2ZpbGVQYWdlIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYWJsZXMiLCJyZXF1ZXN0IiwicHJvZmlsZUlkIiwicHVibGljYXRpb25zUmVxdWVzdCIsInB1YmxpY2F0aW9uVHlwZXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsInByb2ZpbGUiLCJkaXNwbGF5RnVsbFByb2ZpbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile/[id].js\n"));

/***/ })

});