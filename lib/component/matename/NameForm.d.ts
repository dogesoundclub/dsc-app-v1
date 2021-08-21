import { Component } from "react";
export default class NameForm extends Component<{}, {
    mateId: number;
    name: string;
    notMateHolder: boolean;
    nameExists: boolean;
    termChecked: boolean;
}> {
    constructor(props: {});
    private mateIdChangeDebouncer;
    private handleMateIdChange;
    private nameChangeDebouncer;
    private handleNameChange;
    private handleTermsChange;
    private register;
    render(): JSX.Element;
}
//# sourceMappingURL=NameForm.d.ts.map