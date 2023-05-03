import React, { useState } from 'react'
import styled from 'styled-components'
import {
  AuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import { auth, firebaseInstance } from '../firebase'

import { motion, AnimatePresence } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGoogle,

} from '@fortawesome/free-brands-svg-icons'

const Background = styled.div`
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`

const Shape = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
  /* background-image: url('https://i.pinimg.com/564x/67/b4/d8/67b4d810c2761e51daa5ca5a6ec0761b.jpg'); */
  background: linear-gradient(#1845ad, #23a2f6);
  left: -130px;
  top: -120px;
  background-size: cover;
`
const ShapeB = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
  /* background-image: url('https://i.pinimg.com/236x/7b/6a/fd/7b6afda921051f0721818901e890deb5.jpg'); */
  background: linear-gradient(to right, #ff512f, #f09819);

  right: -75px;
  background-size: cover;
  bottom: -120px;
  background-position: top left;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
`

const FormHeader = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  color: white;
  margin-bottom: 20px;
`
const FormInput = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 13px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  color: white;
  margin-bottom: 30px;
  ::placeholder {
    color: white;
    font-size: 15px;
    font-weight: 600;
  }
`

const FormLoginBtn = styled.input`
  margin-top: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.27);
  color: white;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 13px;
  outline: none;
  border: none;
  margin-bottom: 40px;
  cursor: pointer;
`
const FormSocialLoginBtn = styled.div<{ name: string }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* background: red; */
  width: 150px;
  border-radius: 10px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
  cursor: pointer;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
    border: 2px solid white;
    transition-delay: 2s ease-in-out;
  }
`
const FormSocialLoginSpan = styled.span`
  font-size: 19px;
  margin-left: -10px;
  color: white;
`

interface ILogInProp {
  loggedIn:(isLoggedIn: boolean) => void;
}

const Auth = ({ loggedIn }: ILogInProp) => {
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
      if (newAccount) {
        // @ts-ignore
        await createUserWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            const user = userCredential.user
            console.log(user)
          }
        )
      } else {
        // @ts-ignore
        await signInWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            const user = userCredential.user
            console.log(user)
          }
        )
      }
    } catch (error: any) {
      setError(error.message)
    }
  }
  const toggleAccount = () => setNewAccount((prev) => !prev)
  const SocialLogin = async (event: any) => {
    const {
      target: { name },
    } = event
    console.log(name)

    let provider: AuthProvider
    provider = new GoogleAuthProvider()

    const data = await signInWithPopup(auth, provider!)
    console.log(data)
  }

  return (
    <>
      <Background>
        <Shape />
        <ShapeB />
      </Background>
      <Form onSubmit={onSubmit}>
        <FormHeader>Login Here</FormHeader>
        <FormInput
          type="text"
          name="email"
          placeholder="Sign Up With Your Email"
          value={email}
          onChange={onFormChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={onFormChange}
          required
        />
        <FormLoginBtn
          type="submit"
          value={newAccount ? 'Create A New Account' : 'Login'}
        />
        <AnimatePresence>
          <FormSocialLoginBtn onClick={SocialLogin} name="google">
            <FontAwesomeIcon icon={faGoogle} color="white" size="2x" />
            <FormSocialLoginSpan>Google</FormSocialLoginSpan>
          </FormSocialLoginBtn>
        </AnimatePresence>
      </Form>
    </>
  )
}

export default Auth
