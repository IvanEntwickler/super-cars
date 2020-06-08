import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSliderComponent } from './model-slider.component';

describe('ModelSliderComponent', () => {
  let component: ModelSliderComponent;
  let fixture: ComponentFixture<ModelSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
