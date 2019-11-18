const request = require('request')


const geocode = (address, callback) => {
    const geocode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicnVzcGF0ZWwiLCJhIjoiY2szM2V1MWVlMHUyNDNvazNkNXhsb2JrYyJ9.UDAYGOlItoCYAyr0n3LRFA'
    request({url: geocode_url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to network!', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location! Try another search!', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name

            })
        }
    })

}
// geocode('Sydney, Australia', (error, data) => {
//     console.log('Error', error)
//     console.log('data', data)
// })

geocode('Sydney, Australia', (error, data)=>{
    console.log(data.latitude)

})


module.exports = geocode