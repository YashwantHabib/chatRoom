import React from 'react'
import {useState, useEffect, useRef} from 'react'
import './Chat.css'
import {db} from '../firebase'
import {query, collection, orderBy, onSnapshot, QuerySnapshot} from 'firebase/firestore'
import Message from './Message';

function Chat() {

  const [messages, setMessgases] = useState([]);
  const scroll = useRef();

  useEffect(()=>{
    const q= query( collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot( q, (querySnapshot) =>{
      let messages=[]
      querySnapshot.forEach((doc)=>{
        messages.push({...doc.data(), id: doc.id})
      });
      setMessgases(messages);
    });
    return ()=> unsubscribe();
  }, []);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
    <div className='chat'>
      
      {messages && messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <span ref={scroll}></span>
    </div>
    
    </>
  )
}

export default Chat
