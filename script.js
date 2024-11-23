const apiKey = "8b718b4d2935b7625fe3a17cf8ced283";

// Your Prcvided Openweather Key
function getWeather() {
    const city = document.getElementById("location").value;
    const weatherDetails = document.getElementById("WeatherDeatils");
    if (city === "") {
        weatherDetails.innerHTML = "<p>Please enter a city</p>";
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);
            console.log(data.weather[0].main);
            if (data.cod === "404") {
                weatherDetails.innerHTML = "<p>city not found</p>";
            }
            else {
                weatherDetails.innerHTML = `<h2>${data.name},${data.sys.country}</h2>
            <p>Temparature:${data.main.temp}</p>`;
            }
            if (data.weather[0].main == 'Smoke') {
                document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.ErHH6UgGfxeQV9dnxw8mpwHaE8?rs=1&pid=ImgDetMain')";
            }
            if (data.weather[0].main == 'Clouds') {
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1561553543-e4c7b608b98d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3VkZSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D')";
            }
            if (data.weather[0].main == 'Clear') {
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1691848748366-8d0d61d801ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww')";
            }
        }
        )
        .catch((error) => {
            weatherDetails.innerHTML = "<p>Error</p>";
        });

}

