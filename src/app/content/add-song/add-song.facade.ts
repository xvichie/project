import { Injectable } from "@angular/core";
import { finalize } from "rxjs/operators";
import { LoadingService } from "src/app/services";
import { EventBusService } from "src/app/services/event-bus.service";
import { StorageService } from "src/app/services/storage.service";
import { FORM_RESET_EVENT_KEY } from "../content.models";
import { SongApiService } from "../services";
import { AddSongStorage } from "./add-song.storage";

@Injectable()
export class AddSongFacade{

    get lastThreeSearches():string[]{
        return this.storage.lastThreeSearches;
    }

    constructor(private songApiService: SongApiService,
        private loadingService: LoadingService,
        private storage: AddSongStorage,
        private eventBus: EventBusService
        ){

    }
    fetchSong(title:string){
       this.loadingService.start();
       return this.songApiService.getSongByName(title).pipe(
           finalize(() => {
            this.loadingService.stop();
            this.eventBus.emit(FORM_RESET_EVENT_KEY);
           })
       );  
    }
    addToLastSearches(key:string){
        this.storage.addToLastSearches(key);

    }
    restoreState(){
        this.storage.restoreState();
    }
}