import React from "react";
import { MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import AuthRoute from '../../components/AuthRoute';
// import Poool from "../../components/assetsComponents/D2";
import Publi from "../../components/assetsComponents/poolTables/Computerst";
import Deskt from "../../components/assetsComponents/poolTables/Desktopt";
 import Lapt from "../../components/assetsComponents/poolTables/Laptopst";
 import Upst from "../../components/assetsComponents/poolTables/Upst";
 import Com from "../../components/assetsComponents/poolTables/Componentst";
 import Other from "../../components/assetsComponents/poolTables/Otherst";

class AssetPoolView extends React.Component {
  render() {
    return (
      <div>
        {/* <p>No asset pool here, BOI!</p> */}
        <MDBContainer className="">
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              MDBDropdown
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem href="/home/assetpool/computers"> Computers</MDBDropdownItem>
              <MDBDropdownItem  href="/home/assetpool/desktops" >Desktops</MDBDropdownItem>
              <MDBDropdownItem  href="/home/assetpool/laptops" >Laptops</MDBDropdownItem>
              <MDBDropdownItem  href="/home/assetpool/ups" >Ups</MDBDropdownItem>
              <MDBDropdownItem  href="/home/assetpool/compo" >Components</MDBDropdownItem>
              <MDBDropdownItem  href="/home/assetpool/oth" >Others</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <div>
            {/* <Route path="/computers" component={Publi}/> */}
            <AuthRoute exact path="/home/assetpool/computers" component={Publi} props={this.props}/>
             <AuthRoute exact path="/home/assetpool/desktops" component={Deskt} props={this.props} />
            <AuthRoute exact path="/home/assetpool/laptops" component={Lapt} props={this.props} />
            <AuthRoute exact path="/home/assetpool/ups" component={Upst} props={this.props} />
            <AuthRoute exact path="/home/assetpool/compo" component={Com} props={this.props} />
            <AuthRoute exact path="/home/assetpool/oth" component={Other} props={this.props} /> 
          </div>
        </MDBContainer>
      </div>
    );
  }
}

export default AssetPoolView;
