import { Component } from "react";
import NameContract from "../contracts/NameContract";

interface MateProps {
    mateId: number;
}

export default class Mate extends Component<MateProps, {
    name: string,
}> {

    constructor(props: MateProps) {
        super(props);
        this.state = { name: "" };
    }

    public async componentDidMount() {
        const count = (await NameContract.recordCount(this.props.mateId)).toNumber();
        if (count > 0) {
            const record = await NameContract.record(this.props.mateId, count - 1);
            this.setState({ name: record.name });
        }
    }

    public render() {
        return <a className="mate" style={{
            backgroundImage: `url(https://storage.googleapis.com/dsc-mate/336/dscMate-${this.props.mateId}.png)`,
        }} href={`/mate/${this.props.mateId}`}>
            <span className="id">#{this.props.mateId}</span>
            <span className="name">{this.state.name}</span>
        </a>;
    }
}
