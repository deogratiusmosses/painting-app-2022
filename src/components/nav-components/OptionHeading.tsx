import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
  margin-bottom: 7px;
`
const Heading = styled.h3`
  font-size: 17px;
`

interface SettingHeadingProps {
  title: string
  settingOpen: boolean
  toogleSetings: () => void
}
function SettingHeading({
  title,
  settingOpen,
  toogleSetings,
}: SettingHeadingProps) {
  return (
    <Header>
      <Heading>{title}</Heading>
      <FontAwesomeIcon
        onClick={toogleSetings}
        icon={settingOpen ? faCaretUp : faCaretDown}
        size="sm"
      />
    </Header>
  )
}

export default SettingHeading
