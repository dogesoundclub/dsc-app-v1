import msg from "msg.js";
import { Component } from "react";
import SkyUtil from "skyutil";
import MessageContract from "../../contracts/MessageContract";
import MateMessage from "./MateMessage";

interface MateMessageListProps {
    mateId: number,
    name: string,
}

export default class MateMessageList extends Component<MateMessageListProps, {
    count: number,
}> {

    constructor(props: MateMessageListProps) {
        super(props);
        this.state = { count: 0 };
    }

    public async componentDidMount() {
        const mateId = this.props.mateId;
        const count = (await MessageContract.recordCount(mateId)).toNumber();
        this.setState({ count });
    }

    public render() {
        return <div className="mate-message-list">
            <h3>{msg({
                ko: `${this.props.name}에게 남겨진 메시지들`
            })}</h3>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "15%" }}>BLOCK #</th>
                        <th style={{ width: "10%" }}>NAME</th>
                        <th style={{ width: "55%" }}>MSG</th>
                        <th style={{ width: "20%" }}>HOLDER ADDR</th>
                    </tr>
                </thead>
                <tbody>
                    {SkyUtil.repeat(this.state.count, (index: number) => <MateMessage key={index} mateId={this.props.mateId} index={index} />)}
                </tbody>
            </table>
        </div>;
    }
}
