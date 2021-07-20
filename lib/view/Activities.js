"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
class Activities extends react_1.Component {
    render() {
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "activities" }, { children: [jsx_runtime_1.jsx("h1", { children: "ACTIVITIES" }, void 0),
                jsx_runtime_1.jsx("section", { children: jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                            ko: "dsc는 dsc 정체성에 적합한 클럽 활동들을 제공합니다. 발행한 nft를 활용한 기존에 없는 신선한 시도들을 하고 있습니다. 현재 도지사운드 경연만이 제공되고 있습니다.",
                        }) }, void 0) }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/activity/dogesound" }, { children: "dogesound competition (only MATES HOLDERS can join)" }), void 0) }, void 0),
                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                ko: "dogesound competiion은 클레이튼 체인 위에서 작동되는 개소리 경연입니다. 30개 이상의 메이트를 사용하면 개소리 후보를 제출할 수 있습니다. 최다 득표를 받은 도지사운드는 웹페이지 메인에 자동으로 게시됩니다. 사용한 메이트는 다음 회에 다시 사용할 수 있습니다. 도지사운드 후보 제출 또는 투표는 메이트 소유권에 일체 영향을 주지 않습니다. (개소리 예시 : 비트코인은 인류 최대의 뻘짓입니다. 또는 DSC가 좋아할만한 아무 문구)",
                            }) }, void 0)] }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", Object.assign({ className: "ready" }, { children: "amongus (not released)" }), void 0),
                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                ko: "dsc 클럽에 살인 사건이 발생합니다. (가상) 1만개 메이트 중 하나가 범인입니다. 범인을 잡기 위해 관련 증언을 공개하겠습니다. 이를 밝혀낸 분에게 암호화폐 또는 nft로 보상합니다. (범인은 무작위로 추첨된 후 게임이 진행됩니다. - 개발이 미확정된 활동입니다.)",
                            }) }, void 0)] }, void 0),
                jsx_runtime_1.jsxs("div", Object.assign({ className: "menu-bar" }, { children: [jsx_runtime_1.jsx("h4", { children: "Activities" }, void 0),
                        jsx_runtime_1.jsxs("ul", Object.assign({ className: "menus" }, { children: [jsx_runtime_1.jsx("li", Object.assign({ className: "menu" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/activity/dogesound" }, { children: "- Dogesound" }), void 0) }), void 0),
                                jsx_runtime_1.jsx("li", Object.assign({ className: "menu ready" }, { children: jsx_runtime_1.jsx("a", { children: "- Amongus" }, void 0) }), void 0)] }), void 0)] }), void 0)] }), void 0);
    }
}
exports.default = Activities;
//# sourceMappingURL=Activities.js.map