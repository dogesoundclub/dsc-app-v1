import { Component } from "react";

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
            <div className="language">● language : 한국어</div>
            {this.props.children}
            <footer>
                © 2021 DSLAB<br />
                <a href="/terms">TERMS &#38; CONDITIONS</a>
            </footer>
        </>;
    }
}
