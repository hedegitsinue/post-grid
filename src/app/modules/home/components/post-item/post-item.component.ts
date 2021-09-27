import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../core/types';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.less']
})
export class PostItemComponent implements OnInit {

  @Input()
  post: Post;

  SHOW: 'POST_ID' | 'USER_ID' = 'POST_ID'

  constructor() {
  }

  ngOnInit(): void {
  }

  togglePostUserId = () => {
    this.SHOW = this.SHOW === 'POST_ID' ? 'USER_ID' : 'POST_ID';
  }

}
