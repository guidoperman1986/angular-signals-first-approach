import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsVsRxjsComponent } from './signals-vs-rxjs.component';

describe('SignalsVsRxjsComponent', () => {
  let component: SignalsVsRxjsComponent;
  let fixture: ComponentFixture<SignalsVsRxjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsVsRxjsComponent]
    });
    fixture = TestBed.createComponent(SignalsVsRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
