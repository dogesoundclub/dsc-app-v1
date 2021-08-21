"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const msg_js_1 = __importDefault(require("msg.js"));
const react_1 = require("react");
const AttributesContract_1 = __importDefault(require("../../contracts/AttributesContract"));
const ImageContract_1 = __importDefault(require("../../contracts/ImageContract"));
class LoadImageForm extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleMateIdChange = (event) => {
            this.setState({ mateId: parseInt(event.target.value, 10) });
        };
        this.load = async () => {
            this.setState({ image: await ImageContract_1.default.image(this.state.mateId) });
            const attributes = {};
            const promises = [];
            promises.push((async () => {
                attributes.level = `Level ${await AttributesContract_1.default.level(this.state.mateId)}`;
            })());
            promises.push((async () => {
                attributes.face = await AttributesContract_1.default.face(this.state.mateId);
            })());
            promises.push((async () => {
                attributes.faceDetailA = await AttributesContract_1.default.faceDetailA(this.state.mateId);
            })());
            promises.push((async () => {
                attributes.faceDetailB = await AttributesContract_1.default.faceDetailB(this.state.mateId);
            })());
            promises.push((async () => {
                attributes.neck = await AttributesContract_1.default.neck(this.state.mateId);
            })());
            promises.push((async () => {
                attributes.mouth = await AttributesContract_1.default.mouth(this.state.mateId);
            })());
            promises.push((async () => {
                attributes.eyes = await AttributesContract_1.default.eyes(this.state.mateId);
            })());
            promises.push((async () => {
                attributes.forehead = await AttributesContract_1.default.forehead(this.state.mateId);
            })());
            promises.push((async () => {
                attributes.headwear = await AttributesContract_1.default.headwear(this.state.mateId);
            })());
            promises.push((async () => {
                attributes.headwearDetail = await AttributesContract_1.default.headwearDetail(this.state.mateId);
            })());
            promises.push((async () => {
                attributes.ears = await AttributesContract_1.default.ears(this.state.mateId);
            })());
            promises.push((async () => {
                attributes.items = await AttributesContract_1.default.items(this.state.mateId);
            })());
            await Promise.all(promises);
            this.setState({ attributes });
        };
        this.state = {
            mateId: -1,
        };
    }
    render() {
        let attributes;
        if (this.state.attributes !== undefined) {
            attributes = Object.values(this.state.attributes).filter((v) => v !== "").join(", ");
        }
        return jsx_runtime_1.jsxs("div", Object.assign({ className: "load-image-form" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "form" }, { children: [jsx_runtime_1.jsx("input", { className: "mate-id", onChange: this.handleMateIdChange }, void 0),
                        jsx_runtime_1.jsx("span", { children: msg_js_1.default({
                                ko: "번 메이트의 이미지와, 특성을",
                            }) }, void 0),
                        jsx_runtime_1.jsx("a", Object.assign({ onClick: this.load }, { children: msg_js_1.default({
                                ko: "불러오기",
                            }) }), void 0)] }), void 0),
                jsx_runtime_1.jsx("div", Object.assign({ className: "info" }, { children: this.state.image !== undefined &&
                        jsx_runtime_1.jsx("img", { src: this.state.image }, void 0) }), void 0)] }), void 0);
    }
}
exports.default = LoadImageForm;
//# sourceMappingURL=LoadImageForm.js.map