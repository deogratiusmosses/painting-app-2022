import styled from 'styled-components'
import ToogleSwitch from './ToogleSwitch'
import { useRecoilValue } from 'recoil'
import { selectedTime } from '../atom'
import { accentColor } from './globals'

const RightContainerData = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 25px;
  padding-right: 45px;
`
const RightContainerDataBtn = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    border: none;
    padding: 12px 22px;
    background-color: ${accentColor};
  }
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

const TextTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const HoursText = styled.span`
  font-weight: lighter;
  font-size: 45px;
`
const MinutesText = styled(HoursText)``
const SecondsText = styled(HoursText)``

interface BottomRightOptionsProps {
  alarmEnabled: boolean
  toggleAlarm: () => void
  notificationEnabled: boolean
  toggleNotification: () => void
  restart: (newExpiryTimestamp: Date, autoStart?: boolean | undefined) => void
  pause: () => void
  hours?: number
  minutes?: number
  seconds?: number
}
function BottomRightOptions({
  alarmEnabled,
  toggleAlarm,
  notificationEnabled,
  toggleNotification,
  restart,
  pause,
  hours,
  minutes,
  seconds,
}: BottomRightOptionsProps) {
  const totalSelectedTime = useRecoilValue(selectedTime)
  return (
    <RightContainerData>
      <RightContainerDataBtn
        onClick={() => {
          console.log('Start timeout for duration of:', totalSelectedTime)
          const time = new Date()
          time.setSeconds(time.getSeconds() + totalSelectedTime)
          restart(time)
        }}>
        Start Focus
      </RightContainerDataBtn>
      <SwitchData>
        <SwitchDataInfo>Activate alarm sound</SwitchDataInfo>
        <ToogleSwitch switchState={alarmEnabled} toogleFunction={toggleAlarm} />
      </SwitchData>
      <SwitchData>
        <SwitchDataInfo>Activate push notification</SwitchDataInfo>
        <ToogleSwitch
          switchState={notificationEnabled}
          toogleFunction={toggleNotification}
        />
      </SwitchData>
      <TextTimerContainer>
        <HoursText>{String(hours).padStart(2, '0')}</HoursText>
        <MinutesText>{String(minutes).padStart(2, '0')}</MinutesText>
        <SecondsText>{String(seconds).padStart(2, '0')}</SecondsText>
      </TextTimerContainer>
    </RightContainerData>
  )
}

export default BottomRightOptions
