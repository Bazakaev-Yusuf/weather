import Switch from "./Switch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { weatherTemp, erBtn } from "./action";

// Имопрты Компонентов
import Progress from "./Progress";
import MainCardWeather from "./MainCardWeather";
import WindHumRain from "./WindHumRain";
import WeatherCarousel from "./WeatherCarousel";
import CityForm from "./CityForm";
import Clock from "./Clock";
import Loader from "./Loader";

//импорты картинок на замену
import cloudMoonR from './static/img/Cloud-Moon-Rain.png'
import cloudSunR from './static/img/Cloud-Sun-Rain.png'
import W50 from './static/img/Wind50.png'
import SunC from './static/img/Sun-Cloud.png'
import Thunder from './static/img/Thunder.png'
import Rain from './static/img/Rain.png'
import Moon from './static/img/Moon.png'
import Sun from './static/img/Sun.png'
import Cloud from './static/img/Cloud.png'
import MoonC from './static/img/moon-cloud.png'
import SnowClear from './static/img/SnowClear.png'


function App(){
   
   const loading = useSelector(state => state.loading);
   const er = useSelector(state => state.error);
   const weather = useSelector(state => state.arr);
   const city = useSelector(state => state.city);
   
   const dispatch = useDispatch();



   const date = new Date();
   const arr2 = weather.list?.filter(item => {
      return new Date(item.dt_txt).getDate() === date.getDate() && new Date(item.dt_txt).getHours() <= date.getHours();
   })


   useEffect(() => {
      dispatch(weatherTemp(city))  
      },
      [dispatch, city]
   );
   
   
   //Замена иконок на НЕ уродские
   const icon = (i) => {

      switch(i){
         case '01d':
            return Sun
         case '01n':
            return Moon
         case '02d':
            return SunC
         case '02n':
            return MoonC
         case '03d':
            return Cloud
         case '03n':
            return Cloud
         case '04d':
            return Cloud
         case '04n':
            return Cloud
         case '09d':
            return Rain
         case '09n':
            return Rain
         case '10d':
            return cloudSunR
         case '10n':
            return cloudMoonR
         case '11d':
            return Thunder
         case '11n':
            return Thunder
         case '13d':
            return SnowClear
         case '13n':
            return SnowClear
         case '50d':
            return W50
         case '50n':
            return W50
         default:
            return Moon;
      }
   }
   
   const erChange = () => {
      dispatch(erBtn())
   }

   return(
      <div className="app">
         
         {/* типа модальное окно при ошибке ввода города */}
         <div className={er ? 'error error_true' : 'error'}>
            <p className="error-txt">Ведите корректное название города</p>
            <button className={er ? 'error-btn' : 'error-btn error-btn2'} onClick={erChange}>X</button>
         </div>

         {loading ? 
               <Loader/>
            :
            <div className="container">
            <div className="main">
               <div className="main-head">
                  <img src={icon(arr2[0]?.weather[0].icon)} alt="moon" className="moon" />
                  <Switch/>
               </div>
               <MainCardWeather/>
               <WindHumRain/>
               <WeatherCarousel icon={icon}/>
            </div>
            <div className="a-side">
               <CityForm/>
               <Clock/>
               <Progress/>
            </div>
            
         </div>
         }
      </div>
   )
};

export default App;