import { Component } from "react";
import SkyUtil from "skyutil";
import SloganContract from "../../contracts/SloganContract";
import Candidate from "./Candidate";

export default class CandidateList extends Component<{}, {
    round: number,
    candidateCount: number,
}> {

    constructor(props: {}) {
        super(props);
        this.state = { round: -1, candidateCount: -1 };
    }

    public async componentDidMount() {
        const round = (await SloganContract.getRound()).toNumber();
        this.setState({
            round,
            candidateCount: (await SloganContract.getCandidateCount(round)).toNumber(),
        });
    }

    public render() {
        return <div>
            {SkyUtil.repeat(this.state.candidateCount, (index: number) => <Candidate key={index} round={this.state.round} index={index} />)}
        </div>;
    }
}
