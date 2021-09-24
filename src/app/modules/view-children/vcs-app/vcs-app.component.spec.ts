import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VcsAppComponent } from './vcs-app.component';

describe('VcsAppComponent', () => {
  let component: VcsAppComponent;
  let fixture: ComponentFixture<VcsAppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VcsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
