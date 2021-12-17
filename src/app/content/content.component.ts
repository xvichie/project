import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private router:Router) { 
    // let apiKey = 'b966beeeebfa3717607690e01bdde626';
    // let Url:string = 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key='+apiKey+'&format=json';
    // fetch(Url).then(
    //   response => response.json()
    // ).then(
    //   (data) => {
    //     const tracks = data.results.trackmatches.track;
    //     console.log(tracks[0]);
    //   }
    // );

  }

  goToAdd() {
    this.router.navigate(['content','add']);
  }

  ngOnInit() {
  }

}


