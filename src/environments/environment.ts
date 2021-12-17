// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  SongApiBase:'http://ws.audioscrobbler.com/2.0/?method=track.search&track=',
  SongApiNext: '&api_key=b966beeeebfa3717607690e01bdde626&format=json',
  firebase: {
    projectId: 'musify-86975',
    appId: '1:524273216495:web:91bea01734c7326625a41a',
    storageBucket: 'musify-86975.appspot.com',
    apiKey: 'AIzaSyCPm1QIUruh8UhuwXmKdIcff-Tuna1241s',
    authDomain: 'musify-86975.firebaseapp.com',
    messagingSenderId: '524273216495',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
