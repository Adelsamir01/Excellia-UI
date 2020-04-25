import React, { Component } from 'react';
import { connect } from 'react-redux';

export class bethetutor extends Component {
    render(){
        return(
            <div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScEjm1Flwgz_J2CIM--sR7VCFdt037hefNclhHBqZHTqPkHxA/viewform?embedded=true"
                frameBorder="0" 
                style = {{width : "1200px", height: "1200px", frameBorder:0 ,marginheight:"0" ,marginwidth:"0"}}>Loading…</iframe>

                </div>
        );
    }
}
export default connect()(bethetutor);