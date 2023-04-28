import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClock,
  faDatabase,
  faDisplay,
  faLanguage,
  faBell,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import TimeSettings from './nav-components/TimeSettings'

const LeftNav = styled(motion.nav)`
  position: relative;
  background-color: rgba(50, 50, 65, 0.5);
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const LeftNavSettings = styled(motion.aside)`
  position: absolute;
  left: 80px;
  padding: 0 25px;
  background-color: rgba(50, 50, 65, 0.5);
  border-left: solid 0.5px rgba(200, 200, 200, 0.45);
  border-top-right-radius: 25px;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  transform-origin: left;
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

interface NavigationProps {
  showing: boolean
  setShowing: React.Dispatch<React.SetStateAction<boolean>>
}
function Navigation({ showing, setShowing }: NavigationProps) {
  const toggleShowing = () => setShowing((prev) => !prev)
  const [isTimeOption, setIsTimeOption] = useState(false)

  const [moreNavOptions, setMoreNavOptions] = useState(false)
  return (
    <AnimatePresence>
      {showing ? (
        <LeftNav
          layoutId="hide"
          initial={{ translateX: 0 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: -100 }}
          layout>
          <NavOptionCarrier>
            <NavOption>
              <FontAwesomeIcon icon={faDatabase} color="white" />
              <Navtext>Records</Navtext>
            </NavOption>

            <NavOption
              onClick={() => {
                setMoreNavOptions(true)
                setIsTimeOption(true)
              }}>
              <FontAwesomeIcon icon={faClock} color="white" />
              <Navtext>Time</Navtext>
            </NavOption>

            <NavOption>
              <FontAwesomeIcon icon={faDisplay} color="white" />
              <Navtext>Display</Navtext>
            </NavOption>

            <NavOption>
              <FontAwesomeIcon icon={faLanguage} color="white" />
              <Navtext>Language</Navtext>
            </NavOption>

            <NavOption>
              <FontAwesomeIcon icon={faBell} color="white" />
              <Navtext>Notification</Navtext>
            </NavOption>
          </NavOptionCarrier>
          {moreNavOptions && (
            <LeftNavSettings
              transition={{ duration: 0.1 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}>
              <FontAwesomeIcon
                onClick={() => setMoreNavOptions(false)}
                icon={faAngleLeft}
                style={{ margin: '17px 0px', cursor: 'pointer' }}
              />
              {isTimeOption && <TimeSettings />}
            </LeftNavSettings>
          )}
        </LeftNav>
      ) : null}

      {/* <LeftContainerBtn onClick={toggleShowing}>show/hide</LeftContainerBtn> */}
    </AnimatePresence>
  )
}

export default Navigation
