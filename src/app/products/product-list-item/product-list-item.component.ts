import { Component, OnInit, Input } from '@angular/core';


import { Product } from '../product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  @Input() layoutMode: boolean;

  // nka gu nke gi
  productList: Product[];


  constructor(private prodService: ProductsService) { }

  ngOnInit() {

    /*
          const x = this.prodService.getData();
          x.snapshotChanges().subscribe(item => {
            this.productList = [];
            item.forEach(element => {
              const y = element.payload.toJSON();
              y['$key'] = element.key;
              this.productList.push(y as Product);
            });
          });
    */

  }


  onAddToCart(product: Product) {
    this.prodService.addToCart(product);
  }
}
