import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateSyntaxComponent} from './modules/template-syntax/template-syntax.component';
import {MainComponent} from './modules/main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'template-syntax', component: TemplateSyntaxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
