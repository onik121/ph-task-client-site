import { createContext, useEffect, useState } from "react";
import auth from "./../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
// import axios from "axios";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);
    const [loading, setLoading] = useState(true)

    const createUsers = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    const logOut = () => {
        return signOut(auth);
    }

    // useEffect(() => {

    //     const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
    //         setUser(currentuser)
    //         setLoading(false);
    //         const userEmail = currentuser?.email || user?.email;
    //         const loggedUser = { email: userEmail }
    //         // if user exisits then issue a token
    //         if (currentuser) {
    //             axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, { withCredentials: true })
    //                 .then((res) => {
    //                     // console.log('token response', res.data)
    //                 })
    //         }
    //         else {
    //             axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, { withCredentials: true })
    //                 .then(() => {
    //                     // console.log(res.data)
    //                 })
    //         }
    //     });

    //     return () => {
    //         unSubscribe();
    //     }

    // }, [])

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const info = { createUsers, loginUser, logOut, setUser, updateUserProfile, user, loading };
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;