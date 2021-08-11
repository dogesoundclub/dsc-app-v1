import msg from "msg.js";
import { ChangeEvent, Component } from "react";
import SloganContract from "../../contracts/SloganContract";
import Candidate from "./Candidate";

interface CandidateListProps {
    period: number,
    onSelectCandidate: (candidate: number) => void,
}

interface CandidateInfo {
    index: number,
    slogan: string,
    votes: number,
}

export default class CandidateList extends Component<CandidateListProps, {
    loaded: boolean,
    round: number,
    candidates: CandidateInfo[],
    selectedCandidate: number,
}> {

    constructor(props: CandidateListProps) {
        super(props);
        this.state = { loaded: false, round: -1, candidates: [], selectedCandidate: 0 };
    }

    public async componentDidMount() {

        const round = (await SloganContract.getRound()).toNumber();
        const candidateCount = (await SloganContract.getCandidateCount(round)).toNumber();

        let candidates: CandidateInfo[] = [];
        const promises: Promise<void>[] = [];

        for (let i = 0; i < candidateCount; i += 1) {
            const promise = async (index: number) => {
                let slogan = "";
                try {
                    slogan = await SloganContract.getCandidate(round, index);
                } catch (e) {/* ignore. */ }

                const votes = (await SloganContract.getVotes(round, index)).toNumber();

                candidates.push({ index, slogan, votes });
            };
            promises.push(promise(i));
        }

        await Promise.all(promises);

        candidates = candidates.sort((a, b) => {
            return b.votes - a.votes;
        });

        this.setState({ loaded: true, round, candidates, selectedCandidate: candidates[0] === undefined ? 0 : candidates[0].index });
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
                {this.state.loaded === false ? msg({
                    ko: "로딩중...",
                }) : msg({
                    ko: "진행중인 투표 도지사운드 후보들 :",
                })}
            </p>
            <ul>
                {this.state.candidates.map((candidate: CandidateInfo) => <li key={candidate.index}>
                    {this.props.period === SloganContract.VOTE_PERIOD && <input type="radio" name="candidate" value={candidate.index} checked={this.state.selectedCandidate === candidate.index} onChange={this.handleRadioCheck} />}
                    <Candidate candidate={candidate} select={() => {
                        this.handleCandidateChange(candidate.index);
                    }} />
                </li>)}
            </ul>
        </div>;
    }
}
