"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
class MateName extends react_1.Component {
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
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "matename" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "menu-bar" }, { children: [jsx_runtime_1.jsx("h4", { children: "Activities" }, void 0),
                        jsx_runtime_1.jsxs("ul", Object.assign({ className: "menus" }, { children: [jsx_runtime_1.jsx("li", Object.assign({ className: "menu" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/activity/dogesound" }, { children: "- Dogesound" }), void 0) }), void 0),
                                jsx_runtime_1.jsx("li", Object.assign({ className: "menu on" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/activity/matename" }, { children: "- Name Your Mate" }), void 0) }), void 0),
                                jsx_runtime_1.jsx("li", Object.assign({ className: "menu" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/activity/matemessage" }, { children: "- Indelible MSG" }), void 0) }), void 0)] }), void 0)] }), void 0),
                jsx_runtime_1.jsx("h1", { children: msg_js_1.default({
                        ko: "메이트 이름 짓기"
                    }) }, void 0),
                jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                        ko: "메이트에게 이름을 지어주세요. 메이트가 이름이 없었다면, 가스비만을 지불하면 이름을 지어줄 수 있습니다. 하지만 변경을 하려면, 100 클레이 또는 100 믹스를 지불해야 합니다. 다른 메이트와 똑같은 이름을 사용할 수 없습니다. 메이트 이름은 갤러리에 표시됩니다."
                    }) }, void 0)] }), void 0);
    }
}
exports.default = MateName;
//# sourceMappingURL=MateName.js.map