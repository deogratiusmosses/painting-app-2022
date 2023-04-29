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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoicemail } from '@fortawesome/free-solid-svg-icons'

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
`

const FormLoginBtn = styled.button`
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 13px;
  outline: none;
  border: none;
  margin-bottom: 40px;
  cursor: pointer;
`
const FormSocialLoginBtn = styled.div`
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
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
  const onSocialClick = async (event: any) => {
    // const {
    //   target: { name },
    // } = event
    // let provider
    // if (name === 'google') {
    //   provider = new firebaseInstance.auth.GoogleAuthProvider()
    // }
    // const data = await signInWithPopup(auth, provider)
  }

  // return (
  //   <LoginWrapper>
  //     <LoginContents>
  //       <LoginContentsForm>
  //         <LoginForm onSubmit={onSubmit}>
  //           <>
  //             <LoginInputs
  //               type="text"
  //               name="email"
  //               placeholder="Sign Up With Your Email"
  //               value={email}
  //               onChange={onFormChange}
  //               required
  //             />
  //           </>
  //           <LoginInputs
  //             type="password"
  //             name="password"
  //             placeholder="Enter Your Password"
  //             value={password}
  //             onChange={onFormChange}
  //             required
  //           />
  //           <LoginBtn
  //             type="submit"
  //             value={newAccount ? 'Create Account' : 'Log In'}
  //           />
  //           {error}
  //         </LoginForm>
  //         {/* <LoginBtn onClick={toggleAccount}>
  //           {newAccount ? 'Log In' : 'Create Account'}
  //         </LoginBtn> */}
  //         <div>
  //           <SocialLoginBtn onClick={onSocialClick} name="google">
  //             Google
  //           </SocialLoginBtn>
  //         </div>
  //       </LoginContentsForm>
  //     </LoginContents>
  //   </LoginWrapper>
  // )

  return (
    <>
      <Background>
        <Shape />
        <ShapeB />
      </Background>
      <Form>
        <FormHeader>Login Here</FormHeader>
        <FormInput
          type="text"
          name="email"
          placeholder="Sign Up With Your Email"
          value={email}
          onChange={onFormChange}
          required
          id="inputId"
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={onFormChange}
          required
          id="inputId"
        />
        <FormLoginBtn type="submit" value={'login'}>
          Log In
        </FormLoginBtn>
        <FormSocialLoginBtn>Google</FormSocialLoginBtn>
      </Form>
    </>
  )
}

export default Auth
