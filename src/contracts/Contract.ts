import EventContainer from "eventcontainer";
import Config from "../Config";
import Wallet from "../klaytn/Wallet";

export default abstract class Contract extends EventContainer {

    protected walletContract: any | undefined;

    constructor(public address: string, private abi: any, eventNames: string[]) {
        super();
    }

    public async loadWalletContract() {
        if (await Wallet.loadChainId() !== Config.chainId) {
            this.fireEvent("wrongNetwork");
            console.error("Wrong Network");
        } else {
            if (await Wallet.connected() !== true) {
                await Wallet.connect();
            }
            if (this.walletContract === undefined) {
                this.walletContract = Wallet.createContract(this.address, this.abi);
            }
            return this.walletContract;
        }
    }
}
