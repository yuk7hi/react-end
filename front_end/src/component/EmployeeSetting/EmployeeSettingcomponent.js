import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Arequest from '../Assetrequest/Assetreqside';
 
// import Assetset from './assetsetting/Assetsetside';
// import Export from './Export';
// import Notfi from './Notification';
// import Log from './Logout';
import Img from '../../logo.svg';

import Adde from './employeeSettingComponents/Add';
import Update from './employeeSettingComponents/Update';
import Delete from './employeeSettingComponents/Delete';
import Custom from './employeeSettingComponents/Custom';
import Change from './employeeSettingComponents/ChangeDep';
import Alle from './employeeSettingComponents/AllRecords';
import Reqe from './employeeSettingComponents/AssetRequest';
import Mainemp from './employeeSettingComponents/Main';



class Sidebar extends Component {
    constructor(props) {
        super(props);
        
      }

    //   componentDidMount(){
    //       this.setState({
    //           x:this.props.match.params.id
    //       })
    //       console.log(this.props.match.params.id)
    //       console.log(this.state.x)
          
    //   } 

      renderSelector(e){
        switch(e){
            case "ViewOwn":
                return <Adde/>;
            case "Restore":
                return <Update/>;
            case "Break":
                return <Delete/>;
            // case "Gate":
            //     return <Gate/>;
            // case "Add":
            //     return <Add/>;
            // case "Update":
            //     return <Update/>;
            // case "Delete":
            //     return <Delete/>;
            // case "Findby":
            //     return <Findby/>;
            // case "All":
            //     return <All/>;
            // case "Break":
            //     return <img src={Img} width="1000" height="500" />;

        }
      }
    render() { 
        return ( 
            <div>
            {this.renderSelector(this.props.match.params.id)}
            </div> 
             );
    }
}
 
export default Sidebar;