"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,976];
exports.modules = {

/***/ 581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/indexStyle.js

const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-9f557af7-0"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;
const Content = external_styled_components_default().div.withConfig({
    componentId: "sc-9f557af7-1"
})`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;
const Infos = external_styled_components_default().div.withConfig({
    componentId: "sc-9f557af7-2"
})`
  text-align: start;
  width: 50%;
  display: grid;

  @media (max-width: 760px) {
    width: 90%;
  }
`;
const Name = external_styled_components_default().span.withConfig({
    componentId: "sc-9f557af7-3"
})`
  font-size: 40px;
  font-weight: 500;

  @media (max-width: 760px) {
    font-size: 25px;
  }
`;
const Function = external_styled_components_default().span.withConfig({
    componentId: "sc-9f557af7-4"
})`
  color: lightgray;
  margin-bottom: 10px;
`;
const Intro = external_styled_components_default().span.withConfig({
    componentId: "sc-9f557af7-5"
})`
  color: lightgray;
  text-align: justify;

  @media (max-width: 760px) {
    font-size: 15px;
  }
`;
const LinkProjects = external_styled_components_default().button.withConfig({
    componentId: "sc-9f557af7-6"
})`
  width: 10rem;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;

  svg {
    font-size: 20px;
  }
`;
const Logo = external_styled_components_default().div.withConfig({
    componentId: "sc-9f557af7-7"
})`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25rem;
    height: 25rem;
  }

  @media (max-width: 760px) {
    width: 90%;
  }

  @media (max-width: 600px) {

    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;
const Img = external_styled_components_default().img.withConfig({
    componentId: "sc-9f557af7-8"
})``;

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./src/pages/index.jsx




function Home() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Content, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Infos, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Name, {
                            children: "Cato, La Trung Hieu"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Function, {
                            children: "Full Sờ n\xe1ch Developer"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Intro, {
                            children: "ph\xe1t triển Web React, JS v\xe0 những thứ kh\xe1c"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "projects",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LinkProjects, {
                                children: [
                                    "PROJECTS ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaArrowRight, {})
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Img, {
                        src: "/images/logo.png",
                        alt: "logo"
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(581)));
module.exports = __webpack_exports__;

})();