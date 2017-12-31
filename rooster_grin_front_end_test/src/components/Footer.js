import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer fixed-bottom">
        <div className="container-flex">
          <div className="row">
            <div className="col-md-6">
              <h5 className="title2">Footer Content</h5>
              <p className="footer-paragraph">Here you can place more information about the website</p>
            </div>
              <div className="col-md-6">
                <h5 className="title2">Links</h5>
                <ul>
                  <li className="footer-paragraph"><a href="#!">Social Media Link 1</a></li>
                  <li className="footer-paragraph"><a href="#!">Social Media Link 2</a></li>
                  <li className="footer-paragraph"><a href="#!">Social Media Link 3</a></li>
                  <li className="footer-paragraph"><a href="#!">Social Media Link 4</a></li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;