import msg from "msg.js";
import { Component } from "react";
import NameForm from "../../component/matename/NameForm";
import OwnedMates from "../../component/OwnedMates";

export default class MateName extends Component {
    public render() {
        return <main id="matename">
            <div className="menu-bar">
                <h4>Activities</h4>
                <ul className="menus">
                    <li className="menu">
                        <a href="/activity/dogesound">- Dogesound</a>
                    </li>
                    <li className="menu on">
                        <a href="/activity/matename">- Name Your Mate</a>
                    </li>
                    <li className="menu">
                        <a href="/activity/matemessage">- Indelible MSG</a>
                    </li>
                </ul>
            </div>
            <h1>{msg({
                ko: "메이트 이름 짓기"
            })}</h1>
            <p>
                {msg({
                    ko: "메이트에게 이름을 지어주세요. 메이트가 이름이 없었다면, 가스비만을 지불하면 이름을 지어줄 수 있습니다. 하지만 변경을 하려면, 100 믹스를 지불해야 합니다. 또한 메이트의 이름은 결코 삭제할 수 없습니다. 다른 메이트와 똑같은 이름을 사용할 수 없습니다. 메이트 이름은 갤러리에 표시됩니다."
                })}
            </p>
            <NameForm />
            <OwnedMates />
        </main>;
    }
}
