import { Component } from "react";
export default class DogeSoundContest extends Component<{}, {
    round: number;
    period: number;
    remains: number;
    mateBalance: number;
    votedMateCount: number;
    candidateMateCount: number;
    walletAddress?: string;
    selectedCandidate: number;
}> {
    private interval;
    constructor(props: {});
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
//# sourceMappingURL=DogeSoundContest.d.ts.map