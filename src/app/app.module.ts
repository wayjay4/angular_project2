import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefVarsComponent } from './template-ref-vars/template-ref-vars.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateRefVarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
