import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import userDefault from "../assets/user.png"
import Swal from 'sweetalert2/src/sweetalert2.js'



export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [photo,setPhoto] = useState(userDefault);
  



    useEffect(() => {
        if (user && user.photoURL !== null) {
          setPhoto(user.photoURL);
        } else {
          setPhoto(userDefault);
        }
      }, [user]);
// Email user create
    const createUser =(email,password)=>{
        setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password); 
    }
    // Email login
    const login = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password);
    }
// google login
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = ()=>{
        setLoading(true);
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const user = result.user; 
            console.log(user); 
            navigate(location?.state?location.state:'/');
            Swal.fire({
                title: "success!",
                text: "Login Successfull!",
                icon: "success"
              })
        })
        .catch(error =>{
            console.log("error", error);
        })
    }


// github login
const githubProvider = new GithubAuthProvider();

const handleGithubSignIn =()=>{
    setLoading(true);
    signInWithPopup(auth, githubProvider)
    .then(result=>{
       const user = result.user; 
       console.log(user); 
       navigate(location?.state?location.state:'/');
        Swal.fire({
            title: "success!",
            text: "Login Successfull!",
            icon: "success"
          })
    })
    .catch(error =>{
        console.log("error", error)
    })
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

    const AuthInfo ={user: user,createUser, logOut,login, loading,handleGoogleSignIn,handleGithubSignIn,photo};
    return (
      
        <>
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
            
        </>
    );
};

export default AuthProviders;