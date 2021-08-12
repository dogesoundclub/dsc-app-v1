import { Component } from "react";
interface MateMessageProps {
    mateId: number;
    name: string;
}
export default class MateMessage extends Component<MateMessageProps, {}> {
    constructor(props: MateMessageProps);
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=MateMessageList.d.ts.map