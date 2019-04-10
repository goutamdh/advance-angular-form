import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TymformRoutingModule } from './tymform-routing.module';
import { TymformComponent } from './tymform.component';
import { SurveyService } from './services/survey.service';
import { QuestionComponent } from './components/question/question.component';
import { OptionComponent } from './components/question/option/option.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TymformRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    SurveyService
  ],
  declarations: [
    TymformComponent,
    QuestionComponent,
    OptionComponent
  ],
})
export class TymformModule { }
