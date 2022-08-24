import React, { useState } from 'react';

import { validateEmail } from '../../helpers/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
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
  };

  return (
      <section className='contact-section'>
        <h2 data-testid="h1tag">Contact Me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className='p1 m1'>
            <label className='p1 m1' htmlFor="name">Name</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
          </div>
          <div className='p1 m1'>
            <label className='p1 m1' htmlFor="email">Email address</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
          </div>
          <div className='p1 m1'>
            <label className='p1 m1' htmlFor="message">Message</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button className="contact-submit" data-testid="button" type="submit">Submit</button>
        </form>
      </section>
    );
}

export default Contact;
