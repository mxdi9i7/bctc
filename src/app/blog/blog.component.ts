import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blogs: any = [];

  constructor(private blogService: BlogService) {
  	this.blogService.getAllBlogs().subscribe(blogs => {
  		this.blogs = blogs
  	})
  }

  // ngOnInit() {
  // 	//retrieve blogs from the API
  // 	this.blogService.getAllBlogs().subscribe(blog => {
  // 		this.blog = blog;
  // 	})
  // }

}
