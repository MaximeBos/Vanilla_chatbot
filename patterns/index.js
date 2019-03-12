const patternDict = [{
	pattern: '\\b(?<greeting>Hi|Hello|Hey )\\b',
	intent: 'Hello'
}, {
	pattern: '\\b(bye|exit)\\b',
	intent: 'Exit'
}, {
	pattern: '\\b(weather)\\b \\bin \\b(?<city>[a-zA-Z]+(?:[ |-][a-zA-Z]+?)*$)\\b',
	intent: 'CurrentWeather'
}, {
    pattern : '\\b(?<adjective>(rainy|clear|cold|sunny|cloudy))\\b \\bin\\b \\b(?<city>[A-Z][a-z]+(?:[ |-][A-Z][a-z]+)*)\\b \\b(?<when>(tomorrow|today))\\b',
	intent : 'WeatherForecast'
}, , {
	pattern: '\\b \\bbe\\b (?<weather>hot|rainy|cold|sunny|cloudy|snow|windy)\\b\\sin\\s\\b(?<city>[a-z]+[ a-z]+?)\\b(?<time>day\\safter\\stomorrow|tomorrow|today|now)$',
	intent: 'WeatherForecast'
},{
	pattern: '\\b(?<weather>hot|rainy|cold|sunny|cloudy|snow|windy)\\b\\s\\b(?<time>day\\safter\\stomorrow|tomorrow|today|now)\\sin\\s\\b(?<city>[a-z]+[ a-z]+?)$',
	intent: 'WeatherForecast'
    }];

module.exports = patternDict;