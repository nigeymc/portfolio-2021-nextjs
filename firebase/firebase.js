// import * as firebase from 'firebase';
import firebase from 'firebase/app'
import { initializeAppCheck, ReCaptchaV3Provider } from ('firebase/app-check');

import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);

  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('abcdefghijklmnopqrstuvwxy-1234567890abcd'),

    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true
  });
}

const database = firebase.database();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database as default };
