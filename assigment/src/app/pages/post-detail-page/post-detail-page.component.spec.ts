import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailPageComponent } from './post-detail-page.component';

describe('PostDetailPageComponent', () => {
  let component: PostDetailPageComponent;
  let fixture: ComponentFixture<PostDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailPageComponent]
    });
    fixture = TestBed.createComponent(PostDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
