/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --theme-bg: hsl(0 0% 100%);
  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));
  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));
  --theme-bd-opacity: 1;
  --theme-bd-2-opacity: 1;
  --theme-color: hotpink;
  --theme-blue: hsl(188 90% 45%);
  --theme-purple: hsl(267 100% 58%);

  --theme-text_color: hsl(0 0% 10%);
  --theme-icon_color: hsl(0 0% 20%);
  --theme-icon_hover-bg: hsl(0 0% 95%);
  --theme-icon_active-bg: hsl(0 0% 90%);

  --layer-top: 2147483647;
  --layer-1: 2147483646;
  --layer-2: 2147483645;
  --layer-3: 2147483644;
  --layer-4: 2147483643;
  --layer-5: 2147483642;

  --text-shadow: 0 1px hsl(0 0% 0% / 40%);

  @media (-webkit-min-device-pixel-ratio: 2) {
    --text-shadow: 0 .5px hsl(0 0% 0% / 50%);
  }

  @media (prefers-color-scheme: dark) {
    --theme-bg: hsl(0 0% 10%);
    --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));
    --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));
    --theme-color: hsl(330deg 65% 75%);
    --theme-text_color: hsl(0 0% 90%);
    --theme-icon_color: hsl(0 0% 80%);
    --theme-icon_hover-bg: hsl(0 0% 15%);
    --theme-icon_active-bg: hsl(0 0% 20%);
  }

  @supports (backdrop-filter: blur(5px)) {
    --theme-bd-opacity: .8;
    --theme-bd-2-opacity: .9;
  }

  @supports (-webkit-backdrop-filter: blur(5px)) {
    --theme-bd-opacity: .8;
    --theme-bd-2-opacity: .9;
  }
}
`, "",{"version":3,"sources":["webpack://./app/components/_variables.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,oDAAoD;EACpD,wDAAwD;EACxD,qBAAqB;EACrB,uBAAuB;EACvB,sBAAsB;EACtB,8BAA8B;EAC9B,iCAAiC;;EAEjC,iCAAiC;EACjC,iCAAiC;EACjC,oCAAoC;EACpC,qCAAqC;;EAErC,uBAAuB;EACvB,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,qBAAqB;;EAErB,uCAAuC;;EAEvC;IACE,wCAAwC;EAC1C;;EAEA;IACE,yBAAyB;IACzB,mDAAmD;IACnD,uDAAuD;IACvD,kCAAkC;IAClC,iCAAiC;IACjC,iCAAiC;IACjC,oCAAoC;IACpC,qCAAqC;EACvC;;EAEA;IACE,sBAAsB;IACtB,wBAAwB;EAC1B;;EAEA;IACE,sBAAsB;IACtB,wBAAwB;EAC1B;AACF","sourcesContent":[":host {\n  --theme-bg: hsl(0 0% 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-bd-opacity: 1;\n  --theme-bd-2-opacity: 1;\n  --theme-color: hotpink;\n  --theme-blue: hsl(188 90% 45%);\n  --theme-purple: hsl(267 100% 58%);\n\n  --theme-text_color: hsl(0 0% 10%);\n  --theme-icon_color: hsl(0 0% 20%);\n  --theme-icon_hover-bg: hsl(0 0% 95%);\n  --theme-icon_active-bg: hsl(0 0% 90%);\n\n  --layer-top: 2147483647;\n  --layer-1: 2147483646;\n  --layer-2: 2147483645;\n  --layer-3: 2147483644;\n  --layer-4: 2147483643;\n  --layer-5: 2147483642;\n\n  --text-shadow: 0 1px hsl(0 0% 0% / 40%);\n\n  @media (-webkit-min-device-pixel-ratio: 2) {\n    --text-shadow: 0 .5px hsl(0 0% 0% / 50%);\n  }\n\n  @media (prefers-color-scheme: dark) {\n    --theme-bg: hsl(0 0% 10%);\n    --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n    --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n    --theme-color: hsl(330deg 65% 75%);\n    --theme-text_color: hsl(0 0% 90%);\n    --theme-icon_color: hsl(0 0% 80%);\n    --theme-icon_hover-bg: hsl(0 0% 15%);\n    --theme-icon_active-bg: hsl(0 0% 20%);\n  }\n\n  @supports (backdrop-filter: blur(5px)) {\n    --theme-bd-opacity: .8;\n    --theme-bd-2-opacity: .9;\n  }\n\n  @supports (-webkit-backdrop-filter: blur(5px)) {\n    --theme-bd-opacity: .8;\n    --theme-bd-2-opacity: .9;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/_variables_dark.css":
/*!********************************************!*\
  !*** ./app/components/_variables_dark.css ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --theme-bg: hsl(0 0% 10%);
  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));
  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));
  --theme-color: hsl(330deg 65% 75%);
  --theme-text_color: hsl(0 0% 90%);
  --theme-icon_color: hsl(0 0% 80%);
  --theme-icon_hover-bg: hsl(0 0% 15%);
  --theme-icon_active-bg: hsl(0 0% 20%);
}
`, "",{"version":3,"sources":["webpack://./app/components/_variables_dark.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,mDAAmD;EACnD,uDAAuD;EACvD,kCAAkC;EAClC,iCAAiC;EACjC,iCAAiC;EACjC,oCAAoC;EACpC,qCAAqC;AACvC","sourcesContent":[":host {\n  --theme-bg: hsl(0 0% 10%);\n  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n  --theme-color: hsl(330deg 65% 75%);\n  --theme-text_color: hsl(0 0% 90%);\n  --theme-icon_color: hsl(0 0% 80%);\n  --theme-icon_hover-bg: hsl(0 0% 15%);\n  --theme-icon_active-bg: hsl(0 0% 20%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/_variables_light.css":
/*!*********************************************!*\
  !*** ./app/components/_variables_light.css ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --theme-bg: hsl(0 0% 100%);
  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));
  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));
  --theme-color: hotpink;
  --theme-text_color: hsl(0 0% 10%);
  --theme-icon_color: hsl(0 0% 20%);
  --theme-icon_hover-bg: hsl(0 0% 95%);
  --theme-icon_active-bg: hsl(0 0% 90%);
}
`, "",{"version":3,"sources":["webpack://./app/components/_variables_light.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,oDAAoD;EACpD,wDAAwD;EACxD,sBAAsB;EACtB,iCAAiC;EACjC,iCAAiC;EACjC,oCAAoC;EACpC,qCAAqC;AACvC","sourcesContent":[":host {\n  --theme-bg: hsl(0 0% 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-color: hotpink;\n  --theme-text_color: hsl(0 0% 10%);\n  --theme-icon_color: hsl(0 0% 20%);\n  --theme-icon_hover-bg: hsl(0 0% 95%);\n  --theme-icon_active-bg: hsl(0 0% 90%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/hotkey-map/base.element.css":
/*!****************************************************!*\
  !*** ./app/components/hotkey-map/base.element.css ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--layer-top);
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: var(--theme-bd-2);
  backdrop-filter: blur(5px);
  font-size: 16px;
  font-family: system-ui;
  cursor: initial;

  --light-grey: hsl(0 0% 90%);
  --grey: hsl(0 0% 60%);
  --dark-grey: hsl(0 0% 40%);

  @media (prefers-color-scheme: dark) {
    --light-grey: hsl(0 0% 20%);
    --grey: hsl(0 0% 60%);
    --dark-grey: hsl(0 0% 80%);
  }
}

:host [command] {
  padding: 1em;
  text-align: center;
  font-size: 3vw;
  font-weight: lighter;
  letter-spacing: 0.1em;
  color: var(--dark-grey);

  & > [light] {
    color: var(--grey);
  }

  & > [tool] {
    text-decoration: underline;
    text-decoration-color: var(--theme-color);
  }

  & > :matches([negative],[side],[amount]) {
    font-weight: normal;
  }
}

:host [card] {
  padding: 1em;
  background: var(--theme-bg);
  border-radius: 0.5em;
  color: var(--dark-grey);
  display: flex;
  justify-content: space-evenly;

  & > div:not([keyboard]) {
    display: flex;
    align-items: flex-end;
    margin-left: 1em;
  }
}

:host [tool-icon] {
  position: absolute;
  top: 1em;
  left: 0;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: center;

  & > span {
    color: var(--dark-grey);
    display: grid;
    grid-template-columns: 5vmax auto;
    grid-gap: 0.5em;
    align-items: center;
    text-transform: capitalize;
    font-size: 4vmax;
    font-weight: lighter;
  }

  & svg {
    width: 100%;
    fill: var(--theme-color);
  }
}

:host section {
  display: flex;
  justify-content: center;
}

:host section > span, 
:host [arrows] > span {
  border: 1px solid transparent;
  border-radius: 0.5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  padding: 1.5vw;
  font-size: 0.75em;
  white-space: nowrap;
}

:host section > span:not([pressed="true"]), 
:host [arrows] > span:not([pressed="true"]) {
  border: 1px solid var(--light-grey);

  &:hover {
    border-color: var(--grey);
  }
}

:host span[pressed="true"] {
  background: var(--theme-color);
  color: var(--theme-bg);
}

:host span:not([pressed="true"]):matches([used]) {
  background: var(--light-grey);
  cursor: pointer;
}

:host span[hotkey] {
  color: var(--theme-color);
  font-weight: bold;
  cursor: pointer;
}

:host section > span[hotkey]:not([pressed="true"]) {
  border-color: var(--theme-color);
}

:host [arrows] {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  & > span:nth-child(1) {
    grid-row: 1;
    grid-column: 2;
  }

  & > span:nth-child(2) {
    grid-row: 2;
    grid-column: 2;
  }

  & > span:nth-child(3) {
    grid-row: 2;
    grid-column: 1;
  }

  & > span:nth-child(4) {
    grid-row: 2;
    grid-column: 3;
  }
}

:host [caps] > span:nth-child(1),
:host [shift] > span:nth-child(1)  { justify-content: flex-start; }
:host [shift] > span:nth-child(12) { justify-content: flex-end; }`, "",{"version":3,"sources":["webpack://./app/components/hotkey-map/base.element.css"],"names":[],"mappings":"AAEA;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,yBAAyB;EACzB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,0BAA0B;EAC1B,eAAe;EACf,sBAAsB;EACtB,eAAe;;EAEf,2BAA2B;EAC3B,qBAAqB;EACrB,0BAA0B;;EAE1B;IACE,2BAA2B;IAC3B,qBAAqB;IACrB,0BAA0B;EAC5B;AACF;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,oBAAoB;EACpB,qBAAqB;EACrB,uBAAuB;;EAEvB;IACE,kBAAkB;EACpB;;EAEA;IACE,0BAA0B;IAC1B,yCAAyC;EAC3C;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,YAAY;EACZ,2BAA2B;EAC3B,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;EACb,6BAA6B;;EAE7B;IACE,aAAa;IACb,qBAAqB;IACrB,gBAAgB;EAClB;AACF;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,OAAO;EACP,WAAW;EACX,eAAe;EACf,aAAa;EACb,uBAAuB;;EAEvB;IACE,uBAAuB;IACvB,aAAa;IACb,iCAAiC;IACjC,eAAe;IACf,mBAAmB;IACnB,0BAA0B;IAC1B,gBAAgB;IAChB,oBAAoB;EACtB;;EAEA;IACE,WAAW;IACX,wBAAwB;EAC1B;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;;EAEE,6BAA6B;EAC7B,oBAAoB;EACpB,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,mCAAmC;;EAEnC;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,2BAA2B;;EAE3B;IACE,WAAW;IACX,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,cAAc;EAChB;AACF;;AAEA;qCACqC,2BAA2B,EAAE;AAClE,qCAAqC,yBAAyB,EAAE","sourcesContent":["@import \"../_variables.css\";\n\n:host {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--layer-top);\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  background: var(--theme-bd-2);\n  backdrop-filter: blur(5px);\n  font-size: 16px;\n  font-family: system-ui;\n  cursor: initial;\n\n  --light-grey: hsl(0 0% 90%);\n  --grey: hsl(0 0% 60%);\n  --dark-grey: hsl(0 0% 40%);\n\n  @media (prefers-color-scheme: dark) {\n    --light-grey: hsl(0 0% 20%);\n    --grey: hsl(0 0% 60%);\n    --dark-grey: hsl(0 0% 80%);\n  }\n}\n\n:host [command] {\n  padding: 1em;\n  text-align: center;\n  font-size: 3vw;\n  font-weight: lighter;\n  letter-spacing: 0.1em;\n  color: var(--dark-grey);\n\n  & > [light] {\n    color: var(--grey);\n  }\n\n  & > [tool] {\n    text-decoration: underline;\n    text-decoration-color: var(--theme-color);\n  }\n\n  & > :matches([negative],[side],[amount]) {\n    font-weight: normal;\n  }\n}\n\n:host [card] {\n  padding: 1em;\n  background: var(--theme-bg);\n  border-radius: 0.5em;\n  color: var(--dark-grey);\n  display: flex;\n  justify-content: space-evenly;\n\n  & > div:not([keyboard]) {\n    display: flex;\n    align-items: flex-end;\n    margin-left: 1em;\n  }\n}\n\n:host [tool-icon] {\n  position: absolute;\n  top: 1em;\n  left: 0;\n  width: 100%;\n  padding: 0 1rem;\n  display: flex;\n  justify-content: center;\n\n  & > span {\n    color: var(--dark-grey);\n    display: grid;\n    grid-template-columns: 5vmax auto;\n    grid-gap: 0.5em;\n    align-items: center;\n    text-transform: capitalize;\n    font-size: 4vmax;\n    font-weight: lighter;\n  }\n\n  & svg {\n    width: 100%;\n    fill: var(--theme-color);\n  }\n}\n\n:host section {\n  display: flex;\n  justify-content: center;\n}\n\n:host section > span, \n:host [arrows] > span {\n  border: 1px solid transparent;\n  border-radius: 0.5em;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 2px;\n  padding: 1.5vw;\n  font-size: 0.75em;\n  white-space: nowrap;\n}\n\n:host section > span:not([pressed=\"true\"]), \n:host [arrows] > span:not([pressed=\"true\"]) {\n  border: 1px solid var(--light-grey);\n\n  &:hover {\n    border-color: var(--grey);\n  }\n}\n\n:host span[pressed=\"true\"] {\n  background: var(--theme-color);\n  color: var(--theme-bg);\n}\n\n:host span:not([pressed=\"true\"]):matches([used]) {\n  background: var(--light-grey);\n  cursor: pointer;\n}\n\n:host span[hotkey] {\n  color: var(--theme-color);\n  font-weight: bold;\n  cursor: pointer;\n}\n\n:host section > span[hotkey]:not([pressed=\"true\"]) {\n  border-color: var(--theme-color);\n}\n\n:host [arrows] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n\n  & > span:nth-child(1) {\n    grid-row: 1;\n    grid-column: 2;\n  }\n\n  & > span:nth-child(2) {\n    grid-row: 2;\n    grid-column: 2;\n  }\n\n  & > span:nth-child(3) {\n    grid-row: 2;\n    grid-column: 1;\n  }\n\n  & > span:nth-child(4) {\n    grid-row: 2;\n    grid-column: 3;\n  }\n}\n\n:host [caps] > span:nth-child(1),\n:host [shift] > span:nth-child(1)  { justify-content: flex-start; }\n:host [shift] > span:nth-child(12) { justify-content: flex-end; }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/hotkey-map/base.element_dark.css":
/*!*********************************************************!*\
  !*** ./app/components/hotkey-map/base.element_dark.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --light-grey: hsl(0 0% 20%);
  --grey: hsl(0 0% 60%);
  --dark-grey: hsl(0 0% 80%);
}
`, "",{"version":3,"sources":["webpack://./app/components/hotkey-map/base.element_dark.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,0BAA0B;AAC5B","sourcesContent":[":host {\n  --light-grey: hsl(0 0% 20%);\n  --grey: hsl(0 0% 60%);\n  --dark-grey: hsl(0 0% 80%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/hotkey-map/base.element_light.css":
/*!**********************************************************!*\
  !*** ./app/components/hotkey-map/base.element_light.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --light-grey: hsl(0 0% 90%);
  --grey: hsl(0 0% 60%);
  --dark-grey: hsl(0 0% 40%);
}
`, "",{"version":3,"sources":["webpack://./app/components/hotkey-map/base.element_light.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,0BAA0B;AAC5B","sourcesContent":[":host {\n  --light-grey: hsl(0 0% 90%);\n  --grey: hsl(0 0% 60%);\n  --dark-grey: hsl(0 0% 40%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/metatip/metatip.element.css":
/*!****************************************************!*\
  !*** ./app/components/metatip/metatip.element.css ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  position: absolute;
  z-index: var(--layer-top);

  --arrow-width: 15px;
  --arrow-height: 8px;

  --shadow-up: 5px;
  --shadow-down: -5px;
  --shadow-direction: var(--shadow-up);

  --arrow-up: polygon(0 0, 100% 0, 50% 100%);
  --arrow-down: polygon(50% 0, 0 100%, 100% 100%);
  --arrow: var(--arrow-up);

  --border-radius: .75em;

  --copy-message-left-color: white;
  --copy-message-right-color: white;
}

:host figure {
  all: initial;
  direction: ltr;
  font-size: 16px;
  font-family: system-ui;
  max-width: 90vw;
  background: var(--theme-bd);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: var(--theme-text_color);
  line-height: initial;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border-radius: var(--border-radius);
  line-height: initial;

  border: 1px solid var(--theme-bg);
  box-shadow:
    0 3.6px 3.7px rgba(0, 0, 0, 0.101),
    0 12.1px 12.3px rgba(0, 0, 0, 0.149),
    0 -2px 4px rgba(0, 0, 0, 0.101),
    0 -12.1px 24px rgba(0, 0, 0, 0.149),
    0 54px 55px rgba(0, 0, 0, 0.25);


  @media (min-width: 540px) {
    max-width: max(40ch, 50vw);
  }

  &:after {
    content: "";
    background: var(--theme-bg);
    width: var(--arrow-width);
    height: var(--arrow-height);
    clip-path: var(--arrow);
    position: absolute;
    top: var(--arrow-top);
    left: var(--arrow-left);
  }

  & a {
    text-decoration: none;
    color: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      color: var(--theme-color);
      text-decoration: underline;
    }

    &:empty {
      display: none;
    }

    &[node]:before {
      content: "\\003c";
    }

    &[node]:after {
      content: "\\003e";
    }
  }
}

:host h5 {
  display: flex;
  font-size: 1em;
  font-weight: bolder;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  max-width: max-content;
}

:host small {
  font-size: 0.7em;
  color: var(--theme-icon_color);

  & > span {
    color: hsl(0,0%,20%);
  }
}

:host a:not(:hover) {
  text-decoration: none;
}

:host [brand] {
  color: var(--theme-color);
}

:host [divider] {
  color: var(--theme-blue);
}

:host header {
  padding: 5px 10px;
  user-select: none;
  text-shadow: var(--text-shadow);
}

:host code {
  display: grid;
  grid-template-columns: max-content auto;
  gap: .25em .5em;
  border-radius: var(--border-radius);
  list-style-type: none;
  color: var(--light-grey);
  background-color: var(--theme-bd-2);
  border-top: 1px solid var(--theme-bg);
  font-size: 1em;
  font-family: 'Dank Mono', 'Operator Mono', 'Inconsolata', 'Fira Mono', 'SF Mono', 'Monaco', 'Droid Sans Mono', 'Source Code Pro', monospace;

  &[accessibility] > [prop]:first-of-type {
    color: var(--theme-text_color);
  }
}

:host details > :is(summary,code),
:host > figure > code {
  padding: 10px;
  border-radius: var(--border-radius);
}

:host summary {
  outline-offset: -2px;
  outline-color: var(--theme-color);
  max-inline-size: max-content;

  &::marker {
    color: var(--theme-color);
  }
}

:host [value],
:host [local-change] {
  color: var(--theme-text_color);
  display: inline-grid;
  grid-auto-flow: column;
  gap: .5em;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  /* white-space: pre; */
}

:host [text] {
  white-space: normal;
}

:host [longform] {
  background: var(--theme-icon_hover-bg);
  padding: 0.5em 0.75em;
  border-radius: .25em;
  font-family: sans-serif;
  text-align: left;
  line-height: 1.5;
  max-inline-size: 40ch;
}

:host [prop] {
  color: var(--theme-color);
}

:host [color] {
  position: relative;
  top: 1px;
  display: inline-block;
  width: 1em;
  min-width: 1em;
  height: 1em;
  border-radius: 50%;
  box-shadow: inset 0 0 1px 0 hsl(0 0% 0% / 50%);
}

:host [color-value] {
  white-space: nowrap;
}

:host [local-modifications] {
  margin-top: 1em;
  margin-inline: 10px;
  color: var(--theme-purple);
  font-weight: bold;

  & + div {
    margin-bottom: 1em;
  }
}

:host [contrast-compliance] {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 3ch;
  padding: 10px 10px 5px;
}

:host [contrast] {
  display: grid;
  justify-items: start;

  & > [value] {
    font-size: 1.5em;
  }
}

:host [compliance] {
  display: grid;

  & > div {
    display: flex;
    align-items: center;
    gap: 2ch;
  }

  & > div > span {
    display: flex;
    align-items: center;
    gap: .5ch;
  }

  & svg {
    block-size: .75em;
  }
}

:host :is([contrast],[compliance]) [title] {
  font-size: .7em;
  opacity: .8;
}

:host [color-swatches] {
  display: flex;
  width: 100%;
  height: 7em;
  flex-direction: row;
  padding: 0;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 14em;
  }
}

:host [color-swatch] {
  min-width: 20ch;
  height: 7em;
  display: grid;
  position: relative;
  align-content: end;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  cursor: copy;

  @media (max-width: 700px) {
    width: 100%;
  }
}

:host [color-swatch] > small,
:host [color-swatch] > span,
:host [color-swatch]:after {
  cursor: copy;
}

:host [color-swatch] > small {
  opacity: .8;
}

:host [color-swatch]:after {
  content: "📋 \\00a0 copy";
  position: absolute;
  top: 10px;
  left: 10px;
  transition: opacity 0.3s;
  opacity: 0;
}

:host [color-swatch]:nth-child(1):after {
  color: var(--copy-message-left-color);
}

:host [color-swatch]:nth-child(2):after {
  color: var(--copy-message-right-color);
}

:host [color-swatch]:hover:after {
  opacity: 1;
}

:host [color-swatch]:focus:after {
  content: "📋 \\00a0 copied";
}

:host [accessibility] {
  display: flex;
  flex-direction: column;

  & > :not([contrast-compliance]) {
    display: grid;
    align-items: center;
    grid-template-columns: max-content 1fr;

    & [value] {
      display: grid;
      justify-content: flex-start;
      padding-left: 1em;
      text-align: left;
    }
  }

  & > [contrast-compliance] {
    justify-content: space-between;

    & [value] {
      justify-content: flex-start;
      margin-right: 7px;
    }
  }
}

:host [score] {
  font-size: 1.5em;
  line-height: .75;

  &[pass="true"] { color: green; }
  &[pass="false"] { color: red; }

  @media (prefers-color-scheme: dark) {
    &[pass="true"] { color: hsl(120deg 50% 75%); }
    &[pass="false"] { color: hsl(0deg 50% 65%); }
  }
}
`, "",{"version":3,"sources":["webpack://./app/components/metatip/metatip.element.css"],"names":[],"mappings":"AAEA;EACE,kBAAkB;EAClB,yBAAyB;;EAEzB,mBAAmB;EACnB,mBAAmB;;EAEnB,gBAAgB;EAChB,mBAAmB;EACnB,oCAAoC;;EAEpC,0CAA0C;EAC1C,+CAA+C;EAC/C,wBAAwB;;EAExB,sBAAsB;;EAEtB,gCAAgC;EAChC,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,eAAe;EACf,sBAAsB;EACtB,eAAe;EACf,2BAA2B;EAC3B,0BAA0B;EAC1B,kCAAkC;EAClC,8BAA8B;EAC9B,oBAAoB;EACpB,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,mCAAmC;EACnC,oBAAoB;;EAEpB,iCAAiC;EACjC;;;;;mCAKiC;;;EAGjC;IACE,0BAA0B;EAC5B;;EAEA;IACE,WAAW;IACX,2BAA2B;IAC3B,yBAAyB;IACzB,2BAA2B;IAC3B,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;EACzB;;EAEA;IACE,qBAAqB;IACrB,cAAc;IACd,uBAAuB;IACvB,gBAAgB;IAChB,eAAe;;IAEf;MACE,yBAAyB;MACzB,0BAA0B;IAC5B;;IAEA;MACE,aAAa;IACf;;IAEA;MACE,gBAAgB;IAClB;;IAEA;MACE,gBAAgB;IAClB;EACF;AACF;;AAEA;EACE,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,8BAA8B;;EAE9B;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,eAAe;EACf,mCAAmC;EACnC,qBAAqB;EACrB,wBAAwB;EACxB,mCAAmC;EACnC,qCAAqC;EACrC,cAAc;EACd,2IAA2I;;EAE3I;IACE,8BAA8B;EAChC;AACF;;AAEA;;EAEE,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,oBAAoB;EACpB,iCAAiC;EACjC,4BAA4B;;EAE5B;IACE,yBAAyB;EAC3B;AACF;;AAEA;;EAEE,8BAA8B;EAC9B,oBAAoB;EACpB,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,yBAAyB;EACzB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,sCAAsC;EACtC,qBAAqB;EACrB,oBAAoB;EACpB,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,qBAAqB;EACrB,UAAU;EACV,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,8CAA8C;AAChD;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,0BAA0B;EAC1B,iBAAiB;;EAEjB;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,QAAQ;EACR,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,oBAAoB;;EAEpB;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE,aAAa;;EAEb;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;EACV;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,SAAS;EACX;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,UAAU;;EAEV;IACE,sBAAsB;IACtB,YAAY;EACd;AACF;;AAEA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,SAAS;EACT,YAAY;;EAEZ;IACE,WAAW;EACb;AACF;;AAEA;;;EAGE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,wBAAwB;EACxB,UAAU;AACZ;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB;IACE,aAAa;IACb,mBAAmB;IACnB,sCAAsC;;IAEtC;MACE,aAAa;MACb,2BAA2B;MAC3B,iBAAiB;MACjB,gBAAgB;IAClB;EACF;;EAEA;IACE,8BAA8B;;IAE9B;MACE,2BAA2B;MAC3B,iBAAiB;IACnB;EACF;AACF;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;;EAEhB,iBAAiB,YAAY,EAAE;EAC/B,kBAAkB,UAAU,EAAE;;EAE9B;IACE,iBAAiB,0BAA0B,EAAE;IAC7C,kBAAkB,wBAAwB,EAAE;EAC9C;AACF","sourcesContent":["@import \"../_variables.css\";\n\n:host {\n  position: absolute;\n  z-index: var(--layer-top);\n\n  --arrow-width: 15px;\n  --arrow-height: 8px;\n\n  --shadow-up: 5px;\n  --shadow-down: -5px;\n  --shadow-direction: var(--shadow-up);\n\n  --arrow-up: polygon(0 0, 100% 0, 50% 100%);\n  --arrow-down: polygon(50% 0, 0 100%, 100% 100%);\n  --arrow: var(--arrow-up);\n\n  --border-radius: .75em;\n\n  --copy-message-left-color: white;\n  --copy-message-right-color: white;\n}\n\n:host figure {\n  all: initial;\n  direction: ltr;\n  font-size: 16px;\n  font-family: system-ui;\n  max-width: 90vw;\n  background: var(--theme-bd);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  color: var(--theme-text_color);\n  line-height: initial;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  border-radius: var(--border-radius);\n  line-height: initial;\n\n  border: 1px solid var(--theme-bg);\n  box-shadow:\n    0 3.6px 3.7px rgba(0, 0, 0, 0.101),\n    0 12.1px 12.3px rgba(0, 0, 0, 0.149),\n    0 -2px 4px rgba(0, 0, 0, 0.101),\n    0 -12.1px 24px rgba(0, 0, 0, 0.149),\n    0 54px 55px rgba(0, 0, 0, 0.25);\n\n\n  @media (min-width: 540px) {\n    max-width: max(40ch, 50vw);\n  }\n\n  &:after {\n    content: \"\";\n    background: var(--theme-bg);\n    width: var(--arrow-width);\n    height: var(--arrow-height);\n    clip-path: var(--arrow);\n    position: absolute;\n    top: var(--arrow-top);\n    left: var(--arrow-left);\n  }\n\n  & a {\n    text-decoration: none;\n    color: inherit;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    cursor: pointer;\n\n    &:hover {\n      color: var(--theme-color);\n      text-decoration: underline;\n    }\n\n    &:empty {\n      display: none;\n    }\n\n    &[node]:before {\n      content: \"\\003c\";\n    }\n\n    &[node]:after {\n      content: \"\\003e\";\n    }\n  }\n}\n\n:host h5 {\n  display: flex;\n  font-size: 1em;\n  font-weight: bolder;\n  margin: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: max-content;\n}\n\n:host small {\n  font-size: 0.7em;\n  color: var(--theme-icon_color);\n\n  & > span {\n    color: hsl(0,0%,20%);\n  }\n}\n\n:host a:not(:hover) {\n  text-decoration: none;\n}\n\n:host [brand] {\n  color: var(--theme-color);\n}\n\n:host [divider] {\n  color: var(--theme-blue);\n}\n\n:host header {\n  padding: 5px 10px;\n  user-select: none;\n  text-shadow: var(--text-shadow);\n}\n\n:host code {\n  display: grid;\n  grid-template-columns: max-content auto;\n  gap: .25em .5em;\n  border-radius: var(--border-radius);\n  list-style-type: none;\n  color: var(--light-grey);\n  background-color: var(--theme-bd-2);\n  border-top: 1px solid var(--theme-bg);\n  font-size: 1em;\n  font-family: 'Dank Mono', 'Operator Mono', 'Inconsolata', 'Fira Mono', 'SF Mono', 'Monaco', 'Droid Sans Mono', 'Source Code Pro', monospace;\n\n  &[accessibility] > [prop]:first-of-type {\n    color: var(--theme-text_color);\n  }\n}\n\n:host details > :is(summary,code),\n:host > figure > code {\n  padding: 10px;\n  border-radius: var(--border-radius);\n}\n\n:host summary {\n  outline-offset: -2px;\n  outline-color: var(--theme-color);\n  max-inline-size: max-content;\n\n  &::marker {\n    color: var(--theme-color);\n  }\n}\n\n:host [value],\n:host [local-change] {\n  color: var(--theme-text_color);\n  display: inline-grid;\n  grid-auto-flow: column;\n  gap: .5em;\n  align-items: center;\n  justify-content: flex-end;\n  text-align: right;\n  /* white-space: pre; */\n}\n\n:host [text] {\n  white-space: normal;\n}\n\n:host [longform] {\n  background: var(--theme-icon_hover-bg);\n  padding: 0.5em 0.75em;\n  border-radius: .25em;\n  font-family: sans-serif;\n  text-align: left;\n  line-height: 1.5;\n  max-inline-size: 40ch;\n}\n\n:host [prop] {\n  color: var(--theme-color);\n}\n\n:host [color] {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  width: 1em;\n  min-width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  box-shadow: inset 0 0 1px 0 hsl(0 0% 0% / 50%);\n}\n\n:host [color-value] {\n  white-space: nowrap;\n}\n\n:host [local-modifications] {\n  margin-top: 1em;\n  margin-inline: 10px;\n  color: var(--theme-purple);\n  font-weight: bold;\n\n  & + div {\n    margin-bottom: 1em;\n  }\n}\n\n:host [contrast-compliance] {\n  display: grid;\n  grid-template-columns: max-content max-content;\n  gap: 3ch;\n  padding: 10px 10px 5px;\n}\n\n:host [contrast] {\n  display: grid;\n  justify-items: start;\n\n  & > [value] {\n    font-size: 1.5em;\n  }\n}\n\n:host [compliance] {\n  display: grid;\n\n  & > div {\n    display: flex;\n    align-items: center;\n    gap: 2ch;\n  }\n\n  & > div > span {\n    display: flex;\n    align-items: center;\n    gap: .5ch;\n  }\n\n  & svg {\n    block-size: .75em;\n  }\n}\n\n:host :is([contrast],[compliance]) [title] {\n  font-size: .7em;\n  opacity: .8;\n}\n\n:host [color-swatches] {\n  display: flex;\n  width: 100%;\n  height: 7em;\n  flex-direction: row;\n  padding: 0;\n\n  @media (max-width: 700px) {\n    flex-direction: column;\n    height: 14em;\n  }\n}\n\n:host [color-swatch] {\n  min-width: 20ch;\n  height: 7em;\n  display: grid;\n  position: relative;\n  align-content: end;\n  box-sizing: border-box;\n  padding: 10px;\n  margin: 0;\n  cursor: copy;\n\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n}\n\n:host [color-swatch] > small,\n:host [color-swatch] > span,\n:host [color-swatch]:after {\n  cursor: copy;\n}\n\n:host [color-swatch] > small {\n  opacity: .8;\n}\n\n:host [color-swatch]:after {\n  content: \"📋 \\00a0 copy\";\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  transition: opacity 0.3s;\n  opacity: 0;\n}\n\n:host [color-swatch]:nth-child(1):after {\n  color: var(--copy-message-left-color);\n}\n\n:host [color-swatch]:nth-child(2):after {\n  color: var(--copy-message-right-color);\n}\n\n:host [color-swatch]:hover:after {\n  opacity: 1;\n}\n\n:host [color-swatch]:focus:after {\n  content: \"📋 \\00a0 copied\";\n}\n\n:host [accessibility] {\n  display: flex;\n  flex-direction: column;\n\n  & > :not([contrast-compliance]) {\n    display: grid;\n    align-items: center;\n    grid-template-columns: max-content 1fr;\n\n    & [value] {\n      display: grid;\n      justify-content: flex-start;\n      padding-left: 1em;\n      text-align: left;\n    }\n  }\n\n  & > [contrast-compliance] {\n    justify-content: space-between;\n\n    & [value] {\n      justify-content: flex-start;\n      margin-right: 7px;\n    }\n  }\n}\n\n:host [score] {\n  font-size: 1.5em;\n  line-height: .75;\n\n  &[pass=\"true\"] { color: green; }\n  &[pass=\"false\"] { color: red; }\n\n  @media (prefers-color-scheme: dark) {\n    &[pass=\"true\"] { color: hsl(120deg 50% 75%); }\n    &[pass=\"false\"] { color: hsl(0deg 50% 65%); }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/metatip/metatip.element_dark.css":
/*!*********************************************************!*\
  !*** ./app/components/metatip/metatip.element_dark.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host [score] {
  &[pass="true"] { color: hsl(120deg 50% 75%); }
  &[pass="false"] { color: hsl(0deg 50% 65%); }
}
`, "",{"version":3,"sources":["webpack://./app/components/metatip/metatip.element_dark.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB,0BAA0B,EAAE;EAC7C,kBAAkB,wBAAwB,EAAE;AAC9C","sourcesContent":[":host [score] {\n  &[pass=\"true\"] { color: hsl(120deg 50% 75%); }\n  &[pass=\"false\"] { color: hsl(0deg 50% 65%); }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/metatip/metatip.element_light.css":
/*!**********************************************************!*\
  !*** ./app/components/metatip/metatip.element_light.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host [score] {
  &[pass="true"] { color: green; }
  &[pass="false"] { color: red; }
}
`, "",{"version":3,"sources":["webpack://./app/components/metatip/metatip.element_light.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB,YAAY,EAAE;EAC/B,kBAAkB,UAAU,EAAE;AAChC","sourcesContent":[":host [score] {\n  &[pass=\"true\"] { color: green; }\n  &[pass=\"false\"] { color: red; }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/selection/box-model.element.css":
/*!********************************************************!*\
  !*** ./app/components/selection/box-model.element.css ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host [mask] {
  pointer-events: none;
  position: absolute;
  z-index: var(--layer-5);
  width: var(--width);
  height: var(--height);
  top: var(--top);
  left: var(--left);
  background-color: var(--bg);
  clip-path: polygon(
    0% 0%, 0% 100%, var(--target-left) 100%,
    var(--target-left) var(--target-top),
    var(--offset-right) var(--target-top),
    var(--offset-right) var(--offset-bottom),
    0 var(--offset-bottom), 0 100%,
    100% 100%, 100% 0%
  );
}`, "",{"version":3,"sources":["webpack://./app/components/selection/box-model.element.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;EACf,iBAAiB;EACjB,2BAA2B;EAC3B;;;;;;;GAOC;AACH","sourcesContent":[":host [mask] {\n  pointer-events: none;\n  position: absolute;\n  z-index: var(--layer-5);\n  width: var(--width);\n  height: var(--height);\n  top: var(--top);\n  left: var(--left);\n  background-color: var(--bg);\n  clip-path: polygon(\n    0% 0%, 0% 100%, var(--target-left) 100%,\n    var(--target-left) var(--target-top),\n    var(--offset-right) var(--target-top),\n    var(--offset-right) var(--offset-bottom),\n    0 var(--offset-bottom), 0 100%,\n    100% 100%, 100% 0%\n  );\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/selection/corners.element.css":
/*!******************************************************!*\
  !*** ./app/components/selection/corners.element.css ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host rect {
  width: 5px;
  height: 5px;
  vector-effect: non-scaling-stroke;
  stroke: var(--theme-purple);
  stroke-width: 1px;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 10px;
  stroke-dashoffset: 5px;
  x: 1px;
  y: 1px;

  &:nth-child(2) {
    x: calc(100% - 6px);
    y: 1px;
    stroke-dashoffset: 0;
  }

  &:nth-child(3) {
    x: calc(100% - 6px);
    y: calc(100% - 6px);
    stroke-dashoffset: 15px;
  }

  &:nth-child(4) {
    x: 1px;
    y: calc(100% - 6px);
    stroke-dashoffset: 10px;
  }
}

:host > svg {
  z-index: var(--layer-5);
}
`, "",{"version":3,"sources":["webpack://./app/components/selection/corners.element.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,WAAW;EACX,iCAAiC;EACjC,2BAA2B;EAC3B,iBAAiB;EACjB,UAAU;EACV,qBAAqB;EACrB,sBAAsB;EACtB,sBAAsB;EACtB,MAAM;EACN,MAAM;;EAEN;IACE,mBAAmB;IACnB,MAAM;IACN,oBAAoB;EACtB;;EAEA;IACE,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,MAAM;IACN,mBAAmB;IACnB,uBAAuB;EACzB;AACF;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":["@import \"../_variables.css\";\n\n:host rect {\n  width: 5px;\n  height: 5px;\n  vector-effect: non-scaling-stroke;\n  stroke: var(--theme-purple);\n  stroke-width: 1px;\n  fill: none;\n  stroke-linecap: round;\n  stroke-dasharray: 10px;\n  stroke-dashoffset: 5px;\n  x: 1px;\n  y: 1px;\n\n  &:nth-child(2) {\n    x: calc(100% - 6px);\n    y: 1px;\n    stroke-dashoffset: 0;\n  }\n\n  &:nth-child(3) {\n    x: calc(100% - 6px);\n    y: calc(100% - 6px);\n    stroke-dashoffset: 15px;\n  }\n\n  &:nth-child(4) {\n    x: 1px;\n    y: calc(100% - 6px);\n    stroke-dashoffset: 10px;\n  }\n}\n\n:host > svg {\n  z-index: var(--layer-5);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/selection/distance.element.css":
/*!*******************************************************!*\
  !*** ./app/components/selection/distance.element.css ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --line-color: var(--theme-purple);
  --line-base: var(--theme-color);
  --line-width: 1px;
  --distance-h: 5px;
  --distance-w: 5px;
  --line-w: 1px;
  --line-h: 1px;
  font-size: 16px;
}

:host > figure {
  margin: 0;
  position: absolute;
  height: var(--distance-h);
  width: var(--distance-w);
  top: var(--top);
  left: var(--left);
  right: var(--right);
  overflow: visible;
  pointer-events: none;
  z-index: var(--layer-3);
  display: flex;
  align-items: center;
  justify-content: var(--justify, 'flex-start');
  flex-direction: var(--direction);
}

:host > figure figcaption {
  min-height: 3ex;
  width: max-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: var(--text-shadow);
  box-shadow: var(--text-shadow);
  background: hsl(var(--line-color) / 75%);
  border: 1px solid hsl(var(--line-color));
  border-radius: 1em;
  font-size: 0.7em;
  font-weight: bold;
  line-height: 1.1;
  font-family: system-ui;
  padding: 0 1ex;
}

:host > figure span {
  background: hsl(var(--line-color));
  height: var(--line-h);
  width: var(--line-w);
}

:host > figure div {
  flex: 2;
  background: hsl(var(--line-color));
  width: var(--line-w);
  height: var(--line-h);
}

:host figure:matches([quadrant="bottom"], [quadrant="right"]) > div:first-of-type,
:host figure:matches([quadrant="top"], [quadrant="left"]) > div:last-of-type {
  background: linear-gradient(to var(--quadrant), hotpink 0%, hsl(var(--line-color)) 100%);
}
`, "",{"version":3,"sources":["webpack://./app/components/selection/distance.element.css"],"names":[],"mappings":"AAEA;EACE,iCAAiC;EACjC,+BAA+B;EAC/B,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,yBAAyB;EACzB,wBAAwB;EACxB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,6CAA6C;EAC7C,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,+BAA+B;EAC/B,8BAA8B;EAC9B,wCAAwC;EACxC,wCAAwC;EACxC,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,kCAAkC;EAClC,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,OAAO;EACP,kCAAkC;EAClC,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;;EAEE,wFAAwF;AAC1F","sourcesContent":["@import \"../_variables.css\";\n\n:host {\n  --line-color: var(--theme-purple);\n  --line-base: var(--theme-color);\n  --line-width: 1px;\n  --distance-h: 5px;\n  --distance-w: 5px;\n  --line-w: 1px;\n  --line-h: 1px;\n  font-size: 16px;\n}\n\n:host > figure {\n  margin: 0;\n  position: absolute;\n  height: var(--distance-h);\n  width: var(--distance-w);\n  top: var(--top);\n  left: var(--left);\n  right: var(--right);\n  overflow: visible;\n  pointer-events: none;\n  z-index: var(--layer-3);\n  display: flex;\n  align-items: center;\n  justify-content: var(--justify, 'flex-start');\n  flex-direction: var(--direction);\n}\n\n:host > figure figcaption {\n  min-height: 3ex;\n  width: max-content;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  text-shadow: var(--text-shadow);\n  box-shadow: var(--text-shadow);\n  background: hsl(var(--line-color) / 75%);\n  border: 1px solid hsl(var(--line-color));\n  border-radius: 1em;\n  font-size: 0.7em;\n  font-weight: bold;\n  line-height: 1.1;\n  font-family: system-ui;\n  padding: 0 1ex;\n}\n\n:host > figure span {\n  background: hsl(var(--line-color));\n  height: var(--line-h);\n  width: var(--line-w);\n}\n\n:host > figure div {\n  flex: 2;\n  background: hsl(var(--line-color));\n  width: var(--line-w);\n  height: var(--line-h);\n}\n\n:host figure:matches([quadrant=\"bottom\"], [quadrant=\"right\"]) > div:first-of-type,\n:host figure:matches([quadrant=\"top\"], [quadrant=\"left\"]) > div:last-of-type {\n  background: linear-gradient(to var(--quadrant), hotpink 0%, hsl(var(--line-color)) 100%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/selection/gridlines.element.css":
/*!********************************************************!*\
  !*** ./app/components/selection/gridlines.element.css ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --color: var(--theme-color);
}

:host > svg {
  position:absolute;
  top:0;
  left:0;
  overflow:visible;
  pointer-events:none;
  z-index:var(--layer-5);
}

:host rect, 
:host line {
  stroke: var(--color);
}

:host line {
  stroke-dasharray: 2;
  stroke-dasharray-offset: 3;
}
`, "",{"version":3,"sources":["webpack://./app/components/selection/gridlines.element.css"],"names":[],"mappings":"AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,KAAK;EACL,MAAM;EACN,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;;EAEE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,0BAA0B;AAC5B","sourcesContent":["@import \"../_variables.css\";\n\n:host {\n  --color: var(--theme-color);\n}\n\n:host > svg {\n  position:absolute;\n  top:0;\n  left:0;\n  overflow:visible;\n  pointer-events:none;\n  z-index:var(--layer-5);\n}\n\n:host rect, \n:host line {\n  stroke: var(--color);\n}\n\n:host line {\n  stroke-dasharray: 2;\n  stroke-dasharray-offset: 3;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/selection/grip.element.css":
/*!***************************************************!*\
  !*** ./app/components/selection/grip.element.css ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host g {
  transform: translate(calc(50% - 10%), calc(50% - .25em));
}

:host rect {
  vector-effect: non-scaling-stroke;
  height: .5em;
  width: 20%;
  max-width: 10vmax;
  stroke: var(--theme-color);
  stroke-width: 1px;
  stroke-linecap: round;
  rx: 4;
}

:host > svg {
  z-index: var(--layer-5);

  &[hovering] rect {
    fill: var(--theme-color);
  }
}
`, "",{"version":3,"sources":["webpack://./app/components/selection/grip.element.css"],"names":[],"mappings":"AAEA;EACE,wDAAwD;AAC1D;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,0BAA0B;EAC1B,iBAAiB;EACjB,qBAAqB;EACrB,KAAK;AACP;;AAEA;EACE,uBAAuB;;EAEvB;IACE,wBAAwB;EAC1B;AACF","sourcesContent":["@import \"../_variables.css\";\n\n:host g {\n  transform: translate(calc(50% - 10%), calc(50% - .25em));\n}\n\n:host rect {\n  vector-effect: non-scaling-stroke;\n  height: .5em;\n  width: 20%;\n  max-width: 10vmax;\n  stroke: var(--theme-color);\n  stroke-width: 1px;\n  stroke-linecap: round;\n  rx: 4;\n}\n\n:host > svg {\n  z-index: var(--layer-5);\n\n  &[hovering] rect {\n    fill: var(--theme-color);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/selection/handle.element.css":
/*!*****************************************************!*\
  !*** ./app/components/selection/handle.element.css ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  display: grid;
  grid-area: 1 / -1;
  place-self: var(--align-self, center) var(--justify-self, center);
  transform: translate(var(--translate-x, 0), var(--translate-y, 0));
}

:host([hidden]) {
  display: none;
}

:host > button {
  pointer-events: auto;
  background-color: white;
  border: 1px solid hotpink;
  padding: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  position: relative;
  cursor: var(--cursor);

  /* increase tap target size */
  &::before {
    content: '';
    position: absolute;
    inset: -0.5rem;
  }
}

:host([placement^="top"]) {
  --align-self: start;
  --translate-y: -50%;
}

:host([placement^="bottom"]) {
  --align-self: end;
  --translate-y: 50%;
}

:host([placement\$="start"]) {
  --justify-self: start;
  --translate-x: -50%;
}

:host([placement\$="end"]) {
  --justify-self: end;
  --translate-x: 50%;
}

:host([placement^="top"]),
:host([placement^="bottom"]) {
  --cursor: ns-resize;
}

:host([placement\$="start"]),
:host([placement\$="end"]) {
  --cursor: ew-resize;
}

:host([placement="top-start"]) {
  --cursor: nw-resize;
}

:host([placement="top-end"]) {
  --cursor: ne-resize;
}

:host([placement="bottom-start"]) {
  --cursor: sw-resize;
}

:host([placement="bottom-end"]) {
  --cursor: se-resize;
}
`, "",{"version":3,"sources":["webpack://./app/components/selection/handle.element.css"],"names":[],"mappings":"AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,iEAAiE;EACjE,kEAAkE;AACpE;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,yBAAyB;EACzB,UAAU;EACV,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;;EAErB,6BAA6B;EAC7B;IACE,WAAW;IACX,kBAAkB;IAClB,cAAc;EAChB;AACF;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["@import \"../_variables.css\";\n\n:host {\n  display: grid;\n  grid-area: 1 / -1;\n  place-self: var(--align-self, center) var(--justify-self, center);\n  transform: translate(var(--translate-x, 0), var(--translate-y, 0));\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host > button {\n  pointer-events: auto;\n  background-color: white;\n  border: 1px solid hotpink;\n  padding: 0;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  position: relative;\n  cursor: var(--cursor);\n\n  /* increase tap target size */\n  &::before {\n    content: '';\n    position: absolute;\n    inset: -0.5rem;\n  }\n}\n\n:host([placement^=\"top\"]) {\n  --align-self: start;\n  --translate-y: -50%;\n}\n\n:host([placement^=\"bottom\"]) {\n  --align-self: end;\n  --translate-y: 50%;\n}\n\n:host([placement$=\"start\"]) {\n  --justify-self: start;\n  --translate-x: -50%;\n}\n\n:host([placement$=\"end\"]) {\n  --justify-self: end;\n  --translate-x: 50%;\n}\n\n:host([placement^=\"top\"]),\n:host([placement^=\"bottom\"]) {\n  --cursor: ns-resize;\n}\n\n:host([placement$=\"start\"]),\n:host([placement$=\"end\"]) {\n  --cursor: ew-resize;\n}\n\n:host([placement=\"top-start\"]) {\n  --cursor: nw-resize;\n}\n\n:host([placement=\"top-end\"]) {\n  --cursor: ne-resize;\n}\n\n:host([placement=\"bottom-start\"]) {\n  --cursor: sw-resize;\n}\n\n:host([placement=\"bottom-end\"]) {\n  --cursor: se-resize;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/selection/handles.element.css":
/*!******************************************************!*\
  !*** ./app/components/selection/handles.element.css ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  position: var(--position, 'absolute');
  top: var(--top);
  left: var(--left);
  overflow: visible;
  pointer-events: none;
  z-index: var(--layer-3);
  width: var(--width);
  height: var(--height);
  display: grid;
  grid-template-rows: 1fr;
  isolation: isolate;
}

:host > svg {
  position: absolute;
}
`, "",{"version":3,"sources":["webpack://./app/components/selection/handles.element.css"],"names":[],"mappings":"AAEA;EACE,qCAAqC;EACrC,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["@import \"../_variables.css\";\n\n:host {\n  position: var(--position, 'absolute');\n  top: var(--top);\n  left: var(--left);\n  overflow: visible;\n  pointer-events: none;\n  z-index: var(--layer-3);\n  width: var(--width);\n  height: var(--height);\n  display: grid;\n  grid-template-rows: 1fr;\n  isolation: isolate;\n}\n\n:host > svg {\n  position: absolute;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/selection/hover.element.css":
/*!****************************************************!*\
  !*** ./app/components/selection/hover.element.css ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host rect {
  width: 100%;
  height: 100%;
  vector-effect: non-scaling-stroke;
  stroke: var(--hover-stroke, var(--theme-purple, hsl(267 100% 58%)));
  stroke-width: 1px;
  fill: none;
}

:host > svg {
  z-index: var(--layer-5);
}
`, "",{"version":3,"sources":["webpack://./app/components/selection/hover.element.css"],"names":[],"mappings":"AAEA;EACE,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,mEAAmE;EACnE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":["@import \"../_variables.css\";\n\n:host rect {\n  width: 100%;\n  height: 100%;\n  vector-effect: non-scaling-stroke;\n  stroke: var(--hover-stroke, var(--theme-purple, hsl(267 100% 58%)));\n  stroke-width: 1px;\n  fill: none;\n}\n\n:host > svg {\n  z-index: var(--layer-5);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/selection/label.element.css":
/*!****************************************************!*\
  !*** ./app/components/selection/label.element.css ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  font-size: 16px;
  --position: absolute;
  --top: 0;
  --left: 0;
  --max-width: 0;
}

:host > span {
  position: var(--position);
  top: var(--top);
  left: var(--left);
  max-width: var(--max-width);
  z-index: var(--layer-4);
  transform: translateY(-100%);
  background: var(--label-bg, hotpink);
  border-radius: 0.2em 0.2em 0 0;
  text-shadow: var(--text-shadow);
  color: white;
  display: inline-flex;
  justify-content: center;
  font-size: 0.8em;
  font-weight: normal;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
  white-space: nowrap;
  padding: 0.25em 0.4em 0.15em;
  line-height: 1.1;
}

:host a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    text-decoration: underline;
    color: white;
  }

  &[node]:before {
    content: "\\003c";
  }

  &[node]:after {
    content: "\\003e";
  }
}
`, "",{"version":3,"sources":["webpack://./app/components/selection/label.element.css"],"names":[],"mappings":"AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,QAAQ;EACR,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,iBAAiB;EACjB,2BAA2B;EAC3B,uBAAuB;EACvB,4BAA4B;EAC5B,oCAAoC;EACpC,8BAA8B;EAC9B,+BAA+B;EAC/B,YAAY;EACZ,oBAAoB;EACpB,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;EACnB,iGAAiG;EACjG,mBAAmB;EACnB,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,uBAAuB;EACvB,gBAAgB;;EAEhB;IACE,0BAA0B;IAC1B,YAAY;EACd;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;AACF","sourcesContent":["@import \"../_variables.css\";\n\n:host {\n  font-size: 16px;\n  --position: absolute;\n  --top: 0;\n  --left: 0;\n  --max-width: 0;\n}\n\n:host > span {\n  position: var(--position);\n  top: var(--top);\n  left: var(--left);\n  max-width: var(--max-width);\n  z-index: var(--layer-4);\n  transform: translateY(-100%);\n  background: var(--label-bg, hotpink);\n  border-radius: 0.2em 0.2em 0 0;\n  text-shadow: var(--text-shadow);\n  color: white;\n  display: inline-flex;\n  justify-content: center;\n  font-size: 0.8em;\n  font-weight: normal;\n  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n  white-space: nowrap;\n  padding: 0.25em 0.4em 0.15em;\n  line-height: 1.1;\n}\n\n:host a {\n  text-decoration: none;\n  color: inherit;\n  cursor: pointer;\n  text-overflow: ellipsis;\n  overflow: hidden;\n\n  &:hover {\n    text-decoration: underline;\n    color: white;\n  }\n\n  &[node]:before {\n    content: \"\\003c\";\n  }\n\n  &[node]:after {\n    content: \"\\003e\";\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/selection/offscreenLabel.element.css":
/*!*************************************************************!*\
  !*** ./app/components/selection/offscreenLabel.element.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_label_element_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./label.element.css */ "./app/components/selection/label.element.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_label_element_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --count: "\\00a0 0";
  --hover-text: "";
}

:host > [offscreen-label] {
  cursor: none;
}

:host > [offscreen-label]:after {
  content: var(--count);
}

:host > [offscreen-label]:hover:after {
  content: var(--hover-text);
}`, "",{"version":3,"sources":["webpack://./app/components/selection/offscreenLabel.element.css"],"names":[],"mappings":"AAIA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["@import \"../_variables.css\";\n\n@import \"./label.element.css\";\n\n:host {\n  --count: \"\\00a0 0\";\n  --hover-text: \"\";\n}\n\n:host > [offscreen-label] {\n  cursor: none;\n}\n\n:host > [offscreen-label]:after {\n  content: var(--count);\n}\n\n:host > [offscreen-label]:hover:after {\n  content: var(--hover-text);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/selection/overlay.element.css":
/*!******************************************************!*\
  !*** ./app/components/selection/overlay.element.css ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host svg {
  display: none;
  position: absolute;
  top: var(--top);
  left: var(--left);
  overflow: visible;
  pointer-events: none;
  z-index: var(--layer-5);

  & > rect {
    fill: hsla(330, 100%, 71%, 0.5);
    width: 100%;
    height: 100%;
  }
}
`, "",{"version":3,"sources":["webpack://./app/components/selection/overlay.element.css"],"names":[],"mappings":"AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,uBAAuB;;EAEvB;IACE,+BAA+B;IAC/B,WAAW;IACX,YAAY;EACd;AACF","sourcesContent":["@import \"../_variables.css\";\n\n:host svg {\n  display: none;\n  position: absolute;\n  top: var(--top);\n  left: var(--left);\n  overflow: visible;\n  pointer-events: none;\n  z-index: var(--layer-5);\n\n  & > rect {\n    fill: hsla(330, 100%, 71%, 0.5);\n    width: 100%;\n    height: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/vis-bug/vis-bug.element.css":
/*!****************************************************!*\
  !*** ./app/components/vis-bug/vis-bug.element.css ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!../_variables.css */ "./node_modules/css-loader/dist/cjs.js!./app/components/_variables.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--layer-1);
  max-width: min-content;

  opacity: 0;
  animation: present-yourself .3s ease forwards;

  @media (prefers-reduced-motion: no-preference) {
    transform: translateX(-200%);
  }

  & [constructible-support="true"] aside {
    transition: opacity 0.3s ease, transform 0.2s ease;
  }
}

:host > ol {
  all: initial;
  cursor: inherit;
  font-size: 16px;
  font-family: system-ui;
  display: flex;
  flex-direction: column;
  margin: 1em 0 0.5em 1em;
  padding: 0;
  list-style-type: none;
  border-radius: 2em;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &:first-of-type {
    box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,10%);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: var(--theme-bd-2);

    &:active {
      cursor: grabbing !important;
    }

    @media (prefers-color-scheme: dark) {
      box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,50%);
    }
  }
}

:host li {
  height: 2.25em;
  width: 2.25em;
  margin: 0.05em 0.25em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;

  &:first-child { margin-top: 0.25em; }
  &:last-child { margin-bottom: 0.25em; }

  &[data-tool] {
    &:hover {
      cursor: pointer;
      background-color: var(--theme-icon_hover-bg);
    }
    &:active {
      background-color: var(--theme-icon_active-bg);
    }
  }

  &[data-active=true] {
    background-color: var(--theme-bg);

    & > .icon-cursor {
      stroke: var(--theme-color);
    }

    & > svg:not(.icon-cursor) {
      fill: var(--theme-color);
    }
  }

  @media (max-height: 768px) {
    &:is(:nth-of-type(7),:nth-of-type(8), :nth-of-type(9), :nth-of-type(10), :nth-of-type(11), :nth-of-type(12), :nth-of-type(13)) > aside {
      top: auto;
    }
  }

  & > aside {
    overflow: hidden;
    position: absolute;
    direction: ltr;
    text-align: left;
    left: 3em;
    top: 0;
    z-index: -2;
    pointer-events: none;
    background: var(--theme-bg);
    color: var(--theme-text_color);
    box-shadow: 0 0.1em 4.5em hsla(0,0%,0%,15%);
    border-radius: 1em;

    opacity: 0;
    transform: translateX(-1em);
    will-change: transform, opacity;

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0s;
    }

    & > figure {
      margin: 0;
      display: grid;
    }

    & figcaption {
      padding: 1em;
      display: grid;
      gap: 1em;

      & > :is(h2,p) {
        margin: 0;
      }

      & > h2 {
        font-size: 1.5em;
        line-height: 1.1;
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        align-items: center;

        & u {
          text-decoration-color: var(--theme-color);
        }
      }

      & > p {
        font-size: 1em;
        line-height: 1.5;
        color: var(--theme-icon_color);
      }

      & [table] {
        display: grid;
        gap: 0.5em;

        & > div {
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: 1fr auto;
          justify-content: space-between;
        }
      }
    }

    & [hotkey] {
      border-radius: .25em;
      height: 1.5em;
      width: 1.5em;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--theme-color);
      color: var(--theme-color);
      font-weight: 300;
      font-size: 0.5em;
      text-transform: uppercase;
      box-shadow: 0 2px 2px hsla(0 0% 0% / .25)
    }
  }

  &:hover:not([data-tool="search"]) > aside,
  &[data-tool="search"] > svg:hover + aside {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 1s;
  }

  & input::-webkit-calendar-picker-indicator {
    background: inherit;
    color: var(--theme-color);
  }
}

:host [colors] {
  margin-top: .5em;
}

:host [colors] > li {
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 0 2px var(--theme-bg), 0 0.25em 0.5em hsla(0,0%,0%,25%);
  background: var(--contextual_color);
  margin-bottom: 0.5em;

  &:first-child {
    margin-top: 0;
  }
}

:host [colors] li:hover:after {
  top: 0;
}

:host li > svg {
  width: 50%;
  fill: var(--theme-icon_color);
}

:host li > svg.icon-cursor {
  width: 35%;
  fill: white;
  stroke: var(--theme-icon_color);
  stroke-width: 2px;
}

:host li[data-tool="search"] {
  &:before {
    transform: translateX(-1em);
    opacity: 0;
  }
}

:host li[data-tool="search"] > .search {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  z-index: -1;
  box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,10%);
  border-radius: 2em;
  overflow: hidden;
}

:host li[data-tool="search"] > .search > input {
  direction: ltr;
  border: none;
  font-size: 1em;
  padding: 0.4em 0.4em 0.4em 3em;
  outline: none;
  height: 100%;
  width: 250px;
  box-sizing: border-box;
  caret-color: hotpink;
  background-color: var(--theme-bg);
  color: var(--theme-text_color);
  cursor: initial;
  -webkit-appearance: none;

  &::placeholder {
    font-weight: lighter;
    font-size: 0.8em;
    color: var(--theme-icon_color);
  }
}

:host [colors] > li > svg {
  fill: var(--icon_color);
}

:host [colors] > li > svg > rect:last-child {
  stroke: hsla(0,0%,0%,20%);
  stroke-width: 0.5px;
}

:host input[type='color'] {
  opacity: 0.01;
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 1;
  box-sizing: border-box;
  border: white;
  padding: 0;
  cursor: pointer;
}

:host input[type='color']:focus {
  outline: none;
}

:host input[type='color']::-webkit-color-swatch-wrapper {
  padding: 0;
}

:host input[type='color']::-webkit-color-swatch {
  border: none;
}

:host input[type='color'][value='']::-webkit-color-swatch {
  background-color: transparent !important;
  background-image: linear-gradient(155deg, #ffffff 0%,#ffffff 46%,#ff0000 46%,#ff0000 54%,#ffffff 55%,#ffffff 100%);
}

@keyframes present-yourself {
  to {
    opacity: 1;
    transform: translate3d(0,0,0);
  }
}
`, "",{"version":3,"sources":["webpack://./app/components/vis-bug/vis-bug.element.css"],"names":[],"mappings":"AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,uBAAuB;EACvB,sBAAsB;;EAEtB,UAAU;EACV,6CAA6C;;EAE7C;IACE,4BAA4B;EAC9B;;EAEA;IACE,kDAAkD;EACpD;AACF;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,0BAA0B;EAC1B,kCAAkC;;EAElC;IACE,4CAA4C;IAC5C,0BAA0B;IAC1B,kCAAkC;IAClC,mCAAmC;;IAEnC;MACE,2BAA2B;IAC7B;;IAEA;MACE,4CAA4C;IAC9C;EACF;AACF;;AAEA;EACE,cAAc;EACd,aAAa;EACb,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;;EAElB,gBAAgB,kBAAkB,EAAE;EACpC,eAAe,qBAAqB,EAAE;;EAEtC;IACE;MACE,eAAe;MACf,4CAA4C;IAC9C;IACA;MACE,6CAA6C;IAC/C;EACF;;EAEA;IACE,iCAAiC;;IAEjC;MACE,0BAA0B;IAC5B;;IAEA;MACE,wBAAwB;IAC1B;EACF;;EAEA;IACE;MACE,SAAS;IACX;EACF;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,SAAS;IACT,MAAM;IACN,WAAW;IACX,oBAAoB;IACpB,2BAA2B;IAC3B,8BAA8B;IAC9B,2CAA2C;IAC3C,kBAAkB;;IAElB,UAAU;IACV,2BAA2B;IAC3B,+BAA+B;;IAE/B;MACE,uBAAuB;IACzB;;IAEA;MACE,SAAS;MACT,aAAa;IACf;;IAEA;MACE,YAAY;MACZ,aAAa;MACb,QAAQ;;MAER;QACE,SAAS;MACX;;MAEA;QACE,gBAAgB;QAChB,gBAAgB;QAChB,aAAa;QACb,sBAAsB;QACtB,8BAA8B;QAC9B,mBAAmB;;QAEnB;UACE,yCAAyC;QAC3C;MACF;;MAEA;QACE,cAAc;QACd,gBAAgB;QAChB,8BAA8B;MAChC;;MAEA;QACE,aAAa;QACb,UAAU;;QAEV;UACE,aAAa;UACb,sBAAsB;UACtB,+BAA+B;UAC/B,8BAA8B;QAChC;MACF;IACF;;IAEA;MACE,oBAAoB;MACpB,aAAa;MACb,YAAY;MACZ,oBAAoB;MACpB,mBAAmB;MACnB,uBAAuB;MACvB,oCAAoC;MACpC,yBAAyB;MACzB,gBAAgB;MAChB,gBAAgB;MAChB,yBAAyB;MACzB;IACF;EACF;;EAEA;;IAEE,UAAU;IACV,wBAAwB;IACxB,oBAAoB;EACtB;;EAEA;IACE,mBAAmB;IACnB,yBAAyB;EAC3B;AACF;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,uEAAuE;EACvE,mCAAmC;EACnC,oBAAoB;;EAEpB;IACE,aAAa;EACf;AACF;;AAEA;EACE,MAAM;AACR;;AAEA;EACE,UAAU;EACV,6BAA6B;AAC/B;;AAEA;EACE,UAAU;EACV,WAAW;EACX,+BAA+B;EAC/B,iBAAiB;AACnB;;AAEA;EACE;IACE,2BAA2B;IAC3B,UAAU;EACZ;AACF;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,YAAY;EACZ,WAAW;EACX,4CAA4C;EAC5C,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,cAAc;EACd,8BAA8B;EAC9B,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,oBAAoB;EACpB,iCAAiC;EACjC,8BAA8B;EAC9B,eAAe;EACf,wBAAwB;;EAExB;IACE,oBAAoB;IACpB,gBAAgB;IAChB,8BAA8B;EAChC;AACF;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM,EAAE,OAAO;EACf,WAAW,EAAE,YAAY;EACzB,UAAU;EACV,sBAAsB;EACtB,aAAa;EACb,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,wCAAwC;EACxC,kHAAkH;AACpH;;AAEA;EACE;IACE,UAAU;IACV,6BAA6B;EAC/B;AACF","sourcesContent":["@import \"../_variables.css\";\n\n:host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--layer-1);\n  max-width: min-content;\n\n  opacity: 0;\n  animation: present-yourself .3s ease forwards;\n\n  @media (prefers-reduced-motion: no-preference) {\n    transform: translateX(-200%);\n  }\n\n  & [constructible-support=\"true\"] aside {\n    transition: opacity 0.3s ease, transform 0.2s ease;\n  }\n}\n\n:host > ol {\n  all: initial;\n  cursor: inherit;\n  font-size: 16px;\n  font-family: system-ui;\n  display: flex;\n  flex-direction: column;\n  margin: 1em 0 0.5em 1em;\n  padding: 0;\n  list-style-type: none;\n  border-radius: 2em;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n\n  &:first-of-type {\n    box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,10%);\n    backdrop-filter: blur(5px);\n    -webkit-backdrop-filter: blur(5px);\n    background-color: var(--theme-bd-2);\n\n    &:active {\n      cursor: grabbing !important;\n    }\n\n    @media (prefers-color-scheme: dark) {\n      box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,50%);\n    }\n  }\n}\n\n:host li {\n  height: 2.25em;\n  width: 2.25em;\n  margin: 0.05em 0.25em;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  border-radius: 50%;\n\n  &:first-child { margin-top: 0.25em; }\n  &:last-child { margin-bottom: 0.25em; }\n\n  &[data-tool] {\n    &:hover {\n      cursor: pointer;\n      background-color: var(--theme-icon_hover-bg);\n    }\n    &:active {\n      background-color: var(--theme-icon_active-bg);\n    }\n  }\n\n  &[data-active=true] {\n    background-color: var(--theme-bg);\n\n    & > .icon-cursor {\n      stroke: var(--theme-color);\n    }\n\n    & > svg:not(.icon-cursor) {\n      fill: var(--theme-color);\n    }\n  }\n\n  @media (max-height: 768px) {\n    &:is(:nth-of-type(7),:nth-of-type(8), :nth-of-type(9), :nth-of-type(10), :nth-of-type(11), :nth-of-type(12), :nth-of-type(13)) > aside {\n      top: auto;\n    }\n  }\n\n  & > aside {\n    overflow: hidden;\n    position: absolute;\n    direction: ltr;\n    text-align: left;\n    left: 3em;\n    top: 0;\n    z-index: -2;\n    pointer-events: none;\n    background: var(--theme-bg);\n    color: var(--theme-text_color);\n    box-shadow: 0 0.1em 4.5em hsla(0,0%,0%,15%);\n    border-radius: 1em;\n\n    opacity: 0;\n    transform: translateX(-1em);\n    will-change: transform, opacity;\n\n    @media (prefers-reduced-motion: reduce) {\n      transition-duration: 0s;\n    }\n\n    & > figure {\n      margin: 0;\n      display: grid;\n    }\n\n    & figcaption {\n      padding: 1em;\n      display: grid;\n      gap: 1em;\n\n      & > :is(h2,p) {\n        margin: 0;\n      }\n\n      & > h2 {\n        font-size: 1.5em;\n        line-height: 1.1;\n        display: grid;\n        grid-auto-flow: column;\n        justify-content: space-between;\n        align-items: center;\n\n        & u {\n          text-decoration-color: var(--theme-color);\n        }\n      }\n\n      & > p {\n        font-size: 1em;\n        line-height: 1.5;\n        color: var(--theme-icon_color);\n      }\n\n      & [table] {\n        display: grid;\n        gap: 0.5em;\n\n        & > div {\n          display: grid;\n          grid-auto-flow: column;\n          grid-template-columns: 1fr auto;\n          justify-content: space-between;\n        }\n      }\n    }\n\n    & [hotkey] {\n      border-radius: .25em;\n      height: 1.5em;\n      width: 1.5em;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      border: 1px solid var(--theme-color);\n      color: var(--theme-color);\n      font-weight: 300;\n      font-size: 0.5em;\n      text-transform: uppercase;\n      box-shadow: 0 2px 2px hsla(0 0% 0% / .25)\n    }\n  }\n\n  &:hover:not([data-tool=\"search\"]) > aside,\n  &[data-tool=\"search\"] > svg:hover + aside {\n    opacity: 1;\n    transform: translateX(0);\n    transition-delay: 1s;\n  }\n\n  & input::-webkit-calendar-picker-indicator {\n    background: inherit;\n    color: var(--theme-color);\n  }\n}\n\n:host [colors] {\n  margin-top: .5em;\n}\n\n:host [colors] > li {\n  overflow: hidden;\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px var(--theme-bg), 0 0.25em 0.5em hsla(0,0%,0%,25%);\n  background: var(--contextual_color);\n  margin-bottom: 0.5em;\n\n  &:first-child {\n    margin-top: 0;\n  }\n}\n\n:host [colors] li:hover:after {\n  top: 0;\n}\n\n:host li > svg {\n  width: 50%;\n  fill: var(--theme-icon_color);\n}\n\n:host li > svg.icon-cursor {\n  width: 35%;\n  fill: white;\n  stroke: var(--theme-icon_color);\n  stroke-width: 2px;\n}\n\n:host li[data-tool=\"search\"] {\n  &:before {\n    transform: translateX(-1em);\n    opacity: 0;\n  }\n}\n\n:host li[data-tool=\"search\"] > .search {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  z-index: -1;\n  box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,10%);\n  border-radius: 2em;\n  overflow: hidden;\n}\n\n:host li[data-tool=\"search\"] > .search > input {\n  direction: ltr;\n  border: none;\n  font-size: 1em;\n  padding: 0.4em 0.4em 0.4em 3em;\n  outline: none;\n  height: 100%;\n  width: 250px;\n  box-sizing: border-box;\n  caret-color: hotpink;\n  background-color: var(--theme-bg);\n  color: var(--theme-text_color);\n  cursor: initial;\n  -webkit-appearance: none;\n\n  &::placeholder {\n    font-weight: lighter;\n    font-size: 0.8em;\n    color: var(--theme-icon_color);\n  }\n}\n\n:host [colors] > li > svg {\n  fill: var(--icon_color);\n}\n\n:host [colors] > li > svg > rect:last-child {\n  stroke: hsla(0,0%,0%,20%);\n  stroke-width: 0.5px;\n}\n\n:host input[type='color'] {\n  opacity: 0.01;\n  position: absolute;\n  top: 0; left: 0;\n  width: 100%; height: 100%;\n  z-index: 1;\n  box-sizing: border-box;\n  border: white;\n  padding: 0;\n  cursor: pointer;\n}\n\n:host input[type='color']:focus {\n  outline: none;\n}\n\n:host input[type='color']::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n:host input[type='color']::-webkit-color-swatch {\n  border: none;\n}\n\n:host input[type='color'][value='']::-webkit-color-swatch {\n  background-color: transparent !important;\n  background-image: linear-gradient(155deg, #ffffff 0%,#ffffff 46%,#ff0000 46%,#ff0000 54%,#ffffff 55%,#ffffff 100%);\n}\n\n@keyframes present-yourself {\n  to {\n    opacity: 1;\n    transform: translate3d(0,0,0);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/vis-bug/vis-bug.element_dark.css":
/*!*********************************************************!*\
  !*** ./app/components/vis-bug/vis-bug.element_dark.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host > ol {
  &:first-of-type {
    box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,50%);
  }
}
`, "",{"version":3,"sources":["webpack://./app/components/vis-bug/vis-bug.element_dark.css"],"names":[],"mappings":"AAAA;EACE;IACE,4CAA4C;EAC9C;AACF","sourcesContent":[":host > ol {\n  &:first-of-type {\n    box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,50%);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/vis-bug/vis-bug.element_light.css":
/*!**********************************************************!*\
  !*** ./app/components/vis-bug/vis-bug.element_light.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host > ol {
  &:first-of-type {
    box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,10%);
  }
}
`, "",{"version":3,"sources":["webpack://./app/components/vis-bug/vis-bug.element_light.css"],"names":[],"mappings":"AAAA;EACE;IACE,4CAA4C;EAC9C;AACF","sourcesContent":[":host > ol {\n  &:first-of-type {\n    box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,10%);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/hotkey-map/accessibility.element.js":
/*!************************************************************!*\
  !*** ./app/components/hotkey-map/accessibility.element.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilityHotkeys: () => (/* binding */ AccessibilityHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vis-bug/vis-bug.icons */ "./app/components/vis-bug/vis-bug.icons.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "./app/utilities/index.js");




class AccessibilityHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'p'
    this._usedkeys  = [_utilities__WEBPACK_IMPORTED_MODULE_2__.altKey]
    this.tool       = 'accessibility'
  }

  show() {
    this.$shadow.host.style.display = 'flex'
  }

  render() {
    return `
      <article>
        <div tool-icon>
          <span>
            ${_vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__.accessibility}
            ${this._tool} Tool
          </span>
        </div>
        <div command>
          coming soon
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-accessibility', AccessibilityHotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/align.element.js":
/*!****************************************************!*\
  !*** ./app/components/hotkey-map/align.element.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignHotkeys: () => (/* binding */ AlignHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ "./app/utilities/index.js");



const h_alignOptions  = ['left','center','right']
const v_alignOptions  = ['top','center','bottom']
const distOptions     = ['evenly','normal','between']

class AlignHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey   = 'a'
    this._usedkeys = [_utilities__WEBPACK_IMPORTED_MODULE_1__.metaKey,'shift']

    this._htool   = 0
    this._vtool   = 0
    this._dtool   = 1

    this._side         = 'top left'
    this._direction    = 'row'
    this._distribution = distOptions[this._dtool]
    this._wrap         = 'no wrap'

    this.tool     = 'align'
  }

  createCommand({e:{code}, hotkeys}) {
    let amount            = this._distribution
      , negative_modifier = this._direction
      , side              = this._side
      , negative          = this._wrap

    if (hotkeys[_utilities__WEBPACK_IMPORTED_MODULE_1__.metaKey] && hotkeys.shift) {
      if (code === 'ArrowUp')
        negative = 'no wrap'
      else if (code === 'ArrowDown')
        negative = 'wrap'
      else if (code === 'ArrowLeft')
        negative_modifier = `${negative_modifier}-reverse`
    }
    else if (hotkeys[_utilities__WEBPACK_IMPORTED_MODULE_1__.metaKey] && (code === 'ArrowRight' || code === 'ArrowDown')) {
      negative_modifier = code === 'ArrowDown'
        ? 'column'
        : 'row'
      this._direction = negative_modifier
    }
    else {
      if (code === 'ArrowUp')           side = this.clamp(v_alignOptions, '_vtool')
      else if (code === 'ArrowDown')    side = this.clamp(v_alignOptions, '_vtool', true)
      else                              side = v_alignOptions[this._vtool]

      if (code === 'ArrowLeft')         side += ' ' + this.clamp(h_alignOptions, '_htool')
      else if (code === 'ArrowRight')   side += ' ' + this.clamp(h_alignOptions, '_htool', true)
      else                              side += ' ' + h_alignOptions[this._htool]

      this._side = side

      if (hotkeys.shift && (code === 'ArrowRight' || code === 'ArrowLeft')) {
        amount = this.clamp(distOptions, '_dtool', code === 'ArrowRight')
        this._distribution = amount
      }
    }

    return {
      negative, negative_modifier, amount, side,
    }
  }

  displayCommand({side, amount, negative, negative_modifier}) {
    if (amount == 1) amount = this._distribution
    if (negative_modifier == ' to ') negative_modifier = this._direction

    return `
      <span tool>${this._tool}</span>
      <span light> as </span>
      <span>${negative_modifier}:</span>
      <span side>${side}</span>
      <span light>, distributed </span>
      <span amount>${amount},</span>
      <span light> with </span>
      <span>${negative}</span>
    `
  }

  clamp(range, tool, increment = false) {
    if (increment) {
      if (this[tool] < range.length - 1)
        this[tool] = this[tool] + 1
    }
    else if (this[tool] > 0)
      this[tool] = this[tool] - 1

    return range[this[tool]]
  }
}

customElements.define('hotkeys-align', AlignHotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/base.element.js":
/*!***************************************************!*\
  !*** ./app/components/hotkey-map/base.element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotkeyMap: () => (/* binding */ HotkeyMap)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vis-bug/vis-bug.icons */ "./app/components/vis-bug/vis-bug.icons.js");
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/ */ "./app/utilities/index.js");






class HotkeyMap extends HTMLElement {

  constructor() {
    super()

    this.keyboard_model = {
      num:    ['`','1','2','3','4','5','6','7','8','9','0','-','=','delete'],
      tab:    ['tab','q','w','e','r','t','y','u','i','o','p','[',']','\\'],
      caps:   ['caps','a','s','d','f','g','h','j','k','l','\'','return'],
      shift:  ['shift','z','x','c','v','b','n','m',',','.','/','shift'],
      space:  [_utilities___WEBPACK_IMPORTED_MODULE_4__.altKey, _utilities___WEBPACK_IMPORTED_MODULE_4__.metaKey, 'spacebar', _utilities___WEBPACK_IMPORTED_MODULE_4__.metaKey, _utilities___WEBPACK_IMPORTED_MODULE_4__.altKey],
    }

    this.key_size_model = {
      num:    {12:2},
      tab:    {0:2},
      caps:   {0:3,11:3},
      shift:  {0:6,11:6},
      space:  {2:10},
    }

    this.$shadow    = this.attachShadow({mode: 'closed'})

    this._hotkey    = ''
    this._usedkeys  = []

    this.tool       = 'hotkeymap'

    this.applyScheme = (0,_utilities___WEBPACK_IMPORTED_MODULE_4__.schemeRule)(
      this.$shadow,
      _styles_store__WEBPACK_IMPORTED_MODULE_3__.HotkeymapStyles, _styles_store__WEBPACK_IMPORTED_MODULE_3__.HotkeymapLightStyles, _styles_store__WEBPACK_IMPORTED_MODULE_3__.HotkeymapDarkStyles
    )
  }

  connectedCallback() {
    this.applyScheme(document.querySelector("vis-bug").getAttribute("color-scheme"))
    this.$shift  = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[keyboard] > section > [shift]', this.$shadow)
    this.$ctrl   = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[keyboard] > section > [ctrl]', this.$shadow)
    this.$alt    = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(`[keyboard] > section > [${_utilities___WEBPACK_IMPORTED_MODULE_4__.altKey}]`, this.$shadow)
    this.$cmd    = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(`[keyboard] > section > [${_utilities___WEBPACK_IMPORTED_MODULE_4__.metaKey}]`, this.$shadow)
    this.$up     = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[arrows] [up]', this.$shadow)
    this.$down   = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[arrows] [down]', this.$shadow)
    this.$left   = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[arrows] [left]', this.$shadow)
    this.$right  = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[arrows] [right]', this.$shadow)
  }

  disconnectedCallback() {}

  set tool(tool) {
    this._tool = tool
    this.$shadow.innerHTML = this.render()
  }

  show() {
    this.$shadow.host.style.display = 'flex'
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])('*', (e, handler) =>
      this.watchKeys(e, handler))
  }

  hide() {
    this.$shadow.host.style.display = 'none'
    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind('*')
  }

  watchKeys(e, handler) {
    e.preventDefault()
    e.stopImmediatePropagation()

    this.$shift.attr('pressed', hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].shift)
    this.$alt.attr('pressed', hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"][_utilities___WEBPACK_IMPORTED_MODULE_4__.altKey === 'opt' ? 'alt' : _utilities___WEBPACK_IMPORTED_MODULE_4__.altKey])
    this.$cmd.attr('pressed', hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"][_utilities___WEBPACK_IMPORTED_MODULE_4__.metaKey])
    this.$up.attr('pressed', e.code === 'ArrowUp')
    this.$down.attr('pressed', e.code === 'ArrowDown')
    this.$left.attr('pressed', e.code === 'ArrowLeft')
    this.$right.attr('pressed', e.code === 'ArrowRight')

    const { negative, negative_modifier, side, amount } = this.createCommand({e, hotkeys: hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"]})

    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[command]', this.$shadow)[0].innerHTML = this.displayCommand({
      negative, negative_modifier, side, amount,
    })
  }

  createCommand({e:{code}, hotkeys}) {
    let amount              = hotkeys.shift ? 10 : 1
    let negative            = hotkeys.alt ? 'Subtract' : 'Add'
    let negative_modifier   = hotkeys.alt ? 'from' : 'to'

    let side = '[arrow key]'
    if (code === 'ArrowUp')     side = 'the top side'
    if (code === 'ArrowDown')   side = 'the bottom side'
    if (code === 'ArrowLeft')   side = 'the left side'
    if (code === 'ArrowRight')  side = 'the right side'
    if (hotkeys[_utilities___WEBPACK_IMPORTED_MODULE_4__.metaKey])       side = 'all sides'

    if (hotkeys[_utilities___WEBPACK_IMPORTED_MODULE_4__.metaKey] && code === 'ArrowDown') {
      negative            = 'Subtract'
      negative_modifier   = 'from'
    }

    return {
      negative, negative_modifier, amount, side,
    }
  }

  displayCommand({negative, negative_modifier, side, amount}) {
    return `
      <span negative>${negative} </span>
      <span tool>${this._tool}</span>
      <span light> ${negative_modifier} </span>
      <span side>${side}</span>
      <span light> by </span>
      <span amount>${amount}</span>
    `
  }

  render() {
    return `
      <article>
        <div tool-icon>
          <span>
            ${_vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_2__[this._tool]}
            ${this._tool} Tool
          </span>
        </div>
        <div command>
          ${this.displayCommand({
            negative: `±[${_utilities___WEBPACK_IMPORTED_MODULE_4__.altKey}] `,
            negative_modifier: ' to ',
            tool: this._tool,
            side: '[arrow key]',
            amount: 1
          })}
        </div>
        <div card>
          <div keyboard>
            ${Object.entries(this.keyboard_model).reduce((keyboard, [row_name, row]) => `
              ${keyboard}
              <section ${row_name}>${row.reduce((row, key, i) => `
                ${row}
                <span
                  ${key}
                  ${this._hotkey == key ? 'hotkey title="Tool Shortcut Hotkey"' : ''}
                  ${this._usedkeys.includes(key) ? 'used' : ''}
                  style="flex:${this.key_size_model[row_name][i] || 1};"
                >${key}</span>
              `, '')}
              </section>
            `, '')}
          </div>
          <div>
            <section arrows>
              <span up used>↑</span>
              <span down used>↓</span>
              <span left used>←</span>
              <span right used>→</span>
            </section>
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('hotkey-map', HotkeyMap)


/***/ }),

/***/ "./app/components/hotkey-map/boxshadow.element.js":
/*!********************************************************!*\
  !*** ./app/components/hotkey-map/boxshadow.element.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxshadowHotkeys: () => (/* binding */ BoxshadowHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vis-bug/vis-bug.icons */ "./app/components/vis-bug/vis-bug.icons.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "./app/utilities/index.js");




class BoxshadowHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'd'
    this._usedkeys  = ['shift',_utilities__WEBPACK_IMPORTED_MODULE_2__.metaKey]
    this.tool       = 'boxshadow'
  }

  show() {
    this.$shadow.host.style.display = 'flex'
  }

  render() {
    return `
      <article>
        <div tool-icon>
          <span>
            ${_vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__.boxshadow}
            ${this._tool} Tool
          </span>
        </div>
        <div command>
          coming soon
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-boxshadow', BoxshadowHotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/font.element.js":
/*!***************************************************!*\
  !*** ./app/components/hotkey-map/font.element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontHotkeys: () => (/* binding */ FontHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ "./app/utilities/index.js");



class FontHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'f'
    this._usedkeys  = ['shift',_utilities__WEBPACK_IMPORTED_MODULE_1__.metaKey]
    this.tool       = 'font'
  }

  createCommand({e:{code}, hotkeys}) {
    let amount              = hotkeys.shift ? 10 : 1
    let negative            = '[increase/decrease]'
    let negative_modifier   = 'by'
    let side                = '[arrow key]'

    // kerning
    if (hotkeys.shift && (code === 'ArrowLeft' || code === 'ArrowRight')) {
      side    = 'kerning'
      amount  = '1px'

      if (code === 'ArrowLeft')
        negative  = 'decrease'
      if (code === 'ArrowRight')
        negative  = 'increase'
    }
    // leading
    else if (hotkeys.shift && (code === 'ArrowUp' || code === 'ArrowDown')) {
      side    = 'leading'
      amount  = '1px'

      if (code === 'ArrowUp')
        negative  = 'increase'
      if (code === 'ArrowDown')
        negative  = 'decrease'
    }
    // font weight
    else if (hotkeys[_utilities__WEBPACK_IMPORTED_MODULE_1__.metaKey] && (code === 'ArrowUp' || code === 'ArrowDown')) {
      side                = 'font weight'
      amount              = ''
      negative_modifier   = ''

      if (code === 'ArrowUp')
        negative  = 'increase'
      if (code === 'ArrowDown')
        negative  = 'decrease'
    }
    // font size
    else if (code === 'ArrowUp' || code === 'ArrowDown') {
      side    = 'font size'
      amount  = '1px'

      if (code === 'ArrowUp')
        negative  = 'increase'
      if (code === 'ArrowDown')
        negative  = 'decrease'
    }
    // text alignment
    else if (code === 'ArrowRight' || code === 'ArrowLeft') {
      side                = 'text alignment'
      amount              = ''
      negative            = 'adjust'
      negative_modifier   = ''
    }

    return {
      negative, negative_modifier, amount, side,
    }
  }

  displayCommand({negative, negative_modifier, side, amount}) {
    if (negative === `±[${_utilities__WEBPACK_IMPORTED_MODULE_1__.altKey}] `)
      negative = '[increase/decrease]'
    if (negative_modifier === ' to ')
      negative_modifier = ' by '

    return `
      <span negative>${negative}</span>
      <span side tool>${side}</span>
      <span light>${negative_modifier}</span>
      <span amount>${amount}</span>
    `
  }
}

customElements.define('hotkeys-font', FontHotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/guides.element.js":
/*!*****************************************************!*\
  !*** ./app/components/hotkey-map/guides.element.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuidesHotkeys: () => (/* binding */ GuidesHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vis-bug/vis-bug.icons */ "./app/components/vis-bug/vis-bug.icons.js");



class GuidesHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'g'
    this._usedkeys  = []
    this.tool       = 'guides'
  }

  show() {
    this.$shadow.host.style.display = 'flex'
  }

  render() {
    return `
      <article>
        <div tool-icon>
          <span>
            ${_vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__.guides}
            ${this._tool} Tool
          </span>
        </div>
        <div command>
          coming soon
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-guides', GuidesHotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/hotkeys.element.js":
/*!******************************************************!*\
  !*** ./app/components/hotkey-map/hotkeys.element.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hotkeys: () => (/* binding */ Hotkeys)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _guides_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guides.element */ "./app/components/hotkey-map/guides.element.js");
/* harmony import */ var _inspector_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector.element */ "./app/components/hotkey-map/inspector.element.js");
/* harmony import */ var _accessibility_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessibility.element */ "./app/components/hotkey-map/accessibility.element.js");
/* harmony import */ var _move_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./move.element */ "./app/components/hotkey-map/move.element.js");
/* harmony import */ var _margin_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./margin.element */ "./app/components/hotkey-map/margin.element.js");
/* harmony import */ var _padding_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./padding.element */ "./app/components/hotkey-map/padding.element.js");
/* harmony import */ var _align_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./align.element */ "./app/components/hotkey-map/align.element.js");
/* harmony import */ var _hueshift_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hueshift.element */ "./app/components/hotkey-map/hueshift.element.js");
/* harmony import */ var _boxshadow_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boxshadow.element */ "./app/components/hotkey-map/boxshadow.element.js");
/* harmony import */ var _position_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./position.element */ "./app/components/hotkey-map/position.element.js");
/* harmony import */ var _font_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./font.element */ "./app/components/hotkey-map/font.element.js");
/* harmony import */ var _text_element__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./text.element */ "./app/components/hotkey-map/text.element.js");
/* harmony import */ var _search_element__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search.element */ "./app/components/hotkey-map/search.element.js");

















class Hotkeys extends HTMLElement {

  constructor() {
    super()

    this.tool_map = {
      guides:         document.createElement('hotkeys-guides'),
      inspector:      document.createElement('hotkeys-inspector'),
      accessibility:  document.createElement('hotkeys-accessibility'),
      move:           document.createElement('hotkeys-move'),
      margin:         document.createElement('hotkeys-margin'),
      padding:        document.createElement('hotkeys-padding'),
      align:          document.createElement('hotkeys-align'),
      hueshift:       document.createElement('hotkeys-hueshift'),
      boxshadow:      document.createElement('hotkeys-boxshadow'),
      position:       document.createElement('hotkeys-position'),
      font:           document.createElement('hotkeys-font'),
      text:           document.createElement('hotkeys-text'),
      search:         document.createElement('hotkeys-search'),
    }

    Object.values(this.tool_map).forEach(tool =>
      this.appendChild(tool))
  }

  connectedCallback() {
    (0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])('shift+/', e =>
      this.cur_tool
        ? this.hideTool()
        : this.showTool())

    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])('esc', e => this.hideTool())
  }

  disconnectedCallback() {}

  hideTool() {
    if (!this.cur_tool) return
    this.cur_tool.hide()
    this.cur_tool = null
  }

  showTool() {
    this.cur_tool = this.tool_map[
      (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('vis-bug')[0].activeTool]
    this.cur_tool.show()
  }
}

customElements.define('visbug-hotkeys', Hotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/hueshift.element.js":
/*!*******************************************************!*\
  !*** ./app/components/hotkey-map/hueshift.element.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HueshiftHotkeys: () => (/* binding */ HueshiftHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vis-bug/vis-bug.icons */ "./app/components/vis-bug/vis-bug.icons.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "./app/utilities/index.js");




class HueshiftHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'h'
    this._usedkeys  = ['shift',_utilities__WEBPACK_IMPORTED_MODULE_2__.metaKey]
    this.tool       = 'hueshift'
  }

  createCommand({e:{code}, hotkeys}) {
    let amount              = hotkeys.shift ? 10 : 1
    let negative            = '[increase/decrease]'
    let negative_modifier   = 'by'
    let side                = '[arrow key]'

    // saturation
    if (hotkeys[_utilities__WEBPACK_IMPORTED_MODULE_2__.metaKey]) {
      side ='hue'

      if (code === 'ArrowDown')
        negative  = 'decrease'
      if (code === 'ArrowUp')
        negative  = 'increase'
    }
    else if (code === 'ArrowLeft' || code === 'ArrowRight') {
      side = 'saturation'

      if (code === 'ArrowLeft')
        negative  = 'decrease'
      if (code === 'ArrowRight')
        negative  = 'increase'
    }
    // lightness
    else if (code === 'ArrowUp' || code === 'ArrowDown') {
      side = 'lightness'

      if (code === 'ArrowDown')
        negative  = 'decrease'
      if (code === 'ArrowUp')
        negative  = 'increase'
    }

    return {
      negative, negative_modifier, amount, side,
    }
  }

  displayCommand({negative, negative_modifier, side, amount}) {
    if (negative === `±[${_utilities__WEBPACK_IMPORTED_MODULE_2__.altKey}] `)
      negative = '[increase/decrease]'
    if (negative_modifier === ' to ')
      negative_modifier = ' by '

    return `
      <span negative>${negative}</span>
      <span side tool>${side}</span>
      <span light>${negative_modifier}</span>
      <span amount>${amount}</span>
    `
  }
}

customElements.define('hotkeys-hueshift', HueshiftHotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/inspector.element.js":
/*!********************************************************!*\
  !*** ./app/components/hotkey-map/inspector.element.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectorHotkeys: () => (/* binding */ InspectorHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vis-bug/vis-bug.icons */ "./app/components/vis-bug/vis-bug.icons.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "./app/utilities/index.js");




class InspectorHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'i'
    this._usedkeys  = [_utilities__WEBPACK_IMPORTED_MODULE_2__.altKey]
    this.tool       = 'inspector'
  }

  show() {
    this.$shadow.host.style.display = 'flex'
  }

  render() {
    return `
      <article>
        <div tool-icon>
          <span>
            ${_vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__.inspector}
            ${this._tool} Tool
          </span>
        </div>
        <div command>
          coming soon
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-inspector', InspectorHotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/margin.element.js":
/*!*****************************************************!*\
  !*** ./app/components/hotkey-map/margin.element.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarginHotkeys: () => (/* binding */ MarginHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/ */ "./app/utilities/index.js");



class MarginHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'm'
    this._usedkeys  = ['shift',_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey,_utilities___WEBPACK_IMPORTED_MODULE_1__.altKey]

    this.tool       = 'margin'
  }
}

customElements.define('hotkeys-margin', MarginHotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/move.element.js":
/*!***************************************************!*\
  !*** ./app/components/hotkey-map/move.element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MoveHotkeys: () => (/* binding */ MoveHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");


class MoveHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey  = 'v'
    this.tool     = 'move'
  }

  createCommand({e:{code}, hotkeys}) {
    let amount, negative, negative_modifier

    let side = '[arrow key]'
    if (code === 'ArrowUp')     side = 'up & out of div'
    if (code === 'ArrowDown')   side = 'down & into next sibling / out & under div'
    if (code === 'ArrowLeft')   side = 'towards the front/top of the stack'
    if (code === 'ArrowRight')  side = 'towards the back/bottom of the stack'

    return {
      negative, negative_modifier, amount, side,
    }
  }

  displayCommand({side}) {
    return `
      <span tool>${this._tool}</span>
      <span side>${side}</span>
    `
  }
}

customElements.define('hotkeys-move', MoveHotkeys)

/***/ }),

/***/ "./app/components/hotkey-map/padding.element.js":
/*!******************************************************!*\
  !*** ./app/components/hotkey-map/padding.element.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaddingHotkeys: () => (/* binding */ PaddingHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/ */ "./app/utilities/index.js");



class PaddingHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'p'
    this._usedkeys  = ['shift',_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey,_utilities___WEBPACK_IMPORTED_MODULE_1__.altKey]

    this.tool       = 'padding'
  }
}

customElements.define('hotkeys-padding', PaddingHotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/position.element.js":
/*!*******************************************************!*\
  !*** ./app/components/hotkey-map/position.element.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PositionHotkeys: () => (/* binding */ PositionHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vis-bug/vis-bug.icons */ "./app/components/vis-bug/vis-bug.icons.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities */ "./app/utilities/index.js");




class PositionHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'l'
    this._usedkeys  = ['shift',_utilities__WEBPACK_IMPORTED_MODULE_2__.altKey]
    this.tool       = 'position'
  }

  show() {
    this.$shadow.host.style.display = 'flex'
  }

  render() {
    return `
      <article>
        <div tool-icon>
          <span>
            ${_vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__.position}
            ${this._tool} Tool
          </span>
        </div>
        <div command>
          coming soon
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-position', PositionHotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/search.element.js":
/*!*****************************************************!*\
  !*** ./app/components/hotkey-map/search.element.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchHotkeys: () => (/* binding */ SearchHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vis-bug/vis-bug.icons */ "./app/components/vis-bug/vis-bug.icons.js");



class SearchHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 's'
    this._usedkeys  = []
    this.tool       = 'search'
  }

  show() {
    this.$shadow.host.style.display = 'flex'
  }

  render() {
    return `
      <article>
        <div tool-icon>
          <span>
            ${_vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__.search}
            ${this._tool} Tool
          </span>
        </div>
        <div command>
          coming soon
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-search', SearchHotkeys)


/***/ }),

/***/ "./app/components/hotkey-map/text.element.js":
/*!***************************************************!*\
  !*** ./app/components/hotkey-map/text.element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextHotkeys: () => (/* binding */ TextHotkeys)
/* harmony export */ });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.element */ "./app/components/hotkey-map/base.element.js");
/* harmony import */ var _vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vis-bug/vis-bug.icons */ "./app/components/vis-bug/vis-bug.icons.js");



class TextHotkeys extends _base_element__WEBPACK_IMPORTED_MODULE_0__.HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'e'
    this._usedkeys  = []
    this.tool       = 'text'
  }

  show() {
    this.$shadow.host.style.display = 'flex'
  }

  render() {
    return `
      <article>
        <div tool-icon>
          <span>
            ${_vis_bug_vis_bug_icons__WEBPACK_IMPORTED_MODULE_1__.text}
            ${this._tool} Tool
          </span>
        </div>
        <div command>
          coming soon
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-text', TextHotkeys)


/***/ }),

/***/ "./app/components/index.js":
/*!*********************************!*\
  !*** ./app/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ally: () => (/* reexport safe */ _metatip_ally_element__WEBPACK_IMPORTED_MODULE_11__.Ally),
/* harmony export */   BoxModel: () => (/* reexport safe */ _selection_box_model_element__WEBPACK_IMPORTED_MODULE_7__.BoxModel),
/* harmony export */   Corners: () => (/* reexport safe */ _selection_corners_element__WEBPACK_IMPORTED_MODULE_8__.Corners),
/* harmony export */   Distance: () => (/* reexport safe */ _selection_distance_element__WEBPACK_IMPORTED_MODULE_5__.Distance),
/* harmony export */   Gridlines: () => (/* reexport safe */ _selection_gridlines_element__WEBPACK_IMPORTED_MODULE_4__.Gridlines),
/* harmony export */   Grip: () => (/* reexport safe */ _selection_grip_element__WEBPACK_IMPORTED_MODULE_9__.Grip),
/* harmony export */   Handle: () => (/* reexport safe */ _selection_handle_element__WEBPACK_IMPORTED_MODULE_1__.Handle),
/* harmony export */   Handles: () => (/* reexport safe */ _selection_handles_element__WEBPACK_IMPORTED_MODULE_0__.Handles),
/* harmony export */   Hotkeys: () => (/* reexport safe */ _hotkey_map_hotkeys_element__WEBPACK_IMPORTED_MODULE_12__.Hotkeys),
/* harmony export */   Hover: () => (/* reexport safe */ _selection_hover_element__WEBPACK_IMPORTED_MODULE_2__.Hover),
/* harmony export */   Label: () => (/* reexport safe */ _selection_label_element__WEBPACK_IMPORTED_MODULE_3__.Label),
/* harmony export */   Metatip: () => (/* reexport safe */ _metatip_metatip_element__WEBPACK_IMPORTED_MODULE_10__.Metatip),
/* harmony export */   Overlay: () => (/* reexport safe */ _selection_overlay_element__WEBPACK_IMPORTED_MODULE_6__.Overlay)
/* harmony export */ });
/* harmony import */ var _selection_handles_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/handles.element */ "./app/components/selection/handles.element.js");
/* harmony import */ var _selection_handle_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selection/handle.element */ "./app/components/selection/handle.element.js");
/* harmony import */ var _selection_hover_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selection/hover.element */ "./app/components/selection/hover.element.js");
/* harmony import */ var _selection_label_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selection/label.element */ "./app/components/selection/label.element.js");
/* harmony import */ var _selection_gridlines_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selection/gridlines.element */ "./app/components/selection/gridlines.element.js");
/* harmony import */ var _selection_distance_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection/distance.element */ "./app/components/selection/distance.element.js");
/* harmony import */ var _selection_overlay_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection/overlay.element */ "./app/components/selection/overlay.element.js");
/* harmony import */ var _selection_box_model_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selection/box-model.element */ "./app/components/selection/box-model.element.js");
/* harmony import */ var _selection_corners_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selection/corners.element */ "./app/components/selection/corners.element.js");
/* harmony import */ var _selection_grip_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selection/grip.element */ "./app/components/selection/grip.element.js");
/* harmony import */ var _metatip_metatip_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./metatip/metatip.element */ "./app/components/metatip/metatip.element.js");
/* harmony import */ var _metatip_ally_element__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metatip/ally.element */ "./app/components/metatip/ally.element.js");
/* harmony import */ var _hotkey_map_hotkeys_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hotkey-map/hotkeys.element */ "./app/components/hotkey-map/hotkeys.element.js");

















/***/ }),

/***/ "./app/components/metatip/ally.element.js":
/*!************************************************!*\
  !*** ./app/components/metatip/ally.element.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ally: () => (/* binding */ Ally)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var _metatip_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metatip.element.js */ "./app/components/metatip/metatip.element.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");
/* harmony import */ var _features___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/ */ "./app/features/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities */ "./app/utilities/index.js");
/* harmony import */ var _features_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/color.js */ "./app/features/color.js");








const modemap = {
  'hex': 'toHexString',
  'hsl': 'toHslString',
  'rgb': 'toRgbString',
}

class Ally extends _metatip_element_js__WEBPACK_IMPORTED_MODULE_1__.Metatip {
  constructor() {
    super()
    this.copyColorSwatch = this.copyColorSwatch.bind(this)
  }

  async copyToClipboard(text) {
    const {state} = await navigator.permissions.query({name:'clipboard-write'})

    if (state === 'granted')
      navigator.clipboard.writeText(text)
  }

  copyColorSwatch(event) {
    this.copyToClipboard(event.currentTarget.querySelector('span').innerText.trim())
  }

  observe() {
    (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[color-swatch]', this.$shadow).on('click', this.copyColorSwatch)

    ;(0,_features___WEBPACK_IMPORTED_MODULE_2__.draggable)({
      el: this,
      surface: this.$shadow.querySelector('header'),
      cursor: 'grab',
    })
  }

  unobserve() {
    (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[color-swatch]', this.$shadow).off('click', this.copyColorSwatch)
  }

  render({el, ally_attributes, contrast_results}) {
    const colormode = modemap[(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('vis-bug').attr('color-mode')]

    const foreground = el instanceof SVGElement
      ? ((0,_utilities__WEBPACK_IMPORTED_MODULE_3__.getStyle)(el, 'fill') || (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.getStyle)(el, 'stroke'))
      : (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.getStyle)(el, 'color')
    const background = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.getComputedBackgroundColor)(el)

    const contrastingForegroundColor = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.getContrastingColor)(foreground)
    const contrastingBackgroundColor = (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.getContrastingColor)(background)

    this.style.setProperty('--copy-message-left-color', contrastingForegroundColor)
    this.style.setProperty('--copy-message-right-color', contrastingBackgroundColor)

    return `
      <figure>
        <header>
          <h5>&#60;${el.nodeName.toLowerCase()}&#62;${el.id && '#' + el.id}</h5>
        </header>
        <div color-swatches>
          <span color-swatch style="background-color:${foreground};" tabindex="0">
            <small style="color:${contrastingForegroundColor};">
              Foreground
            </small>
            <span style="color:${contrastingForegroundColor};">
              ${(0,_features_color_js__WEBPACK_IMPORTED_MODULE_4__.functionalNotate)(new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__.TinyColor(foreground)[colormode]())}
            </span>
          </span>
          <span color-swatch style="background-color:${background};" tabindex="0">
            <small style="color:${contrastingBackgroundColor};">
              Background
            </small>
            <span style="color:${contrastingBackgroundColor};">
              ${(0,_features_color_js__WEBPACK_IMPORTED_MODULE_4__.functionalNotate)(new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__.TinyColor(background)[colormode]())}
            </span>
          </span>
        </div>
        ${contrast_results}
        ${ally_attributes.length > 0
          ? `<code accessibility>
                <div>
                  ${ally_attributes.reduce((items, attr) => `
                    ${items}
                    <span prop>${attr.prop}:</span>
                    <span value>${attr.value}</span>
                  `, '')}
                </div>
              </code>`
          : ''
        }

      </figure>
    `
  }
}

customElements.define('visbug-ally', Ally)


/***/ }),

/***/ "./app/components/metatip/metatip.element.js":
/*!***************************************************!*\
  !*** ./app/components/metatip/metatip.element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Metatip: () => (/* binding */ Metatip)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/ */ "./app/utilities/index.js");
/* harmony import */ var _features___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/ */ "./app/features/index.js");
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");





class Metatip extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.applyScheme = (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.schemeRule)(
      this.$shadow,
      _styles_store__WEBPACK_IMPORTED_MODULE_3__.MetatipStyles, _styles_store__WEBPACK_IMPORTED_MODULE_3__.MetatipLightStyles, _styles_store__WEBPACK_IMPORTED_MODULE_3__.MetatipDarkStyles
    )

    this.observe = this.observe.bind(this)
    this.dispatchQuery = this.dispatchQuery.bind(this)
    this.dispatchUnQuery = this.dispatchUnQuery.bind(this)
  }

  connectedCallback() {
    this.applyScheme(document.querySelector("vis-bug").getAttribute("color-scheme"))
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$shadow.host).on('mouseenter', this.observe)
  }

  disconnectedCallback() {
    this.unobserve()
  }

  dispatchQuery(e) {
    this.$shadow.host.dispatchEvent(new CustomEvent('query', {
      bubbles: true,
      detail:   {
        text:       e.target.textContent,
        activator:  e.type,
      }
    }))
  }

  observe() {
    (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('h5 > a', this.$shadow).on('click mouseenter', this.dispatchQuery)
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('h5 > a', this.$shadow).on('mouseleave', this.dispatchUnQuery)

    ;(0,_features___WEBPACK_IMPORTED_MODULE_2__.draggable)({
      el: this,
      surface: this.$shadow.querySelector('header'),
      cursor: 'grab',
    })
  }

  unobserve() {
    (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('h5 > a', this.$shadow).off('click mouseenter', this.dispatchQuery)
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('h5 > a', this.$shadow).off('mouseleave', this.dispatchUnQuery)
  }

  dispatchUnQuery(e) {
    this.$shadow.host.dispatchEvent(new CustomEvent('unquery', {
      bubbles: true
    }))
    this.unobserve()
    this.teardown()
  }

  set meta(data) {
    this.$shadow.innerHTML = this.render(data)
  }

  render({el, width, height, localModifications, notLocalModifications}) {
    return `
      <figure>
        <header>
          <h5>
            <a node>${el.nodeName.toLowerCase()}</a>
            <a>${el.id && '#' + el.id}</a>
            ${(0,_utilities___WEBPACK_IMPORTED_MODULE_1__.createClassname)(el).split('.')
              .filter(name => name != '')
              .reduce((links, name) => `
                ${links}
                <a>.${name}</a>
              `, '')
            }
          </h5>
          <small>
            <span>${Math.round(width)}</span><span brand>px</span>
            <span divider>×</span>
            <span>${Math.round(height)}</span><span brand>px</span>
          </small>
        </header>

        <code>${notLocalModifications.reduce((items, item) => `
          ${items}
          <span><span prop>${item.prop}</span>:</span>
          <span value>${item.value}</span>
        `, '')}
        </code>
        ${localModifications.length ? `
          <details>
            <summary>Local Modifications / Inline Styles</summary>
            <code>${localModifications.reduce((items, item) => `
              ${items}
              <span><span prop>${item.prop}</span>:</span>
              <span value>${item.value}</span>
            `, '')}
            </code>
          </details>
        ` : ''}
      </figure>
    `
  }
}

customElements.define('visbug-metatip', Metatip)


/***/ }),

/***/ "./app/components/selection/box-model.element.js":
/*!*******************************************************!*\
  !*** ./app/components/selection/box-model.element.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxModel: () => (/* binding */ BoxModel)
/* harmony export */ });
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");


class BoxModel extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.drawable = {}
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [_styles_store__WEBPACK_IMPORTED_MODULE_0__.BoxModelStyles]
  }

  disconnectedCallback() {}

  set position(payload) {
    this.$shadow.innerHTML = this.render(payload)
    if (!this.drawable.measurements) // && payload.color === 'pink'
      this.createMeasurements(payload)
  }

  render({mode, bounds, sides, color = 'pink'}) {
    const total_height  = bounds.height + sides.bottom + sides.top
    const total_width   = bounds.width + sides.right + sides.left

    if (mode === 'padding') {
      this.drawable = {
        height:   bounds.height,
        width:    bounds.width,
        top:      0,
        left:     0,
        rotation: 'rotate(-45)',
      }
    }
    else if (mode === 'margin') {
      this.drawable = {
        height:   total_height,
        width:    total_width,
        top:      0 - sides.top,
        left:     0 - sides.left,
        rotation: 'rotate(45)',
      }
    }

    if (color === 'pink') {
      this.drawable.bg = 'hsla(330, 100%, 71%, 15%)'
      this.drawable.stripe = 'hsla(330, 100%, 71%, 80%)'
    }
    else {
      this.drawable.bg = 'hsla(267, 100%, 58%, 15%)'
      this.drawable.stripe = 'hsla(267, 100%, 58%, 80%)'
    }

    this.styles({sides})

    return `
      <div mask>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="pinstripe" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="${this.drawable.rotation}" class="pattern">
              <line x1="0" y="0" x2="0" y2="10" stroke="${this.drawable.stripe}" stroke-width="1"></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pinstripe)"></rect>
        </svg>
      </div>
    `
  }

  styles({sides}) {
    this.style.setProperty('--width', `${this.drawable.width}px`)
    this.style.setProperty('--height', `${this.drawable.height}px`)
    this.style.setProperty('--top', `${this.drawable.top}px`)
    this.style.setProperty('--left', `${this.drawable.left}px`)
    this.style.setProperty('--bg', `${this.drawable.bg}`)

    this.style.setProperty('--target-left', `${sides.left}px`)
    this.style.setProperty('--target-top', `${sides.top}px`)
    this.style.setProperty('--target-right', `${sides.right}px`)
    this.style.setProperty('--target-bottom', `${sides.bottom}px`)

    this.style.setProperty('--offset-right', `${this.drawable.width - sides.right}px`)
    this.style.setProperty('--offset-bottom', `${this.drawable.height - sides.bottom}px`)
  }

  createMeasurements({mode, bounds, sides, color}) {
    const win_width   = window.innerWidth
    const pill_height = 18
    const offset      = 3

    if (mode === 'margin') {
      if (sides.top) {
        this.createMeasurement({
          x: (bounds.width / 2) - offset,
          y: (window.scrollY * -1) - sides.top,
          d: sides.top,
          q: 'top',
          v: true,
          color,
        })
      }
      if (sides.bottom) {
        this.createMeasurement({
          x: (bounds.width / 2) - offset,
          y: (window.scrollY * -1) + bounds.height,
          d: sides.bottom,
          q: 'bottom',
          v: true,
          color,
        })
      }
      if (sides.right) {
        this.createMeasurement({
          x: bounds.width,
          y: (window.scrollY * -1) + (bounds.height / 2) - offset,
          d: sides.right,
          q: 'right',
          v: false,
          color,
        })
      }
      if (sides.left) {
        this.createMeasurement({
          x: bounds.width,
          y: (window.scrollY * -1) + (bounds.height / 2) - offset,
          d: sides.left,
          q: 'left',
          v: false,
          color,
        })
      }
    }
    else if (mode === 'padding') {
      if (sides.top) {
        this.createMeasurement({
          x: (bounds.width / 2) - offset,
          y: (window.scrollY * -1),
          d: sides.top,
          q: 'top',
          v: true,
          color,
        })
      }
       if (sides.bottom) {
         this.createMeasurement({
           x: (bounds.width / 2) - offset,
           y: (window.scrollY * -1) + (bounds.height - sides.bottom),
           d: sides.bottom,
           q: 'bottom',
           v: true,
           color,
         })
       }
       if (sides.right) {
         this.createMeasurement({
           x: bounds.width - sides.right,
           y: (window.scrollY * -1) + (bounds.height / 2) - offset,
           d: sides.right,
           q: 'right',
           v: false,
           color,
         })
       }
       if (sides.left) {
         this.createMeasurement({
           x: bounds.width - sides.left,
           y: (window.scrollY * -1) + (bounds.height / 2) - offset,
           d: sides.left,
           q: 'left',
           v: false,
           color,
         })
       }
    }
  }

  createMeasurement(line_model, node_label_id=0) {
    const measurement = document.createElement('visbug-distance')
    measurement.position = { line_model, node_label_id }
    this.$shadow.appendChild(measurement)
  }
}

customElements.define('visbug-boxmodel', BoxModel)


/***/ }),

/***/ "./app/components/selection/corners.element.js":
/*!*****************************************************!*\
  !*** ./app/components/selection/corners.element.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Corners: () => (/* binding */ Corners)
/* harmony export */ });
/* harmony import */ var _handles_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handles.element */ "./app/components/selection/handles.element.js");
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");



class Corners extends _handles_element__WEBPACK_IMPORTED_MODULE_0__.Handles {

  constructor() {
    super()
    this.styles = [_styles_store__WEBPACK_IMPORTED_MODULE_1__.HandlesStyles, _styles_store__WEBPACK_IMPORTED_MODULE_1__.CornerStyles]
  }

  render({ width, height, top, left }) {
    this.style.setProperty('--top', `${top + window.scrollY}px`)
    this.style.setProperty('--left', `${left}px`)

    return `
      <svg width="${width}" height="${height}">
        <rect></rect>
        <rect></rect>
        <rect></rect>
        <rect></rect>
      </svg>
    `
  }
}

customElements.define('visbug-corners', Corners)


/***/ }),

/***/ "./app/components/selection/distance.element.js":
/*!******************************************************!*\
  !*** ./app/components/selection/distance.element.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Distance: () => (/* binding */ Distance)
/* harmony export */ });
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");


class Distance extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'open'})
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [_styles_store__WEBPACK_IMPORTED_MODULE_0__.DistanceStyles]
  }
  
  disconnectedCallback() {}

  set position({line_model, node_label_id}) {
    this.styleProps = line_model
    this.$shadow.innerHTML  = this.render(line_model, node_label_id)
  }

  set styleProps({y,x,d,q,v = false, color}) {
    this.style.setProperty('--top', `${y + window.scrollY}px`)
    this.style.setProperty('--right', q === 'left' ? `${x}px` : 'auto')
    this.style.setProperty('--left', q !== 'left' ? `${x}px` : '')
    this.style.setProperty('--direction', v ? 'column' : 'row')
    this.style.setProperty('--quadrant', q)

    if (q === 'left')
      this.style.setProperty('--justify', 'flex-end')

    v
      ? this.style.setProperty('--distance-h', `${d}px`)
      : this.style.setProperty('--distance-w', `${d}px`)

     v
      ? this.style.setProperty('--line-h', `var(--line-w)`)
      : this.style.setProperty('--line-w', `var(--line-w)`)

    this.style.setProperty('--line-color', color === 'pink'
      ? '330 100% 71%'
      : '267 100% 58%')
    this.style.setProperty('--line-base', color === 'pink'
      ? '330 100% 71%'
      : '267 100% 58%')
  }

  render({q,d}, node_label_id) {
    this.$shadow.host.setAttribute('data-label-id', node_label_id)

    return `
      <figure quadrant="${q}">
        <div></div>
        <figcaption>${Math.round(d)}</figcaption>
        <div></div>
      </figure>
    `
  }
}

customElements.define('visbug-distance', Distance)


/***/ }),

/***/ "./app/components/selection/gridlines.element.js":
/*!*******************************************************!*\
  !*** ./app/components/selection/gridlines.element.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gridlines: () => (/* binding */ Gridlines)
/* harmony export */ });
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/ */ "./app/utilities/index.js");
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");



class Gridlines extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [_styles_store__WEBPACK_IMPORTED_MODULE_1__.GridlineStyles]
  }
  
  disconnectedCallback() {}

  set position(boundingRect) {
    this.$shadow.innerHTML  = this.render(boundingRect)
  }

  set update({ width, height, top, left }) {
    const { winHeight, winWidth } = (0,_utilities___WEBPACK_IMPORTED_MODULE_0__.windowBounds)()
    const svg = this.$shadow.querySelector('svg')
    const [rect,line1,line2,line3,line4] = svg.children

    this.$shadow.host.style.display = 'block'

    svg.setAttribute('viewBox', `0 0 ${winWidth} ${winHeight}`)
    rect.setAttribute('width', width + 'px')
    rect.setAttribute('x', left)
    rect.setAttribute('y', top)
    line1.setAttribute('x1', left)
    line1.setAttribute('x2', left)
    line2.setAttribute('x1', left + width)
    line2.setAttribute('x2', left + width)
    line3.setAttribute('y1', top + window.scrollY)
    line3.setAttribute('y2', top + window.scrollY)
    line3.setAttribute('x2', winWidth)
    line4.setAttribute('y1', top + window.scrollY + height)
    line4.setAttribute('y2', top + window.scrollY + height)
    line4.setAttribute('x2', winWidth)
  }

  render({ x, y, width, height, top, left }) {
    const { winWidth, winHeight } = (0,_utilities___WEBPACK_IMPORTED_MODULE_0__.windowBounds)()
    const { offsetHeight } = document.body
    const calced_y = y + window.scrollY

    return `
      <svg
        width="100%"
        viewBox="0 0 ${winWidth} ${winHeight}"
        version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          fill="none"
          width="${width}" height="${height}"
          x="${x}" y="${y}"
          style="display:none;"
        ></rect>
        <line x1="${x}" y1="0" x2="${x}" y2="${offsetHeight}"></line>
        <line x1="${x + width}" y1="0" x2="${x + width}" y2="${offsetHeight}"></line>
        <line x1="0" y1="${calced_y}" x2="${winWidth}" y2="${calced_y}"></line>
        <line x1="0" y1="${calced_y + height}" x2="${winWidth}" y2="${calced_y + height}"></line>
      </svg>
    `
  }
}

customElements.define('visbug-gridlines', Gridlines)


/***/ }),

/***/ "./app/components/selection/grip.element.js":
/*!**************************************************!*\
  !*** ./app/components/selection/grip.element.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Grip: () => (/* binding */ Grip)
/* harmony export */ });
/* harmony import */ var _handles_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handles.element */ "./app/components/selection/handles.element.js");
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/ */ "./app/utilities/index.js");




class Grip extends _handles_element__WEBPACK_IMPORTED_MODULE_0__.Handles {

  constructor() {
    super()
    this.styles = [_styles_store__WEBPACK_IMPORTED_MODULE_1__.HandlesStyles, _styles_store__WEBPACK_IMPORTED_MODULE_1__.GripStyles]
  }

  toggleHovering({hovering}) {
    hovering
      ? this.$shadow.children[0].setAttribute('hovering', true)
      : this.$shadow.children[0].removeAttribute('hovering')
  }

  render({ width, height, top, left }) {
    this.style.setProperty('--position', (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.isFixed)(this.$shadow.host) ? 'fixed' : 'absolute')
    this.style.setProperty('--top', `${top + window.scrollY}px`)
    this.style.setProperty('--left', `${left}px`)

    return `
      <svg width="${width}" height="${height}">
        <pattern id="stripes" patternUnits="userSpaceOnUse" width="4" height="4">
          <line x="0" y1="0" x2="0" y2="4" style="stroke:hsla(330, 100%, 71%, 50%); stroke-width: 3;" />
        </pattern>
        <g>
          <rect fill="url(#stripes)" />
        </g>
      </svg>
    `
  }
}

customElements.define('visbug-grip', Grip)


/***/ }),

/***/ "./app/components/selection/handle.element.js":
/*!****************************************************!*\
  !*** ./app/components/selection/handle.element.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Handle: () => (/* binding */ Handle)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");
/* harmony import */ var _utilities_numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/numbers */ "./app/utilities/numbers.js");




class Handle extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.styles = [_styles_store__WEBPACK_IMPORTED_MODULE_1__.HandleStyles]
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = this.styles
    this.$shadow.innerHTML = this.render()
    
    this.button = this.$shadow.querySelector('button')
    this.button.addEventListener('pointerdown', this.on_element_resize_start.bind(this))

    this.placement = this.getAttribute('placement')
  }

  static get observedAttributes() {
    return ['placement']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'placement') {
      this.placement = newValue
    }
  }

  on_element_resize_start(e) {
    e.preventDefault()
    e.stopPropagation()

    if (e.button !== 0) return

    const placement = this.placement
    const handlesEl = e.composedPath().find(el => el.tagName === 'VISBUG-HANDLES')
    const nodeLabelId = handlesEl.getAttribute('data-label-id')
    const [sourceEl] = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-label-id="${nodeLabelId}"]`)

    if (!sourceEl) return

    const { x: initialX, y: initialY } = e
    const initialStyle = getComputedStyle(sourceEl)
    const initialWidth = parseFloat(initialStyle.width)
    const initialHeight = parseFloat(initialStyle.height)
    const initialTransform = new DOMMatrix(initialStyle.transform)

    const originalElTransition = sourceEl.style.transition
    const originalDocumentCursor = document.body.style.cursor
    const originalDocumentUserSelect = document.body.style.userSelect
    sourceEl.style.transition = 'none'
    document.body.style.cursor = getComputedStyle(this).getPropertyValue('--cursor')
    document.body.style.userSelect = 'none'

    document.addEventListener('pointermove', on_element_resize_move)

    function on_element_resize_move(e) {
      e.preventDefault()
      e.stopPropagation()

      const newX = (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_2__.clamp)(0, e.clientX, document.documentElement.clientWidth)
      const newY = (0,_utilities_numbers__WEBPACK_IMPORTED_MODULE_2__.clamp)(0, e.clientY, document.documentElement.clientHeight)
    
      const diffX = newX - initialX
      const diffY = newY - initialY

      switch (placement) {
        case 'top-start': {
          const newWidth = initialWidth - diffX
          const newHeight = initialHeight - diffY
          const newTranslate = initialTransform.translate(diffX, diffY).transformPoint()

          requestAnimationFrame(() => {
            sourceEl.style.width = `${newWidth}px`
            sourceEl.style.height = `${newHeight}px`
            sourceEl.style.transform = `translate(${newTranslate.x}px, ${newTranslate.y}px)`
          })
          break
        }
        case 'top-center': {
          const newHeight = initialHeight - diffY
          const newTranslate = initialTransform.translate(0, diffY).transformPoint()

          requestAnimationFrame(() => {
            sourceEl.style.height = `${newHeight}px`
            sourceEl.style.transform = `translate(${newTranslate.x}px, ${newTranslate.y}px)`
          })
          break
        }
        case 'top-end': {
          const newWidth = initialWidth + diffX
          const newHeight = initialHeight - diffY
          const newTranslate = initialTransform.translate(0, diffY).transformPoint()

          requestAnimationFrame(() => {
            sourceEl.style.width = `${newWidth}px`
            sourceEl.style.height = `${newHeight}px`
            sourceEl.style.transform = `translate(${newTranslate.x}px, ${newTranslate.y}px)`
          })
          break
        }
        case 'middle-start': {
          const newWidth = initialWidth - diffX
          const newTranslate = initialTransform.translate(diffX).transformPoint()

          requestAnimationFrame(() => {
            sourceEl.style.width = `${newWidth}px`
            sourceEl.style.transform = `translate(${newTranslate.x}px, ${newTranslate.y}px)`
          })
          break
        }
        case 'middle-end': {
          const newWidth = initialWidth + diffX

          requestAnimationFrame(() => {
            sourceEl.style.width = `${newWidth}px`
          })
          break
        }
        case 'bottom-start': {
          const newWidth = initialWidth - diffX
          const newHeight = initialHeight + diffY
          const newTranslate = initialTransform.translate(diffX, 0).transformPoint()

          requestAnimationFrame(() => {
            sourceEl.style.width = `${newWidth}px`
            sourceEl.style.height = `${newHeight}px`
            sourceEl.style.transform = `translate(${newTranslate.x}px, ${newTranslate.y}px)`
          })
          break
        }
        case 'bottom-center': {
          const newHeight = initialHeight + diffY

          requestAnimationFrame(() => {
            sourceEl.style.height = `${newHeight}px`
          })
          break
        }
        case 'bottom-end': {
          const newWidth = initialWidth + diffX
          const newHeight = initialHeight + diffY

          requestAnimationFrame(() => {
            sourceEl.style.width = `${newWidth}px`
            sourceEl.style.height = `${newHeight}px`
          })
          break
        }
      }
    }

    document.addEventListener('pointerup', on_element_resize_end, { once: true })
    document.addEventListener('mouseleave', on_element_resize_end, { once: true })

    function on_element_resize_end() {
      document.removeEventListener('pointermove', on_element_resize_move)
      document.body.style.cursor = originalDocumentCursor
      document.body.style.userSelect = originalDocumentUserSelect
      sourceEl.style.transition = originalElTransition
    }
  }

  disconnectedCallback() {
    this.button.removeEventListener('pointerdown', this.on_element_resize_start.bind(this))
  }

  render() {
    return `
      <button type="button" aria-label="Resize"></button>
    `
  }
}

customElements.define('visbug-handle', Handle)


/***/ }),

/***/ "./app/components/selection/handles.element.js":
/*!*****************************************************!*\
  !*** ./app/components/selection/handles.element.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Handles: () => (/* binding */ Handles)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/ */ "./app/utilities/index.js");




class Handles extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.styles = [_styles_store__WEBPACK_IMPORTED_MODULE_1__.HandlesStyles]
    this.on_window_resize = this.on_window_resize.bind(this)
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = this.styles
    window.addEventListener('resize', this.on_window_resize)
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.on_window_resize)
  }

  on_window_resize() {
    window.requestAnimationFrame(() => {
      const node_label_id = this.$shadow.host.getAttribute('data-label-id')
      const [source_el] = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-label-id="${node_label_id}"]`)

      if (!source_el) return

      this.position = {
        node_label_id,
        el: source_el,
        isFixed: (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.isFixed)(source_el),
      }
    })
  }

  set position({el, node_label_id}) {
    this.$shadow.innerHTML = this.render(el.getBoundingClientRect(), node_label_id, (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.isFixed)(el))

    if (this._backdrop) {
      this.backdrop = {
        element: this._backdrop.update(el),
        update:  this._backdrop.update,
      }
    }
  }

  set backdrop(bd) {
    this._backdrop = bd

    const cur_child = this.$shadow.querySelector('visbug-boxmodel')

    cur_child
      ? this.$shadow.replaceChild(bd.element, cur_child)
      : this.$shadow.appendChild(bd.element)
  }

  render({ x, y, width, height, top, left }, node_label_id, isFixed) {
    this.$shadow.host.setAttribute('data-label-id', node_label_id)

    this.style.setProperty('--top', `${top + (isFixed ? 0 : window.scrollY)}px`)
    this.style.setProperty('--left', `${left}px`)
    this.style.setProperty('--position', isFixed ? 'fixed' : 'absolute')
    this.style.setProperty('--width', `${width}px`)
    this.style.setProperty('--height', `${height}px`)

    return `
      <svg
        class="visbug-handles"
        width="${width}" height="${height}"
        viewBox="0 0 ${width} ${height}"
        version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <rect stroke="hotpink" fill="none" width="100%" height="100%"></rect>
      </svg>
      <visbug-handle placement="top-start"></visbug-handle>
      <visbug-handle placement="top-center"></visbug-handle>
      <visbug-handle placement="top-end"></visbug-handle>
      <visbug-handle placement="middle-start"></visbug-handle>
      <visbug-handle placement="middle-end"></visbug-handle>
      <visbug-handle placement="bottom-start"></visbug-handle>
      <visbug-handle placement="bottom-center"></visbug-handle>
      <visbug-handle placement="bottom-end"></visbug-handle>
    `
  }
}

customElements.define('visbug-handles', Handles)


/***/ }),

/***/ "./app/components/selection/hover.element.js":
/*!***************************************************!*\
  !*** ./app/components/selection/hover.element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hover: () => (/* binding */ Hover)
/* harmony export */ });
/* harmony import */ var _handles_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handles.element */ "./app/components/selection/handles.element.js");
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");



class Hover extends _handles_element__WEBPACK_IMPORTED_MODULE_0__.Handles {

  constructor() {
    super()
    this.styles = [_styles_store__WEBPACK_IMPORTED_MODULE_1__.HandlesStyles, _styles_store__WEBPACK_IMPORTED_MODULE_1__.HoverStyles]
  }

  render({ width, height, top, left }, node_label_id, isFixed) {
    this.style.setProperty('--top', `${top + (isFixed ? 0 : window.scrollY)}px`)
    this.style.setProperty('--left', `${left}px`)
    this.style.setProperty('--position', isFixed ? 'fixed' : 'absolute')

    return `
      <svg
        width="${width}" height="${height}"
        viewBox="0 0 ${width} ${height}"
      >
        <rect fill="none" width="100%" height="100%"></rect>
    `
  }
}

customElements.define('visbug-hover', Hover)


/***/ }),

/***/ "./app/components/selection/label.element.js":
/*!***************************************************!*\
  !*** ./app/components/selection/label.element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/ */ "./app/utilities/index.js");
/* harmony import */ var _offscreenLabel_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offscreenLabel.element */ "./app/components/selection/offscreenLabel.element.js");





class Label extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.on_resize = this.on_resize.bind(this)
    this.dispatchQuery = this.dispatchQuery.bind(this)
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [_styles_store__WEBPACK_IMPORTED_MODULE_1__.LabelStyles]
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('a', this.$shadow).on('click mouseenter', this.dispatchQuery)
    window.addEventListener('resize', this.on_resize)
  }

  disconnectedCallback() {
    (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('a', this.$shadow).off('click mouseenter', this.dispatchQuery)
    window.removeEventListener('resize', this.on_resize)
  }

  on_resize() {
    window.requestAnimationFrame(() => {
      const node_label_id = this.$shadow.host.getAttribute('data-label-id')
      const [source_el]   = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-label-id="${node_label_id}"]`)

      if (!source_el) return

      this.position = {
        node_label_id,
        boundingRect: source_el.getBoundingClientRect(),
        isFixed: (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.isFixed)(source_el),
      }
    })
  }

  dispatchQuery(e) {
    this.$shadow.host.dispatchEvent(new CustomEvent('query', {
      bubbles: true,
      detail:   {
        text:       e.target.textContent,
        activator:  e.type,
      }
    }))
  }

  set text(content) {
    this.$shadow.childElementCount
      ? this.$shadow.firstElementChild.innerHTML = content
      : this._text = content
  }

  set position({boundingRect, node_label_id, isFixed}) {
    this.$shadow.innerHTML = this.render(node_label_id)
    this.update = {boundingRect, isFixed}
  }

  set update({boundingRect, isFixed}) {
    const top = boundingRect.y + (isFixed ? 0 : window.scrollY)
    const left = boundingRect.x
    const position = isFixed ? 'fixed' : 'absolute'
    this.style.setProperty('--top', `${top}px`)
    this.style.setProperty('--left', `${left}px`)
    this.style.setProperty('--max-width', `${boundingRect.width + (window.innerWidth - boundingRect.x - boundingRect.width - 20)}px`)
    this.style.setProperty('--position', position)
    this.setAttribute('data-original-top', top)
    this.setAttribute('data-original-left', left)
    this.setAttribute('data-original-position', position)

    this.detectOutsideViewport()
  }

  render(node_label_id) {
    this.$shadow.host.setAttribute('data-label-id', node_label_id || ('label_' + Number(new Date())))

    return `<span>${this._text}</span>`
  }

  detectOutsideViewport() {
    const hoverText = this.$shadow.firstElementChild.innerText.replace(/\s+/g, ' ')
    if (hoverText === 'body') return;
    
    const boundingBox = this.$shadow.firstElementChild.getBoundingClientRect()
    
    const currentStyle = window.getComputedStyle(this);
    const currentPosition = {
      top: currentStyle.getPropertyValue('--top').replace('px', ''),
      left: currentStyle.getPropertyValue('--left').replace('px', ''),
    }
    
    const originalPosition = {
      top: this.getAttribute('data-original-top'),
      left: this.getAttribute('data-original-left'),
      position: this.getAttribute('data-original-position'),
    }

    const scrollX = document.body.scrollX || window.pageXOffset
    const scrollY = document.body.scrollY || window.pageYOffset

    const outsideTop = originalPosition.top - boundingBox.height - scrollY < 0
    const outsideBottom = originalPosition.top - scrollY > window.innerHeight
    const outsideLeft = originalPosition.left - scrollX < 0
    const outsideRight = originalPosition.left - scrollX > window.innerWidth

    const isOutsideViewport =
      outsideTop || outsideBottom || outsideLeft || outsideRight

    if (!isOutsideViewport) {
      this.style.setProperty('--position', originalPosition.position)
      this.style.setProperty('--left', `${originalPosition.left}px`)
      this.style.setProperty('--top', `${originalPosition.top}px`)
      return;
    }

    const adjustRightSideToCount = true
    const node_label_id = this.getAttribute('data-label-id')
    const style = {
      position: 'fixed',
      color: 'var(--theme-purple)',
      left: currentPosition.left,
      top: currentPosition.top,
      offscreenText: '',
      hoverText: hoverText,
    }

    if (outsideTop && !outsideLeft && !outsideRight) {
      style.left = Math.max(boundingBox.width, currentPosition.left)
      style.top = boundingBox.height
      style.offscreenText = '↑'
      ;(0,_offscreenLabel_element__WEBPACK_IMPORTED_MODULE_3__.createOffscreenLabelIndicator)(node_label_id, style.offscreenText, style.hoverText, 'calc(50vw - 0.5rem)', '1rem', style.color)
    } else if (outsideTop && outsideLeft) {
      style.left = boundingBox.width
      style.top = boundingBox.height
      style.offscreenText = '↖'
      ;(0,_offscreenLabel_element__WEBPACK_IMPORTED_MODULE_3__.createOffscreenLabelIndicator)(node_label_id, style.offscreenText, style.hoverText, '0', '1rem', style.color)
    } else if (outsideTop && outsideRight) {
      style.left = Math.max(boundingBox.width, currentPosition.left)
      style.top = boundingBox.height
      style.offscreenText = '↗'
      ;(0,_offscreenLabel_element__WEBPACK_IMPORTED_MODULE_3__.createOffscreenLabelIndicator)(node_label_id, style.offscreenText, style.hoverText, `calc(100vw - 1.5rem)`, '1rem', style.color, adjustRightSideToCount)
    } else if (outsideLeft && !outsideTop && !outsideBottom) {
      style.left = boundingBox.width
      style.top = Math.max(boundingBox.height, currentPosition.top)
      style.offscreenText = '←'
      ;(0,_offscreenLabel_element__WEBPACK_IMPORTED_MODULE_3__.createOffscreenLabelIndicator)(node_label_id, style.offscreenText, style.hoverText, 0, 'calc(50vh - 0.5rem)', style.color)
    } else if (outsideRight && !outsideTop && !outsideBottom) {
      style.left = window.innerWidth - boundingBox.width
      style.top = Math.max(boundingBox.height, currentPosition.top)
      style.offscreenText = '→'
      ;(0,_offscreenLabel_element__WEBPACK_IMPORTED_MODULE_3__.createOffscreenLabelIndicator)(node_label_id, style.offscreenText, style.hoverText, `calc(100vw - 1.5rem)`, 'calc(50vh - 0.5rem)', style.color, adjustRightSideToCount)
    } else if (outsideBottom && !outsideLeft && !outsideRight) {
      style.left = Math.max(boundingBox.width, currentPosition.left)
      style.top = window.innerHeight - boundingBox.height
      style.offscreenText = '↓'
      ;(0,_offscreenLabel_element__WEBPACK_IMPORTED_MODULE_3__.createOffscreenLabelIndicator)(node_label_id, style.offscreenText, style.hoverText, 'calc(50vw - 0.5rem)', '100vh', style.color)
    } else if (outsideBottom && outsideLeft) {
      style.left = boundingBox.width
      style.top = window.innerHeight - boundingBox.height
      style.offscreenText = '↙'
      ;(0,_offscreenLabel_element__WEBPACK_IMPORTED_MODULE_3__.createOffscreenLabelIndicator)(node_label_id, style.offscreenText, style.hoverText, 0, '100vh', style.color)
    } else if (outsideBottom && outsideRight) {
      style.left = Math.max(boundingBox.width, currentPosition.left)
      style.top = window.innerHeight - boundingBox.height
      style.offscreenText = '↘'
      ;(0,_offscreenLabel_element__WEBPACK_IMPORTED_MODULE_3__.createOffscreenLabelIndicator)(node_label_id, style.offscreenText, style.hoverText, `calc(100vw - 1.5rem)`, '100vh', style.color, adjustRightSideToCount)
    }
  }
}

customElements.define('visbug-label', Label)


/***/ }),

/***/ "./app/components/selection/offscreenLabel.element.js":
/*!************************************************************!*\
  !*** ./app/components/selection/offscreenLabel.element.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OffscreenLabel: () => (/* binding */ OffscreenLabel),
/* harmony export */   createOffscreenLabelIndicator: () => (/* binding */ createOffscreenLabelIndicator),
/* harmony export */   removeOffscreenLabelIndicators: () => (/* binding */ removeOffscreenLabelIndicators)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");



window.addEventListener('scroll', positionFlags)

// hide offscreen label indicators if you click anywhere:
document.body.addEventListener('click', () => {
  removeOffscreenLabelIndicators()
}, true)

function positionFlags() {
  removeOffscreenLabelIndicators()
  document.querySelectorAll('visbug-label').forEach((el) => {
    el.detectOutsideViewport()
  })
}

class OffscreenLabel extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.dispatchQuery = this.dispatchQuery.bind(this)
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [_styles_store__WEBPACK_IMPORTED_MODULE_1__.OffscreenLabelStyles]
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('a', this.$shadow).on('click mouseenter', this.dispatchQuery)
  }

  disconnectedCallback() {
    (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('a', this.$shadow).off('click mouseenter', this.dispatchQuery)
  }

  dispatchQuery(e) {
    this.$shadow.host.dispatchEvent(new CustomEvent('query', {
      bubbles: true,
      detail:   {
        text:       e.target.textContent,
        activator:  e.type,
      }
    }))
  }

  set text(content) {
    this.$shadow.childElementCount
      ? this.$shadow.firstElementChild.textContent = content
      : this._text = content
  }

  set position({boundingRect, node_label_id, isFixed}) {
    this.$shadow.innerHTML = this.render(node_label_id)
    this.update = {boundingRect, isFixed}
  }

  set update({boundingRect, isFixed}) {
    this.style.setProperty('--top', `${boundingRect.y + (isFixed ? 0 : window.scrollY)}px`)
    this.style.setProperty('--left', `${boundingRect.x - 1}px`)
    this.style.setProperty('--max-width', `${boundingRect.width + (window.innerWidth - boundingRect.x - boundingRect.width - 20)}px`)
    this.style.setProperty('--position', 'fixed');
  }

  set count(count) {
    this.$shadow.childElementCount
      ? this.$shadow.firstElementChild.count = count
      : this._count = count
  }

  get count() {
    return this.$shadow.childElementCount
      ? this.$shadow.firstElementChild.count
      : this._count
  }

  render(node_label_id) {
    this.$shadow.host.setAttribute('data-label-id', node_label_id || ('label_' + Number(new Date())))

    return `<span offscreen-label>${this._text}</span>`
  }
}

customElements.define('visbug-offscreen-label', OffscreenLabel)

function createOffscreenLabelIndicator(node_label_id, text, hoverText, left, top, color, adjustRightSideToCount) {
  const existing = document.querySelectorAll(`visbug-offscreen-label[id=${text}]`)

  if (existing.length) {
    const instance = existing[0];
    instance.style.display = ''
    instance.style.setProperty('--left', left)
    instance.style.setProperty('--top', top)
    instance.style.setProperty('--position', 'fixed');
    if (color) instance.style.setProperty('--label-bg', color)
    instance.seen[node_label_id] = true;
    instance.count = Object.keys(instance.seen).length
    instance.text = text
    instance.style.setProperty('--count', `"\\00a0 ${instance.count}"`);
    instance.style.setProperty('--hover-text', `"\\00a0 ${hoverText ? 'offscreen label: ' + hoverText : instance.count}"`);
    if (adjustRightSideToCount) {
      left = left.includes('calc(') ? left.replace(')', ` - ${instance.count.toString().length}ch)`) : `${instance.count.toString().length}ch`
      instance.style.setProperty('--left', left)
    }

    return
  }

  const label = document.createElement('visbug-offscreen-label')

  label.id = text
  label.position = {
    boundingRect: document.body.getBoundingClientRect(),
    isFixed: true,
  }
  label.seen = {} // reset
  label.seen[node_label_id] = true
  label.count = 1
  label.text = text
  label.style.display = ''
  label.style.setProperty('--left', left)
  label.style.setProperty('--top', top)
  label.style.setProperty('--count', `"\\00a0 ${label.count}"`)
  label.style.setProperty('--hover-text', `"\\00a0 ${hoverText ? 'offscreen label: ' + hoverText : label.count}"`)
  if (color) label.style.setProperty('--label-bg', color)

  if (adjustRightSideToCount) {
    left = left.includes('calc(') ? left.replace(')', ` - 1ch)`) : `1ch`
    label.style.setProperty('--left', left)
  }

  document.body.appendChild(label)
}

function removeOffscreenLabelIndicators() {
  document.querySelectorAll('visbug-offscreen-label')
    .forEach(e => {
      e.seen = {}
      e.count = 0
      e.text = ''
      e.style.display = 'none'
    })
}

/***/ }),

/***/ "./app/components/selection/overlay.element.js":
/*!*****************************************************!*\
  !*** ./app/components/selection/overlay.element.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Overlay: () => (/* binding */ Overlay)
/* harmony export */ });
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");


class Overlay extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [_styles_store__WEBPACK_IMPORTED_MODULE_0__.OverlayStyles]
  }
  
  disconnectedCallback() {}

  set position(boundingRect) {
    this.$shadow.innerHTML = this.render(boundingRect)
  }

  set update({ top, left, width, height }) {
    const [svg] = this.$shadow.children

    this.$shadow.host.style.display = 'block'
    svg.style.display = 'block'

    this.style.setProperty('--top', `${top + window.scrollY}px`)
    this.style.setProperty('--left', `${left - 1}px`)

    svg.setAttribute('width', width + 'px')
    svg.setAttribute('height', height + 'px')
  }

  render({height, width}) {
    return `
      <svg class="visbug-overlay"
        width="${width}px" height="${height}px"
        viewBox="0 0 ${width} ${height}"
      >
        <rect></rect>
      </svg>
    `
  }
}

customElements.define('visbug-overlay', Overlay)


/***/ }),

/***/ "./app/components/styles.store.js":
/*!****************************************!*\
  !*** ./app/components/styles.store.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxModelStyles: () => (/* binding */ BoxModelStyles),
/* harmony export */   CornerStyles: () => (/* binding */ CornerStyles),
/* harmony export */   DarkTheme: () => (/* binding */ DarkTheme),
/* harmony export */   DistanceStyles: () => (/* binding */ DistanceStyles),
/* harmony export */   GridlineStyles: () => (/* binding */ GridlineStyles),
/* harmony export */   GripStyles: () => (/* binding */ GripStyles),
/* harmony export */   HandleStyles: () => (/* binding */ HandleStyles),
/* harmony export */   HandlesStyles: () => (/* binding */ HandlesStyles),
/* harmony export */   HotkeymapDarkStyles: () => (/* binding */ HotkeymapDarkStyles),
/* harmony export */   HotkeymapLightStyles: () => (/* binding */ HotkeymapLightStyles),
/* harmony export */   HotkeymapStyles: () => (/* binding */ HotkeymapStyles),
/* harmony export */   HoverStyles: () => (/* binding */ HoverStyles),
/* harmony export */   LabelStyles: () => (/* binding */ LabelStyles),
/* harmony export */   LightTheme: () => (/* binding */ LightTheme),
/* harmony export */   MetatipDarkStyles: () => (/* binding */ MetatipDarkStyles),
/* harmony export */   MetatipLightStyles: () => (/* binding */ MetatipLightStyles),
/* harmony export */   MetatipStyles: () => (/* binding */ MetatipStyles),
/* harmony export */   OffscreenLabelStyles: () => (/* binding */ OffscreenLabelStyles),
/* harmony export */   OverlayStyles: () => (/* binding */ OverlayStyles),
/* harmony export */   VisBugDarkStyles: () => (/* binding */ VisBugDarkStyles),
/* harmony export */   VisBugLightStyles: () => (/* binding */ VisBugLightStyles),
/* harmony export */   VisBugStyles: () => (/* binding */ VisBugStyles)
/* harmony export */ });
/* harmony import */ var construct_style_sheets_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! construct-style-sheets-polyfill */ "./node_modules/construct-style-sheets-polyfill/dist/adoptedStyleSheets.js");
/* harmony import */ var construct_style_sheets_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(construct_style_sheets_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_bug_vis_bug_element_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vis-bug/vis-bug.element.css */ "./app/components/vis-bug/vis-bug.element.css");
/* harmony import */ var _selection_handles_element_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selection/handles.element.css */ "./app/components/selection/handles.element.css");
/* harmony import */ var _selection_handle_element_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selection/handle.element.css */ "./app/components/selection/handle.element.css");
/* harmony import */ var _selection_hover_element_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selection/hover.element.css */ "./app/components/selection/hover.element.css");
/* harmony import */ var _selection_corners_element_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection/corners.element.css */ "./app/components/selection/corners.element.css");
/* harmony import */ var _selection_distance_element_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection/distance.element.css */ "./app/components/selection/distance.element.css");
/* harmony import */ var _selection_gridlines_element_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selection/gridlines.element.css */ "./app/components/selection/gridlines.element.css");
/* harmony import */ var _selection_label_element_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selection/label.element.css */ "./app/components/selection/label.element.css");
/* harmony import */ var _selection_offscreenLabel_element_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selection/offscreenLabel.element.css */ "./app/components/selection/offscreenLabel.element.css");
/* harmony import */ var _selection_overlay_element_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/overlay.element.css */ "./app/components/selection/overlay.element.css");
/* harmony import */ var _selection_box_model_element_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selection/box-model.element.css */ "./app/components/selection/box-model.element.css");
/* harmony import */ var _metatip_metatip_element_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./metatip/metatip.element.css */ "./app/components/metatip/metatip.element.css");
/* harmony import */ var _hotkey_map_base_element_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hotkey-map/base.element.css */ "./app/components/hotkey-map/base.element.css");
/* harmony import */ var _selection_grip_element_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./selection/grip.element.css */ "./app/components/selection/grip.element.css");
/* harmony import */ var _variables_light_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_variables_light.css */ "./app/components/_variables_light.css");
/* harmony import */ var _vis_bug_vis_bug_element_light_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vis-bug/vis-bug.element_light.css */ "./app/components/vis-bug/vis-bug.element_light.css");
/* harmony import */ var _metatip_metatip_element_light_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./metatip/metatip.element_light.css */ "./app/components/metatip/metatip.element_light.css");
/* harmony import */ var _hotkey_map_base_element_light_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hotkey-map/base.element_light.css */ "./app/components/hotkey-map/base.element_light.css");
/* harmony import */ var _variables_dark_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_variables_dark.css */ "./app/components/_variables_dark.css");
/* harmony import */ var _vis_bug_vis_bug_element_dark_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vis-bug/vis-bug.element_dark.css */ "./app/components/vis-bug/vis-bug.element_dark.css");
/* harmony import */ var _metatip_metatip_element_dark_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./metatip/metatip.element_dark.css */ "./app/components/metatip/metatip.element_dark.css");
/* harmony import */ var _hotkey_map_base_element_dark_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hotkey-map/base.element_dark.css */ "./app/components/hotkey-map/base.element_dark.css");



























const constructStylesheet = (styles, stylesheet = new CSSStyleSheet()) => {
  stylesheet.replaceSync(styles)
  return stylesheet
}

const VisBugStyles         = constructStylesheet(_vis_bug_vis_bug_element_css__WEBPACK_IMPORTED_MODULE_1__["default"])
const HandlesStyles        = constructStylesheet(_selection_handles_element_css__WEBPACK_IMPORTED_MODULE_2__["default"])
const HandleStyles         = constructStylesheet(_selection_handle_element_css__WEBPACK_IMPORTED_MODULE_3__["default"])
const HoverStyles          = constructStylesheet(_selection_hover_element_css__WEBPACK_IMPORTED_MODULE_4__["default"])
const CornerStyles         = constructStylesheet(_selection_corners_element_css__WEBPACK_IMPORTED_MODULE_5__["default"])
const MetatipStyles        = constructStylesheet(_metatip_metatip_element_css__WEBPACK_IMPORTED_MODULE_12__["default"])
const DistanceStyles       = constructStylesheet(_selection_distance_element_css__WEBPACK_IMPORTED_MODULE_6__["default"])
const GridlineStyles       = constructStylesheet(_selection_gridlines_element_css__WEBPACK_IMPORTED_MODULE_7__["default"])
const LabelStyles          = constructStylesheet(_selection_label_element_css__WEBPACK_IMPORTED_MODULE_8__["default"])
const OffscreenLabelStyles  = constructStylesheet(_selection_offscreenLabel_element_css__WEBPACK_IMPORTED_MODULE_9__["default"])
const OverlayStyles        = constructStylesheet(_selection_overlay_element_css__WEBPACK_IMPORTED_MODULE_10__["default"])
const BoxModelStyles       = constructStylesheet(_selection_box_model_element_css__WEBPACK_IMPORTED_MODULE_11__["default"])
const HotkeymapStyles      = constructStylesheet(_hotkey_map_base_element_css__WEBPACK_IMPORTED_MODULE_13__["default"])
const GripStyles           = constructStylesheet(_selection_grip_element_css__WEBPACK_IMPORTED_MODULE_14__["default"])

const LightTheme           = constructStylesheet(_variables_light_css__WEBPACK_IMPORTED_MODULE_15__["default"])
const VisBugLightStyles    = constructStylesheet(_vis_bug_vis_bug_element_light_css__WEBPACK_IMPORTED_MODULE_16__["default"])
const MetatipLightStyles   = constructStylesheet(_metatip_metatip_element_light_css__WEBPACK_IMPORTED_MODULE_17__["default"])
const HotkeymapLightStyles = constructStylesheet(_hotkey_map_base_element_light_css__WEBPACK_IMPORTED_MODULE_18__["default"])

const DarkTheme            = constructStylesheet(_variables_dark_css__WEBPACK_IMPORTED_MODULE_19__["default"])
const VisBugDarkStyles     = constructStylesheet(_vis_bug_vis_bug_element_dark_css__WEBPACK_IMPORTED_MODULE_20__["default"])
const MetatipDarkStyles    = constructStylesheet(_metatip_metatip_element_dark_css__WEBPACK_IMPORTED_MODULE_21__["default"])
const HotkeymapDarkStyles  = constructStylesheet(_hotkey_map_base_element_dark_css__WEBPACK_IMPORTED_MODULE_22__["default"])


/***/ }),

/***/ "./app/components/vis-bug/model.js":
/*!*****************************************!*\
  !*** ./app/components/vis-bug/model.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisBugModel: () => (/* binding */ VisBugModel)
/* harmony export */ });
/* harmony import */ var _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vis-bug.icons */ "./app/components/vis-bug/vis-bug.icons.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/ */ "./app/utilities/index.js");



const VisBugModel = {
  g: {
    tool:        'guides',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.guides,
    label:       '<span><u>G</u>uides</span>',
    description: 'Verify alignment & measure distances',
    instruction: `<div table>
                    <div>
                      <b>Element Guides:</b>
                      <span>hover</span>
                    </div>
                    <div>
                      <b>Measure:</b>
                      <span>click+hover</span>
                    </div>
                    <div>
                      <b>Sticky Measurements:</b>
                      <span>shift+click</span>
                    </div>
                  </div>`,
  },
  i: {
    tool:        'inspector',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.inspector,
    label:       '<span><u>I</u>nspect</span>',
    description: 'Peek into common & current styles of an element',
    instruction: `<div table>
                    <div>
                      <b>Pin it:</b>
                      <span>click</span>
                    </div>
                    <div>
                      <b>Position it:</b>
                      <span>click & drag by the header area</span>
                    </div>
                  </div>`,
  },
  x: {
    tool:        'accessibility',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.accessibility,
    label:       'Accessibility',
    description: 'Peek into A11y attributes & compliance status',
    instruction: `<div table>
                    <div>
                      <b>Pin it:</b>
                      <span>click</span>
                    </div>
                  </div>`,
  },
  v: {
    tool:        'move',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.move,
    label:       '<span>Mo<u>v</u>e</span>',
    description: 'Move elements laterally or in, out, over, and under',
    instruction: `<div table>
                    <div>
                      <b>Lateral:</b>
                      <span>click container ⇒ drag child</span>
                    </div>
                    <div>
                      <b>Lateral:</b>
                      <span>◀ ▶</span>
                    </div>
                    <div>
                      <b>Out and above:</b>
                      <span>▲</span>
                    </div>
                    <div>
                      <b>Down+in, out+under:</b>
                      <span>▼</span>
                    </div>
                    <div>
                      <b>Trainer:</b>
                      <span>shift + /</span>
                    </div>
                  </div>`,
  },
  // r: {
  //   tool:        'resize',
  //   icon:        Icons.resize,
  //   label:       'Resize',
  //   description: ''
  // },
  m: {
    tool:        'margin',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.margin,
    label:       '<span><u>M</u>argin</span>',
    description: 'Add or subtract outer space from any or all sides of the selected element(s)',
    instruction: `<div table>
                    <div>
                      <b>+ Margin:</b>
                      <span>◀ ▶ ▲ ▼</span>
                    </div>
                    <div>
                      <b>- Margin:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.altKey} + ◀ ▶ ▲ ▼</span>
                    </div>
                    <div>
                      <b>All Sides:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey} +  ▲ ▼</span>
                    </div>
                    <div>
                      <b>Trainer:</b>
                      <span>shift + /</span>
                    </div>
                  </div>`,
  },
  p: {
    tool:        'padding',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.padding,
    label:       '<span><u>P</u>adding</span>',
    description: `Add or subtract inner space from any or all sides of the selected element(s)`,
    instruction: `<div table>
                    <div>
                      <b>+ Padding:</b>
                      <span>◀ ▶ ▲ ▼</span>
                    </div>
                    <div>
                      <b>- Padding:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.altKey} + ◀ ▶ ▲ ▼</span>
                    </div>
                    <div>
                      <b>All Sides:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey} +  ▲ ▼</span>
                    </div>
                    <div>
                      <b>Trainer:</b>
                      <span>shift + /</span>
                    </div>
                  </div>`
  },
  // b: {
  //   tool:        'border',
  //   icon:        Icons.border,
  //   label:       'Border',
  //   description: ''
  // },
  a: {
    tool:        'align',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.align,
    label:       '<span>Flexbox <u>A</u>lign</span>',
    description: `Create or modify flexbox direction, distribution, order & wrapping`,
    instruction: `<div table>
                    <div>
                      <b>Rows:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey} + ▼</span>
                    </div>
                    <div>
                      <b>Columns:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey} + ▶</span>
                    </div>
                    <div>
                      <b>Alignment:</b>
                      <span>◀ ▶ ▲ ▼</span>
                    </div>
                    <div>
                      <b>Distribution:</b>
                      <span>Shift + ◀ ▶</span>
                    </div>
                    <div>
                      <b>Order:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey} + shift + ◀ ▶</span>
                    </div>
                    <div>
                      <b>Wrapping:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey} + shift + ▲ ▼</span>
                    </div>
                    <div>
                      <b>Trainer:</b>
                      <span>shift + /</span>
                    </div>
                  </div>`,
  },
  h: {
    tool:        'hueshift',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.hueshift,
    label:       '<span><u>H</u>ue Shift</span>',
    description: `Change foreground/background hue, brightness, saturation & opacity`,
    instruction: `<div table>
                    <div>
                      <b>Saturation:</b>
                      <span>◀ ▶</span>
                    </div>
                    <div>
                      <b>Brightness:</b>
                      <span>▲ ▼</span>
                    </div>
                    <div>
                      <b>Hue:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey} +  ▲ ▼</span>
                    </div>
                    <div>
                      <b>Opacity:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey} +  ◀ ▶</span>
                    </div>
                    <div>
                      <b>Trainer:</b>
                      <span>shift + /</span>
                    </div>
                  </div>`,
  },
  d: {
    tool:        'boxshadow',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.boxshadow,
    label:       '<span>Sha<u>d</u>ow</span>',
    description: `Create & adjust position, blur & opacity of a box shadow`,
    instruction: `<div table>
                    <div>
                      <b>X/Y Position:</b>
                      <span>◀ ▶ ▲ ▼</span>
                    </div>
                    <div>
                      <b>Blur:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.altKey} + ▲ ▼</span>
                    </div>
                    <div>
                      <b>Spread:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.altKey} + ◀ ▶</span>
                    </div>
                    <div>
                      <b>Opacity:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey} + ◀ ▶</span>
                    </div>
                  </div>`,
  },
  // t: {
  //   tool:        'transform',
  //   icon:        Icons.transform,
  //   label:       '3D Transform',
  //   description: ''
  // },
  l: {
    tool:        'position',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.position,
    label:       'Position',
    description: 'Move svg (x,y) and elements (top,left,bottom,right)',
    instruction: `<div table>
                    <div>
                      <b>Nudge:</b>
                      <span>◀ ▶ ▲ ▼</span>
                    </div>
                    <div>
                      <b>Move:</b>
                      <span>Click & drag</span>
                    </div>
                  </div>`,
  },
  f: {
    tool:        'font',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.font,
    label:       '<span><u>F</u>ont Styles</span>',
    description: 'Change size, alignment, leading, letter-spacing, & weight',
    instruction: `<div table>
                    <div>
                      <b>Size:</b>
                      <span>▲ ▼</span>
                    </div>
                    <div>
                      <b>Alignment:</b>
                      <span>◀ ▶</span>
                    </div>
                    <div>
                      <b>Leading:</b>
                      <span>Shift + ▲ ▼</span>
                    </div>
                    <div>
                      <b>Letter-spacing:</b>
                      <span>Shift + ◀ ▶</span>
                    </div>
                    <div>
                      <b>Weight:</b>
                      <span>${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey} + ▲ ▼</span>
                    </div>
                    <div>
                      <b>Trainer:</b>
                      <span>shift + /</span>
                    </div>
                  </div>`,
  },
  e: {
    tool:        'text',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.text,
    label:       '<span><u>E</u>dit Text</span>',
    description: 'Change any text on the page with a <b>double click</b>',
    instruction: '',
  },
  // c: {
  //   tool:        'screenshot',
  //   icon:        Icons.camera,
  //   label:       'Screenshot',
  //   description: 'Screenshot selected elements or the entire page'
  // },
  s: {
    tool:        'search',
    icon:        _vis_bug_icons__WEBPACK_IMPORTED_MODULE_0__.search,
    label:       '<span><u>S</u>earch</span>',
    description: 'Select elements programatically by searching for them or use built in plugins with special commands',
    instruction: '',
  },
}


/***/ }),

/***/ "./app/components/vis-bug/vis-bug.element.js":
/*!***************************************************!*\
  !*** ./app/components/vis-bug/vis-bug.element.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisBugElement: () => (/* binding */ VisBugElement),
/* harmony export */   "default": () => (/* binding */ VisBug)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./app/components/index.js");
/* harmony import */ var _features___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/ */ "./app/features/index.js");
/* harmony import */ var _styles_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles.store */ "./app/components/styles.store.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model */ "./app/components/vis-bug/model.js");
/* harmony import */ var _vis_bug_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vis-bug.icons */ "./app/components/vis-bug/vis-bug.icons.js");
/* harmony import */ var _features_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/search */ "./app/features/search.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/ */ "./app/utilities/index.js");












// import { PluginRegistry }         from '../../plugins/_registry'


class VisBug extends HTMLElement {
  constructor() {
    super()

    this.toolbar_model  = _model__WEBPACK_IMPORTED_MODULE_5__.VisBugModel
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.applyScheme    = (0,_utilities___WEBPACK_IMPORTED_MODULE_8__.schemeRule)(
      this.$shadow,
      _styles_store__WEBPACK_IMPORTED_MODULE_4__.VisBugStyles, _styles_store__WEBPACK_IMPORTED_MODULE_4__.VisBugLightStyles, _styles_store__WEBPACK_IMPORTED_MODULE_4__.VisBugDarkStyles
    )
  }

  static get observedAttributes() {
    return ['color-scheme']
  }

  connectedCallback() {
    this._tutsBaseURL = this.getAttribute('tutsBaseURL') || 'tuts'

    this.setup()

    this.selectorEngine = (0,_features___WEBPACK_IMPORTED_MODULE_3__.Selectable)(this)
    this.colorPicker    = (0,_features___WEBPACK_IMPORTED_MODULE_3__.ColorPicker)(this.$shadow, this.selectorEngine)

    ;(0,_features_search__WEBPACK_IMPORTED_MODULE_7__.provideSelectorEngine)(this.selectorEngine)

    this.toolSelected((0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tool="guides"]', this.$shadow)[0])
  }

  disconnectedCallback() {
    this.deactivate_feature()
    this.cleanup()
    this.selectorEngine.disconnect()
    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind(
      Object.keys(this.toolbar_model).reduce((events, key) =>
        events += ',' + key, ''))
    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind(`${_utilities___WEBPACK_IMPORTED_MODULE_8__.metaKey}+/`)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'color-scheme')
      this.applyScheme(newValue)
  }

  setup() {
    this.$shadow.innerHTML = this.render()

    this.hasAttribute('color-mode')
      ? this.getAttribute('color-mode')
      : this.setAttribute('color-mode', 'hex')

    this.hasAttribute('color-scheme')
      ? this.getAttribute('color-scheme')
      : this.setAttribute('color-scheme', 'auto')

    const main_ol = this.$shadow.querySelector('ol:not([colors])')
    const buttonPieces = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('li[data-tool], li[data-tool] *', main_ol)

    const clickEvent = (e) => {
      const target = e.currentTarget || e.target
      const toolButton = target.closest('[data-tool]')
      if (toolButton) this.toolSelected(toolButton) && e.stopPropagation();
    }

    Array.from(buttonPieces)
    .forEach(toolButton => {
      ;(0,_features___WEBPACK_IMPORTED_MODULE_3__.draggable)({
        el:this,
        surface: toolButton,
        cursor: 'pointer',
        clickEvent: clickEvent
      })
    })

    ;(0,_features___WEBPACK_IMPORTED_MODULE_3__.draggable)({
      el:this,
      surface: main_ol,
      cursor: 'grab',
    })

    Object.entries(this.toolbar_model).forEach(([key, value]) =>
      (0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key, e => {
        e.preventDefault()
        this.toolSelected(
          (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-tool="${value.tool}"]`, this.$shadow)[0]
        )
      })
    )

    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_utilities___WEBPACK_IMPORTED_MODULE_8__.metaKey}+/,${_utilities___WEBPACK_IMPORTED_MODULE_8__.metaKey}+.`, e =>
      this.$shadow.host.style.display =
        this.$shadow.host.style.display === 'none'
          ? 'block'
          : 'none')
  }

  cleanup() {
    Array.from(document.body.children)
      .filter(node => node.nodeName.includes('VISBUG'))
      .forEach(el => el.remove())

    this.teardown();

    document.querySelectorAll('[data-pseudo-select=true]')
      .forEach(el =>
        el.removeAttribute('data-pseudo-select'))
  }

  toolSelected(el) {
    if (typeof el === 'string')
      el = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-tool="${el}"]`, this.$shadow)[0]

    if (this.active_tool && this.active_tool.dataset.tool === el.dataset.tool) return

    if (this.active_tool) {
      this.active_tool.attr('data-active', null)
      this.deactivate_feature()
    }

    el.attr('data-active', true)
    this.active_tool = el
    this[el.dataset.tool]()
  }

  render() {
    return `
      <visbug-hotkeys></visbug-hotkeys>
      <ol constructible-support="${_utilities___WEBPACK_IMPORTED_MODULE_8__.constructibleStylesheetSupport ? 'false':'true'}">
        ${Object.entries(this.toolbar_model).reduce((list, [key, tool]) => `
          ${list}
          <li aria-label="${tool.label} Tool" aria-description="${tool.description}" aria-hotkey="${key}" data-tool="${tool.tool}" data-active="${key == 'g'}">
            ${tool.icon}
            ${this.demoTip({key, ...tool})}
          </li>
        `,'')}
      </ol>
      <ol colors>
        <li class="color" id="foreground" aria-label="Text" aria-description="Change the text color">
          <input type="color">
          ${_vis_bug_icons__WEBPACK_IMPORTED_MODULE_6__.color_text}
        </li>
        <li class="color" id="background" aria-label="Background or Fill" aria-description="Change the background color or fill of svg">
          <input type="color">
          ${_vis_bug_icons__WEBPACK_IMPORTED_MODULE_6__.color_background}
        </li>
        <li class="color" id="border" aria-label="Border or Stroke" aria-description="Change the border color or stroke of svg">
          <input type="color">
          ${_vis_bug_icons__WEBPACK_IMPORTED_MODULE_6__.color_border}
        </li>
      </ol>
    `
  }

  demoTip({key, tool, label, description, instruction}) {
    return `
      <aside ${tool}>
        <figure>
          <img src="${this._tutsBaseURL}/${tool}.gif" alt="${description}" />
          <figcaption>
            <h2>
              ${label}
              <span hotkey>${key}</span>
            </h2>
            <p>${description}</p>
            ${instruction}
          </figcaption>
        </figure>
      </aside>
    `
  }

  move() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.Moveable)(this.selectorEngine)
  }

  margin() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.Margin)(this.selectorEngine)
  }

  padding() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.Padding)(this.selectorEngine)
  }

  font() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.Font)(this.selectorEngine)
  }

  text() {
    this.selectorEngine.onSelectedUpdate(_features___WEBPACK_IMPORTED_MODULE_3__.EditText)
    this.deactivate_feature = () =>
      this.selectorEngine.removeSelectedCallback(_features___WEBPACK_IMPORTED_MODULE_3__.EditText)
  }

  align() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.Flex)(this.selectorEngine)
  }

  search() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.Search)((0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tool="search"]', this.$shadow))
  }

  boxshadow() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.BoxShadow)(this.selectorEngine)
  }

  hueshift() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.HueShift)({
      Color:  this.colorPicker,
      Visbug: this.selectorEngine,
    })
  }

  inspector() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.MetaTip)(this.selectorEngine)
  }

  accessibility() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.Accessibility)(this.selectorEngine)
  }

  guides() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.Guides)(this.selectorEngine)
  }

  screenshot() {
    this.deactivate_feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.Screenshot)()
  }

  position() {
    let feature = (0,_features___WEBPACK_IMPORTED_MODULE_3__.Position)()
    this.selectorEngine.onSelectedUpdate(feature.onNodesSelected)
    this.deactivate_feature = () => {
      this.selectorEngine.removeSelectedCallback(feature.onNodesSelected)
      feature.disconnect()
    }
  }

  execCommand(command) {
    const query = `/${command}`

    if (PluginRegistry.has(query))
      return PluginRegistry.get(query)({
        selected: this.selectorEngine.selection(),
        query
      })

    return Promise.resolve(new Error("Query not found"))
  }

  get activeTool() {
    return this.active_tool.dataset.tool
  }
}

customElements.define('vis-bug', VisBug)

const VisBugElement = new (customElements.get('vis-bug'))();

/***/ }),

/***/ "./app/components/vis-bug/vis-bug.icons.js":
/*!*************************************************!*\
  !*** ./app/components/vis-bug/vis-bug.icons.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessibility: () => (/* binding */ accessibility),
/* harmony export */   align: () => (/* binding */ align),
/* harmony export */   border: () => (/* binding */ border),
/* harmony export */   boxshadow: () => (/* binding */ boxshadow),
/* harmony export */   camera: () => (/* binding */ camera),
/* harmony export */   color_background: () => (/* binding */ color_background),
/* harmony export */   color_border: () => (/* binding */ color_border),
/* harmony export */   color_text: () => (/* binding */ color_text),
/* harmony export */   cursor: () => (/* binding */ cursor),
/* harmony export */   font: () => (/* binding */ font),
/* harmony export */   guides: () => (/* binding */ guides),
/* harmony export */   hueshift: () => (/* binding */ hueshift),
/* harmony export */   inspector: () => (/* binding */ inspector),
/* harmony export */   margin: () => (/* binding */ margin),
/* harmony export */   move: () => (/* binding */ move),
/* harmony export */   padding: () => (/* binding */ padding),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   resize: () => (/* binding */ resize),
/* harmony export */   search: () => (/* binding */ search),
/* harmony export */   text: () => (/* binding */ text),
/* harmony export */   transform: () => (/* binding */ transform)
/* harmony export */ });
const cursor = `
  <svg class="icon-cursor" version="1.1" viewBox="0 0 32 32">
    <path d="M16.689 17.655l5.311 12.345-4 2-4.646-12.678-7.354 6.678v-26l20 16-9.311 1.655z"></path>
  </svg>
`

const move = `
  <svg viewBox="0 0 24 24">
    <path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"/>
  </svg>
`

const search = `
  <svg viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
`

const margin = `
  <svg viewBox="0 0 24 24">
    <path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"/>
  </svg>
`

const padding = `
  <svg viewBox="0 0 24 24">
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"/>
  </svg>
`

const font = `
  <svg viewBox="0 0 24 24">
    <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/>
  </svg>
`

const text = `
  <svg viewBox="0 0 24 24">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
  </svg>
`

const align = `
  <svg viewBox="0 0 24 24" style="transform:rotateZ(90deg);">
    <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/>
  </svg>
`

const resize = `
  <svg viewBox="0 0 24 24">
    <path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/>
  </svg>
`

const transform = `
  <svg viewBox="0 0 24 24">
    <path d="M12,7C6.48,7,2,9.24,2,12c0,2.24,2.94,4.13,7,4.77V20l4-4l-4-4v2.73c-3.15-0.56-5-1.9-5-2.73c0-1.06,3.04-3,8-3s8,1.94,8,3
    c0,0.73-1.46,1.89-4,2.53v2.05c3.53-0.77,6-2.53,6-4.58C22,9.24,17.52,7,12,7z"/>
  </svg>
`

const border = `
  <svg viewBox="0 0 24 24">
    <path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z"/>
  </svg>
`

const hueshift = `
  <svg viewBox="0 0 24 24">
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
`

const boxshadow = `
  <svg viewBox="0 0 24 24">
    <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/>
  </svg>
`

const inspector = `
  <svg viewBox="0 0 24 24">
    <g>
      <rect x="11" y="7" width="2" height="2"/>
      <rect x="11" y="11" width="2" height="6"/>
      <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8
        c0-4.41,3.59-8,8-8s8,3.59,8,8C20,16.41,16.41,20,12,20z"/>
    </g>
  </svg>
`

const camera = `
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3.2"/>
    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </svg>
`

const guides = `
  <svg viewBox="0 0 24 24">
    <path d="M21,6H3C1.9,6,1,6.9,1,8v8c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V8C23,6.9,22.1,6,21,6z M21,16H3V8h2v4h2V8h2v4h2V8h2v4h2V8
    h2v4h2V8h2V16z"/>
  </svg>
`

const color_text = `
  <svg viewBox="3 -2 19 25">
    <path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"/>
  </svg>
`

const color_background = `
  <svg viewBox="0 0 24 18">
    <path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"/>
  </svg>
`

const color_border = `
  <svg viewBox="0 0 24 18">
    <path d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z"/>
  </svg>
`

const position = `
  <svg viewBox="0 0 24 24">
    <path d="M15.54 5.54L13.77 7.3 12 5.54 10.23 7.3 8.46 5.54 12 2zm2.92 10l-1.76-1.77L18.46 12l-1.76-1.77 1.76-1.77L22 12zm-10 2.92l1.77-1.76L12 18.46l1.77-1.76 1.77 1.76L12 22zm-2.92-10l1.76 1.77L5.54 12l1.76 1.77-1.76 1.77L2 12z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
`

const accessibility = `
  <svg viewBox="0 0 24 24">
    <path d="M12,2c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2S10.9,2,12,2z M21,9h-6v13h-2v-6h-2v6H9V9H3V7h18V9z"/>
  </svg>
`

/***/ }),

/***/ "./app/features/accessibility.js":
/*!***************************************!*\
  !*** ./app/features/accessibility.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accessibility: () => (/* binding */ Accessibility),
/* harmony export */   hideAll: () => (/* binding */ hideAll),
/* harmony export */   positionTip: () => (/* binding */ positionTip),
/* harmony export */   removeAll: () => (/* binding */ removeAll),
/* harmony export */   showTip: () => (/* binding */ showTip)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/readability.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");





const state = {
  active: {
    tip:  null,
    target: null,
  },
  tips: new Map(),
}

function Accessibility(visbug) {
  state.restoring = true

  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('body').on('mousemove', mouseMove)
  visbug.onSelectedUpdate(togglePinned)

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])('esc', _ => removeAll())

  restorePinnedTips()

  return () => {
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('body').off('mousemove', mouseMove)
    visbug.removeSelectedCallback(togglePinned)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind('esc')
    hideAll()
  }
}

const mouseMove = e => {
  const target = (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.deepElementFromPoint)(e.clientX, e.clientY)

  if ((0,_utilities___WEBPACK_IMPORTED_MODULE_2__.isOffBounds)(target) || target.nodeName.toUpperCase() === 'SVG' || target.nodeName === 'VISBUG-ALLYTIP' || target.hasAttribute('data-allytip')) { // aka: mouse out
    if (state.active.tip) {
      wipe({
        tip: state.active.tip,
        e: {target: state.active.target},
      })
      clearActive()
    }
    return
  }

  showTip(target, e)
}

function showTip(target, e) {
  if (!state.active.tip) { // create
    const tip = render(target)
    document.body.appendChild(tip)

    positionTip(tip, e)
    observe({tip, target})

    state.active.tip    = tip
    state.active.target = target
  }
  else if (target == state.active.target) { // update position
    // update position
    positionTip(state.active.tip, e)
  }
  else { // update content
    render(target, state.active.tip)
    state.active.target = target
    positionTip(state.active.tip, e)
  }
}

function positionTip(tip, e) {
  const { north, west } = mouse_quadrant(e)
  const {left, top}     = tip_position(tip, e, north, west)

  tip.style.left  = left
  tip.style.top   = top

  tip.style.setProperty('--arrow', north
    ? 'var(--arrow-up)'
    : 'var(--arrow-down)')

  tip.style.setProperty('--shadow-direction', north
    ? 'var(--shadow-up)'
    : 'var(--shadow-down)')

  tip.style.setProperty('--arrow-top', !north
    ? '-8px'
    : '100%')

  tip.style.setProperty('--arrow-left', west
    ? 'calc(100% - 15px - 15px)'
    : '15px')
}

const restorePinnedTips = () => {
  state.tips.forEach(({tip}, target) => {
    tip.style.display = 'block'
    render(target, tip)
    observe({tip, target})
  })
}

function hideAll() {
  state.tips.forEach(({tip}, target) => {
    if (tip)
      tip.style.display = 'none'
  })

  if (state.active.tip) {
    state.active.tip.remove()
    clearActive()
  }
}

function removeAll() {
  state.tips.forEach(({tip}, target) => {
    tip && tip.remove()
    unobserve({tip, target})
  })

  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('visbug-allytip').forEach(tip =>
    tip.remove())

  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-allytip]').attr('data-allytip', null)

  state.tips.clear()
}

const render = (el, tip = document.createElement('visbug-ally')) => {
  const contrast_results = determineColorContrast(el)
  const ally_attributes = (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getA11ys)(el)

  ally_attributes.map(ally =>
    ally.prop.includes('alt')
      ? ally.value = `<span text>${ally.value}</span>`
      : ally)

  ally_attributes.map(ally =>
    ally.prop.includes('title')
      ? ally.value = `<span text longform>${ally.value}</span>`
      : ally)

  tip.meta = {
    el,
    ally_attributes,
    contrast_results,
  }

  return tip
}

const determineColorContrast = el => {
  // question: how to know if the current node is actually a black background?
  // question: is there an api for composited values?
  const foreground = el instanceof SVGElement
    ? ((0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'fill') || (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'stroke'))
    : (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'color')

  const textSize  = (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getWCAG2TextSize)(el) === 'Small'
    ? 'AA'
    : 'AA+'

  let background  = (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getComputedBackgroundColor)(el)
  let pass_icon = `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
    </svg>
  `
  let fail_icon = `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
    </svg>
  `

  const [ aa_contrast, aaa_contrast ] = [
    (0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.isReadable)(background, foreground, { level: "AA", size: (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getWCAG2TextSize)(el).toLowerCase() }),
    (0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.isReadable)(background, foreground, { level: "AAA", size: (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getWCAG2TextSize)(el).toLowerCase() })
  ]

  return foreground === background
    ? `<div contrast-compliance>Foreground matches background</div>`
    : `
        <div contrast-compliance>
          <span contrast>
            <span title>Contrast ratio</span>
            <span value>${Math.floor((0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.readability)(background, foreground)  * 100) / 100}</span>
          </span>
          <span compliance>
            <span title>WCAG Compliance</span>
            <div>
              <span>
                <span value score pass="${aa_contrast ? 'true' : 'false'}">${aa_contrast ? pass_icon : fail_icon}</span>
                <span>${textSize}</span>
              </span>
              <span>
                <span value score pass="${aaa_contrast ? 'true' : 'false'}">${aaa_contrast ? pass_icon : fail_icon}</span>
                <span>A${textSize}</span>
              </span>
            </div>
          </span>
        </div>
      `
}

const mouse_quadrant = e => ({
  north: e.clientY > window.innerHeight / 2,
  west:  e.clientX > window.innerWidth / 2
})

const tip_position = (node, e, north, west) => ({
  top: `${north
    ? e.pageY - node.clientHeight - 20
    : e.pageY + 25}px`,
  left: `${west
    ? e.pageX - node.clientWidth + 23
    : e.pageX - 21}px`,
})

const handleBlur = ({target}) => {
  if (!target.hasAttribute('data-allytip') && state.tips.has(target))
    wipe(state.tips.get(target))
}

const wipe = ({tip, e:{target}}) => {
  tip.remove()
  unobserve({tip, target})
  state.tips.delete(target)
}

const togglePinned = els => {
  if (state.restoring) return state.restoring = false

  state.tips.forEach(ally => {
    if (!els.includes(ally.e.target)) {
      ally.e.target.removeAttribute('data-allytip')
      wipe(state.tips.get(ally.e.target))
    }
  })

  els
    .filter(el => !el.hasAttribute('data-allytip'))
    .forEach(el => {
      el.setAttribute('data-allytip', true)
      state.tips.set(el, {
        tip: state.active.tip,
        e: {target:el},
      })
      clearActive()
  })
}

const observe = ({tip, target}) => {
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target).on('DOMNodeRemoved', handleBlur)
}

const unobserve = ({tip, target}) => {
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target).off('DOMNodeRemoved', handleBlur)
}

const clearActive = () => {
  state.active.tip    = null
  state.active.target = null
}


/***/ }),

/***/ "./app/features/boxshadow.js":
/*!***********************************!*\
  !*** ./app/features/boxshadow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxShadow: () => (/* binding */ BoxShadow),
/* harmony export */   changeBoxShadow: () => (/* binding */ changeBoxShadow)
/* harmony export */ });
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");



const key_events = 'up,down,left,right'
  .split(',')
  .reduce((events, event) =>
    `${events},${event},shift+${event},alt+${event},alt+shift+${event}`
  , '')
  .substring(1)

const command_events = `${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+up,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+up,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+down,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+down,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+left,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+left,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+right,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+right`

function BoxShadow({selection}) {
  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key_events, (e, handler) => {
    if (e.cancelBubble) return

    e.preventDefault()

    let selectedNodes = selection()
      , keys = handler.key.split('+')

    if (keys.includes('left') || keys.includes('right'))
      keys.includes('alt')
        ? changeBoxShadow(selectedNodes, keys, 'size')
        : changeBoxShadow(selectedNodes, keys, 'x')
    else
      keys.includes('alt')
        ? changeBoxShadow(selectedNodes, keys, 'blur')
        : changeBoxShadow(selectedNodes, keys, 'y')
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(command_events, (e, handler) => {
    e.preventDefault()
    let keys = handler.key.split('+')
    keys.includes('left') || keys.includes('right')
      ? changeBoxShadow(selection(), keys, 'opacity')
      : changeBoxShadow(selection(), keys, 'inset')
  })

  return () => {
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind(key_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind(command_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind('up,down,left,right')
  }
}

const ensureHasShadow = el => {
  if (el.style.boxShadow == '' || el.style.boxShadow == 'none')
    el.style.boxShadow = 'hsla(0,0%,0%,30%) 0 0 0 0'
  return el
}

// todo: work around this propMap with a better split
const propMap = {
  'opacity':  3,
  'x':        4,
  'y':        5,
  'blur':     6,
  'size':     7,
  'inset':    8,
}

const parseCurrentShadow = el => (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'boxShadow').split(' ')

function changeBoxShadow(els, direction, prop) {
  els
    .map(ensureHasShadow)
    .map(el => (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.showHideSelected)(el, 1500))
    .map(el => ({
      el,
      style:     'boxShadow',
      current:   parseCurrentShadow(el), // ["rgb(255,", "0,", "0)", "0px", "0px", "1px", "0px"]
      propIndex: parseCurrentShadow(el)[0].includes('rgba') ? propMap[prop] : propMap[prop] - 1
    }))
    .map(payload => {
      let updated = [...payload.current]
      let cur     = prop === 'opacity'
        ? payload.current[payload.propIndex]
        : parseInt(payload.current[payload.propIndex])

      switch(prop) {
        case 'blur': 
        case 'size':
          var amount = direction.includes('shift') ? 10 : 1
          updated[payload.propIndex] = direction.includes('down') || direction.includes('left')
            ? `${cur - amount}px`
            : `${cur + amount}px`
          break
        case 'inset':
          updated[payload.propIndex] = direction.includes('down')
            ? 'inset'
            : ''
          break
        case 'opacity':
          let cur_opacity = parseFloat(cur.slice(0, cur.indexOf(')')))
          var amount = direction.includes('shift') ? 0.10 : 0.01
          updated[payload.propIndex] = direction.includes('left')
            ? cur_opacity - amount + ')'
            : cur_opacity + amount + ')'
          break
        default:
          var amount = direction.includes('shift') ? 10 : 1
          updated[payload.propIndex] = direction.includes('left') || direction.includes('up')
            ? `${cur - amount}px`
            : `${cur + amount}px`
          break
      }

      payload.value = updated
      return payload
    })
    .forEach(({el, style, value}) =>
      el.style[style] = value.join(' '))
}


/***/ }),

/***/ "./app/features/color.js":
/*!*******************************!*\
  !*** ./app/features/color.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorPicker: () => (/* binding */ ColorPicker),
/* harmony export */   functionalNotate: () => (/* binding */ functionalNotate),
/* harmony export */   healthyContrastColor: () => (/* binding */ healthyContrastColor)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");




const state = {
  active_color: 'background',
  elements: [],
}

function ColorPicker(pallete, selectorEngine) {
  const foregroundPicker  = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('#foreground', pallete)
  const backgroundPicker  = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('#background', pallete)
  const borderPicker      = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('#border', pallete)
  const fgInput           = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('input', foregroundPicker[0])
  const bgInput           = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('input', backgroundPicker[0])
  const boInput           = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('input', borderPicker[0])

  const shadows = {
    active:   '0 0 0 2px hotpink, rgba(0, 0, 0, 0.25) 0px 0.25em 0.5em',
    inactive: '0 0 0 2px var(--theme-bg), rgba(0, 0, 0, 0.25) 0px 0.25em 0.5em',
  }

  const state = {
    active_color: undefined,
    elements:     [],
  }

  fgInput.on('input', ({target:{value}}) => {
    state.elements.map(el =>
      el.style['color'] = value)

    foregroundPicker[0].style.setProperty(`--contextual_color`, value)
  })

  bgInput.on('input', ({target:{value}}) => {
    state.elements.map(el =>
      el.style[el instanceof SVGElement
        ? 'fill'
        : 'backgroundColor'
      ] = value)

    backgroundPicker[0].style.setProperty(`--contextual_color`, value)
  })

  boInput.on('input', ({target:{value}}) => {
    state.elements.map(el =>
      el.style[el instanceof SVGElement
        ? 'stroke'
        : 'borderColor'
      ] = value)

    borderPicker[0].style.setProperty(`--contextual_color`, value)
  })

  const extractColors = elements => {
    state.elements = elements

    let isMeaningfulForeground  = false
    let isMeaningfulBackground  = false
    let isMeaningfulBorder      = false
    let FG, BG, BO

    if (state.elements.length == 1) {
      const el = state.elements[0]

      if (el instanceof SVGElement) {
        FG = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor('rgb(0, 0, 0)')
        var bo_temp = (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'stroke')
        BO = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor(bo_temp === 'none'
          ? 'rgb(0, 0, 0)'
          : bo_temp)
        BG = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'fill'))
      }
      else {
        FG = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'color'))
        BG = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'backgroundColor'))
        BO = (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'borderWidth') === '0px'
          ? new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor('rgb(0, 0, 0)')
          : new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.TinyColor((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'borderColor'))
      }

      let fg = FG.toHslString()
      let bg = BG.toHslString()
      let bo = BO.toHslString()

      isMeaningfulForeground = FG.originalInput !== 'rgb(0, 0, 0)' || (el.children.length === 0 && el.textContent !== '')
      isMeaningfulBackground = BG.originalInput !== 'rgba(0, 0, 0, 0)'
      isMeaningfulBorder     = BO.originalInput !== 'rgb(0, 0, 0)'

      if (isMeaningfulForeground && !isMeaningfulBackground)
        setActive('foreground')
      else if (isMeaningfulBackground && !isMeaningfulForeground || isMeaningfulBackground && isMeaningfulForeground)
        setActive('background')

      const new_fg = isMeaningfulForeground   ? fg : ''
      const new_bg = isMeaningfulBackground   ? bg : ''
      const new_bo = isMeaningfulBorder       ? bo : ''

      const fg_icon = isMeaningfulForeground  ? healthyContrastColor(FG) : ''
      const bg_icon = isMeaningfulBackground  ? healthyContrastColor(BG) : ''
      const bo_icon = isMeaningfulBorder      ? healthyContrastColor(BO) : ''

      fgInput.attr('value', `#`+FG.toHex())
      bgInput.attr('value', `#`+BG.toHex())
      boInput.attr('value', `#`+BO.toHex())

      foregroundPicker.attr('style', `
        --contextual_color: ${new_fg};
        --icon_color: ${fg_icon};
      `)

      backgroundPicker.attr('style', `
        --contextual_color: ${new_bg};
        --icon_color: ${bg_icon};
      `)

      borderPicker.attr('style', `
        --contextual_color: ${new_bo};
        --icon_color: ${bo_icon};
      `)
    }
    else {
      // show all 3 if they've selected more than 1 node
      // todo: this is giving up, and can be solved
      foregroundPicker.attr('style', `
        box-shadow: ${state.active_color == 'foreground' ? shadows.active : shadows.inactive};
        --contextual_color: transparent;
        --icon_color: hsla(0,0%,0%,80%);
      `)

      backgroundPicker.attr('style', `
        box-shadow: ${state.active_color == 'background' ? shadows.active : shadows.inactive};
        --contextual_color: transparent;
        --icon_color: hsla(0,0%,0%,80%);
      `)

      borderPicker.attr('style', `
        box-shadow: ${state.active_color == 'border' ? shadows.active : shadows.inactive};
        --contextual_color: transparent;
        --icon_color: hsla(0,0%,0%,80%);
      `)
    }
  }

  const getActive = () =>
    state.active_color

  const setActive = key => {
    removeActive()
    state.active_color = key

    if (key === 'foreground')
      foregroundPicker[0].style.boxShadow = shadows.active
    if (key === 'background')
      backgroundPicker[0].style.boxShadow = shadows.active
    if (key === 'border')
      borderPicker[0].style.boxShadow = shadows.active
  }

  const removeActive = () =>
    [foregroundPicker, backgroundPicker, borderPicker].forEach(([picker]) =>
      picker.style.boxShadow = shadows.inactive)

  selectorEngine.onSelectedUpdate(extractColors)

  return {
    getActive,
    setActive,
    foreground: { color: color =>
      foregroundPicker[0].style.setProperty('--contextual_color', color)},
    background: { color: color =>
      backgroundPicker[0].style.setProperty('--contextual_color', color)}
  }
}

const healthyContrastColor = color => {
  let contrast = color.clone()

  contrast = contrast.isDark()
    ? contrast.lighten(75)
    : contrast.darken(50)

  return contrast.toHslString()
}

const functionalNotate = color => {
  const chunks = color.split(',')

  if (chunks.length === 4) {
    let opacity = chunks.pop()
    chunks[0] = chunks[0].replace('hsla','hsl')
    chunks[0] = chunks[0].replace('rgba','rgb')
    return chunks.join(' ') + ` / ${opacity}`
  }
  else {
    return chunks.join(' ')
  }
}


/***/ }),

/***/ "./app/features/flex.js":
/*!******************************!*\
  !*** ./app/features/flex.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Flex: () => (/* binding */ Flex),
/* harmony export */   changeDirection: () => (/* binding */ changeDirection),
/* harmony export */   changeHAlignment: () => (/* binding */ changeHAlignment),
/* harmony export */   changeHDistribution: () => (/* binding */ changeHDistribution),
/* harmony export */   changeOrder: () => (/* binding */ changeOrder),
/* harmony export */   changeVAlignment: () => (/* binding */ changeVAlignment),
/* harmony export */   changeVDistribution: () => (/* binding */ changeVDistribution),
/* harmony export */   changeWrap: () => (/* binding */ changeWrap)
/* harmony export */ });
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");



const key_events = 'up,down,left,right'
  .split(',')
  .reduce((events, event) =>
    `${events},${event},shift+${event}`
  , '')
  .substring(1)

const command_events = `${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+up,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+down,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+left,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+right,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+up,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+down,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+left,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+right`

function Flex({selection}) {
  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key_events, (e, handler) => {
    if (e.cancelBubble) return

    e.preventDefault()

    let selectedNodes = selection()
      , keys = handler.key.split('+')

    if (keys.includes('left') || keys.includes('right'))
      keys.includes('shift')
        ? changeHDistribution(selectedNodes, handler.key)
        : changeHAlignment(selectedNodes, handler.key)
    else
      keys.includes('shift')
        ? changeVDistribution(selectedNodes, handler.key)
        : changeVAlignment(selectedNodes, handler.key)
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(command_events, (e, handler) => {
    e.preventDefault()

    let selectedNodes = selection()
      , keys = handler.key.split('+')

    if (keys.includes('left') || keys.includes('right'))
      keys.includes('shift')
        ? changeOrder(selectedNodes, handler.key)
        : changeDirection(selectedNodes, 'row')
    else
      keys.includes('shift')
        ? changeWrap(selectedNodes, handler.key)
        : changeDirection(selectedNodes, 'column')
  })

  return () => {
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind(key_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind(command_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind('up,down,left,right')
  }
}

const ensureFlex = el => {
  el.style.display = 'flex'
  return el
}

const accountForOtherJustifyContent = (cur, want) => {
  if (want == 'align' && (cur != 'flex-start' && cur != 'center' && cur != 'flex-end'))
    cur = 'normal'
  else if (want == 'distribute' && (cur != 'space-around' && cur != 'space-between'))
    cur = 'normal'

  return cur
}

// todo: support reversing direction
function changeDirection(els, value) {
  els
    .map(ensureFlex)
    .map(el => {
      el.style.flexDirection = value
    })
}

const h_alignMap      = {normal: 0,'flex-start': 0,'center': 1,'flex-end': 2,}
const h_alignOptions  = ['flex-start','center','flex-end']

function changeHAlignment(els, direction) {
  els
    .map(ensureFlex)
    .map(el => ({
      el,
      style:    'justifyContent',
      current:  accountForOtherJustifyContent((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'justifyContent'), 'align'),
      direction: direction.split('+').includes('left'),
    }))
    .map(payload =>
      Object.assign(payload, {
        value: payload.direction
          ? h_alignMap[payload.current] - 1
          : h_alignMap[payload.current] + 1
      }))
    .forEach(({el, style, value}) =>
      el.style[style] = h_alignOptions[value < 0 ? 0 : value >= 2 ? 2: value])
}

const v_alignMap      = {normal: 0,'flex-start': 0,'center': 1,'flex-end': 2,}
const v_alignOptions  = ['flex-start','center','flex-end']

function changeVAlignment(els, direction) {
  els
    .map(ensureFlex)
    .map(el => ({
      el,
      style:    'alignItems',
      current:  (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'alignItems'),
      direction: direction.split('+').includes('up'),
    }))
    .map(payload =>
      Object.assign(payload, {
        value: payload.direction
          ? h_alignMap[payload.current] - 1
          : h_alignMap[payload.current] + 1
      }))
    .forEach(({el, style, value}) =>
      el.style[style] = v_alignOptions[value < 0 ? 0 : value >= 2 ? 2: value])
}

const h_distributionMap      = {normal: 1,'space-around': 0,'': 1,'space-between': 2,}
const h_distributionOptions  = ['space-around','','space-between']

function changeHDistribution(els, direction) {
  els
    .map(ensureFlex)
    .map(el => ({
      el,
      style:    'justifyContent',
      current:  accountForOtherJustifyContent((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'justifyContent'), 'distribute'),
      direction: direction.split('+').includes('left'),
    }))
    .map(payload =>
      Object.assign(payload, {
        value: payload.direction
          ? h_distributionMap[payload.current] - 1
          : h_distributionMap[payload.current] + 1
      }))
    .forEach(({el, style, value}) =>
      el.style[style] = h_distributionOptions[value < 0 ? 0 : value >= 2 ? 2: value])
}

const v_distributionMap      = {normal: 1,'space-around': 0,'': 1,'space-between': 2,}
const v_distributionOptions  = ['space-around','','space-between']

function changeVDistribution(els, direction) {
  els
    .map(ensureFlex)
    .map(el => ({
      el,
      style:    'alignContent',
      current:  (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'alignContent'),
      direction: direction.split('+').includes('up'),
    }))
    .map(payload =>
      Object.assign(payload, {
        value: payload.direction
          ? v_distributionMap[payload.current] - 1
          : v_distributionMap[payload.current] + 1
      }))
    .forEach(({el, style, value}) =>
      el.style[style] = v_distributionOptions[value < 0 ? 0 : value >= 2 ? 2: value])
}

const orderMap     = {row: 0, 'row-reverse': 1, column: 2, 'column-reverse': 3,}
const orderOptions = ['row', 'row-reverse', 'column', 'column-reverse']

function changeOrder(els, direction) {
  els
    .map(ensureFlex)
    .map(el => ({
      el,
      style: 'flexDirection',
      current: (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'flexDirection'),
      direction: direction.split('+').includes('left'),
    }))
    .map(payload =>
      Object.assign(payload, {
        value: payload.direction
          ? orderMap[payload.current] === 1 || orderMap[payload.current] === 3
            ? orderMap[payload.current] : orderMap[payload.current] + 1
          : orderMap[payload.current] === 0 || orderMap[payload.current] === 2
            ? orderMap[payload.current] : orderMap[payload.current] - 1
      }))
      .forEach(({el, style, value}) =>
        el.style[style] = orderOptions[value])
}

const wrapMap     = {nowrap: 0, 'wrap': 1,}
const wrapOptions = ['nowrap', 'wrap']

function changeWrap(els, direction) {
  els
    .map(ensureFlex)
    .map(el => ({
      el,
      style: 'flexWrap',
      current: (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'flexWrap'),
      direction: direction.split('+').includes('up'),
    }))
    .map(payload =>
      Object.assign(payload, {
        value: payload.direction
          ? wrapMap[payload.current] === 0
            ? wrapMap[payload.current] : wrapMap[payload.current] - 1
          : wrapMap[payload.current] === 1
            ? wrapMap[payload.current] : wrapMap[payload.current] + 1
      }))
      .forEach(({el, style, value}) =>
        el.style[style] = wrapOptions[value])
}


/***/ }),

/***/ "./app/features/font.js":
/*!******************************!*\
  !*** ./app/features/font.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Font: () => (/* binding */ Font),
/* harmony export */   changeAlignment: () => (/* binding */ changeAlignment),
/* harmony export */   changeFontSize: () => (/* binding */ changeFontSize),
/* harmony export */   changeFontWeight: () => (/* binding */ changeFontWeight),
/* harmony export */   changeKerning: () => (/* binding */ changeKerning),
/* harmony export */   changeLeading: () => (/* binding */ changeLeading)
/* harmony export */ });
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");



const key_events = 'up,down,left,right'
  .split(',')
  .reduce((events, event) =>
    `${events},${event},shift+${event}`
  , '')
  .substring(1)

const command_events = `${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+up,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+down`

function Font({selection}) {
  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key_events, (e, handler) => {
    if (e.cancelBubble) return

    e.preventDefault()

    let selectedNodes = selection()
      , keys = handler.key.split('+')

    if (keys.includes('left') || keys.includes('right'))
      keys.includes('shift')
        ? changeKerning(selectedNodes, handler.key)
        : changeAlignment(selectedNodes, handler.key)
    else
      keys.includes('shift')
        ? changeLeading(selectedNodes, handler.key)
        : changeFontSize(selectedNodes, handler.key)
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(command_events, (e, handler) => {
    e.preventDefault()
    let keys = handler.key.split('+')
    changeFontWeight(selection(), keys.includes('up') ? 'up' : 'down')
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])('cmd+b', e => {
    selection().forEach(el =>
      el.style.fontWeight =
        el.style.fontWeight == 'bold'
          ? null
          : 'bold')
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])('cmd+i', e => {
    selection().forEach(el =>
      el.style.fontStyle =
        el.style.fontStyle == 'italic'
          ? null
          : 'italic')
  })

  return () => {
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind(key_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind(command_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind('cmd+b,cmd+i')
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind('up,down,left,right')
  }
}

function changeLeading(els, direction) {
  els
    .map(el => (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.showHideSelected)(el))
    .map(el => ({
      el,
      style:    'lineHeight',
      current:  parseInt((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'lineHeight')),
      amount:   1,
      negative: direction.split('+').includes('down'),
    }))
    .map(payload =>
      Object.assign(payload, {
        current: payload.current == 'normal' || isNaN(payload.current)
          ? 1.14 * parseInt((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(payload.el, 'fontSize')) // document this choice
          : payload.current
      }))
    .map(payload =>
      Object.assign(payload, {
        value: payload.negative
          ? payload.current - payload.amount
          : payload.current + payload.amount
      }))
    .forEach(({el, style, value}) =>
      el.style[style] = `${value}px`)
}

function changeKerning(els, direction) {
  els
    .map(el => (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.showHideSelected)(el))
    .map(el => ({
      el,
      style:    'letterSpacing',
      current:  parseFloat((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'letterSpacing')),
      amount:   .1,
      negative: direction.split('+').includes('left'),
    }))
    .map(payload =>
      Object.assign(payload, {
        current: payload.current == 'normal' || isNaN(payload.current)
          ? 0
          : payload.current
      }))
    .map(payload =>
      Object.assign(payload, {
        value: payload.negative
          ? (payload.current - payload.amount).toFixed(2)
          : (payload.current + payload.amount).toFixed(2)
      }))
    .forEach(({el, style, value}) =>
      el.style[style] = `${value <= -2 ? -2 : value}px`)
}

function changeFontSize(els, direction) {
  els
    .map(el => (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.showHideSelected)(el))
    .map(el => ({
      el,
      style:    'fontSize',
      current:  parseInt((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'fontSize')),
      amount:   direction.split('+').includes('shift') ? 10 : 1,
      negative: direction.split('+').includes('down'),
    }))
    .map(payload =>
      Object.assign(payload, {
        font_size: payload.negative
          ? payload.current - payload.amount
          : payload.current + payload.amount
      }))
    .forEach(({el, style, font_size}) =>
      el.style[style] = `${font_size <= 6 ? 6 : font_size}px`)
}

const weightMap = {
  normal: 2,
  bold:   5,
  light:  0,
  "": 2,
  "100":0,"200":1,"300":2,"400":3,"500":4,"600":5,"700":6,"800":7,"900":8
}
const weightOptions = [100,200,300,400,500,600,700,800,900]

function changeFontWeight(els, direction) {
  els
    .map(el => (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.showHideSelected)(el))
    .map(el => ({
      el,
      style:    'fontWeight',
      current:  (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'fontWeight'),
      direction: direction.split('+').includes('down'),
    }))
    .map(payload =>
      Object.assign(payload, {
        value: payload.direction
          ? weightMap[payload.current] - 1
          : weightMap[payload.current] + 1
      }))
    .forEach(({el, style, value}) =>
      el.style[style] = weightOptions[value < 0 ? 0 : value >= weightOptions.length
        ? weightOptions.length
        : value
      ])
}

const alignMap = {
  start: 0,
  left: 0,
  center: 1,
  right: 2,
}
const alignOptions = ['left','center','right']

function changeAlignment(els, direction) {
  els
    .map(el => (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.showHideSelected)(el))
    .map(el => ({
      el,
      style:    'textAlign',
      current:  (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'textAlign'),
      direction: direction.split('+').includes('left'),
    }))
    .map(payload =>
      Object.assign(payload, {
        value: payload.direction
          ? alignMap[payload.current] - 1
          : alignMap[payload.current] + 1
      }))
    .forEach(({el, style, value}) =>
      el.style[style] = alignOptions[value < 0 ? 0 : value >= 2 ? 2: value])
}


/***/ }),

/***/ "./app/features/guides.js":
/*!********************************!*\
  !*** ./app/features/guides.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Guides: () => (/* binding */ Guides),
/* harmony export */   createGuide: () => (/* binding */ createGuide)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");
/* harmony import */ var _measurements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./measurements */ "./app/features/measurements.js");




const state = {
  gridlines:    null,
  measurements: null,
  stuck:        {
    count:        0,
    measurements: [],
  },
}

function Guides(visbug) {
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('body').on('mousemove', on_hover)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('body').on('mouseout', on_hoverout)

  window.addEventListener('scroll', hideGridlines)
  visbug.onSelectedUpdate(stickGuide)

  return () => {
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('body').off('mousemove', on_hover)
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('body').off('mouseout', on_hoverout)

    window.removeEventListener('scroll', hideGridlines)
    visbug.removeSelectedCallback(stickGuide)

    ;(0,_measurements__WEBPACK_IMPORTED_MODULE_2__.clearMeasurements)()
    hideGridlines()
  }
}

const on_hover = e => {
  const target = (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.deepElementFromPoint)(e.clientX, e.clientY)
  if ((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.isOffBounds)(target)) return
  showGridlines(target)
}

function createGuide(vert = true) {
  let guide = document.createElement('div')
  let styles = `
    position: absolute;
    top: 0;
    left: 0;
    background: hsla(330, 100%, 71%, 70%);
    pointer-events: none;
    z-index: 2147483643;
  `

  vert 
    ? styles += `
        width: 1px;
        height: 100vh;
        transform: rotate(180deg);
      `
    : styles += `
        height: 1px;
        width: 100vw;
      `

  guide.style = styles

  return guide
}

const stickGuide = els => {
   if (!els.length) return

  if (state.stuck.count >= els.length) {
    state.stuck.measurements.forEach(el => el.remove())
    state.stuck.measurements = []
    state.stuck.count = 0
  }

  state.stuck.count++

  if (els.length > 1) {
    state.stuck.measurements = [
      ...state.stuck.measurements,
      ...(0,_measurements__WEBPACK_IMPORTED_MODULE_2__.takeMeasurementOwnership)(),
    ]
  }

  state.gridlines && state.gridlines.remove()
  state.gridlines = null
}

const on_hoverout = () =>
  hideGridlines()

const showGridlines = node => {
  if (state.gridlines) {
    state.gridlines.style.display = null
    state.gridlines.update = node.getBoundingClientRect()
  }
  else {
    state.gridlines = document.createElement('visbug-gridlines')
    state.gridlines.position = node.getBoundingClientRect()

    document.body.appendChild(state.gridlines)
  }
}

const hideGridlines = () => {
  if (!state.gridlines) return
  state.gridlines.style.display = 'none'
}


/***/ }),

/***/ "./app/features/hueshift.js":
/*!**********************************!*\
  !*** ./app/features/hueshift.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HueShift: () => (/* binding */ HueShift),
/* harmony export */   changeHue: () => (/* binding */ changeHue),
/* harmony export */   extractPalleteColors: () => (/* binding */ extractPalleteColors)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");






const key_events = 'up,down,left,right'
  .split(',')
  .reduce((events, event) =>
    `${events},${event},shift+${event}`
  , '')
  .substring(1)

const command_events = `${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+up,${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+shift+up,${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+down,${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+shift+down,${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+left,${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+shift+left,${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+right,${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+shift+right`

const state = {
  active_color: undefined,
  elements: [],
}

function HueShift({Color, Visbug}) {
  state.active_color   = Color.getActive()
  state.elements       = []

  Visbug.onSelectedUpdate(elements => {
    state.elements = elements
    Color.setActive(state.active_color)
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key_events, (e, handler) => {
    if (e.cancelBubble) return

    e.preventDefault()

    let selectedNodes = state.elements
      , keys = handler.key.split('+')

    keys.includes('left') || keys.includes('right')
      ? changeHue(selectedNodes, keys, 's', Color)
      : changeHue(selectedNodes, keys, 'l', Color)
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(command_events, (e, handler) => {
    e.preventDefault()
    let keys = handler.key.split('+')
    keys.includes('left') || keys.includes('right')
      ? changeHue(state.elements, keys, 'a', Color)
      : changeHue(state.elements, keys, 'h', Color)
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(']', (e, handler) => {
    e.preventDefault()

    if (state.active_color == 'foreground')
      state.active_color = 'background'
    else if (state.active_color == 'background')
      state.active_color = 'border'

    Color.setActive(state.active_color)
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])('[', (e, handler) => {
    e.preventDefault()

    if (state.active_color == 'background')
      state.active_color = 'foreground'
    else if (state.active_color == 'border')
      state.active_color = 'background'

    Color.setActive(state.active_color)
  })

  return () => {
    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind(key_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind(command_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind('up,down,left,right')
  }
}

function changeHue(els, direction, prop, Color) {
  els
    .map(el => (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.showHideSelected)(el))
    .map(el => {
      const { foreground, background, border } = extractPalleteColors(el)

      // todo: teach hueshift to do handle color
      switch(Color.getActive()) {
        case 'background':
          return { el, current: background.color.toHsl(), style: background.style }
        case 'foreground':
          return { el, current: foreground.color.toHsl(), style: foreground.style }
        case 'border': {
          if (el.style.border === '') el.style.border = '1px solid black'
          return { el, current: border.color.toHsl(), style: border.style }
        }
      }
    })
    .map(payload =>
      Object.assign(payload, {
        amount:   direction.includes('shift') ? 10 : 1,
        negative: direction.includes('down') || direction.includes('left'),
      }))
    .map(payload => {
      if (prop === 's' || prop === 'l' || prop === 'a')
        payload.amount = payload.amount * 0.01

      payload.current[prop] = payload.negative
        ? payload.current[prop] - payload.amount
        : payload.current[prop] + payload.amount

      if (prop === 's' || prop === 'l' || prop === 'a') {
        if (payload.current[prop] > 1) payload.current[prop] = 1
        if (payload.current[prop] < 0) payload.current[prop] = 0
      }

      return payload
    })
    .forEach(({el, style, current}) => {
      let color = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(current).setAlpha(current.a)
      el.style[style] = color.toHslString()

      if (style == 'color') Color.foreground.color(color.toHslString())
      if (style == 'backgroundColor') Color.background.color(color.toHslString())
    })
}

function extractPalleteColors(el) {
  if (el instanceof SVGElement) {
    const  fg_temp = (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'stroke')

    return {
      foreground: {
        style: 'stroke',
        color: new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor(fg_temp === 'none'
          ? 'rgb(0, 0, 0)'
          : fg_temp),
      },
      background: {
        style: 'fill',
        color: new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor((0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'fill')),
      },
      border: {
        style: 'outline',
        color: new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor((0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'outline')),
      }
    }
  }
  else
    return {
      foreground: {
        style: 'color',
        color: new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor((0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'color')),
      },
      background: {
        style: 'backgroundColor',
        color: new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor((0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'backgroundColor')),
      },
      border: {
        style: 'borderColor',
        color: new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_3__.TinyColor((0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'borderColor')),
      }
    }
}


/***/ }),

/***/ "./app/features/imageswap.js":
/*!***********************************!*\
  !*** ./app/features/imageswap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleWatching: () => (/* binding */ toggleWatching),
/* harmony export */   watchImagesForUpload: () => (/* binding */ watchImagesForUpload)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");



let imgs      = []
  , overlays  = []
  , dragItem

const state = {
  watching: true,
}

function watchImagesForUpload() {
  imgs = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])([
    ...document.images,
    ...(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('picture'),
    ...findBackgroundImages(document),
  ])

  clearWatchers(imgs)
  initWatchers(imgs)
}

function toggleWatching({watch}) {
  state.watching = watch
}

const initWatchers = imgs => {
  imgs.on('dragover', onDragOver)
  imgs.on('dragleave', onDragLeave)
  imgs.on('drop', onDrop)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(document.body).on('dragover', onDragOver)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(document.body).on('dragleave', onDragLeave)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(document.body).on('drop', onDrop)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(document.body).on('dragstart', onDragStart)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(document.body).on('dragend', onDragEnd)
}

const clearWatchers = imgs => {
  imgs.off('dragover', onDragOver)
  imgs.off('dragleave', onDragLeave)
  imgs.off('drop', onDrop)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(document.body).off('dragover', onDragOver)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(document.body).off('dragleave', onDragLeave)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(document.body).off('drop', onDrop)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(document.body).off('dragstart', onDragStart)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(document.body).off('dragend', onDragEnd)
  imgs = []
}

const previewFile = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => resolve(reader.result)
  })
}

// only fired for in-page drag events, track what the user picked up
const onDragStart = ({target}) =>
  dragItem = target

const onDragEnd = e =>
  dragItem = undefined

const onDragOver = async e => {
  e.preventDefault()
  e.stopPropagation()

  const pre_selected = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('img[data-selected=true], [data-selected=true] > img')

  if (imgs.some(img => img === e.target)) {
    if (!pre_selected.length) {
      if (!isFileEvent(e))
        previewDrop(e.target)

      showOverlay(e.currentTarget, 0)
    }
    else {
      if (pre_selected.some(node => node == e.target) && !isFileEvent(e))
        pre_selected.forEach(node =>
          previewDrop(node))

      pre_selected.forEach((img, i) =>
        showOverlay(img, i))
    }
  }
}

const onDragLeave = e => {
  e.stopPropagation()
  const pre_selected = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('img[data-selected=true], [data-selected=true] > img')

  if (!pre_selected.some(node => node === e.target))
    resetPreviewed(e.target)
  else
    pre_selected.forEach(node => resetPreviewed(node))

  hideOverlays()
}

const onDrop = async e => {
  e.stopPropagation()
  e.preventDefault()

  const srcs = await getTransferData(dragItem, e)

  if (srcs.length) {
    const selectedImages = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('img[data-selected=true], [data-selected=true] > img')
    const targetImages   = getTargetContentImages(selectedImages, e)

    if (targetImages.length) {
      updateContentImages(targetImages, srcs)
    }
    else {
      const bgImages = getTargetBackgroundImages(imgs, e)
      updateBackgroundImages(bgImages, srcs[0])
    }
  }

  hideOverlays()
}

const getTransferData = async (dragItem, e) => {
  if (dragItem)
    return [dragItem.currentSrc]

  return e.dataTransfer.files.length
  ? await Promise.all([...e.dataTransfer.files]
    .filter(file => file.type.includes('image'))
    .map(previewFile))
    : []
}

const getTargetContentImages = (selected, e) =>
  selected.length ? selected
    : e.target.nodeName === 'IMG' && !selected.length ? [e.target]
    : []

const updateContentImages = (images, srcs) => {
  let i = 0
  images.forEach(img => {
    clearDragHistory(img)
    updateContentImage(img, srcs[i])
    i = ++i % srcs.length
  })
}

const updateContentImage = (img, src) => {
  img.src = src
  if (img.srcset !== '')
    img.srcset = src

  const sources = getPictureSourcesToUpdate(img)

  if (sources.length)
    sources.forEach(source =>
      source.srcset = src)
}

const getTargetBackgroundImages = (images, e) =>
  images.filter(img =>
    img.contains(e.target))

const updateBackgroundImages = (images, src) =>
  images.forEach(img => {
    clearDragHistory(img)
    if (window.getComputedStyle(img).backgroundImage != 'none')
      img.style.backgroundImage = `url(${src})`
  })

const getPictureSourcesToUpdate = img =>
  Array.from(img.parentElement.children)
    .filter(sibling =>
      sibling.nodeName === 'SOURCE')
    .filter(source =>
      !source.media || window.matchMedia(source.media).matches)

const showOverlay = (node, i) => {
  if (!state.watching) return

  const rect    = node.getBoundingClientRect()
  const overlay = overlays[i]

  if (overlay) {
    overlay.update = rect
  }
  else {
    overlays[i] = document.createElement('visbug-overlay')
    overlays[i].position = rect
    document.body.appendChild(overlays[i])
  }
}

const hideOverlays = () => {
  overlays.forEach(overlay =>
    overlay.remove())
  overlays = []
}

const findBackgroundImages = el => {
  const src_regex = /url\(\s*?['"]?\s*?(\S+?)\s*?["']?\s*?\)/i

  return (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('*').reduce((collection, node) => {
    const prop = (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(node, 'background-image')
    const match = src_regex.exec(prop)

    // if (match) collection.push(match[1])
    if (match) collection.push(node)

    return collection
  }, [])
}

const previewDrop = async (node) => {
  if (!['lastSrc','lastSrcset','lastSiblings','lastBackgroundImage'].some(prop => node[prop])){
    const setSrc = dragItem.currentSrc
    if (window.getComputedStyle(node).backgroundImage !== 'none'){
      node.lastBackgroundImage = window.getComputedStyle(node).backgroundImage
      node.style.backgroundImage = `url(${setSrc})`
    }else{
      cacheImageState(node)
      updateContentImage(node, setSrc)
    }
  }
}

const cacheImageState = image => {
  image.lastSrc    = image.src
  image.lastSrcset = image.srcset

  const sibSource  = getPictureSourcesToUpdate(image)

  if (sibSource.length) {
    sibSource.forEach(sib => {
      sib.lastSrcset = sib.srcset
      sib.lastSrc = sib.src
    })
  }
}

const resetPreviewed = node => {
  if (node.lastSrc)
    node.src = node.lastSrc

  if (node.lastSrcset)
    node.srcset = node.lastSrcset

  const sources = getPictureSourcesToUpdate(node)
  if (sources.length)
    sources.forEach(source => {
      if (source.lastSrcset)
        source.srcset = source.lastSrcset
      if (source.lastSrc)
        source.src = source.lastSrc
    })

  if (node.lastBackgroundImage)
    node.style.backgroundImage = node.lastBackgroundImage

  clearDragHistory(node)
}

const clearDragHistory = node => {
  ['lastSrc','lastSrcset','lastBackgroundImage'].forEach(prop =>
    node[prop] = null)

  const sources = getPictureSourcesToUpdate(node)

  if (sources){
    sources.forEach(source => {
      source.lastSrcset = null
      source.lastSrc = null
    })
  }
}

const isFileEvent = e =>
  e.dataTransfer.types.some(type => type === 'Files')


/***/ }),

/***/ "./app/features/index.js":
/*!*******************************!*\
  !*** ./app/features/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accessibility: () => (/* reexport safe */ _accessibility__WEBPACK_IMPORTED_MODULE_15__.Accessibility),
/* harmony export */   BoxShadow: () => (/* reexport safe */ _boxshadow__WEBPACK_IMPORTED_MODULE_10__.BoxShadow),
/* harmony export */   ColorPicker: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_8__.ColorPicker),
/* harmony export */   EditText: () => (/* reexport safe */ _text__WEBPACK_IMPORTED_MODULE_4__.EditText),
/* harmony export */   Flex: () => (/* reexport safe */ _flex__WEBPACK_IMPORTED_MODULE_6__.Flex),
/* harmony export */   Font: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_5__.Font),
/* harmony export */   Guides: () => (/* reexport safe */ _guides__WEBPACK_IMPORTED_MODULE_12__.Guides),
/* harmony export */   HueShift: () => (/* reexport safe */ _hueshift__WEBPACK_IMPORTED_MODULE_11__.HueShift),
/* harmony export */   Margin: () => (/* reexport safe */ _margin__WEBPACK_IMPORTED_MODULE_0__.Margin),
/* harmony export */   MetaTip: () => (/* reexport safe */ _metatip__WEBPACK_IMPORTED_MODULE_9__.MetaTip),
/* harmony export */   Moveable: () => (/* reexport safe */ _move__WEBPACK_IMPORTED_MODULE_2__.Moveable),
/* harmony export */   Padding: () => (/* reexport safe */ _padding__WEBPACK_IMPORTED_MODULE_3__.Padding),
/* harmony export */   Position: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_14__.Position),
/* harmony export */   Screenshot: () => (/* reexport safe */ _screenshot__WEBPACK_IMPORTED_MODULE_13__.Screenshot),
/* harmony export */   Search: () => (/* reexport safe */ _search__WEBPACK_IMPORTED_MODULE_7__.Search),
/* harmony export */   Selectable: () => (/* reexport safe */ _selectable__WEBPACK_IMPORTED_MODULE_1__.Selectable),
/* harmony export */   draggable: () => (/* reexport safe */ _position__WEBPACK_IMPORTED_MODULE_14__.draggable)
/* harmony export */ });
/* harmony import */ var _margin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./margin */ "./app/features/margin.js");
/* harmony import */ var _selectable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectable */ "./app/features/selectable.js");
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./move */ "./app/features/move.js");
/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./padding */ "./app/features/padding.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ "./app/features/text.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./font */ "./app/features/font.js");
/* harmony import */ var _flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flex */ "./app/features/flex.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search */ "./app/features/search.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./color */ "./app/features/color.js");
/* harmony import */ var _metatip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metatip */ "./app/features/metatip.js");
/* harmony import */ var _boxshadow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boxshadow */ "./app/features/boxshadow.js");
/* harmony import */ var _hueshift__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hueshift */ "./app/features/hueshift.js");
/* harmony import */ var _guides__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guides */ "./app/features/guides.js");
/* harmony import */ var _screenshot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./screenshot */ "./app/features/screenshot.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./position */ "./app/features/position.js");
/* harmony import */ var _accessibility__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./accessibility */ "./app/features/accessibility.js");



















/***/ }),

/***/ "./app/features/margin.js":
/*!********************************!*\
  !*** ./app/features/margin.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Margin: () => (/* binding */ Margin),
/* harmony export */   createMarginVisual: () => (/* binding */ createMarginVisual),
/* harmony export */   pushAllElementSides: () => (/* binding */ pushAllElementSides),
/* harmony export */   pushElement: () => (/* binding */ pushElement)
/* harmony export */ });
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");



const key_events = 'up,down,left,right'
  .split(',')
  .reduce((events, event) =>
    `${events},${event},alt+${event},shift+${event},shift+alt+${event}`
  , '')
  .substring(1)

const command_events = `${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+up,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+up,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+down,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+down`

function Margin(visbug) {
  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key_events, (e, handler) => {
    if (e.cancelBubble) return

    e.preventDefault()
    pushElement(visbug.selection(), handler.key)
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(command_events, (e, handler) => {
    e.preventDefault()
    pushAllElementSides(visbug.selection(), handler.key)
  })

  visbug.onSelectedUpdate(paintBackgrounds)

  return () => {
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind(key_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind(command_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind('up,down,left,right') // bug in lib?
    visbug.removeSelectedCallback(paintBackgrounds)
    removeBackgrounds(visbug.selection())
  }
}

function pushElement(els, direction) {
  els
    .map(el => (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.showHideSelected)(el))
    .map(el => ({
      el,
      style:    'margin' + (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getSide)(direction),
      current:  parseInt((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'margin' + (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getSide)(direction)), 10),
      amount:   direction.split('+').includes('shift') ? 10 : 1,
      negative: direction.split('+').includes('alt'),
    }))
    .map(payload =>
      Object.assign(payload, {
        margin: payload.negative
          ? payload.current - payload.amount
          : payload.current + payload.amount
      }))
    .forEach(({el, style, margin}) =>
      el.style[style] = `${margin < 0 ? 0 : margin}px`)
}

function pushAllElementSides(els, keycommand) {
  const combo = keycommand.split('+')
  let spoof = ''

  if (combo.includes('shift'))  spoof = 'shift+' + spoof
  if (combo.includes('down'))   spoof = 'alt+' + spoof

  'up,down,left,right'.split(',')
    .forEach(side => pushElement(els, spoof + side))
}

function paintBackgrounds(els) {
  els.forEach(el => {
    const label_id = el.getAttribute('data-label-id')

    document
      .querySelector(`visbug-handles[data-label-id="${label_id}"]`)
      .backdrop = {
        element:  createMarginVisual(el),
        update:   createMarginVisual,
      }
  })
}

function removeBackgrounds(els) {
  els.forEach(el => {
    const label_id = el.getAttribute('data-label-id')
    const boxmodel = document.querySelector(`visbug-handles[data-label-id="${label_id}"]`)
      .$shadow.querySelector('visbug-boxmodel')

    if (boxmodel) boxmodel.remove()
  })
}

function createMarginVisual(el, hover = false) {
  const bounds            = el.getBoundingClientRect()
  const calculatedStyle   = (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'margin')
  const boxdisplay        = document.createElement('visbug-boxmodel')

  if (calculatedStyle !== '0px') {
    const sides = {
      top:    (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'marginTop'),
      right:  (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'marginRight'),
      bottom: (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'marginBottom'),
      left:   (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'marginLeft'),
    }

    Object.entries(sides).forEach(([side, val]) => {
      if (typeof val !== 'number')
        val = parseInt((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'margin'+'-'+side).slice(0, -2))

      sides[side] = Math.round(val.toFixed(1) * 100) / 100
    })

    boxdisplay.position = { 
      mode: 'margin',
      color: hover ? 'purple' : 'pink',
      bounds, 
      sides,
    }
  }

  return boxdisplay
}


/***/ }),

/***/ "./app/features/measurements.js":
/*!**************************************!*\
  !*** ./app/features/measurements.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearMeasurements: () => (/* binding */ clearMeasurements),
/* harmony export */   createMeasurements: () => (/* binding */ createMeasurements),
/* harmony export */   takeMeasurementOwnership: () => (/* binding */ takeMeasurementOwnership)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");


const state = {
  distances:  [],
  target:     null,
}

function createMeasurements({$anchor, $target}) {
  if (state.target == $target && state.distances.length) return
  else state.target = $target

  if (state.distances.length) clearMeasurements()

  const anchorBounds = $anchor.getBoundingClientRect()
  const targetBounds = $target.getBoundingClientRect()

  const measurements = []

  // right
  if (anchorBounds.right < targetBounds.left) {
    measurements.push({
      x: anchorBounds.right,
      y: anchorBounds.top + (anchorBounds.height / 2) - 3,
      d: targetBounds.left - anchorBounds.right,
      q: 'right',
    })
  }
  if (anchorBounds.right < targetBounds.right && anchorBounds.right > targetBounds.left) {
    measurements.push({
      x: anchorBounds.right,
      y: anchorBounds.top + (anchorBounds.height / 2) - 3,
      d: targetBounds.right - anchorBounds.right,
      q: 'right',
    })
  }

  // left
  if (anchorBounds.left > targetBounds.right) {
    measurements.push({
      x: window.innerWidth - anchorBounds.left,
      y: anchorBounds.top + (anchorBounds.height / 2) - 3,
      d: anchorBounds.left - targetBounds.right,
      q: 'left',
    })
  }
  if (anchorBounds.left > targetBounds.left && anchorBounds.left < targetBounds.right) {
    measurements.push({
      x: window.innerWidth - anchorBounds.left,
      y: anchorBounds.top + (anchorBounds.height / 2) - 3,
      d: anchorBounds.left - targetBounds.left,
      q: 'left',
    })
  }

  // top
  if (anchorBounds.top > targetBounds.bottom) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: targetBounds.bottom,
      d: anchorBounds.top - targetBounds.bottom,
      q: 'top',
      v: true,
    })
  }
  if (anchorBounds.top > targetBounds.top && anchorBounds.top < targetBounds.bottom) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: targetBounds.top,
      d: anchorBounds.top - targetBounds.top,
      q: 'top',
      v: true,
    })
  }

  // bottom
  if (anchorBounds.bottom < targetBounds.top) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: anchorBounds.bottom,
      d: targetBounds.top - anchorBounds.bottom,
      q: 'bottom',
      v: true,
    })
  }
  if (anchorBounds.bottom < targetBounds.bottom && anchorBounds.bottom > targetBounds.top) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: anchorBounds.bottom,
      d: targetBounds.bottom - anchorBounds.bottom,
      q: 'bottom',
      v: true,
    })
  }

  // inside left/right
  if (anchorBounds.right > targetBounds.right && anchorBounds.left < targetBounds.left) {
    measurements.push({
      x: window.innerWidth - anchorBounds.right,
      y: anchorBounds.top + (anchorBounds.height / 2) - 3,
      d: anchorBounds.right - targetBounds.right,
      q: 'left',
    })
    measurements.push({
      x: anchorBounds.left,
      y: anchorBounds.top + (anchorBounds.height / 2) - 3,
      d: targetBounds.left - anchorBounds.left,
      q: 'right',
    })
  }

  // inside top/right
  if (anchorBounds.top < targetBounds.top && anchorBounds.bottom > targetBounds.bottom) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: anchorBounds.top,
      d: targetBounds.top - anchorBounds.top,
      q: 'bottom',
      v: true,
    })
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: targetBounds.bottom,
      d: anchorBounds.bottom - targetBounds.bottom,
      q: 'top',
      v: true,
    })
  }

  // create custom elements for all created measurements
  measurements
    .map(measurement => Object.assign(measurement, {
      d: Math.round(measurement.d.toFixed(1) * 100) / 100
    }))
    .forEach(measurement => {
      const $measurement = document.createElement('visbug-distance')

      $measurement.position = {
        line_model:     measurement,
        node_label_id:  state.distances.length,
      }

      document.body.appendChild($measurement)
      state.distances[state.distances.length] = $measurement
    })
}

function clearMeasurements() {
  if (!state.distances) return

  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-measuring]').forEach(el =>
    el.removeAttribute('data-measuring'))

  state.distances.forEach(node => node.remove())
  state.distances = []
}

function takeMeasurementOwnership() {
  const distances = [...state.distances]
  state.distances = []
  return distances
}


/***/ }),

/***/ "./app/features/metatip.js":
/*!*********************************!*\
  !*** ./app/features/metatip.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetaTip: () => (/* binding */ MetaTip),
/* harmony export */   hideAll: () => (/* binding */ hideAll),
/* harmony export */   positionTip: () => (/* binding */ positionTip),
/* harmony export */   removeAll: () => (/* binding */ removeAll),
/* harmony export */   showTip: () => (/* binding */ showTip)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./app/features/search.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color.js */ "./app/features/color.js");







const state = {
  active: {
    tip:  null,
    target: null,
  },
  tips: new Map(),
}

const modemap = {
  'hex': 'toHexString',
  'hsl': 'toHslString',
  'rgb': 'toRgbString',
}

const services = {}

function MetaTip(visbug) {
  services.selectors = visbug.select
  state.restoring = true

  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('body').on('mousemove', mouseMove)
  visbug.onSelectedUpdate(togglePinned)

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])('esc', _ => removeAll())

  restorePinnedTips()

  return () => {
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('body').off('mousemove', mouseMove)
    visbug.removeSelectedCallback(togglePinned)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind('esc')
    hideAll()
  }
}

const mouseMove = e => {
  const target = (0,_utilities___WEBPACK_IMPORTED_MODULE_3__.deepElementFromPoint)(e.clientX, e.clientY)

  if ((0,_utilities___WEBPACK_IMPORTED_MODULE_3__.isOffBounds)(target) || target.nodeName === 'VISBUG-METATIP' || target.hasAttribute('data-metatip')) { // aka: mouse out
    if (state.active.tip) {
      wipe({
        tip: state.active.tip,
        e: {target: state.active.target},
      })
      clearActive()
    }
    return
  }

  showTip(target, e)
}

function showTip(target, e) {
  if (!state.active.tip) { // create
    const tip = render(target)
    document.body.appendChild(tip)

    positionTip(tip, e)
    observe({tip, target})

    state.active.tip    = tip
    state.active.target = target
  }
  else if (target == state.active.target) { // update position
    // update position
    positionTip(state.active.tip, e)
  }
  else { // update content
    render(target, state.active.tip)
    state.active.target = target
    positionTip(state.active.tip, e)
  }
}

function positionTip(tip, e) {
  const { north, west } = mouse_quadrant(e)
  const { left, top }   = tip_position(tip, e, north, west)

  tip.style.left  = left
  tip.style.top   = top

  tip.style.setProperty('--arrow', north
    ? 'var(--arrow-up)'
    : 'var(--arrow-down)')

  tip.style.setProperty('--arrow-top', !north
    ? '-8px'
    : '100%')

  tip.style.setProperty('--arrow-left', west
    ? 'calc(100% - 15px - 15px)'
    : '15px')
}

const restorePinnedTips = () => {
  state.tips.forEach(({tip}, target) => {
    tip.style.display = 'block'
    render(target, tip)
    observe({tip, target})
  })
}

function hideAll() {
  state.tips.forEach(({tip}, target) => {
    if (tip)
      tip.style.display = 'none'
  })

  if (state.active.tip) {
    state.active.tip.remove()
    clearActive()
  }
}

function removeAll() {
  state.tips.forEach(({tip}, target) => {
    tip && tip.remove()
    unobserve({tip, target})
  })

  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('visbug-metatip').forEach(tip =>
    tip.remove())

  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-metatip]').attr('data-metatip', null)

  state.tips.clear()
}

const render = (el, tip = document.createElement('visbug-metatip')) => {
  const { width, height } = el.getBoundingClientRect()
  const colormode = modemap[(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('vis-bug').attr('color-mode')]

  const styles = (0,_utilities___WEBPACK_IMPORTED_MODULE_3__.getStyles)(el)
    .map(style => Object.assign(style, {
      prop: (0,_utilities___WEBPACK_IMPORTED_MODULE_3__.camelToDash)(style.prop)
    }))
    .filter(style =>
      style.prop.includes('font-family')
        ? el.matches('h1,h2,h3,h4,h5,h6,p,a,dd,dt,li,ol,pre,abbr,cite,dfn,kbd,q,small,input,label,legend,textarea,blockquote,date,button,figcaption,nav,header,footer,em,b,code,mark,time,summary,details')
        : true
    )
    .map(style => {
      if (style.prop.includes('color') || style.prop.includes('background-color') || style.prop.includes('border-color') || style.prop.includes('Color') || style.prop.includes('fill') || style.prop.includes('stroke'))
        style.value = `
          <span color style="background-color:${style.value};"></span>
          <span color-value>${(0,_color_js__WEBPACK_IMPORTED_MODULE_4__.functionalNotate)(new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__.TinyColor(style.value)[colormode]())}</span>
        `

      if (style.prop.includes('box-shadow')) {
        const [, color, x, y, blur, spread] = (0,_utilities___WEBPACK_IMPORTED_MODULE_3__.getShadowValues)(style.value)
        style.value = `${(0,_color_js__WEBPACK_IMPORTED_MODULE_4__.functionalNotate)(new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__.TinyColor(color)[colormode]())} ${x} ${y} ${blur} ${spread}`
      }

      if (style.prop.includes('text-shadow')) {
        const [, color, x, y, blur] = (0,_utilities___WEBPACK_IMPORTED_MODULE_3__.getTextShadowValues)(style.value)
        style.value = `${(0,_color_js__WEBPACK_IMPORTED_MODULE_4__.functionalNotate)(new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_5__.TinyColor(color)[colormode]())} ${x} ${y} ${blur}`
      }

      if (style.prop.includes('font-family'))
        style.value = `<span string value>${(0,_utilities___WEBPACK_IMPORTED_MODULE_3__.firstUsableFontFromFamily)(style.value)}</span>`

      if (style.prop.includes('grid-template-areas'))
        style.value = style.value.replace(/" "/g, '"<br>"')

      if (style.prop.includes('background-image'))
        style.value = `<a target="_blank" href="${style.value.slice(style.value.indexOf('(') + 2, style.value.length - 2)}">${style.value.slice(0,25) + '...'}</a>`

      // check if style is inline style, show indicator
      if (el.getAttribute('style') && el.getAttribute('style').includes(style.prop))
        style.value = `<span local-change>${style.value}</span>`

      return style
    })

  const localModifications = styles.filter(style =>
    el.getAttribute('style') && el.getAttribute('style').includes(style.prop)
      ? 1
      : 0)

  const notLocalModifications = styles.filter(style =>
    el.getAttribute('style') && el.getAttribute('style').includes(style.prop)
      ? 0
      : 1)

  tip.meta = {
    el,
    width,
    height,
    localModifications,
    notLocalModifications,
  }

  return tip
}

const mouse_quadrant = e => ({
  north: e.clientY > window.innerHeight / 2,
  west:  e.clientX > window.innerWidth / 2
})

const tip_position = (node, e, north, west) => ({
  top: `${north
    ? e.pageY - node.clientHeight - 20
    : e.pageY + 25}px`,
  left: `${west
    ? e.pageX - node.clientWidth + 23
    : e.pageX - 21}px`,
})

const handleBlur = ({target}) => {
  if (target.hasAttribute && !target.hasAttribute('data-metatip') && state.tips.has(target))
    wipe(state.tips.get(target))
}

const wipe = ({tip, e:{target}}) => {
  tip.remove()
  unobserve({tip, target})
  state.tips.delete(target)
}

const togglePinned = els => {
  if (state.restoring) return state.restoring = false

  state.tips.forEach(meta => {
    if (!els.includes(meta.e.target)) {
      meta.e.target.removeAttribute('data-metatip')
      wipe(state.tips.get(meta.e.target))
    }
  })

  els
    .filter(el => !el.hasAttribute('data-metatip'))
    .forEach(el => {
      el.setAttribute('data-metatip', true)
      state.tips.set(el, {
        tip: state.active.tip,
        e: {target:el},
      })
      clearActive()
  })
}

const linkQueryClicked = ({detail:{ text, activator }}) => {
  if (!text) return

  ;(0,_search__WEBPACK_IMPORTED_MODULE_2__.queryPage)('[data-pseudo-select]', el =>
    el.removeAttribute('data-pseudo-select'))

  ;(0,_search__WEBPACK_IMPORTED_MODULE_2__.queryPage)(text + ':not([data-selected])', el =>
    activator === 'mouseenter'
      ? el.setAttribute('data-pseudo-select', true)
      : services.selectors.select(el))
}

const linkQueryHoverOut = e => {
  ;(0,_search__WEBPACK_IMPORTED_MODULE_2__.queryPage)('[data-pseudo-select]', el =>
    el.removeAttribute('data-pseudo-select'))
}

const observe = ({tip, target}) => {
  // $(tip).on('query', linkQueryClicked)
  // $(tip).on('unquery', linkQueryHoverOut)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target).on('DOMNodeRemoved', handleBlur)
}

const unobserve = ({tip, target}) => {
  // $(tip).off('query', linkQueryClicked)
  // $(tip).off('unquery', linkQueryHoverOut)
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target).off('DOMNodeRemoved', handleBlur)
}

const clearActive = () => {
  state.active.tip    = null
  state.active.target = null
}


/***/ }),

/***/ "./app/features/move.js":
/*!******************************!*\
  !*** ./app/features/move.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Moveable: () => (/* binding */ Moveable),
/* harmony export */   canMoveDown: () => (/* binding */ canMoveDown),
/* harmony export */   canMoveLeft: () => (/* binding */ canMoveLeft),
/* harmony export */   canMoveRight: () => (/* binding */ canMoveRight),
/* harmony export */   canMoveUnder: () => (/* binding */ canMoveUnder),
/* harmony export */   canMoveUp: () => (/* binding */ canMoveUp),
/* harmony export */   clearListeners: () => (/* binding */ clearListeners),
/* harmony export */   dragNDrop: () => (/* binding */ dragNDrop),
/* harmony export */   moveElement: () => (/* binding */ moveElement),
/* harmony export */   popOut: () => (/* binding */ popOut)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");
/* harmony import */ var _imageswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageswap */ "./app/features/imageswap.js");





const key_events = 'up,down,left,right'
const state = {
  drag: {
    src:        null,
    parent:     null,
    parent_ui:  [],
    siblings:   new Map(),
    swapping:   new Map(),
  },
  hover: {
    dropzones: [],
    observers: [],
  },
}
// todo: indicator for when node can descend
// todo: have it work with shadowDOM
function Moveable(visbug) {
  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key_events, (e, {key}) => {
    if (e.cancelBubble) return

    e.preventDefault()
    e.stopPropagation()

    visbug.selection().forEach(el => {
      moveElement(el, key)
      updateFeedback(el)
    })
  })

  visbug.onSelectedUpdate(dragNDrop)
  ;(0,_imageswap__WEBPACK_IMPORTED_MODULE_3__.toggleWatching)({watch: false})

  return () => {
    ;(0,_imageswap__WEBPACK_IMPORTED_MODULE_3__.toggleWatching)({watch: true})
    visbug.removeSelectedCallback(dragNDrop)
    clearListeners()
    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind(key_events)
  }
}

function moveElement(el, direction) {
  if (!el) return

  switch(direction) {
    case 'left':
      if (canMoveLeft(el))
        el.parentNode.insertBefore(el, el.previousElementSibling)
      else
        (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.showEdge)(el.parentNode)
      break

    case 'right':
      if (canMoveRight(el) && el.nextElementSibling.nextSibling)
        el.parentNode.insertBefore(el, el.nextElementSibling.nextSibling)
      else if (canMoveRight(el))
        el.parentNode.appendChild(el)
      else
        (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.showEdge)(el.parentNode)
      break

    case 'up':
      if (canMoveUp(el))
        popOut({el})
      break

    case 'down':
      if (canMoveUnder(el))
        popOut({el, under: true})
      else if (canMoveDown(el))
        el.nextElementSibling.prepend(el)
      break
  }
}

const canMoveLeft    = el => el.previousElementSibling
const canMoveRight   = el => el.nextElementSibling
const canMoveDown    = el => el.nextElementSibling && el.nextElementSibling.children.length
const canMoveUnder   = el => !el.nextElementSibling && el.parentNode && el.parentNode.parentNode
const canMoveUp      = el => el.parentNode && el.parentNode.parentNode

const popOut = ({el, under = false}) =>
  el.parentNode.parentNode.insertBefore(el,
    el.parentNode.parentNode.children[
      under
        ? (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getNodeIndex)(el) + 1
        : (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getNodeIndex)(el)])

function dragNDrop(selection) {
  if (!selection.length)
    return

  clearListeners()

  const [src]         = selection
  const {parentNode}  = src

  const validMoveableChildren = [...parentNode.querySelectorAll(':scope > *' + _utilities___WEBPACK_IMPORTED_MODULE_2__.notList)]

  const tooManySelected       = selection.length !== 1
  const hasNoSiblingsToDrag   = validMoveableChildren.length <= 1
  const isAnSVG               = src instanceof SVGElement

  if (tooManySelected || hasNoSiblingsToDrag || isAnSVG) 
    return 

  validMoveableChildren.forEach(sibling =>
    state.drag.siblings.set(sibling, createGripUI(sibling)))

  state.drag.parent     = parentNode
  state.drag.parent_ui  = createParentUI(parentNode)

  moveWatch(state.drag.parent)
}

const moveWatch = node => {
  const $node = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(node)

  $node.on('mouseleave', dragDrop)
  $node.on('dragstart', dragStart)
  $node.on('drop', dragDrop)

  state.drag.siblings.forEach((grip, sibling) => {
    sibling.setAttribute('draggable', true)
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sibling).on('dragover', dragOver)
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sibling).on('mouseenter', siblingHoverIn)
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sibling).on('mouseleave', siblingHoverOut)
  })
}

const moveUnwatch = node => {
  const $node = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(node)

  $node.off('mouseleave', dragDrop)
  $node.off('dragstart', dragStart)
  $node.off('drop', dragDrop)

  state.drag.siblings.forEach((grip, sibling) => {
    sibling.removeAttribute('draggable')
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sibling).off('dragover', dragOver)
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sibling).off('mouseenter', siblingHoverIn)
    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sibling).off('mouseleave', siblingHoverOut)
  })
}

const dragStart = ({target}) => {
  if (!state.drag.siblings.has(target))
    return

  state.drag.src = target
  state.hover.dropzones.push(createDropzoneUI(target))
  state.drag.siblings.get(target).style.opacity = 0.01

  target.setAttribute('visbug-drag-src', true)
  ghostNode(target)

  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('visbug-hover').forEach(el =>
    !el.hasAttribute('visbug-drag-container') && el.remove())
}

const dragOver = e => {
  if (
    !state.drag.src || 
    state.drag.swapping.get(e.target) || 
    e.target.hasAttribute('visbug-drag-src') || 
    !state.drag.siblings.has(e.currentTarget) ||
    e.currentTarget !== e.target
  ) return

  state.drag.swapping.set(e.target, true)
  ;(0,_utilities___WEBPACK_IMPORTED_MODULE_2__.swapElements)(state.drag.src, e.target)

  setTimeout(() => 
    state.drag.swapping.delete(e.target)
  , 250)
}

const dragDrop = e => {
  if (!state.drag.src) return

  state.drag.src.removeAttribute('visbug-drag-src')
  ghostBuster(state.drag.src)

  if (state.drag.siblings.has(state.drag.src))
    state.drag.siblings.get(state.drag.src).style.opacity = null

  state.hover.dropzones.forEach(zone =>
    zone.remove())

  state.drag.src = null
}

const siblingHoverIn = ({target}) => {
  if (!state.drag.siblings.has(target))
    return

  state.drag.siblings.get(target)
    .toggleHovering({hovering:true})
}

const siblingHoverOut = ({target}) => {
  if (!state.drag.siblings.has(target))
    return

  state.drag.siblings.get(target)
    .toggleHovering({hovering:false})
}

const ghostNode = ({style}) => {
  style.transition  = 'opacity .25s ease-out'
  style.opacity     = 0.01
}

const ghostBuster = ({style}) => {
  style.transition  = null
  style.opacity     = null
}

const createDropzoneUI = el => {
  const zone = document.createElement('visbug-corners')

  zone.position = {el}
  document.body.appendChild(zone)

  const observer = new MutationObserver(list =>
    zone.position = {el})

  observer.observe(el.parentNode, { 
    childList: true, 
    subtree: true, 
  })

  state.hover.observers.push(observer)

  return zone
}

const createGripUI = el => {
  const grip = document.createElement('visbug-grip')

  grip.position = {el}
  document.body.appendChild(grip)

  const observer = new MutationObserver(list =>
    grip.position = {el})

  observer.observe(el.parentNode, { 
    childList: true, 
    subtree: true, 
  })

  state.hover.observers.push(observer)

  return grip
}

const createParentUI = parent => {
  const hover = document.createElement('visbug-hover')
  const label = document.createElement('visbug-label')

  hover.position = {el:parent}
  hover.setAttribute('visbug-drag-container', true)

  label.text = 'Drag Bounds'
  label.position = {boundingRect: parent.getBoundingClientRect()}
  label.style.setProperty('--label-bg', 'var(--theme-purple)')

  document.body.appendChild(hover)
  document.body.appendChild(label)

  const observer = new MutationObserver(list => {
    hover.position = {el:parent}
    label.position = {boundingRect: parent.getBoundingClientRect()}
  })

  observer.observe(parent, { 
    childList: true, 
    subtree: true, 
  })

  state.hover.observers.push(observer)

  return [hover,label]
}

function clearListeners() {
  moveUnwatch(state.drag.parent)

  state.hover.observers.forEach(observer => 
    observer.disconnect())

  state.hover.dropzones.forEach(zone => 
    zone.remove())

  state.drag.siblings.forEach((grip, sibling) => 
    grip.remove())

  state.drag.parent_ui.forEach(ui => 
    ui.remove())

  state.hover.observers = []
  state.hover.dropzones = []
  state.drag.parent_ui  = []
  state.drag.siblings.clear()
}

const updateFeedback = el => {
  let options = ''
  // get current elements offset/size
  if (canMoveLeft(el))  options += '⇠'
  if (canMoveRight(el)) options += '⇢'
  if (canMoveDown(el))  options += '⇣'
  if (canMoveUp(el))    options += '⇡'
  // create/move arrows in absolute/fixed to overlay element
  options && console.info('%c'+options, "font-size: 2rem;")
}


/***/ }),

/***/ "./app/features/padding.js":
/*!*********************************!*\
  !*** ./app/features/padding.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Padding: () => (/* binding */ Padding),
/* harmony export */   createPaddingVisual: () => (/* binding */ createPaddingVisual),
/* harmony export */   padAllElementSides: () => (/* binding */ padAllElementSides),
/* harmony export */   padElement: () => (/* binding */ padElement)
/* harmony export */ });
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");



const key_events = 'up,down,left,right'
  .split(',')
  .reduce((events, event) =>
    `${events},${event},alt+${event},shift+${event},shift+alt+${event}`
  , '')
  .substring(1)

const command_events = `${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+up,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+up,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+down,${_utilities___WEBPACK_IMPORTED_MODULE_1__.metaKey}+shift+down`

function Padding(visbug) {
  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key_events, (e, handler) => {
    if (e.cancelBubble) return

    e.preventDefault()
    padElement(visbug.selection(), handler.key)
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(command_events, (e, handler) => {
    e.preventDefault()
    padAllElementSides(visbug.selection(), handler.key)
  })

  visbug.onSelectedUpdate(paintBackgrounds)

  return () => {
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind(key_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind(command_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_0__["default"].unbind('up,down,left,right') // bug in lib?
    visbug.removeSelectedCallback(paintBackgrounds)
    removeBackgrounds(visbug.selection())
  }
}

function padElement(els, direction) {
  els
    .map(el => (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.showHideSelected)(el))
    .map(el => ({
      el,
      style:    'padding' + (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getSide)(direction),
      current:  parseInt((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'padding' + (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getSide)(direction)), 10),
      amount:   direction.split('+').includes('shift') ? 10 : 1,
      negative: direction.split('+').includes('alt'),
    }))
    .map(payload =>
      Object.assign(payload, {
        padding: payload.negative
          ? payload.current - payload.amount
          : payload.current + payload.amount
      }))
    .forEach(({el, style, padding}) =>
      el.style[style] = `${padding < 0 ? 0 : padding}px`)
}

function padAllElementSides(els, keycommand) {
  const combo = keycommand.split('+')
  let spoof = ''

  if (combo.includes('shift'))  spoof = 'shift+' + spoof
  if (combo.includes('down'))   spoof = 'alt+' + spoof

  'up,down,left,right'.split(',')
    .forEach(side => padElement(els, spoof + side))
}

function paintBackgrounds(els) {
  els.forEach(el => {
    const label_id = el.getAttribute('data-label-id')

    document
      .querySelector(`visbug-handles[data-label-id="${label_id}"]`)
      .backdrop = {
        element:  createPaddingVisual(el),
        update:   createPaddingVisual,
      }
  })
}

function removeBackgrounds(els) {
  els.forEach(el => {
    const label_id = el.getAttribute('data-label-id')
    const boxmodel = document.querySelector(`visbug-handles[data-label-id="${label_id}"]`)
      .$shadow.querySelector('visbug-boxmodel')

    if (boxmodel) boxmodel.remove()
  })
}

function createPaddingVisual(el, hover = false) {
  const bounds            = el.getBoundingClientRect()
  const calculatedStyle   = (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'padding')
  const boxdisplay        = document.createElement('visbug-boxmodel')

  if (calculatedStyle !== '0px') {
    const sides = {
      top:    (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'paddingTop'),
      right:  (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'paddingRight'),
      bottom: (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'paddingBottom'),
      left:   (0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'paddingLeft'),
    }

    Object.entries(sides).forEach(([side, val]) => {
      if (typeof val !== 'number')
        val = parseInt((0,_utilities___WEBPACK_IMPORTED_MODULE_1__.getStyle)(el, 'padding'+'-'+side).slice(0, -2))

      sides[side] = Math.round(val.toFixed(1) * 100) / 100
    })

    boxdisplay.position = { 
      mode: 'padding',
      color: hover ? 'purple' : 'pink',
      bounds, 
      sides,
    }
  }

  return boxdisplay
}


/***/ }),

/***/ "./app/features/position.js":
/*!**********************************!*\
  !*** ./app/features/position.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Position: () => (/* binding */ Position),
/* harmony export */   draggable: () => (/* binding */ draggable),
/* harmony export */   positionElement: () => (/* binding */ positionElement)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");




const key_events = 'up,down,left,right'
  .split(',')
  .reduce((events, event) =>
    `${events},${event},alt+${event},shift+${event},shift+alt+${event}`
  , '')
  .substring(1)

const command_events = `${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+up,${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+shift+up,${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+down,${_utilities___WEBPACK_IMPORTED_MODULE_2__.metaKey}+shift+down`

function Position() {
  const state = {
    elements: []
  }

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(key_events, (e, handler) => {
    if (e.cancelBubble) return

    e.preventDefault()
    positionElement(state.elements, handler.key)
  })

  const onNodesSelected = els => {
    state.elements.forEach(el =>
      el.teardown())

    state.elements = els.map(el =>
      draggable({el}))
  }

  const disconnect = () => {
    state.elements.forEach(el => el.teardown())
    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind(key_events)
    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind('up,down,left,right')
  }

  return {
    onNodesSelected,
    disconnect,
  }
}

function draggable({el, surface = el, cursor = 'move', clickEvent}) {
   const state = {
    target: el,
    surface,
    mouse: {
      down: false,
      x: 0,
      y: 0,
    },
    element: {
      x: 0,
      y: 0,
    },
    travelDistance: 0
  }

  const setup = () => {
    el.style.transition   = 'none'
    surface.style.cursor  = cursor

    surface.addEventListener('mousedown', onMouseDown, true)
    surface.addEventListener('mouseup', onMouseUp, true)
    document.addEventListener('mousemove', onMouseMove, true)
  }

  const teardown = () => {
    el.style.transition   = null
    surface.style.cursor  = null

    surface.removeEventListener('mousedown', onMouseDown, true)
    surface.removeEventListener('mouseup', onMouseUp, true)
    document.removeEventListener('mousemove', onMouseMove, true)
  }

  const onMouseDown = e => {
    if(e.target !== state.surface) return
    e.preventDefault()

    if(getComputedStyle(el).position == 'static')
      el.style.position = 'relative'
    el.style.willChange = 'top,left'

    if (el instanceof SVGElement) {
      const translate = el.getAttribute('transform')

      const [ x, y ] = translate
        ? extractSVGTranslate(translate)
        : [0,0]

      state.element.x  = x
      state.element.y  = y
    }
    else {
      state.element.x  = parseInt((0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'left'))
      state.element.y  = parseInt((0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, 'top'))
    }

    state.mouse.x        = e.clientX
    state.mouse.y        = e.clientY
    state.mouse.down     = true
    state.travelDistance = 0
  }

  const onMouseUp = e => {
    if(e.target !== state.surface) return

    e.preventDefault()
    e.stopPropagation()

    state.mouse.down = false
    el.style.willChange = null

    if (el instanceof SVGElement) {
      const translate = el.getAttribute('transform')

      const [ x, y ] = translate
        ? extractSVGTranslate(translate)
        : [0,0]

      state.element.x    = x
      state.element.y    = y
    }
    else {
      state.element.x    = parseInt(el.style.left) || 0
      state.element.y    = parseInt(el.style.top) || 0
    }

    const treatAsClick = !state.travelDistance || state.travelDistance < 5
    if (clickEvent && treatAsClick) clickEvent(e);
    state.travelDistance = 0 // reset after
  }

  const onMouseMove = e => {
    if (!state.mouse.down) return

    e.preventDefault()
    e.stopPropagation()


    if (el instanceof SVGElement) {
      el.setAttribute('transform', `translate(
        ${state.element.x + e.clientX - state.mouse.x},
        ${state.element.y + e.clientY - state.mouse.y}
      )`)
    }
    else {
      el.style.left = state.element.x + e.clientX - state.mouse.x + 'px'
      el.style.top  = state.element.y + e.clientY - state.mouse.y + 'px'
    }

    state.travelDistance += 1
  }

  setup()
  el.teardown = teardown

  return el
}

function positionElement(els, direction) {
  els
    .map(el => ensurePositionable(el))
    .map(el => (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.showHideSelected)(el))
    .map(el => ({
        el,
        ...extractCurrentValueAndSide(el, direction),
        amount:   direction.split('+').includes('shift') ? 10 : 1,
        negative: determineNegativity(el, direction),
    }))
    .map(payload =>
      Object.assign(payload, {
        position: payload.negative
          ? payload.current + payload.amount
          : payload.current - payload.amount
      }))
    .forEach(({el, style, position}) =>
      el instanceof SVGElement
        ? setTranslateOnSVG(el, direction, position)
        : el.style[style] = position + 'px')
}

const extractCurrentValueAndSide = (el, direction) => {
  let style, current

  if (el instanceof SVGElement) {
    const translate = el.attr('transform')

    const [ x, y ] = translate
      ? extractSVGTranslate(translate)
      : [0,0]

    style   = 'transform'
    current = direction.includes('down') || direction.includes('up')
      ? y
      : x
  }
  else {
    const side = (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getSide)(direction).toLowerCase()
    style = (side === 'top' || side === 'bottom') ? 'top' : 'left'
    current = (0,_utilities___WEBPACK_IMPORTED_MODULE_2__.getStyle)(el, style)

    current === 'auto'
      ? current = 0
      : current = parseInt(current, 10)
  }

  return { style, current }
}

const extractSVGTranslate = translate =>
  translate.substring(
    translate.indexOf('(') + 1,
    translate.indexOf(')')
  ).split(',')
  .map(val => parseFloat(val))

const setTranslateOnSVG = (el, direction, position) => {
  const transform = el.attr('transform')
  const [ x, y ] = transform
    ? extractSVGTranslate(transform)
    : [0,0]

  const pos = direction.includes('down') || direction.includes('up')
    ? `${x},${position}`
    : `${position},${y}`

  el.attr('transform', `translate(${pos})`)
}

const determineNegativity = (el, direction) =>
  direction.includes('right') || direction.includes('down')

const ensurePositionable = el => {
  if (el instanceof HTMLElement)
    el.style.position = 'relative'
  return el
}


/***/ }),

/***/ "./app/features/screenshot.js":
/*!************************************!*\
  !*** ./app/features/screenshot.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Screenshot: () => (/* binding */ Screenshot)
/* harmony export */ });
function Screenshot(node, page) {
  alert('Coming Soon!')

  return () => {}
}

/***/ }),

/***/ "./app/features/search.js":
/*!********************************!*\
  !*** ./app/features/search.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Search: () => (/* binding */ Search),
/* harmony export */   provideSelectorEngine: () => (/* binding */ provideSelectorEngine),
/* harmony export */   queryPage: () => (/* binding */ queryPage)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var query_selector_shadow_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-selector-shadow-dom */ "./node_modules/query-selector-shadow-dom/src/querySelectorDeep.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities */ "./app/utilities/index.js");
/* harmony import */ var _utilities_cross_browser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/cross-browser.js */ "./app/utilities/cross-browser.js");



// import { PluginRegistry, PluginHints } from '../plugins/_registry'



let SelectorEngine

// create input
const search_base = document.createElement('div')
search_base.classList.add('search')
search_base.innerHTML = `
  <input list="visbug-plugins" type="search" placeholder="ex: images, .btn, button, text, ..."/>
  <datalist id="visbug-plugins">
    ${_utilities_cross_browser_js__WEBPACK_IMPORTED_MODULE_4__.isFirefox > 0
      ?  `<option value="h1, h2, h3, .get-multiple">
          <option value="nav > a:first-child">
          <option value="#get-by-id">
          <option value=".get-by.class-names">
          <option value="images">
          <option value="text">`

      :  `<option value="h1, h2, h3, .get-multiple">example</option>
          <option value="nav > a:first-child">example</option>
          <option value="#get-by-id">example</option>
          <option value=".get-by.class-names">example</option>
          <option value="images">alias</option>
          <option value="text">alias</option>`}

    
  </datalist>
`

// ${PluginHints.reduce((options, hint) =>
//   options += isFirefox > 0
//     ? `<option value="${hint.command}">`
//     : `<option value="${hint.command}">${hint.description}`
// , '')}

const search        = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(search_base)
const searchInput   = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('input', search_base)

const showSearchBar = () => search.attr('style', 'display:block')
const hideSearchBar = () => search.attr('style', 'display:none')
const stopBubbling  = e => e.key != 'Escape' && e.stopPropagation()

function Search(node) {
  if (node) node[0].appendChild(search[0])

  const onQuery = e => {
    e.preventDefault()
    e.stopPropagation()

    const query = e.target.value

    window.requestIdleCallback(_ =>
      queryPage(query))
  }

  const focus = e =>
    searchInput[0].focus()

  searchInput.on('click', focus)
  searchInput.on('input', onQuery)
  searchInput.on('keydown', stopBubbling)
  // searchInput.on('blur', hideSearchBar)

  showSearchBar()
  focus()

  // hotkeys('escape,esc', (e, handler) => {
  //   hideSearchBar()
  //   hotkeys.unbind('escape,esc')
  // })

  return () => {
    hideSearchBar()
    searchInput.off('oninput', onQuery)
    searchInput.off('keydown', stopBubbling)
    searchInput.off('blur', hideSearchBar)
  }
}

function provideSelectorEngine(Engine) {
  SelectorEngine = Engine
}

function queryPage(query, fn) {
  // todo: should stash a cleanup method to be called when query doesnt match
  // if (PluginRegistry.has(query))
  //   return PluginRegistry.get(query)({
  //     selected: SelectorEngine.selection(),
  //     query
  //   })

  // if (query == 'links')     query = 'a'
  // if (query == 'buttons')   query = 'button'
  // if (query == 'images')    query = 'img'
  // if (query == 'text')      query = 'p,caption,a,h1,h2,h3,h4,h5,h6,small,date,time,li,dt,dd'

  // if (!query) return SelectorEngine.unselect_all()
  // if (query == '.' || query == '#' || query.trim().endsWith(',')) return

  // try {
  //   let matches = querySelectorAllDeep(query + notList)
  //   if (!matches.length) matches = querySelectorAllDeep(query)
  //   if (matches.length) {
  //     matches.forEach(el =>
  //       fn
  //         ? fn(el)
  //         : SelectorEngine.select(el))
  //   }
  // }
  // catch (err) {}
}


/***/ }),

/***/ "./app/features/selectable.js":
/*!************************************!*\
  !*** ./app/features/selectable.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Selectable: () => (/* binding */ Selectable),
/* harmony export */   handleLabelText: () => (/* binding */ handleLabelText)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");
/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./move */ "./app/features/move.js");
/* harmony import */ var _imageswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageswap */ "./app/features/imageswap.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./app/features/search.js");
/* harmony import */ var _measurements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./measurements */ "./app/features/measurements.js");
/* harmony import */ var _margin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./margin */ "./app/features/margin.js");
/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./padding */ "./app/features/padding.js");
/* harmony import */ var _metatip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./metatip */ "./app/features/metatip.js");
/* harmony import */ var _accessibility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./accessibility */ "./app/features/accessibility.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");
/* harmony import */ var _utilities_history__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilities/history */ "./app/utilities/history.js");

















function Selectable(visbug) {
  const page              = document.body
  let selected            = []
  let selectedCallbacks   = []
  let labels              = []
  let handles             = []

  const hover_state       = {
    target:   null,
    element:  null,
    label:    null,
  }

  const sourceList = {}

  const mapSourceFromElement = (el) => {
    let sourceMap = {}
    if(el.children.length == 0) return 
    for(const child of el.children) {
      if(child.children.length) {
        sourceMap[(0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(child)] = mapSourceFromElement(child)
      } else {
        let propName
        for(const prop in child) {
          if(prop.includes("reactFiber")) propName = prop
        }
        if(propName && child[propName]) {
          sourceMap[(0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(child)] = child[propName]._debugSource ?? child[propName]._debugOwner._debugSource
          sourceList[(0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(child)] = child[propName]._debugSource ?? child[propName]._debugOwner._debugSource
        }
      }
    }
    return sourceMap
  }

  const sourceMap         = mapSourceFromElement(document.body)
  console.log({ sourceMap, sourceList })
  _utilities_history__WEBPACK_IMPORTED_MODULE_11__["default"].mutations.saveSourceMap(sourceList)

  const listen = () => {
    page.addEventListener('click', on_click, true)
    page.addEventListener('dblclick', on_dblclick, true)

    page.on('selectstart', on_selection)
    page.on('mousemove', on_hover)
    document.addEventListener('copy', on_copy) // history done
    document.addEventListener('cut', on_cut) // history done
    document.addEventListener('paste', on_paste) // history done

    watchCommandKey()

    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+alt+c`, on_copy_styles)
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+alt+v`, e => on_paste_styles()) // TODO: add edit here
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])('esc', on_esc)
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+d`, on_duplicate) // history done
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])('backspace,del,delete', on_delete) // history done
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])('alt+del,alt+backspace', on_clearstyles) // history done
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+e,${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+shift+e`, on_expand_selection)
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+g,${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+shift+g`, on_group) // TODO: add edit here
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])('tab,shift+tab,enter,shift+enter', on_keyboard_traversal)
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+shift+enter`, on_select_children)
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`shift+'`, on_select_parent)
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+z`, _utilities_history__WEBPACK_IMPORTED_MODULE_11__["default"].actions.undo)
    ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+shift+z`, _utilities_history__WEBPACK_IMPORTED_MODULE_11__["default"].actions.redo)
  }

  const unlisten = () => {
    page.removeEventListener('click', on_click, true)
    page.removeEventListener('dblclick', on_dblclick, true)

    page.off('selectstart', on_selection)
    page.off('mousemove', on_hover)

    document.removeEventListener('copy', on_copy)
    document.removeEventListener('cut', on_cut)
    document.removeEventListener('paste', on_paste)

    hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind(`esc,${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+d,backspace,del,delete,alt+del,alt+backspace,${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+e,${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+shift+e,${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+g,${_utilities___WEBPACK_IMPORTED_MODULE_10__.metaKey}+shift+g,tab,shift+tab,enter,shift+enter`)
  }

  const on_click = e => {
    const $target = (0,_utilities___WEBPACK_IMPORTED_MODULE_10__.deepElementFromPoint)(e.clientX, e.clientY)

    if ((0,_utilities___WEBPACK_IMPORTED_MODULE_10__.isOffBounds)($target) && !selected.filter(el => el == $target).length)
      return

    e.preventDefault()
    if (!e.altKey) e.stopPropagation()

    if (!e.shiftKey) {
      unselect_all({silent:true})
      ;(0,_measurements__WEBPACK_IMPORTED_MODULE_5__.clearMeasurements)()
    }

    if(e.shiftKey && $target.hasAttribute('data-selected'))
      unselect($target.getAttribute('data-label-id'))
    else
      select($target)
  }

  const unselect = id => {
    [...labels, ...handles]
      .filter(node =>
          node.getAttribute('data-label-id') === id)
        .forEach(node =>
          node.remove())

    selected.filter(node =>
      node.getAttribute('data-label-id') === id)
      .forEach(node =>
        (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(node).attr({
          'data-selected':      null,
          'data-selected-hide': null,
          'data-label-id':      null,
          'data-pseudo-select':         null,
          'data-measuring':     null,
          'data-outward':       null,
      }))

    selected = selected.filter(node => node.getAttribute('data-label-id') !== id)

    tellWatchers()
  }

  const on_dblclick = e => {
    e.preventDefault()
    e.stopPropagation()
    if ((0,_utilities___WEBPACK_IMPORTED_MODULE_10__.isOffBounds)(e.target)) return
    visbug.toolSelected('text')
  }

  const watchCommandKey = e => {
    let did_hide = false

    document.onkeydown = function(e) {
      if (hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].ctrl && selected.length) {
        (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('visbug-handles, visbug-label, visbug-hover, visbug-grip').forEach(el =>
          el.style.display = 'none')

        did_hide = true
      }
    }

    document.onkeyup = function(e) {
      if (did_hide) {
        (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('visbug-handles, visbug-label, visbug-hover, visbug-grip').forEach(el =>
          el.style.display = null)

        did_hide = false
      }
    }
  }

  const on_esc = _ =>
    unselect_all()

  const on_duplicate = e => {
    const root_node = selected[0]
    if (!root_node) return

    const deep_clone = root_node.cloneNode(true)
    deep_clone.removeAttribute('data-selected')
    root_node.parentNode.insertBefore(deep_clone, root_node.nextSibling)

    _utilities_history__WEBPACK_IMPORTED_MODULE_11__["default"].actions.do({
      parentLocation: (0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(deep_clone.parentNode),
      location: (0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(deep_clone),
      element: {
        tagName: deep_clone.tagName,
        outerHTML: deep_clone.outerHTML,
      },
      action: 'add',
    })

    e.preventDefault()
  }

  const on_delete = e =>
    selected.length && delete_all()

  const on_clearstyles = (_e) => {
    selected.forEach(el => {
      const beforeEdit = el.outerHTML
      el.attr('style', null)
      _utilities_history__WEBPACK_IMPORTED_MODULE_11__["default"].actions.do({
        parentLocation: (0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(el.parentNode),
        location: (0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(el),
        element: {
          tagName: el.tagName,
          outerHTML: beforeEdit,
          finalOuterHTML: el.outerHTML,
        },
        action: 'edit',
      })
    })
  }

  const on_copy = async e => {
    // if user has selected text, dont try to copy an element
    if (window.getSelection().toString().length)
      return

    if (selected[0] && window.node_clipboard !== selected[0]) {
      e.preventDefault()
      let $node = selected[0].cloneNode(true)
      $node.removeAttribute('data-selected')

      window.copy_backup = $node.outerHTML
      e.clipboardData.setData('text/html', window.copy_backup)

      const { state } = await navigator.permissions.query({ name: 'clipboard-write' })

      if (state === 'granted')
        await navigator.clipboard.writeText(window.copy_backup)
    }
  }

  const on_cut = e => {
    if (selected[0] && window.node_clipboard !== selected[0]) {
      let $node = selected[0].cloneNode(true)
      $node.removeAttribute('data-selected')
      window.copy_backup = $node.outerHTML
      e.clipboardData.setData('text/html', window.copy_backup)
      const el = selected[0]
      if(el.tagName != 'VISBUG-HANDLES' && el.tagName != 'VISBUG-LABEL' && el.tagName != 'VISBUG-HOVER' && el.tagName != 'VISBUG-DISTANCE') {
        _utilities_history__WEBPACK_IMPORTED_MODULE_11__["default"].actions.do({
          parentLocation: (0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(el.parentNode),
          location: (0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(el),
          element: {
            tagName: el.tagName,
            outerHTML: el.outerHTML,
          },
          action: 'delete',
        })
        // log the deleted element for undo
      }
      selected[0].remove()
    }
  }

  const on_paste = async (e, index = 0) => {
    const clipData = e.clipboardData.getData('text/html')
    const globalClipboard = await navigator.clipboard.readText()
    const potentialHTML = clipData || globalClipboard || window.copy_backup

    if (selected.length && potentialHTML) {
      e.preventDefault()

      selected.forEach(parent => {
        const el = (0,_utilities___WEBPACK_IMPORTED_MODULE_10__.htmlStringToDom)(potentialHTML)
        if(!(el instanceof Element)) return
        parent.appendChild(el)
        if(el.tagName != 'VISBUG-HANDLES' && el.tagName != 'VISBUG-LABEL' && el.tagName != 'VISBUG-HOVER' && el.tagName != 'VISBUG-DISTANCE') {
          _utilities_history__WEBPACK_IMPORTED_MODULE_11__["default"].actions.do({
            parentLocation: (0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(parent),
            location: (0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(el),
            element: {
              tagName: el.tagName,
              outerHTML: el.outerHTML,
            },
            action: 'add',
          })
          // log the deleted element for undo
        }
      })
    }
  }

  const on_copy_styles = async e => {
    e.preventDefault()

    window.copied_styles = selected.map(el =>
      (0,_utilities___WEBPACK_IMPORTED_MODULE_10__.getStyles)(el))

    try {
      const colormode = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('vis-bug')[0].colorMode

      const styles = window.copied_styles[0]
        .map(({prop,value}) => {
          if (prop.includes('color') || prop.includes('background-color') || prop.includes('border-color') || prop.includes('Color') || prop.includes('fill') || prop.includes('stroke'))
            value = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_12__.TinyColor(value)[colormode]()

          if (prop.includes('boxShadow')) {
            const [, color, x, y, blur, spread] = (0,_utilities___WEBPACK_IMPORTED_MODULE_10__.getShadowValues)(value)
            value = `${new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_12__.TinyColor(color)[colormode]()} ${x} ${y} ${blur} ${spread}`
          }

          if (prop.includes('textShadow')) {
            const [, color, x, y, blur] = (0,_utilities___WEBPACK_IMPORTED_MODULE_10__.getTextShadowValues)(value)
            value = `${new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_12__.TinyColor(color)[colormode]()} ${x} ${y} ${blur}`
          }
          return {prop,value}
        })
        .reduce((message, item) =>
          [...message, `${(0,_utilities___WEBPACK_IMPORTED_MODULE_10__.camelToDash)(item.prop)}: ${item.value};`]
        , []).join('\n')

      const {state} = await navigator.permissions.query({name:'clipboard-write'})

      if (styles && state === 'granted') {
        await navigator.clipboard.writeText(styles)
        console.info('copied!')
      }
    } catch(e) {
      console.warn(e)
    }
  }

  const on_paste_styles = async (e, index = 0) => {
    if (window.copied_styles) {
      selected.forEach(el => {
        window.copied_styles[index]
          .map(({prop, value}) =>
            el.style[prop] = value)

        index >= window.copied_styles.length - 1
          ? index = 0
          : index++
      })
    }
    else {
      const potentialStyles = await navigator.clipboard.readText()

      if (selected.length && potentialStyles)
        selected.forEach(el =>
          el.style = potentialStyles)
    }
  }

  const on_expand_selection = (e, {key}) => {
    e.preventDefault()

    const [root] = selected
    if (!root) return

    const query = combineNodeNameAndClass(root)

    if ((0,_utilities___WEBPACK_IMPORTED_MODULE_10__.isSelectorValid)(query))
      expandSelection({
        query,
        all: key.includes('shift'),
      })
  }

  const on_group = (e, {key}) => {
    e.preventDefault()

    if (key.split('+').includes('shift')) {
      let $selected = [...selected]
      unselect_all()
      $selected.reverse().forEach(el => {
        let l = el.children.length
        while (el.children.length > 0) {
          var node = el.childNodes[el.children.length - 1]
          if (node.nodeName !== '#text')
            select(node)
          el.parentNode.prepend(node)
        }
        el.parentNode.removeChild(el)
      })
    }
    else {
      let div = document.createElement('div')
      selected[0].parentNode.prepend(
        selected.reverse().reduce((div, el) => {
          div.appendChild(el)
          return div
        }, div)
      )
      unselect_all()
      select(div)
    }
  }

  const getElementSkeleton = (el, tabLevel, hasChildrenWithoutChildren) => {
    const tabSpace = ' '.repeat(tabLevel)
    let skeleton = ``
    for(const child of el.children) {
      const tab = '_'.repeat(2)
      if(child.children.length) {
        const hasChildrenWithoutChildren = !(Array.from(child.children).some(innerChild => !innerChild.children.length) 
                                              && Array.from(child.children).some(innerChild => innerChild.children.length)
                                          )
        skeleton += `${tabSpace}<${child.tagName.toLowerCase()}>\n${getElementSkeleton(child, tabLevel + 2, hasChildrenWithoutChildren)}`
      } else {
        skeleton += `${tabSpace}${hasChildrenWithoutChildren ? ` |${tab}` : ''}<${child.tagName.toLowerCase()}>\n`
      }
    }
    return skeleton
  }

  const on_selection = e => !(0,_utilities___WEBPACK_IMPORTED_MODULE_10__.isOffBounds)(e.target)
    && selected.length
    && selected[0].textContent != e.target.textContent
    && e.preventDefault()

  // console.log(e)
  // const el = e.target
  // let skeleton = `<${el.tagName.toLowerCase()}>\n${getElementSkeleton(e.target, 2)}`
  // console.log(skeleton)
  // TODO: show this in the UI

  const on_keyboard_traversal = (e, {key}) => {
    if (!selected.length) return

    e.preventDefault()
    e.stopPropagation()

    const targets = selected.reduce((flat_n_unique, node) => {
      const element_to_left     = (0,_move__WEBPACK_IMPORTED_MODULE_2__.canMoveLeft)(node)
      const element_to_right    = (0,_move__WEBPACK_IMPORTED_MODULE_2__.canMoveRight)(node)
      const has_parent_element  = (0,_utilities___WEBPACK_IMPORTED_MODULE_10__.findNearestParentElement)(node)
      const has_child_elements  = (0,_utilities___WEBPACK_IMPORTED_MODULE_10__.findNearestChildElement)(node)

      if (key.includes('shift')) {
        if (key.includes('tab') && element_to_left)
          flat_n_unique.add(element_to_left)
        else if (key.includes('enter') && has_parent_element)
          flat_n_unique.add(has_parent_element)
        else
          flat_n_unique.add(node)
      }
      else {
        if (key.includes('tab') && element_to_right)
          flat_n_unique.add(element_to_right)
        else if (key.includes('enter') && has_child_elements)
          flat_n_unique.add(has_child_elements)
        else
          flat_n_unique.add(node)
      }

      return flat_n_unique
    }, new Set())

    if (targets.size) {
      unselect_all({silent:true})
      targets.forEach(node => {
        select(node)
        show_tip(node)
      })
    }
  }

  const show_tip = el => {
    const active_tool = visbug.activeTool
    let tipFactory

    if (active_tool === 'accessibility') {
      (0,_accessibility__WEBPACK_IMPORTED_MODULE_9__.removeAll)()
      tipFactory = _accessibility__WEBPACK_IMPORTED_MODULE_9__.showTip
    }
    else if (active_tool === 'inspector') {
      (0,_metatip__WEBPACK_IMPORTED_MODULE_8__.removeAll)()
      tipFactory = _metatip__WEBPACK_IMPORTED_MODULE_8__.showTip
    }

    if (!tipFactory) return

    const {top, left} = el.getBoundingClientRect()
    const { pageYOffset, pageXOffset } = window

    tipFactory(el, {
      clientY:  top,
      clientX:  left,
      pageY:    pageYOffset + top - 10,
      pageX:    pageXOffset + left + 20,
    })
  }

  const on_hover = e => {
    const $target = (0,_utilities___WEBPACK_IMPORTED_MODULE_10__.deepElementFromPoint)(e.clientX, e.clientY)
    const tool = visbug.activeTool

    if ((0,_utilities___WEBPACK_IMPORTED_MODULE_10__.isOffBounds)($target) || $target.hasAttribute('data-selected') || $target.hasAttribute('draggable')) {
      (0,_measurements__WEBPACK_IMPORTED_MODULE_5__.clearMeasurements)()
      return clearHover()
    }

    overlayHoverUI({
      el: $target,
      // no_hover: tool === 'guides',
      no_label:
           tool === 'guides'
        || tool === 'accessibility'
        || tool === 'margin'
        || tool === 'padding'
        || tool === 'inspector',
    })

    if (tool === 'guides' && selected.length >= 1 && !selected.includes($target)) {
      $target.setAttribute('data-measuring', true)
      const [$anchor] = selected
      ;(0,_measurements__WEBPACK_IMPORTED_MODULE_5__.createMeasurements)({$anchor, $target})
    }
    else if (tool === 'margin' && !hover_state.element.$shadow.querySelector('visbug-boxmodel')) {
      hover_state.element.$shadow.appendChild(
        (0,_margin__WEBPACK_IMPORTED_MODULE_6__.createMarginVisual)(hover_state.target, true))
    }
    else if (tool === 'padding' && !hover_state.element.$shadow.querySelector('visbug-boxmodel')) {
      hover_state.element.$shadow.appendChild(
        (0,_padding__WEBPACK_IMPORTED_MODULE_7__.createPaddingVisual)(hover_state.target, true))
    }
    else if ($target.hasAttribute('data-measuring') || selected.includes($target)) {
      (0,_measurements__WEBPACK_IMPORTED_MODULE_5__.clearMeasurements)()
    }
  }

  const select = el => {
    const id = handles.length
    const tool = visbug.activeTool

    el.setAttribute('data-selected', true)
    el.setAttribute('data-label-id', id)

    clearHover()

    overlayMetaUI({
      el,
      id,
      no_label: tool === 'inspector' || tool === 'guides' || tool === 'accessibility',
    })

    selected.unshift(el)
    tellWatchers()
  }

  const selection = () =>
    selected

  const unselect_all = ({silent = false} = {}) => {
    selected
      .forEach(el =>
        (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(el).attr({
          'data-selected':      null,
          'data-selected-hide': null,
          'data-label-id':      null,
          'data-pseudo-select': null,
          'data-outward':       null,
        }))

    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-pseudo-select]').forEach(hover =>
      hover.removeAttribute('data-pseudo-select'))

    Array.from([
      ...(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('visbug-handles'),
      ...(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('visbug-label'),
      ...(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('visbug-hover'),
      ...(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('visbug-distance'),
    ]).forEach(el =>
      el.remove())

    labels    = []
    handles   = []
    selected  = []

    !silent && tellWatchers()
  }

  const delete_all = () => {
    const selected_after_delete = selected.map(el => {
      if ((0,_move__WEBPACK_IMPORTED_MODULE_2__.canMoveRight)(el))     return (0,_move__WEBPACK_IMPORTED_MODULE_2__.canMoveRight)(el)
      else if ((0,_move__WEBPACK_IMPORTED_MODULE_2__.canMoveLeft)(el)) return (0,_move__WEBPACK_IMPORTED_MODULE_2__.canMoveLeft)(el)
      else if (el.parentNode)   return el.parentNode
    })

    Array.from([...selected, ...labels, ...handles]).forEach(el => {
      if(el.tagName != 'VISBUG-HANDLES' && el.tagName != 'VISBUG-LABEL' && el.tagName != 'VISBUG-HOVER' && el.tagName != 'VISBUG-DISTANCE') {
        _utilities_history__WEBPACK_IMPORTED_MODULE_11__["default"].actions.do({
          parentLocation: (0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(el.parentNode),
          location: (0,_utilities_history__WEBPACK_IMPORTED_MODULE_11__.cssPath)(el),
          element: {
            tagName: el.tagName,
            outerHTML: el.outerHTML,
          },
          action: 'delete',
        })
        // log the deleted element for undo
      }
      el.remove()
    })

    labels    = []
    handles   = []
    selected  = []

    selected_after_delete.forEach(el =>
      select(el))
  }

  const expandSelection = ({query, all = false}) => {
    if (all) {
      const unselecteds = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(query + ':not([data-selected])')
      unselecteds.forEach(select)
    }
    else {
      const potentials = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(query)
      if (!potentials) return

      const [anchor] = selected
      const root_node_index = potentials.reduce((index, node, i) =>
        node == anchor
          ? index = i
          : index
      , null)

      if (root_node_index !== null) {
        if (!potentials[root_node_index + 1]) {
          const potential = potentials.filter(el => !el.attr('data-selected'))[0]
          if (potential) select(potential)
        }
        else {
          select(potentials[root_node_index + 1])
        }
      }
    }
  }

  const combineNodeNameAndClass = node =>
    `${node.nodeName.toLowerCase()}${(0,_utilities___WEBPACK_IMPORTED_MODULE_10__.createClassname)(node)}`

  const overlayHoverUI = ({el, no_hover = false, no_label = true}) => {
    if (hover_state.target === el) return
    hover_state.target = el

    hover_state.element = no_hover
      ? null
      : createHover(el)

    hover_state.label   = no_label
      ? null
      : createHoverLabel(el, handleLabelText(el, visbug.activeTool))
  }

  const clearHover = () => {
    if (!hover_state.target) return

    hover_state.element && hover_state.element.remove()
    hover_state.label && hover_state.label.remove()

    hover_state.target  = null
    hover_state.element = null
    hover_state.label   = null
  }

  const overlayMetaUI = ({el, id, no_label = true}) => {
    let handle = createHandle({el, id})
    let label  = no_label
      ? null
      : createLabel({
          el,
          id,
          template: handleLabelText(el, visbug.activeTool)
        })

    let observer        = createObserver(el, {handle,label})
    let parentObserver  = createObserver(el, {handle,label})

    observer.observe(el, { attributes: true })
    parentObserver.observe(el.parentNode, { childList:true, subtree:true })

    ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(label).on('DOMNodeRemoved', _ => {
      observer.disconnect()
      parentObserver.disconnect()
    })
  }

  const setLabel = (el, label) => {
    label.text = handleLabelText(el, visbug.activeTool)
    label.update = {boundingRect: el.getBoundingClientRect(), isFixed: (0,_utilities___WEBPACK_IMPORTED_MODULE_10__.isFixed)(el)}
  }

  const createLabel = ({el, id, template}) => {
    if (!labels[id]) {
      const label = document.createElement('visbug-label')

      label.text = template
      label.position = {
        boundingRect:   el.getBoundingClientRect(),
        node_label_id:  id,
        isFixed: (0,_utilities___WEBPACK_IMPORTED_MODULE_10__.isFixed)(el),
      }

      document.body.appendChild(label)

      ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(label).on('query', ({detail}) => {
        if (!detail.text) return

        ;(0,_search__WEBPACK_IMPORTED_MODULE_4__.queryPage)('[data-pseudo-select]', el =>
          el.removeAttribute('data-pseudo-select'))

        ;(0,_search__WEBPACK_IMPORTED_MODULE_4__.queryPage)(detail.text + ':not([data-selected])', el =>
          detail.activator === 'mouseenter'
            ? el.setAttribute('data-pseudo-select', true)
            : select(el))
      })

      ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(label).on('mouseleave', e => {
        e.preventDefault()
        e.stopPropagation()
        ;(0,_search__WEBPACK_IMPORTED_MODULE_4__.queryPage)('[data-pseudo-select]', el =>
          el.removeAttribute('data-pseudo-select'))
      })

      labels[labels.length] = label

      return label
    }
  }

  const createHandle = ({el, id}) => {
    if (!handles[id]) {
      const handle = document.createElement('visbug-handles')

      handle.position = { el, node_label_id: id }

      document.body.appendChild(handle)

      handles[handles.length] = handle
      return handle
    }
  }

  const createHover = el => {
    if (!el.hasAttribute('data-pseudo-select') && !el.hasAttribute('data-label-id')) {
      if (hover_state.element)
        hover_state.element.remove()

      hover_state.element = document.createElement('visbug-hover')
      document.body.appendChild(hover_state.element)
      hover_state.element.position = {el}

      return hover_state.element
    }
  }

  const createHoverLabel = (el, text) => {
    if (!el.hasAttribute('data-pseudo-select') && !el.hasAttribute('data-label-id')) {
      if (hover_state.label)
        hover_state.label.remove()

      hover_state.label = document.createElement('visbug-label')
      document.body.appendChild(hover_state.label)

      hover_state.label.text = text
      hover_state.label.position = {
        boundingRect:   el.getBoundingClientRect(),
        node_label_id:  'hover',
      }

      hover_state.label.style.setProperty(`--label-bg`, `hsl(267, 100%, 58%)`)


      return hover_state.label
    }
  }

  const createCorners = el => {
    if (!el.hasAttribute('data-pseudo-select') && !el.hasAttribute('data-label-id')) {
      if (hover_state.element)
        hover_state.element.remove()

      hover_state.element = document.createElement('visbug-corners')
      document.body.appendChild(hover_state.element)
      hover_state.element.position = {el}

      return hover_state.element
    }
  }

  const setHandle = (el, handle) => {
    handle.position = {
      el,
      node_label_id:  el.getAttribute('data-label-id'),
    }
  }

  const createObserver = (node, {label,handle}) =>
    new MutationObserver(list => {
      label && setLabel(node, label)
      handle && setHandle(node, handle)
    })

  const onSelectedUpdate = (cb, immediateCallback = true) => {
    selectedCallbacks.push(cb)
    if (immediateCallback) cb(selected)
  }

  const removeSelectedCallback = cb =>
    selectedCallbacks = selectedCallbacks.filter(callback => callback != cb)

  const tellWatchers = () =>
    selectedCallbacks.forEach(cb => cb(selected))

  const disconnect = () => {
    unselect_all()
    unlisten()
  }

  const on_select_children = (e, {key}) => {
    const targets = selected
      .filter(node => node.children.length)
      .reduce((flat, {children}) =>
        [...flat, ...Array.from(children)], [])

    if (targets.length) {
      e.preventDefault()
      e.stopPropagation()

      unselect_all()
      targets.forEach(node => select(node))
    }
  }

  const on_select_parent = (e, {key}) => {
    const targets = selected.reduce((parents, node) => {
      const parent_element = node.parentElement;

      if (parent_element.hasAttribute('data-outward'))
        return parents

      parent_element.setAttribute('data-outward', true)
      parents.push(parent_element)

      return parents
    }, [])

    if (targets.length) {
      e.preventDefault()
      e.stopPropagation()

      targets.forEach(node => {
        if (node && node !== document.body) {
          select(node)
        }
      })
    }
  }

  ;(0,_imageswap__WEBPACK_IMPORTED_MODULE_3__.watchImagesForUpload)()
  listen()

  return {
    select,
    selection,
    unselect_all,
    onSelectedUpdate,
    removeSelectedCallback,
    disconnect,
  }
}

const handleLabelText = (el, activeTool) => {
  switch(activeTool) {
    case 'align':
      return (0,_utilities___WEBPACK_IMPORTED_MODULE_10__.getStyle)(el, 'display')

    default:
      return `
        <a node>${el.nodeName.toLowerCase()}</a>
        <a>${el.id && '#' + el.id}</a>
        ${(0,_utilities___WEBPACK_IMPORTED_MODULE_10__.createClassname)(el).split('.')
          .filter(name => name != '')
          .reduce((links, name) => `
            ${links}
            <a>.${name}</a>
          `, '')
        }
      `
  }
}


/***/ }),

/***/ "./app/features/text.js":
/*!******************************!*\
  !*** ./app/features/text.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditText: () => (/* binding */ EditText)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var hotkeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hotkeys-js */ "./node_modules/hotkeys-js/dist/hotkeys.esm.js");
/* harmony import */ var _utilities___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/ */ "./app/utilities/index.js");




const removeEditability = ({target}) => {
  target.removeAttribute('contenteditable')
  target.removeAttribute('spellcheck')
  target.removeEventListener('blur', removeEditability)
  target.removeEventListener('keydown', stopBubbling)
  hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"].unbind('escape,esc')
}

const stopBubbling = e => e.key != 'Escape' && e.stopPropagation()

const cleanup = (e, handler) => {
  ;(0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])('[spellcheck="true"]').forEach(target => removeEditability({target}))
  window.getSelection().empty()
}

function EditText(elements) {
  if (!elements.length) return

  elements.map(el => {
    let $el = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(el)

    $el.attr({
      contenteditable: true,
      spellcheck: true,
    })
    el.focus()
    ;(0,_utilities___WEBPACK_IMPORTED_MODULE_2__.showHideNodeLabel)(el, true)

    $el.on('keydown', stopBubbling)
    $el.on('blur', removeEditability)
  })

  ;(0,hotkeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])('escape,esc', cleanup)
}

/***/ }),

/***/ "./app/utilities/accessibility.js":
/*!****************************************!*\
  !*** ./app/utilities/accessibility.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getA11ys: () => (/* binding */ getA11ys),
/* harmony export */   getContrastingColor: () => (/* binding */ getContrastingColor),
/* harmony export */   getWCAG2TextSize: () => (/* binding */ getWCAG2TextSize)
/* harmony export */ });
/* harmony import */ var _design_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design-properties */ "./app/utilities/design-properties.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./app/utilities/styles.js");
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/readability.js");




const getA11ys = el => {
  const elAttributes = el.getAttributeNames()

  return _design_properties__WEBPACK_IMPORTED_MODULE_0__.desiredAccessibilityMap.reduce((acc, attribute) => {
    if (elAttributes.includes(attribute))
      acc.push({
        prop:   attribute,
        value:  el.getAttribute(attribute)
      })

    if (attribute === 'aria-*')
      elAttributes.forEach(attr => {
        if (attr.includes('aria'))
          acc.push({
            prop:   attr,
            value:  el.getAttribute(attr)
          })
      })

    return acc
  }, [])
}

const getWCAG2TextSize = el => {
  
  const styles = (0,_styles__WEBPACK_IMPORTED_MODULE_1__.getStyles)(el).reduce((styleMap, style) => {
      styleMap[style.prop] = style.value
      return styleMap
  }, {})

  const { fontSize   = _design_properties__WEBPACK_IMPORTED_MODULE_0__.desiredPropMap.fontSize,
          fontWeight = _design_properties__WEBPACK_IMPORTED_MODULE_0__.desiredPropMap.fontWeight
      } = styles
  
  const isLarge = _design_properties__WEBPACK_IMPORTED_MODULE_0__.largeWCAG2TextMap.some(
    (largeProperties) => parseFloat(fontSize) >= parseFloat(largeProperties.fontSize) 
       && parseFloat(fontWeight) >= parseFloat(largeProperties.fontWeight) 
  )

  return  isLarge ? 'Large' : 'Small'
}

const getContrastingColor = color => {
  return (0,_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__.mostReadable)(
    color,
    ['#000', '#fff'],
    {
      includeFallbackColors: true,
      level: 'AAA',
      size: 'small'
    }
  )
}


/***/ }),

/***/ "./app/utilities/colors.js":
/*!*********************************!*\
  !*** ./app/utilities/colors.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colors: () => (/* binding */ colors)
/* harmony export */ });
const colors = ["#eb4034", "#30850f", "#116da7", "#4334eb", "#b134eb", "#df168e", "#e8172c", "#8f2e2b", "#8f692b", "#8a8f2b", "#358f2b", "#2b8f82", "#2b678f", "#2b2b8f", "#8f2b8f", "#8f2b55", "#1eff00", "#a86800", "#ff0000", "#008035", "#0026ff", "#bb00ff", "#d600b6", "#e60067", "#137878"];

/***/ }),

/***/ "./app/utilities/common.js":
/*!*********************************!*\
  !*** ./app/utilities/common.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepElementFromPoint: () => (/* binding */ deepElementFromPoint),
/* harmony export */   getNodeIndex: () => (/* binding */ getNodeIndex),
/* harmony export */   getSide: () => (/* binding */ getSide),
/* harmony export */   htmlStringToDom: () => (/* binding */ htmlStringToDom),
/* harmony export */   isOffBounds: () => (/* binding */ isOffBounds),
/* harmony export */   isSelectorValid: () => (/* binding */ isSelectorValid),
/* harmony export */   showEdge: () => (/* binding */ showEdge),
/* harmony export */   showHideNodeLabel: () => (/* binding */ showHideNodeLabel),
/* harmony export */   showHideSelected: () => (/* binding */ showHideSelected),
/* harmony export */   swapElements: () => (/* binding */ swapElements)
/* harmony export */ });
/* harmony import */ var blingblingjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blingblingjs */ "./node_modules/blingblingjs/src/index.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strings */ "./app/utilities/strings.js");



const deepElementFromPoint = (x, y) => {
  const el = document.elementFromPoint(x, y)

  const crawlShadows = node => {
    if (node.shadowRoot) {
      const potential = node.shadowRoot.elementFromPoint(x, y)

      if (potential == node)          return node
      else if (potential.shadowRoot)  return crawlShadows(potential)
      else                            return potential
    }
    else return node
  }

  const nested_shadow = crawlShadows(el)

  return nested_shadow || el
}

const getSide = direction => {
  let start = direction.split('+').pop().replace(/^\w/, c => c.toUpperCase())
  if (start == 'Up') start = 'Top'
  if (start == 'Down') start = 'Bottom'
  return start
}

const getNodeIndex = el => {
  return [...el.parentElement.parentElement.children]
    .indexOf(el.parentElement)
}

function showEdge(el) {
  return el.animate([
    { outline: '1px solid transparent' },
    { outline: '1px solid hsla(330, 100%, 71%, 80%)' },
    { outline: '1px solid transparent' },
  ], 600)
}

let timeoutMap = {}
const showHideSelected = (el, duration = 750) => {
  el.setAttribute('data-selected-hide', true)
  showHideNodeLabel(el, true)

  if (timeoutMap[(0,_strings__WEBPACK_IMPORTED_MODULE_1__.nodeKey)(el)])
    clearTimeout(timeoutMap[(0,_strings__WEBPACK_IMPORTED_MODULE_1__.nodeKey)(el)])

  timeoutMap[(0,_strings__WEBPACK_IMPORTED_MODULE_1__.nodeKey)(el)] = setTimeout(_ => {
    el.removeAttribute('data-selected-hide')
    showHideNodeLabel(el, false)
  }, duration)

  return el
}

const showHideNodeLabel = (el, show = false) => {
  if (!el.hasAttribute('data-label-id'))
    return

  const label_id = el.getAttribute('data-label-id')

  const nodes = (0,blingblingjs__WEBPACK_IMPORTED_MODULE_0__["default"])(`
    visbug-label[data-label-id="${label_id}"],
    visbug-handles[data-label-id="${label_id}"]
  `)

  nodes.length && show
    ? nodes.forEach(el =>
      el.style.display = 'none')
    : nodes.forEach(el =>
      el.style.display = null)
}

const htmlStringToDom = (htmlString = "") =>
  (new DOMParser().parseFromString(htmlString, 'text/html'))
    .body.firstChild

const isOffBounds = node =>
  node.closest && (
       node.closest('vis-bug')
    || node.closest('hotkey-map')
    || node.closest('visbug-metatip')
    || node.closest('visbug-ally')
    || node.closest('visbug-label')
    || node.closest('visbug-handles')
    || node.closest('visbug-corners')
    || node.closest('visbug-grip')
    || node.closest('visbug-gridlines')
  )

const isSelectorValid = (qs => (
  selector => {
    try { qs(selector) } catch (e) { return false }
    return true
  }
))(s => document.createDocumentFragment().querySelector(s))

const swapElements = (src, target) => {
  var temp = document.createElement("div")

  src.parentNode.insertBefore(temp, src)
  target.parentNode.insertBefore(src, target)
  temp.parentNode.insertBefore(target, temp)

  temp.parentNode.removeChild(temp)
}


/***/ }),

/***/ "./app/utilities/cross-browser.js":
/*!****************************************!*\
  !*** ./app/utilities/cross-browser.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructibleStylesheetSupport: () => (/* binding */ constructibleStylesheetSupport),
/* harmony export */   isChrome: () => (/* binding */ isChrome),
/* harmony export */   isFirefox: () => (/* binding */ isFirefox),
/* harmony export */   isPolyfilledCE: () => (/* binding */ isPolyfilledCE),
/* harmony export */   isSafari: () => (/* binding */ isSafari),
/* harmony export */   isSafarish: () => (/* binding */ isSafarish)
/* harmony export */ });
const isFirefox = navigator.userAgent.search('Firefox') > 0
const isSafarish = navigator.userAgent.search('Safari') > 0
const isChrome = navigator.userAgent.search('Chrome') > 0
const isSafari = isSafarish && !isChrome

const isPolyfilledCE = shadow_node =>
  shadow_node.children.length === 1 && shadow_node.firstElementChild.nodeName === 'STYLE'
    ? true
    : false

const testConstructible = () => {
  try {
    new window.CSSStyleSheet('a{}')
    return true
  }
  catch (e) {
    return false
  }
}

const constructibleStylesheetSupport = testConstructible()


/***/ }),

/***/ "./app/utilities/design-properties.js":
/*!********************************************!*\
  !*** ./app/utilities/design-properties.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   desiredAccessibilityMap: () => (/* binding */ desiredAccessibilityMap),
/* harmony export */   desiredPropMap: () => (/* binding */ desiredPropMap),
/* harmony export */   largeWCAG2TextMap: () => (/* binding */ largeWCAG2TextMap)
/* harmony export */ });
/* harmony import */ var _cross_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cross-browser.js */ "./app/utilities/cross-browser.js");


const desiredPropMap = {
  color:               'rgb(0, 0, 0)',
  backgroundColor:     'rgba(0, 0, 0, 0)',
  backgroundImage:     'none',
  backgroundSize:      'auto',
  backgroundPosition:  '0% 0%',
  borderRadius:        '0px',
  boxShadow:           'none',
  padding:             '0px',
  margin:              '0px',
  fontFamily:          'auto',
  fontSize:            '16px',
  fontWeight:          '400',
  textAlign:           'start',
  textShadow:          'none',
  textTransform:       'none',
  lineHeight:          'normal',
  letterSpacing:       'normal',
  display:             'block',
  alignItems:          'normal',
  justifyContent:      'normal',
  flexDirection:       'row',
  flexWrap:            'nowrap',
  flexBasis:           'auto',
  // flexFlow:         'none',
  fill:                'rgb(0, 0, 0)',
  stroke:              'none',
  gridTemplateColumns: 'none',
  gridAutoColumns:     'auto',
  gridTemplateRows:    'none',
  gridAutoRows:        'auto',
  gridTemplateAreas:   'none',
  gridArea:            'auto / auto / auto / auto',
  gap:                 'normal',
  gridAutoFlow:        'row',
}

if (_cross_browser_js__WEBPACK_IMPORTED_MODULE_0__.isFirefox) {
  desiredPropMap.backgroundSize = 'auto'
  desiredPropMap.borderWidth    = ''
  desiredPropMap.borderRadius   = ''
  desiredPropMap.padding        = ''
  desiredPropMap.margin         = ''
  desiredPropMap.gap            = ''
  desiredPropMap.gridArea       = ''
  desiredPropMap.borderColor    = ''
}

if (_cross_browser_js__WEBPACK_IMPORTED_MODULE_0__.isSafari) {
  desiredPropMap.gap = 'normal normal'
}

const desiredAccessibilityMap = [
  'role',
  'tabindex',
  'aria-*',
  'for',
  'alt',
  'title',
  'type',
]

const largeWCAG2TextMap = [
  {
    fontSize: '24px',
    fontWeight: '0'
  },
  {
    fontSize: '18.5px',
    fontWeight: '700'
  }
]


/***/ }),

/***/ "./app/utilities/history.js":
/*!**********************************!*\
  !*** ./app/utilities/history.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actions: () => (/* binding */ actions),
/* harmony export */   cssPath: () => (/* binding */ cssPath),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getters: () => (/* binding */ getters)
/* harmony export */ });
const state = {
  history: []
}

let sourceMap = {}

const redoStack = []

const mutations = {
  DO (state, payload) {
    state.history.push(payload)
    console.log('history', state.history.map(i => i.action))
    console.log('redoStack', redoStack.map(i => i.action))
  },
  UNDO (state) {
    const last = state.history.length > 0 && state.history.pop() 
    if(!last) return console.error('Nothing to undo')
    const { parentLocation, location, element, action } = last
    if(action === 'add') {
      const el = document.querySelector(location)
      el.remove()
    } else if(action === 'delete') {
      const el = document.createElement(element.tagName)
      const parent = document.querySelector(parentLocation)
      parent.appendChild(el)
      el.outerHTML = element.outerHTML
    } else if (action === 'edit') {
      const el = document.querySelector(location)
      el.outerHTML = element.outerHTML
    }
    redoStack.push(last)
    console.log('history', state.history.map(i => i.action))
    console.log('redoStack', redoStack.map(i => i.action))
  },
  REDO () {
    const redoingAnUndo = redoStack.length > 0
    if(!redoingAnUndo) return console.error('Nothing to redo')
    const last = redoStack.pop()
    const { parentLocation, location, element, action } = last
    
    if(action === 'add') {
      const el = document.createElement(element.tagName)
      const parent = document.querySelector(parentLocation)
      parent.appendChild(el)
      el.outerHTML = element.outerHTML
      actions.do({
        parentLocation: parentLocation,
        location: location,
        element: {
          tagName: element.tagName,
          outerHTML: element.outerHTML,
        },
        action: 'add',
      })

    } else if (action === 'delete') {
      const el = document.querySelector(location)
      actions.do({
        parentLocation: parentLocation,
        location: location,
        element: {
          tagName: el.tagName,
          outerHTML: el.outerHTML,
        },
        action: 'delete',
      })
      el.remove()
    } else if(action === 'edit') {
      const el = document.querySelector(location)
      actions.do({
        parentLocation: parentLocation,
        location: location,
        element: {
          tagName: el.tagName,
          outerHTML: el.outerHTML,
          finalOuterHTML: element.finalOuterHTML,
        },
        action: 'edit',
      })
      el.outerHTML = element.finalOuterHTML
    }
    console.log('history', state.history.map(i => i.action))
    console.log('redoStack', redoStack.map(i => i.action))
  },
  saveSourceMap (map) {
    sourceMap = map
  }
}

const actions = {
  do (payload) {
    mutations.DO(state, payload)
    getters.naturalHistory(state)
  },
  undo () {
    mutations.UNDO(state)
  },
  redo () {
    mutations.REDO()
  }
}

const getters = {
  history (state) {
    return state.history
  },
  async naturalHistory (state) {
    console.log({
      history: state.history,
      sourceMap: sourceMap
    })

    const stringToBase64 = (str) => {
      return btoa(unescape(encodeURIComponent(str)));
    }

    fetch("http://localhost:3000/ask/history", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        data: stringToBase64(JSON.stringify({
          history: state.history,
          sourceMap: sourceMap
        }))
      })
    }, response => {
      console.log(response);
    })
  }
}

const cssPath = (el) => {
  if (!(el instanceof Element)) 
      return;
  var path = [];
  while (el.nodeType === Node.ELEMENT_NODE) {
      var selector = el.nodeName.toLowerCase();
      if (el.id) {
          selector += '#' + el.id;
          path.unshift(selector);
          break;
      } else {
          var sib = el, nth = 1;
          while (sib = sib.previousElementSibling) {
              if (sib.nodeName.toLowerCase() == selector)
                 nth++;
          }
          if (nth != 1)
              selector += ":nth-of-type("+nth+")";
      }
      path.unshift(selector);
      el = el.parentNode;
  }
  return path.join(" > ");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  state,
  mutations,
  actions,
  getters,
  cssPath
});


/***/ }),

/***/ "./app/utilities/index.js":
/*!********************************!*\
  !*** ./app/utilities/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actions: () => (/* reexport safe */ _history__WEBPACK_IMPORTED_MODULE_10__.actions),
/* harmony export */   altKey: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_3__.altKey),
/* harmony export */   camelToDash: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_3__.camelToDash),
/* harmony export */   clamp: () => (/* reexport safe */ _numbers__WEBPACK_IMPORTED_MODULE_9__.clamp),
/* harmony export */   colors: () => (/* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_8__.colors),
/* harmony export */   constructibleStylesheetSupport: () => (/* reexport safe */ _cross_browser__WEBPACK_IMPORTED_MODULE_5__.constructibleStylesheetSupport),
/* harmony export */   createClassname: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_3__.createClassname),
/* harmony export */   cssPath: () => (/* reexport safe */ _history__WEBPACK_IMPORTED_MODULE_10__.cssPath),
/* harmony export */   deepElementFromPoint: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.deepElementFromPoint),
/* harmony export */   findNearestChildElement: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_0__.findNearestChildElement),
/* harmony export */   findNearestParentElement: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_0__.findNearestParentElement),
/* harmony export */   firstUsableFontFromFamily: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_0__.firstUsableFontFromFamily),
/* harmony export */   getA11ys: () => (/* reexport safe */ _accessibility__WEBPACK_IMPORTED_MODULE_1__.getA11ys),
/* harmony export */   getComputedBackgroundColor: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_0__.getComputedBackgroundColor),
/* harmony export */   getComputedCanvasBackgroundColor: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_0__.getComputedCanvasBackgroundColor),
/* harmony export */   getContrastingColor: () => (/* reexport safe */ _accessibility__WEBPACK_IMPORTED_MODULE_1__.getContrastingColor),
/* harmony export */   getNodeIndex: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.getNodeIndex),
/* harmony export */   getShadowValues: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_0__.getShadowValues),
/* harmony export */   getSide: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.getSide),
/* harmony export */   getStyle: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_0__.getStyle),
/* harmony export */   getStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_0__.getStyles),
/* harmony export */   getTextShadowValues: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_0__.getTextShadowValues),
/* harmony export */   getWCAG2TextSize: () => (/* reexport safe */ _accessibility__WEBPACK_IMPORTED_MODULE_1__.getWCAG2TextSize),
/* harmony export */   getters: () => (/* reexport safe */ _history__WEBPACK_IMPORTED_MODULE_10__.getters),
/* harmony export */   htmlStringToDom: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.htmlStringToDom),
/* harmony export */   isChrome: () => (/* reexport safe */ _cross_browser__WEBPACK_IMPORTED_MODULE_5__.isChrome),
/* harmony export */   isFirefox: () => (/* reexport safe */ _cross_browser__WEBPACK_IMPORTED_MODULE_5__.isFirefox),
/* harmony export */   isFixed: () => (/* reexport safe */ _isFixed__WEBPACK_IMPORTED_MODULE_6__.isFixed),
/* harmony export */   isOffBounds: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.isOffBounds),
/* harmony export */   isPolyfilledCE: () => (/* reexport safe */ _cross_browser__WEBPACK_IMPORTED_MODULE_5__.isPolyfilledCE),
/* harmony export */   isSafari: () => (/* reexport safe */ _cross_browser__WEBPACK_IMPORTED_MODULE_5__.isSafari),
/* harmony export */   isSafarish: () => (/* reexport safe */ _cross_browser__WEBPACK_IMPORTED_MODULE_5__.isSafarish),
/* harmony export */   isSelectorValid: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.isSelectorValid),
/* harmony export */   loadStyles: () => (/* reexport safe */ _styles__WEBPACK_IMPORTED_MODULE_0__.loadStyles),
/* harmony export */   metaKey: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_3__.metaKey),
/* harmony export */   nodeKey: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_3__.nodeKey),
/* harmony export */   notList: () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_3__.notList),
/* harmony export */   numberBetween: () => (/* reexport safe */ _numbers__WEBPACK_IMPORTED_MODULE_9__.numberBetween),
/* harmony export */   schemeRule: () => (/* reexport safe */ _scheme__WEBPACK_IMPORTED_MODULE_7__.schemeRule),
/* harmony export */   showEdge: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.showEdge),
/* harmony export */   showHideNodeLabel: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.showHideNodeLabel),
/* harmony export */   showHideSelected: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.showHideSelected),
/* harmony export */   swapElements: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_2__.swapElements),
/* harmony export */   windowBounds: () => (/* reexport safe */ _window__WEBPACK_IMPORTED_MODULE_4__.windowBounds)
/* harmony export */ });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./app/utilities/styles.js");
/* harmony import */ var _accessibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessibility */ "./app/utilities/accessibility.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./app/utilities/common.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strings */ "./app/utilities/strings.js");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./window */ "./app/utilities/window.js");
/* harmony import */ var _cross_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cross-browser */ "./app/utilities/cross-browser.js");
/* harmony import */ var _isFixed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isFixed */ "./app/utilities/isFixed.js");
/* harmony import */ var _scheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheme */ "./app/utilities/scheme.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./colors */ "./app/utilities/colors.js");
/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./numbers */ "./app/utilities/numbers.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history */ "./app/utilities/history.js");













/***/ }),

/***/ "./app/utilities/isFixed.js":
/*!**********************************!*\
  !*** ./app/utilities/isFixed.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFixed: () => (/* binding */ isFixed)
/* harmony export */ });
const isFixed = elem => {
  do {
    if (window.getComputedStyle(elem).position == 'fixed') return true;
  } while (elem = elem.offsetParent);
  return false;
}


/***/ }),

/***/ "./app/utilities/numbers.js":
/*!**********************************!*\
  !*** ./app/utilities/numbers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   numberBetween: () => (/* binding */ numberBetween)
/* harmony export */ });
function numberBetween(min, max) {
  return Math.floor(min + (Math.random() * (max - min)))
}

function clamp(min, val, max) {
  return Math.max(min, Math.min(val, max))
}


/***/ }),

/***/ "./app/utilities/scheme.js":
/*!*********************************!*\
  !*** ./app/utilities/scheme.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   schemeRule: () => (/* binding */ schemeRule)
/* harmony export */ });
/* harmony import */ var _components_styles_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/styles.store */ "./app/components/styles.store.js");


const schemeRule = (shadow, style, light, dark) => {
  const lightScheme = light
      ? [style, _components_styles_store__WEBPACK_IMPORTED_MODULE_0__.LightTheme, light]
      : [style, _components_styles_store__WEBPACK_IMPORTED_MODULE_0__.LightTheme]

  const darkScheme = dark
      ? [style, _components_styles_store__WEBPACK_IMPORTED_MODULE_0__.DarkTheme, dark]
      : [style, _components_styles_store__WEBPACK_IMPORTED_MODULE_0__.DarkTheme]

  return attr => {
    if (attr === "light")
      shadow.adoptedStyleSheets = lightScheme
    else if (attr === "dark")
      shadow.adoptedStyleSheets = darkScheme
    else
      shadow.adoptedStyleSheets = [style]
  }
}


/***/ }),

/***/ "./app/utilities/strings.js":
/*!**********************************!*\
  !*** ./app/utilities/strings.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   altKey: () => (/* binding */ altKey),
/* harmony export */   camelToDash: () => (/* binding */ camelToDash),
/* harmony export */   createClassname: () => (/* binding */ createClassname),
/* harmony export */   metaKey: () => (/* binding */ metaKey),
/* harmony export */   nodeKey: () => (/* binding */ nodeKey),
/* harmony export */   notList: () => (/* binding */ notList)
/* harmony export */ });
const camelToDash = (camelString = "") =>
  camelString.replace(/([A-Z])/g, ($1) =>
    "-"+$1.toLowerCase())

const nodeKey = node => {
  let tree = []
  let furthest_leaf = node

  while (furthest_leaf) {
    tree.push(furthest_leaf)
    furthest_leaf = furthest_leaf.parentNode
      ? furthest_leaf.parentNode
      : false
  }

  return tree.reduce((path, branch) => `
    ${path}${branch.tagName}_${branch.className}_${[...node.parentNode.children].indexOf(node)}_${node.children.length}
  `, '')
}

const createClassname = (el, ellipse = false) => {
  if (!el.className) return ''
  
  const combined = Array.from(el.classList).reduce((classnames, classname) =>
    classnames += '.' + classname
  , '')

  return ellipse && combined.length > 30
    ? combined.substring(0,30) + '...'
    : combined
}

const metaKey = window.navigator.platform.includes('Mac')
  ? 'cmd'
  : 'ctrl'

const altKey = window.navigator.platform.includes('Mac')
  ? 'opt'
  : 'alt'

const notList = ':not(vis-bug):not(script):not(hotkey-map):not(.visbug-metatip):not(visbug-label):not(visbug-handles):not(visbug-corners):not(visbug-grip):not(visbug-gridlines)'


/***/ }),

/***/ "./app/utilities/styles.js":
/*!*********************************!*\
  !*** ./app/utilities/styles.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findNearestChildElement: () => (/* binding */ findNearestChildElement),
/* harmony export */   findNearestParentElement: () => (/* binding */ findNearestParentElement),
/* harmony export */   firstUsableFontFromFamily: () => (/* binding */ firstUsableFontFromFamily),
/* harmony export */   getComputedBackgroundColor: () => (/* binding */ getComputedBackgroundColor),
/* harmony export */   getComputedCanvasBackgroundColor: () => (/* binding */ getComputedCanvasBackgroundColor),
/* harmony export */   getShadowValues: () => (/* binding */ getShadowValues),
/* harmony export */   getStyle: () => (/* binding */ getStyle),
/* harmony export */   getStyles: () => (/* binding */ getStyles),
/* harmony export */   getTextShadowValues: () => (/* binding */ getTextShadowValues),
/* harmony export */   loadStyles: () => (/* binding */ loadStyles)
/* harmony export */ });
/* harmony import */ var _design_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design-properties */ "./app/utilities/design-properties.js");


const getStyle = (el, name) => {
  if (document.defaultView && document.defaultView.getComputedStyle) {
    name = name.replace(/([A-Z])/g, '-$1')
    name = name.toLowerCase()
    let s = document.defaultView.getComputedStyle(el, '')
    return s && s.getPropertyValue(name)
  } 
}

const getStyles = el => {
  const elStyleObject = el.style
  const computedStyle = window.getComputedStyle(el, null)
  const vettedStyles = []
  const borders = []

  for (const prop in el.style) {
    const is_desired = _design_properties__WEBPACK_IMPORTED_MODULE_0__.desiredPropMap[prop]

    if (is_desired && is_desired != computedStyle[prop])
      vettedStyles.push({
        prop: prop,
        value: computedStyle[prop],
      })

    if (prop === 'borderColor' || prop === 'borderWidth' || prop === 'borderStyle')
      borders[prop] = computedStyle[prop].replace(/, rgba/g, '\rrgba')
  }

  const { borderColor, borderWidth, borderStyle } = borders

  if (parseFloat(borderWidth) > 0) {
    vettedStyles.push({
      prop: 'borderColor',
      value: borderColor,
    })

    vettedStyles.push({
      prop: 'borderStyle',
      value: borderStyle,
    })

    vettedStyles.push({
      prop: 'borderWidth',
      value: borderWidth,
    })
  }

  return vettedStyles.sort(function({prop:propA}, {prop:propB}) {
    if (propA < propB) return -1
    if (propA > propB) return 1
    return 0
  })
}

let canvas_color
const getComputedCanvasBackgroundColor = () => {
  if (canvas_color) return canvas_color

  const foo = document.createElement('span')
  foo.style.backgroundColor = 'Canvas'
  document.body.appendChild(foo)
  canvas_color = getComputedStyle(foo).backgroundColor
  document.body.removeChild(foo)

  return canvas_color
}

const getComputedBackgroundColor = el => {
  let background = getStyle(el, 'background-color')

  if (background === 'rgba(0, 0, 0, 0)') {
    let node  = findNearestParentElement(el)
      , found = false

    while(!found) {
      let bg  = getStyle(node, 'background-color')

      if (node.nodeName === 'HTML') {
        found = true
        background = getComputedCanvasBackgroundColor()
      }

      if (bg !== 'rgba(0, 0, 0, 0)') {
        found = true
        background = bg
      }

      node = findNearestParentElement(node)
    }
  }

  return background
}

const findNearestParentElement = el => {
  if (el.nodeName === 'HTML') return el

  return el.parentNode && el.parentNode.nodeType === 1
    ? el.parentNode
    : el.parentNode.nodeName === '#document-fragment'
      ? el.parentNode.host
      : el.parentNode.parentNode.host
}

const findNearestChildElement = el => {
  if (el.shadowRoot && el.shadowRoot.children.length) {
    return [...el.shadowRoot.children]
      .filter(({nodeName}) => 
        !['LINK','STYLE','SCRIPT','HTML','HEAD'].includes(nodeName)
      )[0]
  }
  else if (el.children.length)
    return el.children[0]
}

const loadStyles = async stylesheets => {
  const fetches = await Promise.all(stylesheets.map(url => fetch(url)))
  const texts   = await Promise.all(fetches.map(url => url.text()))
  const style   = document.createElement('style')

  style.textContent = texts.reduce((styles, fileContents) => 
    styles + fileContents
  , '')

  document.head.appendChild(style)
}

// returns [full, color, x, y, blur, spread]
const getShadowValues = shadow =>
  /([^\)]+\)) ([^\s]+) ([^\s]+) ([^\s]+) ([^\s]+)/.exec(shadow)

// returns [full, color, x, y, blur]
const getTextShadowValues = shadow =>
  /([^\)]+\)) ([^\s]+) ([^\s]+) ([^\s]+)/.exec(shadow)

const fontCacheMap = new Map()
const firstUsableFontFromFamily = family => {
  if (fontCacheMap.has(family))
    return fontCacheMap.get(family)

  // todo: check cache for family string and return already computed value
  const fonts = family.split(',')
  const canvas = window.document.createElement('canvas')
  const context = canvas.getContext('2d')

  const match = fonts
    .map(font => font.trim())
    .map(name => {
      const matches = String(name).match(/^["']?(.+?)["']?$/i);
      return Array.isArray(matches) ? matches[1] : '';
    })
    .map(fontName => {
      const baselineSize = context.measureText(12).width

      context.font = `12px ${fontName}, sans-serif`

      return baselineSize !== context.measureText('font-test').width 
        ? fontName 
        : false
  }).filter(value => value !== false)[0]

  fontCacheMap.set(family, match)

  return match
}


/***/ }),

/***/ "./app/utilities/window.js":
/*!*********************************!*\
  !*** ./app/utilities/window.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   windowBounds: () => (/* binding */ windowBounds)
/* harmony export */ });
function windowBounds() {
  const height  = window.innerHeight
  const width   = window.innerWidth
  const body    = document.documentElement.clientWidth

  const calcWidth = body <= width
    ? body
    : width

  return {
    winHeight: height,
    winWidth:  calcWidth,
  }
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/conversion.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertDecimalToHex: () => (/* binding */ convertDecimalToHex),
/* harmony export */   convertHexToDecimal: () => (/* binding */ convertHexToDecimal),
/* harmony export */   hslToRgb: () => (/* binding */ hslToRgb),
/* harmony export */   hsvToRgb: () => (/* binding */ hsvToRgb),
/* harmony export */   numberInputToObject: () => (/* binding */ numberInputToObject),
/* harmony export */   parseIntFromHex: () => (/* binding */ parseIntFromHex),
/* harmony export */   rgbToHex: () => (/* binding */ rgbToHex),
/* harmony export */   rgbToHsl: () => (/* binding */ rgbToHsl),
/* harmony export */   rgbToHsv: () => (/* binding */ rgbToHsv),
/* harmony export */   rgbToRgb: () => (/* binding */ rgbToRgb),
/* harmony export */   rgbaToArgbHex: () => (/* binding */ rgbaToArgbHex),
/* harmony export */   rgbaToHex: () => (/* binding */ rgbaToHex)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255) * 255,
        g: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255) * 255,
        b: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255);
    g = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255);
    b = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(h, 360);
    s = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(s, 100);
    l = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255);
    g = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255);
    b = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(h, 360) * 6;
    s = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(s, 100);
    v = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(convertDecimalToHex(a)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   names: () => (/* binding */ names)
/* harmony export */ });
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/format-input.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/format-input.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputToRGB: () => (/* binding */ inputToRGB),
/* harmony export */   isValidCSSUnit: () => (/* binding */ isValidCSSUnit),
/* harmony export */   stringInputToObject: () => (/* binding */ stringInputToObject)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");



/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToRgb)(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.s);
            v = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.v);
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.hsvToRgb)(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.s);
            l = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.l);
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.hslToRgb)(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = (0,_util__WEBPACK_IMPORTED_MODULE_1__.boundAlpha)(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (_css_color_names__WEBPACK_IMPORTED_MODULE_2__.names[color]) {
        color = _css_color_names__WEBPACK_IMPORTED_MODULE_2__.names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3]),
            a: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.convertHexToDecimal)(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1] + match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2] + match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3] + match[3]),
            a: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.convertHexToDecimal)(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1] + match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2] + match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TinyColor: () => (/* binding */ TinyColor),
/* harmony export */   tinycolor: () => (/* binding */ tinycolor)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css-color-names */ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format-input */ "./node_modules/@ctrl/tinycolor/dist/module/format-input.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");




var TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.numberInputToObject)(color);
        }
        this.originalInput = color;
        var rgb = (0,_format_input__WEBPACK_IMPORTED_MODULE_1__.inputToRGB)(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = (0,_util__WEBPACK_IMPORTED_MODULE_2__.boundAlpha)(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsv)(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsv)(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this.roundA + ")";
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this.roundA + ")";
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHex)(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbaToHex)(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(" + r + ", " + g + ", " + b + ")" : "rgba(" + r + ", " + g + ", " + b + ", " + this.roundA + ")";
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__.bound01)(x, 255) * 100) + "%"; };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__.bound01)(x, 255) * 100); };
        return this.a === 1
            ? "rgb(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%)"
            : "rgba(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%, " + this.roundA + ")";
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHex)(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(_css_color_names__WEBPACK_IMPORTED_MODULE_3__.names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    /**
     * String representation of the color.
     *
     * @param format - The format to be used when displaying the string representation.
     */
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Alias for `polyad(3)`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

// kept for backwards compatability with v1
function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/readability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/readability.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadable: () => (/* binding */ isReadable),
/* harmony export */   mostReadable: () => (/* binding */ mostReadable),
/* harmony export */   readability: () => (/* binding */ readability)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");

// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
/**
 * AKA `contrast`
 *
 * Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
 */
function readability(color1, color2) {
    var c1 = new _index__WEBPACK_IMPORTED_MODULE_0__.TinyColor(color1);
    var c2 = new _index__WEBPACK_IMPORTED_MODULE_0__.TinyColor(color2);
    return ((Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) /
        (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05));
}
/**
 * Ensure that foreground and background color combinations meet WCAG2 guidelines.
 * The third argument is an object.
 *      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
 *      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
 * If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
 *
 * Example
 * ```ts
 * new TinyColor().isReadable('#000', '#111') => false
 * new TinyColor().isReadable('#000', '#111', { level: 'AA', size: 'large' }) => false
 * ```
 */
function isReadable(color1, color2, wcag2) {
    var _a, _b;
    if (wcag2 === void 0) { wcag2 = { level: 'AA', size: 'small' }; }
    var readabilityLevel = readability(color1, color2);
    switch (((_a = wcag2.level) !== null && _a !== void 0 ? _a : 'AA') + ((_b = wcag2.size) !== null && _b !== void 0 ? _b : 'small')) {
        case 'AAsmall':
        case 'AAAlarge':
            return readabilityLevel >= 4.5;
        case 'AAlarge':
            return readabilityLevel >= 3;
        case 'AAAsmall':
            return readabilityLevel >= 7;
        default:
            return false;
    }
}
/**
 * Given a base color and a list of possible foreground or background
 * colors for that base, returns the most readable color.
 * Optionally returns Black or White if the most readable color is unreadable.
 *
 * @param baseColor - the base color.
 * @param colorList - array of colors to pick the most readable one from.
 * @param args - and object with extra arguments
 *
 * Example
 * ```ts
 * new TinyColor().mostReadable('#123', ['#124", "#125'], { includeFallbackColors: false }).toHexString(); // "#112255"
 * new TinyColor().mostReadable('#123', ['#124", "#125'],{ includeFallbackColors: true }).toHexString();  // "#ffffff"
 * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'large' }).toHexString(); // "#faf3f3"
 * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'small' }).toHexString(); // "#ffffff"
 * ```
 */
function mostReadable(baseColor, colorList, args) {
    if (args === void 0) { args = { includeFallbackColors: false, level: 'AA', size: 'small' }; }
    var bestColor = null;
    var bestScore = 0;
    var includeFallbackColors = args.includeFallbackColors, level = args.level, size = args.size;
    for (var _i = 0, colorList_1 = colorList; _i < colorList_1.length; _i++) {
        var color = colorList_1[_i];
        var score = readability(baseColor, color);
        if (score > bestScore) {
            bestScore = score;
            bestColor = new _index__WEBPACK_IMPORTED_MODULE_0__.TinyColor(color);
        }
    }
    if (isReadable(baseColor, bestColor, { level: level, size: size }) || !includeFallbackColors) {
        return bestColor;
    }
    args.includeFallbackColors = false;
    return mostReadable(baseColor, ['#fff', '#000'], args);
}


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/util.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/util.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bound01: () => (/* binding */ bound01),
/* harmony export */   boundAlpha: () => (/* binding */ boundAlpha),
/* harmony export */   clamp01: () => (/* binding */ clamp01),
/* harmony export */   convertToPercentage: () => (/* binding */ convertToPercentage),
/* harmony export */   isOnePointZero: () => (/* binding */ isOnePointZero),
/* harmony export */   isPercentage: () => (/* binding */ isPercentage),
/* harmony export */   pad2: () => (/* binding */ pad2)
/* harmony export */ });
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.includes('.') && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.includes('%');
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return Number(n) * 100 + "%";
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}


/***/ }),

/***/ "./node_modules/blingblingjs/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/blingblingjs/src/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ $)
/* harmony export */ });
const sugar = {
  on: function(names, fn) {
    names
      .split(' ')
      .forEach(name =>
        this.addEventListener(name, fn))
    return this
  },
  off: function(names, fn) {
    names
      .split(' ')
      .forEach(name =>
        this.removeEventListener(name, fn))
    return this
  },
  attr: function(attr, val) {
    if (val === undefined) return this.getAttribute(attr)

    val == null
      ? this.removeAttribute(attr)
      : this.setAttribute(attr, val || '')
      
    return this
  }
}

function $(query, $context = document) {
  let $nodes = query instanceof NodeList || Array.isArray(query)
    ? query
    : query instanceof HTMLElement || query instanceof SVGElement
      ? [query]
      : $context.querySelectorAll(query)

  if (!$nodes.length) $nodes = []

  return Object.assign(
    Array.from($nodes).map($el => Object.assign($el, sugar)), 
    {
      on: function(names, fn) {
        this.forEach($el => $el.on(names, fn))
        return this
      },
      off: function(names, fn) {
        this.forEach($el => $el.off(names, fn))
        return this
      },
      attr: function(attrs, val) {
        if (typeof attrs === 'string' && val === undefined)
          return this[0].attr(attrs)

        else if (typeof attrs === 'object') 
          this.forEach($el =>
            Object.entries(attrs)
              .forEach(([key, val]) =>
                $el.attr(key, val)))

        else if (typeof attrs == 'string' && (val || val == null || val == ''))
          this.forEach($el => $el.attr(attrs, val))

        return this
      }
    }
  )
}


/***/ }),

/***/ "./node_modules/construct-style-sheets-polyfill/dist/adoptedStyleSheets.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/construct-style-sheets-polyfill/dist/adoptedStyleSheets.js ***!
  \*********************************************************************************/
/***/ (() => {

(function () {
  'use strict';

  if ('adoptedStyleSheets' in document) { return; }

  var hasShadyCss = 'ShadyCSS' in window && !window.ShadyCSS.nativeShadow;
  var deferredStyleSheets = [];
  var deferredDocumentStyleElements = [];
  var adoptedSheetsRegistry = new WeakMap();
  var sheetMetadataRegistry = new WeakMap();
  var locationRegistry = new WeakMap();
  var observerRegistry = new WeakMap();
  var appliedActionsCursorRegistry = new WeakMap();
  var state = {
    loaded: false
  };
  var frame = {
    body: null,
    CSSStyleSheet: null
  };
  var OldCSSStyleSheet = CSSStyleSheet;

  var importPattern = /@import\surl(.*?);/gi;
  function instanceOfStyleSheet(instance) {
    return instance instanceof OldCSSStyleSheet || instance instanceof frame.CSSStyleSheet;
  }
  function checkAndPrepare(sheets, container) {
    var locationType = container === document ? 'Document' : 'ShadowRoot';
    if (!Array.isArray(sheets)) {
      throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Iterator getter is not callable.");
    }
    if (!sheets.every(instanceOfStyleSheet)) {
      throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Failed to convert value to 'CSSStyleSheet'");
    }
    var uniqueSheets = sheets.filter(function (value, index) {
      return sheets.indexOf(value) === index;
    });
    adoptedSheetsRegistry.set(container, uniqueSheets);
    return uniqueSheets;
  }
  function isDocumentLoading() {
    return document.readyState === 'loading';
  }
  function getAdoptedStyleSheet(location) {
    return adoptedSheetsRegistry.get(location.parentNode === document.documentElement ? document : location);
  }
  function rejectImports(contents) {
    var imports = contents.match(importPattern, '') || [];
    var sheetContent = contents;
    if (imports.length) {
      console.warn('@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418');
      imports.forEach(function (_import) {
        sheetContent = sheetContent.replace(_import, '');
      });
    }
    return sheetContent;
  }

  var cssStyleSheetMethods = ['addImport', 'addPageRule', 'addRule', 'deleteRule', 'insertRule', 'removeImport', 'removeRule'];
  var cssStyleSheetNewMethods = ['replace', 'replaceSync'];
  function updatePrototype(proto) {
    cssStyleSheetNewMethods.forEach(function (methodKey) {
      proto[methodKey] = function () {
        return ConstructStyleSheet.prototype[methodKey].apply(this, arguments);
      };
    });
    cssStyleSheetMethods.forEach(function (methodKey) {
      var oldMethod = proto[methodKey];
      proto[methodKey] = function () {
        var args = arguments;
        var result = oldMethod.apply(this, args);
        if (sheetMetadataRegistry.has(this)) {
          var _sheetMetadataRegistr = sheetMetadataRegistry.get(this),
              adopters = _sheetMetadataRegistr.adopters,
              actions = _sheetMetadataRegistr.actions;
          adopters.forEach(function (styleElement) {
            if (styleElement.sheet) {
              styleElement.sheet[methodKey].apply(styleElement.sheet, args);
            }
          });
          actions.push([methodKey, args]);
        }
        return result;
      };
    });
  }
  function updateAdopters(sheet) {
    var _sheetMetadataRegistr2 = sheetMetadataRegistry.get(sheet),
        adopters = _sheetMetadataRegistr2.adopters,
        basicStyleElement = _sheetMetadataRegistr2.basicStyleElement;
    adopters.forEach(function (styleElement) {
      styleElement.innerHTML = basicStyleElement.innerHTML;
    });
  }
  var ConstructStyleSheet =
  function () {
    function ConstructStyleSheet() {
      var basicStyleElement = document.createElement('style');
      if (state.loaded) {
        frame.body.appendChild(basicStyleElement);
      } else {
        document.head.appendChild(basicStyleElement);
        basicStyleElement.disabled = true;
        deferredStyleSheets.push(basicStyleElement);
      }
      var nativeStyleSheet = basicStyleElement.sheet;
      sheetMetadataRegistry.set(nativeStyleSheet, {
        adopters: new Map(),
        actions: [],
        basicStyleElement: basicStyleElement
      });
      return nativeStyleSheet;
    }
    var _proto = ConstructStyleSheet.prototype;
    _proto.replace = function replace(contents) {
      var _this = this;
      var sanitized = rejectImports(contents);
      return new Promise(function (resolve, reject) {
        if (sheetMetadataRegistry.has(_this)) {
          var _sheetMetadataRegistr3 = sheetMetadataRegistry.get(_this),
              basicStyleElement = _sheetMetadataRegistr3.basicStyleElement;
          basicStyleElement.innerHTML = sanitized;
          resolve(basicStyleElement.sheet);
          updateAdopters(_this);
        } else {
          reject(new Error("Can't call replace on non-constructed CSSStyleSheets."));
        }
      });
    };
    _proto.replaceSync = function replaceSync(contents) {
      var sanitized = rejectImports(contents);
      if (sheetMetadataRegistry.has(this)) {
        var _sheetMetadataRegistr4 = sheetMetadataRegistry.get(this),
            basicStyleElement = _sheetMetadataRegistr4.basicStyleElement;
        basicStyleElement.innerHTML = sanitized;
        updateAdopters(this);
        return basicStyleElement.sheet;
      } else {
        throw new Error("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
      }
    };
    return ConstructStyleSheet;
  }();
  Object.defineProperty(ConstructStyleSheet, Symbol.hasInstance, {
    configurable: true,
    value: instanceOfStyleSheet
  });

  function adoptStyleSheets(location) {
    var newStyles = document.createDocumentFragment();
    var sheets = getAdoptedStyleSheet(location);
    var observer = observerRegistry.get(location);
    for (var i = 0, len = sheets.length; i < len; i++) {
      var _sheetMetadataRegistr = sheetMetadataRegistry.get(sheets[i]),
          adopters = _sheetMetadataRegistr.adopters,
          basicStyleElement = _sheetMetadataRegistr.basicStyleElement;
      var elementToAdopt = adopters.get(location);
      if (elementToAdopt) {
        observer.disconnect();
        newStyles.appendChild(elementToAdopt);
        if (!elementToAdopt.innerHTML || elementToAdopt.sheet && !elementToAdopt.sheet.cssText) {
          elementToAdopt.innerHTML = basicStyleElement.innerHTML;
        }
        observer.observe();
      } else {
        elementToAdopt = document.createElement('style');
        elementToAdopt.innerHTML = basicStyleElement.innerHTML;
        locationRegistry.set(elementToAdopt, location);
        appliedActionsCursorRegistry.set(elementToAdopt, 0);
        adopters.set(location, elementToAdopt);
        newStyles.appendChild(elementToAdopt);
      }
      if (location === document.head) {
        deferredDocumentStyleElements.push(elementToAdopt);
      }
    }
    location.insertBefore(newStyles, location.firstChild);
    for (var _i = 0, _len = sheets.length; _i < _len; _i++) {
      var _sheetMetadataRegistr2 = sheetMetadataRegistry.get(sheets[_i]),
          _adopters = _sheetMetadataRegistr2.adopters,
          actions = _sheetMetadataRegistr2.actions;
      var adoptedStyleElement = _adopters.get(location);
      var cursor = appliedActionsCursorRegistry.get(adoptedStyleElement);
      if (actions.length > 0) {
        for (var _i2 = cursor, _len2 = actions.length; _i2 < _len2; _i2++) {
          var _actions$_i = actions[_i2],
              key = _actions$_i[0],
              args = _actions$_i[1];
          adoptedStyleElement.sheet[key].apply(adoptedStyleElement.sheet, args);
        }
        appliedActionsCursorRegistry.set(adoptedStyleElement, actions.length - 1);
      }
    }
  }
  function removeExcludedStyleSheets(location, oldSheets) {
    var sheets = getAdoptedStyleSheet(location);
    for (var i = 0, len = oldSheets.length; i < len; i++) {
      if (sheets.indexOf(oldSheets[i]) > -1) {
        continue;
      }
      var _sheetMetadataRegistr3 = sheetMetadataRegistry.get(oldSheets[i]),
          adopters = _sheetMetadataRegistr3.adopters;
      var observer = observerRegistry.get(location);
      var styleElement = adopters.get(location);
      if (!styleElement) {
        styleElement = adopters.get(document.head);
      }
      observer.disconnect();
      styleElement.parentNode.removeChild(styleElement);
      observer.observe();
    }
  }

  function adoptAndRestoreStylesOnMutationCallback(mutations) {
    for (var i = 0, len = mutations.length; i < len; i++) {
      var _mutations$i = mutations[i],
          addedNodes = _mutations$i.addedNodes,
          removedNodes = _mutations$i.removedNodes;
      for (var _i = 0, _len = removedNodes.length; _i < _len; _i++) {
        var location = locationRegistry.get(removedNodes[_i]);
        if (location) {
          adoptStyleSheets(location);
        }
      }
      if (!hasShadyCss) {
        for (var _i2 = 0, _len2 = addedNodes.length; _i2 < _len2; _i2++) {
          var iter = document.createNodeIterator(addedNodes[_i2], NodeFilter.SHOW_ELEMENT, function (node) {
            return node.shadowRoot && node.shadowRoot.adoptedStyleSheets.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          },
          null, false);
          var node = void 0;
          while (node = iter.nextNode()) {
            adoptStyleSheets(node.shadowRoot);
          }
        }
      }
    }
  }
  function createObserver(location) {
    var observer = new MutationObserver(adoptAndRestoreStylesOnMutationCallback);
    var observerTool = {
      observe: function observe() {
        observer.observe(location, {
          childList: true,
          subtree: true
        });
      },
      disconnect: function disconnect() {
        observer.disconnect();
      }
    };
    observerRegistry.set(location, observerTool);
    observerTool.observe();
  }

  function initPolyfill() {
    var iframe = document.createElement('iframe');
    iframe.hidden = true;
    document.body.appendChild(iframe);
    frame.body = iframe.contentWindow.document.body;
    frame.CSSStyleSheet = iframe.contentWindow.CSSStyleSheet;
    updatePrototype(iframe.contentWindow.CSSStyleSheet.prototype);
    createObserver(document.body);
    state.loaded = true;
    var fragment = document.createDocumentFragment();
    for (var i = 0, len = deferredStyleSheets.length; i < len; i++) {
      deferredStyleSheets[i].disabled = false;
      fragment.appendChild(deferredStyleSheets[i]);
    }
    frame.body.appendChild(fragment);
    for (var _i = 0, _len = deferredDocumentStyleElements.length; _i < _len; _i++) {
      fragment.appendChild(deferredDocumentStyleElements[_i]);
    }
    document.body.insertBefore(fragment, document.body.firstChild);
    deferredStyleSheets.length = 0;
    deferredDocumentStyleElements.length = 0;
  }
  function initAdoptedStyleSheets() {
    var adoptedStyleSheetAccessors = {
      configurable: true,
      get: function get() {
        return adoptedSheetsRegistry.get(this) || [];
      },
      set: function set(sheets) {
        var oldSheets = adoptedSheetsRegistry.get(this) || [];
        checkAndPrepare(sheets, this);
        var location = this === document ?
        isDocumentLoading() ? this.head : this.body : this;
        var isConnected = 'isConnected' in location ? location.isConnected : document.body.contains(location);
        window.requestAnimationFrame(function () {
          if (isConnected) {
            adoptStyleSheets(location);
            removeExcludedStyleSheets(location, oldSheets);
          }
        });
      }
    };
    Object.defineProperty(Document.prototype, 'adoptedStyleSheets', adoptedStyleSheetAccessors);
    if (typeof ShadowRoot !== 'undefined') {
      var attachShadow = Element.prototype.attachShadow;
      Element.prototype.attachShadow = function () {
        var location = hasShadyCss ? this : attachShadow.apply(this, arguments);
        createObserver(location);
        return location;
      };
      Object.defineProperty(ShadowRoot.prototype, 'adoptedStyleSheets', adoptedStyleSheetAccessors);
    }
  }

  updatePrototype(OldCSSStyleSheet.prototype);
  window.CSSStyleSheet = ConstructStyleSheet;
  initAdoptedStyleSheets();
  if (isDocumentLoading()) {
    document.addEventListener('DOMContentLoaded', initPolyfill);
  } else {
    initPolyfill();
  }

}());


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/hotkeys-js/dist/hotkeys.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/hotkeys-js/dist/hotkeys.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * hotkeys-js v3.8.1
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2020 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */

var isff = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase().indexOf('firefox') > 0 : false; // 绑定事件

function addEvent(object, event, method) {
  if (object.addEventListener) {
    object.addEventListener(event, method, false);
  } else if (object.attachEvent) {
    object.attachEvent("on".concat(event), function () {
      method(window.event);
    });
  }
} // 修饰键转换成对应的键码


function getMods(modifier, key) {
  var mods = key.slice(0, key.length - 1);

  for (var i = 0; i < mods.length; i++) {
    mods[i] = modifier[mods[i].toLowerCase()];
  }

  return mods;
} // 处理传的key字符串转换成数组


function getKeys(key) {
  if (typeof key !== 'string') key = '';
  key = key.replace(/\s/g, ''); // 匹配任何空白字符,包括空格、制表符、换页符等等

  var keys = key.split(','); // 同时设置多个快捷键，以','分割

  var index = keys.lastIndexOf(''); // 快捷键可能包含','，需特殊处理

  for (; index >= 0;) {
    keys[index - 1] += ',';
    keys.splice(index, 1);
    index = keys.lastIndexOf('');
  }

  return keys;
} // 比较修饰键的数组


function compareArray(a1, a2) {
  var arr1 = a1.length >= a2.length ? a1 : a2;
  var arr2 = a1.length >= a2.length ? a2 : a1;
  var isIndex = true;

  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) isIndex = false;
  }

  return isIndex;
}

var _keyMap = {
  backspace: 8,
  tab: 9,
  clear: 12,
  enter: 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  '⇪': 20,
  ',': 188,
  '.': 190,
  '/': 191,
  '`': 192,
  '-': isff ? 173 : 189,
  '=': isff ? 61 : 187,
  ';': isff ? 59 : 186,
  '\'': 222,
  '[': 219,
  ']': 221,
  '\\': 220
}; // Modifier Keys

var _modifier = {
  // shiftKey
  '⇧': 16,
  shift: 16,
  // altKey
  '⌥': 18,
  alt: 18,
  option: 18,
  // ctrlKey
  '⌃': 17,
  ctrl: 17,
  control: 17,
  // metaKey
  '⌘': 91,
  cmd: 91,
  command: 91
};
var modifierMap = {
  16: 'shiftKey',
  18: 'altKey',
  17: 'ctrlKey',
  91: 'metaKey',
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
};
var _mods = {
  16: false,
  18: false,
  17: false,
  91: false
};
var _handlers = {}; // F1~F12 special key

for (var k = 1; k < 20; k++) {
  _keyMap["f".concat(k)] = 111 + k;
}

var _downKeys = []; // 记录摁下的绑定键

var _scope = 'all'; // 默认热键范围

var elementHasBindEvent = []; // 已绑定事件的节点记录
// 返回键码

var code = function code(x) {
  return _keyMap[x.toLowerCase()] || _modifier[x.toLowerCase()] || x.toUpperCase().charCodeAt(0);
}; // 设置获取当前范围（默认为'所有'）


function setScope(scope) {
  _scope = scope || 'all';
} // 获取当前范围


function getScope() {
  return _scope || 'all';
} // 获取摁下绑定键的键值


function getPressedKeyCodes() {
  return _downKeys.slice(0);
} // 表单控件控件判断 返回 Boolean
// hotkey is effective only when filter return true


function filter(event) {
  var target = event.target || event.srcElement;
  var tagName = target.tagName;
  var flag = true; // ignore: isContentEditable === 'true', <input> and <textarea> when readOnly state is false, <select>

  if (target.isContentEditable || (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') && !target.readOnly) {
    flag = false;
  }

  return flag;
} // 判断摁下的键是否为某个键，返回true或者false


function isPressed(keyCode) {
  if (typeof keyCode === 'string') {
    keyCode = code(keyCode); // 转换成键码
  }

  return _downKeys.indexOf(keyCode) !== -1;
} // 循环删除handlers中的所有 scope(范围)


function deleteScope(scope, newScope) {
  var handlers;
  var i; // 没有指定scope，获取scope

  if (!scope) scope = getScope();

  for (var key in _handlers) {
    if (Object.prototype.hasOwnProperty.call(_handlers, key)) {
      handlers = _handlers[key];

      for (i = 0; i < handlers.length;) {
        if (handlers[i].scope === scope) handlers.splice(i, 1);else i++;
      }
    }
  } // 如果scope被删除，将scope重置为all


  if (getScope() === scope) setScope(newScope || 'all');
} // 清除修饰键


function clearModifier(event) {
  var key = event.keyCode || event.which || event.charCode;

  var i = _downKeys.indexOf(key); // 从列表中清除按压过的键


  if (i >= 0) {
    _downKeys.splice(i, 1);
  } // 特殊处理 cmmand 键，在 cmmand 组合快捷键 keyup 只执行一次的问题


  if (event.key && event.key.toLowerCase() === 'meta') {
    _downKeys.splice(0, _downKeys.length);
  } // 修饰键 shiftKey altKey ctrlKey (command||metaKey) 清除


  if (key === 93 || key === 224) key = 91;

  if (key in _mods) {
    _mods[key] = false; // 将修饰键重置为false

    for (var k in _modifier) {
      if (_modifier[k] === key) hotkeys[k] = false;
    }
  }
}

function unbind(keysInfo) {
  // unbind(), unbind all keys
  if (!keysInfo) {
    Object.keys(_handlers).forEach(function (key) {
      return delete _handlers[key];
    });
  } else if (Array.isArray(keysInfo)) {
    // support like : unbind([{key: 'ctrl+a', scope: 's1'}, {key: 'ctrl-a', scope: 's2', splitKey: '-'}])
    keysInfo.forEach(function (info) {
      if (info.key) eachUnbind(info);
    });
  } else if (typeof keysInfo === 'object') {
    // support like unbind({key: 'ctrl+a, ctrl+b', scope:'abc'})
    if (keysInfo.key) eachUnbind(keysInfo);
  } else if (typeof keysInfo === 'string') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    // support old method
    // eslint-disable-line
    var scope = args[0],
        method = args[1];

    if (typeof scope === 'function') {
      method = scope;
      scope = '';
    }

    eachUnbind({
      key: keysInfo,
      scope: scope,
      method: method,
      splitKey: '+'
    });
  }
} // 解除绑定某个范围的快捷键


var eachUnbind = function eachUnbind(_ref) {
  var key = _ref.key,
      scope = _ref.scope,
      method = _ref.method,
      _ref$splitKey = _ref.splitKey,
      splitKey = _ref$splitKey === void 0 ? '+' : _ref$splitKey;
  var multipleKeys = getKeys(key);
  multipleKeys.forEach(function (originKey) {
    var unbindKeys = originKey.split(splitKey);
    var len = unbindKeys.length;
    var lastKey = unbindKeys[len - 1];
    var keyCode = lastKey === '*' ? '*' : code(lastKey);
    if (!_handlers[keyCode]) return; // 判断是否传入范围，没有就获取范围

    if (!scope) scope = getScope();
    var mods = len > 1 ? getMods(_modifier, unbindKeys) : [];
    _handlers[keyCode] = _handlers[keyCode].map(function (record) {
      // 通过函数判断，是否解除绑定，函数相等直接返回
      var isMatchingMethod = method ? record.method === method : true;

      if (isMatchingMethod && record.scope === scope && compareArray(record.mods, mods)) {
        return {};
      }

      return record;
    });
  });
}; // 对监听对应快捷键的回调函数进行处理


function eventHandler(event, handler, scope) {
  var modifiersMatch; // 看它是否在当前范围

  if (handler.scope === scope || handler.scope === 'all') {
    // 检查是否匹配修饰符（如果有返回true）
    modifiersMatch = handler.mods.length > 0;

    for (var y in _mods) {
      if (Object.prototype.hasOwnProperty.call(_mods, y)) {
        if (!_mods[y] && handler.mods.indexOf(+y) > -1 || _mods[y] && handler.mods.indexOf(+y) === -1) {
          modifiersMatch = false;
        }
      }
    } // 调用处理程序，如果是修饰键不做处理


    if (handler.mods.length === 0 && !_mods[16] && !_mods[18] && !_mods[17] && !_mods[91] || modifiersMatch || handler.shortcut === '*') {
      if (handler.method(event, handler) === false) {
        if (event.preventDefault) event.preventDefault();else event.returnValue = false;
        if (event.stopPropagation) event.stopPropagation();
        if (event.cancelBubble) event.cancelBubble = true;
      }
    }
  }
} // 处理keydown事件


function dispatch(event) {
  var asterisk = _handlers['*'];
  var key = event.keyCode || event.which || event.charCode; // 表单控件过滤 默认表单控件不触发快捷键

  if (!hotkeys.filter.call(this, event)) return; // Gecko(Firefox)的command键值224，在Webkit(Chrome)中保持一致
  // Webkit左右 command 键值不一样

  if (key === 93 || key === 224) key = 91;
  /**
   * Collect bound keys
   * If an Input Method Editor is processing key input and the event is keydown, return 229.
   * https://stackoverflow.com/questions/25043934/is-it-ok-to-ignore-keydown-events-with-keycode-229
   * http://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
   */

  if (_downKeys.indexOf(key) === -1 && key !== 229) _downKeys.push(key);
  /**
   * Jest test cases are required.
   * ===============================
   */

  ['ctrlKey', 'altKey', 'shiftKey', 'metaKey'].forEach(function (keyName) {
    var keyNum = modifierMap[keyName];

    if (event[keyName] && _downKeys.indexOf(keyNum) === -1) {
      _downKeys.push(keyNum);
    } else if (!event[keyName] && _downKeys.indexOf(keyNum) > -1) {
      _downKeys.splice(_downKeys.indexOf(keyNum), 1);
    } else if (keyName === 'metaKey' && event[keyName] && _downKeys.length === 3) {
      /**
       * Fix if Command is pressed:
       * ===============================
       */
      if (!(event.ctrlKey || event.shiftKey || event.altKey)) {
        _downKeys = _downKeys.slice(_downKeys.indexOf(keyNum));
      }
    }
  });
  /**
   * -------------------------------
   */

  if (key in _mods) {
    _mods[key] = true; // 将特殊字符的key注册到 hotkeys 上

    for (var k in _modifier) {
      if (_modifier[k] === key) hotkeys[k] = true;
    }

    if (!asterisk) return;
  } // 将 modifierMap 里面的修饰键绑定到 event 中


  for (var e in _mods) {
    if (Object.prototype.hasOwnProperty.call(_mods, e)) {
      _mods[e] = event[modifierMap[e]];
    }
  }
  /**
   * https://github.com/jaywcjlove/hotkeys/pull/129
   * This solves the issue in Firefox on Windows where hotkeys corresponding to special characters would not trigger.
   * An example of this is ctrl+alt+m on a Swedish keyboard which is used to type μ.
   * Browser support: https://caniuse.com/#feat=keyboardevent-getmodifierstate
   */


  if (event.getModifierState && !(event.altKey && !event.ctrlKey) && event.getModifierState('AltGraph')) {
    if (_downKeys.indexOf(17) === -1) {
      _downKeys.push(17);
    }

    if (_downKeys.indexOf(18) === -1) {
      _downKeys.push(18);
    }

    _mods[17] = true;
    _mods[18] = true;
  } // 获取范围 默认为 `all`


  var scope = getScope(); // 对任何快捷键都需要做的处理

  if (asterisk) {
    for (var i = 0; i < asterisk.length; i++) {
      if (asterisk[i].scope === scope && (event.type === 'keydown' && asterisk[i].keydown || event.type === 'keyup' && asterisk[i].keyup)) {
        eventHandler(event, asterisk[i], scope);
      }
    }
  } // key 不在 _handlers 中返回


  if (!(key in _handlers)) return;

  for (var _i = 0; _i < _handlers[key].length; _i++) {
    if (event.type === 'keydown' && _handlers[key][_i].keydown || event.type === 'keyup' && _handlers[key][_i].keyup) {
      if (_handlers[key][_i].key) {
        var record = _handlers[key][_i];
        var splitKey = record.splitKey;
        var keyShortcut = record.key.split(splitKey);
        var _downKeysCurrent = []; // 记录当前按键键值

        for (var a = 0; a < keyShortcut.length; a++) {
          _downKeysCurrent.push(code(keyShortcut[a]));
        }

        if (_downKeysCurrent.sort().join('') === _downKeys.sort().join('')) {
          // 找到处理内容
          eventHandler(event, record, scope);
        }
      }
    }
  }
} // 判断 element 是否已经绑定事件


function isElementBind(element) {
  return elementHasBindEvent.indexOf(element) > -1;
}

function hotkeys(key, option, method) {
  _downKeys = [];
  var keys = getKeys(key); // 需要处理的快捷键列表

  var mods = [];
  var scope = 'all'; // scope默认为all，所有范围都有效

  var element = document; // 快捷键事件绑定节点

  var i = 0;
  var keyup = false;
  var keydown = true;
  var splitKey = '+'; // 对为设定范围的判断

  if (method === undefined && typeof option === 'function') {
    method = option;
  }

  if (Object.prototype.toString.call(option) === '[object Object]') {
    if (option.scope) scope = option.scope; // eslint-disable-line

    if (option.element) element = option.element; // eslint-disable-line

    if (option.keyup) keyup = option.keyup; // eslint-disable-line

    if (option.keydown !== undefined) keydown = option.keydown; // eslint-disable-line

    if (typeof option.splitKey === 'string') splitKey = option.splitKey; // eslint-disable-line
  }

  if (typeof option === 'string') scope = option; // 对于每个快捷键进行处理

  for (; i < keys.length; i++) {
    key = keys[i].split(splitKey); // 按键列表

    mods = []; // 如果是组合快捷键取得组合快捷键

    if (key.length > 1) mods = getMods(_modifier, key); // 将非修饰键转化为键码

    key = key[key.length - 1];
    key = key === '*' ? '*' : code(key); // *表示匹配所有快捷键
    // 判断key是否在_handlers中，不在就赋一个空数组

    if (!(key in _handlers)) _handlers[key] = [];

    _handlers[key].push({
      keyup: keyup,
      keydown: keydown,
      scope: scope,
      mods: mods,
      shortcut: keys[i],
      method: method,
      key: keys[i],
      splitKey: splitKey
    });
  } // 在全局document上设置快捷键


  if (typeof element !== 'undefined' && !isElementBind(element) && window) {
    elementHasBindEvent.push(element);
    addEvent(element, 'keydown', function (e) {
      dispatch(e);
    });
    addEvent(window, 'focus', function () {
      _downKeys = [];
    });
    addEvent(element, 'keyup', function (e) {
      dispatch(e);
      clearModifier(e);
    });
  }
}

var _api = {
  setScope: setScope,
  getScope: getScope,
  deleteScope: deleteScope,
  getPressedKeyCodes: getPressedKeyCodes,
  isPressed: isPressed,
  filter: filter,
  unbind: unbind
};

for (var a in _api) {
  if (Object.prototype.hasOwnProperty.call(_api, a)) {
    hotkeys[a] = _api[a];
  }
}

if (typeof window !== 'undefined') {
  var _hotkeys = window.hotkeys;

  hotkeys.noConflict = function (deep) {
    if (deep && window.hotkeys === hotkeys) {
      window.hotkeys = _hotkeys;
    }

    return hotkeys;
  };

  window.hotkeys = hotkeys;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hotkeys);


/***/ }),

/***/ "./node_modules/query-selector-shadow-dom/src/querySelectorDeep.js":
/*!*************************************************************************!*\
  !*** ./node_modules/query-selector-shadow-dom/src/querySelectorDeep.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   querySelectorAllDeep: () => (/* binding */ querySelectorAllDeep),
/* harmony export */   querySelectorDeep: () => (/* binding */ querySelectorDeep)
/* harmony export */ });
/**
 * @author Georgegriff@ (George Griffiths)
 * License Apache-2.0
 */

/**
* Finds first matching elements on the page that may be in a shadow root using a complex selector of n-depth
*
* Don't have to specify all shadow roots to button, tree is travered to find the correct element
*
* Example querySelectorAllDeep('downloads-item:nth-child(4) #remove');
*
* Example should work on chrome://downloads outputting the remove button inside of a download card component
*
* Example find first active download link element querySelectorDeep('#downloads-list .is-active a[href^="https://"]');
*
* Another example querySelectorAllDeep('#downloads-list div#title-area + a');
e.g.
*/
function querySelectorAllDeep(selector, root = document) {
    return _querySelectorDeep(selector, true, root);
}

function querySelectorDeep(selector, root = document) {
    return _querySelectorDeep(selector, false, root);
}

function _querySelectorDeep(selector, findMany, root) {
    let lightElement = root.querySelector(selector);

    if (document.head.createShadowRoot || document.head.attachShadow) {
        // no need to do any special if selector matches something specific in light-dom
        if (!findMany && lightElement) {
            return lightElement;
        }

        // split on commas because those are a logical divide in the operation
        const selectionsToMake = splitByCharacterUnlessQuoted(selector, ',');

        return selectionsToMake.reduce((acc, minimalSelector) => {
            // if not finding many just reduce the first match
            if (!findMany && acc) {
                return acc;
            }
            // do best to support complex selectors and split the query
            const splitSelector = splitByCharacterUnlessQuoted(minimalSelector
                    //remove white space at start of selector
                    .replace(/^\s+/g, '')
                    .replace(/\s*([>+~]+)\s*/g, '$1'), ' ')
                // filter out entry white selectors
                .filter((entry) => !!entry);
            const possibleElementsIndex = splitSelector.length - 1;
            const possibleElements = collectAllElementsDeep(splitSelector[possibleElementsIndex], root);
            const findElements = findMatchingElement(splitSelector, possibleElementsIndex, root);
            if (findMany) {
                acc = acc.concat(possibleElements.filter(findElements));
                return acc;
            } else {
                acc = possibleElements.find(findElements);
                return acc || null;
            }
        }, findMany ? [] : null);


    } else {
        if (!findMany) {
            return lightElement;
        } else {
            return root.querySelectorAll(selector);
        }
    }

}

function findMatchingElement(splitSelector, possibleElementsIndex, root) {
    return (element) => {
        let position = possibleElementsIndex;
        let parent = element;
        let foundElement = false;
        while (parent && !isDocumentNode(parent)) {
            const foundMatch = parent.matches(splitSelector[position]);
            if (foundMatch && position === 0) {
                foundElement = true;
                break;
            }
            if (foundMatch) {
                position--;
            }
            parent = findParentOrHost(parent, root);
        }
        return foundElement;
    };

}

function splitByCharacterUnlessQuoted(selector, character) {
    return selector.match(/\\?.|^$/g).reduce((p, c) => {
        if (c === '"' && !p.sQuote) {
            p.quote ^= 1;
            p.a[p.a.length - 1] += c;
        } else if (c === '\'' && !p.quote) {
            p.sQuote ^= 1;
            p.a[p.a.length - 1] += c;

        } else if (!p.quote && !p.sQuote && c === character) {
            p.a.push('');
        } else {
            p.a[p.a.length - 1] += c;
        }
        return p;
    }, { a: [''] }).a;
}

/**
 * Checks if the node is a document node or not.
 * @param {Node} node
 * @returns {node is Document | DocumentFragment}
 */
function isDocumentNode(node) {
    return node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.DOCUMENT_NODE;
}

function findParentOrHost(element, root) {
    const parentNode = element.parentNode;
    return (parentNode && parentNode.host && parentNode.nodeType === 11) ? parentNode.host : parentNode === root ? null : parentNode;
}

/**
 * Finds all elements on the page, inclusive of those within shadow roots.
 * @param {string=} selector Simple selector to filter the elements by. e.g. 'a', 'div.main'
 * @return {!Array<string>} List of anchor hrefs.
 * @author ebidel@ (Eric Bidelman)
 * License Apache-2.0
 */
function collectAllElementsDeep(selector = null, root) {
    const allElements = [];

    const findAllElements = function(nodes) {
        for (let i = 0, el; el = nodes[i]; ++i) {
            allElements.push(el);
            // If the element has a shadow root, dig deeper.
            if (el.shadowRoot) {
                findAllElements(el.shadowRoot.querySelectorAll('*'));
            }
        }
    };
    if(root.shadowRoot) {
        findAllElements(root.shadowRoot.querySelectorAll('*'));
    }
    findAllElements(root.querySelectorAll('*'));

    return selector ? allElements.filter(el => el.matches(selector)) : allElements;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./app/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const vis_bug_element_1 = __webpack_require__(/*! ./components/vis-bug/vis-bug.element */ "./app/components/vis-bug/vis-bug.element.js");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./app/utilities/index.js");
if ('ontouchstart' in document.documentElement)
    document.getElementById('mobile-info').style.display = '';
if (utilities_1.metaKey === 'ctrl')
    [...document.querySelectorAll('kbd')]
        .forEach(node => {
        node.textContent = node.textContent.replace('cmd', 'ctrl');
        node.textContent = node.textContent.replace('opt', 'alt');
    });
document.body.prepend(vis_bug_element_1.VisBugElement);
exports["default"] = vis_bug_element_1.VisBugElement;

})();

/******/ })()
;
//# sourceMappingURL=index.js.map