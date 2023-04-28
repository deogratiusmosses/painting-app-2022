import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from 'react-router-dom'
import Home from './Router/Home'

import React, { useEffect, useState } from 'react'
import 'react-circular-progressbar/dist/styles.css'

import Auth from './Router/Auth'
import { auth } from './firebase'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [init, setInit] = useState(false)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(false)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
            </>
          ) : (
            <Route path="/" element={<Auth />}></Route>
          )}
          {/* {init ? <Route path="/" element={<Home />} /> : 'initializing...'} */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
