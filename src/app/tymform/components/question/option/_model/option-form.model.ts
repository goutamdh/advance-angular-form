import { FormControl, Validators } from '@angular/forms';
import { Option } from './option.model';

export class OptionForm {
    optionId = new FormControl();
    optionText = new FormControl();

    constructor(option: Option) {
        this.optionId.setValue(option.optionId);
        this.optionId.setValidators([Validators.required])

        this.optionText.setValue(option.optionText);
        this.optionText.setValidators([Validators.required]);
    }
}