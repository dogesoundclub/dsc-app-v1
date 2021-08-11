import { Component } from "react";
import SloganContract from "../../contracts/SloganContract";

interface MateMessageProps {
    message: string;
}

export default class MateMessage extends Component<MateMessageProps, {}> {

    constructor(props: MateMessageProps) {
        super(props);
        this.state = {};
    }

    public render() {
        return <tr></tr>;
    }
}
