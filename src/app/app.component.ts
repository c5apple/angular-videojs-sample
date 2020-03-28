import { Component, OnInit } from '@angular/core';
import videojs from "video.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  player: any;

  ngOnInit(): void {
    const options = {
      html5: {
        hls: {
          withCredentials: true
        }
      },
      flash: {
        hls: {
          withCredentials: true
        }
      },
      fluid: true
    };

    this.player = videojs("test", options, function onPlayerReady() {
      videojs.log('Your player is ready!');

      // In this context, `this` is the player that was created by Video.js.
      // this.play();

      // How about an event listener?
      this.on('ended', function () {
        videojs.log('Awww...over so soon?!');
      });
    });
    console.log(this.player);
    // player.play();
  }

}
