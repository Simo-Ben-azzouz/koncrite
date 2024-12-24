import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { SlideService } from '../../services/slide.service';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrl: './sliders.component.scss'
})
export class SlidersComponent {
  slides: any[] = [];

constructor(private slideService: SlideService) {}

ngOnInit(){
  this.getAllSlides();
}

getAllSlides(){
  this.slideService.getAll().subscribe(
    slides => this.slides = slides.data
    
  )
}

}
