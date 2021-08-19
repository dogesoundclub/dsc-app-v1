"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const NameContract_1 = __importDefault(require("../contracts/NameContract"));
class Mate extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
    }
    async componentDidMount() {
        this.setState({ name: await NameContract_1.default.getName(this.props.mateId) });
    }
    render() {
        return jsx_runtime_1.jsxs("a", Object.assign({ className: "mate", style: {
                backgroundImage: `url(https://storage.googleapis.com/dsc-mate/336/dscMate-${this.props.mateId}.png)`,
            }, href: `/mate/${this.props.mateId}` }, { children: [jsx_runtime_1.jsxs("span", Object.assign({ className: "id" }, { children: ["#", this.props.mateId] }), void 0),
                jsx_runtime_1.jsx("span", Object.assign({ className: "name" }, { children: this.state.name }), void 0)] }), void 0);
    }
}
exports.default = Mate;
//# sourceMappingURL=Mate.js.map