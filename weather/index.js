"use strict ";
const axios = require('axios');
const apikey = '21249db052fa437dbf9125433191302';


const getWeather = (location) => {
	return new Promise(async (resolve,reject) => {
		try{
			const weatherConditions = await axios.get(
			'http://api.apixu.com/v1/forecast.json',
			{
				params : {
					key: apikey,
					q: location,
					days: 3
				}
			});

		resolve(weatherConditions.data);
	}
	catch (error) {
		console.log("Sorry, I don't know this city.");
	}
	}) ;
}

module.exports = getWeather;