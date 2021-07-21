import msg from "msg.js";
import { Component } from "react";
import SloganContract from "../../contracts/SloganContract";

interface CandidateProps {
    round: number,
    index: number,
    select: () => void,
}

export default class Candidate extends Component<CandidateProps, {
    slogan: string,
    votes: number,
}> {

    constructor(props: CandidateProps) {
        super(props);
        this.state = { slogan: "", votes: 0 };
    }

    public async componentDidMount() {

        let slogan = "";
        try {
            slogan = await SloganContract.getCandidate(this.props.round, this.props.index);
        } catch (e) {/* ignore. */ }

        this.setState({
            slogan,
            votes: (await SloganContract.getVotes(this.props.round, this.props.index)).toNumber(),
        });
    }

    public render() {
        return <>
            <h6 onClick={this.props.select}>{this.state.slogan}</h6>
            <span>
                {msg({
                    ko: `득표 수 : ${this.state.votes}`,
                })}
            </span>
        </>;
    }
}
