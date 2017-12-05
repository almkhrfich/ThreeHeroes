import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdactsComponent } from './add-prodacts.component';

describe('AddProdactsComponent', () => {
  let component: AddProdactsComponent;
  let fixture: ComponentFixture<AddProdactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProdactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProdactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
