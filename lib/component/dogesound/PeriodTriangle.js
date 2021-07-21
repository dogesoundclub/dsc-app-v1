"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const SloganContract_1 = __importDefault(require("../../contracts/SloganContract"));
class PeriodTriangle extends react_1.Component {
    render() {
        return jsx_runtime_1.jsxs("div", Object.assign({ className: "period-triangle" }, { children: [this.props.period === SloganContract_1.default.HOLIDAY_PERIOD && jsx_runtime_1.jsx("img", { src: "/images/period-holiday.png", srcSet: "/images/period-holiday@2x.png 2x" }, void 0),
                this.props.period === SloganContract_1.default.REGISTER_CANDIDATE_PERIOD && jsx_runtime_1.jsx("img", { src: "/images/period-register.png", srcSet: "/images/period-register@2x.png 2x" }, void 0),
                this.props.period === SloganContract_1.default.VOTE_PERIOD && jsx_runtime_1.jsx("img", { src: "/images/period-vote.png", srcSet: "/images/period-vote@2x.png 2x" }, void 0),
                jsx_runtime_1.jsx("h5", Object.assign({ className: `holiday${this.props.period === SloganContract_1.default.HOLIDAY_PERIOD ? " on" : ""}` }, { children: msg_js_1.default({
                        ko: "쉬는 중",
                    }) }), void 0),
                jsx_runtime_1.jsx("h5", Object.assign({ className: `register${this.props.period === SloganContract_1.default.REGISTER_CANDIDATE_PERIOD ? " on" : ""}` }, { children: msg_js_1.default({
                        ko: "도지사운드 후보 접수 중",
                    }) }), void 0),
                jsx_runtime_1.jsx("h5", Object.assign({ className: `vote${this.props.period === SloganContract_1.default.VOTE_PERIOD ? " on" : ""}` }, { children: msg_js_1.default({
                        ko: "투표 중",
                    }) }), void 0)] }), void 0);
    }
}
exports.default = PeriodTriangle;
//# sourceMappingURL=PeriodTriangle.js.map