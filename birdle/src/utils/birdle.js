import data from './birds.json'

const dataObject = data.reduce((acc, item) => {
  acc[item.id] = item
  return acc
}, {})

export const getCurrentDayTimeData = () => {
  // Calculate which bird to use based on date
  const today = new Date()
  const start = new Date(2022, 0, 21)
  const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
  const diff = today - start
  const day = Math.floor(Math.abs(diff / oneDay)) % data.length
  const hours = Math.round(((oneDay - (diff % oneDay)) / oneDay) * 24)
  return { day, hours }
}

export const getEdgeBirds = () => {
  const edgeBirds = []
  data.forEach((item) => {
    const splitName = item.name.split(' ')
    if (splitName.length > 1) {
      edgeBirds.push(
        splitName[splitName.length - 1].toUpperCase().replace(/[^a-zA-Z]+/g, '')
      )
    }
  })
  return [...new Set(edgeBirds)]
}

export const getTodayBird = (day) => {
  const todayBird = data[day]
  const initialHint = todayBird.name.replace(/[a-zA-Z]/g, '_')
  return { ...todayBird, initialHint }
}
