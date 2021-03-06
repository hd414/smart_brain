import React from 'react'
class Register extends React.Component {
  
    constructor(props){
    super(props);
     this.state={
      email : '',
       password : '',
       name : ''
     }
   }
   onname = (event) =>{
  this.setState({name :event.target.value});
}

onemail = (event) =>{
  this.setState({email :event.target.value});
}

onpassword = (event) =>{
  this.setState({password :event.target.value});
}


 onsubmitsignin = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name : this.state.name
      })
    })
      
        
          this.props.onRouteChange('home');
     
  }

render(){
   const {onroutechange} = this.props;
    return(
    <article class="br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
  <form className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Sign Up</legend>
       <div className="mt3">
        <label className="db fw6 lh-copy f5" for="Name">Name</label>
        <input onChange = {this.onname} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f5" for="email-address">Email</label>
        <input onChange = {this.onemail}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f5" for="password">Password</label>
        <input  onChange = {this.onpassword}  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
    </fieldset>
    <div className="">
      <input onClick = { this.onsubmitsignin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up"/>
    </div>
  </form>
</main>
</article>
    );
}
  

}


export default Register;