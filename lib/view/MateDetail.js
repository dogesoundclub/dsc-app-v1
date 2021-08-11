"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
class MateDetail extends react_1.Component {
    render() {
        console.log(this.props.match.params.mateId);
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "matedetail" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "menu-bar" }, { children: [jsx_runtime_1.jsx("h4", { children: "NFT" }, void 0),
                        jsx_runtime_1.jsxs("ul", Object.assign({ className: "menus" }, { children: [jsx_runtime_1.jsx("li", Object.assign({ className: "menu on" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "mate" }, { children: "- DSC Mates" }), void 0) }), void 0),
                                jsx_runtime_1.jsx("li", Object.assign({ className: "menu ready" }, { children: jsx_runtime_1.jsx("a", { children: "- DSC eXCLUSIVES" }, void 0) }), void 0)] }), void 0)] }), void 0),
                jsx_runtime_1.jsx("h1", { children: msg_js_1.default({
                        ko: "메이트 정보",
                    }) }, void 0)] }), void 0);
    }
}
exports.default = MateDetail;
//# sourceMappingURL=MateDetail.js.map