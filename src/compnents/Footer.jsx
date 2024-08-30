import React, { useState } from 'react'
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import './Footer.css'

function Footer() {

  const [ input, setInput] = useState('');

  const sendMessage = async (e)=>{
    e.preventDefault()
    if( input === ''){
      return
    }
    const {uid, displayName}= auth.currentUser
    await addDoc(collection( db, 'messages'),{
      text : input,
      name : displayName,
      uid,
      timestamp: serverTimestamp()
    })
    setInput('')
  }

  return (
    <div >
      <form onSubmit={sendMessage} className='footer'>
        <input value={input} onChange={(e)=>setInput(e.target.value)} className='msgBox' placeholder='Enter Message' type='text'></input>
        <button type='submit' className='sendBtn'><img src='https://cdn-icons-png.flaticon.com/128/9055/9055318.png' width='30px'></img></button>
      </form>
    </div>
  )
}

export default Footer
