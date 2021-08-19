"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const NameContract_1 = __importDefault(require("../../contracts/NameContract"));
class NameForm extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleMateIdChange = (event) => {
            this.setState({ mateId: parseInt(event.target.value, 10) });
        };
        this.handleNameChange = (event) => {
            this.setState({ name: event.target.value });
        };
        this.register = async () => {
            await NameContract_1.default.set(this.state.mateId, this.state.name);
            setTimeout(() => location.reload(), 1000);
        };
        this.state = {
            mateId: -1,
            name: "",
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
                jsx_runtime_1.jsx("a", Object.assign({ onClick: this.register }, { children: msg_js_1.default({
                        ko: "제출하기",
                    }) }), void 0)] }), void 0);
    }
}
exports.default = NameForm;
//# sourceMappingURL=NameForm.js.map