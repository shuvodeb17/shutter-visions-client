import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile,signOut, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth,provider)
    }

    // create user
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logout = () => {
        signOut(auth)
    }


    // updateUserProfile
    const userProfileUpdate = (name, photo) => {
        updateProfile(auth.currentUser, {
            photoURL: photo,
            displayName: name
        })
    }

    // observe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        googleSignIn,
        signUp,
        signIn,
        logout,
        userProfileUpdate
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;