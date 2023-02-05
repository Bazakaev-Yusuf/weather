import { useDispatch, useSelector } from "react-redux";

import './css/switch.css';

function Switch() {

   const btnIdx = useSelector(state => state.btnSwitch);
   
   const dispatch = useDispatch();

   const btnSwitch = () => {
      dispatch({
         type: 'switch',
      })
   }

   return (
      <button className='btn-switch' onClick={() => btnSwitch()}>
         <span className={btnIdx ? 'btn-deg' : ''}>F</span>
         <div className={btnIdx ? 'btn-inside ' : 'btn-inside right'}></div>
         <span className={btnIdx ? '' : 'btn-deg'}>C</span>
      </button>
   )
}
export default Switch;