import React from 'react';
// import Routes from '../Routes';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBContainer,
    MDBCollapse,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownToggle,
    MDBMask,
    MDBView,
    MDBIcon
} from 'mdbreact';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            isOpen: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleLogout = () => {
        this.props.setAuth(false);
        // ==== ==== ==== ====
        this.props.setToken("");
        // ==== ==== ==== ====
        this.props.history.push("/login");
    }

    render() {
        return (
            <div className="Home">
                <header>
                    <MDBNavbar className="blue-gradient z-depth-1-half" light expand="md" fixed="top">
                        <MDBNavbarBrand href="/">
                            <strong>SimCentric</strong>
                        </MDBNavbarBrand>
                        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem className="px-md-1">
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <div className="d-none d-md-inline">
                                                <MDBIcon icon="box-open" /> Assets
                                            </div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default" right>
                                            <MDBDropdownItem href="#!">View Asset Pool</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">View Owned Assets</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Request Asset</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Asset Requests</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Report Breakdown</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem className="px-md-1">
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <div className="d-none d-md-inline">
                                                <MDBIcon icon="user-tie" /> Employees
                                            </div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default" right>
                                            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem className="px-md-1">
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <div className="d-none d-md-inline">
                                                <MDBIcon far icon="building" /> Departments
                                            </div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default" right>
                                            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem className="px-md-3">
                                    <MDBNavLink to="#">
                                        <MDBIcon icon="bell" />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem onClick={this.handleLogout}>
                                    <MDBNavLink to="#">
                                        <MDBIcon icon="sign-out-alt" />
                                        <strong> Logout</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>

                    <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
                        <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                            <h2>This Navbar is fixed</h2>
                            <h5>It will always stay visible on the top, even when you scroll down</h5>
                            <br />
                            <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
                        </MDBMask>
                    </MDBView>
                </header>

                <main>
                    <MDBContainer className="text-center my-5">
                        <p align="justify">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </MDBContainer>
                </main>
            </div>
        )
    }
}

export default Home;
