"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const DogeSoundContest_1 = __importDefault(require("../../component/dogesound/DogeSoundContest"));
const RankList_1 = __importDefault(require("../../component/dogesound/RankList"));
const Wallet_1 = __importDefault(require("../../klaytn/Wallet"));
class DogeSound extends react_1.Component {
    render() {
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "dogesound" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "menu-bar" }, { children: [jsx_runtime_1.jsx("h4", { children: "Activities" }, void 0),
                        jsx_runtime_1.jsxs("ul", Object.assign({ className: "menus" }, { children: [jsx_runtime_1.jsx("li", Object.assign({ className: "menu on" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/activity/dogesound" }, { children: "- Dogesound" }), void 0) }), void 0),
                                jsx_runtime_1.jsx("li", Object.assign({ className: "menu ready" }, { children: jsx_runtime_1.jsx("a", { children: "- Amongus" }, void 0) }), void 0)] }), void 0)] }), void 0),
                jsx_runtime_1.jsx("img", { className: "top-image", src: "/images/dogesound.png" }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                ko: "도지사운드 경연 규칙",
                            }) }, void 0),
                        jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                    ko: "30개 이상의 메이트를 사용하면 개소리 후보를 제출할 수 있습니다.(경연 상태가 후보 접수 중일 경우.) 최다 득표를 받은 도지사운드는 웹페이지 메인에 자동으로 게시됩니다. 후보 제출 또는 투표에 사용한 메이트는 해당 투표에서 다시 사용할 수 없습니다. 도지사운드 후보 제출 또는 투표 활동은 메이트 소유권에 일체 영향을 주지 않습니다. (도지사운드 후보 예시 : 비트코인은 인류 최대의 뻘짓입니다. 또는 DSC의 정체성을 반영하는 문구 일체.) ",
                                }),
                                jsx_runtime_1.jsx("span", Object.assign({ className: "important" }, { children: msg_js_1.default({
                                        ko: "도지사운드 후보 제출 또는 투표 활동은 메이트 소유권에 일체 영향을 주지 않습니다.",
                                    }) }), void 0),
                                msg_js_1.default({
                                    ko: " (도지사운드 후보 예시 : 비트코인은 인류 최대의 뻘짓입니다. 또는 DSC의 정체성을 반영하는 문구 일체.)"
                                }),
                                jsx_runtime_1.jsx("br", {}, void 0), jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: "경연은 365일 항시 가동됩니다. 경연은 총 3가지 단계(후보 접수 중, 투표 중, 휴식)로 구성되며, 일정한 시간 간격으로 상태가 전환되며 진행됩니다. 후보 접수는 3일(약 259,200 블록), 투표는 하루(약 86,400 블록), 휴식은 10일(약 864,000 블록)으로 2주를 주기로 한 사이클을 돌게 됩니다. ",
                                })] }, void 0)] }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                ko: "도지사운드 역대 우승작",
                            }) }, void 0),
                        Wallet_1.default.existsInjectedProvider !== true && jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: msg_js_1.default({
                                ko: "클레이튼 네트워크를 찾을 수 없습니다. Kaikas를 설치해주시기 바랍니다.",
                            }) }, void 0),
                        Wallet_1.default.existsInjectedProvider === true && jsx_runtime_1.jsx(RankList_1.default, {}, void 0)] }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                ko: "도지사운드 경연 현황판",
                            }) }, void 0),
                        Wallet_1.default.existsInjectedProvider !== true && jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: msg_js_1.default({
                                ko: "클레이튼 네트워크를 찾을 수 없습니다. Kaikas를 설치해주시기 바랍니다.",
                            }) }, void 0),
                        Wallet_1.default.existsInjectedProvider === true && jsx_runtime_1.jsx(DogeSoundContest_1.default, {}, void 0)] }, void 0)] }), void 0);
    }
}
exports.default = DogeSound;
//# sourceMappingURL=DogeSound.js.map