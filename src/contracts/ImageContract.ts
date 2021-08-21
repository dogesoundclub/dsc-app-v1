import { BigNumber, BigNumberish } from "ethers";
import Config from "../Config";
import Contract from "./Contract";

class ImageContract extends Contract {

    constructor() {
        super(Config.contracts.Image, require("./ImageContractABI.json"));
    }

    public async image(mateId: BigNumberish): Promise<string> {
        const contract = await this.loadWalletContract();
        return await contract.methods.image(mateId).call();
    }
}

export default new ImageContract();
