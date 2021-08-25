class Klaytn {

    private caver = new (window as any).Caver("https://kaikas.cypress.klaytn.net:8651/");

    public createContract(address: string, abi: any) {
        return new this.caver.contract.create(abi, address);
    }
}

export default new Klaytn();
