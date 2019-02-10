// import packages
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
//import Message from "./components/Message";
import PopUp from "./PopUp";
import axios from "axios";

class NotiMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //endpoint: "http://localhost:3001/",
      endpoint: "http://104.248.24.192:3001/",
      message: [],
      rows: [],
      assets: [],
      key : "",
      User_status : 3
    }; // this is where we are connecting to with sockets
    this.setMessage = this.setMessage.bind(this);
  }

  tableRender(){
    if(this.state.User_status===3){
      return <th scope="col"> DEPARTMENT HEAD </th>
    }
  }

  componentDidMount() {

    //axios.defaults.baseURL = this.state.url;
    // axios.defaults.headers.post['Content-Type']    =    'application/x-www-form-urlencoded';
     axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
     axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIwNTM3YWVmMDkxNzYyYzc2ZjJmOTdkNWU1Zjk4YzUyOTc0ZmY2OGY4MjExNDBlMmFmYzUyYTNkM2I1MDdlNTk4YzhiMWU4ZTcxZTQyYjk0In0.eyJhdWQiOiIxMyIsImp0aSI6IjIwNTM3YWVmMDkxNzYyYzc2ZjJmOTdkNWU1Zjk4YzUyOTc0ZmY2OGY4MjExNDBlMmFmYzUyYTNkM2I1MDdlNTk4YzhiMWU4ZTcxZTQyYjk0IiwiaWF0IjoxNTQ5ODAxMzQxLCJuYmYiOjE1NDk4MDEzNDEsImV4cCI6MTU4MTMzNzM0MSwic3ViIjoiNCIsInNjb3BlcyI6W119.JCyv_N4Fw7TgIfzLVUHb5OWrz59DcFxewHTqswV2aJ-s_Ta53MSQlQQ1UVUdUaxm6naN1D73dbOUMg-C4I-AD2yEHAJ8Sq2dCqS4AGR-H1QAbJ4HGDQXdPiRoPUgHHmfjDKPsN7kEzz1NiDdon8xfZNSAVSb-hocMFjw6kw23XqQ0QBUoTX-ZoMYxhm_3aQNJge0QJZ98z-xJEiNoyUqj0eboGAWiXwIKLQAil_zYzHU05mxcKdUDLn8IPfROUNnsdkuJuoHMoYbbx1ymwnzCBKqUGQpv_4m3nMfeK2RZ_ZKgI3VtS5t5wDFHDMBTl0DeqthqntxmlMybs2hrXoUexn_5TWtCS6scKacTu8ZJVB-GHjANFtEN90wppwRzXMhh1rZu2fCa3xJ_fQODmFUgALm4-UamiKlQ-fvnwpuRPhde1PvOHmrKsz6vX25ICU47_CZSXiS7PrNZzzyy0LvOwawKQAeJ2VqiwbnxvIZkeSo_58DbsBZLm5C18ALH9b04aXcsLhsfrSWA-7HNaoIMJrHdIQqrBt1cl4Bt7t9R7Xxzh6MCtsC8vPAZ2OscfhCWQw9z3stuJpPcyfvu9uXKSAeEcf4ZoIMAmdhgUnsZjL5z0aUM3XPW1GarZticUe4iRt8WTfckhOjaiBQoJUz_1afntGwjy67HunGF1CgBVU';
    
    var url = "http://104.248.24.192:8080/api/auth/showreq";
    if(this.state.User_status===1){url = "http://104.248.24.192:8080/api/auth/showreq";}
    if(this.state.User_status===3){url = "http://104.248.24.192:8080/api/auth/showreqforit";}
    
    axios.get(url, {
      notiId: this.state.notiId,
      responseType: this.props.value,
    })
      .then(response => {
        // handle success
        this.setState({
          key: response.id,
        })
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
      ;

      if (this.state.User_status===1) { this.setState({ key : 'assetreq'})}
      if (this.state.User_status===3) { this.setState({ key : 'assetreq_it'})}
  }

  // method for emitting a socket.io event
  send = () => {
    const socket = socketIOClient(this.state.endpoint);

    // this emits an event to the socket (your server) with an argument of 'red'
    // you can make the argument any color you would like, or any kind of data you want to send.
    
    

    socket.emit("connect", this.state.key);
    // socket.emit('change color', 'red', 'yellow') | you can have multiple arguments
  };

  setMessage(message) {
    //this.state.assets = [JSON.parse(message)];
      if (JSON.parse(message).user===1){   //set user id to filter out
          console.log(JSON.parse(message).user);
      }
    this.setState({
      assets: JSON.parse(message).requests
      //assets: message.original.requests
    });
    //this.state.message.push(JSON.parse(message).message);
    console.log(JSON.parse(message));
     //console.log(message);
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);
    // socket.on is another method that checks for incoming events from the server
    // This method is looking for the event 'change color'
    // socket.on takes a callback function for the first argument
    socket.emit("connect", "asreq");
    socket.on(this.state.key, message => {
      // getting realtime updates
      //this.state.message.push("holas");
      this.setMessage(message);
    });
    console.log(this.state.assets);
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">DATE</th>
               <th scope="col">REQUESTED EMPLOYEE</th>
               {/* {this.state.User_status===3 ? <th scope="col"> DEPARTMENT HEAD </th>:<> } */}
              {this.tableRender()}
              {/*<th scope="col">DEPARTMENT HEAD</th> */}
              <th scope="col">ASSET TYPE </th>
              <th scope="col">BRAND</th>
              <th scope="col"></th>
              {/* <th scope="col" /> */}
            </tr>
          </thead>

          <tbody>
            {console.log(this.state.assets)}
            {this.state.assets.map(function(item, id) {
              return (
                <tr key={id}>
                  <td>{item.created_at}</td>
                  <td>
                    {item.user.firstName} {item.user.lastName}
                  </td>
                  <td>{item.asset.type}</td>
                  <td>{item.asset.brandName}</td>
                  <td>
                    <PopUp value={item} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <button onClick={this.send} >connect</button> */}
      </div>
    );
  }
}

export default NotiMsg;
