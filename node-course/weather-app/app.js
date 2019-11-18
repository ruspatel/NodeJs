const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//api url
//const url = 'https://api.darksky.net/forecast/bbd429de0bff23627c60f113dc9ed810/23.5880,72.3693?units=si'

// request({url: url, json : true}, (error, response) => {
//     //console.log(response)
//     //parsing the data to convert JSON to Javascript object
//     //json is set to true so no need for: const data = JSON.parse(response.body)

//     if(error){
//         console.log('Unable to connect to network!')
//     }else if(response.body.error){
//         console.log('Unable to find location!')
//     }else{
//         const currentTemp = response.body.currently.temperature
//         const precipChance = response.body.currently.precipProbability
//         console.log("It is currently "+currentTemp+", with a "+precipChance+" chance of precipiation (snow or rain).")
//     }
// })

// Geocoding: converting address to a latitude and longitude address
// mapbox access token: pk.eyJ1IjoicnVzcGF0ZWwiLCJhIjoiY2szM2V1MWVlMHUyNDNvazNkNXhsb2JrYyJ9.UDAYGOlItoCYAyr0n3LRFA

// const geocode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Mehsana,India.json?access_token=pk.eyJ1IjoicnVzcGF0ZWwiLCJhIjoiY2szM2V1MWVlMHUyNDNvazNkNXhsb2JrYyJ9.UDAYGOlItoCYAyr0n3LRFA'

// request({url: geocode_url, json: true}, (error, response) => {
//     if(error){
//         console.log("Unable to connect to network!")
//     }else if(response.body.features.length === 0){
//         console.log("Unable to find location!")
//     }else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log("The latitude and longitude are "+latitude+", "+longitude+" .")
//     }
// }
// )


 geocode('Sydney, Australia', (error, data) => {
    console.log('Error', error)
    console.log('data', data)
})


forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })