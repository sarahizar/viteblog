import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    alert('Form submitted:', { name, email, message });
  };

  return (
    <section className="contact">
      <h2>Contact Me:</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="contact-line">If you prefer to not use the Contact Form- feel free to email me directly at sara.hizar@outlook.com</p>
    </section>
  );
}