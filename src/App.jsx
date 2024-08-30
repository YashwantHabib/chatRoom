import { useState } from 'react'
import './App.css'
import Header from './compnents/Header'
import Footer from './compnents/Footer'
import Chat from './compnents/Chat'
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <>
    <main>
    <section className="card">
      <div className="content">
        <BrowserRouter>
          <Header />
          {user ? <Chat /> : <></> }
          {user ? <Footer />: <></>}
        </BrowserRouter>
      </div>
    </section>
  </main>
    </>
  )
}

export default App
