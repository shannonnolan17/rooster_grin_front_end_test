import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ContactForm extends Component {
  render() {
    return (
      <div>
        <h1 className="title"><span className="first-word">CONTACT</span> US</h1>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label for="name">Your Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-inline">
            <div className="form-group">
              <label for="email">Your Email</label><br/>
              <input type="text" className="form-control"/>
            </div>

            <div className="form-group">
              <label for="number">Phone Number</label><br/>
              <input type="text" className="form-control" />
            </div>
            </div>

            <div className="form-group">
              <label for="message">Your Message</label>
              <textarea type="text" className="form-control"/>
            </div>
          </form>

        </div>
      </div>

    );
  }
}

export default ContactForm;