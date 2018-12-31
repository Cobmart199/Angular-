import { Component, OnInit } from '@angular/core';
// import { Http, Response } from '@angular/http';
 import { HttpClientModule } from '@angular/common/http';
 import { HttpClient } from '@angular/common/http';
 import {NgForm} from '@angular/forms';

 import { ProductListItemComponent } from '../products/product-list-item/product-list-item.component';
import { ProductsComponent } from '../products/products.component';

import { Product } from '../products/product.model';
import { ProductsService } from '../services/products.service';

import {ToastyNotificationsService} from '../services/toasty-notifications.service';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductsService]
})
export class HomeComponent implements OnInit {

 productList: Product[];

   constructor(private httpClient: HttpClient,
     private prodService: ProductsService, private toasty: ToastyNotificationsService) {}
  // constructor() {}

  ngOnInit() {
    // nka bu enke gi
    const x = this.prodService.getData();
    x.snapshotChanges().subscribe(item => {
       this.productList = [];
       item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.productList.push(y as Product);
       });
    });


    // this.prodService.getData();
     this.resetForm();
  }


  onEdit(prod: Product) {
    this.prodService.selectedProduct = prod;

    // this.prodService.updateProduct(prod);
    // this.prodService.selectedProduct = Object.assign({}, prod);
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this record?') === true ) {
     this.prodService.deleteProduct(id);
     this.toasty.addToasty(false, 'Deleted Product', false, true);
    }
  }

  addItem() {
    const newItem = {
     'description': 'Strawberry ices with Sprinkles!',
      'id': 6,
      'imagePath': 'assets/images/donutImages/Strawberry-Iced-with-sprinkles.png',
      'imagePathSm': 'assets/images/donutImages/Strawberry-Iced-with-sprinkles.png',
      'name': 'Strawberry Ices with Sprinkles',
      'price': 12,
      'qty': 1,
      'type': 'Plain'
    };

    this.httpClient.post('https://donutshop-b9bfc.firebaseio.com/products.json', newItem).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }


  onSubmit(productForm: NgForm) {
   this.prodService.insertProduct(productForm.value);
   this.resetForm(productForm);
    // this.toasty.addToast(false, 'Submitted Successfully', false, true);
    this.toasty.addToasty(false, 'Submitted Successfully ', true, false);
  }

  resetForm(productForm?: NgForm) {
   if (productForm != null) {
          productForm.reset();
          this.prodService.selectedProduct = {
            id: null,
            type: '',
            name: '',
            description: '',
            imagePath: '',
            imagePathSm: '',
            price: 0,
            qty: 0
          };
   }

  }


}
