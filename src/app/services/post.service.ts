import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{

  constructor(http : HttpClient) {
    super('http://localhost:8000/api/posts' , http);
   }
}
