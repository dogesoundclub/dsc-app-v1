"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const Config_1 = __importDefault(require("../Config"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Contract_1 = __importDefault(require("./Contract"));
class MessageContract extends Contract_1.default {
    constructor() {
        super(Config_1.default.contracts.Message, require("./MessageContractABI.json"));
    }
    async set(mateId, message) {
        const register = await Wallet_1.default.loadAddress();
        const contract = await this.loadWalletContract();
        await (contract === null || contract === void 0 ? void 0 : contract.methods.set(mateId, message).send({ from: register, gas: 1500000 }));
    }
    async recordCount(mateId) {
        const contract = await this.loadWalletContract();
        return ethers_1.BigNumber.from(contract === undefined ? -1 : await contract.methods.recordCount(mateId).call());
    }
    async record(mateId, index) {
        const contract = await this.loadWalletContract();
        const result = await contract.methods.record(mateId, index).call();
        return {
            owner: result[0],
            name: result[1],
            message: result[2],
            blockNumber: result[3],
        };
    }
}
exports.default = new MessageContract();
//# sourceMappingURL=MessageContract.js.map