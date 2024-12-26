import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  rowsOfPost : number = 4;
  posts :any[]=[];
  constructor(private postsService : PostService) {}

  ngOnInit(){
    this.getAllPosts();
  }

  getAllPosts(){
    this.postsService.getAll(this.rowsOfPost).subscribe(
      posts => this.posts = posts.data
      
    )
  }
}
