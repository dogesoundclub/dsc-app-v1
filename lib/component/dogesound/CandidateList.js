"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const skyutil_1 = __importDefault(require("skyutil"));
const SloganContract_1 = __importDefault(require("../../contracts/SloganContract"));
const Candidate_1 = __importDefault(require("./Candidate"));
class CandidateList extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { round: -1, candidateCount: -1 };
    }
    async componentDidMount() {
        const round = (await SloganContract_1.default.getRound()).toNumber();
        this.setState({
            round,
            candidateCount: (await SloganContract_1.default.getCandidateCount(round)).toNumber(),
        });
    }
    render() {
        return jsx_runtime_1.jsx("div", { children: skyutil_1.default.repeat(this.state.candidateCount, (index) => jsx_runtime_1.jsx(Candidate_1.default, { round: this.state.round, index: index }, index)) }, void 0);
    }
}
exports.default = CandidateList;
//# sourceMappingURL=CandidateList.js.map