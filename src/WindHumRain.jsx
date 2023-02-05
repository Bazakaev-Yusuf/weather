import { useSelector } from 'react-redux';

import './css/windHumRain.css';

function WindHumRain() {

   const wind = useSelector(state => state.arr.list?.[0].wind?.speed);
   const hum = useSelector(state => state.arr.list?.[0].main?.humidity);

   // перевод в киллометры в час
   const windKM = wind * 3.6;

   return(
      <div className="weather-details">
         <div className="wind">
            <div className='wind-svg'>
               <div className="svg">
               <svg width="23" height="22"   viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_0_94)" filter="url(#filter0_di_0_94)">
                  <path d="M18.0646 10.8158C18.2274 10.8847 18.2274 11.1153 18.0646 11.1842L6.00205 16.2876C5.83055 16.3602 5.66168 16.1796 5.74556 16.0133L7.73684 12.0667L7.8265 11.885C8.10176 11.3271 8.10176 10.6729 7.8265 10.115L7.73684 9.93333L5.74556 5.98669C5.66168 5.82044 5.83055 5.63985 6.00205 5.7124L18.0646 10.8158ZM20.7776 11.9235C21.5994 11.582 21.5994 10.418 20.7776 10.0766L4.23756 3.20369C3.94126 3.08057 3.59989 3.14945 3.37451 3.37783C3.1483 3.60705 3.08438 3.95087 3.2131 4.24608L5.80937 10.2007C6.03162 10.7104 6.03162 11.2896 5.80937 11.7993L3.2131 17.7539C3.08439 18.0491 3.1483 18.3929 3.37451 18.6222C3.59989 18.8506 3.94126 18.9194 4.23756 18.7963L20.7776 11.9235Z" fill="white"/>
                  </g>
                  <defs>
                  <filter id="filter0_di_0_94" x="-1.26241" y="0" width="24.2624" height="25.0165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-1.50827" dy="2.26241"/>
                  <feGaussianBlur stdDeviation="0.377069"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_94"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_94" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="-0.754137" dy="0.754137"/>
                  <feGaussianBlur stdDeviation="0.754137"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_94"/>
                  </filter>
                  <clipPath id="clip0_0_94">
                  <rect width="22" height="22" fill="white" transform="translate(1)"/>
                  </clipPath>
                  </defs>
               </svg>
               </div>
               <p>Wind</p>
            </div>
            
            <p>{windKM.toFixed(1)} km/h</p>
         </div>
         <div className="hum">
            <div className="hum-svg">
            <div className="svg">
               <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_104)" filter="url(#filter0_di_0_104)">
            <path d="M11.0001 2.84224L6.46259 7.37974C5.56527 8.27716 4.95421 9.4205 4.70668 10.6652C4.45914 11.9099 4.58625 13.2 5.07193 14.3725C5.55761 15.5449 6.38005 16.547 7.43525 17.2521C8.49046 17.9571 9.73103 18.3334 11.0001 18.3334C12.2692 18.3334 13.5097 17.9571 14.5649 17.2521C15.6201 16.547 16.4426 15.5449 16.9283 14.3725C17.4139 13.2 17.541 11.9099 17.2935 10.6652C17.046 9.4205 16.4349 8.27716 15.5376 7.37974L11.0001 2.84224ZM11.0001 0.249908L16.8338 6.08358C17.9875 7.23736 18.7733 8.70737 19.0916 10.3077C19.4099 11.9081 19.2465 13.5668 18.6221 15.0743C17.9977 16.5818 16.9402 17.8703 15.5835 18.7768C14.2268 19.6833 12.6318 20.1672 11.0001 20.1672C9.3684 20.1672 7.77335 19.6833 6.41665 18.7768C5.05995 17.8703 4.00252 16.5818 3.3781 15.0743C2.75367 13.5668 2.59029 11.9081 2.90861 10.3077C3.22693 8.70737 4.01266 7.23736 5.16643 6.08358L11.0001 0.249908Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_di_0_104" x="-2.26241" y="0" width="24.2624" height="25.0165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-1.50827" dy="2.26241"/>
            <feGaussianBlur stdDeviation="0.377069"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_104"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_104" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-0.754137" dy="0.754137"/>
            <feGaussianBlur stdDeviation="0.754137"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_104"/>
            </filter>
            <clipPath id="clip0_0_104">
            <rect width="22" height="22" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </div>
            <p>Hum</p>
            </div>
            <p>{hum} %</p>
         </div>
      </div>
   )
}
export default WindHumRain