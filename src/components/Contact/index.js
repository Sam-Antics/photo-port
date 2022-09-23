import React, { useState }from 'react';

const ContactForm = () => {
  
  // setter and getter for useState, sets initial values to empty strings
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  // destructure formState into the form elements
  const { name, email, message } = formState;

  // syncs the internal state of the component formState with the user input from the DOM
  // onChange event listener (in name input) ensures that handleChange fires whenever a keystroke is typed in the field
  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value })
  }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formState);
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
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onChange={handleChange} name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;