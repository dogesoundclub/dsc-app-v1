import { Component } from "react";
import BrowserInfo from "../BrowserInfo";

export default class Layout extends Component {

    public render() {
        return <>
            <header>
                <a href="/">HOME</a>
                <a href="/mate">NFT</a>
                <a href="/gallary">GALLARY</a>
                <a href="/activities">ACTIVITIES</a>
                <a className="ready" href="/">BOARD</a>
            </header>
            <div className="language">● language : <select value={BrowserInfo.language.substring(0, 2)} onChange={(event) => BrowserInfo.changeLanguage(event.target.value)}>
                <option value="ko">한국어</option>
                <option value="en">English</option>
            </select></div>
            {this.props.children}
            <footer>
                © 2021 DSLAB<br />
                <a href="/terms">TERMS &#38; CONDITIONS</a>
            </footer>
        </>;
    }
}
