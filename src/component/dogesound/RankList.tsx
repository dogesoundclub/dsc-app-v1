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
        return <div className="rank-list">
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "10%" }}>#</th>
                        <th style={{ width: "20%" }}>BLOCK #</th>
                        <th style={{ width: "15%" }}>VOTES</th>
                        <th style={{ width: "55%" }}>dogesound</th>
                    </tr>
                </thead>
                <tbody>
                    {SkyUtil.repeat(this.state.round, (round: number) => <Rank key={this.state.round - round - 1} round={this.state.round - round - 1} />)}
                </tbody>
            </table>
        </div>;
    }
}
