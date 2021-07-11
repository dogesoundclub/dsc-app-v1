import { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
    public render() {
        return <>
            <main id="home">
                <img id="logo" src="/images/logo.png" srcSet="/images/logo@2x.png 2x"></img>
                <header>
                    <div className="panel">
                        제 2939455 회 개소리 경연 우승작<br />
                        "비트코인은 인류 최대의 뻘짓입니다."
                    </div>
                </header>
                <section>
                    <h2>도지사운드클럽에 온 것을 환영합니다 !</h2>
                    <p>
                        - 도지사운드클럽은 농담(도지사운드), 밈을 즐기는 암호화폐 홀더, 제작자들을 위한 모임입니다.
                    </p>
                </section>
                <section>
                    <h2>도지사운드클럽 특징</h2>
                    <p>
                        - 우리는 개소리에 진심인 자들입니다. : 2주마다 스마트 컨트랙트를 이용해 최고의 도지사운드(개소리)를 선정합니다.<br />
                        <br />
                        - 우리는 암호화폐를 좋아합니다 : 특히 새로운 도전들에 대한 이야기를 좋아합니다.<br />
                        <br />
                        - 우리는 음악를 좋아합니다 : 음악은 개소리와 함께 자본에 대한 집착을 환기하는 수단이 됩니다. dsc 개발팀은 DJ SET과 로우파이 비디오를 업로드합니다.
                    </p>
                </section>
                <section>
                    <div className="banner">
                        <img src="/images/stamps.png" srcSet="/images/stamps@2x.png 2x" />
                    </div>
                    <h2>NFT - DOGESOUNDCLUB MATES</h2>
                    <p>
                        - DSC MATES는 컴퓨터 프로그램으로 생성된 10,000개의 24*24 픽셀 아트 캐릭터입니다. NFT(암호화폐의 한 규격)로 발행되어 이들에 대한 소유권을 쉽게 거래할 수 있습니다.<br />
                        <a href="/">▶ NFT에 대한 자세한 내용보러 가기</a><br />
                        <a href="/">▶ 이걸로 무엇을 할 수 있나요?</a><br />
                        <br />
                        - 메이트는 오픈씨(세계 최대 NFT 거래소)에서 구입할 수 있습니다.<br />
                        <a href="https://opensea.io/collection/dogesoundclub-mates">▶ OPENSEA로 이동</a><br />
                        (클레이 토큰이 없다면, dogesoundclub@gmail.com 로 연락하세요.)
                    </p>
                </section>
                <section>
                    <h2>목표</h2>
                    <p>
                        - DSC의 최종 목표는 메타버스 나이트클럽을 제작하는 것입니다. 인류가 자본의 축척만으로 도달할 수 없는 삶의 재미에 대한 갈증을 해소합니다.
                    </p>
                    <iframe className="video" width="1147" height="648" src="https://www.youtube.com/embed/7Cwri2QKsAQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </section>
                <section>
                    <h2>ROADMAP ACTIVATIONS</h2>
                    <div className="loadmap">
                        <h3>30 %</h3>
                        <p>RELEASE LOFI VIDEO OF DSC</p>
                    </div>
                    <div className="loadmap">
                        <h3>50 %</h3>
                        <p>
                            RELEASE CLUB ACTIVITY 'AMONGUS'<br />
                            <a href="/">▶ WHAT IS 'AMONGUS'</a>
                        </p>
                    </div>
                    <div className="loadmap">
                        <h3>70 %</h3>
                        <p>RELEASE A BOARD FOR HOLDERS</p>
                    </div>
                    <div className="loadmap">
                        <h3>100 %</h3>
                        <p>
                            ISSUE DSC MATES V2 ON ETHEREUM CHAIN.<br />
                            INTIAL OWNERS WILL BE OWNER OF DSC MATES V1 IN KLAYTN.
                        </p>
                    </div>
                </section>
                <section>
                    <h2>Team</h2>
                    <p>
                        - arvitor (manager) : dsc till i die.<br />
                        - hanul (developer)<br />
                        - yong jin (designer)
                    </p>
                    <div className="bottom-banner">
                        <img src="/images/team.png" srcSet="/images/team@2x.png 2x" />
                    </div>
                </section>
            </main>
            {sessionStorage.__spa_path && <Redirect to={sessionStorage.__spa_path} />}
        </>;
    }

    public componentDidMount() {
        sessionStorage.removeItem("__spa_path");
    }
}
