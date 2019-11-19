import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefVarsComponent } from './template-ref-vars/template-ref-vars.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgSwitchComponent } from './directives/ng-switch/ng-switch.component';
import { NgForComponent } from './directives/ng-for/ng-for.component';
import { ComponentInteractionComponent } from './directives/component-interaction/component-interaction.component';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { EmployeeListComponent } from './services/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './services/employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateRefVarsComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    ComponentInteractionComponent,
    PipeComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
