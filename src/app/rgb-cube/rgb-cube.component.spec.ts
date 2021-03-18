import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbCubeComponent } from './rgb-cube.component';

describe('RgbCubeComponent', () => {
  let component: RgbCubeComponent;
  let fixture: ComponentFixture<RgbCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbCubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgbCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
