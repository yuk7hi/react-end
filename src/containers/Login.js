import React from 'react';
import Axios from 'axios';
import {   
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput 
} from 'mdbreact';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            status: 0
        };
    }

    apicall() {

        let url = "http://104.248.24.192:8080/api/auth/login";
        let postData = {
            email: this.state.email,
            password: this.state.password
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "X-Requested-With": "XMLHttpRequest",
            }
        };

        Axios.post(url, postData, axiosConfig)
            .then((res) => {
                this.props.setToken(res.data.access_token);
                // console.log(this.props.accessToken);
                this.props.setAuth(true);
                Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
                Axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token;
                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }

    // Validate whether the form is filled with required data
    // before allowing submission.
    validateInput() {
        return (this.state.email.length > 0 && this.state.password.length > 0);
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.apicall();
    }

    render() {
        return (
            <div className="Login">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardHeader className="form-header tempting-azure-gradient rounded flex-center">
                                        <h3 className="my-3">
                                            <MDBIcon icon="lock" /> Login
                                        </h3>
                                    </MDBCardHeader>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Type your email"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                
                                                id="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                            <MDBInput
                                                label="Type your password"
                                                icon="lock"
                                                group
                                                type="password"
                                                validate

                                                id="password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="text-center mt-4">
                                            <MDBBtn
                                                color="elegant"
                                                className="mb-3 rounded"
                                                type="submit"

                                                disabled={!(this.validateInput())}
                                            >
                                                Login
                                        </MDBBtn>
                                        </div>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Login;
