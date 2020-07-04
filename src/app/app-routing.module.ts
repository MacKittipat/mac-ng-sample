import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateSyntaxComponent} from './modules/template-syntax/template-syntax.component';
import {MainComponent} from './modules/main/main.component';
import {IoParentComponent} from './modules/input-output/io-parent/io-parent.component';
import {CcAppComponent} from './modules/content-children/cc-app/cc-app.component';
import {ViewChildComponent} from './modules/view-child/view-child.component';
import {VcsAppComponent} from './modules/view-children/vcs-app/vcs-app.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'template-syntax', component: TemplateSyntaxComponent},
  {path: 'input-output', component: IoParentComponent},
  {path: 'content-children', component: CcAppComponent},
  {path: 'view-child', component: ViewChildComponent},
  {path: 'view-children', component: VcsAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
