import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DogeSound from "./activity/DogeSound";

export default class Activities extends Component {
    public render() {
        return <main id="activities">
            Activities
            <Router>
                <Switch>
                    <Route exact path="/activities/dogesound" component={DogeSound} />
                </Switch>
            </Router>
        </main>;
    }
}
