"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_infinite_scroll_component_1 = __importDefault(require("react-infinite-scroll-component"));
const database_json_1 = __importDefault(require("../database.json"));
const MateParts_json_1 = __importDefault(require("./MateParts.json"));
class Gallary extends react_1.Component {
    constructor(props) {
        super(props);
        this.loadMore = () => {
            this.setState({ data: this.getData(this.state.page + 1, this.state.filter, this.state.byId), page: this.state.page + 1 });
        };
        this.state = { data: this.getData(0, {}), page: 0, filter: {} };
    }
    getData(page, filter, byId) {
        const data = [];
        let count = 0;
        for (const [id, token] of database_json_1.default.collection.entries()) {
            if (byId !== undefined) {
                if (id === byId) {
                    data.push({ id, name: token.name });
                }
            }
            else {
                let pass = true;
                if (Object.keys(filter).length > 0) {
                    for (const [key, value] of Object.entries(filter)) {
                        if (token.properties[key] !== value && (value !== "None" ||
                            token.properties[key] !== undefined)) {
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
    filterById(byId) {
        this.setState({ data: this.getData(this.state.page, this.state.filter, byId), byId });
    }
    addFilter(key, value) {
        const filter = Object.assign({}, this.state.filter, { [key]: value });
        if (value === "") {
            delete filter[key];
        }
        this.setState({ data: this.getData(this.state.page, filter, this.state.byId), filter });
    }
    render() {
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "gallary" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "menu-bar" }, { children: [jsx_runtime_1.jsx("h4", { children: "Gallery" }, void 0),
                        jsx_runtime_1.jsx("ul", Object.assign({ className: "menus" }, { children: jsx_runtime_1.jsx("li", Object.assign({ className: "menu on" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "mate" }, { children: "- DSC Mates" }), void 0) }), void 0) }), void 0),
                        jsx_runtime_1.jsx("input", { className: "filter", placeholder: "By ID", onChange: (event) => {
                                const id = parseInt(event.target.value, 10);
                                if (isNaN(id) === true) {
                                    this.setState({ data: this.getData(this.state.page, this.state.filter, undefined), byId: undefined });
                                }
                                else {
                                    this.filterById(id);
                                }
                            } }, void 0),
                        Object.entries(MateParts_json_1.default).map(([key, values]) => jsx_runtime_1.jsxs("select", Object.assign({ className: "filter", placeholder: key, value: this.state.filter[key] === undefined ? "" : this.state.filter[key], onChange: (event) => this.addFilter(key, event.target.value) }, { children: [jsx_runtime_1.jsx("option", Object.assign({ value: "" }, { children: key }), void 0),
                                jsx_runtime_1.jsx("option", Object.assign({ value: "None" }, { children: "None" }), void 0),
                                values.map((value) => jsx_runtime_1.jsx("option", Object.assign({ value: value }, { children: value }), value))] }), key)),
                        jsx_runtime_1.jsx("a", Object.assign({ className: "reset-filter", onClick: () => {
                                this.setState({ data: this.getData(this.state.page, {}, this.state.byId), filter: {} });
                            } }, { children: "Reset Filter" }), void 0),
                        jsx_runtime_1.jsx("ul", Object.assign({ className: "menus" }, { children: jsx_runtime_1.jsx("li", Object.assign({ className: "menu ready" }, { children: jsx_runtime_1.jsx("a", { children: "- DSC EXCLUSIVES" }, void 0) }), void 0) }), void 0)] }), void 0),
                jsx_runtime_1.jsx(react_infinite_scroll_component_1.default, Object.assign({ className: "mate-list", dataLength: this.state.data.length / 8, next: this.loadMore, hasMore: this.state.data.length < 10000, loader: this.state.data.length === 0 ? jsx_runtime_1.jsx("p", { children: "Mate not exists." }, void 0) : jsx_runtime_1.jsx("p", { children: "Loading..." }, void 0), endMessage: jsx_runtime_1.jsx("p", { children: "Yay! You have seen it all" }, void 0) }, { children: this.state.data.map((data, index) => jsx_runtime_1.jsx("a", Object.assign({ className: "mate", style: {
                            backgroundImage: `url(https://storage.googleapis.com/dsc-mate/336/dscMate-${data.id}.png)`,
                        }, href: `https://opensea.io/assets/klaytn/0xe47e90c58f8336a2f24bcd9bcb530e2e02e1e8ae/${data.id}` }, { children: jsx_runtime_1.jsxs("span", { children: ["#", data.id] }, void 0) }), index)) }), void 0)] }), void 0);
    }
}
exports.default = Gallary;
//# sourceMappingURL=Gallary.js.map