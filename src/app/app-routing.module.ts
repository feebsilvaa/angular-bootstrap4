import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationExampleComponent } from './interpolation-example/interpolation-example.component';
import { HomeComponent } from './home/home.component';
import { EventBindingExampleComponent } from './event-binding-example/event-binding-example.component';
import { TemplateReferenceVariablesExampleComponent } from './template-reference-variables-example/template-reference-variables-example.component';
import { PropertyBindingExampleComponent } from './property-binding-example/property-binding-example.component';
import { TwoWayDataBindingExampleComponent } from './two-way-data-binding-example/two-way-data-binding-example.component';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';
import { BindingCustomizadoInputExampleComponent } from './binding-customizado-input-example/binding-customizado-input-example.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'interpolation', component: InterpolationExampleComponent },
  { path: 'event-binding', component: EventBindingExampleComponent },
  { path: 'template-reference-variables', component: TemplateReferenceVariablesExampleComponent },
  { path: 'property-binding', component: PropertyBindingExampleComponent },
  { path: 'two-way-data-binding', component: TwoWayDataBindingExampleComponent },
  { path: 'ng-for-example', component: NgforExampleComponent },
  { path: 'binding-customizado-input', component: BindingCustomizadoInputExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
