import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarsModelsComponent } from './view-cars-models.component';

describe('ViewCarsModelsComponent', () => {
  let component: ViewCarsModelsComponent;
  let fixture: ComponentFixture<ViewCarsModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCarsModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCarsModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
