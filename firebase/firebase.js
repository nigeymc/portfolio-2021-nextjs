// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/app-check'

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

  const appCheck = firebase.appCheck();
  // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
  // key is the counterpart to the secret key you set in the Firebase console.
  appCheck.activate(
    process.env.GOOGLE_APP_CHECK_SITE_KEY,

    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    true);
}

const database = firebase.database();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database as default };
