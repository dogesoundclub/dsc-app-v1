"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const MessageForm_1 = __importDefault(require("../../component/matemessage/MessageForm"));
const OwnedMates_1 = __importDefault(require("../../component/OwnedMates"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
class MateMessage extends react_1.Component {
    constructor(props) {
        super(props);
        this.connectHandler = () => {
            this.setState({ connected: true });
        };
        this.state = {};
    }
    async componentDidMount() {
        Wallet_1.default.on("connect", this.connectHandler);
        this.setState({ connected: await Wallet_1.default.connected() });
    }
    componentWillUnmount() {
        Wallet_1.default.off("connect", this.connectHandler);
    }
    render() {
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "matemessage" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "menu-bar" }, { children: [jsx_runtime_1.jsx("h4", { children: "Activities" }, void 0),
                        jsx_runtime_1.jsxs("ul", Object.assign({ className: "menus" }, { children: [jsx_runtime_1.jsx("li", Object.assign({ className: "menu" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/activity/dogesound" }, { children: "- Dogesound" }), void 0) }), void 0),
                                jsx_runtime_1.jsx("li", Object.assign({ className: "menu" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/activity/matename" }, { children: "- Name Your Mate" }), void 0) }), void 0),
                                jsx_runtime_1.jsx("li", Object.assign({ className: "menu on" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/activity/matemessage" }, { children: "- Indelible MSG" }), void 0) }), void 0)] }), void 0)] }), void 0),
                jsx_runtime_1.jsx("h1", { children: msg_js_1.default({
                        ko: "지울 수 없는 메시지"
                    }) }, void 0),
                jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                        ko: "당신이 보유한 메이트에게 메시지를 남길 수 있습니다. 하루에 한 번 짧은 일기 또는 메모를 남길 수 있습니다. 조심하세요! 한번 제출된 일기는 클레이튼 블록체인에 기록되며, 개발팀도 지울 수 없습니다. 당신의 흑역사를 대대손손 남기지 않으려면 정신을 바짝 차려야 할 것입니다. 일기는 타인이 열람할 수 있습니다."
                    }) }, void 0),
                jsx_runtime_1.jsx(MessageForm_1.default, {}, void 0),
                jsx_runtime_1.jsx(OwnedMates_1.default, {}, void 0)] }), void 0);
    }
}
exports.default = MateMessage;
//# sourceMappingURL=MateMessage.js.map