import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//services
import { BlogService } from './blog.service';

//components
import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { BlogComponent } from './blog/blog.component';

const ROUTES = [
{
  path: '',
  redirectTo: 'blog',
  pathMatch: 'full'
},
{
  path: 'blog',
  component: BlogComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
