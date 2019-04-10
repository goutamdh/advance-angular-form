import { Option } from '../option/_model/option.model';

export class Question {
    questionId: number;
    questionText: string;
    options: Option[];

    constructor(
        questionId: number,
        questionText: string,
        options?: Option[]
    ) {
        this.questionId = questionId;
        this.questionText = questionText;
        this.options = options;
    }
}