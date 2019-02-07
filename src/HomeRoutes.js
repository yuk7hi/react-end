import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import UnknownPage from './containers/UnknownPage';
// Importing containers related to Asset settings
import AssetBreakdown from './containers/assets/AssetBreakdown';
import AssetManage from './containers/assets/AssetManage';
import AssetOwned from './containers/assets/AssetOwned';
import AssetOwnedEmp from './containers/assets/AssetOwnedEmp';
import AssetPoolView from './containers/assets/AssetPoolView';
import AssetRequest from './containers/assets/AssetRequest';
import AssetRequestHandle from './containers/assets/AssetRequestHandle';
import AssetTransfer from './containers/assets/AssetTransfer';

let HomeRoutes = ({ childProps }) => (
    <Switch>
        <AuthRoute path="/home/assetbreakdown" component={AssetBreakdown} props={childProps} />
        <AuthRoute path="/home/assetmanage" component={AssetManage} props={childProps} />
        <AuthRoute path="/home/assetowned" component={AssetOwned} props={childProps} />
        <AuthRoute path="/home/assetownedemp" component={AssetOwnedEmp} props={childProps} />
        <AuthRoute path="/home/assetpool" component={AssetPoolView} props={childProps} />
        <AuthRoute path="/home/assetrequest" component={AssetRequest} props={childProps} />
        <AuthRoute path="/home/assetrequesthandle" component={AssetRequestHandle} props={childProps} />
        <AuthRoute path="/home/assettransfer" component={AssetTransfer} props={childProps} />
        
        {/* For unmatching URLs, following is the 404 page */}
        <Route component={UnknownPage} />
    </Switch>
);

export default HomeRoutes;