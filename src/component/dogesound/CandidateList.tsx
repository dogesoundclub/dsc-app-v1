import msg from "msg.js";
import { ChangeEvent, Component } from "react";
import SkyUtil from "skyutil";
import SloganContract from "../../contracts/SloganContract";
import Candidate from "./Candidate";

interface CandidateListProps {
    period: number,
    onSelectCandidate: (candidate: number) => void,
}

export default class CandidateList extends Component<CandidateListProps, {
    round: number,
    candidateCount: number,
    selectedCandidate: number,
}> {

    constructor(props: CandidateListProps) {
        super(props);
        this.state = { round: -1, candidateCount: -1, selectedCandidate: 0 };
    }

    public async componentDidMount() {
        const round = (await SloganContract.getRound()).toNumber();
        this.setState({
            round,
            candidateCount: (await SloganContract.getCandidateCount(round)).toNumber(),
        });
    }

    private handleCandidateChange = (candidate: number) => {
        this.setState({ selectedCandidate: candidate });
        this.props.onSelectCandidate(candidate);
    };

    private handleRadioCheck = (event: ChangeEvent<HTMLInputElement>) => {
        this.handleCandidateChange(parseInt(event.target.value, 10));
    };

    public render() {
        return <div className="candidate-list">
            <p>
                {msg({
                    ko: "진행중인 투표 도지사운드 후보들 :",
                })}
            </p>
            <ul>
                {SkyUtil.repeat(this.state.candidateCount, (candidate: number) => <li key={candidate}>
                    {this.props.period === SloganContract.VOTE_PERIOD && <input type="radio" name="candidate" value={candidate} checked={this.state.selectedCandidate === candidate} onChange={this.handleRadioCheck} />}
                    <Candidate round={this.state.round} index={candidate} select={() => {
                        this.handleCandidateChange(candidate);
                    }} />
                </li>)}
            </ul>
        </div>;
    }
}
