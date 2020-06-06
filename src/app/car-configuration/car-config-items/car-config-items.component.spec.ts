import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarConfigItemsComponent } from './car-config-items.component';

describe('CarConfigItemsComponent', () => {
  let component: CarConfigItemsComponent;
  let fixture: ComponentFixture<CarConfigItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarConfigItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarConfigItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
