"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
class Layout extends react_1.Component {
    render() {
        return jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs("header", { children: [jsx_runtime_1.jsx("a", Object.assign({ href: "/" }, { children: "HOME" }), void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ href: "https://testnets.opensea.io/collection/dogesoundclub-mates-v3" }, { children: "NFT" }), void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ href: "/gallary" }, { children: "GALLARY" }), void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ href: "/activities" }, { children: "ACTIVITIES" }), void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ href: "/" }, { children: "BOARD" }), void 0)] }, void 0),
                this.props.children,
                jsx_runtime_1.jsx("footer", { children: "\u00A9 2021 DSC Labs" }, void 0)] }, void 0);
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map