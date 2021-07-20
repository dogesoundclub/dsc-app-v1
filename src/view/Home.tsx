import msg from "msg.js";
import { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
    public render() {
        return <>
            <main id="home">
                <img id="logo" src="/images/logo.png" srcSet="/images/logo@2x.png 2x"></img>
                <header>
                    <div className="welcome">
                        {msg({
                            ko: "도지사운드클럽에 온 것을 환영합니다 !",
                        })}
                    </div>
                    <div className="intro">
                        {msg({
                            ko: "도지사운드클럽은 개소리(도지사운드)를 즐기는 유쾌한 nft 홀더들을 위한 가상의 나이트클럽입니다.",
                        })}
                    </div>
                    <div className="panel">
                        {msg({
                            ko: "제 12 회 도지사운드(개소리) 경연 우승작은\n'비트코인은 인류 최대의 뻘짓입니다.'가 되었습니다.",
                        })}
                    </div>
                    <div className="panel-intro">
                        {msg({
                            ko: "* 주의 : 위는 탈중앙화된 방식으로 DSC 홀더들에게 최다 득표를 받은 문구가 자동으로 표시된 것입니다. DSC 개발팀의 뜻과 무관할 수 있습니다.",
                        })}
                    </div>
                </header>
                <section>
                    <h2>{msg({
                        ko: "도지사운드클럽 특징",
                    })}</h2>
                    <p>
                        {msg({
                            ko: "- 우리는 개소리에 진심인 자들입니다. : 2주마다 스마트 컨트랙트를 이용해 최고의 도지사운드(개소리)를 선정합니다.",
                        })}
                        <br /><br />
                        {msg({
                            ko: "- 우리는 암호화폐를 좋아합니다 : 특히 새로운 도전들에 대한 이야기를 좋아합니다.",
                        })}
                        <br /><br />
                        {msg({
                            ko: "- 우리는 음악를 좋아합니다 : 음악은 개소리와 함께 자본에 대한 집착을 환기하는 수단이 됩니다. dsc 개발팀은 DJ SET과 로우파이 비디오를 업로드합니다.",
                        })}
                    </p>
                </section>
                <section>
                    <div className="banner">
                        <img src="/images/stamps.png" srcSet="/images/stamps@2x.png 2x" />
                    </div>
                    <h2>NFT - DOGESOUNDCLUB MATES</h2>
                    <p>
                        {msg({
                            ko: "- DSC MATES는 컴퓨터 프로그램으로 생성된 10,000개의 24*24 픽셀 아트 캐릭터입니다. NFT(암호화폐의 한 규격)로 발행되어 이들에 대한 소유권을 쉽게 거래할 수 있습니다.",
                        })}<br />
                        <a href="/mate">{msg({
                            ko: "▶ NFT에 대한 자세한 내용보러 가기",
                        })}</a><br />
                        <a href="/activities">{msg({
                            ko: "▶ 이걸로 무엇을 할 수 있나요?",
                        })}</a><br />
                        <br />
                        {msg({
                            ko: "- 메이트는 오픈씨(세계 최대 NFT 거래소)에서 구입할 수 있습니다.",
                        })}<br />
                        <a href="https://opensea.io/collection/dogesoundclub-mates">{msg({
                            ko: "▶ OPENSEA로 이동",
                        })}</a><br />
                        {msg({
                            ko: "(클레이 토큰이 없다면, dogesoundclub@gmail.com 로 연락하세요.)",
                        })}
                    </p>
                </section>
                <section>
                    <h2>{msg({
                        ko: "목표",
                    })}</h2>
                    <p>
                        {msg({
                            ko: "- DSC의 최종 목표는 메타버스 나이트클럽을 제작하는 것입니다. 인류가 자본의 축척만으로 도달할 수 없는 삶의 재미에 대한 갈증을 해소합니다.",
                        })}
                    </p>
                    <iframe className="video" width="1147" height="648" src="https://www.youtube.com/embed/7Cwri2QKsAQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </section>
                <section>
                    <h2>ROADMAP ACTIVATIONS</h2>
                    <div className="loadmap">
                        <h3>30 %</h3>
                        <p>
                            {msg({
                                ko: "클럽 활동 '도지사운드 경연'을 활성화합니다.",
                            })}<br />
                            <a href="/activities">{msg({
                                ko: "▶ 도지사운드 경연이 뭔가요?",
                            })}</a>
                        </p>
                    </div>
                    <div className="loadmap">
                        <h3>50 %</h3>
                        <p>
                            {msg({
                                ko: "홀더들의 자취를 남길 수 있도록 게시판 '도지보드'를 활성화합니다.",
                            })}
                        </p>
                    </div>
                    <div className="loadmap">
                        <h3>70 %</h3>
                        <p>
                            {msg({
                                ko: "개더타운을 이용한 정모를 엽니다.",
                            })}
                        </p>
                    </div>
                    <div className="loadmap">
                        <h3>100 %</h3>
                        <p>
                            {msg({
                                ko: "이더리움 체인 위에 DSC의 두번째 nft를 올립니다. 두번째 nft의 소유자는 클레이튼 체인의 메이트 홀더들이 됩니다.",
                            })}
                        </p>
                    </div>
                </section>
                <section>
                    <h2>Team</h2>
                    <div className="banner">
                        <img src="/images/team.png" srcSet="/images/team@2x.png 2x" />
                    </div>
                    <p>
                        {msg({
                            ko: "- arvitor (manager) : 쓰레기 수집가입니다. 팀원들이 부끄럼을 타서 소개는 전부 제가 적겠습니다.",
                        })}<br />
                        {msg({
                            ko: "- hanul (developer) : 블록체인 프로그래밍 종결자. 이분과 협업을 하게되어 신께 감사를 드립니다.",
                        })}<br />
                        {msg({
                            ko: "- yong jin (designer) : 조소과 출신 공무원. 정말 예술가답지 않게 반듯한 친구. 합류해줘 고마워요.",
                        })}
                    </p>
                </section>
                <section>
                    <h2>CONTACT</h2>
                    <p>
                        {msg({
                            ko: "- 카카오톡 : ",
                        })}<a href="https://open.kakao.com/o/gFJzBJ5c">https://open.kakao.com/o/gFJzBJ5c</a><br />
                        {msg({
                            ko: "- 트위터 : ",
                        })}<a href="https://twitter.com/dogesoundclub">https://twitter.com/dogesoundclub</a><br />
                        {msg({
                            ko: "- 인스타그램 : ",
                        })}@dogesoundclub<br />
                        {msg({
                            ko: "- 유튜브 : ",
                        })}<a href="https://www.youtube.com/channel/UCnt1jjJpL-YdHNcooykdY4w">https://www.youtube.com/channel/UCnt1jjJpL-YdHNcooykdY4w</a><br />
                        {msg({
                            ko: "- 이메일 : ",
                        })}dogesoundclub@gmail.com
                    </p>
                </section>
            </main>
            {sessionStorage.__spa_path && <Redirect to={sessionStorage.__spa_path} />}
        </>;
    }

    public componentDidMount() {
        sessionStorage.removeItem("__spa_path");
    }
}
