import React from 'react';

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const [errorMessage, setErrorMessage] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    const { name, email, message } = e.target.elements;
    const formData = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setFormStatus('Send');
      return;
    }

    setErrorMessage('');
    console.log(formData);
    // Perform further actions (e.g., send the form data to the server)
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Can't wait to connect with you!</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
          {errorMessage && (
            <div className="text-danger">{errorMessage}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
