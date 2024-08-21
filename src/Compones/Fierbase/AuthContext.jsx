import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from './firebase.config';

export const Createcontext = createContext(null)
const AuthContext = ({ children }) => {
    // console.log(children)
    const [User, setUser] = useState(null)
    const [loading, setloading] = useState(true)
    const gooeprovider = new GoogleAuthProvider()

    const create = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(Auth, email, password)

    }

const google =()=>{
    return signInWithPopup(Auth, gooeprovider)
}

    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
            console.log("user", currentUser)
            setUser(currentUser)
            setloading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const logout = () => {
        setloading(true)
        return signOut(Auth)
    }
    const info = { create, login, logout,google, User, loading }
    return (
        <Createcontext.Provider value={info}>
            {children}
        </Createcontext.Provider>
    );
};

export default AuthContext;