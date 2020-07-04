import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './main/app.component';
import {TemplateSyntaxComponent} from './modules/template-syntax/template-syntax.component';
import {MainComponent} from './modules/main/main.component';
import {FormsModule} from '@angular/forms';
import {IoParentComponent} from './modules/input-output/io-parent/io-parent.component';
import {IoChildComponent} from './modules/input-output/io-child/io-child.component';
import {CcAppComponent} from './modules/content-children/cc-app/cc-app.component';
import {CcListComponent} from './modules/content-children/cc-list/cc-list.component';
import {CcItemComponent} from './modules/content-children/cc-item/cc-item.component';
import { ViewChildComponent } from './modules/view-child/view-child.component';

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
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
