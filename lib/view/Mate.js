"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
class Mate extends react_1.Component {
    render() {
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "mate" }, { children: [jsx_runtime_1.jsx("h1", { children: msg_js_1.default({
                        ko: "DSC MATES가 무엇인가요?",
                    }) }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: "dsc mates" }, void 0),
                        jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                    ko: "- dsc mates는 10,000개의 모양이 모두 제각기 다른 캐릭터로 24*24 픽셀 아트입니다.",
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: "- 10,000개의 제각기 다른 모습의 메이트를 생성하기 위해 10개의 얼굴 그리고 80여 개의 특성을 조합했습니다. 똑같은 것은 없습니다. 특성에 따른 메이트 정보는 본 홈페이지의 gallery에서 조회하실 수 있습니다.",
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: "- 10,000개의 메이트 모두 같은 조건 아래에서 무작위로 생성되었습니다. 인위적으로 희귀하게 생성된 것은 없습니다.",
                                })] }, void 0)] }, void 0),
                jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                ko: "소유권 (nft 초보자를 위한 설명)",
                            }) }, void 0),
                        jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                    ko: "메이트에 대한 소유권 정보는 클레이튼 블록체인에 기록되어 있습니다.",
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: "원활한 소유권 거래를 위해 10,000개의 암호화폐를 발행을 하였습니다. 쪼개지지 않는 이 10,000개의 암호화폐는 각각 0~9999까지 고유한 번호를 가지고 있습니다. 고유번호를 가지고 있는 한 개의 암호화폐에 메이트 한 개를 연결했습니다. 때문에 귀하의 암호화폐 지갑에 DSC MATES의 정보를 담은 암호화폐 13번이 있다면, 귀하는 13번 메이트의 명백한 주인임이 증명됩니다. 암호화폐와 메이트의 연결은 고정불변으로, 영원히 수정되지 않도록 만들어져 있습니다.",
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: "이러한 방식의 소유권 증명은 암호화폐 기술과 같은 근본을 가지고 있습니다. 누구도 이를 조작할 수 없기에, 제 3자의 중개없이 안전한 거래를 가능케 합니다.",
                                })] }, void 0)] }, void 0),
                jsx_runtime_1.jsxs("section", Object.assign({ className: "mates" }, { children: [jsx_runtime_1.jsx("h2", { children: msg_js_1.default({
                                ko: "무수히 발행되는 토큰 중에 특정 토큰이 DSC MATES임을 알 수 있는 방법",
                            }) }, void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ className: "all", href: "https://ipfs.io/ipfs/QmfTimyAQTQjQsnvECn9U44LdnPzSDF2XREoP2WFdjHitQ?filename=dscMates.png", target: "_blank" }, { children: jsx_runtime_1.jsx("img", { src: "/images/mates.png", srcSet: "/images/mates@2x.png x2" }, void 0) }), void 0),
                        jsx_runtime_1.jsxs("p", { children: [msg_js_1.default({
                                    ko: "컨트랙트를 통해 누구나 10,000개의 토큰을 만들어낼 수 있습니다. 때문에 무수한 컨트랙트 토큰 중에 무엇이 오리지널 DSC MATES를 나타내는 것인지 확인할 필요가 있습니다.",
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: "DSC MATES 컨트랙트에는 2가지 변수가 저장되어 있습니다.",
                                }), jsx_runtime_1.jsx("br", {}, void 0), "1. hash : 6110b42d1575f2bfb80a98cb6ce7d6743fa249b6ee2be08467487c12f5f95753", jsx_runtime_1.jsx("br", {}, void 0), "2. ipfs : QmfTimyAQTQjQsnvECn9U44LdnPzSDF2XREoP2WFdjHitQ", jsx_runtime_1.jsx("br", {}, void 0),
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: "1번은 10,000개의 메이트가 모두 들어 있는 정본 dscmates.png(위 그림 참조)에 대한 sha256 해시값입니다. 이는 정본 파일을 sha256로 변환 했을때만 얻을 수 있는 값입니다. 파일을 넣어 위 해쉬값이 나오지 않으면 정본이 아닙니다. (리눅스에서 \"openssl dgst -sha256 dscmates.png\"를 통해 위 그림의 해쉬를 생성해보세요.) 무분별한 복제로 이 해쉬값을 가지고 있는 컨트랙트가 여러 개라면, 그 중 가장 먼저 생성된 것이 원본이고, 그 원본 컨트랙트가 담고 있는 토큰만을 거래하시면 됩니다.",
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                jsx_runtime_1.jsx("br", {}, void 0),
                                msg_js_1.default({
                                    ko: "2번은 단일한 서버가 정본 그림을 잃어버리는 상황을 방지하기 위해, 정본을 분산 저장했고 이 그림을 불러올 수 있는 키(아이디)입니다.",
                                }), jsx_runtime_1.jsx("br", {}, void 0),
                                jsx_runtime_1.jsx("a", Object.assign({ href: "https://ipfs.io/ipfs/QmfTimyAQTQjQsnvECn9U44LdnPzSDF2XREoP2WFdjHitQ?filename=dscMates.png", target: "_blank" }, { children: "https://ipfs.io/ipfs/QmfTimyAQTQjQsnvECn9U44LdnPzSDF2XREoP2WFdjHitQ?filename=dscMates.png" }), void 0), " \uC5D0 \uC811\uC18D\uD558\uBA74, \uBD84\uC0B0 \uC800\uC7A5\uB41C dsc mates \uC815\uBCF8\uC744 \uC5F4\uB78C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }, void 0)] }), void 0),
                jsx_runtime_1.jsxs("div", Object.assign({ className: "menu-bar" }, { children: [jsx_runtime_1.jsx("h4", { children: "NFT" }, void 0),
                        jsx_runtime_1.jsxs("ul", Object.assign({ className: "menus" }, { children: [jsx_runtime_1.jsx("li", Object.assign({ className: "menu on" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "mate" }, { children: "- DSC Mates" }), void 0) }), void 0),
                                jsx_runtime_1.jsx("li", Object.assign({ className: "menu ready" }, { children: jsx_runtime_1.jsx("a", { children: "- DSC eXCLUSIVES" }, void 0) }), void 0)] }), void 0)] }), void 0)] }), void 0);
    }
}
exports.default = Mate;
//# sourceMappingURL=Mate.js.map