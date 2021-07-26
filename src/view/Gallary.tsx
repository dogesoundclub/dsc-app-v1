import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { RouteProps } from "react-router-dom";
import database from "../database.json";
import MateParts from "./MateParts.json";

export default class Gallary extends Component<{}, {
    data: { id: number, name: string }[],
    page: number,
    filter: { [key: string]: string },
    byId?: number,
}> {

    constructor(props: RouteProps) {
        super(props);
        this.state = { data: this.getData(0, {}), page: 0, filter: {} };
    }

    private getData(page: number, filter: { [key: string]: string }, byId?: number) {
        const data = [];

        let count = 0;
        for (const [id, token] of database.collection.entries()) {
            if (byId !== undefined) {
                if (id === byId) {
                    data.push({ id, name: token.name });
                }
            } else {
                let pass = true;
                if (Object.keys(filter).length > 0) {
                    for (const [key, value] of Object.entries(filter)) {
                        if (token.properties[key] !== value) {
                            pass = false;
                        }
                    }
                }
                if (pass === true) {
                    if (count === 1024 * (page + 1)) {
                        return data;
                    }
                    data.push({ id, name: token.name });
                    count += 1;
                }
            }
        }

        return data;
    }

    private loadMore = () => {
        this.setState({ data: this.getData(this.state.page + 1, this.state.filter, this.state.byId), page: this.state.page + 1 });
    };

    private filterById(byId: number) {
        this.setState({ data: this.getData(this.state.page, this.state.filter, byId), byId });
    }

    private addFilter(key: string, value: string) {
        const filter = Object.assign({}, this.state.filter, { [key]: value });
        if (value === "") {
            delete filter[key];
        }
        this.setState({ data: this.getData(this.state.page, filter, this.state.byId), filter });
    }

    public render() {
        return <main id="gallary">
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
                        this.setState({ data: this.getData(this.state.page, this.state.filter, undefined), byId: undefined });
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
                    <option value={""}>None</option>
                    {values.map((value) => <option key={value} value={value}>{value}</option>)}
                </select>)}
                <a className="reset-filter" onClick={() => {
                    this.setState({ data: this.getData(this.state.page, {}, this.state.byId), filter: {} });
                }}>Reset Filter</a>
                <ul className="menus">
                    <li className="menu ready">
                        <a>- DSC EXCLUSIVES</a>
                    </li>
                </ul>
            </div>
            <InfiniteScroll
                className="mate-list"
                dataLength={this.state.data.length / 8}
                next={this.loadMore}
                hasMore={this.state.data.length < 10000}
                loader={this.state.data.length === 0 ? <p>Mate not exists.</p> : <p>Loading...</p>}
                endMessage={<p>Yay! You have seen it all</p>}
            >
                {this.state.data.map((data, index) => <a key={index} className="mate" style={{
                    backgroundImage: `url(https://storage.googleapis.com/dsc-mate/336/dscMate-${data.id}.png)`,
                }} href={`https://opensea.io/assets/klaytn/0xe47e90c58f8336a2f24bcd9bcb530e2e02e1e8ae/${data.id}`}>
                    <span>#{data.id}</span>
                </a>)}
            </InfiniteScroll>
        </main>;
    }
}
