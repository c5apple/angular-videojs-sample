import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import videojs from "video.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('video', { static: true }) videoElement: ElementRef;

  player: any;
  videoSrc = 'assets/AklUoM4FdU.m3u8';
  videoPosterSrc = 'assets/AklUoM4FdU-00001.png';

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.player.dispose();
  }

  ngAfterViewInit(): void {
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

    console.log(this.videoElement);
    this.player = videojs(this.videoElement.nativeElement, options, function onPlayerReady() {
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
