import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink,  MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import axios from "axios";

// import Arequest from './Assetrequest/Assetreqside';
// import Employee from './EmployeeSetting/Employeeside';
// import Assetset from './assetsetting/Assetsetside';
// import Export from './Export';
// import Notfi from './Notification';
// import Log from './Logout';
import ARSidebar from './assetsetting/AssetSettingContents';
import EMSidebar from './SidebarComponent/EmployeeSettingSidebar';
import ASSidebar from './SidebarComponent/AssetSettingSidebar';
import EXSidebar from './SidebarComponent/ExportSidebar';

import ASContent from './assetsetting/AssetSettingContents';
import ESContent from './EmployeeSetting/EmployeeSettingcomponent';






import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      newtoken: 0,
      status:0,
      
    };
    this.onClick = this.onClick.bind(this);
    this.finduser=this.finduser.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  componentDidMount() {
    this.setState({
      newtoken: 'Bearer ' + this.props.token
  });
    this.finduser();
  }
  
finduser = () => {
    var url = "http://104.248.24.192/api/auth/user";
    var postData = {
      ContentType: 'application/json',
    };

    var axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': this.state.newtoken
        }
    };
    axios.get(url, postData, axiosConfig)
        .then((res) => {
            this.setState({
                status: res.status
                
            });
            console.log("inide the axios");
        })
        .catch((err) => {
            console.log("aiyo AXIOS ERROR: ", err);
        })
    
}


  

  render() {
    return (
      <Router>
      <MDBContainer fluid>
      <MDBRow>
        
      </MDBRow>
      <MDBRow>
        <MDBCol size="12">
        
        <div>
        <header>
          
            <MDBNavbar color="indigo" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
                <strong>SimCentric</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/AssetRequest">Asset Request</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/EmployeeSetting">Employee Setting</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/AssetSetting/ViewOwn">Asset Setting</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/Export">Export</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/Notification">Notification</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/Logout">Logout</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
           
            </MDBNavbar>
            
            
          
        </header>
        <main>
        
        </main>
      </div>


        </MDBCol>
       
      </MDBRow>

      <MDBRow >
        
        <MDBCol sm="3">
        
        <Route path="/AssetRequest"   component={ARSidebar}/>
        <Route path="/EmployeeSetting/:id"    component={EMSidebar}/>
        <Route path="/AssetSetting/:id"    component={ASSidebar}/>
        <Route path="/Export"    component={EXSidebar}/>
        
        </MDBCol>
        
        <MDBCol sm="9">
        <Switch>
        <Route path="/AssetSetting/:id"    component={ASContent}/>
        <Route path="/EmployeeSetting/:id"   component={ESContent}/>

        </Switch>
        </MDBCol>
        
       
      </MDBRow>

      
    </MDBContainer>
    </Router>

      
    );
  }
}

export default FullPageIntroWithFixedNavbar;