import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from "./components/Navbar/";
import Login from "./components/Login/";
import Register from "./components/Register/";
import Post from "./components/Post/";
import Profile from "./components/Profile/";
import Home from "./components/Home/";

import Informed from "./components/Informed/";
import SuicidePrevent from "./pages/Suicide";
import MoodDisorders from "./pages/Mood";
import Addiction from "./pages/Addiction";
import Resources from "./components/Resources";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/post" component={Post} />
            
            <Route exact path="/informed" component={Informed} />
            <Route exact path="/suicide" component={SuicidePrevent} />
            <Route exact path="/mood" component={MoodDisorders} />
            <Route exact path="/addiction" component={Addiction} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/footer" component={Footer} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;