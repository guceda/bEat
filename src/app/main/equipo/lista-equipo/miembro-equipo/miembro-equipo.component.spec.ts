import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroEquipoComponent } from './miembro-equipo.component';

describe('MiembroEquipoComponent', () => {
  let component: MiembroEquipoComponent;
  let fixture: ComponentFixture<MiembroEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembroEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembroEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
