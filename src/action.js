//lat: 55.7504461, lon: 37.6174943, moscow
//3b5f2b549a3464ef4bc33d69d58446dd KEY
export const weatherTemp = (city) => {
   return async (dispatch) => {
      let API = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3b5f2b549a3464ef4bc33d69d58446dd&lang=ru&units=metric`);
      if(API.ok){
         let API_json = await API.json();
      dispatch({
         type: 'data',
         payload: API_json,
      })
      } else {
         dispatch({
            type: 'error',
            payload: true
         })
      }
        
   } 
}

export const newCity = (txt) => {
   return (dispatch) => {
      dispatch({
         type: 'cityName',
         payload: txt,
      })
   }
}

export const erBtn = () => {
   return dispatch => {
      dispatch({
         type: 'error-btn'
      })
   }
}