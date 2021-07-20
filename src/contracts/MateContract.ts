import { BigNumber } from "ethers";
import Config from "../Config";
import Contract from "./Contract";

class MateContract extends Contract {

    constructor() {
        super(Config.contracts.Mate, require("./MateContractABI.json"), [
        ]);
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        const contract = await this.loadWalletContract();
        return BigNumber.from(contract === undefined ? -1 : await contract.methods.balanceOf(owner).call());
    }
}

export default new MateContract();
