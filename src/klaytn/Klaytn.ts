class Klaytn {

    private caver = new (window as any).Caver(new (window as any).Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", {
        headers: [
            { name: "Authorization", value: "Basic S0FTS0VNMEpVNVZZSjYwTFRMRk1VVlYzOlRTeHlHbnF2dDM1TlJuN2thU0NZdm1FN1JsMjZYdndGVG5yb25fWEw=" },
            { name: "x-chain-id", value: "8217" },
        ],
    }));

    public createContract(address: string, abi: any) {
        return new this.caver.contract.create(abi, address);
    }
}

export default new Klaytn();
