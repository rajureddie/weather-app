const apikey="dfeb5f747fcff1bd0a3dbb5849d607a5";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const inputdata=document.querySelector(".search");
const searchbtn=document.querySelector(".search-btn");
const weatherimg=document.querySelector(".weather-img")
 async function checkweather(city) {
    const response=await fetch(apiurl +city+ `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".card-body").style.display = "none";
    }else{
        var data=await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name ;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + `° C`;
        document.querySelector(".humidity").innerHTML=Math.round(data.main.temp) + `%` ;
        document.querySelector(".wind").innerHTML=data.wind.speed + `km/h`;
        let img=data.weather[0].main;
        if(img == "Clouds"){
            weatherimg.src="images/clouds.png";
        }else if(img=="Rain"){
            weatherimg.src="images/rain.png";
        }else if (img=="Clear"){
            weatherimg.src="images/clear.png";
        }else if(img == "Snow"){
            weatherimg.src="images/snow.png";
        }else if(img == "Mist"){
            weatherimg.src="images/mind.png";
        }else if(img == "Drizzle"){
            weatherimg.src="images/drizzle.png";
        }
    
        document.querySelector(".card-body").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
   
    

    
}
searchbtn.addEventListener("click",()=>{
    checkweather(inputdata.value);
})


