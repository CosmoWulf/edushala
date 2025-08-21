import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    EmailAuthProvider,
    linkWithCredential
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        console.error("Google Login Error:", error);
        throw error;
    }
};

export const signInWithFacebook = async () => {
    try {
        const result = await signInWithPopup(auth, facebookProvider);
        return result.user;
    } catch (error) {
        console.error("Facebook Login Error:", error);
        throw error;
    }
};

export const signUpWithEmail = async (email, password) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result.user;
    } catch (error) {
        console.error("Email Signup Error:", error);
        throw error;
    }
};

export const loginWithEmail = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user;
    } catch (error) {
        console.error("Email Login Error:", error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Logout Error:", error);
        throw error;
    }
};

// NEW: Link Google account with password
export const linkGoogleWithPassword = async (email, password) => {
    try {
        const credential = EmailAuthProvider.credential(email, password);
        const user = auth.currentUser;

        if (user) {
            const linkedUser = await linkWithCredential(user, credential);
            console.log("Account linked successfully:", linkedUser);
            return linkedUser.user;
        } else {
            throw new Error("No authenticated user found to link.");
        }
    } catch (error) {
        console.error("Error linking account:", error);
        throw error;
    }
};
