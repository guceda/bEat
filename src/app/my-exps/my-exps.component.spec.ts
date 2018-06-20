import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExpsComponent } from './my-exps.component';

describe('MyExpsComponent', () => {
  let component: MyExpsComponent;
  let fixture: ComponentFixture<MyExpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
