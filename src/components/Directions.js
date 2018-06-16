import React, { Component } from 'react';
import {Hotel} from './Hotel';


class Directions extends Component{
    constructor(props){
        super(props);
        this.state = {
            renderThis: '',
            hotels:[
                {
                    name:'Hotel Stelvio',
                    link:'http://www.hotelstelvio.com/',
                    photo:'./images/stelviohotel.jpg',
                    price:'€€',
                    location:'Varese',
                    stars:'4'
                },
                {
                    name:'Palace Grand Hotel',
                    link:'http://www.palacevarese.com/',
                    photo:'./images/palacehotel.jpg',
                    price:'€€',
                    location:'Varese',
                    stars:'4.5'
                },
                {
                    name:'Ata Hotels',
                    link:'http://www.atahotels.it/',
                    photo:'./images/atahotel.jpg',
                    price:'€€',
                    location:'Varese',
                    stars:'5'
                }
            ]
        }
    }

    selectDirections =() =>{
        this.setState({
            renderThis:'directions'
        });
    };

    selectParking =()=>{
        this.setState({
            renderThis:'parking'
        });
    };

    selectAccommodations =()=>{
        this.setState({
            renderThis:'accommodations'
        });
    };

    renderDirections = () =>{
        return(
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20">
                <h1 className="titleFont">Directions</h1>
                <hr/>
                <h2>Chez Lando</h2>
                <a rel="noopener noreferrer" target='_blank' href="https://www.google.co.uk/maps/place/H%C3%B4tel+Chez+Lando/@-1.9594698,30.1065295,17z/data=!3m1!4b1!4m7!3m6!1s0x19dca655c2157919:0x563092512616ce2!5m1!1s2018-04-14!8m2!3d-1.9594752!4d30.1087182">
                    <h3 className="greenText"><i className="fa fa-map-marker greenText" aria-hidden="true"></i>KG 201 St, Kigali, Rwanda</h3>
                </a>
                <hr/>
                <h4>Coming from Ruhango</h4>
                <p>
                    <i className="fa fa-map-marker greenText" aria-hidden="true"></i>bibendum est <b/>ultricies integer</p>
                <p><i className="fa fa-map-marker greenText" aria-hidden="true"></i>bibendum est<b/> ultricies integer</p>
                <p><i className="fa fa-map-marker greenText" aria-hidden="true"></i>bibendum est<b>67</b> ultricies integer</p>
                <p><i className="fa fa-map-pin greenText" aria-hidden="true"></i><b>bibendum est </b>b>ultricies integer</p>

                <hr/>
                <h4> Coming from Rugende</h4>
                <p><i className="fa fa-map-marker greenText" aria-hidden="true"></i>bibendum est <b/>ultricies integer</p>
                <p><i className="fa fa-map-marker greenText" aria-hidden="true"></i>bibendum est<b/> ultricies integer</p>
                <p><i className="fa fa-map-marker greenText" aria-hidden="true"></i>bibendum est<b>67</b> ultricies integer</p>
                <p><i className="fa fa-map-pin greenText" aria-hidden="true"></i><b>bibendum est </b>b>ultricies integer</p>
                <hr/>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d63800.14726740281!2d30.04649051923802!3d-1.9494177030201287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x19dca416cad288ad%3A0x18adced21d3a2d45!2sNyabugogo%2C+Kigali%2C+Rwanda!3m2!1d-1.9366706!2d30.053523799999997!4m5!1s0x19dca655c2157919%3A0x563092512616ce2!2sH%C3%B4tel+Chez+Lando%2C+KG+201+St%2C+Kigali%2C+Rwanda!3m2!1d-1.9594752!2d30.1087182!5e0!3m2!1sen!2suk!4v1522262491708"
                    width="80%" height="400" frameBorder="0" title='map' allowFullScreen></iframe>
                    <hr/>
                <div className="well backBlue whiteText rounded">
                    <h2><i className="fa fa-exclamation-circle greenText" aria-hidden="true"></i>About the Venue</h2>
                    <hr/>
                    <p>For questions about the venue please refer to the<b><a href="http://www.hotelchezlando.com" target='_blank' rel="noopener noreferrer">Chez Lando Website</a></b>.</p>
                    <p>Sixteen years after the Genocide, Hotel Chez Lando opened its new Barbecue, new Restaurant with Terrace and new Meeting Hall where comfort and light meet blossoming flowers. The architecture of the new additions blends with its environment; stylish and modern, it is matching the new face of Rwanda.</p>
                </div>
            </div>
        );
    };

