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
        this.state = { slogan: "", votes: 0 };
    }
    async componentDidMount() {
        let slogan = "";
        try {
            slogan = await SloganContract_1.default.getCandidate(this.props.round, this.props.index);
        }
        catch (e) { }
        this.setState({
            slogan,
            votes: (await SloganContract_1.default.getVotes(this.props.round, this.props.index)).toNumber(),
        });
    }
    render() {
        return jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx("h6", Object.assign({ onClick: this.props.select }, { children: this.state.slogan }), void 0),
                jsx_runtime_1.jsx("span", { children: msg_js_1.default({
                        ko: `득표 수 : ${this.state.votes}`,
                    }) }, void 0)] }, void 0);
    }
}
exports.default = Candidate;
//# sourceMappingURL=Candidate.js.map