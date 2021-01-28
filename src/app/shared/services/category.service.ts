import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { $key } from '../../firebase.utils';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  itemsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) { }

  getCategories() {
    return this.db.list('/categories', ref => ref.orderByChild('name')).valueChanges() as Observable<any>;
  }

}
