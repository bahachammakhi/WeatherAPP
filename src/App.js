import React from "react";
import "./App.css";
import Home from "./components/Home";
import Weather from "./components/Weather";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "Tunis",
      Week: [],
      tempCurrently: "",
      displayhome: true,
      icon: "10d"
    };
  }
  //Function to display then nextPage
  handleDisplay = () => {
    this.setState({ displayhome: true });
  };
  DisplayBack = () => {
    this.setState({ displayhome: false });
  };
  // Function to change city from home form
  handleCity = city => {
    this.setState({
      city: city
    });
  };
  render() {
    // home page
    const home = (
      <div>
        <Home handleDisplay={this.handleDisplay} handleCity={this.handleCity} />
      </div>
    );
    // second Page
    const weather = (
      <div>
        <Weather DisplayBack={this.DisplayBack} city={this.state.city} />
      </div>
    );
    return (
      <div>
        {
          // Display one of the Pages
        }
        {this.state.displayhome ? weather : home}
      </div>
    );
  }
}

export default App;
