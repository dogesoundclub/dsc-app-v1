import { Component } from "react";
interface MateProps {
    mateId: number;
}
export default class Mate extends Component<MateProps, {
    name: string;
}> {
    constructor(props: MateProps);
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Mate.d.ts.map