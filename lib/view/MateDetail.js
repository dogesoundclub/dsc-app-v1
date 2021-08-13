"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const MateMessageList_1 = __importDefault(require("../component/matedetail/MateMessageList"));
const NameContract_1 = __importDefault(require("../contracts/NameContract"));
class MateDetail extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
    }
    async componentDidMount() {
        const mateId = this.props.match.params.mateId;
        const count = (await NameContract_1.default.recordCount(mateId)).toNumber();
        if (count > 0) {
            const record = await NameContract_1.default.record(mateId, count - 1);
            this.setState({ name: record.name });
        }
    }
    render() {
        const mateId = this.props.match.params.mateId;
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "matedetail" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "menu-bar" }, { children: [jsx_runtime_1.jsx("h4", { children: "NFT" }, void 0),
                        jsx_runtime_1.jsxs("ul", Object.assign({ className: "menus" }, { children: [jsx_runtime_1.jsx("li", Object.assign({ className: "menu on" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "mate" }, { children: "- DSC Mates" }), void 0) }), void 0),
                                jsx_runtime_1.jsx("li", Object.assign({ className: "menu ready" }, { children: jsx_runtime_1.jsx("a", { children: "- DSC eXCLUSIVES" }, void 0) }), void 0)] }), void 0)] }), void 0),
                jsx_runtime_1.jsx("img", { src: `https://storage.googleapis.com/dsc-mate/336/dscMate-${mateId}.png` }, void 0),
                jsx_runtime_1.jsx("h1", { children: msg_js_1.default({
                        ko: "메이트 정보",
                    }) }, void 0),
                jsx_runtime_1.jsxs("div", { children: [msg_js_1.default({
                            ko: "번호 : ",
                        }),
                        mateId] }, void 0),
                jsx_runtime_1.jsxs("div", { children: [msg_js_1.default({
                            ko: "이름 : ",
                        }),
                        this.state.name] }, void 0),
                jsx_runtime_1.jsx("a", Object.assign({ href: `https://opensea.io/assets/klaytn/0xe47e90c58f8336a2f24bcd9bcb530e2e02e1e8ae/${mateId}` }, { children: msg_js_1.default({
                        ko: "▶ 오픈씨에서 확인하기",
                    }) }), void 0),
                jsx_runtime_1.jsx(MateMessageList_1.default, { mateId: mateId, name: this.state.name }, void 0)] }), void 0);
    }
}
exports.default = MateDetail;
//# sourceMappingURL=MateDetail.js.map