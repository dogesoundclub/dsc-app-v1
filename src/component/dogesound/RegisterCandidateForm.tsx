import msg from "msg.js";
import { ChangeEvent, Component } from "react";
import SloganContract from "../../contracts/SloganContract";

export default class RegisterCandidateForm extends Component<{}, {
    slogan: string,
    count: number,
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            slogan: "",
            count: 0,
        };
    }

    private handleSloganChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ slogan: event.target.value });
    };

    private handleCountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const count = parseInt(event.target.value, 10);
        if (isNaN(count) !== true) {
            this.setState({ count });
        }
    };

    private register = async () => {
        await SloganContract.registerCandidate(this.state.slogan, this.state.count);
        setTimeout(() => location.reload(), 1000);
    };

    public render() {
        return <div className="register-candidate-form">
            <span>
                {msg({
                    ko: "도지사운드 후보 :",
                })}
            </span>
            <input className="slogan" value={this.state.slogan} onChange={this.handleSloganChange} />
            <div className="count-form">
                <input value={this.state.count} onChange={this.handleCountChange} />
                <span>
                    {msg({
                        ko: "개를 이용하여",
                    })}
                </span>
                <a onClick={this.register}>{msg({
                    ko: "제출하기",
                })}</a>
            </div>
        </div>;
    }
}
