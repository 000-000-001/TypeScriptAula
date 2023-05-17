import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBindingComponent } from './two-binding.component';

describe('TwoBindingComponent', () => {
  let component: TwoBindingComponent;
  let fixture: ComponentFixture<TwoBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoBindingComponent]
    });
    fixture = TestBed.createComponent(TwoBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
