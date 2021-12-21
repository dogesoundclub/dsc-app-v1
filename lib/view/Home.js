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
        this.connectHandler = () => {
            this.loadSlogan();
        };
        this.state = { round: -2, slogan: "", winner: "" };
    }
    async loadSlogan() {
        const round = (await SloganContract_1.default.getRound()).toNumber() - 1;
        let slogan = "";
        let winner = "";
        try {
            const elected = (await SloganContract_1.default.getElected(round)).toNumber();
            slogan = await SloganContract_1.default.getCandidate(round, elected);
            winner = await SloganContract_1.default.getCandidateRegister(round, elected);
        }
        catch (e) { }
        this.setState({ round, slogan, winner });
    }
    async componentDidMount() {
        sessionStorage.removeItem("__spa_path");
        Wallet_1.default.on("connect", this.connectHandler);
        await this.loadSlogan();
    }
    componentWillUnmount() {
        Wallet_1.default.off("connect", this.connectHandler);
    }
    render() {
        return jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs("main", Object.assign({ id: "home" }, { children: [jsx_runtime_1.jsx("img", { id: "logo", src: "/images/logo.png", srcSet: "/images/logo@2x.png 2x" }, void 0),
                        jsx_runtime_1.jsxs("header", { children: [jsx_runtime_1.jsx("div", Object.assign({ className: "welcome" }, { children: msg_js_1.default({
                                        ko: "도지사운드클럽에 온 것을 환영합니다 !",
                                        en: "WELCOME TO THE DOGE SOUND CLUB!"
                                    }) }), void 0),
                                jsx_runtime_1.jsxs("div", Object.assign({ className: "intro" }, { children: [msg_js_1.default({
                                            ko: "도지사운드클럽은 NFT를 이용한 거버넌스로 운영되는 NFT 수집가들의 사교 모임입니다.",
                                            en: "Doge Sound Club is a social gathering of NFT collectors where NFT-based governance is carried out."
                                        }),
                                        jsx_runtime_1.jsx("br", {}, void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "MATES를 이용해서 클럽에 가입하고 투표할 수 있습니다.",
                                            en: "You can join the club and vote by NFT MATES."
                                        })] }), void 0),
                                jsx_runtime_1.jsxs("div", Object.assign({ className: "slogan" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "winner" }, { children: [jsx_runtime_1.jsx("img", { className: "pc", src: "/images/winner-pc.gif" }, void 0),
                                                jsx_runtime_1.jsx("img", { className: "mobile", src: "/images/winner-mobile.gif" }, void 0),
                                                jsx_runtime_1.jsxs("span", { children: [msg_js_1.default({
                                                            ko: `경) 제 ${this.state.round + 1}회 개소리 우승자 (축 : `,
                                                        }), jsx_runtime_1.jsx("a", Object.assign({ href: `https://opensea.io/${this.state.winner}` }, { children: this.state.winner }), void 0)] }, void 0)] }), void 0),
                                        jsx_runtime_1.jsx("img", { src: "/images/top.png", srcSet: "/images/top@2x.png 2x" }, void 0),
                                        jsx_runtime_1.jsxs("div", Object.assign({ className: "panel" }, { children: [this.state.round === -2 && jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: msg_js_1.default({
                                                        ko: "안녕하세요. 저는 도우미 위고입니다! 메이트 홀더들의 소중한 뜻을 담은 개소리를 확인하려면 카이카스에 로그인하세요.",
                                                        en: "Hello. I'm a helper wigo! Log in to Kaikas to check the doge sound(Corny joke) that contain the precious meaning of mate holders!"
                                                    }) }, void 0),
                                                this.state.round === -1 && jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: msg_js_1.default({
                                                        ko: "아직 도지사운드(개소리) 경연이 시작되지 않았습니다.",
                                                        en: "The Doge Sound (Pathological lie) competition hasn't started yet."
                                                    }) }, void 0),
                                                this.state.round >= 0 && jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [msg_js_1.default({
                                                            ko: `제 ${this.state.round + 1} 회 최고의 도지사운드를 발표합니다.`,
                                                            en: `Announcing the best dogesound of ${this.state.round + 1} th competition`,
                                                        }), jsx_runtime_1.jsx("br", {}, void 0),
                                                        msg_js_1.default({
                                                            ko: `ㅡ ${this.state.slogan}`,
                                                            en: `ㅡ ${this.state.slogan}`
                                                        })] }, void 0)] }), void 0),
                                        jsx_runtime_1.jsx("div", Object.assign({ className: "panel-intro" }, { children: msg_js_1.default({
                                                ko: "* 주의 : 위는 탈중앙화된 방식으로 DSC 홀더들에게 최다 득표를 받은 문구가 자동으로 표시된 것입니다. DSC 개발팀의 뜻과 무관할 수 있습니다.",
                                                en: "* Note: The above is an automatic display of the phrase that received the most votes from DSC holders in a decentralized voting way. It may not be the will of the DSLAB.",
                                            }) }), void 0)] }), void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                        ko: "도지사운드클럽 특징",
                                        en: "CLUB FEATURES"
                                    }) }, void 0),
                                jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                            ko: "- 우리는 개소리에 진심인 자들입니다. : 2주마다 스마트 컨트랙트를 이용해 최고의 도지사운드(개소리)를 선정합니다.",
                                            en: "- We are sincere about pathological lies. : Every 2 weeks, the best doge sound (pathological lies) is selected through smart contract"
                                        }),
                                        jsx_runtime_1.jsx("br", {}, void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 우리는 암호화폐를 좋아합니다 : 특히 새로운 도전들에 대한 이야기를 좋아합니다.",
                                            en: "- We love cryptocurrencies: When cryptocurrencies fail, so do we.."
                                        }),
                                        jsx_runtime_1.jsx("br", {}, void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 우리는 음악를 좋아합니다 : 음악은 개소리와 함께 자본에 대한 집착을 환기하는 수단이 됩니다. dsc 개발팀은 DJ SET과 로우파이 비디오를 업로드합니다.",
                                            en: "- We love music: Music is a means of evoking our obsession with capital, along with bullshit. dsc development team uploads DJ SET and lofi videos."
                                        })] }, void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "banner" }, { children: [jsx_runtime_1.jsx("img", { src: "/images/stamps1.png", srcSet: "/images/stamps1@2x.png 2x" }, void 0),
                                        jsx_runtime_1.jsx("img", { src: "/images/stamps2.png", srcSet: "/images/stamps2@2x.png 2x" }, void 0)] }), void 0),
                                jsx_runtime_1.jsx("h2", { children: "NFT - DOGESOUNDCLUB MATES" }, void 0),
                                jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                            ko: "- DSC MATES는 컴퓨터 프로그램으로 생성된 10,000개의 24*24 픽셀 아트 캐릭터입니다. NFT(암호화폐의 한 규격)로 발행되어 이들에 대한 소유권을 쉽게 거래할 수 있습니다.",
                                            en: "- DSC MATES are 10,000 computer program generated 24*24 pixel art characters. They are issued as NFTs (a specification of cryptocurrency), making it easy to trade ownership of them.."
                                        }), jsx_runtime_1.jsx("br", {}, void 0),
                                        jsx_runtime_1.jsx("a", Object.assign({ href: "/mate" }, { children: msg_js_1.default({
                                                ko: "▶ NFT에 대한 자세한 내용보러 가기",
                                                en: "▶ Go to see more details about NFT"
                                            }) }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        jsx_runtime_1.jsx("a", Object.assign({ href: "/activities" }, { children: msg_js_1.default({
                                                ko: "▶ 이걸로 무엇을 할 수 있나요?",
                                                en: "▶ What can I do with this NFT?"
                                            }) }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 메이트는 오픈씨(세계 최대 NFT 거래소)에서 구입할 수 있습니다.",
                                            en: "- Mates can be purchased at Opensea."
                                        }), jsx_runtime_1.jsx("br", {}, void 0),
                                        jsx_runtime_1.jsx("a", Object.assign({ href: "https://opensea.io/collection/dogesoundclub-mates" }, { children: msg_js_1.default({
                                                ko: "▶ OPENSEA로 이동",
                                                en: "▶ Go to Opensea"
                                            }) }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "(클레이 토큰이 없다면, dogesoundclub@gmail.com 로 연락하세요.)",
                                            en: "(If you do not have a klay token, please contact dogesoundclub@gmail.com.)"
                                        })] }, void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                        ko: "사명",
                                        en: "DSC'S MISSION"
                                    }) }, void 0),
                                jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                        ko: "- DSC의 사명은 NFT에 기반한 거버넌스를 통해 사회에 선한 영향력을 결집해내는데에 있습니다.",
                                        en: "- DSC's mission is to gather good influence on society through NFT-based governance.",
                                    }) }, void 0),
                                jsx_runtime_1.jsx("iframe", { className: "video", width: "1147", height: "648", src: "https://www.youtube.com/embed/7Cwri2QKsAQ", title: "YouTube video player", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" }, void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: "ROADMAP ACTIVATIONS" }, void 0),
                                jsx_runtime_1.jsxs("div", Object.assign({ className: "loadmap" }, { children: [jsx_runtime_1.jsx("h3", { children: "30 %" }, void 0),
                                        jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                                    ko: "액티비티 '도지사운드 경연'을 활성화합니다.",
                                                    en: "Activate the club activity 'Doge Sound Competition'."
                                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                                jsx_runtime_1.jsx("a", Object.assign({ href: "/activities" }, { children: msg_js_1.default({
                                                        ko: "▶ 도지사운드 경연이 뭔가요?",
                                                        en: "▶ What is the Doge Sound Competition?",
                                                    }) }), void 0)] }, void 0)] }), void 0),
                                jsx_runtime_1.jsxs("div", Object.assign({ className: "loadmap" }, { children: [jsx_runtime_1.jsx("h3", { children: "50 %" }, void 0),
                                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                                ko: "액티비티 '메이트의 이름', '지울 수 없는 일기장'을 활성화합니다.",
                                                en: "Activate 'Doge Sori' for the holders's communication"
                                            }) }, void 0)] }), void 0),
                                jsx_runtime_1.jsxs("div", Object.assign({ className: "loadmap" }, { children: [jsx_runtime_1.jsx("h3", { children: "70 %" }, void 0),
                                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                                ko: "액티비티 '팔로우 미'를 활성화합니다. 로우파이 비디오를 업로드합니다."
                                            }) }, void 0)] }), void 0),
                                jsx_runtime_1.jsxs("div", Object.assign({ className: "loadmap" }, { children: [jsx_runtime_1.jsx("h3", { children: "100 %" }, void 0),
                                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                                ko: "도지사운드클럽 메이트 V2를 런칭합니다. 기존 메이트 홀더들에게 유리한 결제 방식으로 런칭됩니다."
                                            }) }, void 0)] }), void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: "Team" }, void 0),
                                jsx_runtime_1.jsx("div", Object.assign({ className: "banner" }, { children: jsx_runtime_1.jsx("img", { src: "/images/team.png", srcSet: "/images/team@2x.png 2x" }, void 0) }), void 0),
                                jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                            ko: "- ARVITOR (Manager) : 그림을 조합하는 프로그램을 만들었습니다. 슈퍼 컬렉터가 되고 싶습니다.",
                                            en: "- ARVITOR (Manager) : I made program that combines pictures. I wanna be a super collector."
                                        }), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- HANUL (Dev) : 블록체인 프로그래밍 종결자.",
                                            en: "- HANUL (Dev) : Virtuoso in blockchain programming."
                                        }), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- YONG JIN (Artist) : 메이트와 일러스트를 그려 주었습니다.",
                                            en: "- YONG JIN (Artist) : Drew illustrations and mates."
                                        })] }, void 0)] }, void 0),
                        jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: "CONTACT" }, void 0),
                                jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                            ko: "- 카카오톡 : ",
                                            en: "- KAKAOTALK :"
                                        }), jsx_runtime_1.jsx("a", Object.assign({ href: "https://open.kakao.com/o/gFJzBJ5c" }, { children: "https://open.kakao.com/o/gFJzBJ5c" }), void 0), " ", msg_js_1.default({
                                            ko: "(참여코드 : 10000)"
                                        }), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 디스코드 : ",
                                            en: "- DISCORD :"
                                        }), jsx_runtime_1.jsx("a", Object.assign({ href: "https://discord.gg/PZeb4VUDZG" }, { children: "https://discord.gg/PZeb4VUDZG" }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 트위터 : ",
                                            en: "- TWITTER :"
                                        }), jsx_runtime_1.jsx("a", Object.assign({ href: "https://twitter.com/dogesoundclub" }, { children: "https://twitter.com/dogesoundclub" }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 인스타그램 : ",
                                            en: "- INSTAGRAM : "
                                        }), "@dogesoundclub", jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 깃허브 : ",
                                            en: "- GITHUB :"
                                        }), jsx_runtime_1.jsx("a", Object.assign({ href: "https://github.com/dogesoundclub" }, { children: "https://github.com/dogesoundclub" }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 유튜브 : ",
                                            en: "- YOUTUBE : "
                                        }), jsx_runtime_1.jsx("a", Object.assign({ href: "https://www.youtube.com/channel/UCnt1jjJpL-YdHNcooykdY4w" }, { children: "https://www.youtube.com/channel/UCnt1jjJpL-YdHNcooykdY4w" }), void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                        msg_js_1.default({
                                            ko: "- 이메일 : ",
                                            en: "- E-mail : "
                                        }), "dogesoundclub@gmail.com"] }, void 0)] }, void 0)] }), void 0),
                sessionStorage.__spa_path && jsx_runtime_1.jsx(react_router_dom_1.Redirect, { to: sessionStorage.__spa_path }, void 0)] }, void 0);
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map
