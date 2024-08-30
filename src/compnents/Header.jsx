import React from 'react'
import './Header.css'

import { useState } from 'react'
import {auth} from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

function Header() {

  const [loggedIn, setLogin] = useState(false)
  const [user]= useAuthState(auth);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })
  
  async function googleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setLogin(true)
      console.log(user); // Access user information
    } catch (error) {
      console.error(error);
    }
  }

  async function googleSignOut(){
    try {
      await auth.signOut();
      console.log("User Signed Out Successfully!");
      setLogin(false)
    } catch (error) {
      console.log(error.code);
    }
  }

  return (
    <div className='header'>
      <h2>Chatroom</h2>
      {loggedIn ? <button className='signInBtn' onClick={googleSignOut}>Signout</button> : <button className='signInBtn' onClick={googleSignIn}><img src='https://cdn-icons-png.flaticon.com/128/300/300221.png' width='18px'></img> Sign in</button>}
      {console.log(user)}
    </div>
  )
}

export default Header
