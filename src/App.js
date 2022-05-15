import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/dashboard-page/dashboard-page';
import Navbar from './components/navbar-component/navbar-component';

class App extends Component {



  render(){
   
  return (
      <div className="App">
          <Router>
            <Navbar/>
              <Routes>
                  <Route path="/" element={<Dashboard />} />
              </Routes>
          </Router>   
      
      </div>
    );
}
}

export default App;
