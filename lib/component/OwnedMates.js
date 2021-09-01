"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const MateContract_1 = __importDefault(require("../contracts/MateContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Mate_1 = __importDefault(require("./Mate"));
class OwnedMates extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { mates: [] };
    }
    async componentDidMount() {
        if (await Wallet_1.default.connected() !== true) {
            await Wallet_1.default.connect();
        }
        const walletAddress = await Wallet_1.default.loadAddress();
        if (walletAddress !== undefined) {
            const balance = (await MateContract_1.default.balanceOf(walletAddress)).toNumber();
            const mates = [];
            const promises = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index) => {
                    const mateId = await MateContract_1.default.tokenOfOwnerByIndex(walletAddress, index);
                    mates.push(mateId.toNumber());
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);
            this.setState({
                walletAddress,
                mates,
            });
        }
    }
    render() {
        return jsx_runtime_1.jsxs("div", Object.assign({ className: "owned-mates" }, { children: [jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                            ko: "- 지갑 주소 : ",
                        }), jsx_runtime_1.jsx("a", Object.assign({ href: `https://opensea.io/${this.state.walletAddress}` }, { children: this.state.walletAddress }), void 0),
                        jsx_runtime_1.jsx("br", {}, void 0),
                        msg_js_1.default({
                            ko: "- 보유 중인 메이트",
                        })] }, void 0),
                jsx_runtime_1.jsx("div", Object.assign({ className: "mate-list" }, { children: this.state.mates.map((mate, index) => jsx_runtime_1.jsx(Mate_1.default, { mateId: mate }, index)) }), void 0)] }), void 0);
    }
}
exports.default = OwnedMates;
//# sourceMappingURL=OwnedMates.js.map