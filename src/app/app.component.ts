import { Component, OnInit } from '@angular/core';
import videojs from "video.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    var player = videojs("test", {
      html5: {
        hls: {
          withCredentials: true
        }
      },
      flash: {
        hls: {
          withCredentials: true
        }
      }
    });
    // player.play();
  }

}
