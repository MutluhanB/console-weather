const request = require('request')



const forecast = (lat, lon, callbackFunc) => {
    const url = "https://api.darksky.net/forecast/f0aa2cf38f4056659e8a4ba91c574c44/"+lat+","+lon+"?lang=tr&units=si"
    
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callbackFunc("Unable to connect weather service!", undefined)
        }
        else if(response.body.error){
            callbackFunc("Unable to find location!", undefined)
            
        }
        else{
            const dailyData = response.body.daily.data[0].summary;
            let precipProb = response.body.currently.precipProbability*100
            precipProb = precipProb.toFixed(2)
            const currentTempature = response.body.currently.temperature
            const additionalInfo = response.body.daily.summary
            const forecastString = currentTempature+" Derece " + dailyData + "Yağış ihtimali: %"+precipProb+" "+additionalInfo
            callbackFunc(undefined, forecastString)
        }
    })
}



module.exports = forecast