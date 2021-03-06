"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_infinite_scroll_component_1 = __importDefault(require("react-infinite-scroll-component"));
const Mate_1 = __importDefault(require("../component/Mate"));
const database_json_1 = __importDefault(require("../database.json"));
const MateParts_json_1 = __importDefault(require("./MateParts.json"));
class Gallary extends react_1.Component {
    constructor(props) {
        super(props);
        this.loadMore = () => {
            this.setState({ mates: this.getData(this.state.page + 1, this.state.filter, this.state.byId), page: this.state.page + 1 });
        };
        this.state = { mates: this.getData(0, {}), page: 0, filter: {} };
    }
    getData(page, filter, byId) {
        const mates = [];
        let count = 0;
        for (const [id, token] of database_json_1.default.collection.entries()) {
            if (byId !== undefined) {
                if (id === byId) {
                    mates.push(id);
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
                        return mates;
                    }
                    mates.push(id);
                    count += 1;
                }
            }
        }
        return mates;
    }
    filterById(byId) {
        this.setState({ mates: this.getData(this.state.page, this.state.filter, byId), byId });
    }
    addFilter(key, value) {
        const filter = Object.assign({}, this.state.filter, { [key]: value });
        if (value === "") {
            delete filter[key];
        }
        this.setState({ mates: this.getData(this.state.page, filter, this.state.byId), filter });
    }
    render() {
        return jsx_runtime_1.jsxs("main", Object.assign({ id: "gallary" }, { children: [jsx_runtime_1.jsxs("div", Object.assign({ className: "menu-bar" }, { children: [jsx_runtime_1.jsx("h4", { children: "Gallery" }, void 0),
                        jsx_runtime_1.jsx("ul", Object.assign({ className: "menus" }, { children: jsx_runtime_1.jsx("li", Object.assign({ className: "menu on" }, { children: jsx_runtime_1.jsx("a", Object.assign({ href: "mate" }, { children: "- DSC Mates" }), void 0) }), void 0) }), void 0),
                        jsx_runtime_1.jsx("input", { className: "filter", placeholder: "By ID", onChange: (event) => {
                                const id = parseInt(event.target.value, 10);
                                if (isNaN(id) === true) {
                                    this.setState({ mates: this.getData(this.state.page, this.state.filter, undefined), byId: undefined });
                                }
                                else {
                                    this.filterById(id);
                                }
                            } }, void 0),
                        Object.entries(MateParts_json_1.default).map(([key, values]) => jsx_runtime_1.jsxs("select", Object.assign({ className: "filter", placeholder: key, value: this.state.filter[key] === undefined ? "" : this.state.filter[key], onChange: (event) => this.addFilter(key, event.target.value) }, { children: [jsx_runtime_1.jsx("option", Object.assign({ value: "" }, { children: key }), void 0),
                                jsx_runtime_1.jsx("option", Object.assign({ value: "None" }, { children: "None" }), void 0),
                                values.map((value) => jsx_runtime_1.jsx("option", Object.assign({ value: value }, { children: value }), value))] }), key)),
                        jsx_runtime_1.jsx("a", Object.assign({ className: "reset-filter", onClick: () => {
                                this.setState({ mates: this.getData(this.state.page, {}, this.state.byId), filter: {} });
                            } }, { children: "Reset Filter" }), void 0),
                        jsx_runtime_1.jsx("ul", Object.assign({ className: "menus" }, { children: jsx_runtime_1.jsx("li", Object.assign({ className: "menu ready" }, { children: jsx_runtime_1.jsx("a", { children: "- DSC EXCLUSIVES" }, void 0) }), void 0) }), void 0)] }), void 0),
                jsx_runtime_1.jsx(react_infinite_scroll_component_1.default, Object.assign({ className: "mate-list", dataLength: this.state.mates.length / 8, next: this.loadMore, hasMore: this.state.mates.length < 10000, loader: this.state.mates.length === 0 ? jsx_runtime_1.jsx("p", { children: "Mate not exists." }, void 0) : jsx_runtime_1.jsx("p", { children: "Loading..." }, void 0), endMessage: jsx_runtime_1.jsx("p", { children: "Yay! You have seen it all" }, void 0) }, { children: this.state.mates.map((mate, index) => jsx_runtime_1.jsx(Mate_1.default, { mateId: mate }, index)) }), void 0)] }), void 0);
    }
}
exports.default = Gallary;
//# sourceMappingURL=Gallary.js.map