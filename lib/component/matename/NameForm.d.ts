import { Component } from "react";
export default class NameForm extends Component<{}, {
    mateId: number;
    name: string;
    notMateHolder: boolean;
    nameExists: boolean;
}> {
    constructor(props: {});
    private mateIdChangeDebouncer;
    private handleMateIdChange;
    private nameChangeDebouncer;
    private handleNameChange;
    private register;
    render(): JSX.Element;
}
//# sourceMappingURL=NameForm.d.ts.map