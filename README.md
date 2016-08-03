## Synopsis

This project is a mobile app that allows the user to create a virtual closet that sorts their clothes based on their local weather. It uses a weather API from OpenWeatherMap to get the temperature of the user's desired location. The entire project is coded in HTML, CSS, and JavaScript. PhoneGap was an application we installed in order to make the program suitable for a mobile phone.

## License

This project uses the MIT License:

Copyright (c) 2016 Girls Who Code

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Code Example

if (farenheit_temp > 65) {
    warmButtonFunction();
}
else if (farenheit_temp <= 65) {         
    coldButtonFunction();
}

This piece of code was used to acheive our main goal, which was to allow the user to receive a suggested group of clothing based on their weather. It uses the weather API to create the farenheit_temp variable, and uses the variable to choose where to direct the user.

## Motivation

This project was created over the time span of a week during the 7-week summer immersion program offered by Girls Who Code as a "final project" assignment. It is intended to help those who find it difficult or want a faster way to get dressed.

## Installation

This whole project is stored in one folder called "Clothing Weather" where all the files are stored. The HTML files are in the "www" folder, and inside this folder are the "css" and "js" folders with the other files. The starting page is called "index.html".

## API Reference

API Reference Documents for OpenWeatherMap: http://openweathermap.org/current#name

## Tests

PhoneGap can be used to get a preview of the app and all of its changes. Install PhoneGap on your computer and mobile phone to see how the application will look and feel, and connect to a server to see new changes. PhoneGap also allows multiple devices to connect to the same application and server at one time.

## Contributors

Helpful Resources:
http://www.w3schools.com/
http://stackoverflow.com/
http://openweathermap.org/api
http://phonegap.com/getstarted/

These are the websites we referred to whenever we encountered a problem. 
