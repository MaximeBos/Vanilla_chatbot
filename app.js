'use strict';

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});
const matcher = require('C:/Users/maxim/Documents/ESILV/S8/Chatbot/vanilla/matcher');
const weather = require ('C:/Users/maxim/Documents/ESILV/S8/Chatbot/vanilla/weather');
const {currentWeather, forecastWeather} = require ('C:/Users/maxim/Documents/ESILV/S8/Chatbot/vanilla/parser');
 

rl.setPrompt( '>  ');
rl.prompt();
rl.on('line', reply => {
	
	matcher(reply, data => {
		
		switch(data.intent) {
			case 'Hello':
				console.log(`${data.entities.greeting} to you too.`);
				rl.prompt();
				break;
				
			case 'Exit':
				console.log("Bye !");
				process.exit(0);
				break;
				
			case 'CurrentWeather':
				console.log("Let me check...");
				weather(data.entities.city)
					.then(response => {
						let parseResult = currentWeather(response); //call the currentWeather function with the reponse
						console.log(parseResult);
						rl.prompt();
					})
					.catch(error => {
						console.log("There seems to be a problem connecting to the Weather service :(");
						rl.prompt();
					})
				break;
				
			case 'WeatherForecast':
				console.log("Let me check the forecast...");
				weather(data.entities.city)
					.then(response => {
						let parseResult = forecastWeather(response, data);
						console.log(parseResult);
						rl.prompt();
					})
					.catch(error => {
						console.log("There seems to be a problem connecting to the Weather service !");
						rl.prompt();
					})
				break;
				
				
			default: {
				console.log("Sorry I don't understand what you said.");
				rl.prompt();
			}
		}
		rl.prompt();
	});
});