import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaGeoComponent } from './mapa-geo.component';

describe('MapaGeoComponent', () => {
  let component: MapaGeoComponent;
  let fixture: ComponentFixture<MapaGeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaGeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
