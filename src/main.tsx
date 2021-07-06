import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./view/Home";

const Caver = require("caver-js");

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </Router>
    , document.getElementById("root"))
