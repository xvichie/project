import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class SongApiService{
    constructor(private http: HttpClient){
        
    }
    getSongByName(title:string){
        return this.http.get(environment.SongApiBase+title+environment.SongApiNext);
    }
}