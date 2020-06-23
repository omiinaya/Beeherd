//dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sticky from 'react-stickynode'
import publicIP from 'react-native-public-ip'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components
import Navbar from "./components/Navbar/";
import Login from "./components/Login/";
import Register from "./components/Register/";
import Post from "./components/Post/";
import Profile from "./components/Profile/";
import Home from "./components/Home/";
import Footer from "./components/Footer";
import { Container } from "./components/Grid";
import ExpandPost from "./components/ExpandPost";
import About from "./components/About/";
import Customize from "./components/Customize";
import { AvatarDisplay } from "./components/AvatarDisplay";

//pages
import Resources from "./pages/Resources";
import Suicide from "./pages/Suicide";
import Mood from "./pages/Mood";
import Addiction from "./pages/Addiction";

class App extends Component {
  componentDidMount() {
    publicIP()
      .then(ip => {
        this.ipBlacklisted(ip)
      })
  }

  ipBlacklisted(a) {
    console.log(a)
    //check if ip is black listed
  }

  lastKnownIP(a) {
    console.log(a)
    //save to database last_known
  }

  render() {
    return (
      <Router>
        <Sticky innerZ={5}>
          <Navbar />
        </Sticky>
        <Container>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/posts" component={Post} />
            <Route exact path="/customize" component={Customize} />
            <Route exact path="/testing" component={AvatarDisplay} />

            <Route path="/posts/:id" component={ExpandPost} />

            <Route exact path="/suicide" component={Suicide} />
            <Route exact path="/mood" component={Mood} />
            <Route exact path="/addiction" component={Addiction} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/footer" component={Footer} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;