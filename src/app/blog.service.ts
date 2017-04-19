import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BlogService {

  constructor(private http: Http) {
  	console.log('service is initializing')
   }

  //get all blogs from the API
  getAllBlogs() {
  	return this.http.get('http://localhost:3000/api/blog')
  		.map(res => res.json());
  }
}
