const request = require('request')

const getCoordinates = (address, callbackFunc) =>{
    address = address.replace("İ","i")
    address = address.replace("ş","s")
    address = address.replace("ö","o")
    address = address.replace("ı","i")
    const geocodeUrl ="http://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoibXV0bHVoYW5iIiwiYSI6ImNrMTNvMWV3dDBhazAzY3Azbmwyd3V6YXYifQ.LzSYppxKdWYc1syfaEp_bw"

    request({url: geocodeUrl, json: true}, (error, response) =>{
        if (error) {
            callbackFunc('Unable to connect to location service', undefined)
        }
        else if(response.body.features.length === 0){
            callbackFunc('Unable to find given location please try again!', undefined)
        }
        else{

            callbackFunc(undefined, {
                location: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longtitude: response.body.features[0].center[0],
            })
        }
    })
}


module.exports = getCoordinates
