"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
class Terms extends react_1.Component {
    render() {
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "terms" }, { children: [jsx_runtime_1.jsx("h1", { children: "TERMS & CONDITIONS OF DSC MATES" }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                ko: "이용약관",
                            }) }, void 0),
                        jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                    ko: "dsc mates은 클레이튼 네트워크에서 실행되는 디지털 아트워크(NFT) 모음입니다. 이 웹사이트는 참가자들이 디지털 수집품을 교환/이용할 수 있는 인터페이스일 뿐입니다. 사용자는 자신의 개인 클레이튼 지갑의 안전과 관리에 대해 전적으로 책임이 있으며 승인 전에 이 웹사이트에서 생성된 모든 거래 및 계약을 검증합니다. 또한 dsc mates 스마트 계약은 클레이튼 네트워크에서 실행되기 때문에 트랜잭션을 취소 또는 복원할 수 없습니다.",
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: "이 웹사이트 및 연결된 서비스는 어떠한 종류의 보증 없이 \"있는 그대로\" 및 \"사용 가능한 상태로\" 제공됩니다. 이 웹사이트를 사용함으로써 귀하는 dsc mates 디지털 수집품과 관련된 모든 거래에 대해 단독 책임을 지게 됩니다.",
                                })] }, void 0)] }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                ko: "소유권 및 저작권",
                            }) }, void 0),
                        jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                    ko: "첫째, (소유권) 당신은 NFT를 소유하고 있습니다. 각 DSC MATE는 클레이튼 블록체인의 NFT입니다. NFT를 구매하면 기본 DSC MATE, Art를 완전히 소유하게 됩니다. NFT의 소유권은 전적으로 스마트 계약과 클레이튼 네트워크에 의해 중재됩니다. 어떤 시점에서도 DSC MATE의 소유권을 압류, 동결 또는 수정할 수 없습니다.",
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: "둘째, (저작권) DOGESOUND MATES는 MIT 라이센스로 배포되었습니다. 따라서, DSLAB 이 외의 제 3자가 MATES 아트를 개인 또는 상업적으로 활용할 수 있습니다.",
                                })] }, void 0)] }, void 0)] }), void 0);
    }
}
exports.default = Terms;
//# sourceMappingURL=Terms.js.map