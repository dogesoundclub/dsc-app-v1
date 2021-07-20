"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventcontainer_1 = __importDefault(require("eventcontainer"));
class Wallet extends eventcontainer_1.default {
    constructor() {
        super();
        this.klaytn = window.klaytn;
        this.caver = window.caver;
        this.checkConnected();
    }
    get existsInjectedProvider() { return this.caver !== undefined; }
    async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }
    async loadAddress() {
        return this.caver === undefined ? undefined : (await this.caver.klay.getAccounts())[0];
    }
    async loadChainId() {
        return this.caver === undefined ? -1 : await this.caver.klay.getChainId();
    }
    async loadBlockNumber() {
        return this.caver === undefined ? -1 : await this.caver.klay.getBlockNumber();
    }
    async connected() {
        return await this.loadAddress() !== undefined;
    }
    async connect() {
        var _a;
        await ((_a = this.klaytn) === null || _a === void 0 ? void 0 : _a.enable());
        this.checkConnected();
    }
    createContract(address, abi) {
        return this.caver === undefined ? undefined : new this.caver.klay.Contract(abi, address);
    }
}
exports.default = new Wallet();
//# sourceMappingURL=Wallet.js.map