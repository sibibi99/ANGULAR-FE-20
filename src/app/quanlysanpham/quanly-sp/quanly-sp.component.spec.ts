import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlySPComponent } from './quanly-sp.component';

describe('QuanlySPComponent', () => {
  let component: QuanlySPComponent;
  let fixture: ComponentFixture<QuanlySPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlySPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlySPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
