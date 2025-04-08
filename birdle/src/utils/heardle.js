import data from '../birds.json'
import { groups } from '../constants/groups'

export function toTitleCase(string) {
  const words = string.split(' ')
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function limitLength(string, num) {
  if (!string || string.length < num) {
    return string
  }
  return `${string.slice(0, num - 3)}...`
}

export const getRandomBirds = (groupKey) => {
  let filteredBirds = groupKey
    ? data.filter((bird) => groups[groupKey].ids.includes(bird.id))
    : [...data]
  const randomIndex = Math.floor(Math.random() * filteredBirds.length)
  const randomIndex2 = Math.floor(Math.random() * (filteredBirds.length - 1))
  const randomIndex3 = Math.floor(Math.random() * (filteredBirds.length - 2))
  const randomIndex4 = Math.floor(Math.random() * (filteredBirds.length - 3))
  const bird = filteredBirds[randomIndex]
  filteredBirds = filteredBirds.filter((b) => b.id !== bird.id)
  const bird2 = filteredBirds[randomIndex2]
  filteredBirds = filteredBirds.filter((b) => b.id !== bird2.id)
  const bird3 = filteredBirds[randomIndex3]
  filteredBirds = filteredBirds.filter((b) => b.id !== bird3.id)
  const bird4 = filteredBirds[randomIndex4]
  const options = [bird, bird2, bird3, bird4].sort(
    (a, b) => 0.5 - Math.random()
  )
  console.log(bird, options)
  return {
    bird,
    options,
  }
}
