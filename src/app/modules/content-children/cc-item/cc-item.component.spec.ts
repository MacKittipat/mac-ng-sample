import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CcItemComponent } from './cc-item.component';

describe('CcItemComponent', () => {
  let component: CcItemComponent;
  let fixture: ComponentFixture<CcItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CcItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
