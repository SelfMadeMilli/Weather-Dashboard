// Define the API key for OpenWeatherMap
// Signup link: https://home.openweathermap.org/users/sign_up
// Signin link: https://home.openweathermap.org/users/sign_in
// TODO: Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = '83f3478b87125d27cc16a6b7eb7b823a'; 

// Get references to necessary DOM elements (e.g., search input, buttons, weather display areas)
// TODO: Replace the 'INSERT_ID_HERE' with the appropriate selector for the DOM elements below
const searchBtn = document.getElementById('search-Btn');
const cityInput = document.getElementById('city-input');
const currentWeatherDisplay = document.getElementById('get-weather');.addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '83f3478b87125d27cc16a6b7eb7b823a'; 
const forecastDisplay = document.getElementById('forcast-display');
const searchHistory = document.getElementById('search-history');

// Fetch the coordinates (latitude and longitude) of a city using the OpenWeatherMap Geocoding API
// TODO: Complete the getCoordinates method. 
function getCoordinates(cityName) {
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    return fetch(geoUrl)
        // TODO: Convert the API response from a raw format (such as text or blob) into a JavaScript object using the .json() method.
        .then(response => response.json())
        .then(data => {
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            // Now fetch the 5-day weather forecast using the coordinates
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        })
        .then(response => response.json())
        .then(forecastData => {
            // Process and display the forecast data
            document.getElementById('weather-results').innerHTML = JSON.stringify(forecastData);
        })
        .catch(error => console.error('Error:', error));
});
                // TODO: Extract the latitude and longitude from the first result in the returned data array (check console).
                lat:
                lon: 
            };
        })
        // TODO: Handle any errors that occur during the API request or response parsing.
        .catch;
}

// Fetch the weather data using the coordinates
// TODO: Complete the getWeather method by filling in the .then(s)
function getWeather(lat, lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    // TODO: Convert the API response into a JSON object using .json() to allow handling of the data in JavaScript.
    .then(response => response.json())
      // TODO: Return the parsed data in the second .then() so that it can be used in the next steps of the promise chain for further processing.
    .then(data => {
        const lat = data.coord.lat;
        const lon = data.coord.lon;
     
     
}
// Display the current weather data
// TODO: Use the 'Current Weather Data' in the console to complete the displayCurrentWeather method
function displayCurrentWeather(data) {
    console.log('Current Weather Data', data);
    const currentWeather = 
    const city = 
    const date = new Date(currentWeather.dt * 1000).toLocaleDateString();
    const temperature = 
    const humidity = 
    const windSpeed = 
    const weatherIcon = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;

    currentWeatherDisplay.innerHTML = `
        <h2>${city} (${date})</h2>
        <img src="${weatherIcon}" alt="Weather Icon">
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}

// Display the 5-day weather forecast
// Now fetch the 5-day weather forecast using the coordinates
return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
})
.then(response => response.json())
.then(forecastData => {
    // Process and display the forecast data
    document.getElementById('weather-results').innerHTML = JSON.stringify(forecastData);
})
.catch(error => console.error('Error:', error));
});

// TODO: Use the '5-day Weather Data' in the console to complete the displayForecast method
function displayForecast(data) {
    console.log('5-day Weather Data', data);
    forecastDisplay.innerHTML = '';
    for (let i = 0; i < data.list.length; i += 8) { // The API provides data every 3 hours, so skip 8 (24-hour intervals)
        const forecastItem = 
        const date = new Date(forecastItem.dt * 1000).toLocaleDateString();
        const temperature = 
        const humidity = 
        const windSpeed = 
        const weatherIcon = `http://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png`;

        forecastDisplay.innerHTML += `
            <div class="forecast-item">
                <h4>${date}</h4>
                <img src="${weatherIcon}" alt="Weather Icon">
                <p>Temp: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            </div>
        `;
    }
}

// Update and store search history in localStorage
function updateSearchHistory(city) {
    localStorage.setItem('lastSearchedCity', city);
    let history = JSON.parse(localStorage.getItem('history')) || [];
   
    // TODO: Check if the city already exists in the search history
    // If the city does not exist, add it to the history array, 
    // then update the localStorage with the new history and re-render the search history.
}

// Display search history from localStorage on page load
function displaySearchHistory() {
    let history = JSON.parse(localStorage.getItem('history')) || [];
    searchHistory.innerHTML = '';  
    // TODO: Iterate through the search history array and create a list item (li) for each city.
    // Set the text content of the li to the city name.
    // Add a click event listener to each li, so when a city is clicked, the weather data for that city is fetched.
    // The event listener fetches coordinates using getCoordinates(), then fetches the weather data with those coordinates,
    // and finally displays the current weather and 5-day forecast using displayCurrentWeather() and displayForecast().
    // Append each li element to the searchHistory DOM element to display the list of searched cities.
    history.forEach(city => {

    });
}

// Event listener for the search button to trigger the weather search and display
// TODO: Complete the search button event listener
searchBtn.addEventListener('click', () => {
    // TODO: Get the city name from the input field
    
    // TODO: If the input field is empty, return

    // Fetch the city coordinates and then get the weather data
    getCoordinates(city)
        // Fetch weather data using the coordinates
        .then(coords => getWeather(coords.lat, coords.lon))
        .then(weatherData => {
            // TODO: Display the current weather
            // TODO: Display the 5-day forecast
            // TODO: Update the search history
        })
        // TODO: Error handling  
});

// TODO: Call the displaySearchHistory function on page load to show saved search history

