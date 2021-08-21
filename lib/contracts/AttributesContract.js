"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class AttributesContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.Attributes, require("./AttributesContractABI.json"));
    }
    async level(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.level(mateId).call();
    }
    async face(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.face(mateId).call();
    }
    async faceDetailA(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.faceDetailA(mateId).call();
    }
    async faceDetailB(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.faceDetailB(mateId).call();
    }
    async neck(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.neck(mateId).call();
    }
    async mouth(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.mouth(mateId).call();
    }
    async eyes(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.eyes(mateId).call();
    }
    async forehead(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.forehead(mateId).call();
    }
    async headwear(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.headwear(mateId).call();
    }
    async headwearDetail(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.headwearDetail(mateId).call();
    }
    async ears(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.ears(mateId).call();
    }
    async items(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.items(mateId).call();
    }
}
exports.default = new AttributesContract();
//# sourceMappingURL=AttributesContract.js.map