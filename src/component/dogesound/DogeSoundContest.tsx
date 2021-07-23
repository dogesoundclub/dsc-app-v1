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
                        ko: `제 ${this.state.round}회 경연 투표가 종료되었습니다.`,
                    })}<br />
                    {msg({
                        ko: `다음 단계까지 ${this.state.remains} 블록 남음.`,
                    })}
                </h4>
                <p>
                    {msg({
                        ko: "- 채택된 도지사운드는 웹사이트 메인에 게시되었습니다.",
                    })}
                </p>
            </div>}
            {this.state.period === SloganContract.REGISTER_CANDIDATE_PERIOD && <div className="message">
                <h4>
                    {msg({
                        ko: `제 ${this.state.round + 1}회 경연 후보를 접수 중입니다.`,
                    })}<br />
                    {msg({
                        ko: `다음 단계까지 ${this.state.remains} 블록 남음.`,
                    })}
                </h4>
                <p>
                    {msg({
                        ko: "- 지갑 주소 : ",
                    })}{this.state.walletAddress}
                    <br />
                    {msg({
                        ko: `- 보유 중인 메이트 수 : ${this.state.mateBalance}개`,
                    })}
                    <br />
                    {msg({
                        ko: `- 사용할 수 있는 메이트 수 : ${this.state.mateBalance - this.state.votedMateCount} 개 (>= ${this.state.candidateMateCount}개일 경우 사용 가능)`,
                    })}
                </p>
            </div>}
            {this.state.period === SloganContract.VOTE_PERIOD && <div className="message">
                <h4>
                    {msg({
                        ko: `제 ${this.state.round + 1}회 경연 투표가 진행 중 입니다.`,
                    })}<br />
                    {msg({
                        ko: `다음 단계까지 ${this.state.remains} 블록 남음.`,
                    })}
                </h4>
                <p>
                    {msg({
                        ko: "- 지갑 주소 : ",
                    })}{this.state.walletAddress}
                    <br />
                    {msg({
                        ko: `- 보유 중인 메이트 수 : ${this.state.mateBalance}개`,
                    })}
                    <br />
                    {msg({
                        ko: `- 활용 가능 메이트 수 : ${this.state.mateBalance - this.state.votedMateCount}개`,
                    })}
                    <br />
                    {msg({
                        ko: "* 안심하세요! 투표 참여는 당신의 소유권에 전혀 영향을 주지 않습니다.",
                    })}
                </p>
            </div>}
            {this.state.period === SloganContract.REGISTER_CANDIDATE_PERIOD && <RegisterCandidateForm candidateMateCount={this.state.candidateMateCount} />}
            {this.state.period === SloganContract.VOTE_PERIOD && <VoteButton candidate={this.state.selectedCandidate} />}
            {this.state.period === SloganContract.HOLIDAY_PERIOD && <a className="holiday-vote-button">{msg({
                ko: "투표하기",
            })}</a>}
            <CandidateList period={this.state.period} onSelectCandidate={(candidate) => {
                this.setState({ selectedCandidate: candidate });
            }} />
        </div>;
    }
}
