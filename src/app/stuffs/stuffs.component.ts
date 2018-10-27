import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stuffs',
  templateUrl: './stuffs.component.html',
  styleUrls: ['./stuffs.component.css']
})
export class StuffsComponent implements OnInit {
  childRoutes: number
  constructor(private activeRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(res=>console.log(res));
   // console.log(this.activeRoute.params);  }
}
}