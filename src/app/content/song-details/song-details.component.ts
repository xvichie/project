import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { doc, getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { filter, finalize,map, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services';
import { FireApiService } from 'src/app/services/fire-api.service';
import { SongBody, SongWithId } from '../models';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {

  songs$: Observable<SongWithId[]> | undefined;

  id: string = '';



  constructor(private router: Router,
    private fireApiService: FireApiService,
    private loadingService: LoadingService,
    private store: AngularFirestore) { }

  ngOnInit() {
    const arr = this.router.url.split('/')
    this.id = arr[arr.length-1];
    console.log(this.id);
    const song = this.findDocumentWithId(this.id);
    console.log(song);
  }

  async findDocumentWithId(id:string){
    return this.store.collection('content').doc(id)
    .get();
  }

}
