import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  posts: Post[] = [];
  comments: Comment[] = [];
  user: string = '';

  constructor(private postService: PostService, private userService: UserService){}
  
  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.postService.getPosts().subscribe(
      data => this.posts = data
    )
  }

  getComments(postId:number){
    this.postService.getComments(postId).subscribe(
      data => this.comments = data
    )
  }

  getUser(userId: number){
    this.userService.getUser(userId).subscribe(
      data => {
        this.user = data.username
        return this.user;
      }
    )
  }
}
