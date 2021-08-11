import { Component } from "react";

interface MateMessageProps {
    mateId: number;
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
        </div>;
    }
}
