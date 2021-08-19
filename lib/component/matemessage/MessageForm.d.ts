import { Component } from "react";
export default class MessageForm extends Component<{}, {
    mateId: number;
    message: string;
    notMateHolder: boolean;
    termChecked: boolean;
}> {
    constructor(props: {});
    private mateIdChangeDebouncer;
    private handleMateIdChange;
    private handleMessageChange;
    private handleTermsChange;
    private register;
    render(): JSX.Element;
}
//# sourceMappingURL=MessageForm.d.ts.map