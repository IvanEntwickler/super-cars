import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCarsModelsComponent } from './super-cars-models.component';

describe('SuperCarsModelsComponent', () => {
  let component: SuperCarsModelsComponent;
  let fixture: ComponentFixture<SuperCarsModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperCarsModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCarsModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
