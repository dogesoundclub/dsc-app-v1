import { Component } from "react";
import { RouteProps } from "react-router-dom";
export default class Gallary extends Component<{}, {
    data: {
        id: number;
        name: string;
    }[];
    page: number;
    filter: {
        [key: string]: string;
    };
    byId?: number;
}> {
    constructor(props: RouteProps);
    private getData;
    private loadMore;
    private filterById;
    private addFilter;
    render(): JSX.Element;
}
//# sourceMappingURL=Gallary.d.ts.map