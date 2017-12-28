import React, { Component } from 'react';

class GradientBackground extends Component {
  render() {
    return (
      <div id="box-search">

        <div className="thumbnail" >
          <img className="gradient-background img-responsive" src={require('../images/slanted-gradient-background.svg')} />
          <div className="caption">
            <h3 className="gradient-text ">A great smile is one of life's greatest assets.  Everyone deserves a smile that they can be proud of.  At Anne O'Day Orthodontics we will listen to you and guide you to the smile of your dreams!</h3>
          </div>
        </div>

      </div>
    );
  }
}

export default GradientBackground;