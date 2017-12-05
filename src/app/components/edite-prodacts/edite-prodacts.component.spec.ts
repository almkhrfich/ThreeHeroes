import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeProdactsComponent } from './edite-prodacts.component';

describe('EditeProdactsComponent', () => {
  let component: EditeProdactsComponent;
  let fixture: ComponentFixture<EditeProdactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeProdactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeProdactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
