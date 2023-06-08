import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService){
    this.productService.getProduct().subscribe(product=>{
      this.products = product
    })
  }

  removeItem(id: any) {
    this.productService.removeProduct(id).subscribe(() => {
      console.log('Ban da xoa thanh cong')
      this.products = this.products.filter(item => item.id != id)
    })
  }
}
