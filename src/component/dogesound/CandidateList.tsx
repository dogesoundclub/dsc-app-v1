import { Component } from "react";
import SloganContract from "../../contracts/SloganContract";

export default class CandidateList extends Component<{}, {}> {

    public async componentDidMount() {
        const round = (await SloganContract.getRound()).toNumber();
        console.log(await SloganContract.getCandidateCount(round));
    }

    public render() {
        return <></>;
    }
}
