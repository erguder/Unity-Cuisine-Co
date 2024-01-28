import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioOption2Component } from './portfolio-option2.component';

describe('PortfolioOption2Component', () => {
  let component: PortfolioOption2Component;
  let fixture: ComponentFixture<PortfolioOption2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioOption2Component]
    });
    fixture = TestBed.createComponent(PortfolioOption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
