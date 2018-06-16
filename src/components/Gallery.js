import React, { Component } from 'react';


class Gallery extends Component{
    constructor(props){
        super(props);
        this.state = {
            mypics:[
                "./images/couple1.jpg",
                "./images/couple2.jpg",
                "./images/couple3a.jpg",
                "./images/couple4.jpg",
                "./images/couple5.jpg",
                "./images/couple6.jpg",
                "./images/couple7.jpg",
                "./images/couple8.jpg"
            ],
            pic1: 0,
            pic2: 1,
            pic3:2,
            myInt:null
        }
    }

    componentDidMount(){
        this.myInt = setInterval(this.rotate, 3000);
    }

    componentWillUnmount(){
        clearInterval(this.myInt);
    }

    rotate =() =>{
        let Len = this.state.mypics.length;
        if(this.state.pic1+1 < Len){
            this.setState({
                pic1: this.state.pic1+1
            })
        } else{
            this.setState({
                pic1: 0
            })
        }
        if(this.state.pic2+1 < Len){
            this.setState({
                pic2: this.state.pic2+1
            })
        }else{
            this.setState({
                pic2:0
            })
        }
        if(this.state.pic3+1 < Len){
            this.setState({
                pic3: this.state.pic3+1
            })
        } else{
            this.setState({
                pic3:0
            })
        }
    };

    render(){
        return(
            <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center blueText titleFont" >
                    <button
                        style={{fontSize:'56px'}}
                        type="button"
                        className="close whiteText"
                        data-dismis="alert"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h1 className="roundFont heartbeat">
                        <span>RSVP</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        <br/>incididunt ut labore et dolore magna aliqua.
                         <b><a target="_blank" rel="noopener noreferrer" href="example.com">Email</a></b>
                        Lorem ipsum dolor sit amet,<br/>
                        <b>Lorem ipsum</b>
                    </p>
                </div>
                <hr/>
                <h2 style={{textAlign:"center"}}>Gallery</h2>
                <hr/>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <img src={this.state.mypics[this.state.pic1]} alt="gallery" className="galleryItem partyPhoto"/>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <img src={this.state.mypics[this.state.pic2]} alt="gallery" className="galleryItem partyPhoto"/>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <img src={this.state.mypics[this.state.pic3]} alt="gallery" className="galleryItem partyPhoto"/>
                </div>
            </div>
        );
    }
}
export default Gallery;