import { FormControl, FormArray, Validators } from '@angular/forms';
import { Question } from './question.model';

export class QuestionForm {
    questionId = new FormControl();
    questionText = new FormControl();
    options = new FormArray([]);

    constructor(question: Question) {
        this.questionId.setValue(question.questionId);
        this.questionId.setValidators([Validators.required]);

        this.questionText.setValue(question.questionText);

        if (question.options) {
            this.options.setValue(question.options);
        }
    }
}