import { BigNumber, BigNumberish } from "ethers";
import Contract from "./Contract";
export interface MessageRecord {
    owner: string;
    message: string;
    blockNumber: BigNumber;
}
declare class MessageContract extends Contract {
    constructor();
    set(mateId: BigNumberish, message: string): Promise<void>;
    recordCount(mateId: BigNumberish): Promise<BigNumber>;
    record(mateId: BigNumberish, index: BigNumberish): Promise<MessageRecord>;
}
declare const _default: MessageContract;
export default _default;
//# sourceMappingURL=MessageContract.d.ts.map