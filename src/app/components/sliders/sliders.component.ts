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
  rowOfSlides : number = 3;
  slides: any[] = [];

constructor(private slideService: SlideService) {}

ngOnInit(){
  this.getAllSlides();
}

getAllSlides(){
  this.slideService.getAll(this.rowOfSlides).subscribe(
    slides => this.slides = slides.data
    
  )
}

}
