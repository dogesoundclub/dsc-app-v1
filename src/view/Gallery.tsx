import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { RouteProps } from "react-router-dom";
import Mate from "../component/Mate";
import database from "../database.json";
import MateParts from "./MateParts.json";

export default class Gallery extends Component<{}, {
    mates: number[],
    page: number,
    filter: { [key: string]: string },
    byId?: number,
}> {

    constructor(props: RouteProps) {
        super(props);
        this.state = { mates: this.getData(0, {}), page: 0, filter: {} };
    }

    private getData(page: number, filter: { [key: string]: string }, byId?: number) {
        const mates = [];

        let count = 0;
        for (const [id, token] of database.collection.entries()) {
            if (byId !== undefined) {
                if (id === byId) {
                    mates.push(id);
                }
            } else {
                let pass = true;
                if (Object.keys(filter).length > 0) {
                    for (const [key, value] of Object.entries(filter)) {
                        if (token.properties[key] !== value && (
                            value !== "None" ||
                            token.properties[key] !== undefined
                        )) {
                            pass = false;
                        }
                    }
                }
                if (pass === true) {
                    if (count === 1024 * (page + 1)) {
                        return mates;
                    }
                    mates.push(id);
                    count += 1;
                }
            }
        }

        return mates;
    }

    private loadMore = () => {
        this.setState({ mates: this.getData(this.state.page + 1, this.state.filter, this.state.byId), page: this.state.page + 1 });
    };

    private filterById(byId: number) {
        this.setState({ mates: this.getData(this.state.page, this.state.filter, byId), byId });
    }

    private addFilter(key: string, value: string) {
        const filter = Object.assign({}, this.state.filter, { [key]: value });
        if (value === "") {
            delete filter[key];
        }
        this.setState({ mates: this.getData(this.state.page, filter, this.state.byId), filter });
    }

    public render() {
        return <main id="gallery">
            <div className="menu-bar">
                <h4>Gallery</h4>
                <ul className="menus">
                    <li className="menu on">
                        <a href="mate">- DSC Mates</a>
                    </li>
                </ul>
                <input className="filter" placeholder="By ID" onChange={(event) => {
                    const id = parseInt(event.target.value, 10);
                    if (isNaN(id) === true) {
                        this.setState({ mates: this.getData(this.state.page, this.state.filter, undefined), byId: undefined });
                    } else {
                        this.filterById(id);
                    }
                }} />
                {Object.entries(MateParts).map(([key, values]) => <select key={key}
                    className="filter"
                    placeholder={key}
                    value={this.state.filter[key] === undefined ? "" : this.state.filter[key]}
                    onChange={(event) => this.addFilter(key, event.target.value)}
                >
                    <option value={""}>{key}</option>
                    <option value={"None"}>None</option>
                    {values.map((value) => <option key={value} value={value}>{value}</option>)}
                </select>)}
                <a className="reset-filter" onClick={() => {
                    this.setState({ mates: this.getData(this.state.page, {}, this.state.byId), filter: {} });
                }}>Reset Filter</a>
                <ul className="menus">
                    <li className="menu ready">
                        <a>- DSC EXCLUSIVES</a>
                    </li>
                </ul>
            </div>
            <InfiniteScroll
                className="mate-list"
                dataLength={this.state.mates.length / 8}
                next={this.loadMore}
                hasMore={this.state.mates.length < 10000}
                loader={this.state.mates.length === 0 ? <p>Mate not exists.</p> : <p>Loading...</p>}
                endMessage={<p>Yay! You have seen it all</p>}
            >
                {this.state.mates.map((mate, index) => <Mate key={index} mateId={mate} />)}
            </InfiniteScroll>
        </main>;
    }
}
