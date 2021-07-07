import { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
    public render() {
        return <>
            <main id="home">
                <img id="logo" src="/images/logo.png" srcSet="/images/logo@2x.png 2x"></img>
                <header>
                </header>
            </main>
            {sessionStorage.__spa_path && <Redirect to={sessionStorage.__spa_path} />}
        </>;
    }

    public componentDidMount() {
        sessionStorage.removeItem("__spa_path");
    }
}
