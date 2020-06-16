import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import "./style.css";

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        window.open("/", "_self")
    }
    render() {
        const loginRegLink = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">User</Link>
                </li>
                <li className="nav-item">
                    <a href="#0" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )
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
                        <Link to="/" className="nav-link navbar-brand mx-auto"><span role="img" aria-label="bee">🐝</span></Link>
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