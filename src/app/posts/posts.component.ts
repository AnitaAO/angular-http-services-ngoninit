import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: any[];
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url)
      .subscribe((response: {json: () => any; }) => {
      this.post = response.json();
    });
  }
}

//LESSON: 
//Never write an http service inside a constructor; use the ngOnInIt