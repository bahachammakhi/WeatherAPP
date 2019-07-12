import React, { Component } from "react";
import Search from "../img/search.png";
import CloudSunny from "../img/Cloudysunny.png";
import Back from "../img/back.png";
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.city !== this.state.city) {
      this.setState({ city: nextProps.city });
    }
  }
  DisplayBack = () => {
    this.props.DisplayBack();
  };
  render() {
    return (
      <div>
        <div>
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">
              <img src={Back} onClick={this.DisplayBack} />
            </a>
            <form class="form-inline">
              <img src={Search} className="mr-3" />
            </form>
          </nav>
        </div>
        <div className="weather-header row ">
          <div className="col ml-3 mt-3">
            <h4>{this.props.city}</h4>
            <div className="row">
              <i class="fas fa-map-marker-alt mr-2 ml-3" />{" "}
              <h6>{this.props.country}</h6>
            </div>
          </div>

          <div className="col">
            <div className="row mt-3">
              <h6>{this.props.temp}°</h6>
              <i class="fas fa-cloud-sun-rain  fa-2x ml-3	 " />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Weather;
