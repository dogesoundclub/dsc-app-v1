"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
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
        this.state = { loaded: false, round: -1, candidates: [], selectedCandidate: 0 };
    }
    async componentDidMount() {
        const round = (await SloganContract_1.default.getRound()).toNumber();
        const candidateCount = (await SloganContract_1.default.getCandidateCount(round)).toNumber();
        let candidates = [];
        const promises = [];
        for (let i = 0; i < candidateCount; i += 1) {
            const promise = async (index) => {
                let slogan = "";
                try {
                    slogan = await SloganContract_1.default.getCandidate(round, index);
                }
                catch (e) { }
                const votes = (await SloganContract_1.default.getVotes(round, index)).toNumber();
                candidates.push({ index, slogan, votes });
            };
            promises.push(promise(i));
        }
        await Promise.all(promises);
        candidates = candidates.sort((a, b) => {
            return b.votes - a.votes;
        });
        this.setState({ loaded: true, round, candidates, selectedCandidate: candidates[0] === undefined ? 0 : candidates[0].index });
    }
    render() {
        return jsx_runtime_1.jsxs("div", Object.assign({ className: "candidate-list" }, { children: [jsx_runtime_1.jsx("p", { children: this.state.loaded === false ? msg_js_1.default({
                        ko: "로딩중...",
                    }) : msg_js_1.default({
                        ko: "진행중인 투표 도지사운드 후보들 :",
                    }) }, void 0),
                jsx_runtime_1.jsx("ul", { children: this.state.candidates.map((candidate) => jsx_runtime_1.jsxs("li", { children: [this.props.period === SloganContract_1.default.VOTE_PERIOD && jsx_runtime_1.jsx("input", { type: "radio", name: "candidate", value: candidate.index, checked: this.state.selectedCandidate === candidate.index, onChange: this.handleRadioCheck }, void 0),
                            jsx_runtime_1.jsx(Candidate_1.default, { candidate: candidate, select: () => {
                                    this.handleCandidateChange(candidate.index);
                                } }, void 0)] }, candidate.index)) }, void 0)] }), void 0);
    }
}
exports.default = CandidateList;
//# sourceMappingURL=CandidateList.js.map