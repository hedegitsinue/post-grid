import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from 'src/app/core/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  postList: Array<Post>;

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts = () => {
    this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts').subscribe(
      (httpResult) => {
        this.postList = httpResult
      },
      (error) => {
        console.error('An error occurred while fetching the posts.', error)
      }
    )
  }

}
