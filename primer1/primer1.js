// function temperatureConversion(temperature, fromScale, toScale){

// // TODO: Validate the input:
// //        - Check if the temperature is null, undefined, or a non-numeric string. If so, throw an error "Invalid temperature input".
// //        - Convert the temperature to a number.
// //        - Normalise fromScale and toScale to uppercase.
// //        - Check if fromScale and toScale are valid ( e.g. 'C', 'F'). If not, throw an error "Invalid conversion type or input scale".

// // TODO: Define helper functions for the conversions:
// //        - toFahrenheit(celsius): Converts Celsius to Fahrenheit.
// //        - toCelsius(fahrenheit): Converts Fahrenheit to Celsius.
// //        
// // TODO: Implement the conversion logic:
// //        - Use conditional logic to handle different toScale values (e.g. 'C', 'F').
// //        - Within each condition, handle conversions from different fromScale values (e.g. 'C', 'F') to the target toScale.
// //        - Use the helper functions to perform the actual conversions.


// }


function temperatureConversion(temperature, fromScale, toScale) {
    if (temperature === null || temperature === undefined || isNaN(Number(temperature))) {
        throw new Error("Invalid temperature input");
    }
    temperature = Number(temperature);

    fromScale = fromScale.toUpperCase();
    toScale = toScale.toUpperCase();

    //        Checking if fromScale and toScale are valid (e.g. 'C', 'F'). If not, throw an error "Invalid conversion type or invalid input scale".
    const validScales = ['C', 'F', 'K'];
    if (!validScales.includes(fromScale) || !validScales.includes(toScale)) {
        throw new Error("Invalid conversion type / input scale");
    }

    //        Convert Fahrenheit to Celsius
    function celsiusToFahrenheit(temp) {
        return (temp * 9) / 5 + 32;
    }

    //        Convert Fahrenheit to Celsius.
    function fahrenheitToCelsius(temp) {
        return ((temp - 32) * 5) / 9;
    }

    //        Convert Celsius to Kelvin.
    function celsiusToKelvin(temp) {
        return temp + 273.15;
    }

    //        Convert Fahrenheit to Kelvin.
    function fahrenheitToKelvin(temp) {
        return fahrenheitToCelsius(temp) + 273.15;
    }

    //        - toCelsius(kelvin): Converts Kelvin to Celsius.
    function kelvinToCelsius(temp) {
        return temp - 273.15;
    }

    //        - toFahrenheit(kelvin): Converts Kelvin to Fahrenheit.
    function kelvinToFahrenheit(temp) {
        return celsiusToFahrenheit(temp - 273.15);
    }

    return fromScale === 'C'
        ? toScale === 'K'
            ? celsiusToKelvin(temperature) // Celsius to Kelvin
            : toScale === 'F'
                ? celsiusToFahrenheit(temperature) // Celsius to Fahrenheit
                : temperature // No conversion needed
        : fromScale === 'F'
            ? toScale === 'K'
                ? fahrenheitToKelvin(temperature) // Fahrenheit to Kelvin
                : toScale === 'C'
                    ? fahrenheitToCelsius(temperature) // Fahrenheit to Celsius
                    : temperature // No conversion needed
            : fromScale === 'K'
                ? toScale === 'C'
                    ? kelvinToCelsius(temperature) // Kelvin to Celsius
                    : toScale === 'F'
                        ? kelvinToFahrenheit(temperature) // Kelvin to Fahrenheit
                        : temperature // No conversion needed
                : temperature; // Default case if `fromScale` is invalid
}

console.log(temperatureConversion(32,"F","K"));
export default temperatureConversion;





