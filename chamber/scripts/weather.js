


// Get Current Weather
const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=14.85&lon=-91.53&units=imperial&appid=d48e24b6d05f6a9d5a7f668a71f9609f';
const urlForecast ='https://api.openweathermap.org/data/2.5/forecast?lat=14.85&lon=-91.53&units=imperial&appid=d48e24b6d05f6a9d5a7f668a71f9609f';



  

// Fetch weather From appi
  async function apiFetchWeather() {
    try {
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetchWeather();

//Display todays weather
function displayResults(data) {

  document.getElementById("desc").textContent = data.weather[0].description;
  document.getElementById("temp").textContent = `${data.main.temp.toFixed(0) + "\xB0F"}`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let capDesc=data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
   weatherIcon.setAttribute('alt', capDesc);

  

}

//fetch Foreast Api  
async function apiFetchForecast() {
  try {
      const response = await fetch(urlForecast);
      if (response.ok) {
          const data = await response.json();
          displayForecastResults(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}
apiFetchForecast();


const weatherIcon = document.querySelector('#weather-icon');


//Show and hide banner----------------------------------------
/*
document.addEventListener('DOMContentLoaded', function() {
      var fecha=new Date();
      var todayDayNumber=fecha.getDay();
      if (todayDayNumber>=1 && todayDayNumber<=3) {
        document.getElementById("chamberBanner").style.display="block";
        
      }

});

document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("chamberBanner").style.display = "none";
});*/

//---------------------------------------------------------------

//Display 3 day forecast starting tommorow
function displayForecastResults(data){
  const d=new Date();
  const todayDayNumber=d.getDay();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const weatherList=data.list;
    let forecastDayNumber=todayDayNumber;
    let days = 0;
    //iterate 
    weatherList.forEach((weather) => {
      let time=weather.dt_txt;
      

      if (time.includes("18:00:00") && days <3) {
        forecastDayNumber+=1;
        if (forecastDayNumber ===7) {
            forecastDayNumber=0;
        }
          const forecastItem =document.createElement("div");
          forecastItem.classList="forecast-item";
          const dayName=document.createElement("h3");

          dayName.textContent=weekday[forecastDayNumber]
          
          const iconsrc = "//openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"
          const weatherIcon=document.createElement("img");
          
          let desc = weather.weather[0].description;
          let captionDesc = document.createElement("figcaption");
          let capDesc=desc;
          weatherIcon.setAttribute('src', iconsrc);
          weatherIcon.setAttribute('alt', capDesc);
     
          captionDesc.textContent=capDesc;
          const temp = document.createElement("p");

          temp.textContent = weather.main.temp.toFixed(0) +"\xB0F";



          forecastItem.appendChild(dayName);
          forecastItem.appendChild(weatherIcon);
          forecastItem.appendChild(captionDesc)
          forecastItem.appendChild(temp);

          document.querySelector(".forecast-box").appendChild(forecastItem);

          days++;

        
      }

    }


)};



