const request = require('request')
const geocode = require('./geocode')


// const geocode = (address, callback) => {
//     const geocode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicnVzcGF0ZWwiLCJhIjoiY2szM2V1MWVlMHUyNDNvazNkNXhsb2JrYyJ9.UDAYGOlItoCYAyr0n3LRFA'
//     request({url: geocode_url, json: true}, (error, response) => {
//         if(error){
//             callback('Unable to connect to network!', undefined)
//         }else if(response.body.features.length === 0){
//             callback('Unable to find location! Try another search!', undefined)
//         }else{
//             callback(undefined, {
//                 latitude: response.body.features[0].center[1],
//                 longitude: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name

//             })
//         }
//     })

// }

// module.exports = geocode


const forecast = (latitude, longitude, callback) => {
    const forecast_url = 'https://api.darksky.net/forecast/bbd429de0bff23627c60f113dc9ed810/'+latitude+','+longitude+'?units=si'
    request({url: forecast_url, json : true}, (error, response) => {
            
            if(error){
                callback('Unable to connect to weather service!', undefined)
            }else if(response.body.error){
                callback('Unable to find location!', undefined)
            }else{
                const currentTemp = response.body.currently.temperature
                const precipChance = response.body.currently.precipProbability
                //console.log("It is currently "+currentTemp+", with a "+precipChance+" chance of precipiation (snow or rain).")
                callback(undefined, "It is currently "+currentTemp+", with a "+precipChance+" chance of precipiation (snow or rain).")
        }})
    }


// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })

module.exports = forecast