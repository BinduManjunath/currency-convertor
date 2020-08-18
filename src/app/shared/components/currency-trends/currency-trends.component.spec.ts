import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyTrendsComponent } from './currency-trends.component';

describe('CurrencyTrendsComponent', () => {
  let component: CurrencyTrendsComponent;
  let fixture: ComponentFixture<CurrencyTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
