"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Klaytn {
    constructor() {
        this.caver = new window.Caver(new window.Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", {
            headers: [
                { name: "Authorization", value: "Basic S0FTS0VNMEpVNVZZSjYwTFRMRk1VVlYzOlRTeHlHbnF2dDM1TlJuN2thU0NZdm1FN1JsMjZYdndGVG5yb25fWEw=" },
                { name: "x-chain-id", value: "8217" },
            ],
        }));
    }
    createContract(address, abi) {
        return new this.caver.contract.create(abi, address);
    }
}
exports.default = new Klaytn();
//# sourceMappingURL=Klaytn.js.map