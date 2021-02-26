import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Nav from './components/nav/nav.js';
import SignIn from './components/signin/signin.js';
import Register from './components/register/register.js';
import Logo from './components/logo/logo.js';
import Rank from './components/Rank/rank.js';
import ImageLink from './components/ImageLink/ImageLink.js';
import Face from './components/Face/Face.js';

import './App.css';
import 'tachyons';

const app = new Clarifai.App({
  apiKey:'4728055160d04677be2cd1ee15f9492a'
});


const Particle = {particles: {
  number:{value:40,density:{enable:true,value_area:500}},
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }}

class App extends React.Component {
    constructor(){
      super();
      this.state={
        input:'',
        imageUrl:'',
        box : {},
        route : 'signin',
        issigned:false,
        user :  {
        name : '',
        id : '',
        email : '',
        entry  : 0,
        joined : new Date()
       }
      }


    }
     
    load = (user)=>{
      this.setState({user:{
               name : user.name,
              id : user.id,
              email : user.email,
              entry  :user.entry,
              joined : user.joined
            }})
    }

    calculateFace = (data) =>{
    const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
     const image = document.getElementById('inputImage');
     const width = Number(image.width);
     const height = Number(image.height);
       
     return {
        leftcol : clarifaiFace.left_col*width,
        toprow : clarifaiFace.top_row*height,
        rightcol : width - (clarifaiFace.right_col*width),
        bottomrow : height - (clarifaiFace.bottom_row*height)

     }

     }


facebox = (box) =>{
  console.log(box);
  this.setState({box:box});
}

oninputchange = (event) =>{

  this.setState({input:event.target.value})

}

onsubmit = () =>{
 
  this.setState({imageUrl:this.state.input});
  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then((response)=> {
    this.facebox(this.calculateFace(response))
    }).catch(err => console.log(err));
}

onroutechange = (route) =>{
  if(route==='signout')
  {
    this.setState({issigned:false})
  }
else if(route === 'home'){
     this.setState({issigned:true})
    }
  this.setState({route : route});

}



  render(){
    return (
    <div className="App"> 
    <Particles  className='Particles'
      params={Particle} 
    />
      <Nav onroutechange={this.onroutechange} issigned={this.state.issigned}/>
      {
this.state.route==='signin'?
           <SignIn onroutechange={this.onroutechange}/>:(
            this.state.route === 'register'?<Register onroutechange={this.onroutechange}/>:
           <div>
           <Logo/>
           <Rank/>
           <ImageLink oninputchange={this.oninputchange} onsubmit = {this.onsubmit}/>
           <Face box = {this.state.box} imageUrl={this.state.input}/>
           </div>)
         }
    </div>
  );
  }
  
}

export default App;
