import { extractCoordinates } from './extractCoordinates'
import haversineDistance from './haversine'
import carbonEstimate from './carbonEstimate'
import { airportSearch } from './airportSearch'

export function calculate(destination: string, departure: string): string {

  const depData = airportSearch(departure)

  const destData = airportSearch(destination)



  const coordinates = extractCoordinates(depData, destData)
  const distance = haversineDistance(
    coordinates.departure,
    coordinates.destination,
    false
  )

  const carbonEmissions = carbonEstimate(distance, 1, false, false)

  return carbonEmissions
}
