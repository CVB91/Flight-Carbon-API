type Coordinates = {
  latitude: number
  longitude: number
}

export function extractCoordinates(
  destination: string,
  departure: string
): { destination: Coordinates; departure: Coordinates } {
  const regex = /POINT \(([-+]?\d+\.\d+) ([-+]?\d+\.\d+)\)/

  const extractLatLng = (inputString: string): Coordinates => {
    const match = inputString.match(regex)
    if (match) {
      return {
        latitude: parseFloat(match[1]),
        longitude: parseFloat(match[2]),
      }
    } else {
      throw new Error('Invalid input string')
    }
  }

  const destinationCoordinates = extractLatLng(destination)
  const departureCoordinates = extractLatLng(departure)

  return {
    destination: destinationCoordinates,
    departure: departureCoordinates,
  }
}
