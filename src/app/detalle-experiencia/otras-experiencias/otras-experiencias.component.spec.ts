import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrasExperienciasComponent } from './otras-experiencias.component';

describe('OtrasExperienciasComponent', () => {
  let component: OtrasExperienciasComponent;
  let fixture: ComponentFixture<OtrasExperienciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrasExperienciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrasExperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
