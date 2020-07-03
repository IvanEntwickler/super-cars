import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredCarCardComponent } from './filtered-car-card.component';

describe('FilteredCarCardComponent', () => {
  let component: FilteredCarCardComponent;
  let fixture: ComponentFixture<FilteredCarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredCarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
