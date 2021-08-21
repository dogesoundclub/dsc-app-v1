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
                    <li className="menu">
                        <a href="/activity/matename">- Name Your Mate</a>
                    </li>
                    <li className="menu">
                        <a href="/activity/matemessage">- Indelible MSG</a>
                    </li>
                </ul>
            </div>
            <h1>ACTIVITIES</h1>
            <section>
                <p>
                    {msg({
                        ko: "DSC는 DSC 정체성에 적합한 클럽 활동들을 제공합니다. 발행한 NFT를 활용한 기존에 없는 신선한 시도들을 하고 있습니다. 현재 도지사운드 경연만이 제공되고 있습니다.",
                        en: "DSC offers club activities that fit the DSC identity. We are making fresh attempts that have not been made before using the issued NFT. Currently, only the Doge Sound Competition is being offered."
                    })}
                </p>
            </section>
            <section>
                <h2><a href="/activity/dogesound">DOGESOUND COMPETITION (Only mate holders can join)</a></h2>
                <p>
                    {msg({
                        ko: "Dogesound competiion은 클레이튼 체인 위에서 작동되는 개소리 경연입니다. 20개 이상의 메이트를 사용하면 개소리 후보를 제출할 수 있습니다. 최다 득표를 받은 도지사운드는 웹페이지 메인에 자동으로 게시됩니다. 사용한 메이트는 다음 회에 다시 사용할 수 있습니다. 도지사운드 후보 제출 또는 투표는 메이트 소유권에 일체 영향을 주지 않습니다. (개소리 예시 : 비트코인은 인류 최대의 뻘짓입니다. 또는 DSC가 좋아할만한 아무 문구)",
                        en: "The dogesound competition is a pathological competition that runs on the Klayton chain. If you have more than 20 mates, you can submit dogesound nominations. Doge Sound that received the most votes is automatically posted on the main web page. A used mate can be used again next competition. Submitting or voting for a DogeSound candidate will not affect mate ownership in any way. (Example of dogesound: Bitcoin is humanity's biggest bullshit, or a phrase that reflects the identity of the DSC)"
                    })}
                </p>
            </section>
            <section>
                <h2><a href="/activity/matename">NAME YOUR MATE</a></h2>
                <p>
                    {msg({
                        ko: "메이트에게 이름을 지어주세요. 메이트가 이름이 없다면, 가스비만을 지불하면 이름을 지어줄 수 있습니다. 하지만 변경을 하려면, 100 믹스를 지불해야 합니다. 또한 메이트의 이름은 결코 삭제할 수 없습니다. 다른 메이트와 똑같은 이름을 사용할 수 없습니다. 이름은 메이트 가격에 영향을 줄 수 있습니다."
                    })}
                </p>
            </section>
            <section>
                <h2><a href="/activity/matemessage">INDELIBLE DIARY</a></h2>
                <p>
                    {msg({
                        ko: "당신이 보유한 메이트에게 메시지를 남길 수 있습니다. 하루에 한 번 짧은 일기 또는 메모를 남길 수 있습니다. 조심하세요! 한번 제출된 일기는 클레이튼 블록체인에 기록되며, 개발팀도 지울 수 없습니다. 당신의 흑역사를 대대손손 남기지 않으려면 정신을 바짝 차려야 할 것입니다. 당신의 기록은 메이트 가격에 영향을 줄 수 있습니다."
                    })}
                </p>
            </section>
        </main>;
    }
}
