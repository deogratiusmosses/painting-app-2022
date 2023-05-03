import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import 'react-circular-progressbar/dist/styles.css'

import Auth from './Router/Auth'
import { auth } from './firebase'

import 'react-circular-progressbar/dist/styles.css'
import Home from './Router/Home'
import Navigation from './components/Navigation'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [init, setInit] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])


  return (
    <>
      <BrowserRouter>
        {isLoggedIn && (
          <Navigation
            showing={false}
            setShowing={function (value: React.SetStateAction<boolean>): void {
              throw new Error('Function not implemented.')
            }}
          />
        )}
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Auth loggedIn={setIsLoggedIn} />}></Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
