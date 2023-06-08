import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  products: IProduct = {
    title: "",
    content:"",
    image:"",
  }
  
  constructor(private productService: ProductService ,private router:Router) {

  }
  
  addProduct(){
    this.productService.addProduct(this.products).subscribe(data => {
      console.log(data);
      this.router.navigate(['/admin/products'])
    })
  }
}
