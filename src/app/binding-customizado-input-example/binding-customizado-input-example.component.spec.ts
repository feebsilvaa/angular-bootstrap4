import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingCustomizadoInputExampleComponent } from './binding-customizado-input-example.component';

describe('BindingCustomizadoInputExampleComponent', () => {
  let component: BindingCustomizadoInputExampleComponent;
  let fixture: ComponentFixture<BindingCustomizadoInputExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingCustomizadoInputExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingCustomizadoInputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
