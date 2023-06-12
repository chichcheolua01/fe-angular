import { Component } from '@angular/core';
import { IPost } from 'src/app/interfaces/Post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-update-post-page',
  templateUrl: './admin-update-post-page.component.html',
  styleUrls: ['./admin-update-post-page.component.scss'],
})
export class AdminUpdatePostPageComponent {
  posts: IPost = {
    title: '',
    content: '',
    author: '',
    categoryId: '',
  };
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.postService.getCategory(id).subscribe(
        (data) => {
          this.posts = data.post;
        },
        (error) => console.log(error.message)
      );
    });
  }
  onHandleSubmit() {
    const accessToken = this.authService.getAccessToken();
    this.postService
      .updateCategory(this.posts, this.posts._id, accessToken)
      .subscribe(
        (data) => {
          console.log(data.posts);
          this.router.navigate(['/admin/posts']);
        },
        (error) => {
          console.log('Có lỗi xảy ra khi cập nhật bài viết:', error);
        }
      );
  }
}
