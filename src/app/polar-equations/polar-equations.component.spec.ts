import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarEquationsComponent } from './polar-equations.component';

describe('PolarEquationsComponent', () => {
  let component: PolarEquationsComponent;
  let fixture: ComponentFixture<PolarEquationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarEquationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarEquationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
