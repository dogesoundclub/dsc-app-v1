import EventContainer from "eventcontainer";
export default abstract class Contract extends EventContainer {
    address: string;
    private abi;
    protected walletContract: any | undefined;
    constructor(address: string, abi: any, eventNames: string[]);
    loadWalletContract(): Promise<any>;
}
//# sourceMappingURL=Contract.d.ts.map