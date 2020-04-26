import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export class bethetutor extends Component {
    render(){
        return(
            <div>
                
                <iframe title="GoogleForm" src="https://docs.google.com/forms/d/e/1FAIpQLScEjm1Flwgz_J2CIM--sR7VCFdt037hefNclhHBqZHTqPkHxA/viewform?embedded=true"
                frameBorder="0" 
                style = {{width : "1200px", height: "500px", frameBorder:0 ,marginheight:"0" ,marginwidth:"0"}}><Button component={Link} to="/login"></Button></iframe>

                </div>
        );
    }
}
export default connect()(bethetutor);