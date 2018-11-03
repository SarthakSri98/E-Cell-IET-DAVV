import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        (function (d, s, id) {
          var js;
          if (d.getElementById(id)) {
            return;
          }
          js = d.createElement(s);
          js.id = id;
          js.src = "https://embedsocial.com/embedscript/ei.js";
          d.getElementsByTagName("head")[0].appendChild(js);
        }(document, "script", "EmbedSocialScript"));


  }

}
