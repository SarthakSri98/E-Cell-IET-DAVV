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
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'E-Cell Case study competition', eventDescription:'Description' },
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'E-Cell Case study competition', eventDescription:'Description' },
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'E-Cell Case study competition', eventDescription:'Description' },
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'E-Cell Case study competition', eventDescription:'Description' },
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'E-Cell Case study competition', eventDescription:'Description' },
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'E-Cell Case study competition', eventDescription:'Description' },
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'E-Cell Case study competition', eventDescription:'Description' },
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'E-Cell Case study competition', eventDescription:'Description' },


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
