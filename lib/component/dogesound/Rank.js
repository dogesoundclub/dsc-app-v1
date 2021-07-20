"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SloganContract_1 = __importDefault(require("../../contracts/SloganContract"));
class Rank extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { block: -1, votes: 0, slogan: "" };
    }
    async componentDidMount() {
        const elected = (await SloganContract_1.default.getElected(this.props.round)).toNumber();
        this.setState({
            block: (await SloganContract_1.default.getRoundBlock(this.props.round)).toNumber(),
            votes: (await SloganContract_1.default.getVotes(this.props.round, elected)).toNumber(),
            slogan: await SloganContract_1.default.getCandidate(this.props.round, elected),
        });
    }
    render() {
        return jsx_runtime_1.jsxs("tr", { children: [jsx_runtime_1.jsx("td", { children: this.props.round + 1 }, void 0),
                jsx_runtime_1.jsx("td", { children: this.state.block === -1 ? "" : this.state.block }, void 0),
                jsx_runtime_1.jsx("td", { children: this.state.block === -1 ? "" : this.state.votes }, void 0),
                jsx_runtime_1.jsx("td", { children: this.state.block === -1 ? "" : this.state.slogan }, void 0)] }, void 0);
    }
}
exports.default = Rank;
//# sourceMappingURL=Rank.js.map