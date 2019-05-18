import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtFooterComponent } from './bt-footer.component';

describe('BtFooterComponent', () => {
  let component: BtFooterComponent;
  let fixture: ComponentFixture<BtFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
