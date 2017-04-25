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
import { TutComponent } from './tut/tut.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { GlobeComponent } from './globe/globe.component';

const ROUTES = [
{
  path: '',
  component: HomeComponent
  // redirectTo: 'blog',
  // pathMatch: 'full'
},
{
  path: 'blog',
  component: BlogComponent
},
{
  path: 'tut',
  component: TutComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'services',
  component: ServicesComponent
},
{
  path: 'projects',
  component: ProjectsComponent
},
]

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    BlogComponent,
    TutComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    GlobeComponent,
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
