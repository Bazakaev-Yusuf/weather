
import clockIcon from './static/img/clock.png';

import './css/clock.css';

import { useSelector } from 'react-redux';


function Clock(){

   const myCity = useSelector(state => state.arr.city);



   // показывает время с учетом разницы в часовом поясе
   const setTimezone = (ms, timezone) => {
      return new Date((ms + timezone) + new Date().getTimezoneOffset() * 60 * 1000);
   };

   

   const sunrise = setTimezone(myCity.sunrise * 1000, myCity.timezone * 1000);
   // const sunset = setTimezone(myCity.sunset * 1000, myCity.timezone * 1000);

   const sunset = new Date(((myCity.sunset + myCity.timezone) * 1000) + new Date().getTimezoneOffset() * 60 * 1000);
   

   const options2 = { hour: 'numeric', minute: 'numeric'};
   
   const formatDate2 = new Intl.DateTimeFormat('en-US', options2);

   const timeSunrise = formatDate2.format(sunrise);
   const timeSunset = formatDate2.format(sunset);
   
   //????
   const mid = new Date(((myCity.sunrise * 1000) + (myCity.sunset * 1000)) / 2);

   const midTime = formatDate2.format(mid);
   

   


   return(
      <div className="clock">
         <div className="clock-side">
            <p className='clock-title'>Sunrise</p>
            <div className="clock-card">
               <div className="clock-draw">
                  <img src={clockIcon} alt="" />
               </div>
               <p className="first-time">{timeSunrise.substring(0, timeSunrise.length - 2)}</p>
               <p className="second-time">AM</p>
            </div>
         </div>
         <div className="clock-middle">
            <p className='clock-title'>Golden Hour</p>
            <div className="clock-card-mid">
               <div className="clock-draw">
                  <img src={clockIcon} alt="" />
               </div>
               <p className="first-time-mid">12:30</p>
               <p className='mid-span'>AM</p>
            </div>
         </div>
         <div className="clock-side">
            <p className='clock-title'>Sunset</p>
            <div className="clock-card">
               <div className="clock-draw">
                  <img src={clockIcon} alt="" />
               </div>
               <p className="first-time">{timeSunset.substring(0, timeSunset.length - 2)}</p>
               <p className="second-time">PM</p>
            </div>
         </div>
      </div>
   )
}
export default Clock;