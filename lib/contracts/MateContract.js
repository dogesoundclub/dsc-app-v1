"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const Contract_1 = __importDefault(require("./Contract"));
class MateContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.Mate, require("./MateContractABI.json"));
    }
    async ownerOf(mateId) {
        const contract = await this.loadWalletContract();
        return await contract.methods.ownerOf(mateId).call();
    }
    async balanceOf(owner) {
        const contract = await this.loadWalletContract();
        return ethers_1.BigNumber.from(contract === undefined ? -1 : await contract.methods.balanceOf(owner).call());
    }
    async tokenOfOwnerByIndex(owner, index) {
        const contract = await this.loadWalletContract();
        return ethers_1.BigNumber.from(contract === undefined ? -1 : await contract.methods.tokenOfOwnerByIndex(owner, index).call());
    }
}
exports.default = new MateContract();
//# sourceMappingURL=MateContract.js.map