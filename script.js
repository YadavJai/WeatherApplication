const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.querySelector('.input');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather').style.display = "block";
    }

});

// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
  
    console.log(weather);

    let city = document.querySelector('#city');

    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let temperature = document.querySelector('.temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.querySelector('.minmax');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.querySelector('.weatherstatus');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp6680277.jpg')";

  document.querySelector('.weatherimg').src="weather/sunicon.png";

      
        
    } else if(weatherType.textContent == 'Clouds') {

      
        document.body.style.backgroundImage = "url('weather/cloud.jpg')";

      document.querySelector('.weatherimg').src="weather/cloudicon.png";

      
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('https://www.nj.com/resizer/_H910mpZZi0h28TMonU6tM1dfm4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/TNQWEDH5RJE7RNNRTU4STVZQIY.jpg')";

  document.querySelector('.weatherimg').src="https://icons.veryicon.com/png/o/weather/weather-5/haze-1.png";
  

      
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://static.toiimg.com/photo/resizemode-75,overlay-toiplus,msid-82699216/82699216.jpg')";

  document.querySelector('.weatherimg').src="weather/cloudrain.png";
      
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('weather/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
       document.querySelector('.weatherimg').src="https://cdn-icons-png.flaticon.com/512/17/17785.png";
        
    } 
  else if(weatherType.textContent=='Smoke'){

  
        document.body.style.backgroundImage = "url('https://www.nj.com/resizer/_H910mpZZi0h28TMonU6tM1dfm4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/TNQWEDH5RJE7RNNRTU4STVZQIY.jpg')";


  document.querySelector('.weatherimg').src="https://icons.veryicon.com/png/o/weather/weather-5/haze-1.png";
     
  }

  
  


  
}

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}