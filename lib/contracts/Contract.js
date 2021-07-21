"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventcontainer_1 = __importDefault(require("eventcontainer"));
const Config_1 = __importDefault(require("../Config"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
class Contract extends eventcontainer_1.default {
    constructor(address, abi) {
        super();
        this.address = address;
        this.abi = abi;
    }
    async loadWalletContract() {
        if (await Wallet_1.default.loadChainId() !== Config_1.default.chainId) {
            this.fireEvent("wrongNetwork");
            console.error("Wrong Network");
        }
        else {
            if (await Wallet_1.default.connected() !== true) {
                await Wallet_1.default.connect();
            }
            if (this.walletContract === undefined) {
                this.walletContract = Wallet_1.default.createContract(this.address, this.abi);
            }
            return this.walletContract;
        }
    }
}
exports.default = Contract;
//# sourceMappingURL=Contract.js.map