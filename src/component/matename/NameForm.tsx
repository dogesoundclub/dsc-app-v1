import Debouncer from "@hanul/debouncer";
import msg from "msg.js";
import { ChangeEvent, Component } from "react";
import MateContract from "../../contracts/MateContract";
import NameContract from "../../contracts/NameContract";
import Wallet from "../../klaytn/Wallet";

export default class NameForm extends Component<{}, {
    mateId: number,
    name: string,
    notMateHolder: boolean,
    nameExists: boolean,
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            mateId: -1,
            name: "",
            notMateHolder: false,
            nameExists: false,
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

    private nameChangeDebouncer: Debouncer = new Debouncer(100, async () => {
        if (await NameContract.exists(this.state.name) === true) {
            this.setState({ nameExists: true });
        } else {
            this.setState({ nameExists: false });
        }
    });

    private handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: event.target.value });
        this.nameChangeDebouncer.run();
    };

    private register = async () => {
        if (this.state.notMateHolder !== true && this.state.nameExists !== true) {
            await NameContract.set(this.state.mateId, this.state.name);
            setTimeout(() => location.reload(), 1000);
        }
    };

    public render() {
        return <div className="name-form">
            <div className="content">
                <input className="mate-id" onChange={this.handleMateIdChange} />
                <span>
                    {msg({
                        ko: "번 메이트의 이름을",
                    })}
                </span>
                <input className="name" onChange={this.handleNameChange} />
                <span>
                    {msg({
                        ko: "로 짓겠습니다.",
                    })}
                </span>
            </div>
            {isNaN(this.state.mateId) !== true && this.state.notMateHolder && <p className="error">
                {msg({
                    ko: `${this.state.mateId}번 메이트 홀더가 아닙니다.`,
                })}
            </p>}
            {this.state.nameExists && <p className="error">
                {msg({
                    ko: "이미 존재하는 이름입니다.",
                })}
            </p>}
            <a onClick={this.register}>{msg({
                ko: "제출하기",
            })}</a>
        </div>;
    }
}
