import React  from 'react';
import Profile from './Profile';

export const PartyContainer =() =>
    (
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 backWhite blueText text-center"
             style={{padding: '20px'}}>
            <h1 className="titleFont bold">The mattis</h1>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <Profile photo={'./images/couple2.jpg'} name={'mattis'} roleAt={'mattis'}/>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <Profile photo={'./images/couple3a.jpg'} name={'mattis'} roleAt={'mattis'}/>
            </div>
            <div className="noMargin noPadding col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <img className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 noMargin noPadding"
                     src="./images/couple4.jpg" alt="engagement"/>
                <img className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 noMargin noPadding"
                     src="./images/couple5.jpg" alt="tv and rory"/>
                <img className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 noMargin noPadding"
                     src="./images/couple6.jpg" alt="destiny"/>
                <img className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 noMargin noPadding"
                     src="./images/couple7.jpg" alt="uncharted"/>
            </div>
            <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <hr/>
                <h2 className="titleFont blueText">mattis</h2>
                <img src="./images/couple1.jpg" height="300px" className="roundPic partyPhoto"
                     alt="illustration of us"/>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br/>incididunt ut labore et dolore magna aliqua.</p>
                <p></p>

                <hr/>
            </div>

            <br/>
            <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2 className="titleFont">Family</h2>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Profile name={'mattis'} roleAt={'mattis'}/>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Profile name={'mattis'} roleAt={'mattis'}/>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Profile name={'mattis'} roleAt={'mattis'}/>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Profile name={'mattis'} roleAt={'mattis'}/>
                </div>
            </div>
            <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2 className="titleFont bold">Best People</h2>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <Profile photo={"./images/couple8.jpg"} name={'mattis'} roleAt={'mattis'}/>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <Profile photo={"./images/sisters.jpg"} name={'mattis'} roleAt={'mattis'}/>
                </div>
            </div>
        </div>
    );

