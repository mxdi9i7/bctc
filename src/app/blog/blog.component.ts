import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { NavComponent } from '../nav/nav.component'
import { FooterComponent } from '../footer/footer.component'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  comments: any = [];
  author: string;
  comment: string;

  constructor(private blogService: BlogService) {
  	this.blogService.getAllComments().subscribe(comments => {
  		this.comments = comments
  	})
  }

  addComment(event) {
  	event.preventDefault();
  	var newComment = {
  		author: this.author,
  		comment: this.comment,
  		created_at: new Date()
  	}
  	console.log(this.author)
  	this.blogService.addComment(newComment).subscribe(comment => {
  		this.comments.push(comment)
  		this.author = ""
  		this.comment = ""
  	})
  }

  deleteComment(id) {
  	var comments = this.comments;
  	this.blogService.deleteComment(id).subscribe(data => {
  		if (data.n == 1) {
  			for (var i = 0; i < comments.length; i ++) {
  				if (comments[i]._id == id) {
  					comments.splice(i, 1);
  				} 
  			}
  		}
  	})
  }
  // ngOnInit() {
  // 	//retrieve blogs from the API
  // 	this.blogService.getAllBlogs().subscribe(blog => {
  // 		this.blog = blog;
  // 	})
  // }

}
