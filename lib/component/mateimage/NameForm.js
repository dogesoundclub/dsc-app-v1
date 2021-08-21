"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const debouncer_1 = __importDefault(require("@hanul/debouncer"));
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const MateContract_1 = __importDefault(require("../../contracts/MateContract"));
const NameContract_1 = __importDefault(require("../../contracts/NameContract"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
class NameForm extends react_1.Component {
    constructor(props) {
        super(props);
        this.mateIdChangeDebouncer = new debouncer_1.default(100, async () => {
            const walletAddress = await Wallet_1.default.loadAddress();
            if (walletAddress === undefined || await MateContract_1.default.ownerOf(this.state.mateId) !== walletAddress) {
                this.setState({ notMateHolder: true });
            }
            else {
                this.setState({ notMateHolder: false });
            }
        });
        this.handleMateIdChange = (event) => {
            this.setState({ mateId: parseInt(event.target.value, 10) });
            this.mateIdChangeDebouncer.run();
        };
        this.nameChangeDebouncer = new debouncer_1.default(100, async () => {
            if (await NameContract_1.default.exists(this.state.name) === true) {
                this.setState({ nameExists: true });
            }
            else {
                this.setState({ nameExists: false });
            }
        });
        this.handleNameChange = (event) => {
            this.setState({ name: event.target.value });
            this.nameChangeDebouncer.run();
        };
        this.register = async () => {
            if (this.state.notMateHolder !== true && this.state.nameExists !== true) {
                await NameContract_1.default.set(this.state.mateId, this.state.name);
                setTimeout(() => location.reload(), 1000);
            }
        };
        this.state = {
            mateId: -1,
            name: "",
            notMateHolder: false,
            nameExists: false,
        };
    }
    render() {
        return jsx_runtime_1.jsxs("div", Object.assign({ className: "name-form" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "content" }, { children: [jsx_runtime_1.jsx("input", { className: "mate-id", onChange: this.handleMateIdChange }, void 0),
                        jsx_runtime_1.jsx("span", { children: msg_js_1.default({
                                ko: "번 메이트의 이름을",
                            }) }, void 0),
                        jsx_runtime_1.jsx("input", { className: "name", onChange: this.handleNameChange }, void 0),
                        jsx_runtime_1.jsx("span", { children: msg_js_1.default({
                                ko: "로 짓겠습니다.",
                            }) }, void 0)] }), void 0),
                isNaN(this.state.mateId) !== true && this.state.notMateHolder && jsx_runtime_1.jsx("p", Object.assign({ className: "error" }, { children: msg_js_1.default({
                        ko: `${this.state.mateId}번 메이트 홀더가 아닙니다.`,
                    }) }), void 0),
                this.state.nameExists && jsx_runtime_1.jsx("p", Object.assign({ className: "error" }, { children: msg_js_1.default({
                        ko: "이미 존재하는 이름입니다.",
                    }) }), void 0),
                jsx_runtime_1.jsx("a", Object.assign({ onClick: this.register }, { children: msg_js_1.default({
                        ko: "제출하기",
                    }) }), void 0)] }), void 0);
    }
}
exports.default = NameForm;
//# sourceMappingURL=NameForm.js.map