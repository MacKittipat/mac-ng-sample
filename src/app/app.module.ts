import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './main/app.component';
import {TemplateSyntaxComponent} from './modules/template-syntax/template-syntax.component';
import {MainComponent} from './modules/main/main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IoParentComponent} from './modules/input-output/io-parent/io-parent.component';
import {IoChildComponent} from './modules/input-output/io-child/io-child.component';
import {CcAppComponent} from './modules/content-children/cc-app/cc-app.component';
import {CcListComponent} from './modules/content-children/cc-list/cc-list.component';
import {CcItemComponent} from './modules/content-children/cc-item/cc-item.component';
import { ViewChildComponent } from './modules/view-child/view-child.component';
import { VcsAppComponent } from './modules/view-children/vcs-app/vcs-app.component';
import { VcsItemComponent } from './modules/view-children/vcs-item/vcs-item.component';
import { ReactiveFormComponent } from './modules/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSyntaxComponent,
    MainComponent,
    IoParentComponent,
    IoChildComponent,
    CcAppComponent,
    CcListComponent,
    CcItemComponent,
    ViewChildComponent,
    VcsAppComponent,
    VcsItemComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
