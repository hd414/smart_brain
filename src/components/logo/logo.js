import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './logo.css';

const Logo = () =>{

   return (
       <div className = 'ma4 mt0'>
       <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
          <div className="Tilt-inner pa3"> <img style ={{paddingTop:'5px'}} src = {brain} alt = 'brain'/></div>
       </Tilt>
      </div>
   	);

   }


export default Logo ;