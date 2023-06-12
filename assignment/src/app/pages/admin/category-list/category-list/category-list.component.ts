import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  categories: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.postService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.log('Có lỗi xảy ra khi lấy danh sách danh mục:', error);
      }
    );
  }
}
