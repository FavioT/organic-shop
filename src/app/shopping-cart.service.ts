import { take, map } from 'rxjs/operators';
import { Product } from './models/product';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { $payload } from './firebase.utils';
import { ShoppingCart } from './models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  creatingCart: any;

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).valueChanges().pipe(
      map((x: any) => new ShoppingCart(x.items)));
  }

  private getItem(cartId:string, productId:string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    if (!this.creatingCart) {
      this.creatingCart = this.create();
    }

    let result = await this.creatingCart;
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(product:Product) {
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.$key);

    item$.snapshotChanges().pipe(take(1)).subscribe((item:any) =>  {
      item$.update({
        product: $payload(product),
        quantity: (item.payload.val() ? item.payload.val()['quantity'] : 0) + change
      });
    });
  }
}
