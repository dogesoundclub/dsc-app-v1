"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const skyutil_1 = __importDefault(require("skyutil"));
const SloganContract_1 = __importDefault(require("../../contracts/SloganContract"));
const Rank_1 = __importDefault(require("./Rank"));
class RankList extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { round: -1 };
    }
    async componentDidMount() {
        this.setState({ round: (await SloganContract_1.default.getRound()).toNumber() });
    }
    render() {
        return jsx_runtime_1.jsx("div", Object.assign({ className: "rank-list" }, { children: jsx_runtime_1.jsxs("table", { children: [jsx_runtime_1.jsx("thead", { children: jsx_runtime_1.jsxs("tr", { children: [jsx_runtime_1.jsx("th", Object.assign({ style: { width: "10%" } }, { children: "#" }), void 0),
                                jsx_runtime_1.jsx("th", Object.assign({ style: { width: "20%" } }, { children: "BLOCK #" }), void 0),
                                jsx_runtime_1.jsx("th", Object.assign({ style: { width: "15%" } }, { children: "VOTES" }), void 0),
                                jsx_runtime_1.jsx("th", Object.assign({ style: { width: "55%" } }, { children: "dogesound" }), void 0)] }, void 0) }, void 0),
                    jsx_runtime_1.jsx("tbody", { children: skyutil_1.default.repeat(this.state.round, (round) => jsx_runtime_1.jsx(Rank_1.default, { round: this.state.round - round - 1 }, this.state.round - round - 1)) }, void 0)] }, void 0) }), void 0);
    }
}
exports.default = RankList;
//# sourceMappingURL=RankList.js.map