    renderParking = () =>{
        return(
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20">
                <h1 className="titleFont">Parking</h1>
                <hr/>
                <table className="table">
                    <thead>
                    <tr>
                        <td colSpan="2">
                            <p><i className="fa fa-exclamation-circle greenText" aria-hidden="true"></i>There are <b> public spaces</b> just outside the hotel.
                            <br/>These spaces cannot be reserved and they're open to public so we ask you to allow yourself enough time to find parking.
                            <br/>Other parking options are:</p>
                            <ul className="listGreen">
                                <li> Kisementi Parking Area</li>
                                <li> kimironko road on street Parking</li>
                            </ul>

                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="text-right">
                            <i className="fa fa-car fa-2x greenText" aria-hidden="true"></i>
                        </td>
                        <td className="text-left">
                            <span style={{fontSize: '1.3em'}}>Public Parking</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-right">
                            <i className="fa fa-car fa-2x blueText" aria-hidden="true"></i>
                        </td>
                        <td className="text-left">
                            <span style={{fontSize:'1.3em'}}>Reserved Parking </span>

                        </td>
                    </tr>
                    </tbody>
                </table>
                <hr/>
                <img src="./images/rings.jpg" alt="" className="rounded fullWidth"/><br/>
                <hr/>
                <h2 className="titleFont">See You There!</h2>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img src="./images/palacehotel.jpg" alt="sign" className="roundPhoto"/>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img src="./images/stelviohotel.jpg" alt="sign" className="roundPhoto"/>
                </div>
            </div>
        );
    };

    renderAccomodations =() =>{
        return(
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20 rounded" >
                <h1 className="titleFont">Accommodations</h1>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="backBlue col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20 whiteText">
                    <h2><i className="fa fa-bed greenText" aria-hidden="true"></i>sagittis</h2>
                    <hr/>
                    {this.state.hotels && this.state.hotels.map((doc, index) =>{
                        return <Hotel name={doc.name} stars={doc.stars} location={doc.location} price={doc.price} photo={doc.photo} link={doc.link} key={index}/>
                    })}
                </div>
                <hr/>
                <div className="well backBlue whiteText rounded">
                    <h2><i className="fa fa-sun-o greenText" aria-hidden="true"></i>sagittis <em>egestas egestas fringilla phasellus</em></h2>
                    <img src="./images/stelviohotel.jpg" width="70%" alt="sagittis" className="rounded"/>
                    <hr/>
                    <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b></p>
                    <p>Lorem ipsum dolor sit amet<b> consectetur adipiscing elit</b> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua<b><a href="" target="_blank" rel="noopener noreferrer">Website</a></b></p>
                    <p>nunc consequat interdum<a target="_blank" rel="noopener noreferrer" href="tel:36598345783"><i className="fa fa-phone greenText" aria-hidden="true"></i>(39)56378465346</a></p>
                    <p>nunc consequat interdum<b><a href="" target="_blank" rel="noopener noreferrer">nunc consequat</a></b></p>
                </div>
            </div>
        );
    }

    render(){
        return(
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <div onClick={this.selectDirections} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 jumbotron option" style={{borderRadius:'0px'}}>
                    <i className="fa fa-map fa-3x" aria-hidden="true"></i>
                    <h5 className="titleFont bold">Directions</h5>
                </div>
                <div onClick={this.selectParking} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 jumbotron option" style={{borderRadius:'0px'}}>
                    <i className="fa fa-car fa-3x" aria-hidden="true"></i>
                    <h5 className="titleFont bold">Parking</h5>
                </div>
                <div onClick={this.selectAccommodations} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 jumbotron option" style={{borderRadius:'0px'}}>
                    <i className="fa fa-hotel fa-3x" aria-hidden="true"></i>
                    <h5 className="titleFont bold">Accommodations</h5>
                </div>
                {this.state.renderThis === "directions" && this.renderDirections()}
                {this.state.renderThis === "accommodations" && this.renderAccomodations()}
                {this.state.renderThis === "parking" && this.renderParking()}
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding20">
                    <img src="./images/hotel1.jpg" alt="bv" className="rounded"/>
                    <h2 className="titleFont bold">consectetur adipiscing elit!</h2>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
            </div>
        );
    }
}

export default Directions;