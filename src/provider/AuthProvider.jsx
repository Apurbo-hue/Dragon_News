import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './../Firebase/firebase.config'
import { SiAkasaair } from 'react-icons/si';
import PrivateRoute from './PrivateRoute';
const auth = getAuth(app);


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)


    // console.log(user)

    //  create user function
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in function
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // update user
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser,updatedData)
    }


    // signout function
    const logOut = () => {
        return signOut(auth);
    }

    //  current user function
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
           setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])
    

    const authData = {
        user, setUser,createUser,logOut,signInUser,loading,setLoading,updateUser
    }

    return <AuthContext value={authData}>

             {children}
   
    </AuthContext>;
};

export default AuthProvider;