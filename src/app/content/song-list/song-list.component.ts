import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { finalize, map, switchMap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services';
import { FireApiService } from 'src/app/services/fire-api.service';
import { SongBody, SongListItem, SongResult, SongWithId } from '../models';
import { SongApiService } from '../services';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

  songs$: Observable<SongWithId[]> | undefined;

  constructor(
    private loadingService: LoadingService,
    private fireApiService: FireApiService,
    private movieApiService: SongApiService
  ) {}

  // private mapMovieData(data: SongWithId[]) {
  //   return data.map((d) =>
  //     this.movieApiService.getMovieByImdbId(d.id).pipe(
  //       map<SongResult, SongListItem>((movie) => ({
  //         movie,
  //         data: d,
  //       }))
  //     )
  //   );
  // }

  ngOnInit() {
     this.loadingService.start();
      this.songs$ = this.fireApiService.getSongs()
      .pipe(finalize(() => this.loadingService.stop()));

    this.fireApiService.getSongs().subscribe(x => console.log(x));
  }

}
