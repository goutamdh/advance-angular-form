export class Option {
    optionId: number;
    optionText: string;

    constructor(
        optionId?: number,
        optionText?: string
    ) {
        this.optionId = optionId;
        this.optionText = optionText;
    }
}