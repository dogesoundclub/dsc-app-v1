import { BigNumber, ContractInterface, ethers } from "ethers";
import Contract from "../Contract";
export default abstract class KIP17Contract<CT extends ethers.Contract> extends Contract<CT> {
    constructor(address: string, abi: ContractInterface, eventNames: string[]);
    getName(): Promise<string>;
    getTotalSupply(): Promise<BigNumber>;
}
//# sourceMappingURL=KIP17Contract.d.ts.map