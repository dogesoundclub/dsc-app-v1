import { Component } from "react";
interface VoteButtonProps {
    candidate: number;
}
export default class VoteButton extends Component<VoteButtonProps, {
    count: number;
}> {
    constructor(props: VoteButtonProps);
    private handleCountChange;
    private vote;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=VoteButton.d.ts.map