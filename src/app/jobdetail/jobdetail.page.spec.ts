import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobdetailPage } from './jobdetail.page';

describe('JobdetailPage', () => {
  let component: JobdetailPage;
  let fixture: ComponentFixture<JobdetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
