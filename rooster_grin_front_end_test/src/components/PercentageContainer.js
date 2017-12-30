import React, { Component } from 'react';


class PercentageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      in: false
    };

  this.toggleEnterState = this.toggleEnterState.bind(this)
}

  toggleEnterState() {
    this.setState({ in: true })
  };


  render() {
    return (
      <div>
        <h1 className="title"><span className="first-word">PATIENT</span> TESTIMONIALS</h1>

        <div className="container">
          <div className="row row-spacing">
            <div className="col-sm-6">
              <p className="testimonial-styling">The care, patience, kindness and compassion given to him and our family have been so heartwarming and sincere the past two years. We're most grateful for the time and effort given to Geoffrey not only to create a beautiful smile but also feel inspired by the process to see how their hard work and efforts have increased his self-esteem to feel more confidant and self-assured every time he flashes his pearly whites!</p>
            </div>
            <div className="col-sm-6 button-position">
              <button type="button" className="button">Button</button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row row-spacing">
            <div className="col-xs-6 col-sm-4">
              <h1 className="percentage-styling fade">75%</h1>
              <p className="fact-styling">of all kids and teens have some type of problem when their adult teeth have "grown in"</p>
            </div>

            <div className="col-xs-6 col-sm-4">
              <h1 className="percentage-styling fade">25%</h1>
              <p className="fact-styling">of orthodontic patients have to get braces again because they didn’t wear their retainers!</p>
            </div>

            <div className="col-xs-6 col-sm-4">
              <h1 className="percentage-styling fade">80%</h1>
              <p className="fact-styling">of Americans have had a cavity by age 17</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default PercentageContainer;