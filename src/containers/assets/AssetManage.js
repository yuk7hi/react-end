import React from 'react';
import { Switch } from 'react-router-dom';
import { } from 'mdbreact';
import AuthRoute from '../../components/AuthRoute';
import AssetAdd from '../../components/AssetManage/AssetAdd';
import AssetEdit from '../../components/AssetManage/AssetEdit';
import AssetRem from '../../components/AssetManage/AssetRem';

// AssetManage - add/remove/edit assets
// For Finance
class AssetManage extends React.Component {
    render() {
        return (
            <div className="AssetManage flex-center">
                <p>Add/Remove/Edit assets</p>
                {/* Your component code goes here */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete these comments once your component
                    is succesfully implemented to the system */}
                <Switch>
                    <AuthRoute path="/home/asset_manage/add" component={AssetAdd} props={this.props} />
                    <AuthRoute path="/home/asset_manage/edit" component={AssetEdit} props={this.props} />
                    <AuthRoute path="/home/asset_manage/remove" component={AssetRem} props={this.props} />
                </Switch>
            </div>
        )
    }
}

export default AssetManage;
