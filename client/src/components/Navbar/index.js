import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./style.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
        };
    }

    componentDidMount() {
        document.body.style.background = "linear-gradient(to right, #EC6EAD, #3494E6)";
        document.getElementsByClassName('navbar')[0].style.background = "linear-gradient(to right, #EC6EAD, #3494E6)";
        document.getElementsByClassName('dropbtn')[0].style.background = "#EC6EAD";
    }

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        window.open("/", "_self")
    }

    themeSwap() {
        if (this.state.theme === 'light') {
            this.setState({ theme: "dark" })
        } else {
            this.setState({ theme: "light" })
        }
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="#" className="nav-link" id="nav-link" onClick={() => { this.themeSwap() }}>
                        <img src={require('../../assets/images/lightbulb.png')} height="20px" width="20px" alt="" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link" id="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link" id="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link" id="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="#" className="nav-link" id="nav-link" onClick={() => { this.themeSwap() }}>
                        <img src={require('../../assets/images/lightbulb.png')} height="20px" width="20px" alt="" />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link" id="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link" id="nav-link">User</Link>
                </li>
                <li className="nav-item">
                    <a href="#0" onClick={this.logOut.bind(this)} className="nav-link" id="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )
        //dynamic css rules
        if (document.getElementsByClassName('navbar')[0] != null) {
            if (this.state.theme === "dark") {
                document.body.style.background = "linear-gradient(to right, #26262B, black)";
                document.getElementsByClassName('navbar')[0].style.background = "linear-gradient(to right, #26262B, black)";
                document.getElementsByClassName('dropbtn')[0].style.background = "#26262B";
                document.getElementsByClassName('dropdown-content')[0].style.background = "#26262B";
            } else {
                document.body.style.background = "linear-gradient(to right, #EC6EAD, #3494E6)";
                document.getElementsByClassName('navbar')[0].style.background = "linear-gradient(to right, #EC6EAD, #3494E6)";
                document.getElementsByClassName('dropbtn')[0].style.background = "#EC6EAD";
                document.getElementsByClassName('dropdown-content')[0].style.background = "#EC6EAD";
            }
        }
        return (
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav mr-auto">
                            <div className="dropdown">
                                <button className="dropbtn">Get Informed ⯆</button>
                                <div className="dropdown-content">
                                    <Link to="/suicide">Suicidal Thoughts</Link>
                                    <Link to="/mood">Mood Disorders</Link>
                                    <Link to="/addiction">Addiction</Link>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        <Link to="/" className="nav-link navbar-brand mx-auto">
                            <span role="img" aria-label="bee">🐝</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                            <span className="navbar-toggler-icon">☰</span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto">
                            {localStorage.usertoken ? userLink : loginRegLink}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)