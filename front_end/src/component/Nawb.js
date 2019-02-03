import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink,  MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';

import Arequest from './Assetrequest/Assetreqside';
import Employee from './EmployeeSetting/Employeeside';
import Assetset from './assetsetting/Assetsetside';
import Export from './Export';
import Notfi from './Notification';
import Log from './Logout';

import Req from './Assetrequest/AssetReqForm';

import Adde from './EmployeeSetting/Add';
import Updatee from './EmployeeSetting/Update';
import Deletee from './EmployeeSetting/Delete';
import Custom from './EmployeeSetting/Custom';
import Change from './EmployeeSetting/ChangeDep';
import Alle from './EmployeeSetting/AllRecords';
import Reqe from './EmployeeSetting/AssetRequest';

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
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  // const Side = () =>
  // {
  //   return
  // }

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
        
        <Route path="/AssetRequest"   component={Arequest}/>
        <Route path="/EmployeeSetting"    component={Employee}/>
        <Route path="/AssetSetting"    component={Assetset}/>
        <Route path="/Export"    component={Export}/>
        <Route path="/Notification"    component={Notfi}/>
        <Route path="/Logout"    component={Log}/>
        
        </MDBCol>
        
        <MDBCol sm="9">
        <Switch>
        <Route path="/AssetRequest/RequestForm"   component={Req}/>
        

        <Route path="/EmployeeSetting/Add"   component={Adde}/>
        <Route path="/EmployeeSetting/Update"   component={Updatee}/>
        <Route path="/EmployeeSetting/Delete"   component={Deletee}/>
        <Route path="/EmployeeSetting/Custom"   component={Custom}/>
        <Route path="/EmployeeSetting/Change"   component={Change}/>
        <Route path="/EmployeeSetting/All"   component={Alle}/>
        <Route path="/EmployeeSetting/Req"   component={Reqe}/>

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