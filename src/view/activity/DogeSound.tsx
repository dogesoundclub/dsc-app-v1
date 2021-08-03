import msg from "msg.js";
import { Component } from "react";
import DogeSoundContest from "../../component/dogesound/DogeSoundContest";
import RankList from "../../component/dogesound/RankList";
import Wallet from "../../klaytn/Wallet";

export default class DogeSound extends Component<{}, {
    connected?: boolean,
}> {

    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    private connectHandler = () => {
        this.setState({ connected: true });
    };

    public async componentDidMount() {
        Wallet.on("connect", this.connectHandler);
        this.setState({ connected: await Wallet.connected() });
    }

    public componentWillUnmount() {
        Wallet.off("connect", this.connectHandler);
    }

    public render() {
        return <main id="dogesound">
            <div className="menu-bar">
                <h4>Activities</h4>
                <ul className="menus">
                    <li className="menu on">
                        <a href="/activity/dogesound">- Dogesound</a>
                    </li>
                    <li className="menu">
                        <a href="/activity/matename">- Name Your Mate</a>
                    </li>
                    <li className="menu">
                        <a href="/activity/matemessage">- Indelible MSG</a>
                    </li>
                </ul>
            </div>
            <img className="top-image" src="/images/dogesound.png" />
            <section>
                <h2>{msg({
                    ko: "도지사운드 경연 규칙",
                    en: "DOGESOUND COMPETITION RULE"
                })}</h2>
                <p>
                    {msg({
                        ko: "20개 이상의 메이트를 사용하면 개소리 후보를 제출할 수 있습니다.(경연 상태가 후보 접수 중일 경우. 도지사운드 후보 예시 : 비트코인은 인류 최대의 뻘짓입니다. , DSC는 쓰레기를 수집합니다.) 최다 득표를 받은 도지사운드는 웹페이지 메인에 자동으로 게시됩니다. 후보 제출 또는 투표에 사용한 메이트는 해당 투표에서 다시 사용할 수 없습니다.",
                        en: "If you have 20 or more mates, you can submit a nominee. (If the contest status is accepting nominations. Example of Doge Sound candidate : Bitcoin is the biggest bullshit of mankind. , DSC collects garbage.) Doge Sound with the most votes is automatically posted on the main web page. A mate used to submit or vote for a candidate cannot be reused in that vote. "
                    })}
                    <span className="important">{msg({
                        ko: "도지사운드 후보 제출 또는 투표 활동은 메이트 소유권에 일체 영향을 주지 않습니다.",
                        en: "Doge sound nomination submissions or voting activities do not affect mate ownership in any way."
                    })}</span>
                    <br /><br />
                    {msg({
                        ko: "경연은 365일 항시 가동됩니다. 경연은 총 3가지 단계(후보 접수 중, 투표 중, 휴식)로 구성되며, 일정한 시간 간격으로 상태가 전환되며 진행됩니다. 후보 접수는 1일(약 86,400 블록), 투표는 1일(약 86,400 블록), 휴식은 12일(약 1,036,800 블록)으로 2주를 주기로 한 사이클을 돌게 됩니다.",
                        en: "The contest is open 365 days a year. The contest consists of a total of three stages (candidate reception, voting, rest), and the status changes at regular time intervals. Reception of candidates is for 1 day (about 86,400 blocks), voting is for 1 day (about 86,400 blocks), and rest is for 12 days (about 1,036,800 blocks)."
                    })}
                </p>
            </section>
            <section>
                <h2>{msg({
                    ko: "도지사운드 역대 우승작",
                    en: "DOGESOUND WINNER HISTORY"
                })}</h2>
                {Wallet.existsInjectedProvider !== true && <>
                    {msg({
                        ko: "클레이튼 네트워크를 찾을 수 없습니다. Kaikas를 설치해주시기 바랍니다.",
                        en: "The Klaytn Network could not be found. Please install Kaikas."
                    })}
                </>}
                {Wallet.existsInjectedProvider === true && this.state.connected === false && <>
                    {msg({
                        ko: "카이카스에 로그인하세요.",
                    })}
                </>}
                {Wallet.existsInjectedProvider === true && this.state.connected === true && <RankList />}
            </section>
            <section>
                <h2>{msg({
                    ko: "도지사운드 경연 현황판",
                    en: "Doge Sound Contest Status Board"
                })}</h2>
                {Wallet.existsInjectedProvider !== true && <>
                    {msg({
                        ko: "클레이튼 네트워크를 찾을 수 없습니다. Kaikas를 설치해주시기 바랍니다.",
                        en: "The Klaytn Network could not be found. Please install Kaikas."
                    })}
                </>}
                {Wallet.existsInjectedProvider === true && this.state.connected === false && <>
                    {msg({
                        ko: "카이카스에 로그인하세요.",
                    })}
                </>}
                {Wallet.existsInjectedProvider === true && this.state.connected === true && <DogeSoundContest />}
            </section>
        </main>;
    }
}
