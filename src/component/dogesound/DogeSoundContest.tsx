import msg from "msg.js";
import { Component } from "react";
import MateContract from "../../contracts/MateContract";
import SloganContract from "../../contracts/SloganContract";
import Wallet from "../../klaytn/Wallet";
import CandidateList from "./CandidateList";
import PeriodTriangle from "./PeriodTriangle";
import RegisterCandidateForm from "./RegisterCandidateForm";
import VoteButton from "./VoteButton";

export default class DogeSoundContest extends Component<{}, {

    round: number,
    period: number,
    remains: number,

    mateBalance: number,
    votedMateCount: number,
    candidateMateCount: number,

    walletAddress?: string,

    selectedCandidate: number,
}> {

    private interval: any | undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            round: -1, period: -1, remains: -1,
            mateBalance: 0,
            votedMateCount: 0,
            candidateMateCount: -1,
            selectedCandidate: 0,
        };
    }

    public async componentDidMount() {

        const round = (await SloganContract.getRound()).toNumber();
        const user = await Wallet.loadAddress();

        this.setState({
            round,
            period: (await SloganContract.getPeriod()).toNumber(),
            remains: (await SloganContract.getRemains()).toNumber(),
            mateBalance: user === undefined ? 0 : (await MateContract.balanceOf(user)).toNumber(),
            votedMateCount: user === undefined ? 0 : (await SloganContract.getUserVotes(round, user)).toNumber(),
            candidateMateCount: (await SloganContract.getCandidateMateCount()).toNumber(),
            walletAddress: await Wallet.loadAddress(),
        });

        this.interval = setInterval(() => {
            if (this.state.remains === 1) {
                location.reload();
            } else {
                this.setState({
                    remains: this.state.remains - 1,
                });
            }
        }, 1000);
    }

    public componentWillUnmount() {
        if (this.interval !== undefined) {
            clearInterval(this.interval);
        }
    }

    public render() {
        return <div className="doge-sound-contest">
            <PeriodTriangle period={this.state.period} />
            {this.state.period === SloganContract.HOLIDAY_PERIOD && <div className="message">
                <h4>
                    {msg({
                        ko: `??? ${this.state.round}??? ?????? ????????? ?????????????????????.`,
                    })}<br />
                    {msg({
                        ko: `?????? ???????????? ${this.state.remains} ?????? ??????.`,
                    })}
                </h4>
                <p>
                    {msg({
                        ko: "- ????????? ?????????????????? ???????????? ????????? ?????????????????????.",
                    })}
                </p>
            </div>}
            {this.state.period === SloganContract.REGISTER_CANDIDATE_PERIOD && <div className="message">
                <h4>
                    {msg({
                        ko: `??? ${this.state.round + 1}??? ?????? ????????? ?????? ????????????.`,
                    })}<br />
                    {msg({
                        ko: `?????? ???????????? ${this.state.remains} ?????? ??????.`,
                    })}
                </h4>
                <p>
                    {msg({
                        ko: "- ?????? ?????? : ",
                    })}<a href={`https://opensea.io/${this.state.walletAddress}`}>{this.state.walletAddress}</a>
                    <br />
                    {msg({
                        ko: `- ?????? ?????? ????????? ??? : ${this.state.mateBalance}???`,
                    })}
                    <br />
                    {msg({
                        ko: `- ????????? ??? ?????? ????????? ??? : ${this.state.mateBalance - this.state.votedMateCount} ??? (>= ${this.state.candidateMateCount}?????? ?????? ?????? ??????)`,
                    })}
                </p>
            </div>}
            {this.state.period === SloganContract.VOTE_PERIOD && <div className="message">
                <h4>
                    {msg({
                        ko: `??? ${this.state.round + 1}??? ?????? ????????? ?????? ??? ?????????.`,
                    })}<br />
                    {msg({
                        ko: `?????? ???????????? ${this.state.remains} ?????? ??????.`,
                    })}
                </h4>
                <p>
                    {msg({
                        ko: "- ?????? ?????? : ",
                    })}<a href={`https://opensea.io/${this.state.walletAddress}`}>{this.state.walletAddress}</a>
                    <br />
                    {msg({
                        ko: `- ?????? ?????? ????????? ??? : ${this.state.mateBalance}???`,
                    })}
                    <br />
                    {msg({
                        ko: `- ?????? ?????? ????????? ??? : ${this.state.mateBalance - this.state.votedMateCount}???`,
                    })}
                    <br />
                    {msg({
                        ko: "* ???????????????! ?????? ????????? ????????? ???????????? ?????? ????????? ?????? ????????????.",
                    })}
                </p>
            </div>}
            {this.state.period === SloganContract.REGISTER_CANDIDATE_PERIOD && <RegisterCandidateForm candidateMateCount={this.state.candidateMateCount} />}
            {this.state.period === SloganContract.VOTE_PERIOD && <VoteButton candidate={this.state.selectedCandidate} />}
            {this.state.period === SloganContract.HOLIDAY_PERIOD && <a className="holiday-vote-button">{msg({
                ko: "????????????",
            })}</a>}
            <CandidateList period={this.state.period} onSelectCandidate={(candidate) => {
                this.setState({ selectedCandidate: candidate });
            }} />
        </div>;
    }
}
