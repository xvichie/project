import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongBody, SongWithId } from '../../models';

@Component({
  selector: 'app-song-list-item',
  templateUrl: './song-list-item.component.html',
  styleUrls: ['./song-list-item.component.scss']
})
export class SongListItemComponent implements OnInit {

  @Input() item: SongWithId | undefined;


  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate([`content/${this.item?.id}`]);
  }

  ngOnInit() {
    console.log(this.item?.id);
  }

}
