import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competitive',
  templateUrl: './competitive.component.html',
  styleUrls: ['./competitive.component.css']
})
export class CompetitiveComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToStuff()
  {
   this.router.navigate(['stuffs'])
  }
}
