import { Component } from "react";
interface MateDetailProps {
    match: {
        params: any;
    };
}
export default class MateDetail extends Component<MateDetailProps, {
    name: string;
}> {
    constructor(props: MateDetailProps);
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=MateDetail.d.ts.map