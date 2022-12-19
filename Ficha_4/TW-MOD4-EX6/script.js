function  celsiusToFahrenheite(temp)
{
    var tempF = ((temp * 9)/5) + 32;
    console.log("C = " + tempF + " Fahrenheite");
}
function  fahrenheiteToCelsius(temp)
{
    var tempF = ((temp -32)*5)/9;
    console.log("F = " + tempF + " Celsius");
}
celsiusToFahrenheite(20);
fahrenheiteToCelsius(20);