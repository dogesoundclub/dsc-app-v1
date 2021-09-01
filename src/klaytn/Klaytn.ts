import Config from "../Config";

class Klaytn {

    private caver = new (window as any).Caver(new (window as any).Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", {
        headers: [
            { name: "Authorization", value: Config.authorization },
            { name: "x-chain-id", value: String(Config.chainId) },
        ],
    }));

    public createContract(address: string, abi: any) {
        return new this.caver.contract.create(abi, address);
    }
}

export default new Klaytn();
