import msg from "msg.js";
import { ChangeEvent, Component } from "react";
import SloganContract from "../../contracts/SloganContract";

interface VoteButtonProps {
    candidate: number;
}

export default class VoteButton extends Component<VoteButtonProps, {
    count: number,
}> {

    constructor(props: VoteButtonProps) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    private handleCountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const count = parseInt(event.target.value, 10);
        if (isNaN(count) !== true) {
            this.setState({ count });
        }
    };

    private vote = async () => {
        if (this.state.count > 0) {
            await SloganContract.vote(this.props.candidate, this.state.count);
            setTimeout(() => location.reload(), 1000);
        }
    };

    public render() {
        return <div className="vote-button">
            <input value={this.state.count} onChange={this.handleCountChange} />
            <span>
                {msg({
                    ko: "개를 이용하여",
                })}
            </span>
            <a onClick={this.vote}>{msg({
                ko: "투표하기",
            })}</a>
        </div>;
    }
}
