import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoResumePage } from './video-resume.page';

describe('VideoResumePage', () => {
  let component: VideoResumePage;
  let fixture: ComponentFixture<VideoResumePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoResumePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
