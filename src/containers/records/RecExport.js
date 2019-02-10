import React from 'react';

// RecExport - export a customized records to a pdf file
// For Admins (for now)
class RecExport extends React.Component {
    render() {
        console.log(this.props.isAuth);
        return (
            <div className="RecExport">
                <p>Export customized records to pdf</p>
            </div>
        )
    }
}

export default RecExport;
