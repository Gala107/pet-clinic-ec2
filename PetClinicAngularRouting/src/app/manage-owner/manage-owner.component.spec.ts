import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOwnerComponent } from './manage-owner.component';

describe('ManageOwnerComponent', () => {
  let component: ManageOwnerComponent;
  let fixture: ComponentFixture<ManageOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageOwnerComponent]
    });
    fixture = TestBed.createComponent(ManageOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
