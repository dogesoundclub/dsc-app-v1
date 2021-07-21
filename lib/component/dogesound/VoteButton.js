"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const SloganContract_1 = __importDefault(require("../../contracts/SloganContract"));
class VoteButton extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleCountChange = (event) => {
            this.setState({ count: parseInt(event.target.value, 10) });
        };
        this.vote = async () => {
            await SloganContract_1.default.vote(this.props.candidate, this.state.count);
        };
        this.state = {
            count: 0,
        };
    }
    render() {
        return jsx_runtime_1.jsxs("div", Object.assign({ className: "vote-button" }, { children: [jsx_runtime_1.jsx("input", { value: this.state.count, onChange: this.handleCountChange }, void 0),
                jsx_runtime_1.jsx("span", { children: msg_js_1.default({
                        ko: "개를 이용하여",
                    }) }, void 0),
                jsx_runtime_1.jsx("a", Object.assign({ onClick: this.vote }, { children: msg_js_1.default({
                        ko: "투표하기",
                    }) }), void 0)] }), void 0);
    }
}
exports.default = VoteButton;
//# sourceMappingURL=VoteButton.js.map