import { Component } from "react";
interface MateMessageProps {
    mateId: number;
    index: number;
}
export default class MateMessage extends Component<MateMessageProps, {
    owner: string;
    name: string;
    message: string;
    blockNumber?: number;
}> {
    constructor(props: MateMessageProps);
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=MateMessage.d.ts.map