import msg from "msg.js";
import { Component } from "react";
import MessageForm from "../../component/matemessage/MessageForm";
import OwnedMates from "../../component/OwnedMates";
import Wallet from "../../klaytn/Wallet";

export default class MateMessage extends Component<{}, {
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
        return <main id="matemessage">
            <div className="menu-bar">
                <h4>Activities</h4>
                <ul className="menus">
                    <li className="menu">
                        <a href="/activity/dogesound">- Dogesound</a>
                    </li>
                    <li className="menu">
                        <a href="/activity/matename">- Name Your Mate</a>
                    </li>
                    <li className="menu on">
                        <a href="/activity/matemessage">- Indelible MSG</a>
                    </li>
                </ul>
            </div>
            <h1>{msg({
                ko: "지울 수 없는 메시지"
            })}</h1>
            <p>
                {msg({
                    ko: "당신이 보유한 메이트에게 메시지를 남길 수 있습니다. 하루에 한 번 짧은 일기 또는 메모를 남길 수 있습니다. 조심하세요! 한번 제출된 일기는 클레이튼 블록체인에 기록되며, 개발팀도 지울 수 없습니다. 당신의 흑역사를 대대손손 남기지 않으려면 정신을 바짝 차려야 할 것입니다. 일기는 타인이 열람할 수 있습니다."
                })}
            </p>
            <MessageForm />
            <OwnedMates />
        </main>;
    }
}
