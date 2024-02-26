// windchill.js

function calculateWindChill(temperature, windSpeed) {
    // Specification Limits
    const minTemperature = 10;
    const minWindSpeed = 3.0;
 
    // Check if input values meet specification limits
    if (temperature <= minTemperature || windSpeed <= minWindSpeed) {
       return "N/A";
    }
 
    // Calculate Wind Chill using the formula
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
 
    // Round the wind chill to one decimal place
    return windChill.toFixed(1) + " °F";
 }
 
 // Get temperature and wind speed values from the HTML elements
 const temperatureElement = document.getElementById("temperature");
 const windSpeedElement = document.getElementById("wind-speed");
 const windChillElement = document.getElementById("wind-chill");
 
 // Parse values from the HTML elements
 const temperatureValue = parseFloat(temperatureElement.textContent);
 const windSpeedValue = parseFloat(windSpeedElement.textContent);
 
 // Calculate and update wind chill
 const windChillResult = calculateWindChill(temperatureValue, windSpeedValue);
 windChillElement.textContent = windChillResult;
 