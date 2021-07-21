import msg from "msg.js";
import { Component } from "react";
import SloganContract from "../../contracts/SloganContract";

export default class PeriodTriangle extends Component<{
    period: number
}, {}> {
    public render() {
        return <div className="period-triangle">
            {this.props.period === SloganContract.HOLIDAY_PERIOD && <img src="/images/period-holiday.png" srcSet="/images/period-holiday@2x.png 2x" />}
            {this.props.period === SloganContract.REGISTER_CANDIDATE_PERIOD && <img src="/images/period-register.png" srcSet="/images/period-register@2x.png 2x" />}
            {this.props.period === SloganContract.VOTE_PERIOD && <img src="/images/period-vote.png" srcSet="/images/period-vote@2x.png 2x" />}
            <h5 className={`holiday${this.props.period === SloganContract.HOLIDAY_PERIOD ? " on" : ""}`}>{msg({
                ko: "쉬는 중",
            })}</h5>
            <h5 className={`register${this.props.period === SloganContract.REGISTER_CANDIDATE_PERIOD ? " on" : ""}`}>{msg({
                ko: "도지사운드 후보 접수 중",
            })}</h5>
            <h5 className={`vote${this.props.period === SloganContract.VOTE_PERIOD ? " on" : ""}`}>{msg({
                ko: "투표 중",
            })}</h5>
        </div>;
    }
}
