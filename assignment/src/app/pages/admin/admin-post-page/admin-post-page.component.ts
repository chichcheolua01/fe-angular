import { Component } from '@angular/core';
import { IPost } from 'src/app/interfaces/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-post-page',
  templateUrl: './admin-post-page.component.html',
  styleUrls: ['./admin-post-page.component.scss'],
})
export class AdminPostPageComponent {
  posts: IPost[] = [];

  constructor(private postService: PostService) {
    this.fetchCategories();
  }

  fetchCategories() {
    this.postService.getCategories().subscribe(
      (data) => {
        this.posts = data.posts;
        console.log(this.posts);
      },
      (error) => {
        console.log('Có lỗi xảy ra khi lấy danh sách categories:', error);
      }
    );
  }

  removeItem(id: any) {
    this.postService.removeCategory(id).subscribe(
      () => {
        console.log('Bạn đã xóa thành công');
        this.posts = this.posts.filter((item) => item._id !== id);
      },
      (error) => {
        console.log('Có lỗi xảy ra khi xóa category:', error);
      }
    );
  }
}
