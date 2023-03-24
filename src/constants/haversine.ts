interface Coordinates {
  latitude: number
  longitude: number
}

function haversineDistance(
  departureDetails: Coordinates,
  destinationDetails: Coordinates,
  isMiles: boolean
): number {
  // Helper function to convert an angle in degrees to radians
  function toRadians(angleInDegrees: number): number {
    return (angleInDegrees * Math.PI) / 180
  }

  // Extract the longitude and latitude coordinates of the departure and destination points
  const lon1 = departureDetails.longitude
  const lat1 = departureDetails.latitude
  const lon2 = destinationDetails.longitude
  const lat2 = destinationDetails.latitude

  // Earth's radius in km
  const R = 6371

  // Calculate the differences in latitude and longitude coordinates in radians
  const dLat = toRadians(lat2 - lat1)
  const dLon = toRadians(lon2 - lon1)

  // Calculate the haversine distance using the haversine formula
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)

  // Calculate the great-circle distance
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  let d = R * c

  // Convert the distance to miles if isMiles parameter is true
  if (isMiles) {
    d /= 1.60934
  }

  // Return the calculated distance
  return d
}

export default haversineDistance
