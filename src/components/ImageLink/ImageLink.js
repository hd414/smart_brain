import React from 'react';
import './imageLinnk.css';
const ImageLink = ({oninputchange,onsubmit}) =>{

   return (
      <div >
      <p className = 'f3'>
      {'This Fearture will Detect any face in your picture give it a try'}
      </p>
      <div className = 'center'>
       <div className = 'form center  br3 pa4 shadow-5'> 
         <input className='f4 pa2 w-70 center' type = 'text' onChange = {oninputchange}/>
         <button onClick ={onsubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
        </div>
        </div>
       </div>
   	);

   }


export default ImageLink ;