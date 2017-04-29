import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePhotoComponent } from './service-photo.component';

describe('ServicePhotoComponent', () => {
  let component: ServicePhotoComponent;
  let fixture: ComponentFixture<ServicePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
