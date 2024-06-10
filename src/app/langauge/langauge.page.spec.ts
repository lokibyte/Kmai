import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LangaugePage } from './langauge.page';

describe('LangaugePage', () => {
  let component: LangaugePage;
  let fixture: ComponentFixture<LangaugePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LangaugePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
