import msg from "msg.js";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BrowserInfo from "./BrowserInfo";
import FullyOnChain from "./view/achievements/FullyOnChain";
import Activities from "./view/Activities";
import DogeSound from "./view/activity/DogeSound";
import MateMessage from "./view/activity/MateMessage";
import MateName from "./view/activity/MateName";
import Gallery from "./view/Gallery";
import Home from "./view/Home";
import Layout from "./view/Layout";
import Mate from "./view/Mate";
import MateDetail from "./view/MateDetail";
import Terms from "./view/Terms";

msg.language = BrowserInfo.language;

ReactDOM.render(
    <Layout>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/mate" component={Mate} />
                <Route exact path="/mate/:mateId" component={MateDetail} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/activities" component={Activities} />
                <Route exact path="/activity/dogesound" component={DogeSound} />
                <Route exact path="/activity/matename" component={MateName} />
                <Route exact path="/activity/matemessage" component={MateMessage} />
                <Route exact path="/achievement/fully-on-chain" component={FullyOnChain} />
                <Route exact path="/terms" component={Terms} />
            </Switch>
        </Router>
    </Layout>
    , document.getElementById("root"))
