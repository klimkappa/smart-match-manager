import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateScaleDialogComponent } from './create-scale-dialog.component';

describe('CreateScaleDialogComponent', () => {
  let component: CreateScaleDialogComponent;
  let fixture: ComponentFixture<CreateScaleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateScaleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateScaleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
