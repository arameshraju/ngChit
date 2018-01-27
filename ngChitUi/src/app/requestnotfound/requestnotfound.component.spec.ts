import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestnotfoundComponent } from './requestnotfound.component';

describe('RequestnotfoundComponent', () => {
  let component: RequestnotfoundComponent;
  let fixture: ComponentFixture<RequestnotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestnotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
