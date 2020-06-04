//dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//components
import Navbar from "./components/Navbar/";
import Login from "./components/Login/";
import Register from "./components/Register/";
import Post from "./components/Post/";
import Profile from "./components/Profile/";
import Home from "./components/Home/";
import Informed from "./components/Informed/";
import Footer from "./components/Footer";

//pages
import Resources from "./pages/Resources";
import Suicide from "./pages/Suicide";
import Mood from "./pages/Mood";
import Addiction from "./pages/Addiction";

class App extends Component {
  render() {
    return (
      <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/post" component={Post} />
            
          <Route exact path="/informed" component={Informed} />
          <Route exact path="/suicide" component={Suicide} />
          <Route exact path="/mood" component={Mood} />
          <Route exact path="/addiction" component={Addiction} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/footer" component={Footer} />
      </Router>
    );
  }
}

export default App;