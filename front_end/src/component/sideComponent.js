import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import { BrowserRouter as Router , Route } from 'react-router-dom'; 

class sideComponent extends React.Component {
    constructor(props){
        super(props);
        // state{

        // }
    }

    select(){
        selecter = this.props.selecter;
        switch(selecter){
            case 0:
                // to do
                return <div></div>   
            case 1:
                // to do
                return <div></div>
            case 2:
                // to do
                return <div></div>
            case 3:
                // to do
                return <div></div>
        }
    }

    render(){
        return (
            <div>
                <Router>
                        <link></link>
                        <link></link>
                        <link></link>
                        <Route />
                </Router>
                {this.select()}
            </div>
        );
    }
}

export default sideComponent;