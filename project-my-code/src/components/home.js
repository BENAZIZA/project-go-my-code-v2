
import React from 'react'
import Navbar from './navbar'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import FormAddRecipe from './form'

const Home = () => {
    return (
       
        <div>
          <Navbar />
          <Router>
              <switch>
              </switch>
          </Router>
        </div>
        
    )
}

export default Home
