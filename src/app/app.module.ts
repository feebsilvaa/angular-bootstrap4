import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { InterpolationExampleComponent } from './interpolation-example/interpolation-example.component';
import { HomeComponent } from './home/home.component';
import { EventBindingExampleComponent } from './event-binding-example/event-binding-example.component';
import { TemplateReferenceVariablesExampleComponent } from './template-reference-variables-example/template-reference-variables-example.component';
import { PropertyBindingExampleComponent } from './property-binding-example/property-binding-example.component';
import { TwoWayDataBindingExampleComponent } from './two-way-data-binding-example/two-way-data-binding-example.component';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';
import { BindingCustomizadoInputExampleComponent } from './binding-customizado-input-example/binding-customizado-input-example.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    InterpolationExampleComponent,
    HomeComponent,
    EventBindingExampleComponent,
    TemplateReferenceVariablesExampleComponent,
    PropertyBindingExampleComponent,
    TwoWayDataBindingExampleComponent,
    NgforExampleComponent,
    BindingCustomizadoInputExampleComponent,
    FuncionarioCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
