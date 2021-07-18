"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventcontainer_1 = __importDefault(require("eventcontainer"));
class Wallet extends eventcontainer_1.default {
    constructor() {
        super(...arguments);
        this.caver = window.caver;
    }
    get existsInjectedProvider() { return this.caver !== undefined; }
}
exports.default = new Wallet();
//# sourceMappingURL=Wallet.js.map