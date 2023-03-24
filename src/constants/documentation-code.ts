export const nodejs = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://flightcarbonapi.com/api/v1/flightcarbon',
    params: {
      departure: 'departure iata code',
      destination: 'destination iata code'
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`

export const python = `import requests

url = 'https://flightcarbonapi.com/api/v1/flightcarbon'
api_key = 'YOUR_API_KEY'
departure = 'departure iata code'
destination = 'destination iata code'

headers = {
    'Authorization': api_key
}

payload = {
    'departure': departure,
    'destination': destination
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`
