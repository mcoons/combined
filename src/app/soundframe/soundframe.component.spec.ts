import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundframeComponent } from './soundframe.component';

describe('SoundframeComponent', () => {
  let component: SoundframeComponent;
  let fixture: ComponentFixture<SoundframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
