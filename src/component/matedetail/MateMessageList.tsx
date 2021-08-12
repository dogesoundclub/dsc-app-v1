import msg from "msg.js";
import { Component } from "react";

interface MateMessageProps {
    mateId: number,
    name: string,
}

export default class MateMessage extends Component<MateMessageProps, {
}> {

    constructor(props: MateMessageProps) {
        super(props);
        this.state = {};
    }

    public async componentDidMount() {
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
                </tbody>
            </table>
        </div>;
    }
}
