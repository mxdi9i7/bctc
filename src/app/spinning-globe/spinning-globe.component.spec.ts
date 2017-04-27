import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningGlobeComponent } from './spinning-globe.component';

describe('SpinningGlobeComponent', () => {
  let component: SpinningGlobeComponent;
  let fixture: ComponentFixture<SpinningGlobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinningGlobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinningGlobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
