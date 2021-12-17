import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddSongComponent } from './add-song/add-song.component';
import { ContentComponent } from './content.component';
import { SongDetailsComponent } from './song-details/song-details.component';


export const routes: Route[] = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'add',
    component: AddSongComponent,
  },
  {
    path: ':id',
    component: SongDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}