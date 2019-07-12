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
      displayhome: true
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
        this.setState({
          temp: data.list[0].main.temp,
          country: data.city.country,
          city: data.city.name,
          Week: data.list
        });
      });
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
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&cnt=40&units=metric&APPID=3d276dd0248a8f6d4a15500dc0dec11a"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          temp: data.list[0].main.temp,
          country: data.city.country,
          city: data.city.name,
          Week: data.list
        });
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
        <Weather
          DisplayBack={this.DisplayBack}
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
        />
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
