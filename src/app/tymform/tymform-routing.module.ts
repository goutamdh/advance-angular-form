import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TymformComponent } from './tymform.component';

const routes: Routes = [{
  path: '',
  component: TymformComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TymformRoutingModule { }
