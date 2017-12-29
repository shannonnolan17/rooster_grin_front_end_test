import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class ContactForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="formGroupExampleInput">Your Name</label>
            <input type="text" className="form-control" id="formGroupExampleInput" />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Your Message</label>
            <textarea type="text" className="form-control" id="formGroupExampleInput2" />
          </div>
        </form>

      </div>

    );
  }
}

export default ContactForm;