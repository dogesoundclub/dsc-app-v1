"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SloganContract_1 = __importDefault(require("../../contracts/SloganContract"));
class CandidateList extends react_1.Component {
    async componentDidMount() {
        const round = (await SloganContract_1.default.getRound()).toNumber();
        console.log(await SloganContract_1.default.getCandidateCount(round));
    }
    render() {
        return jsx_runtime_1.jsx(jsx_runtime_1.Fragment, {}, void 0);
    }
}
exports.default = CandidateList;
//# sourceMappingURL=CandidateList.js.map