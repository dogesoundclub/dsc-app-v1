import { Component } from "react";
import SkyUtil from "skyutil";
import SloganContract from "../../contracts/SloganContract";
import Rank from "./Rank";

export default class RankList extends Component<{}, {
    round: number,
}> {

    constructor(props: {}) {
        super(props);
        this.state = { round: -1 };
    }

    public async componentDidMount() {
        this.setState({ round: (await SloganContract.getRound()).toNumber() });
    }

    public render() {
        return <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>BLOCK #</th>
                    <th>VOTES</th>
                    <th>dogesound</th>
                </tr>
            </thead>
            <tbody>
                {SkyUtil.repeat(this.state.round, (round: number) => <Rank key={round} round={round} />)}
            </tbody>
        </table>;
    }
}
