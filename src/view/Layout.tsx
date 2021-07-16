import { Component } from "react";

export default class Layout extends Component {
    public render() {
        return <>
            <header>
                <a href="/">HOME</a>
                <a href="https://testnets.opensea.io/collection/dogesoundclub-mates-v3">NFT</a>
                <a href="/gallary">GALLARY</a>
                <a href="/activities">ACTIVITIES</a>
                <a href="/">BOARD</a>
            </header>
            {this.props.children}
            <footer>
                © 2021 DSLAB<br />
                <a href="/terms">TERMS &#38; CONDITIONS</a>
            </footer>
        </>;
    }
}
