"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const SloganContract_1 = __importDefault(require("../contracts/SloganContract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class Home extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { round: -2, slogan: "" };
    }
    async componentDidMount() {
        sessionStorage.removeItem("__spa_path");
        const round = (await SloganContract_1.default.getRound()).toNumber() - 1;
        const elected = (await SloganContract_1.default.getElected(round)).toNumber();
        let slogan = "";
        try {
            slogan = await SloganContract_1.default.getCandidate(round, elected);
        }
        catch (e) { }
        this.setState({ round, slogan });
    }
    render() {
        return jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs("main", Object.assign({ id: "home" }, { children: [jsx_runtime_1.jsx("img", { id: "logo", src: "/images/logo.png", srcSet: "/images/logo@2x.png 2x" }, void 0),
                        jsx_runtime_1.jsxs("header", { children: [jsx_runtime_1.jsx("div", Object.assign({ className: "welcome" }, { children: msg_js_1.default({
                                        ko: "도지사운드클럽에 온 것을 환영합니다 !",
                                    }) }), void 0),
                                jsx_runtime_1.jsx("div", Object.assign({ className: "intro" }, { children: msg_js_1.default({
                                        ko: "도지사운드클럽은 개소리(도지사운드)를 즐기는 유쾌한 nft 홀더들을 위한 가상의 나이트클럽입니다.",
                                    }) }), void 0),
                                jsx_runtime_1.jsxs("div", Object.assign({ className: "slogan" }, { children: [jsx_runtime_1.jsx("img", { src: "/images/top.png", srcSet: "/images/top@2x.png 2x" }, void 0),
                                        jsx_runtime_1.jsxs("div", Object.assign({ className: "panel" }, { children: [Wallet_1.default.existsInjectedProvider !== true && jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: msg_js_1.default({
                                                        ko: "클레이튼 네트워크를 찾을 수 없습니다. Kaikas를 설치해주시기 바랍니다.",
                                                    }) }, void 0),
                                                Wallet_1.default.existsInjectedProvider === true && this.state.round === -2 && jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: msg_js_1.default({
                                                        ko: "카이카스에 접속해주시기 바랍니다.",
                                                    }) }, void 0),
                                                this.state.round === -1 && jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: msg_js_1.default({
                                                        ko: "아직 도지사운드(개소리) 경연이 시작되지 않았습니다.",
                                                    }) }, void 0),
                                                this.state.round >= 0 && jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [msg_js_1.default({
                                                            ko: `제 ${this.state.round + 1} 회 도지사운드(개소리) 경연 우승작은`,
                                                        }), jsx_runtime_1.jsx("br", {}, void 0),
                                                        msg_js_1.default({
                                                            ko: `'${this.state.slogan}'가 되었습니다.`,
                                                        })] }, void 0)] }), void 0),
                                        jsx_runtime_1.jsx("div", Object.assign({ className: "panel-intro" }, { children: msg_js_1.default({
                                                ko: "* 주의 : 위는 탈중앙화된 방식으로 DSC 홀더들에게 최다 득표를 받은 문구가 자동으로 표시된 것입니다. DSC 개발팀의 뜻과 무관할 수 있습니다.",
                                            }) }), void 0)] }), void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                        ko: "도지사운드클럽 특징",
                                    }) }, void 0),
                                jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                            ko: "- 우리는 개소리에 진심인 자들입니다. : 2주마다 스마트 컨트랙트를 이용해 최고의 도지사운드(개소리)를 선정합니다.",
                                        }),
                                        jsx_runtime_1.jsx("br", {}, void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 우리는 암호화폐를 좋아합니다 : 특히 새로운 도전들에 대한 이야기를 좋아합니다.",
                                        }),
                                        jsx_runtime_1.jsx("br", {}, void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 우리는 음악를 좋아합니다 : 음악은 개소리와 함께 자본에 대한 집착을 환기하는 수단이 됩니다. dsc 개발팀은 DJ SET과 로우파이 비디오를 업로드합니다.",
                                        })] }, void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "banner" }, { children: [jsx_runtime_1.jsx("img", { src: "/images/stamps1.png", srcSet: "/images/stamps1@2x.png 2x" }, void 0),
                                        jsx_runtime_1.jsx("img", { src: "/images/stamps2.png", srcSet: "/images/stamps2@2x.png 2x" }, void 0)] }), void 0),
                                jsx_runtime_1.jsx("h2", { children: "NFT - DOGESOUNDCLUB MATES" }, void 0),
                                jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                            ko: "- DSC MATES는 컴퓨터 프로그램으로 생성된 10,000개의 24*24 픽셀 아트 캐릭터입니다. NFT(암호화폐의 한 규격)로 발행되어 이들에 대한 소유권을 쉽게 거래할 수 있습니다.",
                                        }), jsx_runtime_1.jsx("br", {}, void 0),
                                        jsx_runtime_1.jsx("a", Object.assign({ href: "/mate" }, { children: msg_js_1.default({
                                                ko: "▶ NFT에 대한 자세한 내용보러 가기",
                                            }) }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        jsx_runtime_1.jsx("a", Object.assign({ href: "/activities" }, { children: msg_js_1.default({
                                                ko: "▶ 이걸로 무엇을 할 수 있나요?",
                                            }) }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 메이트는 오픈씨(세계 최대 NFT 거래소)에서 구입할 수 있습니다.",
                                        }), jsx_runtime_1.jsx("br", {}, void 0),
                                        jsx_runtime_1.jsx("a", Object.assign({ href: "https://opensea.io/collection/dogesoundclub-mates" }, { children: msg_js_1.default({
                                                ko: "▶ OPENSEA로 이동",
                                            }) }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "(클레이 토큰이 없다면, dogesoundclub@gmail.com 로 연락하세요.)",
                                        })] }, void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                        ko: "목표",
                                    }) }, void 0),
                                jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                        ko: "- DSC의 최종 목표는 메타버스 나이트클럽을 제작하는 것입니다. 인류가 자본의 축척만으로 도달할 수 없는 삶의 재미에 대한 갈증을 해소합니다.",
                                    }) }, void 0),
                                jsx_runtime_1.jsx("iframe", { className: "video", width: "1147", height: "648", src: "https://www.youtube.com/embed/7Cwri2QKsAQ", title: "YouTube video player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" }, void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: "ROADMAP ACTIVATIONS" }, void 0),
                                jsx_runtime_1.jsxs("div", Object.assign({ className: "loadmap" }, { children: [jsx_runtime_1.jsx("h3", { children: "30 %" }, void 0),
                                        jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                                    ko: "클럽 활동 '도지사운드 경연'을 활성화합니다.",
                                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                                jsx_runtime_1.jsx("a", Object.assign({ href: "/activities" }, { children: msg_js_1.default({
                                                        ko: "▶ 도지사운드 경연이 뭔가요?",
                                                    }) }), void 0)] }, void 0)] }), void 0),
                                jsx_runtime_1.jsxs("div", Object.assign({ className: "loadmap" }, { children: [jsx_runtime_1.jsx("h3", { children: "50 %" }, void 0),
                                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                                ko: "홀더들의 자취를 남길 수 있도록 게시판 '도지보드'를 활성화합니다.",
                                            }) }, void 0)] }), void 0),
                                jsx_runtime_1.jsxs("div", Object.assign({ className: "loadmap" }, { children: [jsx_runtime_1.jsx("h3", { children: "70 %" }, void 0),
                                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                                ko: "개더타운을 이용한 정기 정모를 활성화합니다.",
                                            }) }, void 0)] }), void 0),
                                jsx_runtime_1.jsxs("div", Object.assign({ className: "loadmap" }, { children: [jsx_runtime_1.jsx("h3", { children: "100 %" }, void 0),
                                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                                ko: "클레이튼 토큰 '믹스'를 발행합니다. 메이트 홀더에게 일정 발행량이 배분됩니다.",
                                            }) }, void 0)] }), void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: "Team" }, void 0),
                                jsx_runtime_1.jsx("div", Object.assign({ className: "banner" }, { children: jsx_runtime_1.jsx("img", { src: "/images/team.png", srcSet: "/images/team@2x.png 2x" }, void 0) }), void 0),
                                jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                            ko: "- arvitor (manager) : 쓰레기 수집가입니다. 팀원들이 부끄럼을 타서 소개는 전부 제가 적겠습니다.",
                                        }), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- hanul (developer) : 블록체인 프로그래밍 종결자. 이분과 협업을 하게되어 신께 감사를 드립니다.",
                                        }), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- yong jin (designer) : 조소과 출신 공무원. 정말 예술가답지 않게 반듯한 친구. 합류해줘 고마워요.",
                                        })] }, void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: "CONTACT" }, void 0),
                                jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                            ko: "- 카카오톡 : ",
                                        }), jsx_runtime_1.jsx("a", Object.assign({ href: "https://open.kakao.com/o/gFJzBJ5c" }, { children: "https://open.kakao.com/o/gFJzBJ5c" }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 트위터 : ",
                                        }), jsx_runtime_1.jsx("a", Object.assign({ href: "https://twitter.com/dogesoundclub" }, { children: "https://twitter.com/dogesoundclub" }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 인스타그램 : ",
                                        }), "@dogesoundclub", jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 유튜브 : ",
                                        }), jsx_runtime_1.jsx("a", Object.assign({ href: "https://www.youtube.com/channel/UCnt1jjJpL-YdHNcooykdY4w" }, { children: "https://www.youtube.com/channel/UCnt1jjJpL-YdHNcooykdY4w" }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 이메일 : ",
                                        }), "dogesoundclub@gmail.com"] }, void 0)] }, void 0)] }), void 0),
                sessionStorage.__spa_path && jsx_runtime_1.jsx(react_router_dom_1.Redirect, { to: sessionStorage.__spa_path }, void 0)] }, void 0);
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map