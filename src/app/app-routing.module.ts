import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFormComponent } from './liste-form/liste-form.component';
import { VisuelComponent } from './visuel/visuel.component';

const routes: Routes = [
  { path: 'visuel', component: VisuelComponent },
  { path: '', component: VisuelComponent },
  { path:'liste', component: ListeFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
