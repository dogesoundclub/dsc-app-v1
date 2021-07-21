"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const SloganContract_1 = __importDefault(require("../../contracts/SloganContract"));
class RegisterCandidateForm extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleSloganChange = (event) => {
            this.setState({ slogan: event.target.value });
        };
        this.handleCountChange = (event) => {
            this.setState({ count: parseInt(event.target.value, 10) });
        };
        this.register = async () => {
            await SloganContract_1.default.registerCandidate(this.state.slogan, this.state.count);
        };
        this.state = {
            slogan: "",
            count: 0,
        };
    }
    render() {
        return jsx_runtime_1.jsxs("div", Object.assign({ className: "register-candidate-form" }, { children: [jsx_runtime_1.jsx("span", { children: msg_js_1.default({
                        ko: "도지사운드 후보 :",
                    }) }, void 0),
                jsx_runtime_1.jsx("input", { className: "slogan", value: this.state.slogan, onChange: this.handleSloganChange }, void 0),
                jsx_runtime_1.jsxs("div", Object.assign({ className: "count-form" }, { children: [jsx_runtime_1.jsx("input", { value: this.state.count, onChange: this.handleCountChange }, void 0),
                        jsx_runtime_1.jsx("span", { children: msg_js_1.default({
                                ko: "개를 이용하여",
                            }) }, void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ onClick: this.register }, { children: msg_js_1.default({
                                ko: "제출하기",
                            }) }), void 0)] }), void 0)] }), void 0);
    }
}
exports.default = RegisterCandidateForm;
//# sourceMappingURL=RegisterCandidateForm.js.map