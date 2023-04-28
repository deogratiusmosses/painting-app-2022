import styled from 'styled-components'
import SettingHeading from './OptionHeading'
import { useState } from 'react'
import { accentColor } from '../globals'

const TimeSettingsWrapper = styled.div``

const MaxTimeSettings = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const IntervalSettings = styled(MaxTimeSettings)``

const SettingOption = styled.div`
  height: 20px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 7px 15px;
  border-radius: 17px;
  cursor: pointer;
  transition: all .15s linear;
  &:hover {
    background-color: ${accentColor};
  }
`

function TimeSettings() {
  const [showMaxTimeSettings, setShowMaxTimeSettings] = useState(true)
  const toogleMaxTimeSettings = () => setShowMaxTimeSettings((prev) => !prev)

  const [showIntervalSetttings, setShowIntervalSettings] = useState(false)
  const toogleIntervalSettings = () => setShowIntervalSettings((prev) => !prev)

  return (
    <TimeSettingsWrapper>
      <SettingHeading
        title="Set maximum time"
        settingOpen={showMaxTimeSettings}
        toogleSetings={toogleMaxTimeSettings}
      />
      <MaxTimeSettings>
        {showMaxTimeSettings &&
          [10, 30, 1, 2, 4, 6, 12, 24].map((item) => (
            <SettingOption key={item}>{item}</SettingOption>
          ))}
      </MaxTimeSettings>
      <IntervalSettings>
        <SettingHeading
          title="Set interval per rotation"
          settingOpen={showIntervalSetttings}
          toogleSetings={toogleIntervalSettings}
        />
        {showIntervalSetttings &&
          [1, 5, 10, 15, 30].map((item) => (
            <SettingOption key={item}>{item}</SettingOption>
          ))}
      </IntervalSettings>
    </TimeSettingsWrapper>
  )
}

export default TimeSettings
