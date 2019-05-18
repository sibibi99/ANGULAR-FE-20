import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtSliderComponent } from './bt-slider.component';

describe('BtSliderComponent', () => {
  let component: BtSliderComponent;
  let fixture: ComponentFixture<BtSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
