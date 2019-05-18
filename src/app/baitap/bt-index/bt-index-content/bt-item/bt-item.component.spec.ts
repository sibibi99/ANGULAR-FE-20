import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtItemComponent } from './bt-item.component';

describe('BtItemComponent', () => {
  let component: BtItemComponent;
  let fixture: ComponentFixture<BtItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
