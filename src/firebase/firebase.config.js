import firebase from 'firebase';
import {firebaseConfig} from './services/key';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
