'use strict';

const colors = require('colors');
const dictionary = require ('C:/Users/maxim/Documents/ESILV/S8/Chatbot/vanilla/parser');
const moment = require('moment');


let getFeel = temp => { //return a string 
	if (temp < 5) {
		return "shivering cold";
	} else if (temp >=5 && temp<10) {
		return "cold";
	} else if (temp>=10 && temp<15) {
		return "okay";
	} else if (temp>=15 && temp<20) {
		return "good";
	} else if (temp>=20 && temp<25) {
		return "warm";
	} else if (temp>=25 && temp<40) {
		return "hot";
	} else {
		return "very hot";
	}
}


let currentWeather = response => {
		let location = `${response.location.name}, ${response.location.country}`;//create a string with the response and the data in the jsonfile
		let temp = response.current.tempx_c;
		let text = response.current.condition.text;
		return `Actually it's ${text.toLowerCase().red.bold} in ${location.bold}. It is ${getFeel(Number(temp))} at ${temp} degrees celcius.`; //call the function getFeel
}

let forecastWeather = (response, data) => {
	if(response.location.name){
		let location =`${response.location.name}, ${response.location.country}`;
		let regEx = new RegExp(data.entities.adjective, "i"); 
		let testConditions = regEx.test(response.current.condition.text); //check if the adjective from the response equals the information from the jsonfil
		return `${testConditions ? 'Yes' : 'No'},  ${response.current.condition.text.bold},  in ${location}`;
		
	} else {
		return "I don't seem  to konow anything about this place....";
	}	
}

module.exports = {currentWeather, forecastWeather}