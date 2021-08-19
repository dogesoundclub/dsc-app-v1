import msg from "msg.js";
import { ChangeEvent, Component } from "react";
import MessageContract from "../../contracts/MessageContract";

export default class MessageForm extends Component<{}, {
    mateId: number,
    message: string,
    pass: boolean,
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            mateId: -1,
            message: "",
            pass: false,
        };
    }

    private handleMateIdChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ mateId: parseInt(event.target.value, 10) });
    };

    private handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ message: event.target.value });
    };

    private handleTermsChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ pass: event.target.checked });
    };

    private register = async () => {
        if (this.state.pass === true) {
            await MessageContract.set(this.state.mateId, this.state.message);
            setTimeout(() => location.reload(), 1000);
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
