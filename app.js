/**
 * Mutluhan Boz 09.2019 
 * callback functions and http requests practice.
 */

const getCoordinates = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


const location = process.argv[2]

if(!location){
    console.log("Please give a city name as a parameter ! ");
    process.exit()
    
}

getCoordinates(location, (error,data)=>{
    if(error){
        return console.log(error);
    }
    forecast(data.latitude, data.longtitude,(error, forecastData) =>{
        if (error) {
            return console.log(error);
        }
        console.log(data.location)
        console.log(forecastData)
    })
})
