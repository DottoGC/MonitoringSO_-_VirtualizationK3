import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToRedisComponent } from './add-to-redis.component';

describe('AddToRedisComponent', () => {
  let component: AddToRedisComponent;
  let fixture: ComponentFixture<AddToRedisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToRedisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToRedisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
