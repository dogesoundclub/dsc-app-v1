import { Component } from "react";
interface RegisterCandidateFormProps {
    candidateMateCount: number;
}
export default class RegisterCandidateForm extends Component<RegisterCandidateFormProps, {
    slogan: string;
    count: number;
}> {
    constructor(props: RegisterCandidateFormProps);
    private handleSloganChange;
    private handleCountChange;
    private register;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=RegisterCandidateForm.d.ts.map