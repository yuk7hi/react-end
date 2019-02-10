import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import UnknownPage from '../containers/UnknownPage';
// Importing containers related to Asset settings
import AssetBreakdown from '../containers/assets/AssetBreakdown';
import AssetManage from '../containers/assets/AssetManage';
import AssetOwned from '../containers/assets/AssetOwned';
import AssetPoolView from '../containers/assets/AssetPoolView';
import AssetRequest from '../containers/assets/AssetRequest';
import AssetTransfer from '../containers/assets/AssetTransfer';
// Importing containers related to Employee settings
import EmpAssets from '../containers/employees/EmpAssets';
import EmpManage from '../containers/employees/EmpManage';
import EmpRequests from '../containers/employees/EmpRequests';
import EmpView from '../containers/employees/EmpView';
// Importing containers related to Department settings

let HomeRoutes = ({ childProps }) => (
    <Switch>
        <AuthRoute path="/home/asset_breakdown" component={AssetBreakdown} props={childProps} />
        <AuthRoute path="/home/asset_manage" component={AssetManage} props={childProps} />
        <AuthRoute path="/home/asset_owned" component={AssetOwned} props={childProps} />
        <AuthRoute path="/home/asset_pool" component={AssetPoolView} props={childProps} />
        <AuthRoute path="/home/asset_request" component={AssetRequest} props={childProps} />
        <AuthRoute path="/home/asset_transfer" component={AssetTransfer} props={childProps} />
        
        <AuthRoute path="/home/emp_assets" component={EmpAssets} props={childProps} />
        <AuthRoute path="/home/emp_manage" component={EmpManage} props={childProps} />
        <AuthRoute path="/home/emp_requests" component={EmpRequests} props={childProps} />
        <AuthRoute path="/home/emp_view" component={EmpView} props={childProps} />

        <AuthRoute path="/home/dept_view" component={EmpView} props={childProps} />
        <AuthRoute path="/home/dept_manage" component={EmpView} props={childProps} />

        {/* For unmatching URLs, following is the 404 page */}
        <Route component={UnknownPage} />
    </Switch>
);

export default HomeRoutes;