import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpComponent } from './new-exp.component';

describe('NewExpComponent', () => {
  let component: NewExpComponent;
  let fixture: ComponentFixture<NewExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
