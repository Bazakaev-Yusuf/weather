import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './css/cityForm.css'

import map from './static/img/map.png';

import { newCity } from './action';

function CityForm() {

   const cityName = useSelector(state => state.arr.city?.name);
   const country = useSelector(state => state.arr.city?.country);

   const dispatch = useDispatch();

   const [userText, setUserText] = useState('');
   

   const handleChange = (e) => {
      setUserText(e.target.value);
   }

   const handleSubmite = (e) => {
      e.preventDefault();
      dispatch(newCity(userText));
      setUserText('')
   }
   
   return(
      <div className='form-block'>
         <div className='form-block__city'>
            <img className='map' src={map} alt="map" />
            <p>{cityName}, {country}</p>
         </div>
         <form onSubmit={handleSubmite}>
               <input
                  className='search' 
                  type="text"
                  value={userText}
                  onChange={handleChange}
               />
               <button className='search-btn'></button>
         </form>
      </div>
   )
}
export default CityForm;