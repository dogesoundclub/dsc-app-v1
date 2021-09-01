class Klaytn {

    private caver = new (window as any).Caver(new (window as any).Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", {
        headers: [
            { name: "Authorization", value: "Basic S0FTUDA4STVDRkFQTkc4TkdaMVhMRk03OmkxT1RkZ3dMU1BOMWxVbHRjc0FUM1Q4YVg4RjNISzluUVJMbTBMMXA=" },
            { name: "x-chain-id", value: "8217" },
        ],
    }));

    public createContract(address: string, abi: any) {
        return new this.caver.contract.create(abi, address);
    }
}

export default new Klaytn();
