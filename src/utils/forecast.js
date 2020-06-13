const request = require('request')

const forecast = (latitide, longitude, callback) => {
    
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitide + '&lon=' + longitude + '&units=metric&appid=5a032b93152809eb63bb7c23f246adef'
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to forecast service!', undefined)
        }else if(body.message){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined,'Current Temperature: ' + body.main.temp + '°C' +'  Feels like: ' + body.main.feels_like + '°C' + '  Max-Temperature: ' + body.main.temp_max + '°C' + '  Min-Temperature: ' + body.main.temp_min + '°C' + '  Humidity: ' + body.main.humidity + '%' + '  Pressure: ' + body.main.pressure + ' hpa')
        }
    })
}

module.exports = forecast