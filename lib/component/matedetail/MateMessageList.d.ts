import { Component } from "react";
interface MateMessageListProps {
    mateId: number;
    name: string;
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