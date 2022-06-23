import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIoutComponent } from './apiout.component';

describe('APIoutComponent', () => {
  let component: APIoutComponent;
  let fixture: ComponentFixture<APIoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
