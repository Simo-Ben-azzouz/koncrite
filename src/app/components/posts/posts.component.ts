import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  posts :any[]=[];
  constructor(private postsService : PostService) {}

  ngOnInit(){
    this.getAllPosts();
  }

  getAllPosts(){
    this.postsService.getAll().subscribe(
      posts => this.posts = posts.data
      
    )
  }
}
