import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { OptionForm } from './components/question/option/_model/option-form.model';
import { Option } from './components/question/option/_model/option.model';
import { QuestionForm } from './components/question/_model/question-form.model';
import { Question } from './components/question/_model/question.model';
import { SurveyService } from './services/survey.service';

@Component({
  selector: 'app-tymform',
  templateUrl: './tymform.component.html',
  styleUrls: ['./tymform.component.scss']
})
export class TymformComponent implements OnInit {
  surveyQuestions: any[] = [];

  questionForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private surveyService: SurveyService
  ) { }

  ngOnInit() {
    this._initForm();
    this._loadSurveyDetails();
  }

  private _initForm() {
    this.questionForm = this.fb.group({});
  }

  private _loadSurveyDetails() {
    const survey = this.surveyService.getSurveyDetails();
    this.surveyQuestions = survey.questions.filter(q => !q.screener_key);
    this._createQuestionControl(this.surveyQuestions);
  }

  private _createQuestionControl(questions: any[]) {
    questions.forEach(question => {
      // Create options control form field
      if (!this.questionForm.get('questions')) {
        this.questionForm.addControl('questions', this.fb.array([]));
      }
      // Add question control
      this.questionsControl.push(this.fb.group(new QuestionForm(new Question(question.id, question.question))));
    });

    // For adding options control
    this.questionsControl.controls.forEach(control => {
      const question = questions.find((q: any) => q.id === control.value.questionId);
      if (question) {
        const options = control.get('options') as FormArray;
        // Add option control for the question
        question.options.forEach((opt: any) => {
          options.push(this.fb.group(new OptionForm(new Option(opt.id, opt.optionText))))
        });
      }
    });
  }

  get questionsControl() {
    return this.questionForm.get('questions') as FormArray;
  }

  onSubmit() {
    console.log(this.questionForm.value);
  }
}
