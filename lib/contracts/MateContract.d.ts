import { BigNumber } from "ethers";
import Contract from "./Contract";
declare class MateContract extends Contract {
    constructor();
    balanceOf(owner: string): Promise<BigNumber>;
}
declare const _default: MateContract;
export default _default;
//# sourceMappingURL=MateContract.d.ts.map