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
                <h2 className="ready">AMONGUS (Not released)</h2>
                <p>
                
                    {msg({
                     //   ko: "DSC 클럽에 살인 사건이 발생합니다. (가상) 1만개 메이트 중 하나가 범인입니다. 범인을 잡기 위해 관련 증언을 공개하겠습니다. 이를 밝혀낸 분에게 암호화폐 또는 nft로 보상합니다. (범인은 무작위로 추첨된 후 게임이 진행됩니다. - 개발이 미확정된 활동입니다.)",
                     //   en: "A murder takes place in the DSC club. One in 10,000 mates is the culprit. (If your mate has been selected as murderer, don't be serious. This is a game !) We will release the relevant testimony to catch the culprit. Those who find out are rewarded with cryptocurrency or NFT. (The culprit is drawn at random and the game starts. - This is an activity whose development has not been confirmed.)"
                    })}
                </p>
            </section>
        </main>;
    }
}
