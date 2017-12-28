import React, { Component } from 'react';

class PercentageContainer extends Component {
  render() {
    return (
      <div>
        <h1>Title</h1>

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              1 of 2
            </div>
            <div className="col-sm-6">
              1 of 2
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-4">
              PERCENTAGE
            </div>
            <div className="col-xs-6 col-sm-4">
              PERCENTAGE
            </div>
            <div className="col-xs-6 col-sm-4">
              PERCENTAGE
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default PercentageContainer;