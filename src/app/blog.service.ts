import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BlogService {

  constructor(private http: Http) {
  	console.log('service is initializing')
   }

  //get all blogs from the API
  getAllComments() {
  	return this.http.get('http://localhost:3000/api/blog')
  		.map(res => res.json());
  }

  addComment(newComment) {
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/api/post-blog', JSON.stringify(newComment), {headers: headers})
  		.map(res => res.json())
  }

  deleteComment(id) {
  	return this.http.delete('/api/delete-blog/' + id)
  		.map(res => res.json())
  }
}
