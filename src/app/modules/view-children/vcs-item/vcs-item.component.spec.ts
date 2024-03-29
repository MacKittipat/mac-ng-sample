import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VcsItemComponent } from './vcs-item.component';

describe('VcsItemComponent', () => {
  let component: VcsItemComponent;
  let fixture: ComponentFixture<VcsItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VcsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
