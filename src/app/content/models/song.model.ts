import { Status, WhenToWatch } from "../content.models";

export interface SongResult {
    title: string;
    artist: string;
    listeners: number;
    mbid: string;
    url: string;
    image: string;
}
export interface Song {
    title: string;
    artist: string;
    mbid: string;
    image: any;
}

export type SongWithId = SongBody & { id: string };

export interface SongListItem{
  data: SongWithId,
  song: SongResult
}

export interface SongBody {
    title: string | undefined,
    artist: string | undefined,
    image: string,
    uid: string | null | undefined,
    review: string,
    rating: number,
    status: Status,
    whenToWatch: WhenToWatch
  }
