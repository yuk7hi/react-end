import React, { Component } from "react";
import "./App.css";
// import Button from "./component/TestNav";
// import Appp from "./component/App";
import Auth from "./component/TestLogin";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Button /> */}
        <Auth />
        {/* <Appp /> */}
      </div>
    );
  }
}

export default App;
