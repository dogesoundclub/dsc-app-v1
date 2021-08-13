import msg from "msg.js";
import { ChangeEvent, Component } from "react";
import NameContract from "../../contracts/NameContract";

export default class NameForm extends Component<{}, {
    mateId: number,
    name: string,
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            mateId: -1,
            name: "",
        };
    }

    private handleMateIdChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ mateId: parseInt(event.target.value, 10) });
    };

    private handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: event.target.value });
    };

    private register = async () => {
        await NameContract.set(this.state.mateId, this.state.name);
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
            <a onClick={this.register}>{msg({
                ko: "제출하기",
            })}</a>
        </div>;
    }
}
