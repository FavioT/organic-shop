import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { ProductService } from './../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: any = [];
  filteredProducts: any;
  category: string;
  cart: any;
  suscription: Subscription;

  constructor(
    route: ActivatedRoute,
    productService: ProductService,
    private shoppingCartService: ShoppingCartService
    ) {

      // @ToDo: Revisar con Lisandro

      productService
        .getAll()
        .pipe(switchMap(products => {
          this.products = products;
          return route.queryParamMap;
        }))
        .subscribe(params => {
          this.category = params.get('category');

          this.filteredProducts = (this.category) ?
            this.products.filter((p: any) => p.title === this.category) :
            this.products;
        });
   }

   async ngOnInit() {
    (await this.shoppingCartService.getCart()).subscribe((cart: any) => this.cart = cart);
   }

   ngOnDestroy() {
    // @ToDo: el unsubscribe tira error porque suscription es undefined
    // this.suscription.unsubscribe();
   }
}
