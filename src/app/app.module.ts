import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { TemplateSyntaxComponent } from './modules/template-syntax/template-syntax.component';
import { MainComponent } from './modules/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSyntaxComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
