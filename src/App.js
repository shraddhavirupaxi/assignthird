import React,{Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username : '',
    password: ''

  }
  
  usernameChangedHandler = (event) =>{
    this.setState({ username:event.target.value, password:event.target.value})

  }
  render(){
      return(
          <div>
            <h1> Hiii Only function 2</h1>
            <UserInput 
            changed={this.usernameChangedHandler}
            currentname={this.state.username} />
            <UserOutput username={this.state.username}/>
            
           <UserInput 
            changed={this.usernameChangedHandler}
            currentname={this.state.password} />
            <UserOutput username={this.state.password}/>
        
            </div> 
            
       
      )
  }
}
export default App;
