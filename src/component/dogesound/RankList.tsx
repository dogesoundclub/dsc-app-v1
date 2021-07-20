import { Component } from "react";

export default class RankList extends Component<{}, {}> {
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
                <tr>
                    <td>1</td>
                    <td>634732433</td>
                    <td>1333</td>
                    <td>암호화폐 구입은 희대의 뻘짓이다.</td>
                </tr>
            </tbody>
        </table>;
    }
}
