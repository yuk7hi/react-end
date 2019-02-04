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
import ARSidebar from './SidebarComponent/AssetRequestSidebar';
import EMSidebar from './SidebarComponent/EmployeeSettingSidebar';
import ASSidebar from './SidebarComponent/AssetSettingSidebar';
import EXSidebar from './SidebarComponent/ExportSidebar';


import Req from './Assetrequest/AssetReqForm';

// import Adde from './EmployeeSetting/Add';
// import Updatee from './EmployeeSetting/Update';
// import Deletee from './EmployeeSetting/Delete';
// import Custom from './EmployeeSetting/Custom';
// import Change from './EmployeeSetting/ChangeDep';
// import Alle from './EmployeeSetting/AllRecords';
// import Reqe from './EmployeeSetting/AssetRequest';
import Mainemp from './EmployeeSetting/Main';

import Own from './assetsetting/OwnAsset';
import Re from './assetsetting/Restore';
import Brek from './assetsetting/Brekdown';
import Gate from './assetsetting/Gatepass';
import Add from './assetsetting/Add';
import Update from './assetsetting/Update';
import Delete from './assetsetting/Delete';
import Findby from './assetsetting/Findby';
import All from './assetsetting/All';



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
    // this.postData(); 
    // this.axiosConfig();
    this.setState({
      newtoken: 'Bearer ' + this.props.token
  });
    this.finduser();
  }
  
finduser = () => {
    // fakeAuthCentralState.authenticate(() => {
    //     this.setState(() => ({
    //         redirectToReferrer: true
    //     }));
    // });
    // console.log("hllo zayn");
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
            // this.login();
            // fakeAuthCentralState.access_token=this.state.access_token;
            // this.props.history.push("/protected/dashboard");
            // console.log("RESPONSE RECEIVED: ", res);
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
                    <MDBNavLink to="/AssetSetting">Asset Setting</MDBNavLink>
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
        <Route path="/EmployeeSetting"    component={EMSidebar}/>
        <Route path="/AssetSetting"    component={ASSidebar}/>
        <Route path="/Export"    component={EXSidebar}/>
        {/* <Route path="/Notification"    component={Notfi}/>
        <Route path="/Logout"    component={Log}/>  */}
        
        </MDBCol>
        
        <MDBCol sm="9">
        <Switch>
        <Route path="/AssetRequest/RequestForm"   component={Req}/>
        

        {/* <Route path="/EmployeeSetting/Add"   component={Adde}/>
        <Route path="/EmployeeSetting/Update"   component={Updatee}/>
        <Route path="/EmployeeSetting/Delete"   component={Deletee}/>
        <Route path="/EmployeeSetting/Custom"   component={Custom}/>
        <Route path="/EmployeeSetting/Change"   component={Change}/>
        <Route path="/EmployeeSetting/All"   component={Alle}/>
        <Route path="/EmployeeSetting/Req"   component={Reqe}/> */}
        <Route path="/EmployeeSetting/Add"   component={Mainemp}/>
        <Route path="/EmployeeSetting/Update"   component={Mainemp}/>

        <Route path="/AssetSetting/ViewOwn"   component={Own}/>
        <Route path="/AssetSetting/Break"   component={Brek}/>
        <Route path="/AssetSetting/Restore"   component={Re}/>
        <Route path="/AssetSetting/Gate"   component={Gate}/>
        <Route path="/AssetSetting/Add"   component={Add}/>
        <Route path="/AssetSetting/Update"   component={Update}/>
        <Route path="/AssetSetting/Delete"   component={Delete}/>
        <Route path="/AssetSetting/Findby"   component={Findby}/>
        <Route path="/AssetSetting/All"   component={All}/>
        </Switch>
        </MDBCol>
        
       
      </MDBRow>

      
    </MDBContainer>
    </Router>

      
    );
  }
}

export default FullPageIntroWithFixedNavbar;