import msg from "msg.js";
import { Component } from "react";

interface CandidateProps {
    candidate: {
        slogan: string,
        votes: number,
    },
    select: () => void,
}

export default class Candidate extends Component<CandidateProps> {
    public render() {
        return <>
            <h6 onClick={this.props.select}>{this.props.candidate.slogan}</h6>
            <span>
                {msg({
                    ko: `득표 수 : ${this.props.candidate.votes}`,
                })}
            </span>
        </>;
    }
}
