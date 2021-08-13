import { Component } from "react";
interface MateMessageListProps {
    mateId: number;
}
export default class MateMessageList extends Component<MateMessageListProps, {
    count: number;
}> {
    constructor(props: MateMessageListProps);
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=MateMessageList.d.ts.map