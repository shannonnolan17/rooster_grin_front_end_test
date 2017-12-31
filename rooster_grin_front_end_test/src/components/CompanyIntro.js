import React, { Component } from 'react';

class CompanyIntro extends Component {
  render() {
    return (
      <div className="spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-5 fade-in">
              <span className="pull-left page-item">
                <img className="grow" src={require('../images/page-icon.svg')} />
              </span>
              <span className="page-item-text">
                <p>You deserve the dedication, skill and wisdom of experience from Dr. Anne O’Day at Anne O’Day Orthodontics located in beautiful Bucks County.</p>
              </span>
            </div>
            <div className="col-md-5 fade-in">
              <span className="pull-left  page-item">
                <img className="grow" src={require('../images/page-icon.svg')} />
              </span>
              <span className="page-item-text">
                <p>Here, you can count on expert, personalized care that fits into your busy schedule, plus all of the advanced techniques and materials that make completing your treatment plan faster and easier than ever before</p>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 fade-in">
              <span className="pull-left  page-item">
                <img className="grow" src={require('../images/page-icon.svg')} />
              </span>
              <span className="page-item-text">
                <p>When it comes to straightening your teeth, you want a trusted, experienced orthodontic team who will help you and your family smile with confidence. </p>
              </span>
            </div>
            <div className="col-md-5 fade-in">
              <span className="pull-left page-item">
                <img  className="grow" src={require('../images/page-icon.svg')} />
              </span>
              <span className="page-item-text">
                <p>They also know we have a great reputation for making children and parents feel comfortable, safe and relaxed throughout their orthodontic treatment.</p>
              </span>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default CompanyIntro;