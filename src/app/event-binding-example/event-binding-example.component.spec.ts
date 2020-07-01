import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingExampleComponent } from './event-binding-example.component';

describe('EventBindingExampleComponent', () => {
  let component: EventBindingExampleComponent;
  let fixture: ComponentFixture<EventBindingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
