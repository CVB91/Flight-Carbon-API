const data = require('./iatacodes.json')


interface Airport {
  iata_code: string;
  time_zone_id: string;
  name: string;
  city_code: string;
  country_id: string;
  location: string;
  elevation: number;
  url: string;
  icao: string;
  city: string;
  county: string;
  municipality: string;
  id: number;
}

const airports: Airport[] = data;

function airportSearch(iatacode: string): string  {
  const airport = airports.find((a) => a.iata_code === iatacode);

  if (airport) {
    return airport.location;
  }

  return 'error in airport search';
}
export {airportSearch}
