import * as firebase from "../../node_modules/firebase";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  constructor(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyApkqOrUA85ZcOhh-5ZErD7VSeEGldfOvQ",
      authDomain: "getoffer-291c6.firebaseapp.com",
      databaseURL: "https://getoffer-291c6.firebaseio.com",
      projectId: "getoffer-291c6",
      storageBucket: "",
      messagingSenderId: "886911547949"
    };
    firebase.initializeApp(config);
  
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
