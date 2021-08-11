import { Component } from "react";
interface CandidateProps {
    candidate: {
        slogan: string;
        votes: number;
    };
    select: () => void;
}
export default class Candidate extends Component<CandidateProps> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Candidate.d.ts.map