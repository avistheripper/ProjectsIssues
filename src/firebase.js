import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBMFXMe9-t51iMUSJSWUuMceBTumMQ160U",
    authDomain: "goalcoach-43c7e.firebaseapp.com",
    databaseURL: "https://goalcoach-43c7e.firebaseio.com",
    projectId: "goalcoach-43c7e",
    storageBucket: "goalcoach-43c7e.appspot.com",
    messagingSenderId: "114053420751"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completedGoals = firebase.database().ref('completed_goals');
