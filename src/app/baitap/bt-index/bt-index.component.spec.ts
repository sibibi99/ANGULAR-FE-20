import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtIndexComponent } from './bt-index.component';

describe('BtIndexComponent', () => {
  let component: BtIndexComponent;
  let fixture: ComponentFixture<BtIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
