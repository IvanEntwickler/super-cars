import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesAndPackagesComponent } from './lines-and-packages.component';

describe('LinesAndPackagesComponent', () => {
  let component: LinesAndPackagesComponent;
  let fixture: ComponentFixture<LinesAndPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesAndPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesAndPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
