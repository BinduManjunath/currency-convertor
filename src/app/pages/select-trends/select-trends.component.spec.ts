import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTrendsComponent } from './select-trends.component';

describe('SelectTrendsComponent', () => {
  let component: SelectTrendsComponent;
  let fixture: ComponentFixture<SelectTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
