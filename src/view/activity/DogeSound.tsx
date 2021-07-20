import msg from "msg.js";
import { Component } from "react";
import DogeSoundContest from "../../component/dogesound/DogeSoundContest";
import RankList from "../../component/dogesound/RankList";

export default class DogeSound extends Component {
    public render() {
        return <main id="dogesound">
            <img className="top-image" src="/images/dogesound.png" />
            <section>
                <h2>{msg({
                    ko: "도지사운드 경연 규칙",
                })}</h2>
                <p>
                    {msg({
                        ko: "30개 이상의 메이트를 사용하면 개소리 후보를 제출할 수 있습니다.(경연 상태가 후보 접수 중일 경우.) 최다 득표를 받은 도지사운드는 웹페이지 메인에 자동으로 게시됩니다. 후보 제출 또는 투표에 사용한 메이트는 해당 투표에서 다시 사용할 수 없습니다. 도지사운드 후보 제출 또는 투표 활동은 메이트 소유권에 일체 영향을 주지 않습니다. (도지사운드 후보 예시 : 비트코인은 인류 최대의 뻘짓입니다. 또는 DSC의 정체성을 반영하는 문구 일체.) ",
                    })}
                    <span className="important">{msg({
                        ko: "도지사운드 후보 제출 또는 투표 활동은 메이트 소유권에 일체 영향을 주지 않습니다.",
                    })}</span>
                    {msg({
                        ko: " (도지사운드 후보 예시 : 비트코인은 인류 최대의 뻘짓입니다. 또는 DSC의 정체성을 반영하는 문구 일체.)"
                    })}
                    <br /><br />
                    {msg({
                        ko: "경연은 365일 항시 가동됩니다. 경연은 총 3가지 단계(후보 접수 중, 투표 중, 휴식)로 구성되며, 일정한 시간 간격으로 상태가 전환되며 진행됩니다. 후보 접수는 3일(약 259,200 블록), 투표는 하루(약 86,400 블록), 휴식은 10일(약 864,000 블록)으로 2주를 주기로 한 사이클을 돌게 됩니다. ",
                    })}
                </p>
            </section>
            <section>
                <h2>{msg({
                    ko: "도지사운드 역대 우승작",
                })}</h2>
                <RankList />
            </section>
            <section>
                <h2>{msg({
                    ko: "도지사운드 경연 현황판",
                })}</h2>
                <DogeSoundContest />
            </section>
            <div className="menu-bar">
                <h4>Activities</h4>
                <ul className="menus">
                    <li className="menu on">
                        <a href="/activity/dogesound">- Dogesound</a>
                    </li>
                    <li className="menu ready">
                        <a>- Amongus</a>
                    </li>
                </ul>
            </div>
        </main>;
    }
}
