import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../../../Pages/Login/firebase.config';
import makeAdmin from '../../../Services/makeAdmin';
import reviewerServices from '../../../Services/reviewerServices';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [loggedUser, setLoggedUser] = useState(null);
    const [loading, setLoading] = useState(true);
     const [admin, setAdmin] = useState([])
     const [reviewer, setReviewer] = useState([])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const checkAdmin = (currentUser) => {
        makeAdmin?.getByEmail({'email': currentUser?.email})
        ?.then(data => setAdmin(data?.data))
    }
    const checkReviewer = (currentUser) =>{
        reviewerServices.getReviewerByEmail({'email': currentUser?.email})
        ?.then(data => setReviewer(data.data))

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            
            setLoggedUser(currentUser);
            checkAdmin(currentUser);
            checkReviewer(currentUser);

            console.log('user observing');
            setLoading(false);
        });
        
        return () => unsubscribe();
    }, [])

    const signIn = (email, password) => {

        setLoading(true);
        
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = (provider) => {

        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        return signOut(auth)
    }
    


    const authInfo = {
        loggedUser,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        admin,
        reviewer
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;