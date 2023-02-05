import { useSelector } from 'react-redux';

import './css/mainCard.css'

function MainCardWeather() {

   const deg = useSelector(state => state.btnSwitch);
   const mainTemp = useSelector(state => state.arr.list?.[0].main.temp);
   // const arr = useSelector(state => state.arr.list);
   const switchDeg = useSelector(state => state.btnSwitch);

   const degF = (mainTemp * 1.8) + 32;

    // для вывода дня недели
    const date = new Date();
    let options = { weekday: 'long'};
    let formatDate = new Intl.DateTimeFormat('en-US', options);
    let weekDay = formatDate.format(date);

   // для вывода времени (час/ мин)
   let options2 = { hour: 'numeric', minute: 'numeric' }
   let formatDate2 = new Intl.DateTimeFormat('en-US', options2);
   let time = formatDate2.format(date);

   // для вывода месяца и года
      let options3 = {month: 'short', year: '2-digit'}
      let formatDate3 = Intl.DateTimeFormat('en-US', options3);
      let monthYear = formatDate3.format(date)
   
   // для вывода дня
    let options4 = {day: 'numeric',}
    let formatDate4 = Intl.DateTimeFormat('en-US', options4);
    let day = formatDate4.format(date);
   
   

   return(
      <div className="main-card">
         <div className="temp">
            <h1 className="main-temp__value">
               {switchDeg ? Math.round(degF) : Math.round(mainTemp)}
            </h1>
            {deg ? <p className='temp-deg'>&deg; F</p> : <p className='temp-deg'>&deg; C</p>}
         </div>
         <p className="data">
            {day}th {monthYear}
         </p>
         <div className="day-time">
            <p>{weekDay}</p>
            <p>{time}</p> 
         </div>
      </div>
   )
}
export default MainCardWeather;