import { BigNumber } from "ethers";
import { Component } from "react";
import MessageContract from "../../contracts/MessageContract";

interface MateMessageProps {
    mateId: number,
    index: number,
}

export default class MateMessage extends Component<MateMessageProps, {
    owner: string,
    name: string,
    message: string,
    blockNumber?: number,
}> {

    constructor(props: MateMessageProps) {
        super(props);
        this.state = { owner: "", name: "", message: "" };
    }

    public async componentDidMount() {
        const record = await MessageContract.record(this.props.mateId, this.props.index);
        this.setState({
            owner: record.owner,
            name: record.name,
            message: record.message,
            blockNumber: parseInt(record.blockNumber, 10),
        });
    }

    public render() {
        return <tr>
            <td>{this.state.blockNumber}</td>
            <td>{this.state.name}</td>
            <td>{this.state.message}</td>
            <td>{this.state.owner.substring(0, 10)}...</td>
        </tr>;
    }
}
