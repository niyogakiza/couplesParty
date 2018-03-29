import React, { Component} from 'react';


class Hotel extends Component{
    render(){
        return(
            <div className="col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-4 text-center backGrey hotel blackText" style={{padding:'10px'}}>
                {this.props.photo &&
                <a target='_target' rel="noopener noreferrer" href={this.props.link}>
                    <img src={this.props.photo} alt='Hotel' width="100%" className="roundPicReg"/>
                </a>
                }
                <p>{this.props.stars} Stars</p>
                <p>Price: {this.props.price}</p>
                <p>Distance: {this.props.location}</p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    href={this.props.link}
                >
                    More Info
                </a>
                <hr/>
            </div>
        );
    }
}
export default Hotel;