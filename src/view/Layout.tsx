import { Component, MouseEvent } from "react";
import BrowserInfo from "../BrowserInfo";

export default class Layout extends Component<{}, {
    showingNav: boolean,
}> {

    constructor(props: {}) {
        super(props);
        this.state = { showingNav: false };
    }

    private clickMenuButtonHandler = (event: MouseEvent) => {
        this.setState({ showingNav: this.state.showingNav !== true });
        event.stopPropagation();
    };

    private clickBodyHandler = () => {
        if (this.state.showingNav === true) {
            this.setState({ showingNav: false });
        }
    };

    public componentDidMount() {
        document.body.addEventListener("click", this.clickBodyHandler);
    }

    public componentWillUnmount() {
        document.body.removeEventListener("click", this.clickBodyHandler);
    }

    public render() {
        return <>
            <header className={this.state.showingNav === true ? "showing" : "hiding"} onClick={(e) => e.stopPropagation()}>
                <a href="/">HOME</a>
                <a href="/mate">NFT</a>
                <a href="/gallery">GALLERY</a>
                <a href="/activities">ACTIVITIES</a>
                <div className="language">● LANG : <select value={BrowserInfo.language.substring(0, 2)} onChange={(event) => BrowserInfo.changeLanguage(event.target.value)}>
                    <option value="ko">한국어</option>
                    <option value="en">English</option>
                </select></div>
            </header>
            <a className="menu-button" onClick={this.clickMenuButtonHandler}><img src="/images/menu-button.png" srcSet="/images/menu-button@2x.png 2x" /></a>
            {this.props.children}
            <footer>
                © 2021 DSLAB<br />
                <a href="/terms">TERMS &#38; CONDITIONS</a>
            </footer>
        </>;
    }
}
