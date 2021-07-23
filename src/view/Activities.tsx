import msg from "msg.js";
import { Component } from "react";

export default class Activities extends Component {
    public render() {
        return <main id="activities">
            <div className="menu-bar">
                <h4>Activities</h4>
                <ul className="menus">
                    <li className="menu">
                        <a href="/activity/dogesound">- Dogesound</a>
                    </li>
                    <li className="menu ready">
                        <a>- Amongus</a>
                    </li>
                </ul>
            </div>
            <h1>ACTIVITIES</h1>
            <section>
                <p>
                    {msg({
                        ko: "dsc는 dsc 정체성에 적합한 클럽 활동들을 제공합니다. 발행한 nft를 활용한 기존에 없는 신선한 시도들을 하고 있습니다. 현재 도지사운드 경연만이 제공되고 있습니다.",
                    })}
                </p>
            </section>
            <section>
                <h2><a href="/activity/dogesound">dogesound competition (only MATES HOLDERS can join)</a></h2>
                <p>
                    {msg({
                        ko: "dogesound competiion은 클레이튼 체인 위에서 작동되는 개소리 경연입니다. 30개 이상의 메이트를 사용하면 개소리 후보를 제출할 수 있습니다. 최다 득표를 받은 도지사운드는 웹페이지 메인에 자동으로 게시됩니다. 사용한 메이트는 다음 회에 다시 사용할 수 있습니다. 도지사운드 후보 제출 또는 투표는 메이트 소유권에 일체 영향을 주지 않습니다. (개소리 예시 : 비트코인은 인류 최대의 뻘짓입니다. 또는 DSC가 좋아할만한 아무 문구)",
                    })}
                </p>
            </section>
            <section>
                <h2 className="ready">amongus (not released)</h2>
                <p>
                    {msg({
                        ko: "dsc 클럽에 살인 사건이 발생합니다. (가상) 1만개 메이트 중 하나가 범인입니다. 범인을 잡기 위해 관련 증언을 공개하겠습니다. 이를 밝혀낸 분에게 암호화폐 또는 nft로 보상합니다. (범인은 무작위로 추첨된 후 게임이 진행됩니다. - 개발이 미확정된 활동입니다.)",
                    })}
                </p>
            </section>
        </main>;
    }
}
