import { SongResult } from "./models";

export const RATINGS = [1, 2, 3, 4, 5];

export enum Status {
  Watched = 'Watched',
  WatchLater = 'WatchLater',
}

export enum WhenToWatch {
  Tomorrow = 'Tomorrow',
  ThisWeek = 'ThisWeek',
  ThisMonth = 'ThisWeek',
  ThisYear = 'ThisYear',
}

export interface WhenToWatchSelect {
  label: string;
  value: WhenToWatch;
}

export const WHEN_TO_WATCH: WhenToWatchSelect[] = [
  {
    label: 'catalogue.TOMORROW',
    value: WhenToWatch.Tomorrow,
  },
  {
    label: 'catalogue.THIS_WEEK',
    value: WhenToWatch.ThisWeek,
  },
  {
    label: 'catalogue.THIS_MONTH',
    value: WhenToWatch.ThisMonth,
  },
  {
    label: 'catalogue.THIS_YEAR',
    value: WhenToWatch.ThisYear,
  },
];



export const FORM_RESET_EVENT_KEY = 'FORM_RESET';