"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
class NameForm extends react_1.Component {
    constructor(props) {
        super(props);
        this.register = async () => {
        };
        this.state = {
            mateId: 0,
            name: "",
        };
    }
    async componentDidMount() {
    }
    render() {
        return jsx_runtime_1.jsxs("div", Object.assign({ className: "name-form" }, { children: [jsx_runtime_1.jsx("input", { className: "mate-id" }, void 0),
                jsx_runtime_1.jsx("span", { children: msg_js_1.default({
                        ko: "번 메이트의 이름을",
                    }) }, void 0),
                jsx_runtime_1.jsx("input", { className: "name" }, void 0),
                jsx_runtime_1.jsx("span", { children: msg_js_1.default({
                        ko: "로 짓겠습니다.",
                    }) }, void 0),
                jsx_runtime_1.jsx("a", Object.assign({ onClick: this.register }, { children: msg_js_1.default({
                        ko: "제출하기",
                    }) }), void 0)] }), void 0);
    }
}
exports.default = NameForm;
//# sourceMappingURL=NameForm.js.map