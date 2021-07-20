import msg from "msg.js";
import { Component } from "react";
import SloganContract from "../../contracts/SloganContract";

interface CandidateProps {
    round: number,
    index: number;
}

export default class Candidate extends Component<CandidateProps, {
    slogan: string,
}> {

    constructor(props: CandidateProps) {
        super(props);
        this.state = { slogan: "" };
    }

    public async componentDidMount() {
        const elected = (await SloganContract.getElected(this.props.round)).toNumber();

        let slogan = "";
        try {
            slogan = await SloganContract.getCandidate(this.props.round, elected);
        } catch (e) {/* ignore. */ }

        this.setState({ slogan });
    }

    private vote = async () => {
        await SloganContract.vote(this.props.index, 10);
    };

    public render() {
        return <div>
            {this.state.slogan}
            <a className="vote-button" onClick={this.vote}>{msg({
                ko: "투표하기",
            })}</a>
        </div>;
    }
}
