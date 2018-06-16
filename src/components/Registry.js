import React, {Component} from 'react';

class Registry extends Component{
    constructor(props){
        super(props);
        this.state = {
            chosen: false
        }
    }

    thank=() =>{
        return(
            <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <hr/>
                <h1 className="waterFont jello-horizontal bold">Thank you!</h1>
                <hr/>
            </div>
        )
    };

    handleClick =()=>{
        this.setState({
            chosen: true
        })
    };

    render(){
        return(
            <div className="padding20 col-xl-12 col-lg-12 col-md-12 col-xs-12 text-center">
                <h2 className="titleFont blueText bold">Registry</h2>
                <img src="./images/sisters.jpg" alt="registry" className="rounded"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero justo laoreet sit amet cursus sit.<br/> Morbi quis commodo odio aenean sed.</p>
                <hr/>
                {this.chosen === true && this.thank()}
                <p>
                    <span
                        className="glyphicon glyphicon-exclamation-sign greenText"
                    >
                    </span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,<b> sed do eiusmod tempor incididunt </b>ut labore et dolore magna aliqua.<b> Libero justo laoreet sit amet cursus sit.</b>
                </p>
                <div className="well center-text animatedBack whiteText rounded col-xl-12 col-lg-12 col-md-12 col-xs-12 col-xs-12">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                        <a rel="noopener noreferrer" target='_blank' href="#">
                            <img src="./images/parents.jpg" className="roundPhoto jello-horizontal" alt="parents" />
                        </a>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                        <a rel="noopener noreferrer" target='_blank' href="#">
                            <img src="./images/couple8.jpg" className="roundPhoto jello-horizontal" alt="parents" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registry;