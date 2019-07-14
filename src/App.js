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
      displayhome: false,
      icon: "10d"
    };
  }
  componentDidMount(){
    // Getting current location
 navigator.geolocation.getCurrentPosition(location => {
   this.setState({
     lat: location.coords.latitude,
     lon: location.coords.longitude
   })
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
  };
  getCurrentPosition=()=>{
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat="+this.state.lat+"&lon="+this.state.lon +
        "&cnt=40&units=metric&APPID=3d276dd0248a8f6d4a15500dc0dec11a"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          city: data.city.name,
        });
        this.handleCity(this.state.city)
        this.handleDisplay()
      });
      
   }
  render() {
    // home page
    const home = (
      <div className="animated slideInRigth">
        <Home getCurrentPosition={this.getCurrentPosition} handleDisplay={this.handleDisplay} handleCity={this.handleCity} />
      </div>
    );
    // second Page
    const weather = (
      <div className="weatherpage animated slideInLeft">
        <Weather
          DisplayBack={this.DisplayBack}
          city={this.state.city}
          handleCity={this.handleCity}
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
