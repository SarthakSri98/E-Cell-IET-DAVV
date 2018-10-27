import {Component, ViewChild,OnInit} from '@angular/core';
import { Route, Routes, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecell-ietdavv';
  effect:any
  
ngOnInit()
{

    document.getElementById('nav-icon1').addEventListener('click',function(){
      document.getElementById('nav-icon1').classList.toggle('open');
    });
  

var click = document.querySelectorAll('div button');
var pusher = document.querySelector('.st-pusher');
var sideBar = document.querySelector('.st-menu');
// to store the corresponding effect

// adding a click event to all the buttons
for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('click', this.addClass)
}

pusher.addEventListener('click', this.closeMenu);
sideBar.addEventListener('click',this.closeMenu);
this.changeOfRoute();


}

 addClass(e) {
    let menu = document.querySelector('#st-container');
    
    // to get the correct effect
    this.effect = e.target.getAttribute('data-effect');
    localStorage.setItem('effect',this.effect);
    console.log('effect',this.effect);
    // adding the effects
    menu.classList.toggle(this.effect);
    menu.classList.toggle('st-menu-open');
    
    // console.log(e.target.getAttribute('data-effect'));
  }
  
   closeMenu(el) {
    let menu = document.querySelector('#st-container');
    
    // if the click target has this class then we close the menu by removing all the classes
    if (el.target.classList.contains('st-pusher')||el.target.classList.contains('fa')) {
        console.log('fa');
      menu.classList.toggle(localStorage.getItem('effect'));
      menu.classList.toggle('st-menu-open');
      // console.log(el.target);
    } 
  }
   changeOfRoute()
  {   let menu = document.querySelector('#st-container');
      
      console.log("route has been",localStorage.getItem('effect'));
      menu.classList.toggle(localStorage.getItem('effect'));
      menu.classList.toggle('st-menu-open');
        document.getElementById('nav-icon1').classList.toggle('open');
        console.log('cross is changed');
  }
   myFunction(x) {
      x.classList.toggle("change");
  }
}
