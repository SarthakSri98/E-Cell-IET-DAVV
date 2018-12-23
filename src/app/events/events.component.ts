import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA,MatTooltip } from '@angular/material/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventList:any=[];
  index : number;
  constructor(private router:Router,private modalService: MatDialog) { }

  ngOnInit() {
    this.eventList=[
      { img:'https://preview.ibb.co/gtWuTA/e-cell-poster.jpg',eventName:'E-Cell Freshmen Orientation', eventDescription:'Description' },
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'E-Cell Case study competition', eventDescription:'Description' },
      { img:'https://i.ibb.co/StPj2rN/movie-screening.png',eventName:'E-Cell Movie Screening', eventDescription:'Description' },
      { img:'https://i.ibb.co/kJZv0dt/gd.png',eventName:'E-Cell GD invitation', eventDescription:'Description' },
      { img:'https://i.ibb.co/Xt2dVkJ/is-college-the-right-time.png',eventName:'Session on "Is college the right time"', eventDescription:'Description' },
      { img:'https://i.ibb.co/VMP4XbM/business-plan.png',eventName:'Session on "How to create a business model" ', eventDescription:'Description' },
      { img:'https://i.ibb.co/Yhjk1vv/life-of-an-entrepreneus.jpg',eventName:'Session "Life of an entrepreneur" ', eventDescription:'Description' },
      { img:'https://i.ibb.co/0XB86rt/how-to-pitch-an-idea.jpg',eventName:'Session on "Pitching an idea" ', eventDescription:'Description' },
      { img:'https://i.ibb.co/zGQsJYG/debate-comp.png',eventName:'E-Cell Debate competition', eventDescription:'Description' },
      { img:'https://i.ibb.co/Kb9yTGX/d2c-hackathon.jpg',eventName:'E-Cell Dare2compete hackathon', eventDescription:'Description' },
      { img:'https://i.ibb.co/k14YB4R/quiz.jpg',eventName:'E-Cell Quiz Competition', eventDescription:'Description' },
      { img:'https://i.ibb.co/99yrfg1/d2c-quiz.png',eventName:'E-Cell Dare2compete Quiz', eventDescription:'Description' },
      { img:'https://i.ibb.co/Fw3dtwm/startup-survey.png',eventName:'E-Cell Statup Survey', eventDescription:'Description' },
      

    ]

  }
 height='auto';
  width='400px';  
  events: string[]=['Case study event going on','Conducted the freshment orientation'];

  openDialog(content,index)
  {
    this.index = index;
    const dialogConfig = new MatDialogConfig();
    this.modalService.open(content,{
      height: this.height,
      width: this.width,
      panelClass: 'custom-modalbox'
    });
  }
  cross_click(){
    this.modalService.closeAll();
}
}
