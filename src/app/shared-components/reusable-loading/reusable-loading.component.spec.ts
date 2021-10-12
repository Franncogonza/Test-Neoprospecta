import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableLoadingComponent } from './reusable-loading.component';

describe('ReusableLoadingComponent', () => {
  let component: ReusableLoadingComponent;
  let fixture: ComponentFixture<ReusableLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
