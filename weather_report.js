// Step 2: Defining variables and functions
function showweatherDetails(event) { //prevents the default behavior of an event, such as form submission
  event.preventDefault();

  const city = document.getElementById('city').value;
  const apiKey = '80f01c6bb2f6c0db4b56fa922c933d96'; // Replace 'YOUR_API_KEY' with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
  //Note, the '&#8451' is an HTML entity code for the degree symbol (°) Celcius.
  })
  .catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
