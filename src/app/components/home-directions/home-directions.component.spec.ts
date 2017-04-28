import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDirectionsComponent } from './home-directions.component';

describe('HomeDirectionsComponent', () => {
  let component: HomeDirectionsComponent;
  let fixture: ComponentFixture<HomeDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
