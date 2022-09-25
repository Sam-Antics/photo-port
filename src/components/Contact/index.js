import React, { useState }from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {
  
  // setter and getter for useState, sets initial values to empty strings
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  // this handles the error state
  const [errorMessage, setErrorMessage] = useState('');
  // destructure formState into the form elements
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }

  // syncs the internal state of the component formState with the user input from the DOM
  // onChange event listener (in name input) ensures that handleChange fires whenever a keystroke is typed in the field
  const handleChange = (e) => {
    // validation of the email input value before syncing w/ the state
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    // state only updates if the form data has passed the quality test
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  


  // renders the form element
  return (
    <section>
      <h1>
        Contact me
      </h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;