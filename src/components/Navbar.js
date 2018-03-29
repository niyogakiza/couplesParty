import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component{
    render(){
        return(
            <nav
                id="navigationBar"
                className="navbar navbar-inverse navbar-static-top backGrey"
                style={{marginBottom: '0px'}}
            >
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed themeButton"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div
                        className="collapse navbar-collapse text-center"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className="nav navbar-nav navFont">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/party'>Party</Link></li>
                            <li><Link to='/schedule'>Schedule</Link></li>
                            <li><Link to='/directions'>Directions</Link></li>
                            <li><Link to='/registry'>Registry</Link></li>
                        </ul>

                    </div>

                </div>

            </nav>
        );
    }
}
export default Navbar;