import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from 'src/app/core/types';
import {StateManagerService} from '../../../../core/state-management/state-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  postList: Array<Post>;

  constructor(
    private http: HttpClient,
    private stateManager: StateManagerService
  ) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts = () => {
    console.log('fetchPosts');
    this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts').subscribe(
      (httpResult) => {
        this.stateManager.push(httpResult);
      },
      (error) => {
        console.error('An error occurred while fetching the posts.', error)
      }
    )
  }

}
