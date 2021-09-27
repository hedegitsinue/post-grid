import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../../../core/types';
import {StateManagerService} from '../../../../core/state-management/state-manager.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.less']
})
export class PostGridComponent implements OnInit, OnDestroy {

  onDestroySubject$ = new Subject();
  postItems: Array<Post>;

  constructor(
    private stateManager: StateManagerService
  ) {
  }

  ngOnInit(): void {
    this.subscribeToStore();
  }

  ngOnDestroy(): void {
    this.onDestroySubject$.next();
    this.onDestroySubject$.unsubscribe();
  }


  subscribeToStore = () => {
    this.stateManager.selectAll()
      .pipe(
        takeUntil(this.onDestroySubject$)
      )
      .subscribe(
        (postItems) => {
          console.log(`[postItems] `, postItems);
          this.postItems = postItems
        }
      )
  }

}
