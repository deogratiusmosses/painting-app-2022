export const toSeconds = (hrs: number, mins: number, secs: number) => {
  return hrs * 3600 + mins * 60 + secs
}

export const toHours = (secs: number) => {
  return Math.round(((secs / 3600) * 10) / 10)
}
