import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IoParentComponent } from './io-parent.component';

describe('IoParentComponent', () => {
  let component: IoParentComponent;
  let fixture: ComponentFixture<IoParentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
