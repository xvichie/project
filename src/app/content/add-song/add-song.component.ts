import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FORM_RESET_EVENT_KEY, RATINGS, Status, WhenToWatchSelect, WHEN_TO_WATCH } from '../content.models';
import { Song, SongBody } from '../models';
import { AddSongFacade } from './add-song.facade';
import { AddSongStorage } from './add-song.storage';
import { CharacterDirective } from './character.directive';
import { AuthService } from 'src/app/services';
import { EventBusService } from 'src/app/services/event-bus.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FireApiService } from 'src/app/services/fire-api.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss'],
  providers:[AddSongFacade,AddSongStorage]
})
export class AddSongComponent implements OnInit {

  private unsubscribe$ = new Subject();

  form: FormGroup = new FormGroup({});

  submitted: boolean = false;

  searchKey:string = '';

  selectedSong: Song | null = null;

  get lastThreeSearches():string[] {
    return this.facade.lastThreeSearches;
  }

  get ratings(): number[] {
    return RATINGS;
  }

  status = Status;

  get canWatchLater(): boolean {
    return !!this.form.get('whenToWatch');
  }

  get whenToWatch(): WhenToWatchSelect[] {
    return WHEN_TO_WATCH;
  }

  searchHasError = false;

  constructor(private facade: AddSongFacade,
    private fb: FormBuilder,
    private auth: AuthService,
    private eventBus: EventBusService,
    private fireApiService: FireApiService
    ) { }

    private buildForm() {
      this.form = this.fb.group({
        review: ['', [Validators.required, Validators.minLength(10)]],
        rating: 1,
        status: Status.Watched,
      });
    }

  submit(){
    this.submitted= true;
    console.log(this.form.value); 

    if(this.form.invalid){
      return;
    }

    const value = this.form.value;
    const body: SongBody = {
      artist: this.selectedSong?.artist,
      title: this.selectedSong?.title,
      image: this.selectedSong?.image,
      uid:this.auth.userId,
      rating: value.rating,
      review: value.review,
      status: value.status,
      whenToWatch: value.whenToWatch || '',
    }
    this.fireApiService.addMovie(body).subscribe(x => console.log(x)) ;  
  }

  private formReset(){
    this.form.reset();
    this.form.updateValueAndValidity();

    this.submitted = false;

    this.form.get('review')?.setValue('');
    this.form.get('rating')?.setValue(1);
    this.form.get('status')?.setValue(Status.Watched);
  }

  ngOnInit() {
    this.facade.restoreState();
    this.buildForm();

    this.form
    .get('status')
    ?.valueChanges.pipe(takeUntil(this.unsubscribe$))
    .subscribe((status) => this.addControlsByStatus(status));

    this.eventBus.on(FORM_RESET_EVENT_KEY)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      this.formReset();
    });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private addControlsByStatus(status: Status) {
    switch (status) {
      case Status.WatchLater:
        this.form.addControl(
          'whenToWatch',
          new FormControl(null, Validators.required)
        );
        break;
      case Status.Watched:
        this.form.removeControl('whenToWatch');
        break;
    }
  }

  search(){

    if(!this.searchKey){
      this.searchHasError=true;
      return;
    }
    this.searchHasError=false;

    this.facade.addToLastSearches(this.searchKey);

    this.fetchSong(this.searchKey);

  }

  fetchSong(title: string){
    this.facade.fetchSong(title)
    //.subscribe(song => console.log(Object.entries(Object.entries(song)[0][1].trackmatches.track[0].image[2])[0][1]));
    .subscribe(song => this.selectedSong={
     title: Object.entries(song)[0][1].trackmatches.track[0].name,
     artist: Object.entries(song)[0][1].trackmatches.track[0].artist,
     mbid: Object.entries(song)[0][1].trackmatches.track[0].mbid,
     image: Object.entries(Object.entries(song)[0][1].trackmatches.track[0].image[2])[0][1]
    });
  }

}
