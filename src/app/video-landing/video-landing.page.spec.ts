import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoLandingPage } from './video-landing.page';

describe('VideoLandingPage', () => {
  let component: VideoLandingPage;
  let fixture: ComponentFixture<VideoLandingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
