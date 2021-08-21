"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const LoadImageForm_1 = __importDefault(require("../../component/mateimage/LoadImageForm"));
class FullyOnChain extends react_1.Component {
    render() {
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "fully-on-chain" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "menu-bar" }, { children: [jsx_runtime_1.jsx("h4", { children: "Achievements" }, void 0),
                        jsx_runtime_1.jsx("ul", Object.assign({ className: "menus" }, { children: jsx_runtime_1.jsx("li", Object.assign({ className: "menu" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "/achievement/fully-on-chain" }, { children: "- fully on-chain" }), void 0) }), void 0) }), void 0)] }), void 0),
                jsx_runtime_1.jsx("h1", { children: "FULLY ON-CHAIN" }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                ko: "nft 이미지의 완전한 온체인 저장에 성공하다. ㅡ 국내 최초",
                            }) }, void 0),
                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                ko: "메이트 V1을 만들 때, 메이트를 발행한 컨트랙트에 메이트 이미지의 암호화 해시를 저장함으로써, 메이트의 원본 컨트랙트가 무엇인지 명확히 구분할 수 있었습니다. 하지만 이미지 데이터가 모두 소실된 최악의 경우, 체인에 저장된 해시만으로는 이미지를 복구할 수 없습니다. 다시 말해 이미지 데이터가 완전히 체인에 저장되지 않았었고, 이는 메이트의 장기적인 생존에 문제가 될 수 있습니다.\n\n하지만 컨트랙트에 해시가 아닌 이미지 자체와 메이트 특성 정보를 완전히 온체인에 저장하면 메이트의 장기적 생존을 더욱 공고히 하고 클레이튼 클라이언트만 있으면 누구나 완전히 액세스할 수 있습니다.\n\n오늘(21년 8월 21일) 우리는 그 일을 완료했으며, 이제 메이트가 완전히 온체인 상태임을 발표하게 되어 기쁩니다 ! 심영재 개발자님 감사드립니다 !"
                            }) }, void 0)] }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                ko: "데모",
                            }) }, void 0),
                        jsx_runtime_1.jsx("p", { children: msg_js_1.default({
                                ko: "아래에서 계약을 조회하여 메이트 이미지에 액세스할 수 있습니다."
                            }) }, void 0),
                        jsx_runtime_1.jsx(LoadImageForm_1.default, {}, void 0)] }, void 0)] }), void 0);
    }
}
exports.default = FullyOnChain;
//# sourceMappingURL=FullyOnChain.js.map