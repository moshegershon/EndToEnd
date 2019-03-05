import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresipeComponent } from './addresipe.component';

describe('AddresipeComponent', () => {
  let component: AddresipeComponent;
  let fixture: ComponentFixture<AddresipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
