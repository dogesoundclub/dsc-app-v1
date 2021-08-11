"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_router_dom_1 = require("react-router-dom");
const BrowserInfo_1 = __importDefault(require("./BrowserInfo"));
const Activities_1 = __importDefault(require("./view/Activities"));
const DogeSound_1 = __importDefault(require("./view/activity/DogeSound"));
const MateMessage_1 = __importDefault(require("./view/activity/MateMessage"));
const MateName_1 = __importDefault(require("./view/activity/MateName"));
const Gallary_1 = __importDefault(require("./view/Gallary"));
const Home_1 = __importDefault(require("./view/Home"));
const Layout_1 = __importDefault(require("./view/Layout"));
const Mate_1 = __importDefault(require("./view/Mate"));
const MateDetail_1 = __importDefault(require("./view/MateDetail"));
const Terms_1 = __importDefault(require("./view/Terms"));
msg_js_1.default.language = BrowserInfo_1.default.language;
react_dom_1.default.render(jsx_runtime_1.jsx(Layout_1.default, { children: jsx_runtime_1.jsx(react_router_dom_1.BrowserRouter, { children: jsx_runtime_1.jsxs(react_router_dom_1.Switch, { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.default }, void 0),
                jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/mate", component: Mate_1.default }, void 0),
                jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/mate/:mateId", component: MateDetail_1.default }, void 0),
                jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/gallary", component: Gallary_1.default }, void 0),
                jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/activities", component: Activities_1.default }, void 0),
                jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/activity/dogesound", component: DogeSound_1.default }, void 0),
                jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/activity/matename", component: MateName_1.default }, void 0),
                jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/activity/matemessage", component: MateMessage_1.default }, void 0),
                jsx_runtime_1.jsx(react_router_dom_1.Route, { exact: true, path: "/terms", component: Terms_1.default }, void 0)] }, void 0) }, void 0) }, void 0), document.getElementById("root"));
//# sourceMappingURL=main.js.map