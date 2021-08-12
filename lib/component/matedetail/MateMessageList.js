"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
class MateMessage extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount() {
    }
    render() {
        return jsx_runtime_1.jsxs("div", Object.assign({ className: "mate-message-list" }, { children: [jsx_runtime_1.jsx("h3", { children: msg_js_1.default({
                        ko: `${this.props.name}에게 남겨진 메시지들`
                    }) }, void 0),
                jsx_runtime_1.jsxs("table", { children: [jsx_runtime_1.jsx("thead", { children: jsx_runtime_1.jsxs("tr", { children: [jsx_runtime_1.jsx("th", Object.assign({ style: { width: "15%" } }, { children: "BLOCK #" }), void 0),
                                    jsx_runtime_1.jsx("th", Object.assign({ style: { width: "10%" } }, { children: "NAME" }), void 0),
                                    jsx_runtime_1.jsx("th", Object.assign({ style: { width: "55%" } }, { children: "MSG" }), void 0),
                                    jsx_runtime_1.jsx("th", Object.assign({ style: { width: "20%" } }, { children: "HOLDER ADDR" }), void 0)] }, void 0) }, void 0),
                        jsx_runtime_1.jsx("tbody", {}, void 0)] }, void 0)] }), void 0);
    }
}
exports.default = MateMessage;
//# sourceMappingURL=MateMessageList.js.map