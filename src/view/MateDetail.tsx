import msg from "msg.js";
import { Component } from "react";
import MateMessageList from "../component/matedetail/MateMessageList";
import NameContract from "../contracts/NameContract";

interface MateDetailProps {
    match: { params: any };
}

export default class MateDetail extends Component<MateDetailProps, {
    name: string,
}> {

    constructor(props: MateDetailProps) {
        super(props);
        this.state = { name: "" };
    }

    public async componentDidMount() {
        const mateId = this.props.match.params.mateId;
        const count = (await NameContract.recordCount(mateId)).toNumber();
        if (count > 0) {
            const record = await NameContract.record(mateId, count - 1);
            this.setState({ name: record.name });
        }
    }

    public render() {
        const mateId = this.props.match.params.mateId;
        return <main id="matedetail">
            <div className="menu-bar">
                <h4>NFT</h4>
                <ul className="menus">
                    <li className="menu on">
                        <a href="mate">- DSC Mates</a>
                    </li>
                    <li className="menu ready">
                        <a>- DSC eXCLUSIVES</a>
                    </li>
                </ul>
            </div>
            <img src={`https://storage.googleapis.com/dsc-mate/336/dscMate-${mateId}.png`} />
            <h1>{msg({
                ko: "메이트 정보",
            })}</h1>
            <div>
                {msg({
                    ko: "번호 : ",
                })}
                {mateId}
            </div>
            <div>
                {msg({
                    ko: "이름 : ",
                })}
                {this.state.name}
            </div>
            <a href={`https://opensea.io/assets/klaytn/0xe47e90c58f8336a2f24bcd9bcb530e2e02e1e8ae/${mateId}`}>{msg({
                ko: "▶ 오픈씨에서 확인하기",
            })}</a>
            <MateMessageList mateId={mateId} name={this.state.name} />
        </main>;
    }
}
