import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudjesComponent } from './judjes.component';

describe('JudjesComponent', () => {
  let component: JudjesComponent;
  let fixture: ComponentFixture<JudjesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudjesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
