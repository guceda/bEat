import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionExperienciaComponent } from './descripcion-experiencia.component';

describe('DescripcionExperienciaComponent', () => {
  let component: DescripcionExperienciaComponent;
  let fixture: ComponentFixture<DescripcionExperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionExperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
