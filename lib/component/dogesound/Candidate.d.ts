import { Component } from "react";
interface CandidateProps {
    round: number;
    index: number;
}
export default class Candidate extends Component<CandidateProps, {
    slogan: string;
}> {
    constructor(props: CandidateProps);
    componentDidMount(): Promise<void>;
    private vote;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Candidate.d.ts.map