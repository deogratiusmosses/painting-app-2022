import { useState, useEffect } from 'react'
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

import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { useTimer } from 'react-timer-hook'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`
const LeftContainer = styled.div`
  width: 5%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const LeftNav = styled(motion.nav)`
  background-color: #404258;
  width: 80px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const NavOptionCarrier = styled.div`
  margin-top: 65px;
  width: 75px;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const NavOption = styled.div`
  margin-bottom: 30px;
  width: 75px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Navtext = styled.span`
  color: gainsboro;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
`

const NavIcon = styled.i`
  margin-top: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gainsboro;
`

const LeftContainerBtnContainer = styled.div`
  width: 5%;
  height: 100px;
`

// const LeftContainerBtn = styled.button`
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

const CenterContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const CenterContainerClock = styled.div`
  width: 100%;
  height: 30vh;
`
const RightContainer = styled.div`
  width: 20%;
  height: 100vh;
  display: flex;
  align-items: end;
`
const RightContainerData = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`
const RightContainerDataBtn = styled.button`
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

function MyTimer({
  days,
  hours,
  minutes,
  seconds,
  isRunning,
  start,
  pause,
  resume,
  restart,
}: any) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date()
          time.setSeconds(time.getSeconds() + 300)
          restart(time)
        }}>
        Restart
      </button>
    </div>
  )
}

function Home() {
  const [toggle, setToggle] = useState(false)
  const toggleSwitch = () => setToggle((prev) => !prev)
  const [alarm, setAlarm] = useState(true)
  const toggleAlarm = () => setAlarm((prev) => !prev)
  const [showing, setShowing] = useState(true)
  const toggleShowing = () => setShowing((prev) => !prev)

  const expiryTimestamp = new Date()
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      console.warn('onExpire called')
    },
  })

  const [totalTime, setTotalTime] = useState(0)
  console.log('Total Seconds', totalTime)

  const [currentTime, setCurrentTime] = useState(0)
  console.log('Current Time', currentTime)

  const [percentage, setPercentage] = useState(0)
  console.log('Percentege', percentage)

  useEffect(() => {
    setCurrentTime(minutes * 60 + seconds)
    setPercentage((currentTime / totalTime) * 100)
    if (!isRunning) {
      setPercentage(0)
    }
  }, [seconds, minutes])

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
        <CenterContainerClock>
          <div>
            <header>
              <span>0min</span>
              <input
                type="range"
                min={0}
                step={60}
                max={600}
                onChange={(event) => {
                  console.log('Input Value', event.target.value)
                  setPercentage(100)
                  const time = new Date()
                  time.setSeconds(time.getSeconds() + +event.target.value)
                  restart(time)
                  //setTotalTime(minutes * 60 + seconds)
                  setTotalTime(+event.target.value)
                  setCurrentTime(+event.target.value)
                }}
              />
              <span>10min</span>
              <div style={{ backgroundColor: 'aqua', width: 200 }}>
                <CircularProgressbarWithChildren
                  strokeWidth={50}
                  counterClockwise={true}
                  value={percentage}
                  styles={buildStyles({
                    backgroundColor: 'red',
                    pathColor: 'red',
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    textSize: '16px',
                    rotation: 0.25,
                    strokeLinecap: 'butt',
                  })}></CircularProgressbarWithChildren>
              </div>

              <div>
                <MyTimer
                  minutes={minutes}
                  seconds={seconds}
                  isRunning={isRunning}
                  start={start}
                  pause={pause}
                  resume={resume}
                  restart={restart}
                  hours={hours}
                  days={days}
                />
              </div>
            </header>
          </div>
        </CenterContainerClock>
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
