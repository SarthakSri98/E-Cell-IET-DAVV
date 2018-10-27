import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    // this.renderer.setStyle(document.body, 'background-color', 'yellow');

   }

  ngOnInit() {
  }

}
