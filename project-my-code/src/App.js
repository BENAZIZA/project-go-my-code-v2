import React from 'react';
import Login from './components/login'
import Register from './components/register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormAddRecipe from './components/form'
import Home from './components/home';

function App() {
  return (
    <div className="App">
      
      <Switch> 
      
      <Route exact path="/register" component = {Register} /> 
      <Route exact path="/" component = {Login} /> 
      <Route exact path ="/home" component ={Home} />
      <Route exact path='/form' component ={FormAddRecipe} />

      </Switch> 
    </div>
    
  );
}

export default App;
