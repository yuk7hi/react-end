import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Assetset from '../assetsetting/Assetsetside';
class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Assetset/>
            </div>
         );
    }
}
 
export default Sidebar;