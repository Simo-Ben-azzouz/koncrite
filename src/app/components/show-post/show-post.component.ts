import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrl: './show-post.component.scss'
})
export class ShowPostComponent {
/**
 *
 */
post:any;
slug:string='';

constructor(private postService :PostService ,private route : ActivatedRoute) {}

ngOnInit(){
 this.slug = this.route.snapshot.params['slug'];
 this.getPost(this.slug);
}

getPost(slug : string){
  this.postService.getById(slug).subscribe(    response => {
    this.post = response.data; // Assign the `data` part of the API response to `post`
  },
  error => {
    console.error('Error fetching services:', error); // Added error handling
  })
  
 }
}
