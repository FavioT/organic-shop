import { Product } from 'shared/models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SnapshotAction } from '@angular/fire/database';

export function $key(list: Observable<SnapshotAction<unknown>[]|SnapshotAction<unknown>>) {
  return list.pipe(
    map(item => {
      if (item instanceof Array) {
        return item.map(item => ({ $key: item.key, ...(item.payload.val() as object) }));
      } else {
        return { $key: item.key, ...(item.payload.val() as object )}
      }
    })
  )
}

export function $payload(item: any) {
  let result = Object.assign({}, item);
  delete(result['$key']);

  return result;
}
