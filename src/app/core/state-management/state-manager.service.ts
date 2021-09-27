import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {Post} from '../types';
import {distinctUntilChanged} from 'rxjs/operators';
import {cloneDeep} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {

  private store: Array<Post> = [];
  private storeSubject$: BehaviorSubject<Array<Post>>;

  constructor() {
  }

  initStore = () => {
    return of(this.storeSubject$ = new BehaviorSubject<Array<Post>>([])).toPromise();
  }

  selectAll = () => {
    return this.storeSubject$.asObservable()
      .pipe(
        distinctUntilChanged()
      )
  }

  push = (data: Array<Post> | Post) => {
    if (Array.isArray(data)) {
      data.forEach(datum => this.upsert(datum));
      this.publishChanges();
    } else {
      this.upsert(data);
      this.publishChanges();
    }
  }


  private upsert = (data: Post) => {
    if (this.store.some(post => post.id === data.id)) {
      this.store[this.store.findIndex(post => post.id === data.id)] = data;
    } else {
      this.store.push(data);
    }
  }

  publishChanges = () => {
    this.storeSubject$.next(cloneDeep(this.store));
  }
}
