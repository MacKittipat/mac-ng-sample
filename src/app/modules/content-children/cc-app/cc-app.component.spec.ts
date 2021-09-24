import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CcAppComponent } from './cc-app.component';

describe('CcAppComponent', () => {
  let component: CcAppComponent;
  let fixture: ComponentFixture<CcAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CcAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
