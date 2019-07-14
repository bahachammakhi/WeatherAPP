import React, { Component } from "react";
class DayList extends Component {
  // function to get the day
  getDayOfWeek = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[this.props.daynumb];
    return n;
  };
  render() {
    //day name const
    const CurrentDate = this.props.date.substring(0, 10);
    // temp min converted
    const tempmin = this.props.tempmin.toPrecision(2);
    //temp max converted
    const tempmax = this.props.tempmax.toPrecision(2);
    return (
      <div>
        <div className="row m-auto">
          <h6 className="m-auto e5dem ">{CurrentDate}</h6>
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
