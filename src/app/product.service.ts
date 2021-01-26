import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { $key } from './firebase.utils';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  itemsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  create(product: any) {
    this.db.list('/products').push(product);
  }

  getAll() {
    return $key(this.db.list('/products').snapshotChanges());
  }

  get(productId: any) {
    return this.db.object('/products/' + productId);
  }

  update(productId: any, product: any) {
    return this.db.object('/products/' + productId).update(product);
  }

  remove(productId: any) {
    return this.db.object('/products/' + productId).remove();
  }

}
