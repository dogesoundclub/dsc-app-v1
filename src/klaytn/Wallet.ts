import EventContainer from "eventcontainer";

class Wallet extends EventContainer {

    private klaytn: any | undefined = (window as any).klaytn;
    private caver: any | undefined = (window as any).caver;
    public get existsInjectedProvider() { return this.caver !== undefined; }

    constructor() {
        super();
        this.checkConnected();
    }

    private async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }

    public async loadAddress(): Promise<string | undefined> {
        return this.caver === undefined ? undefined : (await this.caver.klay.getAccounts())[0];
    }

    public async loadChainId() {
        return this.caver === undefined ? -1 : await this.caver.klay.getChainId();
    }

    public async loadBlockNumber() {
        return this.caver === undefined ? -1 : await this.caver.klay.getBlockNumber();
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        await this.klaytn?.enable();
        this.checkConnected();
    }

    public createContract(address: string, abi: any) {
        return this.caver === undefined ? undefined : new this.caver.klay.Contract(abi, address);
    }
}

export default new Wallet();
