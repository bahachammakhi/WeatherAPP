import React from "react";
import "./App.css";
import Home from "./components/Home";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "tunis",
      Week: [],
      tempCurrently: "",
      displayhome: false
    };
  }
  //fetching Data from weather api
  componentDidMount() {
    const city = this.state.city;
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&cnt=40&units=metric&APPID=3d276dd0248a8f6d4a15500dc0dec11a"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ city: data.name, Week: data.list });
      });
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&APPID=3d276dd0248a8f6d4a15500dc0dec11a"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ city: data.name, temp: data.main.temp });
      });
  }
  //Function to display then nextPage
  handleDisplay = () => {
    this.setState({ displayhome: true });
  };
  render() {
    // home page
    const home = (
      <div>
        <Home handleDisplay={this.handleDisplay} />{" "}
      </div>
    );
    // second Page
    const weather = (
      <div>
        <h1>Page 2</h1>
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
