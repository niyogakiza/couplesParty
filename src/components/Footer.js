import React, {Component} from 'react';

 class Footer extends Component{
     render() {
         return (
             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 backGreen whiteText text-center"
                  style={{padding: '20px', color: '#8debc9'}}>
                 <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <h4 className="titleFont">About us</h4>
                     <hr/>
                     <p>duis at tellus at urna<em> condimentum</em> mattis <i>pellentesque</i>duis at tellus at urna</p>
                 </div>
                 <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <h4 className="titleFont">Address</h4>
                     <hr/>
                     <h5>duis at tellus at urna</h5>
                     <p>37456 Duis at, Tellus at, VA 210349</p>
                 </div>
                 <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <h4 className="titleFont">Contact us</h4>
                     <hr/>
                     <a className="whiteText" target="_blank" rel="noopener noreferrer" href="example.com"><i
                         className="fa fa-envelope-o" aria-hidden="true"></i>Email</a>
                 </div>
                 <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                     <h4 className="titleFont">Tag us</h4>
                     <hr/>
                     <p>Use the hashtag:</p>
                     <h5>#duistellos</h5>
                 </div>
                 <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontSize: '10px'}}>
                     <p>Morbi Copyright 2018</p>
                 </div>
             </div>
         );
     }
}
export default Footer;
