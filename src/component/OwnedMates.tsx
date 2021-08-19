import msg from "msg.js";
import { Component } from "react";
import MateContract from "../contracts/MateContract";
import Wallet from "../klaytn/Wallet";
import Mate from "./Mate";

export default class OwnedMates extends Component<{}, {
    walletAddress?: string,
    mates: number[],
}> {

    constructor(props: {}) {
        super(props);
        this.state = { mates: [] };
    }

    public async componentDidMount() {
        const walletAddress = await Wallet.loadAddress();
        if (walletAddress !== undefined) {
            const balance = (await MateContract.balanceOf(walletAddress)).toNumber();

            const mates: number[] = [];
            const promises: Promise<void>[] = [];
            for (let i = 0; i < balance; i += 1) {
                const promise = async (index: number) => {
                    const mateId = await MateContract.tokenOfOwnerByIndex(walletAddress, index);
                    mates.push(mateId.toNumber());
                };
                promises.push(promise(i));
            }
            await Promise.all(promises);

            this.setState({
                walletAddress,
                mates,
            });
        }
    }

    public render() {
        return <div className="owned-mates">
            <p>
                {msg({
                    ko: "- 지갑 주소 : ",
                })}<a href={`https://opensea.io/${this.state.walletAddress}`}>{this.state.walletAddress}</a>
                <br />
                {msg({
                    ko: "- 보유 중인 메이트",
                })}
            </p>
            <div className="mate-list">
                {this.state.mates.map((mate, index) => <Mate key={index} mateId={mate} />)}
            </div>
        </div>;
    }
}
