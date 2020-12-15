import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCMfNtk7kkUgotFdZUlWv9NrhZlsXJl2dM",
    authDomain: "spaceship-database.firebaseapp.com",
    projectId: "spaceship-database",
    storageBucket: "spaceship-database.appspot.com",
    messagingSenderId: "17295019205",
    appId: "1:17295019205:web:1a38a09a7967260e9434ac",
    measurementId: "G-8BPKF3FLBY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider)


export default firebase;