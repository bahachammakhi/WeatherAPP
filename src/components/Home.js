import React, { Component } from "react";
import elipse1 from "../img/Ellipse1.png";
import elipse2 from "../img/Ellipse2.png";
class Home extends Component {
    constructor(props){
        super(props)
    }
    Display=()=>{
        this.props.handleDisplay()
    }
  render() {
    return (
      <div>
        <div>
          <div className="text-center">
            <h1 className="home-header mt-3 ">Weather APP</h1>
          </div>

          <img className="elipse1" src={elipse2} />
          <div class="form-group group-home ">
            <input
              type="text"
              class="form-control form-control-m "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="City Name"
            />
            <small id="emailHelp" class="form-text text-muted">
              Search for the city .
            </small>
            <button type="button" class="btn btn-modified btn-lg btn-block mt-3" onClick={this.Display} >Get the Weather Near me</button>
          </div>
          <img className="elipse2" src={elipse1} />
        </div>
      </div>
    );
  }
}
export default Home;
