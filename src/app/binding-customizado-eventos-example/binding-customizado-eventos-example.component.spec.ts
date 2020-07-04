import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingCustomizadoEventosExampleComponent } from './binding-customizado-eventos-example.component';

describe('BindingCustomizadoEventosExampleComponent', () => {
  let component: BindingCustomizadoEventosExampleComponent;
  let fixture: ComponentFixture<BindingCustomizadoEventosExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingCustomizadoEventosExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingCustomizadoEventosExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
