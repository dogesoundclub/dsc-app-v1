import { Component } from "react";
interface RankProps {
    round: number;
}
export default class Rank extends Component<RankProps, {
    block: number;
    votes: number;
    slogan: string;
}> {
    constructor(props: RankProps);
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Rank.d.ts.map