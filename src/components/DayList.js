import React, { Component } from "react";
class DayList extends Component {
  // function to get the day
  getDayOfWeek = date => {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek)
      ? null
      : [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ][dayOfWeek];
  };
  render() {
    //day name const
    const day = this.getDayOfWeek(this.props.date);
    const tempmin = this.props.tempmin.toPrecision(2);
    const tempmax = this.props.tempmax.toPrecision(2);
    return (
        <div>
            <div className="row m-auto">
        <p className="m-auto">{day}</p> 
        <p className="m-auto">{tempmax}</p>
        <p className="m-auto text-muted">{tempmin}</p>
       
        <img
          className="w m-auto"
          src={
            "http://openweathermap.org/img/wn/" + this.props.icon + "@2x.png"
          }
          alt="Iconweather"
        />
      </div> 
      <hr className="bg-dark mr-5" />
        </div>
     
    );
  }
}

export default DayList;
