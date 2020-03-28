import { Component, OnInit } from '@angular/core';
import videojs from "video.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  player: any;
  videoSrc = 'assets/AklUoM4FdU.m3u8';
  videoPosterSrc = 'assets/AklUoM4FdU-00001.png';

  ngOnInit(): void {
    console.log(this.videoSrc);
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
    this.player.poster(this.videoPosterSrc);
    this.player.src({ type: 'application/x-mpegURL', src: this.videoSrc });

    console.log(this.player);
    // player.play();
  }

}
