import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchjobPage } from './searchjob.page';

describe('SearchjobPage', () => {
  let component: SearchjobPage;
  let fixture: ComponentFixture<SearchjobPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
