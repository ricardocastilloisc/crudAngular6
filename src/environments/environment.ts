// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebaseConfig: {
    apiKey: 'AIzaSyBqf_rpSAwtXpiL2skZ56g3KNp1V8LI2Jg',
    authDomain: 'angular6-crud-97554.firebaseapp.com',
    databaseURL: 'https://angular6-crud-97554.firebaseio.com',
    projectId: 'angular6-crud-97554',
    storageBucket: 'angular6-crud-97554.appspot.com',
    messagingSenderId: '92284685404'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
