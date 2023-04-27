import React, { useEffect, useState } from 'react'
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { useTimer } from 'react-timer-hook'

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

function App() {
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
  )
}

export default App
