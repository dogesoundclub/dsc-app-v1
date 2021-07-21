import { Component } from "react";
interface CandidateListProps {
    period: number;
    onSelectCandidate: (candidate: number) => void;
}
export default class CandidateList extends Component<CandidateListProps, {
    round: number;
    candidateCount: number;
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