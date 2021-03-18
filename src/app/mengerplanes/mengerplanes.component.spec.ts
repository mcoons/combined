import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MengerplanesComponent } from './mengerplanes.component';

describe('MengerplanesComponent', () => {
  let component: MengerplanesComponent;
  let fixture: ComponentFixture<MengerplanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MengerplanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MengerplanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
