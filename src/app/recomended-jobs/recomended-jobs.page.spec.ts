import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecomendedJobsPage } from './recomended-jobs.page';

describe('RecomendedJobsPage', () => {
  let component: RecomendedJobsPage;
  let fixture: ComponentFixture<RecomendedJobsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendedJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
