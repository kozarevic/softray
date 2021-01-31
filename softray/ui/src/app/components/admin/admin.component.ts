import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public users: any;
  public posts: any;
  searchTerm: any;
  page = 1;
  pageSize = 4;
  collectionSize: any;
  currentRate = 8;
  postsSearched: any;
  allPosts: any;

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getPosts();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      data => { this.users = data; },
      err => console.error(err),
      () => console.log('users loaded')
    );
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(
      data => { this.posts = data; },
      err => console.error(err),
      () => console.log('posts loaded')
    );
  }

}
