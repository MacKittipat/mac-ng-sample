import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplateSyntaxComponent } from './template-syntax.component';

describe('TemplateSyntaxComponent', () => {
  let component: TemplateSyntaxComponent;
  let fixture: ComponentFixture<TemplateSyntaxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
