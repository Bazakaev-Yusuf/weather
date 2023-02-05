import './css/progress.css'
import progress1 from './static/img/progress1.png';
import progress2 from './static/img/progress2.png';

function Progress(){
   return(
      <div className='progress-block'>
         <div className="block">
            <p className='title'>
               Air Quality
            </p>
            <div className="progress-bar">
               <img src={progress1} alt="" />
            </div>
         </div>
         <div className="block">
            <p className='title'>
               UV Index
            </p>
            <div className="progress-bar">
               <img src={progress2} alt="" />
            </div>
         </div>
         
      </div>
   )
}
export default Progress;