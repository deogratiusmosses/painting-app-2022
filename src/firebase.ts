

import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCnGI-6nnP-tAETua8tI2oV0flhJloRPzk',
  authDomain: 'time-mate-445e4.firebaseapp.com',
  projectId: 'time-mate-445e4',
  storageBucket: 'time-mate-445e4.appspot.com',
  messagingSenderId: '898859764708',
  appId: '1:898859764708:web:1c85fbdfed7161f3b0d5f1',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const firebaseInstance = firebase