"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const DogeSound_1 = __importDefault(require("./activity/DogeSound"));
class Activities extends react_1.Component {
    render() {
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "activities" }, { children: ["Activities", jsx_runtime_1.jsx(react_router_dom_1.BrowserRouter, { children: jsx_runtime_1.jsx(react_router_dom_1.Switch, { children: jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/activities/dogesound", component: DogeSound_1.default }, void 0) }, void 0) }, void 0)] }), void 0);
    }
}
exports.default = Activities;
//# sourceMappingURL=Activities.js.map