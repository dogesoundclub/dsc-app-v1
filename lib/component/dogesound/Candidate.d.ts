import { Component } from "react";
interface CandidateProps {
    round: number;
    index: number;
    select: () => void;
}
export default class Candidate extends Component<CandidateProps, {
    slogan: string;
    votes: number;
}> {
    constructor(props: CandidateProps);
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Candidate.d.ts.map