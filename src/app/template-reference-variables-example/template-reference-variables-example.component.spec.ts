import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVariablesExampleComponent } from './template-reference-variables-example.component';

describe('TemplateReferenceVariablesExampleComponent', () => {
  let component: TemplateReferenceVariablesExampleComponent;
  let fixture: ComponentFixture<TemplateReferenceVariablesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReferenceVariablesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferenceVariablesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
