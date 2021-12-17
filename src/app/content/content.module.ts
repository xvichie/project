import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AddSongComponent } from './add-song/add-song.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongApiService } from './services/song-api.service';
import { SongListComponent } from './song-list/song-list.component';
import { SongListItemComponent } from './song-list/song-list-item/song-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ContentComponent,AddSongComponent,SongListComponent, SongListItemComponent],
  providers:[SongApiService]
})
export class ContentModule {}
