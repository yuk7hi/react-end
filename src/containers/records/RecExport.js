import React from 'react';

// RecExport - export a customized records to a pdf file
// For Admins (for now)
class RecExport extends React.Component {
    render() {
        console.log(this.props.isAuth);
        return (
            <div className="RecExport">
                <p>Export customized records to pdf</p>
                {/* Your component code goes here */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete these comments once your component
                    is succesfully implemented to the system */}
            </div>
        )
    }
}

export default RecExport;
