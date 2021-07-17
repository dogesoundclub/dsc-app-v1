import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Activities from "./view/Activities";
import Gallary from "./view/Gallary";
import Home from "./view/Home";
import Layout from "./view/Layout";
import Mate from "./view/Mate";
import Terms from "./view/Terms";

const Caver = require("caver-js");

ReactDOM.render(
    <Layout>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/mate" component={Mate} />
                <Route exact path="/gallary" component={Gallary} />
                <Route exact path="/activities" component={Activities} />
                <Route exact path="/terms" component={Terms} />
            </Switch>
        </Router>
    </Layout>
    , document.getElementById("root"))
