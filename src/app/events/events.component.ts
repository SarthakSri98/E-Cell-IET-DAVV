import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventList:any=[];
  constructor() { }

  ngOnInit() {
    this.eventList=[
      { img:'https://preview.ibb.co/gtWuTA/e-cell-poster.jpg',eventName:'E-Cell Freshmen Orientation', eventDescription:'Description' },
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'E-Cell Case study competition', eventDescription:'Description' },
    ]

  }
}
