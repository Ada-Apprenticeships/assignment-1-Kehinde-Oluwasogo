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





