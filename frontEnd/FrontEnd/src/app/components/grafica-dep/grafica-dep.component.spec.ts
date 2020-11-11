import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaDepComponent } from './grafica-dep.component';

describe('GraficaDepComponent', () => {
  let component: GraficaDepComponent;
  let fixture: ComponentFixture<GraficaDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
