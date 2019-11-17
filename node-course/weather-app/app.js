const request = require('request')

//api url
const url = 'https://api.darksky.net/forecast/bbd429de0bff23627c60f113dc9ed810/43.7315, 79.7624?units=si'


request({url: url, json : true}, (error, response) => {
    //console.log(response)
    //parsing the data to convert JSON to Javascript object
    //json is set to true so no need for: const data = JSON.parse(response.body)
    const currentTemp = response.body.currently.temperature
    const precipChance = response.body.currently.precipProbability
    console.log("It is currently "+currentTemp+", with a "+precipChance+" chance of precipiation (snow or rain).")
})

//Geocoding: converting address to a latitude and longitude address
//mapbox access token: pk.eyJ1IjoicnVzcGF0ZWwiLCJhIjoiY2szM2V1MWVlMHUyNDNvazNkNXhsb2JrYyJ9.UDAYGOlItoCYAyr0n3LRFA

const geocode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoicnVzcGF0ZWwiLCJhIjoiY2szM2V1MWVlMHUyNDNvazNkNXhsb2JrYyJ9.UDAYGOlItoCYAyr0n3LRFA'

request({url: geocode_url, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0 ]
    console.log("The latitude and longitude are "+longitude+", "+latitude+" .")
}
)
