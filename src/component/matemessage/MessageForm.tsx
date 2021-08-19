import Debouncer from "@hanul/debouncer";
import msg from "msg.js";
import { ChangeEvent, Component } from "react";
import MateContract from "../../contracts/MateContract";
import MessageContract from "../../contracts/MessageContract";
import Wallet from "../../klaytn/Wallet";

export default class MessageForm extends Component<{}, {
    mateId: number,
    message: string,
    notMateHolder: boolean,
    termChecked: boolean,
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            mateId: -1,
            message: "",
            notMateHolder: false,
            termChecked: false,
        };
    }

    private mateIdChangeDebouncer: Debouncer = new Debouncer(100, async () => {
        const walletAddress = await Wallet.loadAddress();
        if (walletAddress === undefined || await MateContract.ownerOf(this.state.mateId) !== walletAddress) {
            this.setState({ notMateHolder: true });
        } else {
            this.setState({ notMateHolder: false });
        }
    });

    private handleMateIdChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ mateId: parseInt(event.target.value, 10) });
        this.mateIdChangeDebouncer.run();
    };

    private handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ message: event.target.value });
    };

    private handleTermsChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ termChecked: event.target.checked });
    };

    private register = async () => {
        if (this.state.notMateHolder !== true && this.state.termChecked === true) {
            if ((await MessageContract.remainBlocks(this.state.mateId)).toNumber() !== 0) {
                alert(msg({
                    ko: `${this.state.mateId}번 메이트에게 메시지를 남긴지 아직 24시간이 지나지 않았습니다.`,
                }));
            } else {
                await MessageContract.set(this.state.mateId, this.state.message);
                setTimeout(() => location.reload(), 1000);
            }
        }
    };

    public render() {
        return <div className="message-form">
            <div className="content">
                <span>
                    {msg({
                        ko: "다음 메시지를",
                    })}
                </span>
                <input className="message" onChange={this.handleMessageChange} />
                <input className="mate-id" onChange={this.handleMateIdChange} />
                <span>
                    {msg({
                        ko: "번 메이트에게 남깁니다.",
                    })}
                </span>
            </div>
            {isNaN(this.state.mateId) !== true && this.state.notMateHolder && <p className="error">
                {msg({
                    ko: `${this.state.mateId}번 메이트 홀더가 아닙니다.`,
                })}
            </p>}
            <div className="terms">
                <input type="checkbox" onChange={this.handleTermsChange} />
                <p>
                    {msg({
                        ko: "나는 제출된 일기가 변경 또는 삭제가 불가능하다는 블록체인의 속성을 잘 이해하고 있습니다. 나는 제출된 메시지와 같이 제출된 정보(제출 당시 메이트 이름, 제출 당시 메이트 소유주의 지갑 주소) 공개에 따른 모든 책임을 온전히 홀로 지는 것에 동의합니다. 나는 클레이튼 블록체인에 접속하기 위해 내가 선택한 이 도구와 관련하여 어떤 책임도 타인에게 물을 수 없다는 것에 대해 동의합니다.",
                    })}
                </p>
            </div>
            <a onClick={this.register}>{msg({
                ko: "제출하기",
            })}</a>
        </div>;
    }
}
