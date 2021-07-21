"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const skyutil_1 = __importDefault(require("skyutil"));
const SloganContract_1 = __importDefault(require("../../contracts/SloganContract"));
const Candidate_1 = __importDefault(require("./Candidate"));
class CandidateList extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleCandidateChange = (candidate) => {
            this.setState({ selectedCandidate: candidate });
            this.props.onSelectCandidate(candidate);
        };
        this.handleRadioCheck = (event) => {
            this.handleCandidateChange(parseInt(event.target.value, 10));
        };
        this.state = { round: -1, candidateCount: -1, selectedCandidate: 0 };
    }
    async componentDidMount() {
        const round = (await SloganContract_1.default.getRound()).toNumber();
        this.setState({
            round,
            candidateCount: (await SloganContract_1.default.getCandidateCount(round)).toNumber(),
        });
    }
    render() {
        return jsx_runtime_1.jsxs("div", Object.assign({ className: "candidate-list" }, { children: [jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                        ko: "진행중인 투표 도지사운드 후보들 :",
                    }) }, void 0),
                jsx_runtime_1.jsx("ul", { children: skyutil_1.default.repeat(this.state.candidateCount, (candidate) => jsx_runtime_1.jsxs("li", { children: [this.props.period === SloganContract_1.default.VOTE_PERIOD && jsx_runtime_1.jsx("input", { type: "radio", name: "candidate", value: candidate, checked: this.state.selectedCandidate === candidate, onChange: this.handleRadioCheck }, void 0),
                            jsx_runtime_1.jsx(Candidate_1.default, { round: this.state.round, index: candidate, select: () => {
                                    this.handleCandidateChange(candidate);
                                } }, void 0)] }, candidate)) }, void 0)] }), void 0);
    }
}
exports.default = CandidateList;
//# sourceMappingURL=CandidateList.js.map