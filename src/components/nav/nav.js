import React from 'react'

const Nav = ({onroutechange,issigned}) => {

 
  	if(issigned){
  		 return(
   <nav style={{display:'flex',justifyContent:'flex-end'}}>
    <p onClick = {() => onroutechange('signin')} className = 'f3 link dim black underline pa3 pointer'>sign out</p>
    </nav>)
}
else
   { return(
   	<div>
   	 <nav style={{display:'flex',justifyContent:'flex-end'}}>
    <p onClick = {() => onroutechange('signin')} className = 'f3 link dim black underline pa3 pointer'>Signin</p>
    <p onClick = {() => onroutechange('register')} className = 'f3 link dim black underline pa3 pointer'>Sign Up</p>
    </nav>
    </div>)
   }
  	;

}


export default Nav;