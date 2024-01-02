import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";



export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser =(email,password)=>{
        setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password); 
    }
    const login = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password);
    }


    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
              
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
              
               setUser(currentUser);
               setLoading(false)
           });
           return ()=>{unSubscribe();}
       },[])

    const AuthInfo ={user,createUser, logOut,login, loading};
    return (
      
        <>
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
            
        </>
    );
};

export default AuthProviders;