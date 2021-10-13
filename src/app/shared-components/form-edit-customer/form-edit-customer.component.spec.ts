import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditCustomerComponent } from './form-edit-customer.component';

describe('FormEditCustomerComponent', () => {
  let component: FormEditCustomerComponent;
  let fixture: ComponentFixture<FormEditCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
