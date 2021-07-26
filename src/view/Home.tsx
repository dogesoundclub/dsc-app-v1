import msg from "msg.js";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import SloganContract from "../contracts/SloganContract";
import Wallet from "../klaytn/Wallet";

export default class Home extends Component<{}, {
    round: number,
    slogan: string,
}> {

    constructor(props: {}) {
        super(props);
        this.state = { round: -2, slogan: "" };
    }

    public async componentDidMount() {
        sessionStorage.removeItem("__spa_path");

        const round = (await SloganContract.getRound()).toNumber() - 1
        const elected = (await SloganContract.getElected(round)).toNumber();

        let slogan = "";
        try {
            slogan = await SloganContract.getCandidate(round, elected);
        } catch (e) {/* ignore. */ }

        this.setState({ round, slogan });
    }

    public render() {
        return <>
            <main id="home">
                <img id="logo" src="/images/logo.png" srcSet="/images/logo@2x.png 2x"></img>
                <header>
                    <div className="welcome">
                        {msg({
                            ko: "도지사운드클럽에 온 것을 환영합니다 !",
                            en: "WELCOME TO THE DOGE SOUND CLUB!"
                        })}
                    </div>
                    <div className="intro">
                        {msg({
                            ko: "도지사운드클럽은 NFT에 기반한 거버넌스가 수행되는 NFT 수집가들의 사교 모임입니다.",
                            en: "Doge Sound Club is a social gathering of NFT collectors where NFT-based governance is carried out."
                        })}
                        <br /><br />
                        {msg({
                            ko: "MATES를 이용해서 클럽에 가입하고 투표할 수 있습니다.",
                            en: "You can join the club and vote by NFT MATES."
                        })}
                    </div>
                    <div className="slogan">
                        <img src="/images/top.png" srcSet="/images/top@2x.png 2x" />
                        <div className="panel">
                            {Wallet.existsInjectedProvider !== true && <>
                                {msg({
                                    ko: "클레이튼 네트워크를 찾을 수 없습니다. Kaikas를 설치해주시기 바랍니다.",
                                    en: "The Klaytn Network could not be found. Please install Kaikas."
                                })}
                            </>}
                            {Wallet.existsInjectedProvider === true && this.state.round === -2 && <>
                                {msg({
                                    ko: "최다득표를 받은 도지사운드(개소리)를 확인하려면, 카이카스에 접속하세요.",
                                    en: "To check the Doge Sound(Pathological lie) that received the most votes, log in to Kaikas."
                                })}
                            </>}
                            {this.state.round === -1 && <>
                                {msg({
                                    ko: "아직 도지사운드(개소리) 경연이 시작되지 않았습니다.",
                                    en: "The Doge Sound (Pathological lie) competition hasn't started yet."
                                })}
                            </>}
                            {this.state.round >= 0 && <>
                                {msg({
                                    ko: `제 ${this.state.round + 1} 회 최고의 도지사운드를 발표합니다.`,
                                    en: `Announcing the best dogesound of ${this.state.round + 1} th competition`,
                                })}<br />
                                {msg({
                                    ko: `ㅡ ${this.state.slogan}`,
                                    en: `ㅡ ${this.state.slogan}`
                                })}
                            </>}
                        </div>
                        <div className="panel-intro">
                            {msg({
                                ko: "* 주의 : 위는 탈중앙화된 방식으로 DSC 홀더들에게 최다 득표를 받은 문구가 자동으로 표시된 것입니다. DSC 개발팀의 뜻과 무관할 수 있습니다.",
                                en: "* Note: The above is an automatic display of the phrase that received the most votes from DSC holders in a decentralized voting way. It may not be the will of the DSLAB.",
                            })}
                        </div>
                    </div>
                </header>
                <section>
                    <h2>{msg({
                        ko: "도지사운드클럽 특징",
                        en: "CLUB FEATURES"
                    })}</h2>
                    <p>
                        {msg({
                            ko: "- 우리는 개소리에 진심인 자들입니다. : 2주마다 스마트 컨트랙트를 이용해 최고의 도지사운드(개소리)를 선정합니다.",
                            en: "- We are sincere about pathological lies. : Every 2 weeks, the best doge sound (pathological lies) is selected through smart contract"
                        })}
                        <br /><br />
                        {msg({
                            ko: "- 우리는 암호화폐를 좋아합니다 : 특히 새로운 도전들에 대한 이야기를 좋아합니다.",
                            en: "- We love cryptocurrencies: When cryptocurrencies fail, so do we.."
                        })}
                        <br /><br />
                        {msg({
                            ko: "- 우리는 음악를 좋아합니다 : 음악은 개소리와 함께 자본에 대한 집착을 환기하는 수단이 됩니다. dsc 개발팀은 DJ SET과 로우파이 비디오를 업로드합니다.",
                            en: "- We love music: Music is a means of evoking our obsession with capital, along with bullshit. dsc development team uploads DJ SET and lofi videos."
                        })}
                    </p>
                </section>
                <section>
                    <div className="banner">
                        <img src="/images/stamps1.png" srcSet="/images/stamps1@2x.png 2x" />
                        <img src="/images/stamps2.png" srcSet="/images/stamps2@2x.png 2x" />
                    </div>
                    <h2>NFT - DOGESOUNDCLUB MATES</h2>
                    <p>
                        {msg({
                            ko: "- DSC MATES는 컴퓨터 프로그램으로 생성된 10,000개의 24*24 픽셀 아트 캐릭터입니다. NFT(암호화폐의 한 규격)로 발행되어 이들에 대한 소유권을 쉽게 거래할 수 있습니다.",
                            en: "- DSC MATES are 10,000 computer program generated 24*24 pixel art characters. They are issued as NFTs (a specification of cryptocurrency), making it easy to trade ownership of them.."
                        })}<br />
                        <a href="/mate">{msg({
                            ko: "▶ NFT에 대한 자세한 내용보러 가기",
                            en: "▶ Go to see more details about NFT"
                        })}</a><br />
                        <a href="/activities">{msg({
                            ko: "▶ 이걸로 무엇을 할 수 있나요?",
                            en: "▶ What can I do with this NFT?"
                        })}</a><br />
                        <br />
                        {msg({
                            ko: "- 메이트는 오픈씨(세계 최대 NFT 거래소)에서 구입할 수 있습니다.",
                            en: "- Mates can be purchased at Opensea."
                        })}<br />
                        <a href="https://opensea.io/collection/dogesoundclub-mates">{msg({
                            ko: "▶ OPENSEA로 이동",
                            en: "▶ Go to Opensea"
                        })}</a><br />
                        {msg({
                            ko: "(클레이 토큰이 없다면, dogesoundclub@gmail.com 로 연락하세요.)",
                            en: "(If you do not have a klay token, please contact dogesoundclub@gmail.com.)"
                        })}
                    </p>
                </section>
                <section>
                    <h2>{msg({
                        ko: "사명",
                        en: "DSC'S MISSION"
                    })}</h2>
                    <p>
                        {msg({
                            ko: "- DSC의 사명은 NFT에 기반한 거버넌스를 통해 사회에 선한 영향력을 결집해내는데에 있습니다.",
                            en: "- DSC's mission is to gather good influence on society through NFT-based governance.",
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
                                en: "Activate the club activity 'Doge Sound Competition'."
                            })}<br />
                            <a href="/activities">{msg({
                                ko: "▶ 도지사운드 경연이 뭔가요?",
                                en: "▶ What is the Doge Sound Competition?",
                            })}</a>
                        </p>
                    </div>
                    <div className="loadmap">
                        <h3>50 %</h3>
                        <p>
                            {msg({
                                ko: "홀더들의 소통을 위해 게시판 '도지소리'를 활성화합니다.",
                                en: "Activate 'Doge Sori' for the holders's communication"
                            })}
                        </p>
                    </div>
                    <div className="loadmap">
                        <h3>70 %</h3>
                        <p>
                            {msg({
                                ko: "정기 정모를 위한 개더타운맵을 공개합니다.",
                                en: "Release a gather town map for regular gathring.",
                            })}
                        </p>
                    </div>
                    <div className="loadmap">
                        <h3>100 %</h3>
                        <p>
                            {msg({
                                ko: "클레이튼 토큰 '믹스'를 발행합니다. 메이트 홀더에게 일정 발행량이 배분됩니다.",
                                en: "Issue klaytn token 'Mix'. A certain amount of issuance is allocated to mate holders."
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
                            ko: "- ARVITOR (Manager) : 그림을 조합하는 프로그램을 만들었습니다. 슈퍼 컬렉터가 되고 싶습니다.",
                            en: "- ARVITOR (Manager) : I made program that combines pictures. I wanna be a super collector."
                        })}<br />
                        {msg({
                            ko: "- HANUL (Dev) : 블록체인 프로그래밍 종결자.",
                            en: "- HANUL (Dev) : Virtuoso in blockchain programming."
                        })}<br />
                        {msg({
                            ko: "- YONG JIN (Artist) : 메이트와 일러스트를 그려 주었습니다.",
                            en: "- YONG JIN (Artist) : Drew illustrations and mates."
                        })}
                    </p>
                </section>
                <section>
                    <h2>CONTACT</h2>
                    <p>
                        {msg({
                            ko: "- 카카오톡 : ",
                            en: "- KAKAOTALK :"
                        })}<a href="https://open.kakao.com/o/gFJzBJ5c">https://open.kakao.com/o/gFJzBJ5c</a><br />
                        {msg({
                            ko: "- 트위터 : ",
                            en: "- TWITTER :"
                        })}<a href="https://twitter.com/dogesoundclub">https://twitter.com/dogesoundclub</a><br />
                        {msg({
                            ko: "- 인스타그램 : ",
                            en: "- INSTAGRAM : "
                        })}@dogesoundclub<br />
                        {msg({
                            ko: "- 유튜브 : ",
                            en: "- YOUTUBE : "
                        })}<a href="https://www.youtube.com/channel/UCnt1jjJpL-YdHNcooykdY4w">https://www.youtube.com/channel/UCnt1jjJpL-YdHNcooykdY4w</a><br />
                        {msg({
                            ko: "- 이메일 : ",
                            en: "- E-mail : "
                        })}dogesoundclub@gmail.com
                    </p>
                </section>
            </main>
            {sessionStorage.__spa_path && <Redirect to={sessionStorage.__spa_path} />}
        </>;
    }
}
