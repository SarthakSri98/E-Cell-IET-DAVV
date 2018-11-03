import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA,MatTooltip } from '@angular/material/';
import AOS from 'aos';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  height='auto';
  width='400px';  
  events: string[]=['Case study event going on','Conducted the freshment orientation'];
  constructor(private modalService: MatDialog, public sanitizer: DomSanitizer) {}
  ngOnInit() {
  }

  openDialog(content)
  {
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

