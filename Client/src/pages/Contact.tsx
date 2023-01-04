import React from 'react';
import '../Style/Contact.scss';

const Contact = () => {
  return (
    <div className="contact-form">
      <h1>Contact US</h1>
      <h3>Contact us using the form below:</h3>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        Message:
        <div className="Message">
        <label>
          <textarea name="message" />
        </label>
        </div>
        
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
