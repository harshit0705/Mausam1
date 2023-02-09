
import './App.css';
import Navbar from './component/Navbar';
import Info from './component/Info';
import { useEffect, useState } from 'react';

function App() {
  const [temp,newtemp]=useState()
  const [city,newcity]=useState("london");
  const [weather,newweather]=useState();
  const [country,newcountry]=useState();
  const [min_temp,newmin_temp]=useState();
  const [max_temp,newmax_temp]=useState();
  const [Humidity,newHumidity]=useState();
  const [feels_like,newfeels_like]=useState();
  const [pressure,newpressure]=useState();
  const [wind,newwind]=useState();
  const [sunrise,newsunrise]=useState();
  const [sunset,newsunset]=useState();
  const [timezone,newtimezone]=useState();  
  const [id,newid]=useState(); 
  const [bg,newbg]=useState();
  const [icon,newicon]=useState();
  const [day_night,newday_night]=useState();
  

  
    const fetchapi=async(event) =>{
  
      const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1099c78179470c9c85c748e255af8e04`
      const response= await fetch(api);
      
      const json= await response.json();
      
       newtemp(Math.trunc(json.main.temp));
       newcity(json.name)
       newweather(json.weather[0].main)
       newcountry(json.sys.country);
       newmin_temp(Math.trunc(json.main.temp_min))
       newmax_temp(Math.trunc(json.main.temp_max))
       newHumidity(json.main.humidity)
       newfeels_like(Math.trunc(json.main.feels_like))
       newpressure(json.main.pressure)
       newwind(json.wind.speed)
       newsunrise(json.sys.sunrise)  
       newsunset(json.sys.sunset)    
       newtimezone(json.timezone)
       newid(json.weather[0 ].id)
       if(json.weather[0].icon.includes('d')){
        newday_night(1)
       }
       else{
        newday_night(2)
       }

       if(id>=200&&id<=232){
        newbg('thunder')
        newicon('icon_thunder')
       }
       else if(id>=600&&id<=622){
        newbg('snow')
        newicon('icon_snow')
       }
       else if(id>=701&&id<=781){
        newbg('fog')
        newicon('icon_fog')
       }
       else if(id>=801&&id<=804){
        newbg('clouds')
        newicon('icon_clouds')
       }
       else if(id===800){
        newbg('clear')
        newicon('icon_clear')
       }
       else if(id>=300&&id<=321){
        newbg('rain')
        newicon('icon_drizzle')
       }
       else if(id>=500&&id<=531){
        newbg('rain')
        newicon('icon_rain')
       }
       
        
       
    }

  useEffect(()=>{
    fetchapi();

  });
  
 
  return (
   <>
   <div style={{fontFamily: `Roboto,sans-serif`,color:"white"}} >
   <Navbar newcity={newcity}></Navbar>
   
     <Info day_night={day_night} icon={icon} bg={bg} temp={temp} city={city} weather={weather} country={country}
     min_temp={min_temp} max_temp={max_temp} Humidity={Humidity} feels_like={feels_like} pressure={pressure} 
     wind={wind}  sunrise={sunrise} sunset={sunset} timezone={timezone} ></Info>
     </div>

   </>
  );
}

export default App;
