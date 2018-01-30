import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvgenComponent } from './invgen.component';

describe('InvgenComponent', () => {
  let component: InvgenComponent;
  let fixture: ComponentFixture<InvgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
