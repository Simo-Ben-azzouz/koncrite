import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  
  
  constructor(private postsService : PostService) {}

  ngOnInit(){
    this.getAllPosts();
  }

  getAllPosts(){
    this.postsService.getAll().subscribe(
      posts => console.log(posts)
      
    )
  }
}
