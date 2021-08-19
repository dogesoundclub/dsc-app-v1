import { Component } from "react";
import SkyUtil from "skyutil";
import MessageContract from "../../contracts/MessageContract";
import MateMessage from "./MateMessage";

interface MateMessageListProps {
    mateId: number,
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
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "15%" }}>BLOCK #</th>
                        <th style={{ width: "15%" }}>NAME</th>
                        <th style={{ width: "45%" }}>MSG</th>
                        <th style={{ width: "25%" }}>HOLDER ADDR</th>
                    </tr>
                </thead>
                <tbody>
                    {SkyUtil.repeat(this.state.count, (index: number) => <MateMessage key={index} mateId={this.props.mateId} index={index} />)}
                </tbody>
            </table>
        </div>;
    }
}
