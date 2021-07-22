"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const MateContract_1 = __importDefault(require("../../contracts/MateContract"));
const SloganContract_1 = __importDefault(require("../../contracts/SloganContract"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
const CandidateList_1 = __importDefault(require("./CandidateList"));
const PeriodTriangle_1 = __importDefault(require("./PeriodTriangle"));
const RegisterCandidateForm_1 = __importDefault(require("./RegisterCandidateForm"));
const VoteButton_1 = __importDefault(require("./VoteButton"));
class DogeSoundContest extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            round: -1, period: -1, remains: -1,
            mateBalance: 0,
            votedMateCount: 0,
            candidateMateCount: -1,
            selectedCandidate: 0,
        };
    }
    async componentDidMount() {
        const round = (await SloganContract_1.default.getRound()).toNumber();
        const user = await Wallet_1.default.loadAddress();
        this.setState({
            round,
            period: (await SloganContract_1.default.getPeriod()).toNumber(),
            remains: (await SloganContract_1.default.getRemains()).toNumber(),
            mateBalance: user === undefined ? 0 : (await MateContract_1.default.balanceOf(user)).toNumber(),
            votedMateCount: user === undefined ? 0 : (await SloganContract_1.default.getUserVotes(round, user)).toNumber(),
            candidateMateCount: (await SloganContract_1.default.getCandidateMateCount()).toNumber(),
            walletAddress: await Wallet_1.default.loadAddress(),
        });
        this.interval = setInterval(() => {
            if (this.state.remains === 1) {
                location.reload();
            }
            else {
                this.setState({
                    remains: this.state.remains - 1,
                });
            }
        }, 1000);
    }
    componentWillUnmount() {
        if (this.interval !== undefined) {
            clearInterval(this.interval);
        }
    }
    render() {
        return jsx_runtime_1.jsxs("div", Object.assign({ className: "doge-sound-contest" }, { children: [jsx_runtime_1.jsx(PeriodTriangle_1.default, { period: this.state.period }, void 0),
                this.state.period === SloganContract_1.default.HOLIDAY_PERIOD && jsx_runtime_1.jsxs("div", Object.assign({ className: "message" }, { children: [jsx_runtime_1.jsxs("h4", { children: [msg_js_1.default({
                                    ko: `제 ${this.state.round}회 경연 투표가 종료되었습니다.`,
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: `다음 단계까지 ${this.state.remains} 블록 남음.`,
                                })] }, void 0),
                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                ko: "- 채택된 도지사운드는 웹사이트 메인에 게시되었습니다.",
                            }) }, void 0)] }), void 0),
                this.state.period === SloganContract_1.default.REGISTER_CANDIDATE_PERIOD && jsx_runtime_1.jsxs("div", Object.assign({ className: "message" }, { children: [jsx_runtime_1.jsxs("h4", { children: [msg_js_1.default({
                                    ko: `제 ${this.state.round + 1}회 경연 후보를 접수 중입니다.`,
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: `다음 단계까지 ${this.state.remains} 블록 남음.`,
                                })] }, void 0),
                        jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                    ko: "- 지갑 주소 : ",
                                }), this.state.walletAddress,
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: `- 보유 중인 메이트 수 : ${this.state.mateBalance}개`,
                                }),
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: `- 사용할 수 있는 메이트 수 : ${this.state.mateBalance - this.state.votedMateCount} 개 (>= ${this.state.candidateMateCount}개일 경우 사용 가능)`,
                                })] }, void 0)] }), void 0),
                this.state.period === SloganContract_1.default.VOTE_PERIOD && jsx_runtime_1.jsxs("div", Object.assign({ className: "message" }, { children: [jsx_runtime_1.jsxs("h4", { children: [msg_js_1.default({
                                    ko: `제 ${this.state.round + 1}회 경연 투표가 진행 중 입니다.`,
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: `다음 단계까지 ${this.state.remains} 블록 남음.`,
                                })] }, void 0),
                        jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                    ko: "- 지갑 주소 : ",
                                }), this.state.walletAddress,
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: `- 보유 중인 메이트 수 : ${this.state.mateBalance}개`,
                                }),
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: `- 활용 가능 메이트 수 : ${this.state.mateBalance - this.state.votedMateCount}개`,
                                }),
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: "* 안심하세요! 투표 참여는 당신의 소유권에 전혀 영향을 주지 않습니다.",
                                })] }, void 0)] }), void 0),
                this.state.period === SloganContract_1.default.REGISTER_CANDIDATE_PERIOD && jsx_runtime_1.jsx(RegisterCandidateForm_1.default, {}, void 0),
                this.state.period === SloganContract_1.default.VOTE_PERIOD && jsx_runtime_1.jsx(VoteButton_1.default, { candidate: this.state.selectedCandidate }, void 0),
                this.state.period === SloganContract_1.default.HOLIDAY_PERIOD && jsx_runtime_1.jsx("a", Object.assign({ className: "holiday-vote-button" }, { children: msg_js_1.default({
                        ko: "투표하기",
                    }) }), void 0),
                jsx_runtime_1.jsx(CandidateList_1.default, { period: this.state.period, onSelectCandidate: (candidate) => {
                        this.setState({ selectedCandidate: candidate });
                    } }, void 0)] }), void 0);
    }
}
exports.default = DogeSoundContest;
//# sourceMappingURL=DogeSoundContest.js.map