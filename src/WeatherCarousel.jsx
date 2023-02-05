import { useSelector } from "react-redux";

import './css/weatherCarousel.css';

import WeatherCard from "./WeatherCard";



function WeatherCarousel({icon}){

   const list = useSelector(state => state.arr.list);

   const newDate = new Date();


   // фильтр для вывода объектов время у которых будет ровно 12 часам (не текущий день)
   const NexDays = list.filter(item => {
      return(
         new Date(item.dt_txt).getHours() === 12 && new Date(item.dt_txt).getDate() !== newDate.getDate()
      )
   })


   return(
      <div className="carousel">
         <div className="carousel-card">
            {NexDays.map((item, idx) => {
               if(idx < 4){
                  return(
                     <WeatherCard
                        key={idx + 10}
                        icon={icon}
                        arr={item}
                     />
                  )
               }
            })}
         </div>
      </div>
   )
}
export default WeatherCarousel;