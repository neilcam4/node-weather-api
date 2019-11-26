
const request = require('request')

const url = 'https://api.darksky.net/forecast/fd5e287218c7970fa6a0c070433a8d24/37.8267,-122.4233?units=si'

request({url:url, json:true}, (error, response)=>{
    console.log(response.body.currently)
    let data = response.body.currently
    console.log(`It is currently  ${data.temperature}C and there is a ${data.precipProbability}% chance of rain`)
})

// const request = require("request")

// const url = 'https://api.darksky.net/forecast/fd5e287218c7970fa6a0c070433a8d24/37.8267,-122.4233?units=si'

// // request({url:url}, (error, response) =>{
// //     let data = JSON.parse(response.body)
// //     console.log(data.currently)
// //     console.log(`The overall summary is ${data.currently.summary}. The nearest storm distance is ${data.currently.nearestStormDistance} miles away. The wind spped is ${data.currently.windSpeed} miles per hour.`)
// // })

// function showWeather(url){
//     request({url:url}, (error, response) =>{
//         let data = JSON.parse(response.body)
//         // console.log(data.currently)
//         // console.log(`The overall summary is ${data.currently.summary}. The nearest storm distance is ${data.currently.nearestStormDistance} miles away. The wind spped is ${data.currently.windSpeed} miles per hour.`)
//         let windSpeed = data.currently.windSpeed
//         console.log(windSpeed)
//     }) 
//     document.getElementById("weather").textContent(windSpeed)
// }
// showWeather(url)






