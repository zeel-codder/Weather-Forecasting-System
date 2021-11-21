import 'react-dropdown/style.css';
import './App.css';
// import {useEffect,useState} from 'react';
// import axios from 'axios';
import { AiFillHome } from 'react-icons/ai'
import { FaSearch, FaUserCircle } from 'react-icons/fa'
import { BsInfoCircleFill } from 'react-icons/bs'
// import {AiTwotoneCalculator} from 'react-icons/ai'
import { TiWeatherCloudy } from 'react-icons/ti'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About-us';
import Find from './pages/Find';
import Login from './pages/Login';
// import Cal from './pages/Calculate';
import User from './pages/user';

// 1 min

// console.log('call')
function App() {







  return (
    <Router>
      <div className="container">
        <div>
          <div className="navbar">

            <Link exact to="/">

        
              <AiFillHome>

              </AiFillHome>
            </Link>

            <Link to="/search">

              <FaSearch></FaSearch>
            </Link>

            {/* <Link exact to="/find">

              <TiWeatherCloudy></TiWeatherCloudy>
            </Link> */}

            <Link exact to="/about">

              <BsInfoCircleFill></BsInfoCircleFill>
            </Link>

            <Link exact to="/user">
              <FaUserCircle></FaUserCircle>
            </Link>

          </div>
        </div>
        <div className="App-header home">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
           
            <Route exact path="/sing-up">
              <Login ></Login>
            </Route>
            <Route exact path="/user">
              <User></User>
            </Route>
            <Route exact path="/sing-in">
              <Login isSingIn={true}></Login>
            </Route>
            <Route exact path="/search">
              <Find></Find>
            </Route>

          </Switch>

        </div>
      </div>
    </Router>
  );
}

// 1 ha min mu push j karu chu

export default App;
