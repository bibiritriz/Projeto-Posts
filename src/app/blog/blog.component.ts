import { Component, OnInit } from '@angular/core';
import { Post, Comment } from '../types/post';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { User } from '../types/user';
@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export default class BlogComponent implements OnInit{
  posts: Post[] = [];
  commentsByPost: { [postId: number]: Comment[] } = {};
  users: User[] = [];
  isShow: boolean = false;

  constructor(private readonly postService: PostService, private readonly userService: UserService){}

  ngOnInit(): void {
    this.getPosts()
    this.getUsers()
  }

  getPosts(){
    this.postService.getPosts().subscribe(
      data => this.posts = data
    )
  }

  getComments(postId:number){
    this.isShow = !this.isShow
    this.postService.getComments(postId).subscribe(
      data => this.commentsByPost[postId] = data
    )
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      data => this.users = data
    );
  }

  getUsername(userId: number): string{
    const user = this.users.filter(u => u.id === userId);
    return user[0].username
  }
}
