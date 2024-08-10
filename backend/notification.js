const cron = require('node-cron');
const axios = require('axios');
const { User } = require("./db");
const sendMailNotification = require("./sendMail");

async function checkWeatherAndNotify() {
    try {
        
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: 'Mumbai', // Replace with your city or location
                appid: '498295b20f96fcb697093ffec40b9c6f' // Replace with your weather API key
            }
        });

        const weatherData = response.data;
        // weatherData.weather[0].main === 'Storm' || weatherData.wind.speed > 20
        if (weatherData.weather[0].main === 'Storm' || weatherData.wind.speed > 20) {
            
            const users = await User.find();

           
            users.forEach(user => {
                const message = `Warning: Severe weather conditions detected! Please stay safe.`;
                sendMailNotification(user.email, message);
            });
        }
    } catch (error) {
        console.error('Error checking weather or sending notifications:', error);
    }
}

module.exports = checkWeatherAndNotify;
