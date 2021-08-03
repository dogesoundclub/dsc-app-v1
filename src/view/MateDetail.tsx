import msg from "msg.js";
import { Component } from "react";

interface MateDetailProps {
    match: { params: any };
}

export default class MateDetail extends Component<MateDetailProps> {
    public render() {
        console.log(this.props.match.params.mateId);
        return <main id="matedetail">
            <div className="menu-bar">
                <h4>NFT</h4>
                <ul className="menus">
                    <li className="menu on">
                        <a href="mate">- DSC Mates</a>
                    </li>
                    <li className="menu ready">
                        <a>- DSC eXCLUSIVES</a>
                    </li>
                </ul>
            </div>
            <h1>{msg({
                ko: "메이트 정보",
            })}</h1>
        </main>;
    }
}
