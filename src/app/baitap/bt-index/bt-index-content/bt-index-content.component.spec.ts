import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtIndexContentComponent } from './bt-index-content.component';

describe('BtIndexContentComponent', () => {
  let component: BtIndexContentComponent;
  let fixture: ComponentFixture<BtIndexContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtIndexContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtIndexContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
