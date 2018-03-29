import React, {Component} from 'react';

export default class Profile extends Component{
    render(){
        return(
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" style={{padding:'10px'}}>
                {
                    this.props.photo &&
                    <img src={this.props.photo} alt="person" className="roundPhoto partyPhoto"/>
                }
                <h2 className="cookiesFont">{this.props.name}</h2>
                <p>{this.props.roleAt}</p>
            </div>
        );
    }
}