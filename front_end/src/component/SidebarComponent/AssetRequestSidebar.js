import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Arequest from '../Assetrequest/Assetreqside';
 
// import Assetset from './assetsetting/Assetsetside';
// import Export from './Export';
// import Notfi from './Notification';
// import Log from './Logout';

class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            {/* <Route path="/AssetRequest"   component={Arequest}/>
            <Route path="/EmployeeSetting"    component={Employee}/>
            <Route path="/AssetSetting"    component={Assetset}/>
            <Route path="/Export"    component={Export}/>
            <Route path="/Notification"    component={Notfi}/>
            <Route path="/Logout"    component={Log}/> */}
            <Arequest/>
            
            </div> 
             );
    }
}
 
export default Sidebar;