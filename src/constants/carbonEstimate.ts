function carbonEstimate(
  distance: number,
  numberPassengers: number,
  isMiles: boolean,
  isLongDistance: boolean
): string {
  // CO2 emissions in grams per passenger per km traveled.
  const shortHaulEmission = 115
  const longHaulEmission = 101

  // Convert distance to kilometers if in miles
  const distanceInKm = isMiles ? distance * 1.60934 : distance

  // Calculate total distance traveled by all passengers
  const totalDistance = distanceInKm * numberPassengers

  // Determine the appropriate emission rate based on trip type
  const emissionRate = isLongDistance ? longHaulEmission : shortHaulEmission

  // Calculate the carbon emissions in grams
  const carbonEmissions = totalDistance * emissionRate

  return carbonEmissions.toString()
}

export default carbonEstimate
