import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


export class helpme extends Component {
    render(){
        return(
            <div>
                
                <iframe title="Excelsheet" src="https://docs.google.com/spreadsheets/d/1RgFmQhMMaBBzC_4463myG2ZvLXrsJKi7bFmEMcTER7c/edit?hl=en&widget=false&hl=en&ui=2&chrome=false&rm=minimal#gid=733055832"
                frameBorder="0" 
                style = {{width : "1250px", height: "500px", frameBorder:0 ,marginheight:"0" ,marginwidth:"0"}}><Button component={Link} to="/login"></Button></iframe>

                </div>
        );
    }
}
export default connect()(helpme);