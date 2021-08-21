"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const BrowserInfo_1 = __importDefault(require("../BrowserInfo"));
class Layout extends react_1.Component {
    constructor(props) {
        super(props);
        this.clickMenuButtonHandler = (event) => {
            this.setState({ showingNav: this.state.showingNav !== true });
            event.stopPropagation();
        };
        this.clickBodyHandler = () => {
            if (this.state.showingNav === true) {
                this.setState({ showingNav: false });
            }
        };
        this.state = { showingNav: false };
    }
    componentDidMount() {
        document.body.addEventListener("click", this.clickBodyHandler);
    }
    componentWillUnmount() {
        document.body.removeEventListener("click", this.clickBodyHandler);
    }
    render() {
        return jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs("header", Object.assign({ className: this.state.showingNav === true ? "showing" : "hiding", onClick: (e) => e.stopPropagation() }, { children: [jsx_runtime_1.jsx("a", Object.assign({ href: "/" }, { children: "HOME" }), void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ href: "/mate" }, { children: "NFT" }), void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ href: "/gallery" }, { children: "GALLERY" }), void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ href: "/activities" }, { children: "ACTIVITIES" }), void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ href: "/achievement/fully-on-chain" }, { children: "ACHIEVEMENTS" }), void 0),
                        jsx_runtime_1.jsxs("div", Object.assign({ className: "language" }, { children: ["\u25CF LANG : ", jsx_runtime_1.jsxs("select", Object.assign({ value: BrowserInfo_1.default.language.substring(0, 2), onChange: (event) => BrowserInfo_1.default.changeLanguage(event.target.value) }, { children: [jsx_runtime_1.jsx("option", Object.assign({ value: "ko" }, { children: "\uD55C\uAD6D\uC5B4" }), void 0),
                                        jsx_runtime_1.jsx("option", Object.assign({ value: "en" }, { children: "English" }), void 0)] }), void 0)] }), void 0)] }), void 0),
                jsx_runtime_1.jsx("a", Object.assign({ className: "menu-button", onClick: this.clickMenuButtonHandler }, { children: jsx_runtime_1.jsx("img", { src: "/images/menu-button.png", srcSet: "/images/menu-button@2x.png 2x" }, void 0) }), void 0),
                this.props.children,
                jsx_runtime_1.jsxs("footer", { children: ["\u00A9 2021 DSLAB", jsx_runtime_1.jsx("br", {}, void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ href: "/terms" }, { children: "TERMS & CONDITIONS" }), void 0)] }, void 0)] }, void 0);
    }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map