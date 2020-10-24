import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import SignIn from'./components/signIn';

class App extends React.Component{
  render(){

    return (
      <div>
        {/* <h1>form</h1> */}
        <BrowserRouter>
        <Switch>
          <Route  path ='/' component={SignIn} />
        </Switch>
        </BrowserRouter>
  
        
      </div>
    );
  }

}

export default App;
