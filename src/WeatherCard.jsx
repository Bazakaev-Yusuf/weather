
import { useSelector } from 'react-redux';

import './css/weatherCard.css';


function WeatherCard({icon, arr}) {

   const switchDeg = useSelector(state => state.btnSwitch);
   
   // вывод недели
   const dateNew = new Date(arr.dt_txt);
   let options = { weekday: 'short'};
   let formatDate = new Intl.DateTimeFormat('ru-RU', options);
   let dayIs = formatDate.format(dateNew);
   

   const degF = (arr.main.temp * 1.8) + 32;

   let temp = Math.round(arr.main.temp);


   return(
      <div className="weather">
         <p className="weather-text">{switchDeg ? Math.round(degF) : Math.round(temp)}&deg; {switchDeg ? 'F' : 'C'}</p>
         <div className="weather-img">
            <img src={icon(arr.weather[0].icon)} alt="weather_icon" className='weather-img__icon' />
         </div>
         <p className="weather-week">
            {dayIs}
         </p>
      </div>
   )
}
export default WeatherCard;