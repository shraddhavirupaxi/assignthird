import React,{Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    username : ''

  }
  
  usernameChangedHandler = (event) =>{
    this.setState({ username:event.target.value})

  }
  render(){
      return(
          <div>
            <h1> Hiii Only function 2</h1>
            <UserInput 
            changed={this.usernameChangedHandler}
            currentname={this.state.username} />
            <UserOutput username={this.state.username}/>
            <UserOutput username="xam"/>

            </div> 
            
       
      )
  }
}
export default App;
