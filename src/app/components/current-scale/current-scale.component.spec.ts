import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentScaleComponent } from './current-scale.component';

describe('CurrentScaleComponent', () => {
  let component: CurrentScaleComponent;
  let fixture: ComponentFixture<CurrentScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
