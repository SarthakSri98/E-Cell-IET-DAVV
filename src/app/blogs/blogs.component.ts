import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogList:any=[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.blogList=[
      { img:'https://preview.ibb.co/gtWuTA/e-cell-poster.jpg',eventName:'Blog 1', eventDescription:'Description' },
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'Blog 2', eventDescription:'Description' },
    ]

  }
  backToStuff()
  {
   this.router.navigate(['stuffs'])
  }
}
