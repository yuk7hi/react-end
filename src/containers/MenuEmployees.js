import React from 'react';
import { MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from 'mdbreact';

class MenuEmployees extends React.Component {
    all = (this.props.levelAuth === 0);
    admin = (this.props.levelAuth === 1);
    depth = (this.props.levelAuth === 2);
    finan = (this.props.levelAuth === 3);
    emplo = (this.props.levelAuth === 4);

    render() {
        return (
            <div className="MenuEmployees">
                <MDBNavItem
                    className="px-md-1"
                    hidden={!(this.admin || this.depth || this.emplo || this.all)}
                >
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <div className="d-none d-md-inline">
                                <MDBIcon icon="user-tie" /> Employees
                            </div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                            <MDBDropdownItem
                                hidden={!(this.admin || this.depth || this.all)}
                            >
                                <MDBNavLink to="/home/emp_details">Employee Details</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                hidden={!(this.admin || this.depth || this.all)}
                            >
                                <MDBNavLink to="/home/emp_assets">Employee Assets</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                hidden={!(this.admin || this.all)}
                            >
                                <MDBNavLink to="/home/emp_manage">Manage Employees</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                hidden={!(this.admin || this.depth || this.all)}
                            >
                                <MDBNavLink to="/home/emp_requests">Asset Requests</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                hidden={!(this.admin || this.depth || this.emplo || this.all)}
                            >
                                <MDBNavLink to="/home/emp_resignation">Resignnation</MDBNavLink>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </div>
        )
    }
}

export default MenuEmployees;
