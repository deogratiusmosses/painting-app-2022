import { atom } from 'recoil'

export const maxTime = atom({
  key: 'MaximumTime', // unique ID (with respect to other atoms/selectors)
  default: 3600, // default value (aka initial value)
})

export const selectedTime = atom({
  key: 'SelectedTime',
  default: 0,
})

export const currentTimeValue = atom({
  key: 'CurrentTimeValue',
  default: 0,
})

export const displayFillColor = atom({
  key: 'DisplayColor',
  default: '#f7c00d',
})
