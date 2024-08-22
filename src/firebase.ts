import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // For Realtime Database

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyBfOS_BRHoyCugxrZpvVJHQX_w2NtPai5I',
	authDomain: 'lijahq-website.firebaseapp.com',
	projectId: 'lijahq-website',
	storageBucket: 'lijahq-website.appspot.com',
	messagingSenderId: '369885155490',
	appId: '1:369885155490:web:e2b8a39f38e394cb4947fb',
	measurementId: 'G-SY24XJF75E'
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); // For Realtime Database
