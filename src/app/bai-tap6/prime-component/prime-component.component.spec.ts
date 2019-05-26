import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeComponentComponent } from './prime-component.component';

describe('PrimeComponentComponent', () => {
  let component: PrimeComponentComponent;
  let fixture: ComponentFixture<PrimeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
