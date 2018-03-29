import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import PartyContainer from '../components/PartyContainer';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Schedule from '../components/Schedule';
import Directions from '../components/Directions';
import Gallery from '../components/Gallery';
import Registry from "../components/Registry";
import Footer from "../components/Footer";


export default (
    <Router>
        <div className="container-fluid" style={{padding: '0px'}}>
            <Navbar/>
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/party" component={PartyContainer}/>
            <Route exact path="/schedule" component={Schedule}/>
            <Route exact path="/directions" component={Directions}/>
            <Route exact path="/registry" component={Registry}/>
            <Route exact path="/" component={Gallery}/>
            <Footer/>
        </div>
    </Router>
);