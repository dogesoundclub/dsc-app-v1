import msg from "msg.js";
import { Component } from "react";

export default class NameForm extends Component<{}, {
    mateId: number,
    name: string,
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            mateId: 0,
            name: "",
        };
    }

    public async componentDidMount() {
    }

    private register = async () => {
    };

    public render() {
        return <div className="name-form">
            <input className="mate-id" />
            <span>
                {msg({
                    ko: "번 메이트의 이름을",
                })}
            </span>
            <input className="name" />
            <span>
                {msg({
                    ko: "로 짓겠습니다.",
                })}
            </span>
            <a onClick={this.register}>{msg({
                ko: "제출하기",
            })}</a>
        </div>;
    }
}
