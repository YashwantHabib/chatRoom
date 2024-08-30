import React from 'react'
import { auth } from '../firebase'
import './Message.css'

function Message({message}) {

    const messageClass = message.uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`Message ${messageClass}`}>
      <p className='uName'>{message.name}</p>
      <p className='msgText'>{message.text}</p>
    </div>
  )
}

export default Message
