import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes, Router } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
import { StuffsComponent } from './stuffs/stuffs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { GithubProfilesComponent } from './github-profiles/github-profiles.component';
import { CompetitiveComponent } from './competitive/competitive.component';

const route:Routes=[
  { path:'',component:HomeComponent },
  { path:'team',component:TeamComponent },
  { path:'gallery',component:GalleryComponent },
  { path:'events',component: EventsComponent },
  { path:'stuffs',component: StuffsComponent},
  { path:'stuffs/blogs',component: BlogsComponent },
  { path:'stuffs/github',component: GithubProfilesComponent },
  { path:'stuffs/competitive',component: CompetitiveComponent },

]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(route)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
