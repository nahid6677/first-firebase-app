import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";
// import auth from "../firebase/firebase.init";

const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log('ERROR', error)
                setUser(null)
            })
    }
    const handleGoogleSignOut = () =>{
        signOut(auth)
        .then(() =>{
            console.log('Sign out Done')
            setUser(null)
        })
        .catch(error => console.log(error))
    }
    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error =>console.log('ERROR', error))
    }
    return (
        <div>
            {/* <button style={{ 'border': '1px solid gray', 'borderRadius': '5px', 'padding': '5px' }} onClick={handleGoogleSignIn}>Login with Google</button>

            <button style={{ 'border': '1px solid gray', 'borderRadius': '5px', 'padding': '5px' }} onClick={handleGoogleSignOut}>Sign Out</button> */}
            {
                user ? 
                <button style={{ 'border': '1px solid gray', 'borderRadius': '5px', 'padding': '5px' }} onClick={handleGoogleSignOut}>Sign Out</button> 
                : 
                <>
                <button style={{ 'border': '1px solid gray', 'borderRadius': '5px', 'padding': '5px' }} onClick={handleGoogleSignIn}>Login with Google</button>
                <button style={{ 'border': '1px solid gray', 'borderRadius': '5px', 'padding': '5px' }} onClick={handleGithubSignIn}>Login with Google</button>
                </>
            }

            <div className="">
                {user && <div>
                    <h4>{user.displayName}</h4>
                    <p>Email: {user.email}</p> <br/>
                    <img src={user.photoURL} alt="" />
                </div>}
            </div>
        </div>
    );
};

export default Login;