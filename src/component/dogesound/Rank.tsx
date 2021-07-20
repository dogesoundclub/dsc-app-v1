import { Component } from "react";
import SloganContract from "../../contracts/SloganContract";

interface RankProps {
    round: number;
}

export default class Rank extends Component<RankProps, {
    block: number,
    votes: number,
    slogan: string,
}> {

    constructor(props: RankProps) {
        super(props);
        this.state = { block: -1, votes: 0, slogan: "" };
    }

    public async componentDidMount() {
        const elected = (await SloganContract.getElected(this.props.round)).toNumber();
        this.setState({
            block: (await SloganContract.getRoundBlock(this.props.round)).toNumber(),
            votes: (await SloganContract.getVotes(this.props.round, elected)).toNumber(),
            slogan: await SloganContract.getCandidate(this.props.round, elected),
        });
    }

    public render() {
        return <tr>
            <td>{this.props.round + 1}</td>
            <td>{this.state.block === -1 ? "" : this.state.block}</td>
            <td>{this.state.block === -1 ? "" : this.state.votes}</td>
            <td>{this.state.block === -1 ? "" : this.state.slogan}</td>
        </tr>;
    }
}
