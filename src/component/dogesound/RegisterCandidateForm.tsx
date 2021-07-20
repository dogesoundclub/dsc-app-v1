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
            count: 30,
        };
    }

    private handleSloganChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ slogan: event.target.value });
    };

    private handleCountChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ count: parseInt(event.target.value, 10) });
    };

    private register = async () => {
        await SloganContract.registerCandidate(this.state.slogan, this.state.count);
    };

    public render() {
        return <div>
            {msg({
                ko: "도지사운드 후보 :",
            })}
            <input value={this.state.slogan} onChange={this.handleSloganChange} />
            <input value={this.state.count} onChange={this.handleCountChange} />
            {msg({
                ko: "개를 이용하여",
            })}
            <a className="register-candidate-form" onClick={this.register}>{msg({
                ko: "제출하기",
            })}</a>
        </div>;
    }
}
