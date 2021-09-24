import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateSyntaxComponent} from './modules/template-syntax/template-syntax.component';
import {MainComponent} from './modules/main/main.component';
import {IoParentComponent} from './modules/input-output/io-parent/io-parent.component';
import {CcAppComponent} from './modules/content-children/cc-app/cc-app.component';
import {ViewChildComponent} from './modules/view-child/view-child.component';
import {VcsAppComponent} from './modules/view-children/vcs-app/vcs-app.component';
import {ReactiveFormComponent} from './modules/reactive-form/reactive-form.component';
import {LibraryComponent} from './modules/library/library.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'template-syntax', component: TemplateSyntaxComponent},
  {path: 'input-output', component: IoParentComponent},
  {path: 'content-children', component: CcAppComponent},
  {path: 'view-child', component: ViewChildComponent},
  {path: 'view-children', component: VcsAppComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'library', component: LibraryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
