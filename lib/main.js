"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./view/Home"));
const Caver = require("caver-js");
react_dom_1.default.render(jsx_runtime_1.jsx(react_router_dom_1.BrowserRouter, { children: jsx_runtime_1.jsx(react_router_dom_1.Switch, { children: jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.default }, void 0) }, void 0) }, void 0), document.getElementById("root"));
//# sourceMappingURL=main.js.map