import React, { Component } from 'react';

class CompanyIntro extends Component {
  render() {
    return (
      <div>

        <div className="container">
          <div className="row">

            <div className="media col-md-6">
              <span className="media-left">
                <img src={require('../images/page-icon.svg')} />
              </span>
              <span className="media-body">
                <p>This is some content that should show up next to the little icon</p>
              </span>
            </div>

            <div className="media col-md-6">
              <span className="media-left">
                <img src={require('../images/page-icon.svg')} />
              </span>
              <span className="media-body">
                <p>This is some content that should show up next to the little icon</p>
              </span>
            </div>

          </div>

          <div className="row">

            <div className="media col-md-6">
              <span className="media-left">
                <img src={require('../images/page-icon.svg')} />
              </span>
              <span className="media-body">
                <p>This is some content that should show up next to the little icon</p>
              </span>
            </div>

            <div className="media col-md-6">
              <span className="media-left">
                <img src={require('../images/page-icon.svg')} />
              </span>
              <span className="media-body">
                <p>This is some content that should show up next to the little icon</p>
              </span>
            </div>

         </div>

        </div>

      </div>
    );
  }
}

export default CompanyIntro;