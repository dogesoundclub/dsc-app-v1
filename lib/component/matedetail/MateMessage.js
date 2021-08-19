"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const MessageContract_1 = __importDefault(require("../../contracts/MessageContract"));
class MateMessage extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { owner: "", name: "", message: "" };
    }
    async componentDidMount() {
        const record = await MessageContract_1.default.record(this.props.mateId, this.props.index);
        this.setState({
            owner: record.owner,
            name: record.name,
            message: record.message,
            blockNumber: parseInt(record.blockNumber, 10),
        });
    }
    render() {
        return jsx_runtime_1.jsxs("tr", { children: [jsx_runtime_1.jsx("td", { children: this.state.blockNumber }, void 0),
                jsx_runtime_1.jsx("td", { children: this.state.name }, void 0),
                jsx_runtime_1.jsx("td", { children: this.state.message }, void 0),
                jsx_runtime_1.jsxs("td", { children: [this.state.owner.substring(0, 10), "..."] }, void 0)] }, void 0);
    }
}
exports.default = MateMessage;
//# sourceMappingURL=MateMessage.js.map