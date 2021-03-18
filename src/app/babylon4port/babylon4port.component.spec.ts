import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Babylon4portComponent } from './babylon4port.component';

describe('Babylon4portComponent', () => {
  let component: Babylon4portComponent;
  let fixture: ComponentFixture<Babylon4portComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Babylon4portComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Babylon4portComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
