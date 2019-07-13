import React, { Component } from "react";
import Search from "../img/search.png";
import Back from "../img/back.png";
import DayList from "./DayList";
class Weather extends Component {
  constructor(props) {
    super(props);
    //states
    this.state = {
      city: "Tunis",
      week: [],
      days: [],
      icon: "10d",
      description: "",
      humidity :""
    };
  }
  componentDidMount() {
    //fetching data from weather api
    //city name
    const city = this.props.city;
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
          week: data.list,
          humidity : data.list[0].main.humidity,
          days: [
            data.list[0],
            data.list[8],
            data.list[16],
            data.list[24],
            data.list[32]
          ],
          icon: data.list[0].weather[0].icon,
          description: data.list[0].weather[0].description
        });
      });
  }
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.city !== this.state.city) {
      this.setState({ city: nextProps.city });
    }
    if (nextProps.icon !== this.state.icon) {
      this.setState({ icon: nextProps.icon });
    }
  }
  //getback to home pâge
  DisplayBack = () => {
    this.props.DisplayBack();
  };
  // get the current day
  GetDay = () => {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    return n;
  };

  render() {
    // icon
    const icon = this.state.icon;
    //day
    const day = this.GetDay();
    //Day description
    const description = this.state.description;
    //Humidity 
    const humidity =  "Humidity : " +this.state.humidity + "%"
    //days list
    const dayslist = this.state.days.map(days => {
      return (
        <div>
          <DayList
            key={days.dt}
            tempmin={days.main.temp_min}
            tempmax={days.main.temp_max}
            icon={days.weather[0].icon}
            date={days.dt_txt}
          />
        </div>
      );
    });
    return (
      <div>
        <div>
          <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand">
              <img src={Back} onClick={this.DisplayBack} alt="goback" />
            </div>
            <form className="form-inline">
              <img src={Search} className="mr-3" alt="search" />
            </form>
          </nav>
        </div>
        <div className="weather-header row ">
          <div className="col ml-3 mt-3">
            <h4>{this.state.city}</h4>
            <div className="row">
              <i className="fas fa-map-marker-alt mr-2 ml-3 text-muted" />{" "}
              <h6 className="text-muted">{this.state.country}</h6>
            </div>
            <div className="row">
              <h6 className="ml-3 mt-2 font-weight-bold">{day}</h6>
              <h6 className="text-capitalize ml-3 mt-2">{description}</h6>
            </div>
            <div>
                  {humidity}
            </div>
          </div>

          <div className="col">
            <div className="row mt-3">
              {
                //Weather icon Dynamicly
              }
              <img
                src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"}
                alt="iconWeather"
              />
              <h4 className="mt-4">{this.state.temp}°</h4>
            </div>
          </div>
        </div>
        {
          //Weekly forcast
        }
        <div className="ml-3">
          <h5>Weekly forecast</h5>
          {dayslist}
        </div>
      </div>
    );
  }
}
export default Weather;
