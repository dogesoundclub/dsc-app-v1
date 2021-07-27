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
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "activities" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "menu-bar" }, { children: [jsx_runtime_1.jsx("h4", { children: "Activities" }, void 0),
                        jsx_runtime_1.jsxs("ul", Object.assign({ className: "menus" }, { children: [jsx_runtime_1.jsx("li", Object.assign({ className: "menu" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/activity/dogesound" }, { children: "- Dogesound" }), void 0) }), void 0),
                                jsx_runtime_1.jsx("li", Object.assign({ className: "menu ready" }, { children: jsx_runtime_1.jsx("a", { children: "- MATE DIARY" }, void 0) }), void 0)] }), void 0)] }), void 0),
                jsx_runtime_1.jsx("h1", { children: "ACTIVITIES" }, void 0),
                jsx_runtime_1.jsx("section", { children: jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                            ko: "DSC는 DSC 정체성에 적합한 클럽 활동들을 제공합니다. 발행한 NFT를 활용한 기존에 없는 신선한 시도들을 하고 있습니다. 현재 도지사운드 경연만이 제공되고 있습니다.",
                            en: "DSC offers club activities that fit the DSC identity. We are making fresh attempts that have not been made before using the issued NFT. Currently, only the Doge Sound Competition is being offered."
                        }) }, void 0) }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/activity/dogesound" }, { children: "DOGESOUND COMPETITION (Only mate holders can join)" }), void 0) }, void 0),
                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                ko: "Dogesound competiion은 클레이튼 체인 위에서 작동되는 개소리 경연입니다. 20개 이상의 메이트를 사용하면 개소리 후보를 제출할 수 있습니다. 최다 득표를 받은 도지사운드는 웹페이지 메인에 자동으로 게시됩니다. 사용한 메이트는 다음 회에 다시 사용할 수 있습니다. 도지사운드 후보 제출 또는 투표는 메이트 소유권에 일체 영향을 주지 않습니다. (개소리 예시 : 비트코인은 인류 최대의 뻘짓입니다. 또는 DSC가 좋아할만한 아무 문구)",
                                en: "The dogesound competition is a pathological competition that runs on the Klayton chain. If you have more than 20 mates, you can submit dogesound nominations. Doge Sound that received the most votes is automatically posted on the main web page. A used mate can be used again next competition. Submitting or voting for a DogeSound candidate will not affect mate ownership in any way. (Example of dogesound: Bitcoin is humanity's biggest bullshit, or a phrase that reflects the identity of the DSC)"
                            }) }, void 0)] }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", Object.assign({ className: "ready" }, { children: "AMONGUS (Not released)" }), void 0),
                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({}) }, void 0)] }, void 0)] }), void 0);
    }
}
exports.default = Activities;
//# sourceMappingURL=Activities.js.map