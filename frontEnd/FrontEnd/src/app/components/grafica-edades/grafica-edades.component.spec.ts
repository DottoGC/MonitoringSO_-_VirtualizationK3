import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaEdadesComponent } from './grafica-edades.component';

describe('GraficaEdadesComponent', () => {
  let component: GraficaEdadesComponent;
  let fixture: ComponentFixture<GraficaEdadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaEdadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaEdadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
