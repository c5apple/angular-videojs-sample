import { Component, OnInit, OnDestroy, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import videojs from "video.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChildren('video') videoElement: QueryList<ElementRef>;

  player: any;

  videoList = [
    {
      videoSrc: 'assets/5gGMHy3WnP.m3u8',
      videoPosterSrc: 'assets/5gGMHy3WnP-00001.png'
    },
    {
      videoSrc: 'assets/AklUoM4FdU.m3u8',
      videoPosterSrc: 'assets/AklUoM4FdU-00001.png'
    }
  ];

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.player.dispose();
  }

  ngAfterViewInit(): void {
    console.log('this.videoList', this.videoList);
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

    console.log('this.videoElement', this.videoElement);

    this.videoElement.forEach((videoElement, i) => {
      this.player = videojs(videoElement.nativeElement, options, function onPlayerReady() {
        videojs.log('Your player is ready!');

        // In this context, `this` is the player that was created by Video.js.
        // this.play();

        // How about an event listener?
        this.on('ended', function () {
          videojs.log('Awww...over so soon?!');
        });
      });
      this.player.poster(this.videoList[i].videoPosterSrc);
      this.player.src({ type: 'application/x-mpegURL', src: this.videoList[i].videoSrc });

      console.log(this.player);
    });
  }
}
