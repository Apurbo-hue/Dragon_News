import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './../Firebase/firebase.config'
import { SiAkasaair } from 'react-icons/si';
const auth = getAuth(app);


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    console.log(user)

    //  create user function
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in function
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }


    // signout function
    const logOut = () => {
        return signOut(auth);
    }

    //  current user function
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])
    

    const authData = {
        user, setUser,createUser,logOut,signInUser
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;