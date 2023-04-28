

import { env, eventNames } from 'process'
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { auth, firebaseInstance } from '../firebase'
import App from '../App'

const LoginOpts = styled.div`
  width: 200px;
  height: 200px;
`

const Auth = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState('')

  const onFormChange = (event: any) => {
    console.log(event.target.name)
    const {
      target: { name, value },
    } = event
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }
  const onSubmit = async (event: any) => {
    event.preventDefault()

    try {
      // @ts-ignore
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user
          console.log(user)
        }
      )
    } catch (error: any) {
      setError(error.message)
    }

    /*  // @ts-ignore
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user
          console.log(user)
        }
      ) */
  }
  const toggleAccount = () => setNewAccount((prev) => !prev)
  const onSocialClick =async (event: any) => {
    // const {
    //   target: { name },
    // } = event
    // let provider
    // if (name === 'google') {
    //   provider = new firebaseInstance.auth.GoogleAuthProvider()
    // }
    // const data = await signInWithPopup(auth, provider)
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onFormChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onFormChange}
          required
        />
        <input type="submit" value={newAccount ? 'Create Account' : 'Log In'} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? 'Log In' : 'Create Account'}
      </span>
      <LoginOpts>
        <button onClick={onSocialClick} name="google">
          Continue With Google
        </button>
      </LoginOpts>
    </>
  )
}

export default Auth
