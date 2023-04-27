import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
// import {} from 'react-toggle-button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClock,
  faDatabase,
  faDisplay,
  faLanguage,
  faBell,
} from '@fortawesome/free-solid-svg-icons'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`
export const LeftContainer = styled.div`
  width: 5%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const LeftNav = styled(motion.nav)`
  background-color: #404258;
  width: 80px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const NavOptionCarrier = styled.div`
  margin-top: 65px;
  width: 75px;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const NavOption = styled.div`
  margin-bottom: 30px;
  width: 75px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Navtext = styled.span`
  color: gainsboro;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
`

export const NavIcon = styled.i`
  margin-top: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gainsboro;
`

export const LeftContainerBtnContainer = styled.div`
  width: 5%;
  height: 100px;
`

// export const LeftContainerBtn = styled.button`
//   width: 5%;
//   height: 30px;
//   background-color: white;
//   border: 1px solid black;
//   outline: none;
//   border-radius: 20px;
//   position: absolute;
//   bottom: 0;
//   left: 0;
// `

export const CenterContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const CenterContainerClock = styled.div`
  width: 100%;
  height: 30vh;
  border-radius: 50%;
`
export const RightContainer = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  align-items: end;
`
export const RightContainerData = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`
export const RightContainerDataBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: transparent;
  border: 3px solid white;
  outline: none;
  color: white;
  border-radius: 20px;
`
const Switch = styled(motion.div)`
  width: 35px;
  height: 20px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 40px;
  display: flex;
  align-items: center;
  /* justify-content: end; */
  padding: 0px 3px;
`

const SwitchCircle = styled(motion.div)`
  width: 15px;
  height: 15px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: white;
`

const SwitchData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
`
const SwitchDataInfo = styled.span`
  font-size: 12px;
  color: white;
`

function Home() {
  const [toggle, setToggle] = useState(false)
  const toggleSwitch = () => setToggle((prev) => !prev)
  const [alarm, setAlarm] = useState(true)
  const toggleAlarm = () => setAlarm((prev) => !prev)
  const [showing, setShowing] = useState(true)
  const toggleShowing = () => setShowing((prev) => !prev)
  return (
    <Wrapper>
      <LeftContainer>
        <AnimatePresence>
          {showing ? (
            <LeftNav
              layoutId="hide"
              initial={{ translateX: -100 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: -100 }}
              layout>
              <NavOptionCarrier>
                <NavOption>
                  <FontAwesomeIcon icon={faDatabase} color="gainsboro" />
                  <Navtext>Records</Navtext>
                </NavOption>

                <NavOption>
                  <FontAwesomeIcon icon={faClock} color="gainsboro" />
                  <Navtext>Time</Navtext>
                </NavOption>

                <NavOption>
                  <FontAwesomeIcon icon={faDisplay} color="gainsboro" />
                  <Navtext>Display</Navtext>
                </NavOption>

                <NavOption>
                  <FontAwesomeIcon icon={faLanguage} color="gainsboro" />
                  <Navtext>Language</Navtext>
                </NavOption>

                <NavOption>
                  <FontAwesomeIcon icon={faBell} color="gainsboro" />
                  <Navtext>Notification</Navtext>
                </NavOption>
              </NavOptionCarrier>
            </LeftNav>
          ) : null}

          {/* <LeftContainerBtn onClick={toggleShowing}>show/hide</LeftContainerBtn> */}
        </AnimatePresence>
      </LeftContainer>
      <CenterContainer>
        <Title>TimeMate</Title>
        <CenterContainerClock></CenterContainerClock>
      </CenterContainer>
      <RightContainer>
        <RightContainerData>
          <RightContainerDataBtn>Start Focus</RightContainerDataBtn>
          <SwitchData>
            <SwitchDataInfo>Activate alarm sound</SwitchDataInfo>
            <Switch
              onClick={toggleSwitch}
              style={{
                justifyContent: toggle ? 'end' : 'start',
              }}>
              <SwitchCircle layout></SwitchCircle>
            </Switch>
          </SwitchData>
          <SwitchData>
            <SwitchDataInfo>Activate push notification</SwitchDataInfo>
            <Switch
              onClick={toggleAlarm}
              style={{
                justifyContent: alarm ? 'end' : 'start',
              }}>
              <SwitchCircle layout></SwitchCircle>
            </Switch>
          </SwitchData>
        </RightContainerData>
      </RightContainer>
    </Wrapper>
  )
}
export default Home
