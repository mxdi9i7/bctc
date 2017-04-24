import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutComponent } from './tut.component';

describe('TutComponent', () => {
  let component: TutComponent;
  let fixture: ComponentFixture<TutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
