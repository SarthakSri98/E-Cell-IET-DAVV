import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profiles',
  templateUrl: './github-profiles.component.html',
  styleUrls: ['./github-profiles.component.css']
})
export class GithubProfilesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToStuff()
  {
   this.router.navigate(['stuffs'])
  }

}
