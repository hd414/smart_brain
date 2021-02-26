import React from 'react'
import './signin.css';

class SignIn extends React.Component{
   
   constructor(props){
    super(props);
     this.state={
      signinemail : '',
      signinpassword : ''
     }
   }

onsigninemail = (event) =>{
  this.setState({signinemail :event.target.value});
}

onsigninpassword = (event) =>{
  this.setState({signinpassword :event.target.value});
}

onsubmitsignin = () =>{
  let ch=1;
   fetch('http://localhost:3000/signin',{
   method : 'post',
   headers : {
    'content-type':'application/json'
   },
   body : JSON.stringify({
    email : this.state.signinemail,
    password : this.state.signinpassword
   })
   })
    this.props.onrouteChange('home');
    

}

  render(){
      const {onroutechange} = this.props;
       return(
    <article className="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
  <form className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
        <input onChange = {this.onsigninemail}   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
        <input onChange = {this.onsigninpassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
    </fieldset>
    <div className="">
      <input onClick = {this.onsubmitsignin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
    </div>
    <div className="lh-copy mt3">
    <p onClick = {()=>onroutechange('register')} style = {{cursor:'pointer'}} className="f6 link dim black db">Sign Up</p>
      <a href="#0" className="f6 link dim black db">forgot your password?</a>
      
    </div>
  </form>
</main>
</article>
    );

  }
 

}


export default SignIn;