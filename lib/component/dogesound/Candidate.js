"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const SloganContract_1 = __importDefault(require("../../contracts/SloganContract"));
class Candidate extends react_1.Component {
    constructor(props) {
        super(props);
        this.vote = async () => {
            await SloganContract_1.default.vote(this.props.index, 10);
        };
        this.state = { slogan: "" };
    }
    async componentDidMount() {
        const elected = (await SloganContract_1.default.getElected(this.props.round)).toNumber();
        let slogan = "";
        try {
            slogan = await SloganContract_1.default.getCandidate(this.props.round, elected);
        }
        catch (e) { }
        this.setState({ slogan });
    }
    render() {
        return jsx_runtime_1.jsxs("div", { children: [this.state.slogan,
                jsx_runtime_1.jsx("a", Object.assign({ className: "vote-button", onClick: this.vote }, { children: msg_js_1.default({
                        ko: "투표하기",
                    }) }), void 0)] }, void 0);
    }
}
exports.default = Candidate;
//# sourceMappingURL=Candidate.js.map