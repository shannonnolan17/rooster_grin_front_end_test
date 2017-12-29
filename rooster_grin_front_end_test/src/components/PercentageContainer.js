import React, { Component } from 'react';

class PercentageContainer extends Component {
  render() {
    return (
      <div>
        <h1 className="title"><span className="first-word">PATIENT</span> TESTIMONIALS</h1>

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p>What a pleasure it has been to have our son be a patient of Dr. Anne O'Day! The care, patience, kindness and compassion given to him and our family have been so heartwarming and sincere the past two years. We're most grateful for the time and effort given to Geoffrey not only to create a beautiful smile but also feel inspired by the process to see how their hard work and efforts have increased his self-esteem to feel more confidant and self-assured every time he flashes his pearly whites! Without their help and guidance, his outcome wouldn't be as profound and we are most grateful to Dr. O'Day and her incredible staff for all they have done for our family. We'll never forget their selflessness and gift of self!</p>
            </div>
            <div className="col-sm-6">
              <button type="button" className="button">Button</button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-4">
              <h1>75%</h1>
              <p>of kids have issues with their teeth</p>
            </div>
            <div className="col-xs-6 col-sm-4">
              <h1>75%</h1>
              <p>of kids have issues with their teeth</p>
            </div>
            <div className="col-xs-6 col-sm-4">
              <h1>75%</h1>
              <p>of kids have issues with their teeth</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default PercentageContainer;