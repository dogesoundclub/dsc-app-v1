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
        const chainId = await this.caver?.rpc.klay.getChainId();
        return chainId === undefined ? -1 : chainId;
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        await this.klaytn?.enable();
        this.checkConnected();
    }

    public createContract(address: string, abi: any) {
        return new this.caver?.contract(abi, address);
    }
}

export default new Wallet();
