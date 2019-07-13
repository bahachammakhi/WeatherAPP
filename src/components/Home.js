import React, { Component } from "react";
import elipse1 from "../img/Ellipse1.png";
import elipse2 from "../img/Ellipse2.png";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "tunis"
    };
  }
  Display = () => {
    this.props.handleDisplay();
    this.props.handleCity(this.state.city);
  };
  handleUserInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value // the value of the text input
    });
  };
  render() {
    return (
      <div>
        <div>
          <div className="text-center">
            <h1 className="home-header mt-3 ">Weather APP</h1>
          </div>

          <img className="elipse1" src={elipse2} alt="elipse1" />
          <div className="form-group group-home ">
            <input
              type="text"
              className="form-control form-control-m "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="City Name"
              onChange={this.handleUserInput}
              name="city"
            />
            <small id="emailHelp" className="form-text text-muted">
              Search for the city .
            </small>
            <button
              type="button"
              className="btn btn-modified btn-lg btn-block mt-3"
              onClick={this.Display}
            >
              Get the Weather Near me
            </button>
          </div>
          <img className="elipse2" src={elipse1} alt="elipse2" />
          <h1 className="home-footer ">Copyrigth Baha chammakhi</h1>
        </div>
      </div>
    );
  }
}
export default Home;
