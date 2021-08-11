import { Component } from "react";
interface CandidateListProps {
    period: number;
    onSelectCandidate: (candidate: number) => void;
}
interface CandidateInfo {
    slogan: string;
    votes: number;
}
export default class CandidateList extends Component<CandidateListProps, {
    loaded: boolean;
    round: number;
    candidates: CandidateInfo[];
    selectedCandidate: number;
}> {
    constructor(props: CandidateListProps);
    componentDidMount(): Promise<void>;
    private handleCandidateChange;
    private handleRadioCheck;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=CandidateList.d.ts.map