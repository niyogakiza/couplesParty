import React, {Component} from 'react';

class Schedule extends Component{
    constructor(props){
        super(props);
        this.state = {
            schedule:[
                {
                    title:'Arrival & Cocktails',
                    time:"4:00 PM"
                },
                {
                    title:'Speech',
                    time:"5:00 PM"
                },
                {
                    title:'Party',
                    time:"6:00 PM"
                },
                {
                    title:'Good-byes',
                    time:"00 :00 PM"
                }
            ]
        }

    }

    render(){
        return(
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <h2 className="titleFont bold">Schedule</h2>
                    <p>Sunday August 00, 0000</p>
                </div>
                <hr/>
                <img src="./images/forestsummer.jpg"
                     width="100"
                     className="rounded"
                     alt="panorama"
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                <br/>ut labore et dolore magna aliqua.
                <br/>Non odio euismod lacinia at quis risus sed vulputate odio.</p>
                <hr/>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 animatedBack whiteText">
                    <table className='table'>
                        <thead>
                        <tr>
                            <td colSpan="2">
                                <h3 className="titleFont">
                                    <span
                                        className="glyphicon glyphicon-certificate whiteText rotate"
                                        aria-hidden="true"
                                    >
                                    </span>
                                    Shedule
                                </h3>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.schedule && this.state.schedule.map(( doc, index) =>{
                            return(
                                <tr key={index}>
                                    <td>
                                        {doc.title}
                                    </td>
                                    <td>
                                        {doc.time}
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <img
                        src="./images/forestsummer.jpg"
                        width="100%"
                        className="rounded"
                        alt="attire"
                    />
                    <hr/>
                    <div className="padding20 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
                        <h2 className="titleFont bold">
                            <span
                                className="glyphicon glyphicon-sunglasses greenText"
                                aria-hidden="true"
                            >
                            </span>
                            Attire
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<b> incididunt ut labore </b>.
                         <br/>et dolore magna aliqua. Aenean euismod elementum nisi quis.
                         <br/>Pharetra sit <b>amet aliquam id diam maecenas</b> ultricies mi.</p>

                    </div>
                    <div className="padding20 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
                        <h2 className="titleFont bold">
                            <span
                                className="glyphicon glyphicon-ice-lolly greenText"
                                aria-hidden="true"
                            >
                            </span>
                            Children
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<b> incididunt ut labore </b>.
                            <br/>et dolore magna aliqua. Aenean euismod elementum nisi quis.
                            <br/>Pharetra sit <b>amet aliquam id diam maecenas</b> ultricies mi.</p>

                    </div>
                    <div className="padding20 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
                        <h2 className="titleFont bold">
                            <span
                                className="glyphicon glyphicon-cloud greenText"
                                aria-hidden="true"
                            >
                            </span>
                           Weather
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<b> incididunt ut labore </b>.
                            <br/>et dolore magna aliqua. Aenean euismod elementum nisi quis.
                            <br/>Pharetra sit <b>amet aliquam id diam maecenas</b> ultricies mi.</p>

                    </div>
                    <div className="padding20 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
                        <h2 className="titleFont bold">
                            <span
                                className="fa fa-car greenText"
                                aria-hidden="true"
                            >
                            </span>
                            Parking
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<b> incididunt ut labore </b>.
                            <br/>et dolore magna aliqua. Aenean euismod elementum nisi quis.
                            <br/>Pharetra sit <b>amet aliquam id diam maecenas</b> ultricies mi.</p>

                    </div>

                </div>
            </div>
        );
    }
}
export default Schedule;