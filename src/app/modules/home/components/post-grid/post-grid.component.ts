import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../core/types';

@Component({
  selector: 'app-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.less']
})
export class PostGridComponent implements OnInit {

  @Input()
  postItems: Array<Post>;

  constructor() { }

  ngOnInit(): void {
  }

}
