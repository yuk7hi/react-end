import React from 'react';
import AuthRoute from '../../components/AuthRoute';
import TestSub from '../../components/test/TestSub';

class Test extends React.Component {
    render() {
        return (
            <div className="Test">
                <p> some random shiet </p>

                <AuthRoute path="/home/test/testsub" component={TestSub} props={this.props} />
            </div>
        )
    }
}

export default Test;
