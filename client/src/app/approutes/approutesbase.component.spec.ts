import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproutesBaseComponent } from './approutesbase.component';

describe('ApproutesBaseComponent', () => {
  let component: ApproutesBaseComponent;
  let fixture: ComponentFixture<ApproutesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproutesBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproutesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
