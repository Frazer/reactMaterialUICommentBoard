import React, { Component } from 'react'
import './login.css';

export class UserLogIn extends Component {

  handleInputChange = (event) =>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  handleEnterKey = event => {
    //press enter to go to comment
    const keyCode = event.keyCode || event.which;
    if (keyCode === 13) {
      this.loginSubmit.click();
    };
  };
  login = (loginFunction)=>{
    loginFunction(this.state.username);
    this.setState({
      username: ''
    });
  }
  
  logout = (loginFunction)=>{
    loginFunction('');
    this.setState({
      username: ''
    });
  }
  
  render() {
    return (
      <span className="login">
        {this.props.name?
        <span>{this.props.name}<input id="logoutButton" type="submit" value="Logout" onClick={()=>{this.logout(this.props.usernameUpdate)}}/></span>
        :
        <span>
          <input type="text" name="username" id="username" onKeyUp={this.handleEnterKey} onChange={this.handleInputChange}/>
          <input type="submit" value="Login" id="loginButton" ref={(input) => { this.loginSubmit = input; }} onClick={()=>{this.login(this.props.usernameUpdate)}}/>
        </span>
        }
      </span>
    )
  }
}

export default UserLogIn